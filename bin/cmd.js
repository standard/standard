#!/usr/bin/env node

var standard = require('../')

var flag = process.argv[2]

if (flag === '--version') {
  console.log(require('../package.json').version)
  process.exit(0)
}

standard({
  cwd: process.cwd(),
  verbose: flag === '--verbose' || flag === '-v'
})
