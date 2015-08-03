#!/usr/bin/env node

var fs = require('fs')
var minimist = require('minimist')
var standard = require('../')
var standardFormat = require('standard-format')
var stdin = require('get-stdin')

var argv = minimist(process.argv.slice(2), {
  alias: {
    format: 'F',
    global: 'globals',
    help: 'h',
    verbose: 'v'
  },
  boolean: [
    'format',
    'help',
    'stdin',
    'verbose',
    'version'
  ],
  string: [
    'global',
    'parser'
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
standard - JavaScript Standard Style (https://github.com/feross/standard)

Usage:
    standard <flags> [FILES...]

    If FILES is omitted, then all JavaScript source files (*.js, *.jsx) in the current
    working directory are checked, recursively.

    Certain paths (node_modules/, .git/, coverage/, *.min.js, bundle.js) are
    automatically ignored.

Flags:
    -F, --format    Automatically format code (using standard-format)
    -v, --verbose   Show error codes (so you can ignore specific rules)
        --stdin     Check source text on stdin
        --global    Declare global variable
        --parser    Custom js parser (e.g. babel-eslint)
        --version   Show current version
    -h, --help      Show usage information
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
    standard.lintText(text, { parser: argv.parser }, onResult)
  })
} else {
  var opts = { parser: argv.parser, global: argv.global }
  if (argv.format) {
    opts._onFiles = function (files) {
      files.forEach(function (file) {
        var data = fs.readFileSync(file).toString()
        fs.writeFileSync(file, standardFormat.transform(data))
      })
    }
  }
  standard.lintFiles(argv._, opts, onResult)
}

function onResult (err, result) {
  if (err) return onError(err)
  if (result.errorCount === 0) process.exit(0)

  console.log(
    'standard: Use JavaScript Standard Style ' +
    '(https://github.com/feross/standard)'
  )

  log(result._getFormatter()(result.results))

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
 * Note: When formatting code from stdin (`standard --stdin --format`), print lint errors
 * to stderr, since the transformed code is printed to stdout.
 */
function log () {
  if (argv.stdin && argv.format) {
    arguments[0] = 'standard: ' + arguments[0]
    console.error.apply(console, arguments)
  } else {
    console.log.apply(console, arguments)
  }
}
