/*! standard. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
import engine from 'standard-engine'
import options from './options.js'

const Linter = engine.linter

export default new Linter(options)
