import { dirname, join } from 'node:path'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import eslint from 'eslint'

const __dirname = dirname(fileURLToPath(import.meta.url))
const json = readFileSync('./package.json', 'utf8')
const pkg = JSON.parse(json)
const { bugs, homepage, version } = pkg

export default {
  bugs: bugs.url,
  cmd: 'standard',
  eslint,
  eslintConfig: {
    configFile: join(__dirname, 'eslintrc.json')
  },
  homepage: homepage,
  tagline: 'Use JavaScript Standard Style',
  version: version
}
