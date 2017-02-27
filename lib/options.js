const eslint = require('eslint');
const path = require('path');
const pkg = require('../package.json');

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'airbnb-standard',
  eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json'),
  },
  homepage: pkg.homepage,
  tagline: 'Use Airbnb JavaScript Style',
  version: pkg.version,
};
