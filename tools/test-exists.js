/**
 * Sanity check that all repos in test.json actually exist on GitHub
 */

import { readFileSync } from 'node:fs'
import get from 'simple-get'
import series from 'run-series'

const testPkgs = JSON.parse(readFileSync(new URL('../test/external/test.json', import.meta.url), 'utf8'))

series(testPkgs.map(function (pkg) {
  return function (cb) {
    console.log('checking ' + pkg.repo + '...')
    get.head(pkg.repo, function (err, res) {
      if (res.statusCode !== 200) {
        err = new Error('Non-200 status code ' + res.statusCode)
      }
      if (err) {
        err.message = pkg.name + ': ' + err.message
        cb(err)
      } else {
        cb(null)
      }
    })
  }
}), function (err) {
  if (err) throw err
})
