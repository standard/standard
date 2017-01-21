var standard = require('../')
var test = require('tape')

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
  debugger
  standard.lintText('console.log("hi there")\n')
    .catch(function () {
      t.fail('no error while linting')
    })
    .then(function (result) {
      t.equal(typeof result, 'object', 'result is an object')
      t.equal(result.errorCount, 1, 'should have used single quotes')
    })
})
