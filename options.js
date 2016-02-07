var eslint = require('eslint')
var pkg = require('./package.json')

module.exports = {
  eslint: eslint,
  cmd: 'standard',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Use JavaScript Standard Style',
  eslintConfig: {
    baseConfig: {
      'extends': ['eslint-config-standard', 'eslint-config-standard-jsx']
    }
  },
  formatter: 'Formatting is no longer included with standard. Install it separately: "npm install -g standard-format"'
}
