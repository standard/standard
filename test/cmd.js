import { fileURLToPath } from 'node:url'
import assert from 'node:assert'
import test from 'node:test'
import crossSpawn from 'cross-spawn'

const CMD_PATH = fileURLToPath(new URL('../bin/cmd.cjs', import.meta.url))

test('command line usage: --help', t => {
  const child = crossSpawn(CMD_PATH, ['--help'])
  child.on('error', err => {
    assert.fail(err)
  })
  child.on('close', code => {
    assert.equal(code, 0, 'zero exit code')
  })
})
