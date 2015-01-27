var util = require('util')
module.exports = function (errorsCollection) {
  var errorCount = 0
  errorsCollection.forEach(function (errors) {
    var file = errors.getFilename()
    if (!errors.isEmpty()) {
      errors.getErrorList().forEach(function (error) {
        errorCount++
        var message = error.message.substring(error.rule.length + 2)
        console.log(util.format(
          '%s:%d:%d: %s (%s)', file, error.line, error.column, message, error.rule
        ))
      })
    }
  })
}
