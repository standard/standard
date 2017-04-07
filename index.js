module.exports.lintText = lintText
module.exports.lintFiles = lintFiles

var commondir = require('commondir')
var dezalgo = require('dezalgo')
var editorConfigGetIndent = require('editorconfig-get-indent')
var eslint = require('eslint')
var findRoot = require('find-root')
var fs = require('fs')
var glob = require('glob')
var parallel = require('run-parallel')
var path = require('path')
var uniq = require('uniq')
var cloneDeep = require('clone-deep')
var deepExtend = require('deep-extend')
var fs = require("fs")
var path = require("path")
var cp = require('child_process')
var _ = require('lodash')

var NUM_FORKS = 8;


var DEFAULT_PATTERNS = [
  '**/*.js'
]

var DEFAULT_IGNORE_PATTERNS = [
  'coverage/**',
  'node_modules/**',
  '**/*.min.js',
  '**/bundle.js'
]

var es6Config = require(path.join(__dirname, 'rc', '.eslintrc.es6.json'))
var babelConfig = require(path.join(__dirname, 'rc', '.eslintrc.babel.json'))

var ESLINT_CONFIG = {
  baseConfig: require(path.join(__dirname, 'rc', '.eslintrc.json')),
  useEslintrc: true,
  rulePaths: [path.join(__dirname, 'rules')]
}

function configure(opts) {
  var config = cloneDeep(ESLINT_CONFIG)

  config.baseConfig.rules.indent = [2, opts.indent]

  if (opts['line-length']) {
    config.baseConfig.rules['max-len'] = [2, opts['line-length'], 4]
  }

  if (opts.es6) {
    deepExtend(config.baseConfig, es6Config)
  } else if (opts.babel) {
    deepExtend(config.baseConfig, es6Config, babelConfig)
  }

  return config;
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

  editorConfigGetIndent(process.cwd(), function (err, indent) {
    if (err) return cb(err)
    opts.indent = indent
    var result
    try {
      result = new eslint.CLIEngine(configure(opts)).executeOnText(text)
    } catch (err) {
      return cb(err)
    }
    return cb(null, result)
  })
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
        var f = (file.charAt(0) === '/') ? file : path.join(opts.cwd, file)
        files.push(f)
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

    if (files.length === 0) {
      return cb(null, {errorCount: 0})
    }

    var root = commondir(files)
    editorConfigGetIndent(root, function (err, indent) {
      if (err) return cb(err)
      try {
        executeInParallel(files, configure(opts), cb)
      } catch (err) {
        return cb(err)
      }
    })

  })
}

function executeInParallel(files, opts, cb) {
  var chunkResults = {};
  var fileChunks = _.chunk(files, Math.ceil(files.length/NUM_FORKS))
  var pendingResults = fileChunks.length;
  var results = { results: [], errorCount: 0, warningCount: 0 }

  function onAllDone() {
    fileChunks.forEach(function(chunk) {
      results.results = results.results.concat(chunkResults[chunk].results)
      results.errorCount += chunkResults[chunk].errorCount
      results.warningCount += chunkResults[chunk].warningCount
    })
    cb(null, results)
  }

  fileChunks.forEach(function(chunk, i) {
    var fork = cp.fork(__dirname + '/executeOnFiles')
    fork.send(opts)
    fork.send(chunk)
    fork.send('end')
    fork.on('message', function(results) {
      if(results.isError) {
        return cb(new Error(result.error))
      }

      chunkResults[chunk] = results
      pendingResults--
      if(pendingResults == 0) {
        onAllDone()
      }
    })
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
