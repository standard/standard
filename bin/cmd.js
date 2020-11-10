#!/usr/bin/env node
/* eslint-disable no-var */

var match = process.version.match(/v(\d+)\.(\d+)/)
var major = parseInt(match[1], 10)
var minor = parseInt(match[2], 10)

if (major >= 11 || (major === 10 && minor >= 12)) {
  require('standard-engine').cli(require('../options'))
} else {
  console.error('standard: Node 10.12.0 or greater is required. `standard` did not run.')
}
