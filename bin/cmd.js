#!/usr/bin/env node

var standard = require('../')

var flag = process.argv[2]

if (flag === '--version') {
  console.log(require('../package.json').version)
  process.exit(0)
}

standard({
  cwd: process.cwd(),
  bare: flag === '--bare' || flag === '-b',
  verbose: flag === '--verbose' || flag === '-v'
})
