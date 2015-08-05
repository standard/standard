module.exports.lintText = lintText
module.exports.lintFiles = lintFiles

var deglob = require('deglob')
var dezalgo = require('dezalgo')
var eslint = require('eslint')
var extend = require('xtend')
var findRoot = require('find-root')
var fs = require('fs')
var os = require('os')
var path = require('path')
var pkgConfig = require('pkg-config')

var DEFAULT_PATTERNS = [
  '**/*.js',
  '**/*.jsx'
]

var DEFAULT_IGNORE = [
  'coverage/**',
  'node_modules/**',
  '**/*.min.js',
  '**/bundle.js'
]

var DEFAULT_CONFIG = {
  configFile: path.join(__dirname, 'rc', '.eslintrc'),
  globals: [],
  useEslintrc: false
}

/**
 * Lint text to enforce JavaScript Standard Style.
 *
 * @param {string} text                   file text to lint
 * @param {Object=} opts                  options object
 * @param {Array.<string>=} opts.globals  global variables to declare
 * @param {string=} opts.parser           custom js parser (e.g. babel-eslint)
 * @param {function(Error, Object)} cb    callback
 */
function lintText (text, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  opts = parseOpts(opts)
  cb = dezalgo(cb)

  var result
  var engine = new eslint.CLIEngine(opts._config)
  try {
    result = engine.executeOnText(text)
  } catch (err) {
    return cb(err)
  }
  result._getFormatter = engine.getFormatter
  return cb(null, result)
}

/**
 * Lint files to enforce JavaScript Standard Style.
 *
 * @param {Array.<string>} files          file globs to lint
 * @param {Object=} opts                  options object
 * @param {Array.<string>=} opts.ignore   file globs to ignore (has sane defaults)
 * @param {string=} opts.cwd              current working directory (default: process.cwd())
 * @param {Array.<string>=} opts.globals  global variables to declare
 * @param {string=} opts.parser           custom js parser (e.g. babel-eslint)
 * @param {function(Error, Object)} cb    callback
 */
function lintFiles (files, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  opts = parseOpts(opts)
  cb = dezalgo(cb)

  if (typeof files === 'string') files = [ files ]
  if (files.length === 0) files = DEFAULT_PATTERNS

  var deglobOpts = {
    ignore: opts.ignore,
    cwd: opts.cwd,
    useGitIgnore: true,
    usePackageJson: true,
    configKey: 'standard'
  }

  deglob(files, deglobOpts, function (err, allFiles) {
    if (err) return cb(err)
     // undocumented – do not use (used by bin/cmd.js)
    if (opts._onFiles) opts._onFiles(allFiles)

    var result
    var engine = new eslint.CLIEngine(opts._config)
    try {
      result = engine.executeOnFiles(allFiles)
    } catch (err) {
      return cb(err)
    }
    result._getFormatter = engine.getFormatter
    return cb(null, result)
  })

}

function parseOpts (opts) {
  opts = extend(opts)
  opts._config = extend(DEFAULT_CONFIG)

  if (!opts.cwd) opts.cwd = process.cwd()

  if (!opts.ignore) opts.ignore = []
  opts.ignore = opts.ignore.concat(DEFAULT_IGNORE)

  setGlobals(opts.globals || opts.global)
  setParser(opts.parser)

  var root
  try { root = findRoot(opts.cwd) } catch (e) {}
  if (root) {
    var pkg = pkgConfig('standard', { root: false, cwd: opts.cwd })
    if (pkg) {
      setGlobals(pkg.globals || pkg.global)
      if (!opts.parser) setParser(pkg.parser)
    }
  }

  function setParser (parser) {
    if (!parser) return
    var configFile = JSON.parse(fs.readFileSync(DEFAULT_CONFIG.configFile, 'utf8'))
    configFile.parser = parser
    var tmpFilename = path.join(os.tmpdir(), '.eslintrc-' + randomNumber())
    fs.writeFileSync(tmpFilename, JSON.stringify(configFile))
    opts._config.configFile = tmpFilename
  }

  function setGlobals (globals) {
    if (!globals) return
    opts._config.globals = opts._config.globals.concat(globals)
  }

  function randomNumber () {
    return Math.random().toString().substring(2, 10)
  }

  return opts
}
