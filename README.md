<h1 align="center">
  <a href="http://standardjs.com"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<h4 align="center">One JavaScript Style Guide to Rule Them All</h4>

<p align="center">
  <a href="https://travis-ci.org/feross/standard"><img src="https://img.shields.io/travis/feross/standard/master.svg" alt="Travis"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/dm/standard.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
</p>
<br>

No decisions to make. No `.eslintrc`, `.jshintrc`, or `.jscsrc` files to manage. It just
works.

This module saves you (and others!) time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your
  project. Just drop it in.
- **Catch style errors before they're submitted in PRs.** Saves precious code
  review time by eliminating back-and-forth between maintainer and contributor.

Install with:

```
npm install standard
```

### The Rules

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
[a sample file](https://github.com/feross/bittorrent-dht/blob/master/client.js) written
in JavaScript Standard Style, or check out some of
[the repositories](https://github.com/feross/standard-packages/blob/master/all.json) that use
`standard`.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [What you might do if you're clever](#what-you-might-do-if-youre-clever)
  - [Badge](#badge)
  - [Text editor plugins](#text-editor-plugins)
- [FAQ](#faq)
  - [Why would I use JavaScript Standard Style?](#why-would-i-use-javascript-standard-style)
  - [I disagree with rule X, can you change it?](#i-disagree-with-rule-x-can-you-change-it)
  - [But this isn't a real web standard!](#but-this-isnt-a-real-web-standard)
  - [Is there an automatic formatter?](#is-there-an-automatic-formatter)
  - [How do I ignore files?](#how-do-i-ignore-files)
  - [How do I hide a certain warning?](#how-do-i-hide-a-certain-warning)
  - [I use a library that pollutes the global namespace. How do I prevent "variable is not defined" errors?](#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors)
  - [Can I use a custom JS parser for bleeding-edge ES next support?](#can-i-use-a-custom-js-parser-for-bleeding-edge-es-next-support)
  - [Can I use a JavaScript language variant, like Flow?](#can-i-use-a-javascript-language-variant-like-flow)
  - [Can you make rule X configurable?](#can-you-make-rule-x-configurable)
  - [What about Web Workers?](#what-about-web-workers)
  - [What about Mocha, Jasmine, QUnit, etc?](#what-about-mocha-jasmine-qunit-etc)
  - [Is there a Git `pre-commit` hook?](#is-there-a-git-pre-commit-hook)
  - [How do I make the output all colorful and *pretty*?](#how-do-i-make-the-output-all-colorful-and-pretty)
  - [I want to contribute to `standard`. What packages should I know about?](#i-want-to-contribute-to-standard-what-packages-should-i-know-about)
- [Node.js API](#nodejs-api)
  - [`standard.lintText(text, [opts], callback)`](#standardlinttexttext-opts-callback)
  - [`standard.lintFiles(files, [opts], callback)`](#standardlintfilesfiles-opts-callback)
- [IRC channel](#irc-channel)
- [License](#license)

## Install

The easiest way to use JavaScript Standard Style to check your code is to install
it globally as a Node command line program. To do so, simply run the following
command in your terminal (flag `-g` installs `standard` globally on your system,
omit it if you want to install in the current working directory):

```bash
npm install standard --global
```

Or, you can run this command to install `standard` locally, for use in your module:

```bash
npm install standard --save-dev
```

[Node.js](http://nodejs.org) and [npm](https://npmjs.com) are required to run the preceding commands.

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
sure to quote paths containing glob patterns so that they are expanded by standard
instead of your shell:

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**Note:** by default `standard` will look for all files matching the patterns:
`**/*.js`, `**/*.jsx`.

### What you might do if you're clever

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

2. Check style automatically when you run `npm test`

  ```
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again!



### Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```markdown
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
```

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

```markdown
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
```

### Text editor plugins

First, install `standard`. Then, install the appropriate plugin for your editor:

#### [Sublime Text](https://www.sublimetext.com/)

Using **[Package Control][sublime-1]**, install **[SublimeLinter][sublime-2]** and
**[SublimeLinter-contrib-standard][sublime-3]**.

For automatic formatting on save, install **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

#### [Atom](https://atom.io)

Install **[linter-js-standard][atom-1]**.

For automatic formatting, install **[standard-formatter][atom-2]**. For snippets,
install **[standardjs-snippets][atom-3]**.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets

#### [Vim](http://www.vim.org/)

Install **[Syntastic][vim-1]** and add this line to `.vimrc`:

```vim
let g:syntastic_javascript_checkers = ['standard']
```

For automatic formatting on save, add these two lines to `.vimrc`:

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

[vim-1]: https://github.com/scrooloose/syntastic

#### [Emacs](https://www.gnu.org/software/emacs/)

Install **[Flycheck][emacs-1]** and check out the **[manual][emacs-2]** to learn
how to enable it in your projects.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

#### [Brackets](http://brackets.io/)

Search the extension registry for **["Standard Code Style"][brackets-1]**.

[brackets-1]: https://github.com/ishamf/brackets-standard/

#### [Visual Studio Code](https://code.visualstudio.com/)

Install **[vscode-standardjs][vscode-1]**. (Includes support for automatic formatting.)

For JS snippets, install: **[vscode-standardjs-snippets][vscode-2]**. For React snippets, install **[vscode-react-standard][vscode-3]**.

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

#### [WebStorm/PhpStorm][webstorm-1]

Both WebStorm and PhpStorm can be [configured for Standard Style][webstorm-2].

[webstorm-1]: https://www.jetbrains.com/webstorm/
[webstorm-2]: https://github.com/feross/standard/blob/master/docs/webstorm.md

## FAQ

### Why would I use JavaScript Standard Style?

The beauty of JavaScript Standard Style is that it's simple. No one wants to
maintain multiple hundred-line style configuration files for every module/project
they work on. Enough of this madness!

This module saves you time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your
  project. Just drop it in.
- **Catch style errors before they're submitted in PRs.** Saves precious code
  review time by eliminating back-and-forth between maintainer and contributor.

Adopting `standard` style means ranking the importance of code clarity and
community conventions higher than personal style. This might not make sense for
100% of projects and development cultures, however open source can be a hostile
place for newbies. Setting up clear, automated contributor expectations makes a
project healthier.

### I disagree with rule X, can you change it?

No. The whole point of `standard` is to avoid [bikeshedding][bikeshedding] about
style. There are lots of debates online about tabs vs. spaces, etc. that will never
be resolved. These debates just distract from getting stuff done. At the end of the
day you have to 'just pick something', and that's the whole philosophy of
`standard` -- its a bunch of sensible 'just pick something' opinions. Hopefully,
users see the value in that over defending their own opinions.

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

### But this isn't a real web standard!

Of course it's not! The style laid out here is not affiliated with any official web
standards groups, which is why this repo is called `feross/standard` and not
`ECMA/standard`.

The word "standard" has more meanings than just "web standard" :-) For example:

- This module helps hold our code to a high *standard of quality*.
- This module ensures that new contributors follow some basic *style standards*.

### Is there an automatic formatter?

Yes! You can use `standard --fix` to automatically fix most issues automatically.

`standard --fix` is built into `standard` (since v8.0.0) for maximum convenience.
Lots of problems are fixable, but some errors, like forgetting to handle the error
in node-style callbacks, must be fixed manually.

To save you time, `standard` outputs a message ("Run `standard --fix` to
automatically fix some problems.") when it detects problems that can be fixed
automatically.

### How do I ignore files?

The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden
files/folders (beginning with `.`), and all patterns in a project's root
`.gitignore` file are automatically ignored.

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

### How do I hide a certain warning?

In rare cases, you'll need to break a rule and hide the warning generated by
`standard`.

JavaScript Standard Style uses [`eslint`](http://eslint.org/) under-the-hood and
you can hide warnings as you normally would if you used `eslint` directly.

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

### I use a library that pollutes the global namespace. How do I prevent "variable is not defined" errors?

Some packages (e.g. `mocha`) put their functions (e.g. `describe`, `it`) on the
global object (poor form!). Since these functions are not defined or `require`d
anywhere in your code, `standard` will warn that you're using a variable that is
not defined (usually, this rule is really useful for catching typos!). But we want
to disable it for these global variables.

To let `standard` (as well as humans reading your code) know that certain variables
are global in your code, add this to the top of your file:

```
/* global myVar1, myVar2 */
```

If you have hundreds of files, adding comments to every file can be tedious. In
these cases, you can add this to `package.json`:

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

### Can I use a custom JS parser for bleeding-edge ES next support?

Before you use a custom parser, consider whether the added complexity in your
build process is worth it.

`standard` supports custom JS parsers. To use a custom parser, install it from npm
(example: `npm install babel-eslint`) and add this to your `package.json`:

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

If you're using `standard` globally (you installed it with `-g`), then you also
need to install `babel-eslint` globally with `npm install babel-eslint -g`.

### Can I use a JavaScript language variant, like Flow?

Before you use a custom JS language variant, consider whether the added complexity
in your build process (and effort required to get new contributors up-to-speed) is
worth it.

`standard` supports ESLint plugins. Use one of these to transform your code into
valid JavaScript before `standard` sees it. To use a custom parser, install it from
npm (example: `npm install eslint-plugin-flowtype`) and add this to your
`package.json`:

```json
{
  "standard": {
    "parser": "babel-eslint",
    "plugins": [
      "flowtype"
    ]
  }
}
```

If you're using `standard` globally (you installed it with `-g`), then you also
need to install `eslint-plugin-flowtype` globally with
`npm install eslint-plugin-flowtype -g`.

### Can you make rule X configurable?

No. The point of `standard` is to save you time by picking reasonable rules so you
can spend your time solving actual problems. If you really do want to configure
hundreds of eslint rules individually, you can always use `eslint` directly.

If you just want to tweak a couple rules, consider using
[this shareable config](https://github.com/feross/eslint-config-standard) and
layering your changes on top.

Pro tip: Just use `standard` and move on. There are actual real problems that you
could spend your time solving! :P

### What about Web Workers?

Add this to the top of your files:

```js
/* eslint-env serviceworker */
```

This lets `standard` (as well as humans reading your code) know that `self` is a
global in web worker code.

### What about Mocha, Jasmine, QUnit, etc?

To support mocha in your test files, add this to the beginning of your test files:

```js
/* eslint-env mocha */
```

Where `mocha` can be one of `jasmine`, `qunit`, `phantomjs`, and so on. To see a
full list, check ESLint's
[specifying environments](http://eslint.org/docs/user-guide/configuring.html#specifying-environments)
documentation. For a list of what globals are available for these environments,
check the
[globals](https://github.com/sindresorhus/globals/blob/master/globals.json) npm
module.

### Is there a Git `pre-commit` hook?

Funny you should ask!

```sh
#!/bin/sh
# Ensure all javascript files staged for commit pass standard code style
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs standard
if [ $? -ne 0 ]; then exit 1; fi
```

Alternatively, [overcommit](https://github.com/brigade/overcommit) is a Git hook
manager that includes support for running `standard` as a Git pre-commit hook.
To enable this, add the following to your `.overcommit.yml` file:

```yaml
PreCommit:
  Standard:
    enabled: true
```

### How do I make the output all colorful and *pretty*?

The built-in output is simple and straightforward, but if you like shiny things,
install [snazzy](https://www.npmjs.com/package/snazzy):

```
npm install snazzy
```

And run:

```bash
$ standard --verbose | snazzy
```

There's also [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), and
[standard-summary](https://www.npmjs.com/package/standard-summary).

## Node.js API

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

## IRC channel

Join us in `#standard` on freenode.

## Contribute

Contributions are welcome! Check out the [issues](https://github.com/feross/standard/issues) or the [PRs](https://github.com/feross/standard/pulls), and make your own if you want something that you don't see there.

### I want to contribute to `standard`. What packages should I know about?

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
