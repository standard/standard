#!/usr/bin/env node

/* eslint-disable no-console, global-require */

if (process.version.match(/v(\d+)\./)[1] < 4) {
  console.error('standard: Node v4 or greater is required. `airbnb-standard` did not run.');
} else {
  const opts = require('./options');
  require('standard-engine').cli(opts);
}
