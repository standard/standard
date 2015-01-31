var util = require('util')

module.exports = function (errorsCollection) {
  errorsCollection.forEach(function (errors) {
    var file = errors.getFilename()
    if (errors.isEmpty()) return
    errors.getErrorList().forEach(function (error) {
      console.log(util.format(
        '%s:%d:%d: %s', file, error.line, error.column, error.message
      ))
    })
  })
}
