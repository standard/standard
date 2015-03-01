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

This module saves you time in two ways:

- **No configuration.** Just drop it in. The easiest way to enforce consistent style in
  your module/project.
- **Catch style errors before they're submitted in PRs.** Saves precious code review time
  by eliminating back-and-forth between maintainer and contributor.

## Install

```bash
npm install standard
```

## Rules

- **2 spaces** for indentation
- **Single quotes** for strings
  - Except to avoid escaping like `"in this lil' string"`
- **Unix line breaks** (LF)
- **No unused variables** (this one catches *so many* bugs and typos!)
- **No semicolons**
  - [It's totally][1] [fine.][2] *[Really!][3]*
- **Never start a line with `(` or `[`**
  - This is the **only** gotcha with omitting semicolons – *automatically checked for you!*
  - Always prefix with `;` like this `;[1, 2, 3].join(' ')`
- Spaces after keywords
  - `if (condition) { ... }`
- Spaces before/after function definitions
  - `function name (arg1, arg2) { ... }`
- Always name the context variable `self`
  - `var self = this`
  - Checks for accidental use of [`window.self`][4] when `var self = this` is omitted
- Always use `===` instead of `==`
  - `obj == null` is allowed for succinctness (`obj === null || obj === undefined`)
- Always handle the node.js `err` function parameter

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://github.com/maxogden/messages/issues/18
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Window.self

To get a better idea, take a look at
[a sample file](https://github.com/feross/bittorrent-dht/blob/master/client.js) written
in JavaScript Standard Style.

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
- **[Sublime Text](https://github.com/Flet/Sublimelinter-contrib-standard)** - Install (1) [Package Control](https://packagecontrol.io/), (2) [SublimeLinter](http://www.sublimelinter.com/en/latest/), and (3) [SublimeLinter-contrib-standard](https://github.com/Flet/Sublimelinter-contrib-standard).

### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "standard": "*"
    },
    "scripts": {
      "test": "node my-normal-tests.js && standard"
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

## FAQ

### Why would I use JavaScript Standard Style?

The beauty of JavaScript Standard Style is that it's simple. No one wants to maintain
multiple hundred-line `.jshintrc` and `.jscsrc` for every module/project they work on.
Enough of this madness!

This module saves you time in two ways:

- **No configuration.** Just drop it in. The easiest way to enforce consistent style in
  your module/project.
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

Yes, try using the `--format` option. This uses [Max Ogden](https://github.com/maxogden)'s experimental auto formatter
**[`standard-format`](https://github.com/maxogden/standard-format)** to fix the easier
cases.

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

The first error is from `eslint`. In this case, the rule name is "no-use-before-define".
You can hide it with a `/*eslint-disable no-use-before-define */` comment. Re-enable with
a `/*eslint-enable no-use-before-define */` comment.

Example:

```js
/*eslint-disable no-use-before-define */
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

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
