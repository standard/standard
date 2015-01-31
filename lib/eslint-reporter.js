var util = require('util')

module.exports = function (results) {
  var output = ''

  results.forEach(function (result) {
    var messages = result.messages
    messages.forEach(function (message) {
      output += util.format(
        '%s:%d:%d: %s\n',
        result.filePath, message.line || 0, message.column || 0, message.message
      )
    })
  })

  return output
}
