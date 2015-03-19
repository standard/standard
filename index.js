module.exports = standard

var eslint = require('eslint')
var findRoot = require('find-root')
var fs = require('fs')
var glob = require('glob')
var parallel = require('run-parallel')
var path = require('path')
var standardFormat = require('standard-format')
var stdin = require('get-stdin')
var uniq = require('uniq')

var ESLINT_RC = path.join(__dirname, 'rc', '.eslintrc')

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

/**
 * JavaScript Standard Style
 *
 * @param {Object} opts                        options object
 * @param {string|Array.<String>} opts.ignore  files to ignore
 * @param {string} opts.cwd                    current working directory
 * @param {Array.<string>} opts.files          files to check
 * @param {boolean} opts.stdin                 read file text from stdin
 * @param {boolean} opts.format                automatically format code
 */
function standard (opts, cb) {
  var root, result
  if (!opts) opts = {}

  try {
    root = findRoot(process.cwd())
  } catch (e) {}

  // Merge user ignore patterns and default ignore patterns
  var ignore = (opts.ignore || []).concat(DEFAULT_IGNORE_PATTERNS)

  if (root) {
    var packageOpts = require(path.join(root, 'package.json')).standard
    if (packageOpts) ignore = ignore.concat(packageOpts.ignore)
  }

  if (opts.stdin) {
    stdin(function (text) {
      if (opts.format) {
        text = standardFormat.transform(text)
        process.stdout.write(text)
      }
      try {
        result = lintText(text)
      } catch (err) {
        return cb(err)
      }
      return cb(null, result)
    })

  } else {
    if (!Array.isArray(opts.files) || opts.files.length === 0) {
      opts.files = DEFAULT_PATTERNS
    }

    // traverse filesystem
    parallel(opts.files.map(function (pattern) {
      return function (cb) {
        glob(pattern, {
          cwd: opts.cwd || process.cwd(),
          nodir: true,
          ignore: ignore
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

      if (files.length > 0) {
        if (opts.format) format(files)
        try {
          result = lintFiles(files)
        } catch (err) {
          return cb(err)
        }
        return cb(null, result)
      }
    })
  }

  function format (files) {
    files.forEach(function (file) {
      // TODO: remove sync call
      var data = fs.readFileSync(file).toString()
      fs.writeFileSync(file, standardFormat.transform(data))
    })
  }

  function lintText (text) {
    return new eslint.CLIEngine({ configFile: ESLINT_RC }).executeOnText(text)
  }

  function lintFiles (files) {
    return new eslint.CLIEngine({ configFile: ESLINT_RC }).executeOnFiles(files)
  }
}
