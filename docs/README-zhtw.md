<h1 align="center">
  <a href="http://standardjs.com"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard － JavaScript 樣式教學" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/feross/standard"><img src="https://img.shields.io/travis/feross/standard/master.svg" alt="Travis"></a>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/dm/standard.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
</p>

<h4 align="center">統一 JavaScript，只需一種樣式</h4>

<p align="center">
  <em>
    翻譯：
    <a href="docs/README-ptbr.md">Português</a>、
    <a href="docs/README-esla.md">Spanish</a>、
    <a href="docs/README-zhtw.md">繁體中文</a>
  </em>
</p>

<br>

什麼都不用想。不用管理 `.eslintrc` 、 `.jshintrc` 或 `.jscsrc` 等檔案。就是這麼容易。

這個模組透過兩種方法，省下你（和其他人！）的時間：

- **不用設定檔：** 在專案中最簡單的方法去強迫統一樣式，就是不用設定檔。
- **在提交 PR 前就可以發現樣式錯誤：** 幫專案維護者和貢獻者省下寶貴的 Code Review 時間，減少來回審核的次數。

安裝：

```
npm install standard --save-dev
```

## 語法規則

- **兩個空白** － 縮排
- **字串用單引號** － 除非要避免跳脫字元
- **沒有不必要的變數** － 這可以解決 *超多* 的 Bug ！
- **不要加分號** － [這真的][1] [很 OK，][2] [真的！][3]
- **絕對不要用 `(` 、 `[` 或 `` ` `` 當開頭**
  - 這是不用分號 **唯一** 可能遇到的問題 － *那就自動幫你檢查吧！*
  - [更多解釋][4]
- **關鍵字後加空白** `if (condition) { ... }`
- **函數名稱後加空白** `function name (arg) { ... }`
- 統一用 `===` 取代 `==` － 但是 `obj == null` 可以用來檢查 `null || undefined`。
- 一定要例外處理 node.js 中的 `err` 參數
- 一定要對瀏覽器中的全域變數加上 `window` 前綴 － 除了 `document` 和 `navigator` 可以不用
  - 避免使用那些命名得很爛的全域變數，像是 `open` 、 `length` 、 `event` 和 `name`。
- **還有 [更多更多的好處][5]** － *今天就來試試 `standard` 吧！*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES.md#semicolons
[5]: RULES.md#javascript-standard-style

看看一些[用 JavaScript Standard Style 寫的範例](https://github.com/expressjs/body-parser/blob/master/index.js)來了解更多，或查看其他[數以千計使用 `standard` 的專案。](https://raw.githubusercontent.com/feross/standard-packages/master/all.json)

## 目錄

- 快速入門
  - [安裝](#%E5%AE%89%E8%A3%9D)
  - [用法](#%E7%94%A8%E6%B3%95)
  - [如果你還是不懂的話可以](#%E5%A6%82%E6%9E%9C%E4%BD%A0%E9%82%84%E6%98%AF%E4%B8%8D%E6%87%82%E7%9A%84%E8%A9%B1%E5%8F%AF%E4%BB%A5)
- FAQ
  - [為什麼我要用 JavaScript Standard Style ？](#why-should-i-use-javascript-standard-style)
  - [誰在用 JavaScript Standard Style ？](#who-uses-javascript-standard-style)
  - [有文字編輯器的插件嗎？](#are-there-text-editor-plugins)
  - [有 README 勳章嗎？](#is-there-a-readme-badge)
  - [我不同意某條規定，你們可以改一下嗎？](#i-disagree-with-rule-x-can-you-change-it)
  - [但這不是真實網路中的標準！](#but-this-isnt-a-real-web-standard)
  - [有自動格式化工具嗎？](#is-there-an-automatic-formatter)
  - [如何忽略某些檔案？](#how-do-i-ignore-files)
  - [如何隱藏某些警告？](#how-do-i-hide-a-certain-warning)
  - [我用了些函式庫污染了全域變數。我該怎麼防止 "variable is not defined" 錯誤？](#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors)
  - [如何使用實驗性質的 JavaScript (ES Next) 功能？](#how-do-i-use-experimental-javascript-es-next-features)
  - [我可以使用 JavaScript 的變種，像是 Flow 嗎？](#can-i-use-a-javascript-language-variant-like-flow)
  - [Mocha, Jasmine, QUnit 等等該怎麼辦？](#what-about-mocha-jasmine-qunit-etc)
  - [Web Workers 呢？](#what-about-web-workers)
  - [可以檢查 Markdown 或 HTML 檔裡面的程式嗎？](#can-i-check-code-inside-of-markdown-or-html-files)
  - [有 Git `pre-commit` 的插件嗎？](#is-there-a-git-pre-commit-hook)
  - [如何將輸出變得彩色和*美麗*？](#how-do-i-make-the-output-all-colorful-and-pretty)
  - [有 Node.js 的 API 嗎？](#is-there-a-nodejs-api)
  - [我如何貢獻 `standard` ？](#how-do-i-contribute-to-standard)
- [授權](#license)

## 安裝

使用 JavaScript Standard Style 最簡單的方法就是安裝在全域下，變成一個 Node 指令列程式。在 Terminal 中執行以下指令來安裝：

```bash
$ npm install standard --global
```

或者，你也可以在單一專案下局部的安裝 `standard`：

```bash
$ npm install standard --save-dev
```
*注意: 為了執行前面的指令，請確保你已經安裝了  [Node.js](http://nodejs.org) 和 [npm](https://npmjs.com)。*

## 用法

在你安裝 `standard` 之後，你就可以使用 `standard` 這支程式了。最簡單的用法就是在當前目錄下檢查所有 JavaScript 檔案的樣式：

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

你也可以選擇性的檢查部分目錄們（請確保路徑前後有引號，避免出錯）。

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**注意：** `standard` 預設會檢查所有符合名稱為 `**/*.js` 和 `**/*.jsx` 的檔案。

## 如果你還是不懂的話可以

1. 把以下加入 `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "standard": "*"
    },
    "scripts": {
      "test": "standard && node my-tests.js"
    }
  }
  ```

2. 這樣當你執行 `npm test` 的時候，就會自動檢查樣式了

  ```bash
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. 從此跟樣式不符的 PR 說掰掰！

