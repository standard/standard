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
var fs = require('fs')
var mkdirp = require('mkdirp')
var os = require('os')
var parallelLimit = require('run-parallel-limit')
var path = require('path')
var test = require('tape')
var testPackages = require('standard-packages/test')

testPackages = testPackages.filter(function (pkg) { return !pkg.disable })

var GIT = 'git'
var STANDARD = path.join(__dirname, '..', 'bin', 'cmd.js')
var TMP = path.join(__dirname, '..', 'tmp')

var PARALLEL_LIMIT = Math.min(os.cpus().length * 1.5)

test('test github repos that use `standard`', function (t) {
  t.plan(testPackages.length)

  mkdirp.sync(TMP)

  // test an empty repo
  mkdirp.sync(path.join(TMP, 'empty'))

  parallelLimit(testPackages.map(function (pkg) {
    var name = pkg.name
    var url = pkg.repo + '.git'
    var folder = path.join(TMP, name)
    return function (cb) {
      fsAccess(path.join(TMP, name), fs.R_OK | fs.W_OK, function (err) {
        var gitArgs = err
          ? [ 'clone', '--depth', 1, url, path.join(TMP, name) ]
          : [ 'pull' ]
        var gitOpts = err
          ? {}
          : { cwd: folder }
        spawn(GIT, gitArgs, gitOpts, function (err) {
          if (err) {
            err.message += ' (' + name + ')'
            return cb(err)
          }

          spawn(STANDARD, [ '--verbose' ], { cwd: folder }, function (err) {
            t.error(err, name)
            cb(null)
          })
        })
      })
    }
  }), PARALLEL_LIMIT, function (err) {
    if (err) throw err
  })
})

// TODO: Spawn in a way that works on Windows – PR welcome!
function spawn (command, args, opts, cb) {
  var child = cp.spawn(command, args, extend({ stdio: 'inherit' }, opts))
  child.on('error', cb)
  child.on('close', function (code) {
    if (code !== 0) cb(new Error('non-zero exit code: ' + code))
    else cb(null)
  })
  return child
}

function fsAccess (path, mode, cb) {
  if (typeof fs.access === 'function') {
    fs.access(path, mode, cb)
  } else {
    fs.stat(path, cb)
  }
}
