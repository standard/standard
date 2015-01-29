var cp = require('child_process')
var findRoot = require('find-root')
var glob = require('glob')
var Minimatch = require('minimatch').Minimatch
var path = require('path')
var split = require('split')

var JSHINT = path.join(__dirname, 'node_modules', '.bin', 'jshint')
var JSHINT_RC = path.join(__dirname, 'rc', '.jshintrc')
var JSHINT_REPORTER = path.join(__dirname, 'lib', 'jshint-reporter.js')

var JSCS = path.join(__dirname, 'node_modules', '.bin', 'jscs')
var JSCS_RC = path.join(__dirname, 'rc', '.jscsrc')
var JSCS_REPORTER = path.join(__dirname, 'lib', 'jscs-reporter.js')
var JSCS_REPORTER_VERBOSE = path.join(__dirname, 'lib', 'jscs-reporter-verbose.js')

var ESLINT = path.join(__dirname, 'node_modules', '.bin', 'eslint')
var ESLINT_RC = path.join(__dirname, 'rc', '.eslintrc')
var ESLINT_REPORTER = path.join(__dirname, 'lib', 'eslint-reporter.js')
var ESLINT_REPORTER_VERBOSE = path.join(__dirname, 'lib', 'eslint-reporter-verbose.js')

if (/^win/.test(process.platform)) {
  JSHINT += '.cmd'
  JSCS += '.cmd'
}

var DEFAULT_IGNORE = [
  'node_modules/**',
  '.git/**',
  '**/*.min.js',
  '**/bundle.js'
]

var FILE_RE = /(.*?):/
var LINE_RE = /.*?:(\d+)/
var COL_RE = /.*?:\d+:(\d+)/

module.exports = function (opts) {
  if (!opts) opts = {}
  var errors = []

  var root
  try {
    root = findRoot(process.cwd())
  } catch (e) {}

  var ignore = [].concat(DEFAULT_IGNORE) // globs to ignore

  if (root) {
    var packageOpts = require(path.join(root, 'package.json')).standard
    if (packageOpts) ignore = ignore.concat(packageOpts.ignore)
  }

  if (opts.ignore) ignore = ignore.concat(opts.ignore)

  ignore = ignore.map(function (pattern) {
    return new Minimatch(pattern)
  })

  glob('**/*.js', {
    cwd: opts.cwd || process.cwd()
  }, function (err, files) {
    if (err) return error(err)
    files = files.filter(function (file) {
      return !ignore.some(function (mm) {
        return mm.match(file)
      })
    })

    var jshintArgs = ['--config', JSHINT_RC, '--reporter', JSHINT_REPORTER]
    var jscsReporter = opts.verbose ? JSCS_REPORTER_VERBOSE : JSCS_REPORTER
    var jscsArgs = ['--config', JSCS_RC, '--reporter', jscsReporter]
    var eslintReporter = opts.verbose ? ESLINT_REPORTER_VERBOSE : ESLINT_REPORTER
    var eslintArgs = ['--config', ESLINT_RC, '--format', eslintReporter]

    if (opts.verbose) {
      jshintArgs.push('--verbose')
      jscsArgs.push('--verbose')
    }

    jshintArgs = jshintArgs.concat(files)
    jscsArgs = jscsArgs.concat(files)
    eslintArgs = eslintArgs.concat(files)

    spawn(JSHINT, jshintArgs, function (err1) {
      spawn(JSCS, jscsArgs, function (err2) {
        spawn(ESLINT, eslintArgs, function (err3) {
          done(err1 || err2 || err3)
        })
      })
    })
  })

  function spawn (command, args, cb) {
    var child = cp.spawn(command, args)
    child.on('error', error)
    child.on('close', function (code) {
      if (code !== 0) cb(new Error('non-zero exit code: ' + code))
      else cb(null)
    })
    stderrPipe(child.stdout)
    stderrPipe(child.stderr)
    return child
  }

  function stderrPipe (readable) {
    readable
      .pipe(split())
      .on('data', function (line) {
        if (line === '') return
        errors.push(line)
      })
  }

  function done (err) {
    if (!err) return
    if (opts.bare) {
      errors.forEach(function (str) {
        console.error(str)
      })
      return
    }

    console.error('Error: Code style check failed:')
    var errMap = {}
    errors
      .filter(function (str) { // de-duplicate errors
        if (errMap[str]) return false
        errMap[str] = true
        return true
      })
      .sort(function (a, b) {
        // sort by line number (merges jshint and jscs output)
        var fileA = FILE_RE.exec(a)[1]
        var fileB = FILE_RE.exec(b)[1]

        var lineA = Number(LINE_RE.exec(a)[1])
        var lineB = Number(LINE_RE.exec(b)[1])

        var colA = Number(COL_RE.exec(a)[1])
        var colB = Number(COL_RE.exec(b)[1])

        if (fileA !== fileB) return fileA < fileB ? -1 : 1
        if (lineA !== lineB) return lineA - lineB
        return colA - colB
      })
      .forEach(function (str) {
        console.error('  ' + str) // indent
      })
    process.exit(1)
  }
}

function error (err) {
  console.error(err.stack || err.message || err)
  process.exit(1)
}
