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

var GIT = 'git'
var STANDARD = path.join(__dirname, '..', 'bin', 'cmd.js')
var TMP = path.join(__dirname, '..', 'tmp')

var PARALLEL_LIMIT = Math.min(os.cpus().length * 1.5)

var URLS = [
  /**
   * IF YOUR REPO USES STANDARD STYLE, PLEASE SUBMIT A PR WITH THE URL!
   */
  'https://github.com/ahmadnassri/echint.git',
  'https://github.com/ahmadnassri/forwarded-http.git',
  'https://github.com/ahmadnassri/har-convert.git',
  'https://github.com/ahmadnassri/har-expander.git',
  'https://github.com/ahmadnassri/har-validator.git',
  'https://github.com/ahmadnassri/har.git',
  'https://github.com/ahmadnassri/metalsmith-imagemin.git',
  'https://github.com/ahmadnassri/metalsmith-jade.git',
  'https://github.com/ahmadnassri/metalsmith-paths.git',
  'https://github.com/ahmadnassri/metalsmith-request.git',
  'https://github.com/ahmadnassri/node-clone-benchmark.git',
  'https://github.com/ahmadnassri/pkg-config.git',
  'https://github.com/ahmadnassri/stringify-clone.git',
  'https://github.com/ahmadnassri/winston-tcp.git',
  'https://github.com/beatgammit/base64-js.git',
  'https://github.com/brandonhorst/coverage-test.git',
  'https://github.com/cjb/GitTorrent.git',
  'https://github.com/feross/available.git',
  'https://github.com/feross/bittorrent-dht.git',
  'https://github.com/feross/bittorrent-protocol.git',
  'https://github.com/feross/bittorrent-swarm.git',
  'https://github.com/feross/bittorrent-tracker.git',
  'https://github.com/feross/blob-to-buffer.git',
  'https://github.com/feross/buffer.git',
  'https://github.com/feross/create-torrent.git',
  'https://github.com/feross/downgrade.git',
  'https://github.com/feross/drag-drop.git',
  'https://github.com/feross/ieee754.git',
  'https://github.com/feross/instant.io.git',
  'https://github.com/feross/is-buffer.git',
  'https://github.com/feross/load-ip-set.git',
  'https://github.com/feross/magnet-uri.git',
  'https://github.com/feross/multistream.git',
  'https://github.com/feross/parse-torrent-file.git',
  'https://github.com/feross/parse-torrent.git',
  'https://github.com/feross/run-auto.git',
  'https://github.com/feross/run-parallel-limit.git',
  'https://github.com/feross/run-parallel.git',
  'https://github.com/feross/run-series.git',
  'https://github.com/feross/run-waterfall.git',
  'https://github.com/feross/simple-peer.git',
  'https://github.com/feross/simple-websocket.git',
  'https://github.com/feross/snazzy.git',
  'https://github.com/feross/standard-www.git',
  'https://github.com/feross/studynotes.git',
  'https://github.com/feross/torrent-discovery.git',
  'https://github.com/feross/typedarray-to-buffer.git',
  'https://github.com/feross/unlimited.git',
  'https://github.com/feross/webtorrent-hybrid.git',
  'https://github.com/feross/webtorrent-www.git',
  'https://github.com/feross/webtorrent.git',
  'https://github.com/feross/whiteboard.git',
  'https://github.com/Flet/battery.git',
  'https://github.com/Flet/clockmoji.git',
  'https://github.com/Flet/dailyconnect.git',
  'https://github.com/Flet/exitzero.git',
  'https://github.com/Flet/standard-engine.git',
  // 'https://github.com/karma-runner/karma-coverage.git',
  'https://github.com/mafintosh/airpaste.git',
  'https://github.com/mafintosh/chromecasts.git',
  'https://github.com/mafintosh/cyclist.git',
  'https://github.com/mafintosh/difffs.git',
  'https://github.com/mafintosh/fuse-bindings.git',
  'https://github.com/mafintosh/hms-protocol.git',
  // 'https://github.com/mafintosh/hms.git',
  // 'https://github.com/mafintosh/hyperlog.git',
  'https://github.com/mafintosh/idlecast.git',
  'https://github.com/mafintosh/json-format-stream.git',
  'https://github.com/mafintosh/level-enumerate.git',
  'https://github.com/mafintosh/level-logs.git',
  'https://github.com/mafintosh/level-temp.git',
  // 'https://github.com/mafintosh/multileveldown.git',
  // 'https://github.com/mafintosh/node-gyp-install.git',
  // 'https://github.com/mafintosh/pbs.git',
  'https://github.com/mafintosh/random-iterate.git',
  'https://github.com/mafintosh/sorted-intersect-stream.git',
  'https://github.com/mafintosh/ssh-exec.git',
  'https://github.com/mafintosh/swap-to-level.git',
  'https://github.com/mafintosh/telephone.git',
  'https://github.com/mafintosh/transport-stream.git',
  'https://github.com/mafintosh/what-line-is-this.git',
  'https://github.com/Mashape/alf-validator.git',
  'https://github.com/Mashape/httpsnippet.git',
  'https://github.com/maxogden/atomic-queue.git',
  // 'https://github.com/maxogden/dat-core.git',
  'https://github.com/maxogden/dat.git',
  'https://github.com/maxogden/dependency-check.git',
  'https://github.com/maxogden/electron-packager.git',
  'https://github.com/maxogden/requirebin.git',
  'https://github.com/maxogden/screencat.git',
  'https://github.com/maxogden/standard-format.git',
  'https://github.com/maxogden/tape-spawn.git',
  'https://github.com/maxogden/temporary-directory.git',
  'https://github.com/maxogden/torrent.git',
  'https://github.com/mcollina/fastfall.git',
  'https://github.com/mcollina/fastparallel.git',
  'https://github.com/mcollina/fastq.git',
  'https://github.com/mcollina/fastseries.git',
  'https://github.com/mcollina/hyperemitter.git',
  'https://github.com/mcollina/mqemitter-mongodb.git',
  'https://github.com/mcollina/mqemitter-p2p.git',
  'https://github.com/mcollina/mqemitter-redis.git',
  'https://github.com/mcollina/mqemitter.git',
  'https://github.com/mcollina/pruneold.git',
  'https://github.com/moose-team/friends-swarm.git',
  'https://github.com/moose-team/friends.git',
  'https://github.com/moose-team/peerbot.git',
  'https://github.com/motdotla/dotenv.git',
  'https://github.com/ngoldman/changelog-parser.git',
  'https://github.com/ngoldman/gh-release.git',
  'https://github.com/ngoldman/magnet-link.git',
  'https://github.com/ngoldman/module-init.git',
  'https://github.com/ngoldman/wireframe.css.git',
  'https://github.com/npm/fstream.git',
  // 'https://github.com/npm/npm.git',
  // 'https://github.com/npm/docs.git',
  'https://github.com/npm/fstream-npm.git',
  'https://github.com/othiym23/nothingness-level.git',
  'https://github.com/othiym23/nothingness.git',
  'https://github.com/yoshuawuyts/assert-npm-version.git',
  'https://github.com/yoshuawuyts/brick-router.git',
  'https://github.com/yoshuawuyts/brick-server.git',
  // 'https://github.com/yoshuawuyts/event-bulk-attach.git',
  'https://github.com/yoshuawuyts/fat-arrow.git',
  'https://github.com/yoshuawuyts/from2-string.git',
  'https://github.com/yoshuawuyts/fsm-event.git',
  'https://github.com/yoshuawuyts/koa-logger-ndjson.git',
  'https://github.com/yoshuawuyts/mdjson.git',
  'https://github.com/yoshuawuyts/promise-assert.git',
  'https://github.com/yoshuawuyts/simple-store.git',
  'https://github.com/yoshuawuyts/urit.git',
  'https://github.com/yoshuawuyts/virtual-raf.git',
  'https://github.com/yoshuawuyts/vmd.git',
  'https://github.com/yoshuawuyts/wayfarer.git',
  'https://github.com/yoshuawuyts/year-of-code.git'
]

var MODULES = {}
URLS.forEach(function (url) {
  var name = /\/([^\/]+)\.git$/.exec(url)[1]
  MODULES[name] = url
})

test('test github repos that use `standard`', function (t) {
  t.plan(URLS.length)

  mkdirp.sync(TMP)

  // test an empty repo
  mkdirp.sync(path.join(TMP, 'empty'))

  parallelLimit(Object.keys(MODULES).map(function (name) {
    var url = MODULES[name]
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
