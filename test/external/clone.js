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
const os = require('os')
const parallelLimit = require('run-parallel-limit')
const path = require('path')
const test = require('tape')
const testPkgs = require('./test.json')

const GIT = 'git'
const NPM = 'npm'
const STANDARD = path.join(__dirname, '..', '..', 'bin', 'cmd.js')
const TMP = path.join(__dirname, '..', '..', 'tmp')
const PARALLEL_LIMIT = Math.ceil(os.cpus().length / 2)

const argv = minimist(process.argv.slice(2), {
  boolean: [
    'disabled',
    'offline',
    'quick',
    'quiet',
    'fix',
    'write'
  ]
})

let pkgs = testPkgs

const disabledPkgs = []
pkgs = pkgs.filter(pkg => {
  if (pkg.disable) disabledPkgs.push(pkg)
  return !pkg.disable
})

if (argv.disabled) {
  pkgs = disabledPkgs
}

pkgs = argv.quick
  ? pkgs.slice(0, 20)
  : pkgs

if (!argv.disabled) {
  test('Disabled Packages', t => {
    disabledPkgs.forEach(pkg => {
      console.log(`DISABLED: ${pkg.name}: ${pkg.disable} (${pkg.repo})`)
    })
    t.end()
  })
}

test('test github repos that use `standard`', t => {
  t.plan(pkgs.length)

  fs.mkdirSync(TMP, { recursive: true })

  parallelLimit(pkgs.map(pkg => {
    const name = pkg.name
    const url = `${pkg.repo}.git`
    const folder = path.join(TMP, name)
    return cb => {
      fs.access(path.join(TMP, name), fs.R_OK | fs.W_OK, err => {
        if (argv.offline && err) {
          t.pass(`SKIPPING (offline): ${name} (${pkg.repo})`)
          cb(null)
        } else if (argv.offline) {
          runStandard(cb)
        } else {
          const downloadPackage = err ? gitClone : gitPull
          downloadPackage(err => {
            if (err) return cb(err)
            if (pkg.install) {
              npmInstall(err => {
                if (err) return cb(err)
                runStandard(cb)
              })
            } else {
              runStandard(cb)
            }
          })
        }

        function gitClone (cb) {
          const args = ['clone', '--depth', 1, url, path.join(TMP, name)]
          spawn(GIT, args, { stdio: 'ignore' }, err => {
            if (err) err.message += ` (git clone) (${name})`
            cb(err)
          })
        }

        function gitPull (cb) {
          const args = ['pull']
          spawn(GIT, args, { cwd: folder, stdio: 'ignore' }, err => {
            if (err) err.message += ` (git pull) (${name})`
            cb(err)
          })
        }

        function npmInstall (cb) {
          const args = ['install']
          spawn(NPM, args, { cwd: folder, stdio: 'ignore' }, err => {
            if (err) err.message += ` (npm install) (${name})`
            cb(err)
          })
        }

        function runStandard (cb) {
          const args = [STANDARD, '--verbose']
          if (pkg.args) args.push(...pkg.args)
          spawn('node', args, { cwd: folder }, err => {
            const str = `${name} (${pkg.repo})`
            if (err && argv.fix) {
              t.comment(`Attempting --fix on ${str}`)
              runStandardFix(cb)
            } else if (err) {
              markDisabled(name, true)
              t.fail(str)
              cb(null)
            } else {
              markDisabled(name, false)
              t.pass(str)
              cb(null)
            }
          })
        }

        function runStandardFix (cb) {
          const args = [STANDARD, '--fix', '--verbose']
          if (pkg.args) args.push(...pkg.args)
          spawn('node', args, { cwd: folder }, err => {
            const str = `${name} (${pkg.repo}) ** with --fix`
            if (err) { t.fail(str) } else { t.pass(str) }
            runGitReset(cb)
          })
        }

        function runGitReset (cb) {
          const args = ['reset', '--hard']
          spawn(GIT, args, { cwd: folder }, err => {
            if (err) err.message += ` (git reset) (${name})`
            // Fatal error if can't git reset
            cb(err)
          })
        }

        function markDisabled (name, disabled) {
          const pkg = testPkgs.find(pkg => pkg.name === name)
          if (disabled) {
            pkg.disable = disabled
          } else {
            delete pkg.disable
          }
        }
      })
    }
  }), PARALLEL_LIMIT, err => {
    if (err) throw err
    if (argv.write) {
      fs.writeFileSync(
        path.join(__dirname, 'test.json'),
        JSON.stringify(testPkgs, null, 2)
      )
    }
  })
})

function spawn (command, args, opts, cb) {
  if (!opts.stdio) opts.stdio = argv.quiet ? 'ignore' : 'inherit'

  const child = crossSpawn(command, args, opts)
  child.on('error', cb)
  child.on('close', code => {
    if (code !== 0) return cb(new Error(`non-zero exit code: ${code}`))
    cb(null)
  })
  return child
}
