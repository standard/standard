#!/usr/bin/env node

var minimist = require('minimist')
var standard = require('../')

var argv = minimist(process.argv.slice(2))

if (argv.version) {
  console.log(require('../package.json').version)
  process.exit(0)
}

standard({
  cwd: process.cwd(),
  bare: argv.bare || argv.b,
  verbose: argv.verbose || argv.v,
  rcpath: argv.rcpath || argv.r
})
