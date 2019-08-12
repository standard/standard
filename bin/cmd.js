#!/usr/bin/env node

if (process.version.match(/v(\d+)\./)[1] < 8) {
  console.error('standard: Node 8 or greater is required. `standard` did not run.')
} else {
  require('standard-engine').cli(require('../options'))
}
