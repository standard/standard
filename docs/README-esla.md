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
  Read in: <a href="README.md">English</a>
</p>
<br>

Sin decisiones que tomar. Sin archivos `.eslintrc`, `.jshintrc`, o `.jscsrc`
   a gestionar. Simplemente funciona.

Este modulo te ahorra tiempo a ti (y otros) dos maneras:

- **Sin configuración.** La manera mas fácil de forzar estilos consistentes
  en tu proyecto.
- **Captura errores de estilos antes que sean enviados a PR.** Te ahorras el tiempo de
  hacer revisiones de código eliminando inconsistencias entre el dueño del
  repositorio y los contribuidores

Instalar con:

```
npm install standard --save-dev
```

### Las reglas

- **Usar 2 espacios** como sangría.
- **Usar comillas simples en cadenas de texto** con la excepcion para evitar escapado de texto
- **No dejar variables sin usar** – esta captura *toneladas* de bugs!
- **Sin punto y coma** – [Esta][1] [bien.][2] [En serio!][3]
- **No debes empezar una línea con `(`, `[`, o `` ` ``**
  - Este es ul  **unico** problema al evitar punto y coma – *automaticamente verificado para ti!*
  - [More details][4]
- **Espacio después de las palabras claves** `if (condition) { ... }`
- **Espacio después del nombre de función** `function name (arg) { ... }`
- Usar siempre  `===` en vez de `==` – pero `obj == null` esta permitido para verificar `null || undefined`.
- Gestionar siempre el parametro de función `err` de node.js
- Usar siempre el prefijo `window` en los globales del navegador – A excepción de `document` y `navigator` esto esta bien
  - Previene uso accidental de mal-llamados globales del navegador como `open`, `length`,
    `event`, y `name`.
- **Y [mucho mas][5]** – *prueba `standard` hoy mismo!*

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
  - [¿Que acerca de Mocha, Jasmine, QUnit y etc?](#que-acerca-de-mocha-jasmine-qunit-y-etc)
  - [¿Que acerca de Web Workers?](#que-acerca-de-web-workers)
  - [¿Puedo verificar codigo dentro de archivos Markdown o HTML?](#puedo-verificar-codigo-dentro-de-archivos-markdown-o-html)
  - [¿Hay algún gancho git `pre-commit`?](#hay-algún-gancho-git-pre-commit)
  - [¿Como hago la salida (output) todo colorido y *bonito*?](#como-hago-la-salida-output-todo-colorido-y-bonito)
  - [Quiero contribuir a `standard`. ¿Que paquetes debería conocer?](#quiero-contribuir-a-standard-que-paquetes-debería-conocer)
- [Node.js API](#nodejs-api)
  - [`standard.lintText(text, [opts], callback)`](#standardlinttexttext-opts-callback)
  - [`standard.lintFiles(files, [opts], callback)`](#standardlintfilesfiles-opts-callback)
- [Licencia](#licencia)

## Instalación

La manera más fácil de usar JavaScript Standard Style para chequear tu código
es instalarlo globalmente como programa Node de línea de comandos.
Para hacer esto, simplemente ejecute el siguiente comando en su terminal
(la bandera `-g` instalará `standard` globalmente en su sistema,
omita la bandera si solo quiere instalar `standard` en el directorio actual):

```bash
$ npm install standard --global
```

O, puede ejecutar este comando para instalar `standard` localmente, para usar en su módulo:

```bash
$ npm install standard --save-dev
```

[Node.js](http://nodejs.org) y [npm](https://npmjs.com) son requeridos para ejecutar los comandos anteriores.

## Uso

Una vez tenga instalado `standard`, ya deberías poder usar `standard`. Un simple caso de uso podría ser chequear estilos de todos los archivos JavaScript en el directorio actual:

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

Opcionalmente puedes pasar un directorio (o directorios) usando el patrón glob.
Asegúrese de usar comillas en las rutas que contengan el patrón glob
para que sean expandidos por `standard` y no por el shell:

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**Nota:** Por defecto `standard`  buscará todos los archivos que hagan pareo con los patrones:
`**/*.js`, `**/*.jsx`.

### Lo que podrias hacer si eres inteligente

1. Agregar esto `package.json`

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

2. Chequear estilos automaticamente cuando ejecutes `npm test`

  ```
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. No volver a dar feedback de stilos un PR otra vez!


### Medalla

¿Desea usar uno estos en uno de sus proyectos? Incluya una de estas medallas a su readme para darle a conocer a las personas que está usando Javascript Standard Style.

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```markdown
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
```

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

```markdown
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
```

### Plugins editores de textos

