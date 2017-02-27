const crossSpawn = require('cross-spawn');
const path = require('path');
const tap = require('tap');

const CMD_PATH = path.join(__dirname, '..', 'lib', 'bin.js');

tap.test('command line usage: --help', (assert) => {
  assert.plan(1);

  const child = crossSpawn(CMD_PATH, ['--help']);

  child.on('error', (err) => {
    assert.fail(err);
  });

  child.on('close', (code) => {
    assert.equal(code, 0, 'zero exit code');
  });
});
