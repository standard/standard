var cp = require('child_process')
var find = require('find')
var path = require('path')
var split = require('split')

var JSHINT = path.join(__dirname, 'node_modules', '.bin', 'jshint')
var JSHINTRC = path.join(__dirname, '.jshintrc')

var JSCS = path.join(__dirname, 'node_modules', '.bin', 'jscs')
var JSCSRC = path.join(__dirname, '.jscsrc')
var JSCS_REPORTER = path.join(__dirname, 'jscs-reporter.js')

module.exports = function (dir) {
  find.file(/\.js$/, dir || process.cwd(), function (files) {
    files = files.filter(function (file) {
      return !/\/node_modules\/|\/.git\/|\.min.js$/.test(file)
    })

    var jshintArgs = ['--config', JSHINTRC, '--reporter', 'unix'].concat(files)
    var jscsArgs = ['--config', JSCSRC, '--reporter', JSCS_REPORTER].concat(files)

    var jshint = spawn(JSHINT, jshintArgs, function (jshintErr) {
      var jscs = spawn(JSCS, jscsArgs, function (jscsErr) {
        if (jshintErr || jscsErr) {
          process.exit(1)
        }
      })

      stderrPipe(jscs.stdout)
      stderrPipe(jscs.stderr)
    })

    stderrPipe(jshint.stdout)
    stderrPipe(jshint.stderr)
  })
  .error(function (err) {
    if (err) error(err)
  })
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

var errored = false
function stderrPipe (readable) {
  readable
    .pipe(split())
    .on('data', function (line) {
      if (line === '') return
      if (/^\d+ errors?/.test(line)) return
      if (!errored) {
        errored = true
        console.error('Error: Code style check failed:')
      }
      console.error('  ' + line)
    })
}
