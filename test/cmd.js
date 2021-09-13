import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'tape'
import crossSpawn from 'cross-spawn'

const __dirname = dirname(fileURLToPath(import.meta.url))

const CMD_PATH = join(__dirname, '..', 'bin', 'cmd.js')

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
