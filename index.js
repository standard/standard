module.exports.lintText = lintText
module.exports.lintFiles = lintFiles

var dezalgo = require('dezalgo')
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
  'coverage/**',
  'node_modules/**',
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
  var ignore = (opts.ignore || []).concat(DEFAULT_IGNORE_PATTERNS)

  var root
  try {
    root = findRoot(opts.cwd)
  } catch (e) {}

  if (root) {
    // Add ignore patterns from the closest `package.json`
    try {
      var packageOpts = require(path.join(root, 'package.json')).standard
      if (packageOpts) ignore = ignore.concat(packageOpts.ignore)
    } catch (e) {}

    // Add ignore patterns from project root `.gitignore`
    try {
      var gitignore = fs.readFileSync(path.join(root, '.gitignore'), 'utf8')
      ignore = ignore.concat(gitignore.split(/\r?\n|\r/).filter(nonEmpty))
    } catch (e) {}
  }

  // Remove leading "current folder" prefix
  ignore = ignore.map(function (pattern) {
    return pattern.indexOf('./') === 0 ? pattern.slice(2) : pattern
  })

  // Allow "folder/" to ignore all sub-folders and files, a la .gitignore
  opts.ignore = []
  ignore.forEach(function (pattern) {
    opts.ignore.push(pattern)
    opts.ignore.push(pattern + '/**')
  })

  return opts
}

function nonEmpty (line) {
  return line.trim() !== '' && line[0] !== '#'
}
