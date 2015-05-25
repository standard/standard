# JavaScript Standard Style
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/feross/standard.svg?style=flat
[travis-url]: https://travis-ci.org/feross/standard
[npm-image]: https://img.shields.io/npm/v/standard.svg?style=flat
[npm-url]: https://npmjs.org/package/standard
[downloads-image]: https://img.shields.io/npm/dm/standard.svg?style=flat
[downloads-url]: https://npmjs.org/package/standard

### One Style to Rule Them All

No decisions to make. No `.eslintrc`, `.jshintrc`, or `.jscsrc` files to manage. It just
works.

This module saves you (and others!) time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your project. Just
  drop it in.
- **Catch style errors before they're submitted in PRs.** Saves precious code review time
  by eliminating back-and-forth between maintainer and contributor.

## Install

```bash
npm install standard
```

## Rules

- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches *tons* of bugs!
- **No semicolons** – [It's][1] [fine.][2] [Really!][3]
- **Never start a line with `(` or `[`**
  - This is the **only** gotcha with omitting semicolons – *automatically checked for you!*
  - [More details][4]
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Name the context variable `self` – `var self = this`
  - Accidental [`window.self`][5] usage is dissallowed (happens when `var self = this` is
    omitted)
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` – except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.
- **And [more goodness][6]** – *give `standard` a try today!*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://github.com/maxogden/messages/issues/18
[4]: RULES.md#automatic-semicolon-insertion-asi
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Window.self
[6]: RULES.md#javascript-standard-style

To get a better idea, take a look at
[a sample file](https://github.com/feross/bittorrent-dht/blob/master/client.js) written
in JavaScript Standard Style, or check out some of
[the repositories](https://github.com/feross/standard/blob/master/test/clone.js) that use
`standard`.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```markdown
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```markdown
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
```

## Usage

The easiest way to use JavaScript Standard Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `standard` globally on your system, omit it if you want
to install in the current working directory):

```bash
npm install standard -g
```

After you've done that you should be able to use the `standard` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

You can optionally pass in a directory using the glob pattern:

```bash
$ standard src/util/**/*.js
```

### Editor plugins

First, install `standard`. Then, install the appropriate plugin for your editor:

- **[Sublime Text](https://www.sublimetext.com/)** - Install
  [Package Control](https://packagecontrol.io/),
  [SublimeLinter](http://www.sublimelinter.com/en/latest/), and
  [SublimeLinter-contrib-standard](https://packagecontrol.io/packages/SublimeLinter-contrib-standard).
- **[Atom](https://atom.io)** - Install [Linter](https://atom.io/packages/linter)
  and [linter-js-standard](https://atom.io/packages/linter-js-standard).
- **[Vim](http://www.vim.org/)** - Install
  [Syntastic](https://github.com/scrooloose/syntastic) and add
  `let g:syntastic_javascript_checkers = ['standard']` to your `.vimrc`.
- **[Emacs](https://www.gnu.org/software/emacs/)** - Install
  [Flycheck](http://www.flycheck.org) and check out the
  [manual](http://www.flycheck.org/manual/latest/index.html) to learn how
  to enable it in your projects.

### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "standard": "^3.0.0"
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

## FAQ

### Why would I use JavaScript Standard Style?

The beauty of JavaScript Standard Style is that it's simple. No one wants to maintain
multiple hundred-line style configuration files for every module/project they work on.
Enough of this madness!

This module saves you time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your project. Just
  drop it in.
- **Catch style errors before they're submitted in PRs.** Saves precious code review time
  by eliminating back-and-forth between maintainer and contributor.

Adopting `standard` style means ranking the importance of code clarity and community
conventions higher than personal style. This might not make sense for 100% of projects and
development cultures, however open source can be a hostile place for newbies. Setting up
clear, automated contributor expectations makes a project healthier.

### I disagree with rule X, can you change it?

No. The the whole point of `standard` is to avoid [bikeshedding][bikeshedding] about
style. There are lots of debates online about tabs vs. spaces, etc. that will never be
resolved. These debates just distract from getting stuff done. At the end of the day you
have to 'just pick something', and that's the whole philosophy of `standard` -- its a
bunch of sensible 'just pick something' opinions. Hopefully, users see the value in that
over defending their own opinions.

[bikeshedding]: https://www.freebsd.org/doc/en_US.ISO8859-1/books/faq/misc.html#idp60694736

### But this isn't a real web standard!

Of course it's not! The style laid out here is not affiliated with any official web
standards groups, which is why this repo is called `feross/standard` and not
`ECMA/standard`.

The word "standard" has more meanings than just "web standard" :-) For example:

- This module helps hold our code to a high *standard of quality*.
- This module ensures that new contributors follow some basic *style standards*.

### Is there an automatic formatter?

Yes! Just run `standard --format filename.js`. This uses
[Max Ogden][max]'s automatic formatter
[`standard-format`][standard-format], which can automatically
fix most code issues.

While most issues can be fixed, some, like not handling errors in node-style callbacks,
must be fixed manually.

[max]: https://github.com/maxogden
[standard-format]: https://github.com/maxogden/standard-format

### How do I ignore files?

The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, and hidden
files/folders (beginning with `.`) are automatically excluded when looking for `.js` files
to style check.

Sometimes you need to ignore additional folders or specific minfied files. To do that, add
a `standard.ignore` property to `package.json`:

```json
"standard": {
  "ignore": [
    "**/out/**",
    "**/lib/select2/**",
    "**/lib/ckeditor/**"
  ]
}
```

### How do I hide a certain warning?

In rare cases, you'll need to break a rule and hide the warning generated by `standard`.

JavaScript Standard Style uses [`eslint`](http://eslint.org/) under-the-hood and you can
hide warnings as you normally would if you used `eslint` directly.

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
/*eslint-disable no-use-before-define */
// offending code here...
// offending code here...
// offending code here...
/*eslint-enable no-use-before-define */
```

### Can you make rule X configurable?

No. Use `eslint` and
[this shareable config](https://github.com/feross/eslint-config-standard) if you want to
configure hundreds of options individually.

Pro tip: Just use `standard` and move on. There are actual real problems that you could
spend your time solving! :P

### What about Web Workers?

Web workers have a magic global variable called `self`. In regular JS files, `standard`
won't let you use `self` directly, as it wants to prevent accidental use of
`window.self`. But `standard` has no way of knowing when you are in a `worker` and
therefore does not know when to allow usage of `self` directly.

Until we figure out a better solution, we recommend adding this to the top of workers:

```
/* global self */
```

This lets `standard` (as well as humans reading your code) know that `self` is a global
in web worker code.

### Is there a Git `pre-commit` hook for `standard`?

Funny you should ask!

```sh
#!/bin/sh
# Ensure all javascript files staged for commit pass standard code style
git diff --name-only --cached --relative | grep '\.js$' | xargs standard
exit $?
```

Alternatively, [overcommit](https://github.com/brigade/overcommit) is a Git hook
manager that includes support for running `standard` as a Git pre-commit hook.
To enable this, add the following to your `.overcommit.yml` file:

```yaml
PreCommit:
  Standard:
    enabled: true
```

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
