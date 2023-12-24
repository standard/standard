import assert from 'node:assert'
import test from 'node:test'
import standard from '../index.js'

test('api: lintFiles', async (t) => {
  // The node process calling this is at the root level
  const [result] = await standard.lintFiles('./bin/cmd.cjs')
  assert.equal(typeof result, 'object', 'result is an object')
  assert.equal(result.errorCount, 0)
})

test('api: lintText', async (t) => {
  const [result] = await standard.lintText('console.log("hi there")\n')
  assert.equal(typeof result, 'object', 'result is an object')
  assert.equal(result.errorCount, 1, 'should have used single quotes')
})
