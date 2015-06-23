#!/usr/bin/env node

var commondir = require('commondir')
var editorConfigGetIndent = require('editorconfig-get-indent')
var fs = require('fs')
var minimist = require('minimist')
var standard = require('../')
var standardFormat = require('uber-standard-format')
var stdin = require('get-stdin')
var standardReporter = require('standard-reporter')
var fmt = require('util').format
var reporter

var argv = minimist(process.argv.slice(2), {
  alias: {
    format: 'F',
    help: 'h',
    verbose: 'v'
  },
  boolean: [
    'es6',
    'format',
    'help',
    'stdin',
    'verbose',
    'version'
  ],
  string: [
    'line-length'
  ],
  default: {
    'line-length': '80'
  }
})

// running `standard -` is equivalent to `standard --stdin`
if (argv._[0] === '-') {
  argv.stdin = true
  argv._.shift()
}

if (argv.help) {
  console.log(function () {
  /*
  standard - Uber JavaScript Standard Style

  Usage:
      standard <flags> [FILES...]

      If FILES is omitted, then all JavaScript source files (*.js) in the current
      working directory are checked, recursively.

      Certain paths (node_modules/, .git/, coverage/, *.min.js, bundle.js) are
      automatically excluded.

  Flags:
      -F  --format    Automatically format code. (using standard-format)
      -v, --verbose   Show error codes. (so you can ignore specific rules)
          --stdin     Read file text from stdin.
          --version   Show current version.
      -h, --help      Show usage information.
      -r, --reporter  Specify a reporter type. options: json, checkstyle or stylish
          --no-colors No colored output on terminal for stylish reporter

  Readme:  https://github.com/uber/standard
  Report bugs:  https://github.com/uber/standard/issues

  */
  }.toString().split(/\n/).slice(2, -2).join('\n'))
  process.exit(0)
}

if (argv.version) {
  console.log(require('../package.json').version)
  process.exit(0)
}

if (argv.reporter) {
  reporter = standardReporter({
    type: argv.reporter,
    sink: process.stdout,
    colors: argv.colors || true
  })
}

var lintOpts = {}
if (argv['line-length'])
  lintOpts['line-length'] = parseInt(argv['line-length'], 10)
if (argv.es6)
  lintOpts.es6 = true

if (argv.stdin) {
  editorConfigGetIndent(process.cwd(), function (err, indent) {
    if (err) return onError(err)
    stdin(function (text) {
      if (argv.format) {
        text = standardFormat.transform(text, indent)
        process.stdout.write(text)
      }
      standard.lintText(text, lintOpts, onResult)
    })
  })
} else {
  if (argv.format) {
    lintOpts._onFiles = function (files) {
      editorConfigGetIndent(commondir(files), function (err, indent) {
        if (err) return onError(err)
        files.forEach(function (file) {
          var data = fs.readFileSync(file).toString()
          fs.writeFileSync(file, standardFormat.transform(data, indent))
        })
      })
    }
  }
  standard.lintFiles(argv._, lintOpts, onResult)
}

function onResult (err, result) {
  if (err) return onError(err)
  if (result.errorCount === 0) return exit(0)

  console.error(
    'Error: Use Uber JavaScript Standard Style ' +
    '(https://github.com/uber/standard)'
  )

  result.results.forEach(function (result) {
    result.messages.forEach(function (message) {
      log(
        '  %s:%d:%d: %s %s',
        result.filePath, message.line || 0, message.column || 0, message.message,
        '(' + message.ruleId + ')'
      )
    })
  })

  exit(1)
}

function exit (code) {
  if (reporter) {
    reporter.end()
  }

  process.on('exit', function () {
    process.exit(code)
  })
}

function onError (err) {
  console.error('standard: Unexpected linter output:\n')
  console.error(err.stack || err.message || err)
  console.error(
    '\nIf you think this is a bug in `standard`, open an issue: ' +
    'https://github.com/uber/standard'
  )
  process.exit(1)
}

/**
 * Print lint errors to stdout since this is expected output from `standard`.
 * Note: When formatting code from stdin (`standard --stdin --format`), the transformed
 * code is printed to stdout, so print lint errors to stderr in this case.
 */
function log () {
  if (reporter) {
    reporter.write(fmt.apply(null, arguments) + '\n')
  } else if (argv.stdin && argv.format) {
    arguments[0] = 'standard: ' + arguments[0]
    console.error.apply(console, arguments)
  } else {
    console.log.apply(console, arguments)
  }
}
