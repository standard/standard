import test from 'tape'
import standard from '../index.js'

test('api: lintFiles', async (t) => {
  t.plan(2)
  const [result] = await standard.lintFiles(['bin/cmd.js'])
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 0)
})

test('api: lintText', async (t) => {
  t.plan(2)
  const [result] = await standard.lintText('console.log("hi there")\n')
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 1, 'should have used single quotes')
})
