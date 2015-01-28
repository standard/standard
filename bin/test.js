#!/usr/bin/env node

/**
 * Clones several projects that are known to follow "JavaScript Standard Style" and runs
 * the `standard` style checker to verify that it passes without warnings. This helps
 * ensure we don't accidentally introduce new style rules that cause previously "good"
 * code to start failing with new warnings!
 */

var cp = require('child_process')
var mkdirp = require('mkdirp')
var path = require('path')
var rimraf = require('rimraf')
var series = require('run-series')

var TMP = path.join(__dirname, '..', 'tmp')
var STANDARD = path.join(__dirname, 'cmd.js')

var URLS = [
  'git@github.com:feross/webtorrent.git',
  'git@github.com:feross/bittorrent-tracker.git',
  'git@github.com:feross/bittorrent-dht.git'
]

rimraf.sync(TMP)
mkdirp.sync(TMP)

series(URLS.map(function (url) {
  return function (cb) {
    var name = /\/([^.]+)\.git$/.exec(url)[1]
    var args = [ 'clone', url, path.join(TMP, name) ]
    // TODO: Start `git` in a way that works on Windows – PR welcome!
    spawn('git', args, cb)
  }
}), function (err) {
  if (err) return error(err)
  spawn(STANDARD, [], function (err) {
    if (err) return error(err)
    console.log('ok')
  })
})

function spawn (command, args, cb) {
  var child = cp.spawn(command, args, { stdio: 'inherit' })
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
