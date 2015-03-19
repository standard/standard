module.exports.lintText = lintText
module.exports.lintFiles = lintFiles

var dezalgo = require('dezalgo')
var eslint = require('eslint')
var findRoot = require('find-root')
var fs = require('fs')
var glob = require('glob')
var parallel = require('run-parallel')
var path = require('path')
var standardFormat = require('standard-format')
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

var ESLINT_CONFIG = { configFile: path.join(__dirname, 'rc', '.eslintrc') }

/**
 * Lint text to enforce JavaScript Standard Style.
 *
 * @param {string} text                 file text to lint
 * @param {Object} opts                 options object
 * @param {Array.<String>} opts.ignore  files to ignore
 * @param {string} opts.cwd             current working directory
 * @param {boolean} opts.format         automatically format code
 */
function lintText (text, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  opts = parseOpts(opts)
  cb = dezalgo(cb)

  // TODO: Move format into its own function
  if (opts.format) {
    text = standardFormat.transform(text)
    process.stdout.write(text)
  }

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
 * @param {Array.<String>} opts.ignore  files to ignore
 * @param {string} opts.cwd             current working directory
 * @param {boolean} opts.format         automatically format code
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
        files.push(file)
      })
      return files
    }, [])

    // de-dupe
    files = uniq(files)

    // TODO: Move format into its own function
    if (opts.format) {
      files.forEach(function (file) {
        // TODO: remove sync call
        var data = fs.readFileSync(file).toString()
        fs.writeFileSync(file, standardFormat.transform(data))
      })
    }

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

  // Add additional ignore patterns from the closest `package.json`
  try {
    var root = findRoot(opts.cwd)
    var packageOpts = require(path.join(root, 'package.json')).standard
    if (packageOpts) opts.ignore = opts.ignore.concat(packageOpts.ignore)
  } catch (e) {}

  return opts
}
