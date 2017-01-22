const path = require('path')
const pkg = require('./package.json')
const ignore = require('sane-eslint-ignore')
const files = require('sane-eslint-files')

const noSet = {
  set: () => false
}

const handlers = {
  config: {
    set: (target, property, value) => {
      const allow = [
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
  CLIEngineOptions: noSet,
  defaultFiles: noSet,
  ignore: noSet
}

const getConfig = () => new Proxy({
  bugs: pkg.bugs.url,
  name: 'standard',
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style',
  version: pkg.version,
  defaultFiles: new Proxy(files, handlers.defaultFiles),
  ignore: new Proxy(ignore, handlers.ignore),
  gitIgnore: true,
  CLIEngineOptions: new Proxy({
    configFile: path.join(__dirname, 'eslintrc.json')
  }, handlers.CLIEngineOptions)
}, handlers.config)

module.exports = getConfig
