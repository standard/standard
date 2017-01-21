#!/usr/bin/env node

var CuratedLinter = require('curated-linter')
var getConfig = require('./get-config')

var standard = new CuratedLinter(getConfig)

module.exports = {
  lintFiles: CuratedLinter.prototype.lintFiles.bind(standard),
  lintText: CuratedLinter.prototype.lintText.bind(standard)
}
