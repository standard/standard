const path = require('path')
const test = require('tape')
const crossSpawn = require('cross-spawn')

const CMD_PATH = path.join(__dirname, '..', 'standard')

test('command line usage: --help', (t) => {
  t.plan(1)

  const child = crossSpawn(CMD_PATH, ['--help'])
  child.on('error', (err) => {
    t.fail(err)
  })
  child.on('close', (code) => {
    t.equal(code, 0, 'zero exit code')
  })
})
