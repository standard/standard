#!/usr/bin/env node

/**
 * Clones several projects that are known to follow "JavaScript Standard Style" and runs
 * the `standard` style checker to verify that it passes without warnings. This helps
 * ensure we don't accidentally introduce new style rules that cause previously "good"
 * code to start failing with new warnings! (And if we do, then that needs to be a MAJOR
 * VERSION BUMP.)
 */

var cp = require('child_process')
var extend = require('xtend')
var mkdirp = require('mkdirp')
var path = require('path')
var rimraf = require('rimraf')
var series = require('run-series')
var test = require('tape')

var TMP = path.join(__dirname, '..', 'tmp')
var STANDARD = path.join(__dirname, '..', 'bin', 'cmd.js')

var URLS = [
  'https://github.com/beatgammit/base64-js.git',
  'https://github.com/brandonhorst/coverage-test.git',
  'https://github.com/brandonhorst/empty.git',
  'https://github.com/feross/bittorrent-dht.git',
  'https://github.com/feross/bittorrent-protocol.git',
  'https://github.com/feross/bittorrent-tracker.git',
  'https://github.com/feross/buffer.git',
  'https://github.com/feross/magnet-uri.git',
  'https://github.com/feross/parse-torrent.git',
  'https://github.com/feross/simple-peer.git',
  'https://github.com/feross/studynotes.git',
  'https://github.com/feross/webtorrent.git',
  'https://github.com/Flet/dailyconnect.git',
  'https://github.com/Flet/exitzero.git',
  'https://github.com/mafintosh/hms-protocol.git',
  'https://github.com/mafintosh/hms.git',
  'https://github.com/mafintosh/json-format-stream.git',
  'https://github.com/mafintosh/level-enumerate.git',
  'https://github.com/mafintosh/level-logs.git',
  'https://github.com/mafintosh/level-temp.git',
  'https://github.com/mafintosh/node-gyp-install.git',
  // 'https://github.com/mafintosh/peerflix.git', // still using standard v2
  'https://github.com/mafintosh/swap-to-level.git',
  'https://github.com/mafintosh/telephone.git',
  'https://github.com/mafintosh/what-line-is-this.git',
  // 'https://github.com/maxogden/dat-core.git', // started failing 5-29-15
  'https://github.com/maxogden/standard-format.git',
  // 'https://github.com/ngoldman/gh-release.git', // still using standard v2
  'https://github.com/ngoldman/magnet-link.git',
  'https://github.com/ngoldman/wireframe.css.git',
  'https://github.com/npm/fstream.git',
  // 'https://github.com/npm/npm.git' // in progress
  'https://github.com/othiym23/packard.git'
]

var MODULES = {}
URLS.forEach(function (url) {
  var name = /\/([^\/]+)\.git$/.exec(url)[1]
  MODULES[name] = url
})

test('clone repos from github', function (t) {
  t.plan(1)
  rimraf.sync(TMP)
  mkdirp.sync(TMP)

  series(Object.keys(MODULES).map(function (name) {
    var url = MODULES[name]
    return function (cb) {
      var args = [ 'clone', '--depth', 1, url, path.join(TMP, name) ]
      // TODO: Start `git` in a way that works on Windows – PR welcome!
      spawn('git', args, {}, cb)
    }
  }), function (err) {
    if (err) throw err
    t.pass('cloned repos')
  })
})

test('lint repos', function (t) {
  t.plan(URLS.length)
  series(Object.keys(MODULES).map(function (name) {
    return function (cb) {
      var cwd = path.join(TMP, name)
      spawn(STANDARD, [], { cwd: cwd }, function (err) {
        t.error(err, name)
        cb(null)
      })
    }
  }))
})

function spawn (command, args, opts, cb) {
  var child = cp.spawn(command, args, extend({ stdio: 'inherit' }, opts))
  child.on('error', cb)
  child.on('close', function (code) {
    if (code !== 0) cb(new Error('non-zero exit code: ' + code))
    else cb(null)
  })
  return child
}
