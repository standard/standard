#!/usr/bin/env node

var minimist = require('minimist')
var standard = require('../')

var argv = minimist(process.argv.slice(2), {
  boolean: [ 'help', 'bare', 'verbose', 'version' ],
  alias: {
    help: 'h',
    verbose: 'v',
    rcpath: 'r'
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
      -r, --rcpath     Provide an alternative directory of rc files

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
  bare: argv.bare,
  stdin: !process.stdin.isTTY,
  verbose: argv.verbose,
  rcpath: argv.rcpath
})
