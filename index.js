module.exports.lintText = lintText
module.exports.lintFiles = lintFiles

var dezalgo = require('dezalgo')
var eslint = require('eslint')
var extend = require('xtend')
var findRoot = require('find-root')
var fs = require('fs')
var glob = require('glob')
var ignorePkg = require('ignore')
var os = require('os')
var parallel = require('run-parallel')
var path = require('path')
var uniq = require('uniq')

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

  // traverse filesystem
  parallel(files.map(function (pattern) {
    return function (cb) {
      glob(pattern, {
        cwd: opts.cwd,
        ignore: opts._ignore,
        nodir: true
      }, cb)
    }
  }), function (err, results) {
    if (err) return cb(err)

    // flatten nested arrays
    var files = results.reduce(function (files, result) {
      result.forEach(function (file) {
        files.push(path.resolve(opts.cwd, file))
      })
      return files
    }, [])

    // de-dupe
    files = uniq(files)

    if (opts._gitignore) {
      if (os.platform() === 'win32') files = files.map(toUnix)
      files = opts._gitignore.filter(files)
      if (os.platform() === 'win32') files = files.map(toWin32)
    }

    // undocumented – do not use (used by bin/cmd.js)
    if (opts._onFiles) opts._onFiles(files)

    var result
    try {
      result = new eslint.CLIEngine(opts._config).executeOnFiles(files)
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

  if (!opts.cwd) opts.cwd = process.cwd()

  opts._ignore = DEFAULT_IGNORE_PATTERNS.slice(0) // passed into glob
  opts._gitignore = ignorePkg()

  function addIgnorePattern (patterns) {
    opts._ignore = opts._ignore.concat(patterns)
    opts._gitignore.addPattern(patterns)
  }

  if (opts.ignore) addIgnorePattern(opts.ignore)

  // Find package.json in the project root
  var root
  try {
    root = findRoot(opts.cwd)
  } catch (e) {}

  if (root) {
    var packageOpts
    try {
      packageOpts = require(path.join(root, 'package.json')).standard
    } catch (e) {}
    if (packageOpts) {
      // Use ignore patterns from package.json
      if (packageOpts.ignore) addIgnorePattern(packageOpts.ignore)

      // Use custom js parser from package.json
      if (packageOpts.parser) {
        var configFile = JSON.parse(fs.readFileSync(DEFAULT_CONFIG.configFile, 'utf8'))
        configFile.parser = packageOpts.parser
        var tmpFilename = path.join(os.tmpdir(), '.eslintrc-' + packageOpts.parser)
        fs.writeFileSync(tmpFilename, JSON.stringify(configFile))
        opts._config.configFile = tmpFilename
      }
    }

    // Use ignore patterns from project root .gitignore
    var gitignore
    try {
      gitignore = fs.readFileSync(path.join(root, '.gitignore'), 'utf8')
    } catch (e) {}
    if (gitignore) opts._gitignore.addPattern(gitignore.split(/\r?\n/))
  }

  return opts
}

function toUnix (str) {
  return str.replace(/\\/g, '/')
}

function toWin32 (str) {
  return str.replace(/\//g, '\\')
}
