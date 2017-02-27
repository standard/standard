# Airbnb Standard [![version][npm-version]][npm-url] [![License][license-image]][license-url]

> [Airbnb JavaScript Style][airbnb-javascript] flavoured [`standard`][standard].

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

> **Note**: this package and the author are **not** affiliated with Airbnb!

This module saves you (and others!) time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your project. Just drop it in.
- **Catch style errors before they're submitted in PRs.** Saves precious code review time by eliminating back-and-forth between maintainer and contributor.

## Install

```bash
npm install --only=production --save airbnb-standard
```

## Usage

After you've installed `airbnb-standard`, you should be able to use the `airbnb-standard` program. The
simplest use case would be checking the style of all JavaScript files in the
current working directory:

```bash
$ airbnb-standard
Error: Use Airbnb JavaScript Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

You can optionally pass in a directory (or directories) using the glob pattern. Be
sure to quote paths containing glob patterns so that they are expanded by
`airbnb-standard` instead of your shell:

```bash
$ airbnb-standard "src/util/**/*.js" "test/**/*.js"
```

**Note:** by default `airbnb-standard` will look for all files matching the patterns:
`**/*.js`, `**/*.jsx`.

## What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "airbnb-standard": "*"
    },
    "scripts": {
      "pretest": "airbnb-standard",
      "test": "node my-tests.js"
    }
  }
  ```

2. Style is checked automatically when you run `npm test`

  ```bash
  $ npm test
  Error: Use Airbnb JavaScript Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again!

## Rules

This package is simply a fork of [`standard`][standard] with [Airbnb's JavaScript Style][airbnb-javascript] applied, please consult the [Airbnb JavaScript Style Guide][airbnb-javascript] for rule details.

## How do I ...

This package is simply a fork of [`standard`][standard] with [Airbnb's JavaScript Style][airbnb-javascript] applied, please consult the [`standard` README][standard] for any questions on usage and configuration.

---
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/)  ·  
> License: [ISC][license-url]  ·  
> Github: [@ahmadnassri](https://github.com/ahmadnassri)  ·  
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/airbnb-standard.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/airbnb-standard
[travis-image]: https://img.shields.io/travis/ahmadnassri/airbnb-standard.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/airbnb-standard
[npm-version]: https://img.shields.io/npm/v/airbnb-standard.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/airbnb-standard.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/airbnb-standard
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/airbnb-standard.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/airbnb-standard.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/airbnb-standard
[david-image]: https://img.shields.io/david/ahmadnassri/airbnb-standard.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/airbnb-standard
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/airbnb-standard/badge?style=flat-square

[standard]: https://github.com/feross/standard
[airbnb-javascript]: https://github.com/airbnb/javascript
