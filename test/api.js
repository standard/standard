const standard = require('../')
const test = require('tape')
const isPlainObj = require('is-plain-obj')

test('api: lintFiles', (t) => {
  t.plan(2)
  standard.lintFiles([], { cwd: 'bin' })
    .catch(() => {
      t.fail('no error while linting')
    })
    .then((result) => {
      t.equal(typeof result, 'object', 'result is an object')
      t.equal(result.errorCount, 0)
    })
})

test('api: lintText', (t) => {
  t.plan(2)
  standard.lintText('console.log("hi there")\n')
    .catch(() => {
      t.fail('no error while linting')
    })
    .then((result) => {
      t.equal(typeof result, 'object', 'result is an object')
      t.equal(result.errorCount, 1, 'should have used single quotes')
    })
})

test('api: does not expose instance', (t) => {
  t.plan(1)
  t.true(isPlainObj(standard))
})
