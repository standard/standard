/*! standard. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
import engine from 'standard-engine'
import opts from './options.js'

const Linter = engine.linter

export default new Linter(opts)
