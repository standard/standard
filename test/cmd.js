import test from 'tape'
import crossSpawn from 'cross-spawn'

const CMD_PATH = new URL('../bin/cmd.js', import.meta.url).toString().slice(7)

test('command line usage: --help', t => {
  t.plan(1)

  const child = crossSpawn(CMD_PATH, ['--help'])
  child.on('error', err => {
    t.fail(err)
  })
  child.on('close', code => {
    t.equal(code, 0, 'zero exit code')
  })
})