Primero, instale `standard`. Luego, instale el plugin apropiado para su editor:

#### [Sublime Text](https://www.sublimetext.com/)

Usando **[Package Control][sublime-1]**, instale **[SublimeLinter][sublime-2]** y
**[SublimeLinter-contrib-standard][sublime-3]**.

Para formateo automatico al guardar, instale **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

#### [Atom](https://atom.io)

Instale **[linter-js-standard][atom-1]**.

Para formateo automatico al guardar, instale **[standard-formatter][atom-2]**. Para snippets,
instale **[standardjs-snippets][atom-3]**.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets

#### [Vim](http://www.vim.org/)

instale **[Syntastic][vim-1]** y agregue esta linea a su `.vimrc`:

```vim
let g:syntastic_javascript_checkers = ['standard']
```

Para formateo automatico al guardar, agregue estas dos linea a su `.vimrc`:

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

[vim-1]: https://github.com/scrooloose/syntastic

#### [Emacs](https://www.gnu.org/software/emacs/)

Instale **[Flycheck][emacs-1]** y revise **[manual][emacs-2]** para aprender
como habilitarlo en sus proyectos.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

#### [Brackets](http://brackets.io/)

Busque el registro de extension para **["Standard Code Style"][brackets-1]**.

[brackets-1]: https://github.com/ishamf/brackets-standard/

#### [Visual Studio Code](https://code.visualstudio.com/)

Instale **[vscode-standardjs][vscode-1]**. (Incluye soporte para formateo automatico.)

Para snippets JS, instale: **[vscode-standardjs-snippets][vscode-2]**.
Para snippets React, instale **[vscode-react-standard][vscode-3]**.

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

#### [WebStorm and other JetBrains products][webstorm-1]

WebStorm [recientemente anuncio soporte nativo](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/) para `standard` diractemente en el IDE.

Si aun prefieres configurar `standard` manualmente [sigue esta guia](webstorm-2)

Esto aplica a todos los productos de JetBrains, incluyendo PhpStorm, IntelliJ, RubyMine y etc.

[webstorm-1]: https://www.jetbrains.com/webstorm/
[webstorm-2]: webstorm.md

## FAQ

### ¿Porque deberia usar JavaScript Standard Style?

La belleza de JavaScript Standard Style es qué es simple.
Nadie quiere mantener configuración de estilos en múltiples archivos
de cientos de líneas para cada módulo/proyecto en los que trabajan.
¡Es suficiente de esta locura!

Este modulo te guarda a ti (y otros) tiempo en dos maneras:

- **Sin configuración.** La manera mas fácil de forzar estilos consistentes
  en tu proyecto. Simplemente usalo.
- **Captura errores de estilos antes que sean enviados a PR.** Te guarda de
  revisiones de código eliminando delante y detrás entre el dueño del
  repositorio y los contribuidores

Adoptar estilos `standard` significa clasificar la importancia de la claridad del código y las convenciones de la comunidad mucho más que estilo personal. Esto quizás no tenga sentido para el 100% de proyectos y culturas de desarrollo, aunque proyectos de código abierto pueden llegar a ser hostiles para los novatos. Estableciendo expectativas de contribución limpia y automatizada puede hacer el proyecto más saludable

### No estoy de acuerdo con la regla X, ¿lo puedo cambiar?

No. El punto de `standard` es de evitar [bikeshedding][bikeshedding] acerca del estilo. Existen un montón de debates online acerca de tabs vs espacios, etc. que nunca serán resueltos. Estos debates solo distraen de hacer el trabajo. Al final del dia tienes simplemente que “usar alguno”, y esa es toda la filosofía de `standard` -- es un montón de sensibles opiniones de “usar alguno”. Con la esperanza que los usuarios vean el valor en esto más que defender sus propias opiniones.

Si realmente quieres configurar cientos de reglas individualmente, puedes usar `eslint` directamente con [eslint-config-standard](https://github.com/feross/eslint-config-standard) aplicando
cambios encima de este.

Tip: ¡Simplemente usa `standard` y ya esta. Existen problemas reales
en los cuales debes usar tu tiempo! :P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

### ¡Pero esto no un estandar web real!

¡Por su puesto que no lo es! El estilo aqui no esta afiliado a ningún grupo oficial de estándar web, es por eso que este repositorio se llama `feross/standard` y no `ECMA/standard`.


La palabra “estándar” tiene más significados que solo “estándar web” :-) Por ejemplo:

- Este módulo ayuda a mantener el código a la más alta *calidad estandar*.
- Este módulo asegura que las nuevas contribuciones sigan los *estilos estandar* básicos.

### ¿Hay algún formateador automatico?

