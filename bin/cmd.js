#!/usr/bin/env node

if (process.version.match(/v(\d+)\./)[1] < 8) {
  console.error('standard: Node 8 or greater is required. `standard` did not run.')
} else {
  const opts = require('../options')
  require('standard-engine').cli(opts)
}
