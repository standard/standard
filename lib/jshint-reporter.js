module.exports = {
  reporter: function (results, data, opts) {
    opts = opts || {}

    results.forEach(function (result) {
      var file = result.file
      var error = result.error

      var str = file + ':' + error.line + ':' + error.character + ': ' + error.reason
      if (opts.verbose) str += ' (' + error.code + ')'
      console.log(str)
    })
  }
}
