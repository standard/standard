let Linter = require('standard-engine').linter
let opts = require('./options')

module.exports = new Linter(opts)
