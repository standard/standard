var path = require('path')
var pkg = require('./package.json')

var handlers = {
  config: {
    set: (target, property, value) => {
      var allow = [
        'cwd'
      ]
      if (allow.includes(property)) {
        target[property] = value
        return true
      } else {
        return false
      }
    }
  },
  CLIEngineOptions: {
    set: () => false
  }
}

var getConfig = () => new Proxy({
  bugs: pkg.bugs.url,
  name: 'standard',
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style',
  version: pkg.version,
  CLIEngineOptions: new Proxy({
    configFile: path.join(__dirname, 'eslintrc.json')
  }, handlers.CLIEngineOptions)
}, handlers.config)

module.exports = getConfig