## 為什麼我要用 JavaScript Standard Style？

JavaScript Standard Style 的美來自於它的簡單，沒有人想要在每個專案、模組中維護好幾個數百行的樣式設定檔吧？別傻啊！

這個模組透過兩種方法，省下你的時間：

- **不用設定檔：** 在專案中最簡單的方法去強迫統一樣式，就是不用設定檔。
- **在提交 PR 前就可以發現樣式錯誤：** 幫專案維護者和貢獻者省下寶貴的 Code Review 時間，減少來回審核的次數。

採用 `standard style` 代表把程式碼的簡潔和群體規範，看得比個人風格重要。這可能不是對於所有專案和開發環境都合情合理。然而，開源軟體可能是一個對於新手充滿敵意的環境，訂定簡單、一致的貢獻準則，才可以專案更健康，有更多新人投入。

## 誰用了 JavaScript Standard Style?

超多人的啦！

[<img width=150 src=docs/logos/npm.png>](https://www.npmjs.com) | [<img width=150 src=docs/logos/github.png>](https://github.com) | [<img width=150 src=docs/logos/opbeat.png>](https://opbeat.com) | [<img width=150 src=docs/logos/nearform.png>](http://www.nearform.com) | [<img width=150 src=docs/logos/brave.png>](https://www.brave.com) |
|---|---|---|---|---|

| [<img width=150 src=docs/logos/zeit.png>](https://zeit.co) | [<img width=150 src=docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=150 src=docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=150 src=docs/logos/typeform.jpg>](https://www.typeform.com) | [<img width=150 src=docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
|---|---|---|---|---|

[<img width=150 src=docs/logos/express.png>](http://expressjs.com) | [<img width=150 src=docs/logos/webtorrent.png>](https://webtorrent.io) | [<img width=150 src=docs/logos/ipfs.png>](https://ipfs.io) | [<img width=150 src=docs/logos/dat.png>](https://datproject.org) | [<img width=150 src=docs/logos/bitcoinjs.png>](https://bitcoinjs.org) |
|---|---|---|---|---|

[<img width=150 src=docs/logos/atom.png>](https://atom.io) | [<img width=150 src=docs/logos/electron.png>](http://electron.atom.io) | [<img width=150 src=docs/logos/voltra.png>](https://voltra.co) | [<img width=150 src=docs/logos/treasuredata.png>](https://www.treasuredata.com) | [<img width=150 src=docs/logos/clevertech.png>](https://clevertech.biz) |
|---|---|---|---|---|

[<img width=150 src=docs/logos/studynotes.jpg>](https://www.apstudynotes.org) | [<img width=150 src=docs/logos/optiopay.png>](https://www.optiopay.com) | [<img width=150 src=docs/logos/jaguar-landrover.png>](https://www.jlrtechincubator.com/jlrti/) | [<img width=150 src=docs/logos/bustle.jpg>](https://www.bustle.com) | [<img width=150 src=docs/logos/zentrick.png>](https://www.zentrick.com) |
|---|---|---|---|---|

[<img width=150 src=docs/logos/nodesource.png>](https://nodesource.com) | [<img width=150 src=docs/logos/greenkeeper.png>](https://greenkeeper.io) | [<img width=150 src=docs/logos/karma.png>](https://karma-runner.github.io) | [<img width=150 src=docs/logos/taser.png>](https://www.taser.com) |
|---|---|---|---|---|

除了公司之外，非常多的社群也在套件中採用了 `standard` [因為太多了](https://raw.githubusercontent.com/feross/standard-packages/master/all.json) 無法在此一一列舉。

`standard` 也是 GitHub 的
[Clean Code Linter](https://github.com/showcases/clean-code-linters) 中，最多人給星的專案。

## 有文字編輯器的插件嗎？

首先，安裝 `standard`。接下來，就可以依據你使用的編輯器安裝對應的插件了：

### Sublime Text

使用 **[Package Control][sublime-1]** 安裝 **[SublimeLinter][sublime-2]** 和
**[SublimeLinter-contrib-standard][sublime-3]**。

如果想要在儲存時自動修改樣式，可以安裝 **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

安裝 **[linter-js-standard][atom-1]**.

如果想要在儲存時自動修改樣式，可以安裝  **[standard-formatter][atom-2]**。或是安裝 **[standardjs-snippets][atom-3]** 可以使用自動補完。

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets

### Visual Studio Code

安裝 **[vscode-standardjs][vscode-1]**. (包含自動修改樣式的支援。)

需要 JS 自動補完，可以安裝： **[vscode-standardjs-snippets][vscode-2]**。 需要 React 自動補完，可以安裝： **[vscode-react-standard][vscode-3]**。

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

### Vim

安裝 **[Syntastic][vim-1]**，然後把以下加到 `.vimrc` 中:

```vim
let g:syntastic_javascript_checkers = ['standard']
```

如果想要在儲存時自動修改樣式，加入以下到 `.vimrc` 中：

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

[vim-1]: https://github.com/scrooloose/syntastic

### Emacs

安裝 **[Flycheck][emacs-1]** 然後察看 **[使用手冊][emacs-2]** 學習如何在專案中使用。

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

搜尋 **["Standard Code Style"][brackets-1]** 然後按 "Install".

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains, etc.)

WebStorm [近期發佈了原生支援](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)，可以直接在 IDE 中使用 `standard`。

如果你還是傾向要手動設定 `standard`，[可以參考這個教學][webstorm-1]。這可以套用至所有 JetBrains 的產品，包括 PhpStorm、IntelliJ、RubyMine 等等。

[webstorm-1]: docs/webstorm.md

## 有 README 專用的 standard 徽章嗎？

可以！如果你在專案中使用了 `standard`，你可以在 README 中加入以下的徽章，讓大家知道你的程式碼使用了 standard 的標準。


[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```md
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
```

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

```md
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
```

## 我不同意其中某些規則，你們可以改一下嗎？

不行。`standard` 的重點就是在於避免那些對於程式碼的風格[永遠不會有答案的爭議上][bikeshedding]，像是從古至今就在爭論的 tab vs 空白等等。這些問題是永遠不會被解決的，但永無止盡的爭論卻會讓大家分心不做正事。最後你還是得決定去「選擇其中一個」，這就是 `standard` 的哲學 —— 一大堆合理的「選擇其中一個」。幸運的是，很多採用 standard 的使用者已經發現使用後獲得的成果已經比捍衛自己的偏見好多了。

如果你真的非常想要去客製化設定幾百行的規則，應該直接去用 `eslint` 和 [eslint-config-standard](https://github.com/feross/eslint-config-standard)，可以把你想要的規則列在最前面。

專業建議：就直接用 `standard` 然後開始吧。把時間花在那些你真正該解決的問題上吧！:P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

## 但這不是真正的網路標準！

這當然不是！這個風格訂定並不是隸屬於什麼正式網路團體的，所以這個專案才叫做 `feross/standard` 而不是
`ECMA/standard`.

"standard" 這個字的意義比 "web standard" 的意義來得多 :-)。舉例來說：

- 這個模組讓你的程式碼有很高的 *standard of quality* 。
- 這個模組確保新的貢獻者遵循基本的 *style standards*。

## 有自動修正的工具嗎？

有的！你可以用 `standard --fix` 去自動化修正某些問題。

`standard --fix` 為了方便直接內建在 `standard` 裡面。大部分的問題都是可以解決的，但一些問題（像是忘記處理錯誤）則必須要手動修正。

為了省下你寶貴的時間，`standard` 如果偵測到發生的問題是可以被自動修正的話，
會輸出 "`Run standard --fix to
automatically fix some problems`" 。

## 如何忽略檔案？

一些路徑 （`node_modules/`、`coverage/`、`vendor/`、`*.min.js`、`bundle.js` 和  `.` 開頭的檔案和資料夾，像是 `.git/`）會自動被忽略。

專案根目錄下 `.gitignore` 中列出來的路徑也會被自動忽略。

有時候你還是需要去忽略一些資料夾或一些最小化後的檔案，可以在 `package.json` 中加個 `standard.ignore` 屬性：

```json
"standard": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

## How do I hide a certain warning?

In rare cases, you'll need to break a rule and hide the warning generated by
`standard`.

JavaScript Standard Style uses [ESLint](http://eslint.org/) under-the-hood and
you can hide warnings as you normally would if you used ESLint directly.

To get verbose output (so you can find the particular rule name to ignore), run:

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

Disable **all rules** on a specific line:

```js
file = 'I know what I am doing' // eslint-disable-line
```

Or, disable **only** the `"no-use-before-define"` rule:

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

Or, disable the `"no-use-before-define"` rule for **multiple lines**:

```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

## I use a library that pollutes the global namespace. How do I prevent "variable is not defined" errors?

Some packages (e.g. `mocha`) put their functions (e.g. `describe`, `it`) on the
global object (poor form!). Since these functions are not defined or `require`'d
anywhere in your code, `standard` will warn that you're using a variable that is
not defined (usually, this rule is really useful for catching typos!). But we want
to disable it for these global variables.

To let `standard` (as well as humans reading your code) know that certain variables
are global in your code, add this to the top of your file:

```js
/* global myVar1, myVar2 */
```

If you have hundreds of files, it may be desirable to avoid adding comments to
every file. In this case, run:

```bash
$ standard --global myVar1 --global myVar2
```

Or, add this to `package.json`:

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

*Note: `global` and `globals` are equivalent.*

## How do I use experimental JavaScript (ES Next) features?

`standard` supports the latest ECMAScript features, ES8 (ES2017), including
language feature proposals that are in "Stage 4" of the proposal process.

To support experimental language features, `standard` supports specifying a
custom JavaScript parser. Before using a custom parser, consider whether the added
complexity is worth it.

To use a custom parser, install it from npm (example: `npm install babel-eslint`)
and run:

```bash
$ standard --parser babel-eslint
```

Or, add this to `package.json`:

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

If `standard` is installed globally (i.e. `npm install standard --global`), then
be sure to install `babel-eslint` globally as well, with
`npm install babel-eslint --global`.

## Can I use a JavaScript language variant, like Flow?

Before using a custom JS language variant, consider whether the added complexity
(and effort required to get new contributors up-to-speed) is worth it.

`standard` supports ESLint plugins. Use one of these to transform your code into
valid JavaScript before `standard` sees it. To use a custom parser, install it from
npm (example: `npm install eslint-plugin-flowtype`) and run:

```bash
$ standard --plugin flowtype
```

Or, add this to `package.json`:

```json
{
  "standard": {
    "plugins": [ "flowtype" ]
  }
}
```

If `standard` is installed globally (i.e. `npm install standard --global`), then
be sure to install `eslint-plugin-flowtype` globally as well, with
`npm install eslint-plugin-flowtype -g`.

*Note: `plugin` and `plugins` are equivalent.*

## What about Mocha, Jasmine, QUnit, etc?

To support mocha in your test files, add this to the beginning of your test files:

```js
/* eslint-env mocha */
```

Or, run:

```bash
$ standard --env mocha
```

Where `mocha` can be one of `jasmine`, `qunit`, `phantomjs`, and so on. To see a
full list, check ESLint's
[specifying environments](http://eslint.org/docs/user-guide/configuring.html#specifying-environments)
documentation. For a list of what globals are available for these environments,
check the
[globals](https://github.com/sindresorhus/globals/blob/master/globals.json) npm
module.

*Note: `env` and `envs` are equivalent.*

## What about Web Workers?

Add this to the top of your files:

```js
/* eslint-env serviceworker */
```

This lets `standard` (as well as humans reading your code) know that `self` is a
global in web worker code.

## Can I check code inside of Markdown or HTML files?

To check code inside Markdown files, use [`standard-markdown`](https://www.npmjs.com/package/standard-markdown).

Alternatively, there are ESLint plugins that can check code inside Markdown, HTML,
and many other types of language files:

To check code inside Markdown files, use an ESLint plugin:

```bash
$ npm install eslint-plugin-markdown
```

Then, to check JS that appears inside code blocks, run:

```bash
$ standard --plugin markdown '**/*.md'
```

To check code inside HTML files, use an ESLint plugin:

```bash
$ npm install eslint-plugin-html
```

Then, to check JS that appears inside `<script>` tags, run:

```bash
$ standard --plugin html '**/*.html'
```

## Is there a Git `pre-commit` hook?

Funny you should ask!

```sh
#!/bin/sh
# Ensure all javascript files staged for commit pass standard code style
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs standard
if [ $? -ne 0 ]; then exit 1; fi
```

## How do I make the output all colorful and *pretty*?

The built-in output is simple and straightforward, but if you like shiny things,
install [snazzy](https://www.npmjs.com/package/snazzy):

```bash
$ npm install snazzy
```

And run:

```bash
$ standard --verbose | snazzy
```

There's also [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), and
[standard-summary](https://www.npmjs.com/package/standard-summary).

## Is there a Node.js API?

Yes!

### `standard.lintText(text, [opts], callback)`

Lint the provided source `text` to enforce JavaScript Standard Style. An `opts` object may
be provided:

```js
var opts = {
  fix: false,   // automatically fix problems
  globals: [],  // global variables to declare
  plugins: [],  // eslint plugins
  envs: [],     // eslint environment
  parser: ''    // js parser (e.g. babel-eslint)
}
```

The `callback` will be called with an `Error` and `results` object:

```js
var results = {
  results: [
    {
      filePath: '',
      messages: [
        { ruleId: '', message: '', line: 0, column: 0 }
      ],
      errorCount: 0,
      warningCount: 0
    }
  ],
  errorCount: 0,
  warningCount: 0
}
```

### `standard.lintFiles(files, [opts], callback)`

Lint the provided `files` globs. An `opts` object may be provided:

```js
var opts = {
  ignore: [],   // file globs to ignore (has sane defaults)
  cwd: '',      // current working directory (default: process.cwd())
  fix: false,   // automatically fix problems
  globals: [],  // global variables to declare
  plugins: [],  // eslint plugins
  envs: [],     // eslint environment
  parser: ''    // js parser (e.g. babel-eslint)
}
```

The `callback` will be called with an `Error` and `results` object (same as above).

## How do I contribute to `standard`?

Contributions are welcome! Check out the [issues](https://github.com/feross/standard/issues) or the [PRs](https://github.com/feross/standard/pulls), and make your own if you want something that you don't see there.

Join other contributors in `#standard` on freenode to chat!

Here are some important packages in the `standard` ecosystem:

- **[standard](https://github.com/feross/standard)** - this repo
  - **[standard-engine](https://github.com/flet/standard-engine)** - cli engine for arbitrary eslint rules
  - **[eslint-config-standard](https://github.com/feross/eslint-config-standard)** - eslint rules for standard
  - **[eslint-config-standard-jsx](https://github.com/feross/eslint-config-standard-jsx)** - eslint rules for standard (JSX)
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - custom eslint rules for standard (not part of eslint core)
  - **[eslint](https://github.com/eslint/eslint)** - the linter that powers standard
- **[snazzy](https://github.com/feross/snazzy)** - pretty terminal output for standard
- **[standard-www](https://github.com/feross/standard-www)** - code for http://standardjs.com
- **[semistandard](https://github.com/Flet/semistandard)** - standard, with semicolons (if you must)

There are also many **[editor plugins](#text-editor-plugins)**, a list of
**[npm packages that use `standard`](https://github.com/feross/standard-packages)**,
and an awesome list of
**[packages in the `standard` ecosystem](https://github.com/feross/awesome-standard)**.

## License

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
