import test from 'tape'
import linter from '../index.js'

test('api: lintFiles', t => {
  t.plan(3)
  linter.lintFiles(['bin/cmd.js'], {}, (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 0)
  })
})

test('api: lintText', t => {
  t.plan(3)
  linter.lintText('console.log("hi there")\n', (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'should have used single quotes')
  })
})
