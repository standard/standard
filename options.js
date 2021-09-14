import { readFileSync } from 'node:fs'
import eslint from 'eslint'

// eslintConfig.configFile have problem reading URLs and file:///
const configFile = new URL('./eslintrc.json', import.meta.url).toString().slice(7)
const pkgURL = new URL('./package.json', import.meta.url)
const pkgJSON = readFileSync(pkgURL, { encoding: 'utf-8' })
const pkg = JSON.parse(pkgJSON)

export default {
  bugs: pkg.bugs.url,
  cmd: 'standard',
  eslint,
  eslintConfig: {
    configFile
  },
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style',
  version: pkg.version
}
