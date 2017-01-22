const standard = require('../')
const test = require('tape')
const isPlainObj = require('is-plain-obj')

test('api: lintFiles', function (t) {
  t.plan(2)
  standard.lintFiles([], { cwd: 'bin' })
    .catch(function () {
      t.fail('no error while linting')
    })
    .then(function (result) {
      t.equal(typeof result, 'object', 'result is an object')
      t.equal(result.errorCount, 0)
    })
})

test('api: lintText', function (t) {
  t.plan(2)
  standard.lintText('console.log("hi there")\n')
    .catch(function () {
      t.fail('no error while linting')
    })
    .then(function (result) {
      t.equal(typeof result, 'object', 'result is an object')
      t.equal(result.errorCount, 1, 'should have used single quotes')
    })
})

test('api: does not expose instance', function (t) {
  t.plan(1)
  t.true(isPlainObj(standard))
})
