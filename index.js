module.exports.lintText = lintText
module.exports.lintFiles = lintFiles

var dezalgo = require('dezalgo')
var dotignore = require('dotignore')
var eslint = require('eslint')
var findRoot = require('find-root')
var fs = require('fs')
var glob = require('glob')
var parallel = require('run-parallel')
var path = require('path')
var uniq = require('uniq')

var DEFAULT_PATTERNS = [
  '**/*.js',
  '**/*.jsx'
]

var DEFAULT_IGNORE_PATTERNS = [
  '**/node_modules/**',
  '.git/**',
  'coverage/**',
  '**/*.min.js',
  '**/bundle.js'
]

var ESLINT_CONFIG = {
  configFile: path.join(__dirname, 'rc', '.eslintrc'),
  useEslintrc: false
}

/**
 * Lint text to enforce JavaScript Standard Style.
 *
 * @param {string} text                 file text to lint
 * @param {Object} opts                 options object
 * @param {Array.<String>} opts.ignore  file globs to ignore (has sane defaults)
 * @param {string} opts.cwd             current working directory (default: process.cwd())
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
    result = new eslint.CLIEngine(ESLINT_CONFIG).executeOnText(text)
  } catch (err) {
    return cb(err)
  }
  return cb(null, result)
}

/**
 * Lint files to enforce JavaScript Standard Style.
 *
 * @param {Array.<string>} files        file globs to lint
 * @param {Object} opts                 options object
 * @param {Array.<String>} opts.ignore  file globs to ignore (has sane defaults)
 * @param {string} opts.cwd             current working directory (default: process.cwd())
 * @param {function(Error, Object)} cb  callback
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
        ignore: opts.ignore,
        nodir: true
      }, cb)
    }
  }), function (err, results) {
    if (err) return cb(err)

    // flatten nested arrays
    var files = results.reduce(function (files, result) {
      result.forEach(function (file) {
        files.push(path.join(opts.cwd, file))
      })
      return files
    }, [])

    // de-dupe
    files = uniq(files)

    // ignore files in .gitignore
    if (opts.ignoreMatcher) {
      files = files.filter(function (file) {
        return !opts.ignoreMatcher.shouldIgnore(file)
      })
    }

    // undocumented – do not use (used by bin/cmd.js)
    if (opts._onFiles) opts._onFiles(files)

    var result
    try {
      result = new eslint.CLIEngine(ESLINT_CONFIG).executeOnFiles(files)
    } catch (err) {
      return cb(err)
    }
    return cb(null, result)
  })
}

function parseOpts (opts) {
  if (!opts) opts = {}

  if (!opts.cwd) opts.cwd = process.cwd()

  // Add user ignore patterns to default ignore patterns
  opts.ignore = (opts.ignore || []).concat(DEFAULT_IGNORE_PATTERNS)

  var root
  try {
    root = findRoot(opts.cwd)
  } catch (e) {}

  if (root) {
    // Add additional ignore patterns from the closest `package.json`
    try {
      var packageOpts = require(path.join(root, 'package.json')).standard
      if (packageOpts) opts.ignore = opts.ignore.concat(packageOpts.ignore)
    } catch (e) {}

    // Create ignore matcher for patterns in .gitignore. These have a different
    // format than the one supported by `glob`, so we use a special parser
    try {
      var gitignore = fs.readFileSync(path.join(root, '.gitignore'), 'utf8')
      opts.ignoreMatcher = dotignore.createMatcher(gitignore)
    } catch (e) {}
  }

  return opts
}
