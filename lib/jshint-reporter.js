module.exports = {
  reporter: function (results, data, opts) {
    var str = ''
    opts = opts || {}

    results.forEach(function (result) {
      var file = result.file
      var error = result.error

      str += file + ':' + error.line + ':' + error.character + ': ' + error.reason

      if (opts.verbose) {
        str += ' (' + error.code + ')'
      }

      str += '\n'
    })
  }
}
