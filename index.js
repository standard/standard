var cp = require('child_process')
var findRoot = require('find-root')
var glob = require('glob')
var Minimatch = require('minimatch').Minimatch
var path = require('path')
var split = require('split')

var JSHINT = path.join(__dirname, 'node_modules', '.bin', 'jshint')
var JSHINTRC = path.join(__dirname, 'lib', '.jshintrc')

var JSCS = path.join(__dirname, 'node_modules', '.bin', 'jscs')
var JSCSRC = path.join(__dirname, 'lib', '.jscsrc')
var JSCS_REPORTER = path.join(__dirname, 'lib', 'jscs-reporter.js')

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
  var errors = []
  var root
  try {
    root = findRoot(process.cwd())
  } catch (e) {}

  var ignore = [].concat(DEFAULT_IGNORE) // globs to ignore
  if (root) {
    var packageOpts = require(path.join(root, 'package.json')).standard
    if (packageOpts) {
      if (typeof packageOpts.ignore === 'string') {
        ignore.push(packageOpts.ignore)
      } else if (Array.isArray(packageOpts.ignore)) {
        ignore = ignore.concat(packageOpts.ignore)
      } else {
        throw new Error('`standard.ignore` package.json property should be string or array')
      }
    }
  }
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

    var jshintArgs = ['--config', JSHINTRC, '--reporter', 'unix'].concat(files)
    var jscsArgs = ['--config', JSCSRC, '--reporter', JSCS_REPORTER].concat(files)

    var jshint = spawn(JSHINT, jshintArgs, function (jshintErr) {
      var jscs = spawn(JSCS, jscsArgs, function (jscsErr) {
        if (jshintErr || jscsErr) {
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
      })

      stderrPipe(jscs.stdout)
      stderrPipe(jscs.stderr)
    })

    stderrPipe(jshint.stdout)
    stderrPipe(jshint.stderr)
  })

  function stderrPipe (readable) {
    readable
      .pipe(split())
      .on('data', function (line) {
        if (line === '') return
        if (/^\d+ errors?/.test(line)) return
        errors.push(line)
      })
  }
}

function spawn (command, args, cb) {
  var child = cp.spawn(command, args)
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
