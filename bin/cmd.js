#!/usr/bin/env node
/* eslint-disable no-var, no-eval */

var match = process.version.match(/v(\d+)\.(\d+)/)
var major = parseInt(match[1], 10)
var minor = parseInt(match[2], 10)

if (major >= 12 || (major === 12 && minor >= 20)) {
  eval('import("standard-engine")').then(function (standardEngine) {
    eval('import("../options.js")').then(function (options) {
      standardEngine.cli(options.default)
    })
  })
} else {
  console.error('standard: Node 12.20.0 or greater is required. `standard` did not run.')
}
