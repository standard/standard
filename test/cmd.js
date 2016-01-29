var path = require('path')
var test = require('tape')
var winSpawn = require('win-spawn')

var CMD_PATH = path.join(__dirname, '..', 'bin', 'cmd.js')

test('command line usage: --help', function (t) {
  t.plan(1)

  var child = winSpawn(CMD_PATH, ['--help'])
  child.on('error', function (err) {
    t.fail(err)
  })
  child.on('close', function (code) {
    t.equal(code, 0, 'zero exit code')
  })
})
