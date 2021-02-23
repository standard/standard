<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/standard/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/standard/standard"><img src="https://img.shields.io/travis/standard/standard/master.svg" alt="travis"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/eslint-config-standard"><img src="https://img.shields.io/npm/dm/eslint-config-standard.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<h5 align="center">
  Sponsored by&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://speakeasy.co/?utm_source=standardjs.com&utm_medium=sponsorship&utm_campaign=standard"><img src="https://speakeasy.co/logo-text.png" alt="Speakeasy" height=50 valign="middle"></a>
</h5>

<p align="center">
  <a href="/docs/README-en.md">English</a> •
  <a href="/docs/README-esla.md">Español (Latinoamérica)</a> •
  <a href="/docs/README-fr.md">Français</a> •
  <a href="/docs/README-id.md">Bahasa Indonesia</a> •
  <a href="/docs/README-iteu.md">Italiano (Italian)</a> •
  <a href="/docs/README-ja.md">日本語 (Japanese)</a> •
  <a href="/docs/README-kokr.md">한국어 (Korean)</a> •
  <a href="/docs/README-ptbr.md">Português (Brasil)</a> •
  <a href="/docs/README-zhcn.md">简体中文 (Simplified Chinese)</a> •
  <a href="/docs/README-zhtw.md">繁體中文 (Taiwanese Mandarin)</a>
</p>

## Guide de style JavaScript, avec linteur, et formateur

Ce module vous laisse gagner du temps de trois façons:

- **Pas de configuration.** La façon la plus facile d'assurer un style consistant dans vos projets. Aucune décision à prendre. Aucun fichier `.eslintrc` à gérer.
- **Formatte le code automatiquement.** Exécutez `standard --fix` et dites au revoir aux irrégularités dans votre code.
- **Identifiez en avance les erreurs et problèmes de styles.**
  Gagnez un temps précieux de revision du code en eliminant les échanges entre le contributeur et le réviseur.

Essayez-le dès maintenant en exécutant `npx standard --fix`

## Table des Matières

