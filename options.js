var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  eslint: eslint,
  cmd: 'standard',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Use JavaScript Standard Style',
  eslintConfig: {
    configFile: path.join(__dirname, '.eslintrc')
  },
  formatter: 'Formatting is no longer included with standard. Install it separately: "npm install -g standard-format"'
}
