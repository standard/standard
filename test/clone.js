/**
 * Clones several projects that are known to follow "JavaScript Standard Style" and runs
 * the `standard` style checker to verify that it passes without warnings. This helps
 * ensure we don't accidentally introduce new style rules that cause previously "good"
 * code to start failing with new warnings! (And if we do, then that needs to be a MAJOR
 * VERSION BUMP.)
 */

const crossSpawn = require('cross-spawn')
const fs = require('fs')
const minimist = require('minimist')
const mkdirp = require('mkdirp')
const os = require('os')
const parallelLimit = require('run-parallel-limit')
const path = require('path')
const standardPackages = require('standard-packages')
const test = require('tape')

const GIT = 'git'
const STANDARD = path.join(__dirname, '..', 'standard')
const TMP = path.join(__dirname, '..', 'tmp')
const PARALLEL_LIMIT = os.cpus().length

const { quick, disabled, offline, quiet } = minimist(process.argv.slice(2), {
  boolean: [
    'disabled',
    'offline',
    'quick',
    'quiet'
  ]
})

let testPackages = quick
  ? standardPackages.test.slice(0, 20)
  : standardPackages.test

const disabledPackages = []
testPackages = testPackages.filter((pkg) => {
  if (pkg.disable) disabledPackages.push(pkg)
  return !pkg.disable
})

if (disabled) {
  testPackages = disabledPackages
} else {
  test('Disabled Packages', (t) => {
    if (disabledPackages.length === 0) {
      t.pass('no disabled packages')
      t.end()
    } else {
      t.plan(disabledPackages.length)
      disabledPackages.forEach((pkg) => {
        t.pass('DISABLED: ' + pkg.name + ': ' + pkg.disable + ' (' + pkg.repo + ')')
      })
    }
  })
}

test('test github repos that use `standard`', (t) => {
  t.plan(testPackages.length)

  mkdirp.sync(TMP)

  parallelLimit(testPackages.map((pkg) => {
    const name = pkg.name
    const url = pkg.repo + '.git'
    const folder = path.join(TMP, name)
    return (cb) => {
      fs.access(path.join(TMP, name), fs.R_OK | fs.W_OK, (err) => {
        if (offline) {
          if (err) {
            t.pass('SKIPPING (offline): ' + name + ' (' + pkg.repo + ')')
            return cb(null)
          }
          runStandard(cb)
        } else {
          downloadPackage((err) => {
            if (err) return cb(err)
            runStandard(cb)
          })
        }

        function downloadPackage (cb) {
          if (err) gitClone(cb)
          else gitPull(cb)
        }

        function gitClone (cb) {
          const args = [ 'clone', '--depth', 1, url, path.join(TMP, name) ]
          spawn(GIT, args, { stdio: 'ignore' }, (err) => {
            if (err) err.message += ' (git clone) (' + name + ')'
            cb(err)
          })
        }

        function gitPull (cb) {
          const args = [ 'pull' ]
          spawn(GIT, args, { cwd: folder, stdio: 'ignore' }, (err) => {
            if (err) err.message += ' (git pull) (' + name + ')'
            cb(err)
          })
        }

        function runStandard (cb) {
          const args = [ '--verbose' ]
          if (pkg.args) args.push.apply(args, pkg.args)
          spawn(STANDARD, args, { cwd: folder }, (err) => {
            const str = name + ' (' + pkg.repo + ')'
            if (err) { t.fail(str) } else { t.pass(str) }
            cb(null)
          })
        }
      })
    }
  }), PARALLEL_LIMIT, (err) => {
    if (err) throw err
  })
})

function spawn (command, args, opts, cb) {
  if (!opts.stdio) opts.stdio = quiet ? 'ignore' : 'inherit'

  const child = crossSpawn(command, args, opts)
  child.on('error', cb)
  child.on('close', (code) => {
    if (code !== 0) return cb(new Error('non-zero exit code: ' + code))
    cb(null)
  })
  return child
}
