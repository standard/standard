module.exports = function (results) {
  var output = ''

  results.forEach(function (result) {
    var messages = result.messages
    messages.forEach(function (message) {
      var msg = message.message

      output += result.filePath
      output += ':' + message.line || 0
      output += ':' + message.column || 0
      output += ': ' + msg
      output += message.ruleId ? ' (' + message.ruleId + ')' : ''
      output += '\n'
    })
  })

  return output
}
