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

var DEFAULT_IGNORE_PATTERNS = [
  'coverage/**',
  'node_modules/**',
  '**/*.min.js',
  '**/bundle.js'
]

var DEFAULT_CONFIG = {
  configFile: path.join(__dirname, 'rc', '.eslintrc'),
  reset: true,
  useEslintrc: false
}

/**
 * Lint text to enforce JavaScript Standard Style.
 *
 * @param {string} text                 file text to lint
 * @param {Object=} opts                options object
 * @param {string=} opts.parser         custom js parser (e.g. babel-eslint, esprima-fb)
 * @param {function(Error, Object)} cb  callback
 */
function lintText (text, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  opts = parseOpts(opts)
  cb = dezalgo(cb)

  var result
  try {
    result = new eslint.CLIEngine(opts._config).executeOnText(text)
  } catch (err) {
    return cb(err)
  }
  return cb(null, result)
}

/**
 * Lint files to enforce JavaScript Standard Style.
 *
 * @param {Array.<string>} files         file globs to lint
 * @param {Object=} opts                 options object
 * @param {Array.<String>=} opts.ignore  file globs to ignore (has sane defaults)
 * @param {string=} opts.cwd             current working directory (default: process.cwd())
 * @param {string=} opts.parser          custom js parser (e.g. babel-eslint, esprima-fb)
 * @param {function(Error, Object)} cb   callback
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
    try {
      result = new eslint.CLIEngine(opts._config).executeOnFiles(allFiles)
    } catch (err) {
      return cb(err)
    }
    return cb(null, result)
  })

}

function parseOpts (opts) {
  if (!opts) opts = {}
  opts = extend(opts)
  opts._config = extend(DEFAULT_CONFIG)
  opts.configKey = 'standard'

  if (!opts.cwd) opts.cwd = process.cwd()

  var ignore = DEFAULT_IGNORE_PATTERNS.slice(0) // passed into glob

  if (opts.ignore) ignore.concat(opts.ignore)
  opts.ignore = ignore

  if (opts.parser) useCustomParser(opts.parser)

  // Find package.json in the project root
  var root
  try {
    root = findRoot(opts.cwd)
  } catch (e) {}

  if (root) {
    var packageOpts = pkgConfig('standard', { root: false, cwd: opts.cwd })

    if (packageOpts) {
      // Use globals from package.json ("standard.global" property)
      var globals = packageOpts.globals || packageOpts.global
      if (globals) {
        opts._config.globals = Array.isArray(globals)
          ? globals
          : [ globals ]
      }

      // Use custom js parser from package.json ("standard.parser" property)
      if (!opts.parser && packageOpts.parser) useCustomParser(packageOpts.parser)
    }
  }

  function useCustomParser (parser) {
    var configFile = JSON.parse(fs.readFileSync(DEFAULT_CONFIG.configFile, 'utf8'))
    configFile.parser = parser
    var tmpFilename = path.join(os.tmpdir(), '.eslintrc-' + parser)
    fs.writeFileSync(tmpFilename, JSON.stringify(configFile))
    opts._config.configFile = tmpFilename
  }

  return opts
}
