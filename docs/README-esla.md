<h1 align="center">
  <a href="http://standardjs.com"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<h4 align="center">Una guía de estilos Javascript para gobernarlos a todos</h4>

<p align="center">
  <a href="https://travis-ci.org/feross/standard"><img src="https://img.shields.io/travis/feross/standard/master.svg" alt="Travis"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/dm/standard.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
  <br>
  Traducción Readme: <a href="README.md">English</a>
  <br>
  Traducción Readme: <a href="docs/README-ptbr.md">Português</a>  
</p>
<br>

Sin decisiones que hacer. Sin `.eslintrc`, `.jshintrc`, o `.jscsrc`
  archivos a gestionar. Simplemente funciona.

Este modulo te salva a ti (y otros) tiempo en dos maneras:

- **Sin configuración.** La manera mas fácil de forzar estilos consistentes
  en tu proyecto. Simplemente usalo.
- **Captura errores de estilos antes que sean enviados a PR.** Te salva de
  preciosa revisiones de código eliminando delante y detrás entre el dueño del
  repositorio y los contribuidores

Instalar con:

```
npm install standard --save-dev
```

### Las reglas

- **2 espacios** – para sangría
- **Comillas simples para cadenas de texto** – A excepcion de: evitar escape de texto
- **No dejar variables sin usar** – esta captura *toneladas* de bugs!
- **Sin punto y coma** – [Esta][1] [bien.][2] [En serio!][3]
- **No debes empezar una línea con `(`, `[`, or `` ` ``**
  - Este es ul  **unico** problema al evitar punto y coma – *automaticamente verificado para ti!*
  - [More details][4]
- **Espacio después de las palabras claves** `if (condition) { ... }`
- **Espacio después del nombre de función** `function name (arg) { ... }`
- Usar siempre  `===` en vez de `==` – pero `obj == null` esta permitido para verificar `null || undefined`.
- Manejar siempre el parametro de función `err` de node.js
- Usar siempre  el prefijo `window` en los globales del navegador – A excepción de `document` y `navigator` esto esta bien
  - Previene uso accidental de mal-llamados globales del navegador como `open`, `length`,
    `event`, y `name`.
- **Y [mucho mas][5]** – *prueba `standard` hoy!*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES.md#semicolons
[5]: RULES.md#javascript-standard-style

Para una mejor idea, mira este
[archivo de ejemplo](https://github.com/expressjs/body-parser/blob/master/index.js) escrito
en JavaScript Standard Style. O, mira alguno de los
[miles de proyectos](https://raw.githubusercontent.com/feross/standard-packages/master/all.json)
que usan `standard`!

## Tabla de Contenido

- [Instalación](#instalación)
- [Uso](#uso)
  - [Lo que podrias hacer si eres inteligente](#lo-que-prodias-hacer-si-eres-inteligente)
  - [Medalla](#medalla)
  - [Plugins editores de textos](#plugins-editores-de-textos)
- [FAQ](#faq)
  - [¿Porque deberia usar JavaScript Standard Style?](#porque-deberia-usar-javascript-standard-style)
  - [No estoy de acuerdo con la regla X, ¿lo puedes cambiar?](#no-estoy-de-acuerdo-con-la-regla-x-lo-puedo-cambiar)
  - [¡Pero esto no un estandar web real!](#pero-esto-no-un-estandar-web-real)
  - [¿Hay algún formateador automatico?](#hay-algún-formateador-automatico)
  - [¿Como hago para ignorar archivos?](#como-hago-para-ignorar-archivos)
  - [¿Como oculto cierta alerta?](#como-oculto-cierta-alerta)
  - [Yo uso una librería que contamina el espacio de nombres global. ¿Como puedo evitar los errores  "variable is not defined"?](#yo-uso-una-librería-que-contamina-el-espacio-de-nombres-global-como-puedo-evitar-los-errores--variable-is-not-defined)
  - [¿Puedo usar un parser JavaScript que soporte ES última-generación?](#puedo-usar-un-parser-javascript-que-soporte-es-última-generación)
  - [¿Puedo usar una variación de lenguaje JavaScript, como Flow?](#puedo-usar-una-variación-de-lenguaje-javascript-como-flow)
  - [¿Puede ser la regla X configurable?](#puede-ser-la-regla-x-configurable)
  - [¿Que acerca de Web Workers?](#que-acerca-de-web-workers)
  - [¿Que acerca de Mocha, Jasmine, QUnit y etc?](#que-acerca-de-mocha-jasmine-qunit-y-etc)
  - [¿Hay algún gancho git `pre-commit`?](#hay-algún-gancho-git-pre-commit)
  - [¿Como hago la salida (output) todo colorido y *bonito*?](#como-hago-la-salida-output-todo-colorido-y-bonito)
  - [Quiero contribuir a `standard`. ¿Que paquetes debería conocer?](#quiero-contribuir-a-standard-que-paquetes-debería-conocer)
- [Node.js API](#nodejs-api)
  - [`standard.lintText(text, [opts], callback)`](#standardlinttexttext-opts-callback)
  - [`standard.lintFiles(files, [opts], callback)`](#standardlintfilesfiles-opts-callback)
- [Canal IRC](#canal-irc)
- [Licencia](#licencia)

## Instalación

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

## Uso

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

### Lo que podrias hacer si eres inteligente

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



### Medalla

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

### Plugins editores de textos

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

### ¿Porque deberia usar JavaScript Standard Style?

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

### No estoy de acuerdo con la regla X, ¿lo puedo cambiar?

No. The whole point of `standard` is to avoid [bikeshedding][bikeshedding] about
style. There are lots of debates online about tabs vs. spaces, etc. that will never
be resolved. These debates just distract from getting stuff done. At the end of the
day you have to 'just pick something', and that's the whole philosophy of
`standard` -- its a bunch of sensible 'just pick something' opinions. Hopefully,
users see the value in that over defending their own opinions.

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

### ¡Pero esto no un estandar web real!

Of course it's not! The style laid out here is not affiliated with any official web
standards groups, which is why this repo is called `feross/standard` and not
`ECMA/standard`.

The word "standard" has more meanings than just "web standard" :-) For example:

- This module helps hold our code to a high *standard of quality*.
- This module ensures that new contributors follow some basic *style standards*.

### ¿Hay algún formateador automatico?

Yes! You can use `standard --fix` to automatically fix most issues automatically.

`standard --fix` is built into `standard` (since v8.0.0) for maximum convenience.
Lots of problems are fixable, but some errors, like forgetting to handle the error
in node-style callbacks, must be fixed manually.

To save you time, `standard` outputs a message ("Run `standard --fix` to
automatically fix some problems.") when it detects problems that can be fixed
automatically.

### ¿Como hago para ignorar archivos?

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

### ¿Como oculto cierta alerta?

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

### Yo uso una librería que contamina el espacio de nombres global. ¿Como puedo evitar los errores  "variable is not defined"?

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

### ¿Puedo usar un parser JavaScript que soporte ES última-generación?

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

### ¿Puedo usar una variación de lenguaje JavaScript, como Flow?

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

### ¿Puede ser la regla X configurable?

No. The point of `standard` is to save you time by picking reasonable rules so you
can spend your time solving actual problems. If you really do want to configure
hundreds of eslint rules individually, you can always use `eslint` directly.

If you just want to tweak a couple rules, consider using
[this shareable config](https://github.com/feross/eslint-config-standard) and
layering your changes on top.

Pro tip: Just use `standard` and move on. There are actual real problems that you
could spend your time solving! :P

### ¿Que acerca de Web Workers?

Add this to the top of your files:

```js
/* eslint-env serviceworker */
```

This lets `standard` (as well as humans reading your code) know that `self` is a
global in web worker code.

### ¿Que acerca de Mocha, Jasmine, QUnit y etc?

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

### ¿Hay algún gancho git `pre-commit`?

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

### ¿Como hago la salida (output) todo colorido y *bonito*?

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

##Canal IRC

Join us in `#standard` on freenode.

## Contribuciones

Contributions are welcome! Check out the [issues](https://github.com/feross/standard/issues) or the [PRs](https://github.com/feross/standard/pulls), and make your own if you want something that you don't see there.

### Quiero contribuir a `standard`. ¿Que paquetes debería conocer?

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

## Licencia

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
