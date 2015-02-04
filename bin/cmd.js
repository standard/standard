#!/usr/bin/env node

var minimist = require('minimist')
var standard = require('../')

var argv = minimist(process.argv.slice(2), {
  boolean: [ 'help', 'bare', 'verbose', 'version' ],
  alias: {
    help: 'h',
    verbose: 'v'
  }
})

if (argv.help) {
  console.log(function () {
  /*
  Usage:
      standard <flags>

  Flags:
      -v, --verbose    Show error codes (so you can ignore specific rules)
          --version    Display the current version
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
  bare: argv.bare,
  cwd: process.cwd(),
  files: argv._,
  stdin: !process.stdin.isTTY,
  verbose: argv.verbose
})
