<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/feross/standard"><img src="https://img.shields.io/travis/feross/standard/master.svg" alt="travis"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/eslint-config-standard"><img src="https://img.shields.io/npm/dm/eslint-config-standard.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<h4 align="center">One JavaScript Style to Rule Them All</h4>

<p align="center">
  Translations:
  <a href="docs/README-ptbr.md">Português</a>,
  <a href="docs/README-esla.md">Spanish</a>,
  <a href="docs/README-zhtw.md">繁體中文</a>,
  <a href="docs/README-zhcn.md">简体中文</a>
  <a href="docs/README-kokr.md">한국어</a>
</p>

<br>

## 교정 & 자동 코드 수정을 도와주는 JavaScript 스타일 가이드

이 모듈은 다음과 같은 세 가지 방법으로 시간을 절약할 수 있습니다.

- **환경설정이 필요없습니다.** 프로젝트에서 일관된 스타일을 적용하는 가장 쉬운 방법입니다. 그냥 넣기만 하면 됩니다.
- **자동으로 코드 포멧을 맞춰줍니다.** `standard --fix`를 실행하면 지저분하거나 일관성없는 코드와 작별인사 할 수 있습니다.
- **스타일 이슈 및 프로그래머의 오류를 조기에 파악할 수 있습니다.** 리뷰어와 기여자 사이의 관계를 제거함으로써 귀중한 코드 리뷰 시간을 절약할 수 있습니다.

만드는 것의 대해 결정할 필요가 없ㅅ브니다. `.eslintrc`, `.jshintrc`, `.jscsrc` 파일들을 관리할 필요가 없이 바로 가능합니다.


설치하는 방법입니다.

```
npm install standard --save-dev
```

## 규칙

