#!/usr/bin/env node
/* eslint-disable no-var */

var match = process.version.match(/v(\d+)\.(\d+)/)
var major = parseInt(match[1], 10)
var minor = parseInt(match[2], 10)

if (major >= 12 || (major === 12 && minor >= 20)) {
  import('standard-engine').then(mod => {
    import('../options.js').then(({ default: options }) => {
      mod.cli(options)
    })
  })
} else {
  console.error('standard: Node 12.20.0 or greater is required. `standard` did not run.')
}
