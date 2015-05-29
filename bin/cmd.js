#!/usr/bin/env node

var fs = require('fs')
var minimist = require('minimist')
var standard = require('../')
var standardFormat = require('standard-format')
var stdin = require('get-stdin')

var argv = minimist(process.argv.slice(2), {
  alias: {
    format: 'F',
    help: 'h',
    verbose: 'v'
  },
  boolean: [
    'format',
    'help',
    'stdin',
    'verbose',
    'version'
  ]
})

// running `standard -` is equivalent to `standard --stdin`
if (argv._[0] === '-') {
  argv.stdin = true
  argv._.shift()
}

if (argv.help) {
  console.log(function () {
  /*
  standard - JavaScript Standard Style

  Usage:
      standard <flags> [FILES...]

      If FILES is omitted, then all JavaScript source files (*.js, *.jsx) in the current
      working directory are checked, recursively.

      Certain paths (node_modules/, .git/, coverage/, *.min.js, bundle.js) are
      automatically excluded.

  Flags:
      -F  --format    Automatically format code. (using standard-format)
      -v, --verbose   Show error codes. (so you can ignore specific rules)
          --stdin     Read file text from stdin.
          --version   Show current version
      -h, --help      Show usage information

  Readme:  https://github.com/feross/standard
  Report bugs:  https://github.com/feross/standard/issues

  */
  }.toString().split(/\n/).slice(2, -2).join('\n'))
  process.exit(0)
}

if (argv.version) {
  console.log(require('../package.json').version)
  process.exit(0)
}

if (argv.stdin) {
  stdin(function (text) {
    if (argv.format) {
      text = standardFormat.transform(text)
      process.stdout.write(text)
    }
    standard.lintText(text, onResult)
  })
} else {
  var lintOpts = {}
  if (argv.format) {
    lintOpts._onFiles = function (files) {
      files.forEach(function (file) {
        var data = fs.readFileSync(file).toString()
        fs.writeFileSync(file, standardFormat.transform(data))
      })
    }
  }
  standard.lintFiles(argv._, lintOpts, onResult)
}

function onResult (err, result) {
  if (err) return onError(err)
  if (result.errorCount === 0) process.exit(0)

  console.error(
    'standard: Use JavaScript Standard Style ' +
    '(https://github.com/feross/standard)'
  )

  result.results.forEach(function (result) {
    result.messages.forEach(function (message) {
      log(
        '  %s:%d:%d: %s%s',
        result.filePath, message.line || 0, message.column || 0, message.message,
        argv.verbose ? ' (' + message.ruleId + ')' : ''
      )
    })
  })

  process.exit(1)
}

function onError (err) {
  console.error('standard: Unexpected linter output:\n')
  console.error(err.stack || err.message || err)
  console.error(
    '\nIf you think this is a bug in `standard`, open an issue: ' +
    'https://github.com/feross/standard'
  )
  process.exit(1)
}

/**
 * Print lint errors to stdout since this is expected output from `standard`.
 * Note: When formatting code from stdin (`standard --stdin --format`), the transformed
 * code is printed to stdout, so print lint errors to stderr in this case.
 */
function log () {
  if (argv.stdin && argv.format) {
    arguments[0] = 'standard: ' + arguments[0]
    console.error.apply(console, arguments)
  } else {
    console.log.apply(console, arguments)
  }
}
