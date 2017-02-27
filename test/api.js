const standard = require('..');
const tap = require('tap');

tap.test('api: lintFiles', (assert) => {
  assert.plan(3);

  standard.lintFiles([], { cwd: 'lib' }, (err, result) => {
    assert.error(err, 'no error while linting');
    assert.type(result, 'object', 'result is an object');
    assert.equal(result.errorCount, 0);
  });
});

tap.test('api: lintText', (assert) => {
  assert.plan(2);

  const result = standard.lintText('console.log("hi there");\n');

  assert.type(result, 'object', 'result is an object');
  assert.equal(result.errorCount, 1, 'should have used single quotes');
});
