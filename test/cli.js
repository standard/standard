const path = require('path')
const test = require('tape')
const crossSpawn = require('cross-spawn')

const CMD_PATH = path.join(__dirname, '..', 'standard')

test('command line usage: --help', function (t) {
  t.plan(1)

  const child = crossSpawn(CMD_PATH, ['--help'])
  child.on('error', function (err) {
    t.fail(err)
  })
  child.on('close', function (code) {
    t.equal(code, 0, 'zero exit code')
  })
})
