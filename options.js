import { join } from 'node:path'
import { readFileSync } from 'node:fs'
import eslint from 'eslint'

const pkgURL = new URL('./package.json', import.meta.url)
const pkgJSON = readFileSync(pkgURL, { encoding: 'utf-8' })
const pkg = JSON.parse(pkgJSON)

export default {
  bugs: pkg.bugs.url,
  cmd: 'standard',
  eslint,
  eslintConfig: {
    configFile: join(__dirname, 'eslintrc.json')
  },
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style',
  version: pkg.version
}
