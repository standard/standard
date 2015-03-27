var standard = require('./')

standard.lintFiles([], {cwd: 'bin' }, function (err, result) {
  if (err) console.error(err)
  else console.log('errors: ' + result.errorCount)
})