- **2칸 공백을 사용합니다.** – 들여쓰기
- **문자열에 작은 따옴표를 사용합니다.** – 누락된 곳은 제외합니다.
- **사용되지 않는 변수가 없어야 합니다.** – 이 것은 대량의 버그를 초래하는 원인입니다.
- **세미콜론이 없어야 합니다.** – [It's][1] [fine.][2] [Really!][3]
- **`(`, `[`, or `` ` ``과 같이 라인을 시작하지 말아야 합니다.**
  - 세미콜론 생략시 반드시 문제가 생길 수 있습니다. – *자동으로 체크할 수 있도록 준비되어 있습니다.*
  - [More details][4]
- **키워드 뒤에 공백을 사용합니다.** `if (condition) { ... }`
- **함수명 뒤에 공백을 사용합니다.** `function name (arg) { ... }`
- 항상 `==` 대신 `===`을 사용합니다. - 단, `null || undefined`는 `obj == null`로 확인할 수 있습니다.
- node.js에서 err 파라미터는 항상 처리해야 합니다.
- 항상 브라우저 전역에 `window` 접두사를 붙입니다. - `document`와 `navigator`는 괜찮습니다.
  - `open`, `length`, `event`, `name` 등 불분명하게 브라우저 전역을 우연히 사용하는 것을 방지합니다.
- **[더 많은 장점][5]이 있습니다.** - *`standard`를 시도해보세요!*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES.md#semicolons
[5]: RULES.md#javascript-standard-style

더 나은 아이디어를 얻으려면 JavaScript Standard 스타일로 작성된 [샘플 파일](https://github.com/expressjs/body-parser/blob/master/index.js)을 살펴보십시오. 또는 `standard`을 사용하는 [수천 개의 프로젝트](https://raw.githubusercontent.com/feross/standard-packages/master/all.json) 중 하나를 확인하십시오!

## 목차

- 빠른 시작
  - [설치](#install)
  - [사용법](#usage)
  - [이해가 잘되면 다음을 수행합니다](#what-you-might-do-if-youre-clever)
- 질의응답
  - [왜 JavaScript Standard Style을 사용해야 할까요?](#why-should-i-use-javascript-standard-style)
  - [누가 JavaScript Standard Style을 사용하나요?](#who-uses-javascript-standard-style)
  - [텍스트 편집 플러그인이 있나요?](#are-there-text-editor-plugins)
  - [readme에 넣을 수 있는 뱃지로고가 있나요?](#is-there-a-readme-badge)
  - [나와는 룰이 맞지 않습니다. 변경 가능합니까?](#i-disagree-with-rule-x-can-you-change-it)
  - [그러나 이 것은 실제 웹표준이 아닙니다!](#but-this-isnt-a-real-web-standard)
  - [자동으로 포멧을 맞춰주는 것이 있나요?](#is-there-an-automatic-formatter)
  - [어떻게하면 파일들을 무시할 수 있나요?](#how-do-i-ignore-files)
  - [어떻게하면 경고를 숨길 수 있나요?](#how-do-i-hide-a-certain-warning)
  - [전역 namespace를 오염시키는 라이브러리를 사용합니다. "vaiable is not defined" 오류를 방지하려면 어떻게 해야 하나요?](#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors)
  - [실험용 JavaScript (ES Next) 기능은 어떻게 사용하나요?](#how-do-i-use-experimental-javascript-es-next-features)
  - [Flow와 같은 JavaScrpt 언어 변형을 사용할 수 있나요?](#can-i-use-a-javascript-language-variant-like-flow)
  - [Mocha, Jasmine, QUnit 등은 어떻습니까?](#what-about-mocha-jasmine-qunit-etc)
  - [Web Workes는 어떻습니까?](#what-about-web-workers)
  - [Markdown 또는 HTML 파일 내부의 코드를 확인할 수 있나요?](#can-i-check-code-inside-of-markdown-or-html-files)
  - [Git `pre-commit` hook이 있나요?](#is-there-a-git-pre-commit-hook)
  - [출력을 모두 화려하고 예쁘게 만드려면 어떻게 해야 하나요?](#how-do-i-make-the-output-all-colorful-and-pretty)
  - [Node.js API가 있나요?](#is-there-a-nodejs-api)
  - [`standard` 기여는 어떻게 하나요?](#how-do-i-contribute-to-standard)
- [라이선스](#license)

## 설치

JavaScript Standard Style을 사용하는 가장 쉬운 방법은 Node 명령 프로그램을 통해 전역으로 설치하는 것입니다. 터미널에서 다음 명령을 실행하세요.

```bash
$ npm install standard --global
```

또는 `standard`를 로컬에 설치하여 단일 프로젝트에서 사용할 수 있습니다.

```bash
$ npm install standard --save-dev
```

*메모: 위 명령을 실행하려면 [Node.js](http://nodejs.org)와 [npm](https://npmjs.com)이 설치되어 있어야 합니다.*

## Usage

After you've installed `standard`, you should be able to use the `standard` program. The
simplest use case would be checking the style of all JavaScript files in the
current working directory:

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

You can optionally pass in a directory (or directories) using the glob pattern. Be
sure to quote paths containing glob patterns so that they are expanded by
`standard` instead of your shell:

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**Note:** by default `standard` will look for all files matching the patterns:
`**/*.js`, `**/*.jsx`.

## What you might do if you're clever

1. Add it to `package.json`

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

2. Style is checked automatically when you run `npm test`

  ```bash
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again!

## Why should I use JavaScript Standard Style?

The beauty of JavaScript Standard Style is that it's simple. No one wants to
maintain multiple hundred-line style configuration files for every module/project
they work on. Enough of this madness!

This module saves you (and others!) time in three ways:

- **No configuration.** The easiest way to enforce consistent style in your
  project. Just drop it in.
- **Automatically format code.** Just run `standard --fix` and say goodbye to
  messy or inconsistent code.
- **Catch style issues & programmer errors early.** Save precious code review
  time by eliminating back-and-forth between reviewer & contributor.

Adopting `standard` style means ranking the importance of code clarity and
community conventions higher than personal style. This might not make sense for
100% of projects and development cultures, however open source can be a hostile
place for newbies. Setting up clear, automated contributor expectations makes a
project healthier.

## Who uses JavaScript Standard Style?

Lots of folks!

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/npm.png>](https://www.npmjs.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/github.png>](https://github.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/opbeat.png>](https://opbeat.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/nearform.png>](http://www.nearform.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/brave.png>](https://www.brave.com) |
|---|---|---|---|---|

| [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/zeit.png>](https://zeit.co) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/typeform.jpg>](https://www.typeform.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/express.png>](http://expressjs.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/webtorrent.png>](https://webtorrent.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/ipfs.png>](https://ipfs.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/dat.png>](https://datproject.org) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/bitcoinjs.png>](https://bitcoinjs.org) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/atom.png>](https://atom.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/electron.png>](http://electron.atom.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/voltra.png>](https://voltra.co) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/treasuredata.png>](https://www.treasuredata.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/clevertech.png>](https://clevertech.biz) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/studynotes.jpg>](https://www.apstudynotes.org) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/optiopay.png>](https://www.optiopay.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/jaguar-landrover.png>](https://www.jlrtechincubator.com/jlrti/) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/bustle.jpg>](https://www.bustle.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/zentrick.png>](https://www.zentrick.com) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/greenkeeper.png>](https://greenkeeper.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/karma.png>](https://karma-runner.github.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/taser.png>](https://www.taser.com) |
|---|---|---|---|

In addition to companies, many community members use `standard` on packages that
are [too numerous](https://raw.githubusercontent.com/feross/standard-packages/master/all.json)
to list here.

`standard` is also the top-starred linter in GitHub's
[Clean Code Linter](https://github.com/showcases/clean-code-linters) showcase.

## Are there text editor plugins?

First, install `standard`. Then, install the appropriate plugin for your editor:

### Sublime Text

Using **[Package Control][sublime-1]**, install **[SublimeLinter][sublime-2]** and
**[SublimeLinter-contrib-standard][sublime-3]**.

For automatic formatting on save, install **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

Install **[linter-js-standard][atom-1]**.

For automatic formatting, install **[standard-formatter][atom-2]**. For snippets,
install **[standardjs-snippets][atom-3]**.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets

### Visual Studio Code

Install **[vscode-standardjs][vscode-1]**. (Includes support for automatic formatting.)

For JS snippets, install: **[vscode-standardjs-snippets][vscode-2]**. For React snippets, install **[vscode-react-standard][vscode-3]**.

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

### Vim

Install **[ale][vim-1]**.

For automatic formatting on save, add these lines to `.vimrc`:

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

Alternative plugins to consider include [neomake][vim-2] and [syntastic][vim-3], both of which have built-in support for `standard` (though configuration may be necessary).

[vim-1]: https://github.com/w0rp/ale
[vim-2]: https://github.com/neomake/neomake
[vim-3]: https://github.com/vim-syntastic/syntastic

### Emacs

Install **[Flycheck][emacs-1]** and check out the **[manual][emacs-2]** to learn
how to enable it in your projects.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

Search the extension registry for **["Standard Code Style"][brackets-1]** and click "Install".

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains, etc.)

WebStorm [recently announced native support](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)
for `standard` directly in the IDE.

If you still prefer to configure `standard` manually, [follow this guide][webstorm-1]. This applies to all JetBrains products, including PhpStorm, IntelliJ, RubyMine, etc.

[webstorm-1]: docs/webstorm.md

## Is there a readme badge?

Yes! If you use `standard` in your project, you can include one of these badges in
your readme to let people know that your code is using the standard style.

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```md
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
```

## I disagree with rule X, can you change it?

No. The whole point of `standard` is to save you time by avoiding
[bikeshedding][bikeshedding] about code style. There are lots of debates online about
tabs vs. spaces, etc. that will never be resolved. These debates just distract from
getting stuff done. At the end of the day you have to 'just pick something', and
that's the whole philosophy of `standard` -- its a bunch of sensible 'just pick
something' opinions. Hopefully, users see the value in that over defending their
own opinions.

If you really want to configure hundreds of ESLint rules individually, you can
always use `eslint` directly with
[eslint-config-standard](https://github.com/feross/eslint-config-standard) to
layer your changes on top.

Pro tip: Just use `standard` and move on. There are actual real problems that you
could spend your time solving! :P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

## But this isn't a real web standard!

Of course it's not! The style laid out here is not affiliated with any official web
standards groups, which is why this repo is called `feross/standard` and not
`ECMA/standard`.

The word "standard" has more meanings than just "web standard" :-) For example:

- This module helps hold our code to a high *standard of quality*.
- This module ensures that new contributors follow some basic *style standards*.

## Is there an automatic formatter?

Yes! You can use `standard --fix` to automatically fix most issues automatically.

`standard --fix` is built into `standard` for maximum convenience. Most problems
are fixable, but some errors (like forgetting to handle errors) must be fixed
manually.

To save you time, `standard` outputs the message "`Run standard --fix to
automatically fix some problems`" when it detects problems that can be fixed
automatically.

## How do I ignore files?

Certain paths (`node_modules/`, `coverage/`, `vendor/`, `*.min.js`, `bundle.js`,
and files/folders that begin with `.` like `.git/`) are automatically ignored.

Paths in a project's root `.gitignore` file are also automatically ignored.

Sometimes you need to ignore additional folders or specific minified files. To do
that, add a `standard.ignore` property to `package.json`:

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
npm and run:

```bash
$ standard --plugin PLUGIN_NAME
```

Or, add this to `package.json`:

```json
{
  "standard": {
    "plugins": [ "PLUGIN_NAME" ]
  }
}
```

To use Flow, you need to use `babel-eslint` as your parser. So, run
`npm install eslint-plugin-flowtype babel-eslint`, then run:

```bash
$ standard --plugin flowtype --parser babel-eslint
```

Or, add this to `package.json`:

```json
{
  "standard": {
    "plugins": [ "flowtype" ],
    "parser": "babel-eslint"
  }
}
```

If `standard` is installed globally (i.e. `npm install standard --global`), then
be sure to install `eslint-plugin-flowtype` globally as well, with
`npm install eslint-plugin-flowtype --global`.

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

Lint the provided source `text`. An `opts` object may be provided:

```js
{
  cwd: '',      // current working directory (default: process.cwd())
  filename: '', // path of the file containing the text being linted (optional, though some eslint plugins require it)
  fix: false,   // automatically fix problems
  globals: [],  // custom global variables to declare
  plugins: [],  // custom eslint plugins
  envs: [],     // custom eslint environment
  parser: ''    // custom js parser (e.g. babel-eslint)
}
```

Additional options may be loaded from a `package.json` if it's found for the
current working directory.

The `callback` will be called with an `Error` and `results` object.

The `results` object will contain the following properties:

```js
var results = {
  results: [
    {
      filePath: '',
      messages: [
        { ruleId: '', message: '', line: 0, column: 0 }
      ],
      errorCount: 0,
      warningCount: 0,
      output: '' // fixed source code (only present with {fix: true} option)
    }
  ],
  errorCount: 0,
  warningCount: 0
}
```

### `results = standard.lintTextSync(text, [opts])`

Synchronous version of `standard.lintText()`. If an error occurs, an exception is
thrown. Otherwise, a `results` object is returned.

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

Want to chat? Join contributors on IRC in the `#standard` channel on freenode.

Here are some important packages in the `standard` ecosystem:

- **[standard](https://github.com/feross/standard)** - this repo
  - **[standard-engine](https://github.com/flet/standard-engine)** - cli engine for arbitrary eslint rules
  - **[eslint-config-standard](https://github.com/feross/eslint-config-standard)** - eslint rules for standard
  - **[eslint-config-standard-jsx](https://github.com/feross/eslint-config-standard-jsx)** - eslint rules for standard (JSX)
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - custom eslint rules for standard (not part of eslint core)
  - **[eslint](https://github.com/eslint/eslint)** - the linter that powers standard
- **[snazzy](https://github.com/feross/snazzy)** - pretty terminal output for standard
- **[standard-www](https://github.com/feross/standard-www)** - code for https://standardjs.com
- **[semistandard](https://github.com/Flet/semistandard)** - standard, with semicolons (if you must)

There are also many **[editor plugins](#text-editor-plugins)**, a list of
**[npm packages that use `standard`](https://github.com/feross/standard-packages)**,
and an awesome list of
**[packages in the `standard` ecosystem](https://github.com/feross/awesome-standard)**.

## License

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
