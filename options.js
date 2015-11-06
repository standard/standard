var path = require('path')
var pkg = require('./package.json')

module.exports = {
  cmd: 'standard',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Use JavaScript Standard Style',
  eslintConfig: {
    configFile: path.join(__dirname, 'rc', '.eslintrc')
  },
  formatter: require('standard-format'),
  formatterName: 'standard-format'
}
