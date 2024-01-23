import test from 'node:test'
import assert from 'node:assert'
import standard from '../index.js'

test('load config in eslint to validate all rule syntax is correct', async function (t) {
  const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'
  const [result] = await standard.lintText(code)
  assert.equal(result.errorCount, 0)
})

test('ensure we allow top level await', async function (t) {
  const code = 'const foo = await 1\nconst bar = function () {}\nawait bar(foo)\n'
  const [result] = await standard.lintText(code)
  assert.equal(result.errorCount, 0)
})
