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
  Usage:
      standard <flags>

  Flags:
      -v, --verbose    Show error codes (so you can ignore specific rules)
      -F  --format     Automatically format code before linting (using standard-format)
          --stdin      Force processing input from stdin
      -h, --help       Display the help and usage details
          --version    Display the current version

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
})
