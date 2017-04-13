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
</p>

<br>

## JavaScript style guide, with linter & automatic code fixer

This module saves you (and others!) time in three ways:

- **No configuration.** The easiest way to enforce consistent style in your
  project. Just drop it in.
- **Automatically format code.** Just run `standard --fix` and say goodbye to
  messy or inconsistent code.
- **Catch style issues & programmer errors early.** Save precious code review
  time by eliminating back-and-forth between reviewer & contributor.

No decisions to make. No `.eslintrc`, `.jshintrc`, or `.jscsrc` files to manage. It just
works.

Install with:

```
npm install standard --save-dev
```

## The Rules

- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches *tons* of bugs!
- **No semicolons** – [It's][1] [fine.][2] [Really!][3]
- **Never start a line with `(`, `[`, or `` ` ``**
  - This is the **only** gotcha with omitting semicolons – *automatically checked for you!*
  - [More details][4]
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` – except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.
- **And [more goodness][5]** – *give `standard` a try today!*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES.md#semicolons
[5]: RULES.md#javascript-standard-style

To get a better idea, take a look at
[a sample file](https://github.com/expressjs/body-parser/blob/master/index.js) written
in JavaScript Standard Style. Or, check out one of the
[thousands of projects](https://raw.githubusercontent.com/feross/standard-packages/master/all.json)
that use `standard`!

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
  - [How do I hide a certain warning?](#how-do-i-hide-a-certain-warning)
  - [I use a library that pollutes the global namespace. How do I prevent "variable is not defined" errors?](#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors)
  - [How do I use experimental JavaScript (ES Next) features?](#how-do-i-use-experimental-javascript-es-next-features)
  - [Can I use a JavaScript language variant, like Flow?](#can-i-use-a-javascript-language-variant-like-flow)
  - [What about Mocha, Jasmine, QUnit, etc?](#what-about-mocha-jasmine-qunit-etc)
  - [What about Web Workers?](#what-about-web-workers)
  - [Can I check code inside of Markdown or HTML files?](#can-i-check-code-inside-of-markdown-or-html-files)
  - [Is there a Git `pre-commit` hook?](#is-there-a-git-pre-commit-hook)
  - [How do I make the output all colorful and *pretty*?](#how-do-i-make-the-output-all-colorful-and-pretty)
  - [Is there a Node.js API?](#is-there-a-nodejs-api)
  - [How do I contribute to `standard`?](#how-do-i-contribute-to-standard)
- [License](#license)

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