¡Si! Puedes usar `standard --fix` para arreglar la mayoría de problemas automáticamente.

`standard --fix` esta integrado en `standard` (desde v8.0.0) para máxima conveniencia.
La mayoría de los problemas se arreglan, pero algunos errores, como olvidar darle uso a los `err` en los callbacks de node, deben ser arreglados manualmente.

Para no hacerte perder el tiempo, `standard` emite un mensaje ("Run `standard --fix` to
automatically fix some problems.") cuando detecta errores que pueden ser arreglados automáticamente.

### ¿Como hago para ignorar archivos?

Ciertas rutas (`node_modules/`, `coverage/`, `vendor/`, `*.min.js`, `bundle.js`, y archivos/directorios que empiezan con `.` cómo `.git` son ignorados automáticamente.

Las rutas del `.gitignore` del proyecto raíz son ignorados automáticamente.

Algunas veces necesitas ignorar directorios o archivos específicos. Para hacerlo, agrega la propiedad `standard.ignore` al `package.json`:

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

En raros casos, necesitarás romper una regla y ocultar la alerta generada por `standard`.

JavaScript Standard Style usa [ESLint](http://eslint.org/) bajo la capucha y puedes ocultar las alertas como normalmente lo harias si usaras ESLint directamente.

Para obtener una salida mas especifica (así puedes encontrar el nombre de la regla a ignorar) ejecute:

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

Inhabilitar **toda las reglas** en una linea especifica:

```js
file = 'I know what I am doing' // eslint-disable-line
```

O, inhabilitar **solo** la regla `"no-use-before-define"`:

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

O, inhabilitar la regla `"no-use-before-define"` para **múltiples lineas**:

```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

### Yo uso una librería que contamina el espacio de nombres global. ¿Como puedo evitar los errores  "variable is not defined"?

Algunos paquetes (ej `mocha`) colocan sus funciones (ej: `describe`, `it`) en el objeto global (¡mala manera!). Como estas funciones no están definidas o requeridas (ej: `require`) en ningún lugar del código, `standard` te alertara que están usando una variable que no está definida (usualmente, esta regla es realmente útil para detectar errores de tipeo). Pero queremos inhabilitar estas variables globales.

Para hacerle a `standard` (como también humanos que leen tu código) saber que ciertas variables son globales en tu código, agregar esto en la parte superior de tu código:

```js
/* global myVar1, myVar2 */
```

Si tienes cientos de archivos, seria deseable evitar agregar comentarios a cada archivo.
En este caso ejecute:

```bash
$ standard --global myVar1 --global myVar2
```

O, agregar esto a su `package.json`

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

*Nota: `global` y `globals` son equivalentes*

### ¿Puedo usar un parser JavaScript que soporte ES última-generación?

`standard` soporta la umtima version de ECMAscript, incluyendo todas las caracteristicas del lenguaje
de las propuestas que estan en "Stage 4" del proceso de propuestas.

Para soportar caracteristicas experimentales del lenguaje, `standard` soporta especificando un parser JS customizado. Antes que uses un parser customizado, considera siquiera la complejidad agregada vale la pena.

Para usar un parser customizado, instálelo desde npm (ejemplo: `npm install babel-eslint`) y ejecute esto:

```bash
$ standard --parser babel-eslint
```

O, agregue esto a `package.json`:

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

Si `standard` esta instalado globalmente (ej: `npm install standard --global`), entonces asegurese de instalar `babel-eslint` globalmente también com `npm install babel-eslint --global`.

### ¿Puedo usar una variación de lenguaje JavaScript, como Flow?

Antes de usar una variable del lenguaje JavaScript customizado, considere si la complejidad agregada
(y esfuerzo requerido para obtener los contribuidores alcanzarle con rapidez) vale la pena.

`standard` soporta plugins ESLint. Usa uno de estos para transformar el código a javascript válido antes de que `standard` lo vea. Para usar un parser customizado, instálelo desde
npm (example: `npm install eslint-plugin-flowtype`) y ejecute:

```bash
$ standard --plugin flowtype
```

O, agrege esto a `package.json`:

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

Si `standard` esta instalado globalmente (ej: `npm install standard --global`), entonces asegurese d instalar `eslint-plugin-flowtype` globalmente también, con `npm install eslint-plugin-flowtype -g`.

*Nota: `plugin` y `plugins` son equivalentes*

### ¿Que acerca de Web Workers?

Agrega esto al inicio de tus archivos:

```js
/* eslint-env serviceworker */
```

Esto le hara saber a` standard` (como también humanos que leen tu código) que
`self` es una variable global en el codigo web worker.

### ¿Que acerca de Mocha, Jasmine, QUnit y etc?

Para soportar mocha in tus archivos de prueba, agrega esto al inicio de los archivos:

```js
/* eslint-env mocha */
```

O, ejecute:

```bash
$ standard --env mocha
```

Donde `mocha` puede ser uno de `jasmine`, `qunit`, `phantomjs`, y asi sucesivamente.
Para ver la lista completa, chequear la documentación de ESLint [especificando entornos](http://eslint.org/docs/user-guide/configuring.html#specifying-environments).
Por una lista de qué variables globales están disponibles en estos entornos chequea el modulo npm [globals](https://github.com/sindresorhus/globals/blob/master/globals.json) npm

*Nota: `env` y `envs` son equivalentes*

### ¿Puedo verificar codigo dentro de archivos Markdown o HTML?

Para verificar código dentro de archivos Markdown use [`standard-markdown`](https://www.npmjs.com/package/standard-markdown).

Alternativamente, hay plugins ESLint para verificar código de Markdown,
HTML y otros tipos de lenguajes:

Para verificar código dentro de archivos Markdown, use el plugin ESLint:

```bash
$ npm install eslint-plugin-markdown
```

Luego para verificar codigo JS que aparece dentro de bloques código, ejecute:

```bash
$ standard --plugin markdown '**/*.md'
```

Para verificar código dentro de archivos HTML, use el plugin ESLint:

```bash
$ npm install eslint-plugin-html
```

Luego para verificar el código que aparece dentro de etiquetas `<script>`, ejecute:

```bash
$ standard --plugin html '**/*.html'
```

### ¿Hay algún gancho git `pre-commit`?

Funny you should ask!

```sh
#!/bin/sh
# Asegura que todos los archivos javascript especificados
# para hacer commit pasan los estandares de estilo de código
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs standard
if [ $? -ne 0 ]; then exit 1; fi
```

### ¿Como hago la salida (output) todo colorido y *bonito*?

La salida integrada es simple y directa, pero si te gustan las cosas brillantes, puedes instalar [snazzy](https://www.npmjs.com/package/snazzy):

```bash
$ npm install snazzy
```

y ejecutar:

```bash
$ standard --verbose | snazzy
```

También  esta [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), y
[standard-summary](https://www.npmjs.com/package/standard-summary).

## Node.js API

### `standard.lintText(text, [opts], callback)`

Hacer Lint al texto fuente previsto para hacer cumplir JavaScript Standard Style.
Un objeto `opts` puede ser proporcionado:

```js
var opts = {
  fix: false,   // automatically fix problems
  globals: [],  // global variables to declare
  plugins: [],  // eslint plugins
  envs: [],     // eslint environment
  parser: ''    // js parser (e.g. babel-eslint)
}
```

El `callback` será llamado con un objeto de `Error` y `results`:

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

Hacer Lint a los archivos que hagan pareo con el patrón globs.
Un objeto `opts` puede ser proporcionado:

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

El `callback` será llamado con un objeto de `Error` y `results`: (igual al de arriba).

## Contribuciones

Contribuciones son bienvenidas! Chequea los [issues](https://github.com/feross/standard/issues) o [PRs](https://github.com/feross/standard/pulls), o has el tuyo propio si quieres algo que nos ves allí

Unete a nosotros `#standard` en freenode.

### Quiero contribuir a `standard`. ¿Que paquetes debería conocer?

- **[standard](https://github.com/feross/standard)** - este repositorio
  - **[standard-engine](https://github.com/flet/standard-engine)** - motor arbitrario cli de relgas eslint
  - **[eslint-config-standard](https://github.com/feross/eslint-config-standard)** - reglas eslint para standard
  - **[eslint-config-standard-jsx](https://github.com/feross/eslint-config-standard-jsx)** - reglas eslint para standard (JSX)
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - reglas customizadas eslint para standard (no es parte del nucleo eslint)
  - **[eslint](https://github.com/eslint/eslint)** - linter que da poder a standard
- **[snazzy](https://github.com/feross/snazzy)** - salida colorida o *bonita* en el terminal para standard
- **[standard-www](https://github.com/feross/standard-www)** - codigo de http://standardjs.com
- **[semistandard](https://github.com/Flet/semistandard)** - standard, con punto y coma (sí es necesario)

También  hay un monton **[plugins editores de textos](#plugins-editores-de-textos)**, una lista de
**[paquetes npm que usan `standard`](https://github.com/feross/standard-packages)**,
y una impresionante lista de
**[paquetes en el ecosistema `standard`](https://github.com/feross/awesome-standard)**.

## Licencia

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
