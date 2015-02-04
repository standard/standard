#!/usr/bin/env node

/**
 * Clones several projects that are known to follow "JavaScript Standard Style" and runs
 * the `standard` style checker to verify that it passes without warnings. This helps
 * ensure we don't accidentally introduce new style rules that cause previously "good"
 * code to start failing with new warnings! (And if we do, then that needs to be a MAJOR
 * VERSION BUMP.)
 */

var cp = require('child_process')
var extend = require('extend.js')
var mkdirp = require('mkdirp')
var path = require('path')
var rimraf = require('rimraf')
var series = require('run-series')

var TMP = path.join(__dirname, 'tmp')
var STANDARD = path.join(__dirname, 'bin', 'cmd.js')

var urls = [
  'https://github.com/beatgammit/base64-js.git',
  'https://github.com/feross/bittorrent-dht.git',
  'https://github.com/feross/bittorrent-protocol.git',
  'https://github.com/feross/bittorrent-tracker.git',
  'https://github.com/feross/buffer.git',
  'https://github.com/feross/magnet-uri.git',
  'https://github.com/feross/parse-torrent.git',
  'https://github.com/feross/simple-peer.git',
  'https://github.com/feross/studynotes.git',
  'https://github.com/feross/webtorrent.git',
  'https://github.com/mafintosh/level-temp.git',
  'https://github.com/mafintosh/peerflix.git',
  'https://github.com/mafintosh/what-line-is-this.git',
  'https://github.com/brandonhorst/empty.git'
]

var modules = {}
urls.forEach(function (url) {
  var name = /\/([^.\/]+)\.git$/.exec(url)[1]
  modules[name] = url
})

rimraf.sync(TMP)
mkdirp.sync(TMP)

series(Object.keys(modules).map(function (name) {
  var url = modules[name]
  return function (cb) {
    var args = [ 'clone', url, path.join(TMP, name) ]
    // TODO: Start `git` in a way that works on Windows – PR welcome!
    spawn('git', args, {}, cb)
  }
}), runTests)

function runTests (err) {
  if (err) return error(err)
  series(Object.keys(modules).map(function (name) {
    return function (cb) {
      process.stderr.write(name + ': ')
      var cwd = path.join(TMP, name)
      spawn(STANDARD, ['--verbose'], { cwd: cwd }, function (err) {
        if (err) return cb(err)
        console.error('ok')
        cb(null)
      })
    }
  }), function (err) {
    if (err) return error(err)
  })
}

function spawn (command, args, opts, cb) {
  var child = cp.spawn(command, args, extend({ stdio: 'inherit' }, opts))
  child.on('error', error)
  child.on('close', function (code) {
    if (code !== 0) cb(new Error('non-zero exit code: ' + code))
    else cb(null)
  })
  return child
}

function error (err) {
  console.error(err.stack || err.message || err)
  process.exit(1)
}
