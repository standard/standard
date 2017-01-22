#!/usr/bin/env node

const CuratedLinter = require('curated-linter')
const getConfig = require('./get-config')

const standard = new CuratedLinter(getConfig)

module.exports = {
  lintFiles: CuratedLinter.prototype.lintFiles.bind(standard),
  lintText: CuratedLinter.prototype.lintText.bind(standard)
}
