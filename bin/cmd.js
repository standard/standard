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
  ],
  default: {
    stdin: !process.stdin.isTTY
  }
})

if (argv.help) {
  console.log(function () {
  /*
  Usage:
      standard <flags>

  Flags:
      -v, --verbose    Show error codes (so you can ignore specific rules)
          --stdin      Force processing input from stdin
          --version    Display the current version
      -F  --format     EXPERIMENTIAL: format code using standard-format before linting
                       (will not work with stdin)
      -h, --help       Display the help and usage details

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
