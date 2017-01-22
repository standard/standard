const path = require('path')
const pkg = require('./package.json')
const ignore = require('sane-eslint-ignore')
const files = require('sane-eslint-files')

const noSet = {
  set: () => false
}

const setToPush = {
  set: (target, property, value) => {
    target.push(value)
    return true
  }
}

const getConfig = () => {
  const config = {
    bugs: pkg.bugs.url,
    name: 'standard',
    homepage: pkg.homepage,
    tagline: 'Use JavaScript Standard Style',
    version: pkg.version,
    defaultFiles: new Proxy(files, noSet),
    ignore: new Proxy(ignore, setToPush),
    gitIgnore: true,
    packageJson: true,
    CLIEngineOptions: new Proxy({
      configFile: path.join(__dirname, 'eslintrc.json'),
      globals: new Proxy([], setToPush)
    }, noSet)
  }

  Object.assign(config, {
    globals: config.CLIEngineOptions.globals
  })

  return new Proxy(config, {
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
  })
}

module.exports = getConfig
