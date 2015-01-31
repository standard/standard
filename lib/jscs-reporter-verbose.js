var util = require('util')

module.exports = function (errorsCollection) {
  errorsCollection.forEach(function (errors) {
    var file = errors.getFilename()
    if (errors.isEmpty()) return
    errors.getErrorList().forEach(function (error) {
      var message = error.message.substring(error.rule.length + 2)
      console.log(util.format(
        '%s:%d:%d: %s (jscs/%s)', file, error.line, error.column, message, error.rule
      ))
    })
  })
}
