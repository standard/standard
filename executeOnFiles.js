var eslint = require('eslint');
var path = require('path');

var engine;
var result;

process.on('message', function(m) {
  if(m.baseConfig) {
    engine = new eslint.CLIEngine(m)
    return
  }
  if(m === 'end') {
    process.send(result)
    return process.exit(0)
  }
  try {
    result = engine.executeOnFiles(m)
  } catch(e) {
    process.send({
      isError: true,
      error: e
    })
  }
});
