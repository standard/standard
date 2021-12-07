<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/standard/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://discord.gg/ZegqCBr"><img src="https://img.shields.io/discord/612704110008991783" alt="discord"></a>
  <a href="https://github.com/standard/standard/actions/workflows/test-external.yml"><img src="https://github.com/standard/standard/actions/workflows/test-external.yml/badge.svg?branch=master" alt="External tests"></a>
  <a href="https://github.com/standard/standard/actions/workflows/test-internal.yml"><img src="https://github.com/standard/standard/actions/workflows/test-internal.yml/badge.svg?branch=master" alt="Internal tests"></a>
  <a href="https://github.com/standard/standard/actions?query=workflow%3A%22Old+test%22"><img src="https://github.com/standard/standard/workflows/Old%20test/badge.svg" alt="status badge old Node test"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/eslint-config-standard"><img src="https://img.shields.io/npm/dm/eslint-config-standard.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<h5 align="center">
  Sponsored by&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://wormhole.app/?utm_medium=sponsorship&utm_source=standard&utm_campaign=feross"><img src="https://cdn.rawgit.com/standard/standard/master/docs/logos/wormhole.png" alt="Wormhole" height=50 valign="middle"></a>
</h5>

<p align="center">
  <a href="/docs/README-en.md">English</a> •
  <a href="/docs/README-esla.md">Español (Latinoamérica)</a> •
  <a href="/docs/README-fr.md">Français</a> •
  <a href="/docs/README-id.md">Bahasa Indonesia</a> •
  <a href="/docs/README-iteu.md">Italiano (Italian)</a> •
  <a href="/docs/README-ja.md">日本語 (Japanese)</a> •
  <a href="/docs/README-kokr.md">한국어 (Korean)</a> •
  <a href="/docs/README-ptbr.md">Português (Brasil)</a> •
  <a href="/docs/README-zhcn.md">简体中文 (Simplified Chinese)</a> •
  <a href="/docs/README-zhtw.md">繁體中文 (Taiwanese Mandarin)</a>
</p>

## JavaScript style guide, linter, and formatter

This module saves you (and others!) time in three ways:

- **No configuration.** The easiest way to enforce code quality in your
  project. No decisions to make. No `.eslintrc` files to manage. It just works.
- **Automatically format code.** Just run `standard --fix` and say goodbye to
  messy or inconsistent code.
- **Catch style issues & programmer errors early.** Save precious code review
  time by eliminating back-and-forth between reviewer & contributor.

Give it a try by running `npx standard --fix` right now!

## Table of Contents

