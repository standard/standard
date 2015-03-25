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

No decisions to make. No `.jshintrc`, `.jscsrc`, or `.eslintrc` files to manage. It just
works.

This module saves you (and others!) time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your
  module/project. Just drop it in.
- **Catch style errors before they're submitted in PRs.** Saves precious code review time
  by eliminating back-and-forth between maintainer and contributor.

Adopting `standard` style means ranking the importance of community conventions
higher than personal style, which does not make sense for 100% of projects and development
cultures. At the same time, open source can be a hostile place for newbies. Setting up 
clear, automated contributor expectations makes a project healthier.

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
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Name the context variable `self`
  - `var self = this`
  - Accidental use of [`window.self`][4] is dissallowed (happens when `var self = this` is
    omitted)
- Always use `===` instead of `==`
  - Except `obj == null` is allowed to check for `null` or `undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` – except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.
- **And more goodness** – *give `standard` a try today!*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://github.com/maxogden/messages/issues/18
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Window.self

To get a better idea, take a look at
[a sample file](https://github.com/feross/bittorrent-dht/blob/master/client.js) written
in JavaScript Standard Style, or check out some of [the repositories](https://github.com/feross/standard/blob/master/test.js) that use `standard`.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-standard-style](https://raw.githubusercontent.com/feross/standard/master/badge.png)](https://github.com/feross/standard)

```
[![js-standard-style](https://raw.githubusercontent.com/feross/standard/master/badge.png)](https://github.com/feross/standard)
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
```txt
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
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

```
$ standard
Error: Code style check failed:
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

### Editor plugins

First, install `standard`. Then, install the appropriate plugin for your editor:

- **[Vim](https://github.com/scrooloose/syntastic)** - Just install [Syntastic](https://github.com/scrooloose/syntastic).
- **[Sublime Text](https://github.com/Flet/Sublimelinter-contrib-standard)** - Install [Package Control](https://packagecontrol.io/), [SublimeLinter](http://www.sublimelinter.com/en/latest/), and [SublimeLinter-contrib-standard](https://github.com/Flet/Sublimelinter-contrib-standard).
- **[Atom](https://atom.io)** - Install [Linter](https://github.com/AtomLinter/Linter) and [linter-js-standard](https://github.com/ricardofbarros/linter-js-standard).

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
  Error: Code style check failed:
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again!

### Git `pre-commit` hook
```sh
#!/bin/sh
# Ensure all javascript files staged for commit pass standard code style
git diff --name-only --cached --relative | grep '\.js$' | xargs standard
exit $?
```

## FAQ

### Why would I use JavaScript Standard Style?

The beauty of JavaScript Standard Style is that it's simple. No one wants to maintain
multiple hundred-line style configuration files for every module/project they work on.
Enough of this madness!

This module saves you time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your
  module/project. Just drop it in.
- **Catch style errors before they're submitted in PRs.** Saves precious code review time
  by eliminating back-and-forth between maintainer and contributor.

### How do I ignore files?

The paths `node_modules/`, `.git/`, `*.min.js`, `bundle.js`, and `coverage/` are automatically excluded
when looking for `.js` files to style check.

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

### Is there an automatic formatter?

Yes! Just run `standard --format filename.js`. This uses
[Max Ogden](https://github.com/maxogden)'s automatic formatter
**[`standard-format`](https://github.com/maxogden/standard-format)**, which can
automatically fix most code style issues.

While most issues can be fixed, some, like not handling errors, must be fixed manually.

### How do I hide a certain warning?

In rare cases, you'll need to break a rule and hide the warning generated by `standard`.

JavaScript Standard Style uses [`eslint`](http://eslint.org/) and
[`jscs`](http://jscs.info/) under-the-hood and you can hide their warnings as you normally
would if you used each linter directly.

To get verbose output (so you can find the particular rule name to ignore), run:

```bash
$ standard --verbose
Error: Code style check failed:
  routes/error.js:20:36: 'file' was used before it was defined. (eslint/no-use-before-define)
  routes/submit.js:85:2: Expected indentation of 2 characters (jscs/validateIndentation)
```

The first error is from `eslint`. Disable all checks on a specific line:

```js
file = 'I know what I am doing' // eslint-disable-line
```

Or, just disable the "no-use-before-define" rule:

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

Or, disable the rule for multiple lines:

```js
/*eslint-disable no-use-before-define */
// offending code here...
// offending code here...
// offending code here...
/*eslint-enable no-use-before-define */
```

The second error is from `jscs`. In this case, the rule name is "validateIndentation".
You can hide it with a `// jscs:disable validateIndentation` comment. Re-enable with a
`// jscs:enable validateIndentation` comment.

### Can you please add more config options?

No. Use `eslint` or `jscs` directly if you want that.

Pro tip: Just use `standard` and move on. There are actual real problems that you could
spend your time solving :p

### Why can't I pipe standard to other tools?

`standard` prints to `stderr`. This means that tools that read from `stdout` won't be
able to read its output. The solution is to make `standard` print to `stdout` instead:

```sh
standard 2>&1 | grep variable
```

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

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
