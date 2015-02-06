var cp = require('child_process')
var findRoot = require('find-root')
var glob = require('glob')
var Minimatch = require('minimatch').Minimatch
var parallel = require('run-parallel')
var path = require('path')
var split = require('split')
var uniq = require('uniq')

var JSCS_RC = path.join(__dirname, 'rc', '.jscsrc')
var JSCS_REPORTER = path.join(__dirname, 'lib', 'jscs-reporter.js')
var JSCS_REPORTER_VERBOSE = path.join(__dirname, 'lib', 'jscs-reporter-verbose.js')

var ESLINT_RC = path.join(__dirname, 'rc', '.eslintrc')
var ESLINT_REPORTER = path.join(__dirname, 'lib', 'eslint-reporter.js')
var ESLINT_REPORTER_VERBOSE = path.join(__dirname, 'lib', 'eslint-reporter-verbose.js')

var DEFAULT_IGNORE = [
  'node_modules/**',
  '.git/**',
  '**/*.min.js',
  '**/bundle.js',
  'coverage/**'
]

var ERROR_RE = /.*?:\d+:\d+/
var FILE_RE = /(.*?):/
var LINE_RE = /.*?:(\d+)/
var COL_RE = /.*?:\d+:(\d+)/

/**
 * JavaScript Standard Style
 * @param {Object} opts                        options object
 * @param {string|Array.<String>} opts.ignore  files to ignore
 * @param {boolean} opts.bare                  show raw linter output (for debugging)
 * @param {string} opts.cwd                    current working directory
 * @param {Array.<string>} files               files to check
 * @param {boolean} opts.stdin                 check text from stdin instead of filesystem
 * @param {boolean} opts.verbose               show error codes
 */
module.exports = function standard (opts) {
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

  var jscsReporter = opts.verbose ? JSCS_REPORTER_VERBOSE : JSCS_REPORTER
  var jscsArgs = ['--config', JSCS_RC, '--reporter', jscsReporter]

  var eslintReporter = opts.verbose ? ESLINT_REPORTER_VERBOSE : ESLINT_REPORTER
  var eslintArgs = ['--config', ESLINT_RC, '--format', eslintReporter]

  if (opts.verbose) {
    jscsArgs.push('--verbose')
  }

  if (opts.stdin) {
    // stdin
    eslintArgs.push('--stdin')
    lint()
  } else {
    var patterns = (Array.isArray(opts.files) && opts.files.length > 0)
      ? opts.files
      : [ '**/*.js' ]

    // traverse filesystem
    if (opts.ignore) ignore = ignore.concat(opts.ignore)

    ignore = ignore.map(function (pattern) {
      return new Minimatch(pattern)
    })

    parallel(patterns.map(function (pattern) {
      return function (cb) {
        glob(pattern, {
          cwd: opts.cwd || process.cwd(),
          nodir: true
        }, cb)
      }
    }), function (err, results) {
      if (err) return error(err)

      // flatten nested arrays
      var files = results.reduce(function (files, result) {
        result.forEach(function (file) {
          files.push(file)
        })
        return files
      }, [])

      // apply ignore patterns
      files = files.filter(function (file) {
        return !ignore.some(function (mm) {
          return mm.match(file)
        })
      })

      // de-dupe
      files = uniq(files)
      if (files.length > 0) {
        jscsArgs = jscsArgs.concat(files)
        eslintArgs = eslintArgs.concat(files)
        lint()
      }
    })
  }

  function lint () {
    findBinPaths(function (err, paths) {
      if (err) return error(err)
      parallel([
        spawn.bind(undefined, paths.jscs, jscsArgs),
        spawn.bind(undefined, paths.eslint, eslintArgs)
      ], function (err, r) {
        if (err) return error(err)
        if (r.some(Boolean)) printErrors()
      })
    })
  }

  function findBinPaths (cb) {
    parallel({
      eslint: findBinPath.bind(undefined, 'eslint'),
      jscs: findBinPath.bind(undefined, 'jscs')
    }, cb)
  }

  function findBinPath (bin, cb) {
    var opts = { cwd: __dirname }
    cp.exec('npm run --silent which-' + bin, opts, function (err, stdout, stderr) {
      if (err) return cb(err)
      cb(null, stdout.toString().replace(/\n/g, ''))
    })
  }

  function spawn (command, args, cb) {
    var child = cp.spawn(command, args)
    child.on('error', cb)
    child.on('close', function (code) {
      cb(null, code)
    })
    if (opts.stdin) process.stdin.pipe(child.stdin)
    stderrPipe(child.stdout)
    stderrPipe(child.stderr)
  }

  function stderrPipe (readable) {
    readable
      .pipe(split())
      .on('data', function (line) {
        if (line === '') return
        errors.push(line)
      })
  }

  function printErrors () {
    if (opts.bare) {
      errors.forEach(function (str) {
        console.error(str)
      })
      return
    }

    console.error('Error: Code style check failed:')
    var unexpectedOutput = []
    var errMap = {}
    errors
      .map(function (str) { // normalize stdin "filename"
        return str.replace(/^(<text>|input)/, 'stdin')
      })
      .filter(function (str) {
        // don't process unexpected/malformed output, just print it at the end
        if (!ERROR_RE.test(str)) {
          unexpectedOutput.push(str)
          return false
        }

        // de-duplicate errors
        if (errMap[str]) return false
        errMap[str] = true
        return true
      })
      .sort(function (a, b) {
        // sort by line number (merges output from all linters)
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

    if (unexpectedOutput.length) console.error('\nUnexpected Linter Output:')
    unexpectedOutput.forEach(function (str) {
      console.error(str)
    })

    process.exit(1)
  }
}

function error (err) {
  console.error(err.stack || err.message || err)
  process.exit(1)
}