- Quick start
  - [Install](#install)
  - [Usage](#usage)
  - [What you might do if you're clever](#what-you-might-do-if-youre-clever)
- FAQ
  - [Why should I use JavaScript Standard Style?](#why-should-i-use-javascript-standard-style)
  - [Who uses JavaScript Standard Style?](#who-uses-javascript-standard-style)
  - [Are there text editor plugins?](#are-there-text-editor-plugins)
  - [Is there a readme badge?](#is-there-a-readme-badge)
  - [I disagree with rule X, can you change it?](#i-disagree-with-rule-x-can-you-change-it)
  - [But this isn't a real web standard!](#but-this-isnt-a-real-web-standard)
  - [Is there an automatic formatter?](#is-there-an-automatic-formatter)
  - [How do I ignore files?](#how-do-i-ignore-files)
  - [How do I disable a rule?](#how-do-i-disable-a-rule)
  - [I use a library that pollutes the global namespace. How do I prevent "variable is not defined" errors?](#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors)
  - [How do I use experimental JavaScript (ES Next) features?](#how-do-i-use-experimental-javascript-es-next-features)
  - [Can I use a JavaScript language variant, like Flow or TypeScript?](#can-i-use-a-javascript-language-variant-like-flow-or-typescript)
  - [What about Mocha, Jest, Jasmine, QUnit, etc?](#what-about-mocha-jest-jasmine-qunit-etc)
  - [What about Web Workers and Service Workers?](#what-about-web-workers-and-service-workers)
  - [What is the difference between warnings and errors?](#what-is-the-difference-between-warnings-and-errors)
  - [Can I check code inside of Markdown or HTML files?](#can-i-check-code-inside-of-markdown-or-html-files)
  - [Is there a Git `pre-commit` hook?](#is-there-a-git-pre-commit-hook)
  - [How do I make the output all colorful and pretty?](#how-do-i-make-the-output-all-colorful-and-pretty)
  - [Is there a Node.js API?](#is-there-a-nodejs-api)
  - [How do I contribute to StandardJS?](#how-do-i-contribute-to-standardjs)

## Install

The easiest way to use JavaScript Standard Style is to install it globally as a
Node command line program. Run the following command in Terminal:

```bash
$ npm install standard --global
```

Or, you can install `standard` locally, for use in a single project:

```bash
$ npm install standard --save-dev
```

*Note: To run the preceding commands, [Node.js](http://nodejs.org) and [npm](https://npmjs.com) must be installed.*

## Usage

After you've installed `standard`, you should be able to use the `standard` program. The
simplest use case would be checking the style of all JavaScript files in the
current working directory:

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

If you've installed `standard` locally, run with `npx` instead:

```bash
$ npx standard
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

For more info, see the conference talk ["Write Perfect Code with Standard and
ESLint"](https://www.youtube.com/watch?v=kuHfMw8j4xk). In this talk, you'll learn
about linting, when to use `standard` versus `eslint`, and how `prettier` compares
to `standard`.

## Who uses JavaScript Standard Style?

[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodejs.png>](https://nodejs.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/npm.png>](https://www.npmjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/github.png>](https://github.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/wormhole.png>](https://wormhole.app) |
|---|---|---|---|

[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/express.png>](http://expressjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/electron.png>](http://electron.atom.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nuxtjs.png>](https://nuxtjs.org/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/elastic.png>](https://www.elastic.co) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/brave.png>](https://www.brave.com) | [<img width=190 src=https://assets.vercel.com/image/upload/v1621541666/front/assets/logotype-black-on-white.png>](https://vercel.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nearform.png>](http://www.nearform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/typeform.png>](https://www.typeform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/heroku.png>](https://www.heroku.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/saucelabs.png>](https://saucelabs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/automattic.png>](https://automattic.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/godaddy.png>](https://www.godaddy.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/webtorrent.png>](https://webtorrent.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/ipfs.png>](https://ipfs.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/dat.png>](https://datproject.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bitcoinjs.png>](https://bitcoinjs.org) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/voltra.png>](https://voltra.co) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/treasuredata.png>](https://www.treasuredata.com) | [<img alt="Free MIDIs, MIDI file downloads" width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bitmidi.png>](https://bitmidi.com) | [<img width=190 alt="College essays, AP notes" src=https://cdn.rawgit.com/standard/standard/master/docs/logos/studynotes.jpg>](https://www.apstudynotes.org) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/optiopay.png>](https://www.optiopay.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/jaguar-landrover.png>](https://www.jlrtechincubator.com/jlrti/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bustle.jpg>](https://www.bustle.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zentrick.png>](https://www.zentrick.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/greenkeeper.png>](https://greenkeeper.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/karma.png>](https://karma-runner.github.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/taser.png>](https://www.taser.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/neo4j.png>](https://www.neo4j.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/rentograph.png>](https://rentograph.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/eaze.png>](https://www.eaze.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/ctrl-alt-deseat.png>](https://www.ctrlaltdeseat.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/clevertech.png>](https://clevertech.biz) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/aragon.png>](https://aragon.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/flowsent.png>](https://www.flowsent.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/puma-browser.png>](https://www.pumabrowser.com/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/webstorm.png>](https://www.jetbrains.com/webstorm/) |
|---|---|---|---|


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/fastify.png>](https://www.fastify.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/scuttlebutt.png>](https://www.scuttlebutt.nz) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/solid.png>](https://solid.inrupt.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/grab.png>](https://www.grab.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/jublia.png>](https://jublia.com/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/atom.png>](https://atom.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/peek.png>](https://www.peek.com) | Your Logo Here |
|---|---|---|---|


In addition to companies, many community members use `standard` on packages that
are [too numerous](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)
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

Alternatively, you can install **[linter-js-standard-engine][atom-4]**. Instead of
bundling a version of `standard` it will automatically use the version installed
in your current project. It will also work out of the box with other linters based
on **[standard-engine][atom-5]**.

For automatic formatting, install **[standard-formatter][atom-2]**. For snippets,
install **[standardjs-snippets][atom-3]**.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets
[atom-4]: https://atom.io/packages/linter-js-standard-engine
[atom-5]: https://github.com/standard/standard-engine

### Visual Studio Code

Install **[vscode-standard][vscode-1]**. (Includes support for automatic formatting.)

For JS snippets, install: **[vscode-standardjs-snippets][vscode-2]**. For React snippets, install **[vscode-react-standard][vscode-3]**.

[vscode-1]: https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items?itemName=TimonVS.ReactSnippetsStandard

### Vim

Install **[ale][vim-1]**. And add these lines to your `.vimrc` file.

```vim
let g:ale_linters = {
\   'javascript': ['standard'],
\}
let g:ale_fixers = {'javascript': ['standard']}
```

This sets standard as your only linter and fixer for javascript files and so prevents conflicts with eslint. For linting and automatic fixing on save, add these lines to `.vimrc`:
```vim
let g:ale_lint_on_save = 1
let g:ale_fix_on_save = 1
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

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
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

There are a couple of similar packages for anyone who does not want to completely accept `standard`:
- [semistandard](https://github.com/standard/semistandard) - standard, with semicolons
- [standardx](https://github.com/standard/standardx) - standard, with custom tweaks

If you really want to configure hundreds of ESLint rules individually, you can
always use `eslint` directly with
[eslint-config-standard](https://github.com/standard/eslint-config-standard) to
layer your changes on top.
[`standard-eject`](https://github.com/josephfrazier/standard-eject) can help
you migrate from `standard` to `eslint` and `eslint-config-standard`.

Pro tip: Just use `standard` and move on. There are actual real problems that you
could spend your time solving! :P

[bikeshedding]: https://docs.freebsd.org/en/books/faq/#bikeshed-painting

## But this isn't a real web standard!

Of course it's not! The style laid out here is not affiliated with any official web
standards groups, which is why this repo is called `standard/standard` and not
`ECMA/standard`.

The word "standard" has more meanings than just "web standard" :-) For example:

- This module helps hold our code to a high *standard of quality*.
- This module ensures that new contributors follow some basic *style standards*.

## Is there an automatic formatter?

Yes! You can use `standard --fix` to fix most issues automatically.

`standard --fix` is built into `standard` for maximum convenience. Most problems
are fixable, but some errors (like forgetting to handle errors) must be fixed
manually.

To save you time, `standard` outputs the message "`Run standard --fix to
automatically fix some problems`" when it detects problems that can be fixed
automatically.

## How do I ignore files?

Certain paths (`node_modules/`, `coverage/`, `vendor/`, `*.min.js`,
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

## How do I disable a rule?

In rare cases, you'll need to break a rule and hide the error generated by
`standard`.

JavaScript Standard Style uses [ESLint](http://eslint.org/) under-the-hood and
you can hide errors as you normally would if you used ESLint directly.

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

To use a custom parser, first install it from npm:

```bash
npm install @babel/eslint-parser --save-dev
```

Then run:

```bash
$ standard --parser @babel/eslint-parser
```

Or, add this to `package.json`:

```json
{
  "standard": {
    "parser": "@babel/eslint-parser"
  }
}
```

## Can I use a JavaScript language variant, like Flow or TypeScript?

`standard` supports the latest ECMAScript features. However, Flow and TypeScript add new
syntax to the language, so they are not supported out-of-the-box.

For TypeScript, an official variant `ts-standard` is supported and maintained that provides a very
similar experience to `standard`.

For other JavaScript language variants, `standard` supports specifying a custom JavaScript
parser as well as an ESLint plugin to handle the changed syntax. Before using a JavaScript
language variant, consider whether the added complexity is worth it.

### TypeScript

[`ts-standard`](https://github.com/standard/ts-standard) is the officially supported variant for
TypeScript. `ts-standard` supports all the same rules and options as `standard` and includes
additional TypeScript specific rules. `ts-standard` will even lint regular `javascript` files
by setting the configuration in `tsconfig.json`.

```bash
npm install ts-standard --save-dev
```

Then run (where `tsconfig.json` is located in the working directory):

```bash
$ ts-standard
```

Or, add this to `package.json`:

```json
{
  "ts-standard": {
    "project": "./tsconfig.json"
  }
}
```

*Note: To include additional files in linting such as test files, create a `tsconfig.eslint.json` file to use instead.*

If you really want to configure hundreds of ESLint rules individually, you can always use eslint
directly with [`eslint-config-standard-with-typescript`](https://github.com/standard/eslint-config-standard-with-typescript)
to layer your changes on top.

### Flow

To use Flow, you need to run `standard` with `@babel/eslint-parser` as the parser and
`eslint-plugin-flowtype` as a plugin.

```bash
npm install @babel/eslint-parser eslint-plugin-flowtype --save-dev
```

Then run:

```bash
$ standard --parser @babel/eslint-parser --plugin flowtype
```

Or, add this to `package.json`:

```json
{
  "standard": {
    "parser": "@babel/eslint-parser",
    "plugins": [ "flowtype" ]
  }
}
```

*Note: `plugin` and `plugins` are equivalent.*

## What about Mocha, Jest, Jasmine, QUnit, etc?

To support mocha in test files, add this to the top of the test files:

```js
/* eslint-env mocha */
```

Or, run:

```bash
$ standard --env mocha
```

Where `mocha` can be one of `jest`, `jasmine`, `qunit`, `phantomjs`, and so on. To see a
full list, check ESLint's
[specifying environments](http://eslint.org/docs/user-guide/configuring.html#specifying-environments)
documentation. For a list of what globals are available for these environments,
check the
[globals](https://github.com/sindresorhus/globals/blob/master/globals.json) npm
module.

*Note: `env` and `envs` are equivalent.*

## What about Web Workers and Service Workers?

Add this to the top of web worker files:

```js
/* eslint-env worker */
```

This lets `standard` (as well as humans reading the code) know that `self` is a
global in web worker code.

For Service workers, add this instead:

```js
/* eslint-env serviceworker */
```

## What is the difference between warnings and errors?

`standard` treats all rule violations as errors, which means that `standard`
will exit with a non-zero (error) exit code.

However, we may occasionally release a new major version of `standard`
which changes a rule that affects the majority of `standard` users (for example,
transitioning from `var` to `let`/`const`). We do this only when we think the
advantage is worth the cost and only when the rule is
[auto-fixable](#is-there-an-automatic-formatter).

In these situations, we have a "transition period" where the rule change is only
a "warning". Warnings don't cause `standard` to return a non-zero (error)
exit code. However, a warning message will still print to the console. During
the transition period, `using standard --fix` will update your code so that it's
ready for the next major version.

The slow and careful approach is what we strive for with `standard`. We're
generally extremely conservative in enforcing the usage of new language
features. We want using `standard` to be light and fun and so we're careful
about making changes that may get in your way. As always, you can
[disable a rule](#how-do-i-disable-a-rule) at any time, if necessary.

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

Yes! Hooks are great for ensuring that unstyled code never even makes it into your repo.
Never give style feedback on a pull request again!

You even have a choice...

### Install your own hook

```bash
#!/bin/bash

# Ensure all JavaScript files staged for commit pass standard code style
function xargs-r() {
  # Portable version of "xargs -r". The -r flag is a GNU extension that
  # prevents xargs from running if there are no input files.
  if IFS= read -r -d $'\n' path; then
    echo "$path" | cat - | xargs "$@"
  fi
}
git diff --name-only --cached --relative | grep '\.jsx\?$' | sed 's/[^[:alnum:]]/\\&/g' | xargs-r -E '' -t standard
if [[ $? -ne 0 ]]; then
  echo 'JavaScript Standard Style errors were detected. Aborting commit.'
  exit 1
fi
```

### Use a `pre-commit` hook

The [pre-commit](https://pre-commit.com/) library allows hooks to be declared within a `.pre-commit-config.yaml` configuration file in the repo, and therefore more easily maintained across a team.

Users of pre-commit can simply add `standard` to their `.pre-commit-config.yaml` file, which will automatically fix `.js`, `.jsx`, `.ts`, `.tsx`, `.mjs` and `.cjs` files:
```yaml
  - repo: https://github.com/standard/standard
    rev: master
    hooks:
      - id: standard
```

Alternatively, for more advanced styling configurations, use `standard` within the [eslint hook](https://github.com/pre-commit/mirrors-eslint):
```yaml
  - repo: https://github.com/pre-commit/mirrors-eslint
    rev: master
    hooks:
      - id: eslint
        files: \.[jt]sx?$  # *.js, *.jsx, *.ts and *.tsx
        types: [file]
        additional_dependencies:
          - eslint@latest
          - eslint-config-standard@latest
          # and whatever other plugins...
```

## How do I make the output all colorful and pretty?

The built-in output is simple and straightforward, but if you like shiny things,
install [snazzy](https://www.npmjs.com/package/snazzy):

```bash
$ npm install snazzy
```

And run:

```bash
$ standard | snazzy
```

There's also [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), and
[standard-summary](https://www.npmjs.com/package/standard-summary).

## Is there a Node.js API?

Yes!

### `async standard.lintText(text, [opts])`

Lint the provided source `text`. An `opts` object may be provided:

```js
{
  // unique to lintText
  filename: '',         // path of file containing the text being linted

  // common to lintText and lintFiles
  cwd: '',              // current working directory (default: process.cwd())
  fix: false,           // automatically fix problems
  extensions: [],       // file extensions to lint (has sane defaults)
  globals: [],          // custom global variables to declare
  plugins: [],          // custom eslint plugins
  envs: [],             // custom eslint environment
  parser: '',           // custom js parser (e.g. babel-eslint)
  usePackageJson: true, // use options from nearest package.json?
  useGitIgnore: true    // use file ignore patterns from .gitignore?
}
```

All options are optional, though some ESLint plugins require the `filename` option.

Additional options may be loaded from a `package.json` if it's found for the current working directory. See below for further details.

Returns a `Promise` resolving to the `results` or rejected with an `Error`.

The `results` object will contain the following properties:

```js
const results = {
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

### `async standard.lintFiles(files, [opts])`

Lint the provided `files` globs. An `opts` object may be provided:

```js
{
  // unique to lintFiles
  ignore: [],           // file globs to ignore (has sane defaults)

  // common to lintText and lintFiles
  cwd: '',              // current working directory (default: process.cwd())
  fix: false,           // automatically fix problems
  extensions: [],       // file extensions to lint (has sane defaults)
  globals: [],          // custom global variables to declare
  plugins: [],          // custom eslint plugins
  envs: [],             // custom eslint environment
  parser: '',           // custom js parser (e.g. babel-eslint)
  usePackageJson: true, // use options from nearest package.json?
  useGitIgnore: true    // use file ignore patterns from .gitignore?
}
```

Additional options may be loaded from a `package.json` if it's found for the current working directory. See below for further details.

Both `ignore` and `files` patterns are resolved relative to the current working directory.

Returns a `Promise` resolving to the `results` or rejected with an `Error` (same as above).

## How do I contribute to StandardJS?

Contributions are welcome! Check out the [issues](https://github.com/standard/standard/issues) or the [PRs](https://github.com/standard/standard/pulls), and make your own if you want something that you don't see there.

Want to chat? Join contributors on IRC in the `#standard` channel on freenode.

Here are some important packages in the `standard` ecosystem:

- **[standard](https://github.com/standard/standard)** - this repo
  - **[standard-engine](https://github.com/standard/standard-engine)** - cli engine for arbitrary eslint rules
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** - eslint rules for standard
  - **[eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)** - eslint rules for standard (JSX)
  - **[eslint](https://github.com/eslint/eslint)** - the linter that powers standard
- **[snazzy](https://github.com/standard/snazzy)** - pretty terminal output for standard
- **[standard-www](https://github.com/standard/standard-www)** - code for https://standardjs.com
- **[semistandard](https://github.com/standard/semistandard)** - standard, with semicolons (if you must)
- **[standardx](https://github.com/standard/standardx)** - standard, with custom tweaks

There are also many **[editor plugins](#are-there-text-editor-plugins)**, a list of
**[npm packages that use `standard`](https://github.com/standard/standard-packages)**,
and an awesome list of
**[packages in the `standard` ecosystem](https://github.com/standard/awesome-standard)**.

## Security Policies and Procedures

The `standard` team and community take all security bugs in `standard` seriously. Please see our [security policies and procedures](https://github.com/standard/.github/blob/master/SECURITY.md) document to learn how to report issues.

## License

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](https://feross.org).