- Démarrage rapide
  - [Installation](#installation)
  - [Utilisation](#utilisation)
  - [Ce que vous pouvez faire si vous êtes malins](#ce-que-vous-pouvez-faire-si-vous-êtes-malins)
- FAQ
  - [Pourquoi devrais-je utiliser le JavaScript Standard Style?](#pourquoi-devrais-je-utiliser-le-javascript-standard-style)
  - [Qui utilise le JavaScript Standard Style?](#qui-utilise-le-javascript-standard-style)
  - [Il y a-t-il des plugins pour les éditeurs de texte?](#il-y-a-t-il-des-plugins-pour-les-éditeurs-de-texte)
  - [Il y a-t-il un badge readme?](#il-y-a-t-il-un-badge-readme)
  - [Je ne suis pas d'accord avec la règle X, pouvez-vous la changer?](#je-ne-suis-pas-daccord-avec-la-règle-x-pouvez-vous-la-changer)
  - [Ce n'est pas un vrai standard web!](#ce-nest-pas-un-vrai-standard-web)
  - [Y a-t-il un formateur automatique?](#y-a-t-il-un-formateur-automatique)
  - [Comment ignorer des fichiers?](#comment-ignorer-des-fichiers)
  - [Comment cacher certains avertissements?](#comment-cacher-certains-avertissements)
  - [J'utilise une bibliothèque logicielle qui pollue l'espace de noms global. Comment puis-je éviter les erreurs "variable is not defined"?](#jutilise-une-bibliothèque-logicielle-qui-pollue-lespace-de-noms-global-comment-puis-je-éviter-les-erreurs-variable-is-not-defined)
  - [Comment puis-je utiliser les fonctionalités expérimentales de JavaScript (ES Next)?](#comment-puis-je-utiliser-les-fonctionalités-expérimentales-de-javascript-es-next)
  - [Puis-je utiliser une variation du language JavaScript, comme Flow ou TypeScript?](#puis-je-utiliser-une-variation-du-language-javascript-comme-flow-ou-typescript)
  - [Et Mocha, Jasmine, QUnit, etc?](#et-mocha-jasmine-qunit-etc)
  - [Et les Web Workers?](#et-les-web-workers)
  - [Quelle est la différence entre les avertissements et les erreurs ?](#quelle-est-la-différence-entre-les-avertissements-et-les-erreurs-?)
  - [Puis-je vérifier le code dans les fichiers Markdown ou HTML?](#puis-je-vérifier-le-code-dans-les-fichiers-markdown-ou-html)
  - [Il y a-t-il un Git `pre-commit`?](#il-y-a-t-il-un-git-pre-commit)
  - [Comment puis-je produire un resultat coloré et _joli_?](#comment-puis-je-produire-un-resultat-coloré-et-joli)
  - [Il y a-t-il une API Node.js?](#il-y-a-t-il-une-api-nodejs)
  - [Comment puis-je contribuer à `standard`?](#comment-puis-je-contribuer-a-standard)

## Installation

La façon la plus facile d'utiliser le JavaScript Standard Style est de l'installer globalement comme un programme Node de ligne de commande. Exécutez la commande qui suit dans le Terminal:

```bash
$ npm install standard --global
```

Ou, vous pouvez installer `standard` localement, pour l'utiliser dans un seul projet:

```bash
$ npm install standard --save-dev
```

_Note: Pour executer les commandes précédentes, [Node.js](http://nodejs.org) et [npm](https://npmjs.com) doivent être installés._

## Utilisation

Apres avoir installé `standard`, vous devriez pouvoir l'utiliser. Le cas le plus facile serait de verifier le style de tous les fichiers JavaScrtipt dans le dossier actuellement utilisé:

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

Vous pouvez passer en option un dossier (ou dossiers) en utilisant la structure glob. Soyez surs d'entourer les chemins de fichier qui contiennent des structures glob avec des guillemets pour qu'ils soient interprétés par `standard` et pas votre shell:

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**Note:** par default `standard` va chercher tous les fichiers qui correspondent à:
`**/*.js`, `**/*.jsx`.

## Ce que vous pouvez faire si vous êtes malins

1. Ajoutez le au fichier `package.json`

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

2. Le style est vérifié automatiquement quand vous executez `npm test`

```bash
$ npm test
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

3. Ne demandez plus jamais de changement de style dans une PR!

## Pourquoi devrais-je utiliser le JavaScript Standard Style?

La beauté du JavaScript Standard Style est dans sa simplicité. Personne ne veut maintenir des fichiers de configuration de style de plusieurs centaines de lignes pour chaque module/projet sur lesquels vous travaillez!

Ce module vous laisse gagner du temps de trois façons:

- **Pas de configuration.** La façon la plus facile d'assurer un style consistant dans vos projets.
- **Formatte le code automatiquement.** Exécutez `standard --fix` et dites au revoir aux irregularités dans votre code.
- **Identifiez en avance les erreurs et problèmes de styles.**
  Gagnez un temps precieux de revision du code en éliminant les échanges entre le contributeur et le réviseur.

Adopter le style `standard` c'est mettre l'importance de la clarité du code et des conventions de la communauté avant le style personel. Ça n'a peut-être pas de sens pour 100% des projets et cultures de développement, cependant, open-source peut être un environement hostile pour les jeunes développeurs. Mettre en place des attentes claires et automatisées pour les contributeurs permet un projet plus sain.

Pour plus d'information, jetez un oeil a la présentation ["Write Perfect Code with Standard and
ESLint"](https://www.youtube.com/watch?v=kuHfMw8j4xk). Dans cette présentation, vous allez apprendre sur le linting, quand utiliser `standard` contre `eslint`, et comment `prettier` compare à `standard`.

## Qui utilise le JavaScript Standard Style?

Beaucoup de monde!

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodejs.png>](https://nodejs.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/npm.png>](https://www.npmjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/github.png>](https://github.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/elastic.png>](https://www.elastic.co) |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/express.png>](http://expressjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/electron.png>](http://electron.atom.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nuxtjs.png>](https://nuxtjs.org/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/atom.png>](https://atom.io) |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/brave.png>](https://www.brave.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zeit.png>](https://zeit.co) |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nearform.png>](http://www.nearform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/typeform.png>](https://www.typeform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/heroku.png>](https://www.heroku.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/saucelabs.png>](https://saucelabs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/automattic.png>](https://automattic.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/godaddy.png>](https://www.godaddy.com) |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/webtorrent.png>](https://webtorrent.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/ipfs.png>](https://ipfs.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/dat.png>](https://datproject.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bitcoinjs.png>](https://bitcoinjs.org) |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/voltra.png>](https://voltra.co) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/treasuredata.png>](https://www.treasuredata.com) | [<img alt="Free MIDIs, MIDI file downloads" width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bitmidi.png>](https://bitmidi.com) | [<img width=190 alt="College essays, AP notes" src=https://cdn.rawgit.com/standard/standard/master/docs/logos/studynotes.jpg>](https://www.apstudynotes.org) |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/optiopay.png>](https://www.optiopay.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/jaguar-landrover.png>](https://www.jlrtechincubator.com/jlrti/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bustle.jpg>](https://www.bustle.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zentrick.png>](https://www.zentrick.com) |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/greenkeeper.png>](https://greenkeeper.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/karma.png>](https://karma-runner.github.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/taser.png>](https://www.taser.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/neo4j.png>](https://www.neo4j.com) |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/rentograph.png>](https://rentograph.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/eaze.png>](https://www.eaze.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/ctrl-alt-deseat.png>](https://www.ctrlaltdeseat.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/clevertech.png>](https://clevertech.biz) |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/aragon.png>](https://aragon.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/flowsent.png>](https://www.flowsent.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/puma-browser.png>](https://www.pumabrowser.com/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/webstorm.png>](https://www.jetbrains.com/webstorm/) |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/fastify.png>](https://www.fastify.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/scuttlebutt.png>](https://www.scuttlebutt.nz) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/solid.png>](https://solid.inrupt.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/grab.png>](https://www.grab.com) |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |


| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/jublia.png>](https://jublia.com/) | Your logo here | Your logo here | Your logo here |
| ---------------------------------------------------------------------------------------------------------------- | -------------- | -------------- | -------------- |


En plus de ces entreprises, beaucoup de membres de la communauté utilisent `standard` sur des projets qui sont [trop nombreux](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)
pour les lister ici.

`standard` est aussi le top linteur sur le showcase
[Clean Code linter](https://github.com/showcases/clean-code-linters) de Github.

## Il y a-t-il des plugins pour les éditeurs de texte?

D'abord, installez `standard`. Après, installez le correct plugin pour votre éditeur:

### Sublime Text

En utilisant **[Package Control][sublime-1]**, installez **[Sublimelinter][sublime-2]** et
**[Sublimelinter-contrib-standard][sublime-3]**.

Pour le formatage automatique quand vous sauvegardez, installez **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/Sublimelinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

Installez **[linter-js-standard][atom-1]**.

Autrement, vous pouvez installer **[linter-js-standard-engine][atom-4]**. Au lieu de bundler une version de `standard`, il va automatiquement utiliser la version installée dans le project actuel. Il marchera aussi tout de suite avec d'autres linteurs basés sur **[standard-engine][atom-5]**.

Pour un formatage automatique, installez **[standard-formatter][atom-2]**. Pour des extraits,
installez **[standardjs-snippets][atom-3]**.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets
[atom-4]: https://atom.io/packages/linter-js-standard-engine
[atom-5]: https://github.com/standard/standard-engine

### Visual Studio Code

Installez **[vscode-standard][vscode-1]**. (Cela inclus le support pour le formatage automatique.)

Pour des extraits JS, installez: **[vscode-standardjs-snippets][vscode-2]**. Pour des extraits React, installez **[vscode-react-standard][vscode-3]**.

[vscode-1]: https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items?itemName=TimonVS.ReactSnippetsStandard

### Vim

Installez **[ale][vim-1]**. Et ajoutez ces lignes dans votre fichier `.vimrc`.

```vim
let g:ale_linters = {
\   'javascript': ['standard'],
\}
```

Cela definit standard comme votre seul linteur pour les fichiers javascript et donc previent les conflits avec eslint.

Pour le formatage automatique quand vous sauvegardez, ajoutez ces lines à `.vimrc`:

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

Les plugins alternatifs à considérer incluent [neomake][vim-2] et [syntastic][vim-3], les deux ont un support integré pour `standard` (une configuration est peut-être nécessaire).

[vim-1]: https://github.com/w0rp/ale
[vim-2]: https://github.com/neomake/neomake
[vim-3]: https://github.com/vim-syntastic/syntastic

### Emacs

Installez **[Flycheck][emacs-1]** et jetez un oeil au **[manuel][emacs-2]** pour apprendre à l'utiliser dans vos projets.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

Cherchez les extensions pour **["Standard Code Style"][brackets-1]** et cliquez "Install".

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains, etc.)

WebStorm [à récemment annouce le support natif](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)
pour `standard` directement dans l'IDE.

Si vous préférez toujours configurer `standard` manuellement, [suivez ce guide][webstorm-1]. Cela s'applique à tous les produits JetBrains, inclus PhpStorm, IntelliJ, RubyMine, etc.

[webstorm-1]: webstorm.md

## Il y a-t-il un badge readme?

Oui! Si vouz utilisez `standard` dans votre projet, vous pouvez inclure un de ces badges dans votre readme pour laisser les gens savoir que votre code utilise le style standard.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```md
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
```

## Je ne suis pas d'accord avec la règle X, pouvez-vous la changer?

Non. Le but de `standard` est de gagner du temps en evitant
[bikeshedding][bikeshedding] à propos du style de code. Il y a plein de débats en ligne à propos des tabs vs. espaces, etc. qui ne seront jamais résolus. Ces débats sont juste distractifs et empèchent de faire avancer les choses. A la fin de la journée, vouz devez faire un choix et c'est toute la philosophie derrière `standard` -- c'est juste un tas d'opinions pour 'faire un choix'. J'espère que les utilisateurs voient la valeur au lieu de défendre leurs propres opinions.

Si vous voulez vraiment configurer des centaines de règles ESLint vous-mêmes, vous pouvez toujours utiliser `eslint` directement avec
[eslint-config-standard](https://github.com/standard/eslint-config-standard) pour ajouter vos changement au-dessus.
[`standard-eject`](https://github.com/josephfrazier/standard-eject) peut vous aider a changer de `standard` à `eslint` et `eslint-config-standard`.

Astuce pro: Utilisez juste `standard` et passez à autre chose. Vous pourriez passer votre temps a résoudre de vrais problèmes! :P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

## Ce n'est pas un vrai standard web!

Bien sur que non! Le style présenté ici n'est pas affilié à aucun groupe de standards web, ce pourquoi ce repo est appelé `standard/standard` et pas
`ECMA/standard`.

Le mot "standard" a plus de sens que juste "web standard" :-) Par exemple:

- Ce module aide à garder notre code à un certain _standard de qualité_.
- Ce module assure que les nouveaux contributeurs suivent les _standards de style_.

## Y a-t-il un formateur automatique?

Oui! Vous pouvez utiliser `standard --fix` pour résoudre la plupart des problèmes automatiquement.

`standard --fix` fait parti de `standard` pour un confort maximal. La plupart des problèmes peuvent être résolus, mais quelques erreurs (comme oublier de gérer les erreurs) doivent être résolues manuellement.

Pour gagner du temps, `standard` produit le message "`Run standard --fix to automatically fix some problems`" quand il détecte des problèmes qui peuvent être résolus automatiquement.

## Comment ignorer des fichiers?

Quelques chemins de fichiers (`node_modules/`, `coverage/`, `vendor/`, `*.min.js`, `bundle.js`,
et fichiers/dossiers qui commencent avec `.` comme `.git/`) sont automatiquement ignorés.

Les chemins de fichiers dans le fichier `.gitignore` sont aussi automatiquement ignorés.

Parfois, vous devez ignorer d'autres dossiers ou des fichiers spécifiques. Pour cela, ajoutez une propriéte `standard.ignore` au fichier `package.json`:

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

## Comment cacher certains avertissements?

Dans de rares cas, vous allez devoir enfreindre une règle et cacher l'avertissement généré par `standard`.

JavaScript Standard Style utilise [ESLint](http://eslint.org/) et vouz pouvez cacher les avertissements comme vous le feriez avec ESLint.

Pour obtenir un resultat plus verbeux (pour que vous puissiez trouver la règle particulière à ignorer), éxécutez:

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

Désactivez **toutes les règles** pour une ligne particulière:

```js
file = 'I know what I am doing' // eslint-disable-line
```

Ou, désactivez **seulement** la règle `"no-use-before-define"`:

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

Ou, désactivez la règle `"no-use-before-define"` pour **plusieurs lignes**:

```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

## J'utilise une bibliothèque logicielle qui pollue l'espace de noms global. Comment puis-je éviter les erreurs "variable is not defined"?

Quelques modules (ex. `mocha`) mettent leurs fonctions (ex. `describe`, `it`) sur l'objet global. Puisque ces fonctions ne sont pas définies ou requises (`require`'d) nulle part dans votre code, `standard` vous avertira que vous utilisez une variable qui n'est pas définie (normalement, cette règle est très utile pour capter les fautes d'orthographe!). Mais nous voulons les désactiver pour les variables globales.

Pour informer `standard` (et les personnes qui lisent votre code) que certaines variables sont globales dans votre code, ajoutez ça au debut de votre fichier:

```js
/* global myVar1, myVar2 */
```

Si vous avez des centaines de fichiers, il serait peut être désirable d'éviter d'ajouter des commentaires à chaque fichier. Dans ce cas, éxécutez:

```bash
$ standard --global myVar1 --global myVar2
```

Ou, ajoutez ça au fichier `package.json`:

```json
{
  "standard": {
    "globals": ["myVar1", "myVar2"]
  }
}
```

_Note: `global` et `globals` sont équivalents._

## Comment puis-je utiliser les fonctionalités expérimentales de JavaScript(ES Next)?

`standard` supporte les dernières fonctionalités d'ECMAScript, ES8 (ES2017), comprenant les propositions qui sont à l'"étape 4" du processus de proposition.

Pour supporter les fonctionalités expérimentales, `standard` supporte la spécification d'un parseur JavaScript personalisé. Avant d'utiliser un parseur personalisé, il faut considérer si la compléxité ajoutée vaut le coup.

Pour utiliser un autre parseur, installez-le d'abord avec npm:

```bash
npm install @babel/eslint-parser --save-dev
```

Ensuite éxécutez:

```bash
$ standard --parser @babel/eslint-parser
```

Ou, ajoutez ça au `package.json`:

```json
{
  "standard": {
    "parser": "@babel/eslint-parser"
  }
}
```

Si `standard` est installé globalement (`npm install standard --global`), soyez surs d'installer `@babel/eslint-parser` globalement aussi, avec
`npm install @babel/eslint-parser --global`.

## Puis-je utiliser une variation du langage JavaScript, comme Flow ou TypeScript?

`standard` supporte les dernières fonctionalités d'ECMAScript. Cependant, Flow et TypeScript ajoutent une nouvelle syntaxe au langage, alors ils ne sont pas supportés par defaut.

Pour supporter les variations, `standard` supporte la spécification d'un parseur JavaScript personnalisé en même temps qu'un plugin ESLint pour manager la syntaxe modifiée. Avant d'utiliser une variation, demandez-vous si la complexitée ajoutée vaut le coup.

### Flow

Pour utiliser Flow, vous allez devoir éxécuter `standard` avec `@babel/eslint-parser` comme parseur et
`eslint-plugin-flowtype` comme plugin.

```bash
npm install @babel/eslint-parser eslint-plugin-flowtype --save-dev
```

Ensuite éxécutez:

```bash
$ standard --parser @babel/eslint-parser --plugin flowtype
```

Ou, ajoutez ça au `package.json`:

```json
{
  "standard": {
    "parser": "@babel/eslint-parser",
    "plugins": [ "flowtype" ]
  }
}
```

_Note: `plugin` et `plugins` sont équivalents._

Si `standard` est installé globalement (`npm install standard --global`), soyez sur d'installer `@babel/eslint-parser` et `eslint-plugin-flowtype` globalement aussi, avec
`npm install @babel/eslint-parser eslint-plugin-flowtype --global`.

### TypeScript

Il existe deux méthodes officiellement prises en charge pour utiliser `standard` avec des fichiers `TypeScript`.

- [ts-standard](https://github.com/standard/ts-standard)

Comme `standard` mais avec des règles spécifiques à TypeScript. Le projet utilise `eslint-config-standard-with-typescript` pour les règles.

- [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)

Un fichier de configuration eslint avec des règles JavaScript et TypeScript respectant `standard`.

## Et Mocha, Jasmine, QUnit, etc?

Pour supporter Mocha dans les fichiers de test, ajoutez ça en haut des fichiers de test:

```js
/* eslint-env mocha */
```

Ou, éxécutez:

```bash
$ standard --env mocha
```

Dans cette commande, `mocha` peut être `jasmine`, `qunit`, `phantomjs`, etc. Pour voir la liste complète, jetez un coup d'oeil a la documentation d'ESLint [specifiant les environements](http://eslint.org/docs/user-guide/configuring.html#specifying-environments). Pour une liste détaillant quelles globales sont disponibles pour ces environements, jetez un coup d'oeil au module npm
[globals](https://github.com/sindresorhus/globals/blob/master/globals.json).

_Note: `env` et `envs` sont équivalents._

## Et les Web Workers?

Ajoutez ça en haut du fichier web worker:

```js
/* eslint-env worker */
```

Cela indique à `standard` (et aux personnes lisant le code) que `self` est une global dans le code du web worker.

Pour les Service workers, ajoutez ça:

```js
/* eslint-env serviceworker */
```

## Quelle est la différence entre les avertissements et les erreurs ?

`standard` traite toutes les violations de règles comme des erreurs, ce qui veut dire que `standard` quittera avec un code de sortie non nul (erreur).

Cependant, nous pouvons occasionnellement sortir une nouvelle version majeure de `standard` qui change des règles qui affecte la majorité des utilisateurs `standard` (par exemple, la transition de `var` à `let`/`const`). Nous faisons ça seulement quand nous pensons que ça vaut le coup et que la règle peut se [fixer automatiquement](https://standardjs.com/readme-en.html#is-there-an-automatic-formatter).

Dans ses situations, nous avons une période de transition, dans laquelle, la règle changé est seulement un "avertissement". Les avertissements ne font pas quitter `standard` avec un code de sortie non nul (erreur). Toutefois, un message sera affiché dans la console. Durant cette période de transition, l'utilisation de `standard --fix` va mettre à jour votre code pour que ça soit prêt pour la prochaine mise à jour majeur.

L'approche lente et prudente est ce que nous recherchons avec `standard`. Nous sommes généralement extrêmement prudents dans l'application de l'utilisation des nouvelles fonctionnalités du langage. Nous voulons que l'utilisation de `standard` soit légère et amusante, c'est pourquoi nous prenons soin d'apporter des modifications qui pourraient vous gêner. Comme toujours, vous pouvez [désactiver une règle](https://standardjs.com/readme-en.html#how-do-i-disable-a-rule) à tout moment, si nécessaire.

## Puis-je vérifier le code dans les fichiers Markdown ou HTML?

Pour vérifier le code dans les fichiers Markdown, utilisez[ `standard-markdown`](https://www.npmjs.com/package/standard-markdown).

Autrement, il y a des plugins ESLint qui peuvent vérifier le code dans les fichiers Markdown, HTML et plein d'autres genres de fichiers:

Pour verifier le code dans les fichiers Markdown, utilisez un plugin ESLint:

```bash
$ npm install eslint-plugin-markdown
```

Ensuite, pour vérifier le JS à l'interieur des blocs de code, éxécutez:

```bash
$ standard --plugin markdown '**/*.md'
```

Pour verifier le code à l'interieur des fichiers HTML, utilisez un plugin ESLint:

```bash
$ npm install eslint-plugin-html
```

Ensuite, pour vérifier le code JS qui apparait dans les `<script>`, éxécutez:

```bash
$ standard --plugin html '**/*.html'
```

## Il y a-t-il un Git `pre-commit`?

```bash
#!/bin/bash

# Assurez-vous que tous les fichiers JavaScript prets à être commis passent les standards de style de code
function xargs-r() {
  # Portable version of "xargs -r". The -r flag is a GNU extension that
  # prevents xargs from running if there are no input files.
  if IFS= read -r -d $'\n' path; then
    echo "$path" | cat - | xargs "$@"
  fi
}
git diff --name-only --cached --relative | grep '\.jsx\?$' | sed 's/[^[:alnum:]]/\\&/g' | xargs-r -E '' -t standard
if [[ $? -ne 0 ]]; then
  echo 'JavaScript Standard Style errors were detected. Aborting commit.'
  exit 1
fi
```

## Comment puis-je produire un resultat coloré et _joli_?

Le resultat integré est simple et direct, mais si vous aimez les trucs sophistiqués, installez [snazzy](https://www.npmjs.com/package/snazzy):

```bash
$ npm install snazzy
```

Et éxécutez:

```bash
$ standard --verbose | snazzy
```

Il y a aussi [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), et
[standard-summary](https://www.npmjs.com/package/standard-summary).

## Il y a-t-il une API Node.js??

Oui!

### `standard.lintText(text, [opts], callback)`

Lint le texte fourni. Un objet `opts` peut être fourni:

```js
{
  cwd: '',      // current working directory (default: process.cwd())
  filename: '', // path of the file containing the text being linted (optional, though some eslint plugins require it)
  fix: false,   // automatically fix problems
  globals: [],  // custom global variables to declare
  plugins: [],  // custom eslint plugins
  envs: [],     // custom eslint environment
  parser: ''    // custom js parser (e.g. @babel/eslint-parser)
}
```

D'autres options peuvent être utilisées à partir d'un fichier `package.json` s'il est trouvé dans le dossier courant.

Le `callback` sera appelé avec un objet `Error` et `results`.

L'objet `results` aura les propriétes suivantes:

```js
var results = {
  results: [
    {
      filePath: '',
      messages: [{ ruleId: '', message: '', line: 0, column: 0 }],
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

C'est la version synchrone de `standard.lintText()`. Si une erreur arrive, une exception est jetée. Autrement, un objet `results` est retourné.

### `standard.lintFiles(files, [opts], callback)`

Lint les fichiers qui correspondent aux globs fournis. Un objet `opts` peut être fourni:

```js
var opts = {
  ignore: [],   // file globs to ignore (has sane defaults)
  cwd: '',      // current working directory (default: process.cwd())
  fix: false,   // automatically fix problems
  globals: [],  // global variables to declare
  plugins: [],  // eslint plugins
  envs: [],     // eslint environment
  parser: ''    // js parser (e.g. @babel/eslint-parser)
}
```

Le `callback` sera appelé avec un objet `Error` et `results` (comme au-dessus).

## Comment puis-je contribuer a `standard`?

Les contributions sont bienvenues! Jetez un coup d'oeil aux [issues](https://github.com/standard/standard/issues) et aux [PRs](https://github.com/standard/standard/pulls), et faites la votre si vous voulez quelque chose que vous ne trouvez pas la.

Envie de discuter? Joignez les contributeurs sur IRC dans la chaine `#standard` sur freenode.

Voici quelques modules importants dans l'ecosystème `standard`:

- **[standard](https://github.com/standard/standard)** - ce repo
  - **[standard-engine](https://github.com/standard/standard-engine)** - le moteur cli pour les règles eslint
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** - les règles eslint pour standard
  - **[eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)** - les règles eslint pour standard (JSX)
  - **[eslint-plugin-standard](https://github.com/standard/eslint-plugin-standard)** - règles eslint customisées pour standard (ne fait pas partie de eslint core)
  - **[eslint](https://github.com/eslint/eslint)** - le linteur qui alimente standard
- **[snazzy](https://github.com/standard/snazzy)** - résultats de standard plus jolis dans le terminal
- **[standard-www](https://github.com/standard/standard-www)** - le code pour https://standardjs.com
- **[semistandard](https://github.com/standard/semistandard)** - standard, avec point-virgules (si nécessaire)

Il y a aussi plein de **[plugins pour editeur](#are-there-text-editor-plugins)**, une liste de
**[modules npm qui utilisent `standard`](https://github.com/standard/standard-packages)**,
et une super liste de
**[modules dans l'ecosystème `standard`](https://github.com/standard/awesome-standard)**.

## Licence

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
