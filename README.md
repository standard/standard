# standard [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/feross/standard.svg?style=flat
[travis-url]: https://travis-ci.org/feross/standard
[npm-image]: https://img.shields.io/npm/v/standard.svg?style=flat
[npm-url]: https://npmjs.org/package/standard
[downloads-image]: https://img.shields.io/npm/dm/standard.svg?style=flat
[downloads-url]: https://npmjs.org/package/standard

### JavaScript Standard Style

## Rules

- No semicolons ([it's fine][1] – *[really][2]!*)
- Indentation is 2 spaces
- Strings use single quotes
- Unix-style line breaks (LF)
- Spaces after keywords:
  - `if (condition) { ... }`
- Spaces before/after function definitions:, like this:
  - `function name (arg1, arg2) { ... }`
- Always name the context variable `self`:
  - `var self = this`

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons

To get a better idea, take a look at
[a sample file](https://github.com/feross/bittorrent-dht/blob/master/client.js).

## install

```bash
npm install standard
```

## usage

The easiest way to use `standard` is to install it globally as a Node command line
program. To do so, simply run the following command in your terminal (flag `-g` installs
`standard` globally on your system, omit it if you want to install in the current working
directory):

```bash
npm install standard -g
```

After you've done that you should be able to use the `standard` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```bash
$ standard
Error: Code style check failed:
  /Users/feross/code/webtorrent/lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

### what you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "standard": "*"
    },
    "scripts": {
      "test": "standard && node my-normal-tests.js"
    }
  }
  ```

2. Check style automatically when you run `npm test`

  ```bash
  $ npm test
  Error: Code style check failed:
    /Users/feross/code/webtorrent/lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again!

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
