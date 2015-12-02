# Change Log
[eslint-config-standard-react]: https://github.com/feross/eslint-config-standard-react/commits/master
[eslint-config-standard]: https://github.com/feross/eslint-config-standard/commits/master
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md
[eslint-plugin-standard]: https://github.com/xjamundx/eslint-plugin-standard/commits/master
[eslint]: https://github.com/eslint/eslint/blob/master/CHANGELOG.md

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 5.4.1 - 2015-11-16
[view diff](https://github.com/feross/standard/compare/v5.4.0...v5.4.1)

### Fixed

* Fix for `standard-engine` change. Fix error tagline.

## 5.4.0 - 2015-11-16
[view diff](https://github.com/feross/standard/compare/v5.3.1...v5.4.0)

### Added

* eslint-config-standard-react@1.2.0 ([history](eslint-config-standard-react))
  * Disallow duplicate JSX properties

## 5.3.1 - 2015-09-18
[view diff](https://github.com/feross/standard/compare/v5.3.0...v5.3.1)

### Changed
* eslint-plugin-react@3.4.2 ([history](eslint-plugin-react))

## 5.3.0 - 2015-09-16
[view diff](https://github.com/feross/standard/compare/v5.2.2...v5.3.0)

### Changed
* eslint-config-standard@4.4.0 ([history][eslint-config-standard])
  * **New rule:** must have space after semicolon in for-loop ([commit](https://github.com/feross/eslint-config-standard/commit/6e5025eef8900f686e19b4a31836743d98323119))
  * **New rule:** No default assignment with ternary operator ([commit](https://github.com/feross/eslint-config-standard/commit/0903c19ca6a8bc0c8625c41ca844ee69968bf948))
  * **New rule:** Require spaces before keywords ([commit](https://github.com/feross/eslint-config-standard/commit/656ba93cda9cd4ab38e032649aafb795993d5176))
* eslint-config-standard-react@1.1.0 ([history][eslint-config-standard-react])
* eslint-plugin-react@3.4.0 ([history][eslint-plugin-react])
* eslint-plugin-standard@1.3.1 ([history][eslint-plugin-standard])

## 5.2.2
[view diff](https://github.com/feross/standard/compare/v5.2.1...v5.2.2)

### Fixed
* We have a changelog now, and you're reading it!
* Minor README update
* Removed direct dependency on `eslint` (its now moved to [standard-engine](https://github.com/flet/standard-engine))

## 5.2.1 - 2015-09-03
[view diff](https://github.com/feross/standard/compare/v5.2.0...v5.2.1)

### Changed
* eslint-config-standard@4.3.1 ([history][eslint-config-standard])
  * **Revert rule**: Disallow unncessary concatenation of strings

### Fixed
* eslint-config-standard@4.3.1 ([history][eslint-config-standard])
  * fix regression with ternary operator handling

## 5.2.0 - 2015-09-03
[view diff](https://github.com/feross/standard/compare/v5.1.1...v5.2.0)

### Added
* eslint-config-standard@4.3.0 ([history][eslint-config-standard])
  * **New rule:** Disallow unncessary concatenation of strings
  * **New rule:** Disallow duplicate name in class members
  * **New rule:** enforce spaces inside of single line blocks
  * **Re-add rule:** padded-blocks ([Closes #170](https://github.com/feross/standard/issues/170))

### Changed
* Bump `eslint` from 1.1.0 to 1.3.1 ([CHANGELOG][eslint])
* eslint-plugin-standard@1.3.0 ([history][eslint-plugin-standard])
  * A small change to make the plugin compatible with browserify which does not affect behavior.

### Fixed
* eslint-plugin-react@3.3.1 ([CHANGELOG][eslint-plugin-react])
  * Fix object rest/spread handling.
* Added white background to badge.svg to make it work with dark backgrounds ([Closes #234](https://github.com/feross/standard/issues/234))
* Minor updates to README.md

## 5.1.1 - 2015-08-28
[view diff](https://github.com/feross/standard/compare/v5.1.0...v5.1.1)

### Fixed
* Update to RULES.md to remove a missing hyperlink
* Add atom linter information to README.md
* Fixed duplicated word in the tagline message on the CLI
* Removed failing repository from tests (yoshuawuyts/initialize)

## 5.1.0 - 2015-08-14
[view diff](https://github.com/feross/standard/compare/v5.0.2...v5.1.0)

## Fixed
* eslint-config-standard@4.1.0 ([history][eslint-config-standard])
  * Added rest/spread feature to `eslintrc.json` to fix [#226](https://github.com/feross/standard/issues/226) and [eslint-plugin-standard#3](https://github.com/xjamundx/eslint-plugin-standard/issues/3)
* eslint-plugin-react@3.2.2 ([CHANGELOG][eslint-plugin-react])
  * Fix crash when propTypes don't have any parent
  * Fix jsx-no-literals reporting errors outside JSX

### Changed
* Bump eslint from 1.0.0 to 1.2.0 ([CHANGELOG][eslint])
* Added more test repositories and disabled some that were failing
* Update bikeshedding link on README.md

## 5.0.2 - 2015-08-06
[view diff](https://github.com/feross/standard/compare/v5.0.1...v5.0.2)

### Changed
* eslint-config-standard-react@1.0.4 ([history][eslint-config-standard-react])
  - **Disable Rule:** react/wrap-multilines
* Minor README updates

## 5.0.1 - 2015-08-05
[view diff](https://github.com/feross/standard/compare/v5.0.0...v5.0.1)

## 5.0.0 - 2015-08-03
[view diff](https://github.com/feross/standard/compare/v4.5.4...v5.0.0)

## 4.5.4 - 2015-07-13
[view diff](https://github.com/feross/standard/compare/v4.5.3...v4.5.4)

## 4.5.3 - 2015-07-10
[view diff](https://github.com/feross/standard/compare/v4.5.2...v4.5.3)

## 4.5.2 - 2015-07-02
[view diff](https://github.com/feross/standard/compare/v4.5.1...v4.5.2)

## 4.5.1 - 2015-06-30
[view diff](https://github.com/feross/standard/compare/v4.5.0...v4.5.1)

## 4.5.0 - 2015-06-30
[view diff](https://github.com/feross/standard/compare/v4.4.1...v4.5.0)

## 4.4.1 - 2015-06-29
[view diff](https://github.com/feross/standard/compare/v4.4.0...v4.4.1)

## 4.4.0 - 2015-06-27
[view diff](https://github.com/feross/standard/compare/v4.3.3...v4.4.0)

## 4.3.3 - 2015-06-26
[view diff](https://github.com/feross/standard/compare/v4.3.2...v4.3.3)

## 4.3.2 - 2015-06-23
[view diff](https://github.com/feross/standard/compare/v4.3.1...v4.3.2)

## 4.3.1 - 2015-06-18
[view diff](https://github.com/feross/standard/compare/v4.3.0...v4.3.1)

## 4.3.0 - 2015-06-16
[view diff](https://github.com/feross/standard/compare/v4.2.1...v4.3.0)

## 4.2.1 - 2015-06-12
[view diff](https://github.com/feross/standard/compare/v4.2.0...v4.2.1)

## 4.2.0 - 2015-06-11
[view diff](https://github.com/feross/standard/compare/v4.1.1...v4.2.0)

## 4.1.1 - 2015-06-11
[view diff](https://github.com/feross/standard/compare/v4.1.0...v4.1.1)

## 4.1.0 - 2015-06-10
[view diff](https://github.com/feross/standard/compare/v4.0.1...v4.1.0)

## 4.0.1 - 2015-06-01
[view diff](https://github.com/feross/standard/compare/v4.0.0...v4.0.1)

## 4.0.0 - 2015-05-30
[view diff](https://github.com/feross/standard/compare/v3.9.0...v4.0.0)
