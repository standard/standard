#!/usr/bin/env node

var minimist = require('minimist')
var standard = require('../')

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
          --version   Show current version.
      -h, --help      Show usage information.

  Report bugs:  https://github.com/feross/standard/issues

  */
  }.toString().split(/\n/).slice(2, -2).join('\n'))
  process.exit(0)
}

if (argv.version) {
  console.log(require('../package.json').version)
  process.exit(0)
}

standard({
  cwd: process.cwd(),
  files: argv._,
  format: argv.format,
  stdin: argv.stdin,
  verbose: argv.verbose
}, function (err, result) {
  if (err) return error(err)
  if (result.errorCount === 0) process.exit(0)

  console.error(
    'Error: Use JavaScript Standard Style ' +
    '(https://github.com/feross/standard)'
  )

  result.results.forEach(function (result) {
    result.messages.forEach(function (message) {
      console.error(
        '  %s:%d:%d: %s%s',
        result.filePath, message.line || 0, message.column || 0, message.message,
        argv.verbose ? ' (' + message.ruleId + ')' : ''
      )
    })
  })

  process.exit(1)
})

function error (err) {
  console.error('Unexpected Linter Output:\n')
  console.error(err.stack || err.message || err)
  console.error(
    '\nIf you think this is a bug in `standard`, open an issue: ' +
    'https://github.com/feross/standard'
  )
  process.exit(1)
}
