<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/standard/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://discord.gg/ZegqCBr"><img src="https://img.shields.io/discord/612704110008991783" alt="discord"></a>
  <a href="https://github.com/standard/standard/actions/workflows/test-external.yml"><img src="https://github.com/standard/standard/actions/workflows/test-external.yml/badge.svg?branch=master" alt="External tests"></a>
  <a href="https://github.com/standard/standard/actions/workflows/test-internal.yml"><img src="https://github.com/standard/standard/actions/workflows/test-internal.yml/badge.svg?branch=master" alt="Internal tests"></a>
  <a href="https://github.com/standard/standard/actions?query=workflow%3A%22Old+test%22"><img src="https://github.com/standard/standard/workflows/Old%20test/badge.svg" alt="status badge old Node test"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/eslint-config-standard"><img src="https://img.shields.io/npm/dm/eslint-config-standard.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<h5 align="center">
  Gesponsort von&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://socket.dev"><img src="https://cdn.rawgit.com/standard/standard/master/docs/logos/socket.png" alt="Socket – Supply Chain Dependency Security for JavaScript and npm" height=50 valign="middle"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://wormhole.app/?utm_medium=sponsorship&utm_source=standard&utm_campaign=feross"><img src="https://cdn.rawgit.com/standard/standard/master/docs/logos/wormhole.png" alt="Wormhole" height=50 valign="middle"></a>
</h5>

<p align="center">
  <a href="/docs/README-en.md">English</a> •
  <a href="/docs/README-de.md">Deutsch</a> •
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

## JavaScript-Style Guide, Linter und Formatierer

Dieses Modul spart Ihnen (und anderen!) auf dreierlei Weise Zeit:

- **Keine Konfiguration** Der einfachste Weg, Codequalität in Ihrem Projekt durchzusetzen.
  Projekt durchzusetzen. Sie müssen keine Entscheidungen treffen. Keine `.eslintrc`-Dateien zu verwalten. Es funktioniert einfach.
- **Automatisches Formatieren von Code.** Führen Sie einfach `standard --fix` aus und verabschieden Sie sich von
  unordentlichen oder inkonsistenten Code.
- **Stilprobleme und Programmierfehler frühzeitig erkennen.** Sparen Sie wertvolle Zeit bei der Codeüberprüfung
  Sparen Sie wertvolle Zeit bei der Überprüfung des Codes, indem Sie das Hin und Her zwischen Prüfer und Mitwirkendem vermeiden.

Probieren Sie es aus, indem Sie `npx standard --fix` gleich jetzt ausführen!

## Inhaltsverzeichnis

- Schnellstart
  - [Installation](#install)
  - [Verwendung](#usage)
  - Was Sie tun könnten, wenn Sie clever sind](#what-you-might-do-if-youre-clever)
- HÄUFIG GESTELLTE FRAGEN
  - [Warum sollte ich JavaScript Standard Style verwenden?](#why-should-i-use-javascript-standard-style)
  - Wer benutzt JavaScript Standard Style?](#who-uses-javascript-standard-style)
  - [Gibt es Texteditor-Plugins?](#are-there-text-editor-plugins)
  - [Gibt es ein Readme-Badge?](#is-there-a-readme-badge)
  - [Ich bin mit Regel X nicht einverstanden, kannst du sie ändern?](#i-disagree-with-rule-x-can-you-change-it)
  - [Aber das ist kein echter Webstandard!](#but-this-isnt-a-real-web-standard)
  - [Gibt es einen automatischen Formatierer?](#is-there-an-automatic-formatter)
  - [Wie ignoriere ich Dateien?](#how-do-i-ignore-files)
  - Wie kann ich eine Regel deaktivieren?](#how-do-i-disable-a-rule)
  - Ich verwende eine Bibliothek, die den globalen Namespace verschmutzt. Wie verhindere ich "Variable ist nicht definiert"-Fehler?](#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors)
  - Wie verwende ich experimentelle JavaScript (ES Next) Features?](#how-do-i-use-experimental-javascript-es-next-features)
  - Kann ich eine JavaScript-Sprachvariante verwenden, wie Flow oder TypeScript?](#can-i-use-a-javascript-language-variant-like-flow-or-typescript)
  - Was ist mit Mocha, Jest, Jasmine, QUnit, etc?](#what-about-mocha-jest-jasmine-qunit-etc)
  - Was ist mit Web-Workern und Service-Workern?](#what-about-web-workers-and-service-workers)
  - Was ist der Unterschied zwischen Warnungen und Fehlern?](#what-is-the-difference-between-warnings-and-errors)
  - Kann ich Code innerhalb von Markdown- oder HTML-Dateien überprüfen?](#can-i-check-code-inside-of-markdown-or-html-files)
  - Gibt es einen Git `pre-commit`-Hook?](#is-there-a-git-pre-commit-hook)
  - [Wie mache ich die Ausgabe bunt und schön?](#how-do-i-make-the-output-all-colorful-and-pretty)
  - [Gibt es eine Node.js-API?](#is-there-a-nodejs-api)
  - Wie kann ich zu StandardJS beitragen?](#how-do-i-contribute-to-standardjs)

## Installieren

Der einfachste Weg, JavaScript Standard Style zu verwenden, ist, es global als ein
Node-Befehlszeilenprogramm zu installieren. Führen Sie den folgenden Befehl im Terminal aus:

```bash
$ npm install standard --global
```

Oder Sie können `standard` lokal installieren, um es in einem einzelnen Projekt zu verwenden:

```bash
$ npm install standard --save-dev
```

*Hinweis: Um die vorangegangenen Befehle auszuführen, müssen [Node.js](http://nodejs.org) und [npm](https://npmjs.com) installiert sein.*

## Verwendung

Nachdem Sie `standard` installiert haben, sollten Sie in der Lage sein, das Programm `standard` zu benutzen. Der
einfachste Anwendungsfall wäre die Überprüfung des Stils aller JavaScript-Dateien im
aktuellen Arbeitsverzeichnis:

```bash
$ standard
Fehler: JavaScript-Standardstil verwenden
  lib/torrent.js:950:11: Erwartete '===' und sah stattdessen '=='.
```

Wenn Sie `standard` lokal installiert haben, führen Sie es stattdessen mit `npx` aus:

```bash
$ npx standard
```

Optional können Sie ein Verzeichnis (oder Verzeichnisse) mit dem glob-Muster übergeben. Seien Sie
Stellen Sie sicher, dass Sie Pfade, die glob-Muster enthalten, in Anführungszeichen setzen, damit sie von
Standard" und nicht von Ihrer Shell expandiert werden:

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**Anmerkung:** Standardmäßig sucht `standard` nach allen Dateien, die den Mustern entsprechen:
`**/*.js`, `**/*.jsx`.

## Was Sie tun könnten, wenn Sie clever sind

1. Füge es zu `package.json` hinzu

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

2. Der Stil wird automatisch geprüft, wenn Sie `npm test` ausführen

   ```bash
   $ npm test
   Fehler: JavaScript-Standardstil verwenden
     lib/torrent.js:950:11: Erwartete '===' und sah stattdessen '=='.
   ```

3. Nie wieder Style-Feedback zu einem Pull-Request geben!

## Warum sollte ich JavaScript Standard Style verwenden?

Das Schöne an JavaScript Standard Style ist, dass es einfach ist. Keiner will
mehrere hundertzeilige Style-Konfigurationsdateien für jedes Modul/Projekt pflegen
an dem sie arbeiten. Genug von diesem Wahnsinn!

Dieses Modul spart Ihnen (und anderen!) auf drei Arten Zeit:

- **Keine Konfiguration** Der einfachste Weg, einen konsistenten Stil in Ihrem Projekt durchzusetzen.
  Projekt durchzusetzen. Fügen Sie es einfach ein.
- **Automatische Formatierung von Code.** Führen Sie einfach `standard --fix` aus und verabschieden Sie sich von
  unordentlichen oder inkonsistenten Code.
- **Stilprobleme und Programmierfehler frühzeitig erkennen.** Sparen Sie wertvolle Zeit bei der Codeüberprüfung
  Sparen Sie wertvolle Zeit bei der Überprüfung des Codes, indem Sie das Hin und Her zwischen Prüfer und Mitwirkendem vermeiden.

Die Übernahme des "Standard"-Stils bedeutet, dass Sie die Bedeutung von Code-Klarheit und
Community-Konventionen höher zu bewerten als den persönlichen Stil. Dies ist vielleicht nicht für
100% der Projekte und Entwicklungskulturen sinnvoll sein, aber Open Source kann ein feindlicher
Ort für Neulinge sein. Klare, automatisierte Erwartungen an die Mitwirkenden zu stellen, macht ein
Projekt gesünder.

Weitere Informationen finden Sie in dem Konferenzvortrag ["Write Perfect Code with Standard and
ESLint"] (https://www.youtube.com/watch?v=kuHfMw8j4xk). In diesem Vortrag lernen Sie
über Linting, wann man `Standard` gegenüber `Eslint` verwenden sollte und wie `prettier` im Vergleich
mit `Standard` vergleicht.

## Wer verwendet JavaScript Standard Style?

[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodejs.png>](https://nodejs.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/npm.png>](https://www.npmjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/github.png>](https://github.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/wormhole.png>](https://wormhole.app) |
|---|---|---|---|

[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/express.png>](http://expressjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/electron.png>](http://electron.atom.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nuxtjs.png>](https://nuxtjs.org/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/elastic.png>](https://www.elastic.co) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/brave.png>](https://www.brave.com) | [<img width=190 src=https://assets.vercel.com/image/upload/v1621541666/front/assets/logotype-black-on-white.png>](https://vercel.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/socket.png>](https://socket.dev) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nearform.png>](http://www.nearform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/typeform.png>](https://www.typeform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/heroku.png>](https://www.heroku.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/saucelabs.png>](https://saucelabs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/automattic.png>](https://automattic.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/godaddy.png>](https://www.godaddy.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/webtorrent.png>](https://webtorrent.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/ipfs.png>](https://ipfs.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/dat.png>](https://datproject.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bitcoinjs.png>](https://bitcoinjs.org) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/voltra.png>](https://voltra.co) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/treasuredata.png>](https://www.treasuredata.com) | [<img alt="Free MIDIs, MIDI file downloads" width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bitmidi.png>](https://bitmidi.com) | [<img width=190 alt="College essays, AP notes" src=https://cdn.rawgit.com/standard/standard/master/docs/logos/studynotes.jpg>](https://www.apstudynotes.org) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/optiopay.png>](https://www.optiopay.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/jaguar-landrover.png>](https://www.jlrtechincubator.com/jlrti/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bustle.jpg>](https://www.bustle.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zentrick.png>](https://www.zentrick.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/greenkeeper.png>](https://greenkeeper.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/karma.png>](https://karma-runner.github.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/taser.png>](https://www.taser.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/neo4j.png>](https://www.neo4j.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/rentograph.png>](https://rentograph.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/eaze.png>](https://www.eaze.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/ctrl-alt-deseat.png>](https://www.ctrlaltdeseat.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/clevertech.png>](https://clevertech.biz) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/aragon.png>](https://aragon.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/flowsent.png>](https://www.flowsent.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/puma-browser.png>](https://www.pumabrowser.com/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/webstorm.png>](https://www.jetbrains.com/webstorm/) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/fastify.png>](https://www.fastify.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/scuttlebutt.png>](https://www.scuttlebutt.nz) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/solid.png>](https://solid.inrupt.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/grab.png>](https://www.grab.com) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/jublia.png>](https://jublia.com/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/atom.png>](https://atom.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/peek.png>](https://www.peek.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/dotenv.png>](https://www.dotenv.org) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | Ihr Logo hier |  |  |
|---|---|---|---|


Zusätzlich zu den Unternehmen verwenden viele Community-Mitglieder `Standard` für Pakete, die
sind [zu zahlreich](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)
um sie hier aufzulisten.

`standard` ist auch der am höchsten bewertete Linter in GitHubs
[Clean Code Linter](https://github.com/showcases/clean-code-linters) Showcase.

## Gibt es Texteditor-Plugins?

Installieren Sie zuerst `standard`. Dann installieren Sie das entsprechende Plugin für Ihren Editor:

### Sublime Text

Installieren Sie **[Package Control][sublime-1]**, **[SublimeLinter][sublime-2]** und
**[SublimeLinter-contrib-standard][sublime-3]**.

Für automatische Formatierung beim Speichern installieren Sie **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

Install **[linter-js-standard][atom-1]**.

Alternativ können Sie auch **[linter-js-standard-engine][atom-4]** installieren. Anstatt
eine Version von `standard` zu bündeln, wird automatisch die Version verwendet, die
in Ihrem aktuellen Projekt. Es wird auch mit anderen Linters funktionieren, die auf
on **[standard-engine][atom-5]**.

Für automatische Formatierung, installieren Sie **[standard-formatter][atom-2]**. Für Schnipsel,
installieren Sie **[standardjs-snippets][atom-3]**.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets
[atom-4]: https://atom.io/packages/linter-js-standard-engine
[atom-5]: https://github.com/standard/standard-engine

### Visual Studio Code

Installieren Sie **[vscode-standard][vscode-1]**. (Enthält Unterstützung für automatische Formatierung.)

Für JS-Snippets, installieren Sie: **[vscode-standardjs-snippets][vscode-2]**. Für React-Snippets, installieren Sie **[vscode-react-standard][vscode-3]**.

[vscode-1]: https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items?itemName=TimonVS.ReactSnippetsStandard

### Vim

Installieren Sie **[ale][vim-1]**. Und fügen Sie diese Zeilen zu Ihrer `.vimrc` Datei hinzu.

```vim
let g:ale_linters = {
\ 'javascript': ['standard'],
\}
let g:ale_fixers = {'javascript': ['standard']}
```

Dies setzt Standard als einzigen Linter und Fixer für Javascript-Dateien und verhindert so Konflikte mit eslint. Für Linting und automatisches Fixieren beim Speichern, fügen Sie diese Zeilen zu `.vimrc` hinzu:
``vim
let g:ale_lint_on_save = 1
let g:ale_fix_on_save = 1
```


Alternative Plugins, die man in Betracht ziehen kann, sind [neomake][vim-2] und [syntastic][vim-3], die beide eingebaute Unterstützung für `standard` haben (obwohl eine Konfiguration notwendig sein kann).

[vim-1]: https://github.com/w0rp/ale
[vim-2]: https://github.com/neomake/neomake
[vim-3]: https://github.com/vim-syntastic/syntastic

### Emacs

Installieren Sie **[Flycheck][emacs-1]** und lesen Sie das **[Handbuch][emacs-2]**, um zu erfahren
wie Sie es in Ihren Projekten aktivieren können.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Klammern

Suchen Sie in der Registrierung der Erweiterungen nach **["Standard Code Style"][brackets-1]** und klicken Sie auf "Installieren".

[Klammern-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains, etc.)

WebStorm [kürzlich angekündigte native Unterstützung](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)
für "Standard" direkt in der IDE.

Wenn Sie es trotzdem vorziehen, `standard` manuell zu konfigurieren, [folgen Sie dieser Anleitung][webstorm-1]. Dies gilt für alle JetBrains-Produkte, einschließlich PhpStorm, IntelliJ, RubyMine, etc.

[webstorm-1]: docs/webstorm.md

## Gibt es ein Readme-Abzeichen?

Ja! Wenn Sie `Standard` in Ihrem Projekt verwenden, können Sie eines dieser Abzeichen in
Readme einfügen, damit die Leute wissen, dass Ihr Code den Standardstil verwendet.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```md
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
```

## Ich bin mit Regel X nicht einverstanden, können Sie sie ändern?

Nein. Der ganze Sinn von `Standard` ist es, Zeit zu sparen, indem man
[über den Code-Stil zu vermeiden. Es gibt viele Online-Debatten über
Tabs vs. Leerzeichen usw., die nie geklärt werden. Diese Debatten lenken nur davon ab
davon ab, etwas zu erledigen. Am Ende des Tages muss man sich einfach für etwas entscheiden, und
und das ist die ganze Philosophie von "Standard" - es ist ein Haufen vernünftiger "such dir einfach was aus"-Meinungen.
Meinungen. Hoffentlich sehen die Benutzer den Wert darin, statt ihre eigene Meinung zu verteidigen.
eigenen Meinungen.

Es gibt ein paar ähnliche Pakete für alle, die den `Standard` nicht vollständig akzeptieren wollen:
- [semistandard](https://github.com/standard/semistandard) - Standard, mit Semikolons
- [standardx](https://github.com/standard/standardx) - Standard, mit eigenen Anpassungen

Wenn Sie wirklich hunderte von ESLint-Regeln individuell konfigurieren wollen, können Sie
immer direkt `eslint` verwenden mit
[eslint-config-standard](https://github.com/standard/eslint-config-standard) verwenden, um
Ihre Änderungen zu überlagern.
[`standard-eject`](https://github.com/josephfrazier/standard-eject) kann helfen
Ihnen helfen, von `standard` zu `eslint` und `eslint-config-standard` zu migrieren.

Pro-Tipp: Verwenden Sie einfach `standard` und machen Sie weiter. Es gibt tatsächlich echte Probleme, die Sie
Zeit damit verbringen könnten, sie zu lösen! :P

[bikeshedding]: https://docs.freebsd.org/en/books/faq/#bikeshed-painting

## Aber das ist kein echter Webstandard!

Natürlich ist es das nicht! Der hier beschriebene Stil ist nicht mit offiziellen Web-Standardisierungsgruppen verbunden.
Web-Standard-Gruppen verbunden, deshalb heißt dieses Repo `standard/standard` und nicht
`ECMA/standard`.

Das Wort "Standard" hat mehr Bedeutungen als nur "Webstandard" :-) Zum Beispiel:

- Dieses Modul hilft, unseren Code auf einem hohen *Qualitätsstandard* zu halten.
- Dieses Modul stellt sicher, dass neue Mitwirkende einige grundlegende *Style-Standards* einhalten.

## Gibt es einen automatischen Formatierer?

Ja! Sie können `standard --fix` verwenden, um die meisten Probleme automatisch zu beheben.

`standard --fix` ist in `standard` eingebaut, um maximalen Komfort zu bieten. Die meisten Probleme
können behoben werden, aber einige Fehler (wie das Vergessen, Fehler zu behandeln) müssen manuell behoben werden.
manuell behoben werden.

Um Ihnen Zeit zu sparen, gibt `standard` die Meldung "`Run standard --fix to
einige Probleme automatisch zu beheben", wenn es Probleme entdeckt, die automatisch behoben werden können.
automatisch behoben werden können.

## Wie kann ich Dateien ignorieren?

Bestimmte Pfade (`node_modules/`, `coverage/`, `vendor/`, `*.min.js`,
und Dateien/Ordner, die mit `.` beginnen, wie `.git/`) werden automatisch ignoriert.

Pfade in der Stammdatei `.gitignore` eines Projekts werden ebenfalls automatisch ignoriert.

Manchmal müssen Sie zusätzliche Ordner oder bestimmte Minified-Dateien ignorieren. Um dies zu
fügen Sie die Eigenschaft `standard.ignore` zur `package.json` hinzu:

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

## Wie kann ich eine Regel deaktivieren?

In seltenen Fällen müssen Sie eine Regel unterbrechen und den Fehler ausblenden, der von
`Standard` erzeugt wird.

JavaScript Standard Style verwendet [ESLint](http://eslint.org/) unter der Haube und
Sie können Fehler ausblenden, wie Sie es normalerweise tun würden, wenn Sie ESLint direkt verwenden würden.

Deaktivieren Sie **alle Regeln** für eine bestimmte Zeile:

```js
file = 'Ich weiß, was ich tue' // eslint-disable-line
```

Oder deaktivieren Sie **nur** die "no-use-before-define"-Regel:

```js
file = 'Ich weiß, was ich tue' // eslint-disable-line no-use-before-define
```

Oder deaktivieren Sie die Regel `"no-use-before-define"` für **mehrere Zeilen**:

```js
/* eslint-disable no-use-before-define */
console.log('anstößiger Code kommt hier hin...')
console.log('anstößiger Code kommt hier hin...')
console.log('anstößiger Code kommt hier hin...')
/* eslint-enable no-use-before-define */
```

## Ich verwende eine Bibliothek, die den globalen Namespace verschmutzt. Wie verhindere ich "Variable ist nicht definiert"-Fehler?

Einige Pakete (z.B. `mocha`) legen ihre Funktionen (z.B. `describe`, `it`) auf das
globalen Objekt (schlechte Form!). Da diese Funktionen nirgendwo in Ihrem Code definiert oder `require`'d
nicht definiert sind, wird `standard` Sie warnen, dass Sie eine Variable verwenden, die
nicht definiert ist (normalerweise ist diese Regel sehr nützlich, um Tippfehler zu erkennen). Aber wir wollen
sie für diese globalen Variablen deaktivieren.

Um `Standard` (und auch den Menschen, die Ihren Code lesen) wissen zu lassen, dass bestimmte Variablen
in Ihrem Code global sind, fügen Sie dies an den Anfang Ihrer Datei:

```js
/* global myVar1, myVar2 */
```

Wenn Sie Hunderte von Dateien haben, kann es wünschenswert sein, Kommentare nicht zu jeder Datei hinzuzufügen.
jeder Datei hinzuzufügen. In diesem Fall, führen Sie aus:

```bash
$ standard --global myVar1 --global myVar2
```

Oder fügen Sie dies zu `package.json` hinzu:

```json
{
  "standard": {
    "globals": [ "meinVar1", "meinVar2" ]
  }
}
```

*Hinweis: `global` und `globals` sind gleichwertig.

## Wie verwende ich experimentelle JavaScript-Funktionen (ES Next)?

`standard` unterstützt die neuesten ECMAScript-Funktionen, ES8 (ES2017), einschließlich
Vorschläge für Sprachfunktionen, die sich in "Phase 4" des Vorschlagsprozesses befinden.

Um experimentelle Sprachfunktionen zu unterstützen, unterstützt `standard` die Spezifikation eines
benutzerdefinierten JavaScript-Parser. Bevor Sie einen benutzerdefinierten Parser verwenden, sollten Sie abwägen, ob sich die zusätzliche
Komplexität es wert ist.

Um einen benutzerdefinierten Parser zu verwenden, installieren Sie ihn zunächst von npm:

```bash
npm install @babel/eslint-parser --save-dev
```

Dann ausführen:

```bash
$ standard --parser @babel/eslint-parser
```

Oder fügen Sie dies zu `package.json` hinzu:

```json
{
  "standard": {
    "parser": "@babel/eslint-parser"
  }
}
```

## Kann ich eine JavaScript-Sprachvariante, wie Flow oder TypeScript, verwenden?

Standard" unterstützt die neuesten ECMAScript-Funktionen. Flow und TypeScript fügen jedoch eine neue
Syntax der Sprache hinzu, so dass sie nicht sofort unterstützt werden.

Für TypeScript wird eine offizielle Variante `ts-standard` unterstützt und gepflegt, die eine sehr
eine sehr ähnliche Erfahrung wie "Standard" bietet.

Für andere JavaScript-Sprachvarianten unterstützt `standard` die Angabe eines eigenen JavaScript
Parser sowie ein ESLint-Plugin zur Behandlung der geänderten Syntax. Vor der Verwendung einer JavaScript
Sprachvariante verwenden, sollten Sie abwägen, ob sich die zusätzliche Komplexität lohnt.

### TypeScript

[`ts-standard`](https://github.com/standard/ts-standard) ist die offiziell unterstützte Variante für
TypeScript. `ts-standard` unterstützt die gleichen Regeln und Optionen wie `standard` und beinhaltet
zusätzliche TypeScript-spezifische Regeln. `ts-standard` lint sogar reguläre `javascript`-Dateien
durch Setzen der Konfiguration in `tsconfig.json`.

``bash
npm install ts-standard --save-dev
```

Dann führen Sie aus (wobei sich `tsconfig.json` im Arbeitsverzeichnis befindet):

```bash
$ ts-standard
```

Oder fügen Sie dies zu `package.json` hinzu:

```json
{
  "ts-standard": {
    "projekt": "./tsconfig.json"
  }
}
```

*Hinweis: Um zusätzliche Dateien in das Linting einzubeziehen, wie z.B. Testdateien, erstellen Sie eine `tsconfig.eslint.json`-Datei, die Sie stattdessen verwenden können.*

Wenn Sie wirklich hunderte von ESLint-Regeln individuell konfigurieren wollen, können Sie eslint
direkt mit [`eslint-config-standard-with-typescript`](https://github.com/standard/eslint-config-standard-with-typescript)
verwenden, um Ihre Änderungen zu überlagern.

### Fluss

Um Flow zu verwenden, müssen Sie `standard` mit `@babel/eslint-parser` als Parser und
`eslint-plugin-flowtype` als Plugin.

``bash
npm install @babel/eslint-parser eslint-plugin-flowtype --save-dev
```

Dann ausführen:

```bash
$ standard --parser @babel/eslint-parser --plugin flowtype
```

Oder fügen Sie dies zu `package.json` hinzu:

```json
{
  "standard": {
    "parser": "@babel/eslint-parser",
    "plugins": [ "flowtype" ]
  }
}
```

*Hinweis: `plugin` und `plugins` sind gleichwertig.

## Was ist mit Mocha, Jest, Jasmine, QUnit, etc?

Um Mocha in Testdateien zu unterstützen, fügen Sie dies an den Anfang der Testdateien:

```js
/* eslint-env mocha */
```

Oder, führen Sie aus:

```bash
$ standard --env mocha
```

Wobei `mocha` eines von `jest`, `jasmine`, `qunit`, `phantomjs`, und so weiter sein kann. Um eine
vollständige Liste finden Sie in ESLint's
[Umgebungen spezifizieren](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments)
Dokumentation. Für eine Liste der Globals, die für diese Umgebungen verfügbar sind,
finden Sie in der
[globals](https://github.com/sindresorhus/globals/blob/master/globals.json) npm
Modul.

*Hinweis: "env" und "envs" sind gleichwertig.

## Was ist mit Web-Workern und Service-Workern?

Fügen Sie dies am Anfang der Web Worker Dateien hinzu:

```js
/* eslint-env worker */
```

Dies lässt `standard` (und auch Menschen, die den Code lesen) wissen, dass `self` ein
global im Webworker-Code ist.

Für Service Worker fügen Sie stattdessen dies hinzu:

```js
/* eslint-env serviceworker */
```

## Was ist der Unterschied zwischen Warnungen und Fehlern?

`standard` behandelt alle Regelverletzungen als Fehler, was bedeutet, dass `standard`
mit einem Exit-Code ungleich Null (Fehler) beendet wird.

Es kann jedoch vorkommen, dass wir gelegentlich eine neue Hauptversion von `standard` veröffentlichen
veröffentlichen, die eine Regel ändert, die die Mehrheit der `standard`-Benutzer betrifft (zum Beispiel,
Umstellung von `var` auf `let`/`const`). Wir tun dies nur, wenn wir glauben, dass der
Vorteil die Kosten wert ist und nur wenn die Regel
[auto-fixable](#is-there-an-automatic-formatter).

In diesen Situationen haben wir eine "Übergangszeit", in der die Regeländerung nur eine
eine "Warnung" ist. Warnungen führen nicht dazu, dass `standard` einen von Null verschiedenen (Fehler-)
Exit-Code zurückgibt. Eine Warnmeldung wird aber trotzdem auf der Konsole ausgegeben. Während
Übergangszeit wird `standard --fix` Ihren Code aktualisieren, so dass er für die nächste
für die nächste Hauptversion bereit ist.

Die langsame und vorsichtige Vorgehensweise ist das, was wir mit `standard` anstreben. Wir sind
sind im Allgemeinen extrem konservativ, wenn es darum geht, die Verwendung neuer Sprach
Funktionen. Wir wollen, dass die Verwendung von `Standard` leicht ist und Spaß macht, und deshalb sind wir vorsichtig
mit Änderungen, die Ihnen in die Quere kommen könnten. Wie immer können Sie
[eine Regel](#how-do-i-disable-a-rule) jederzeit deaktivieren, falls nötig.

## Kann ich Code innerhalb von Markdown- oder HTML-Dateien überprüfen?

Um Code innerhalb von Markdown-Dateien zu prüfen, verwenden Sie [`standard-markdown`](https://www.npmjs.com/package/standard-markdown).

Alternativ gibt es ESLint-Plugins, die den Code innerhalb von Markdown, HTML,
und viele andere Arten von Sprachdateien prüfen können:

Um Code in Markdown-Dateien zu prüfen, verwenden Sie ein ESLint-Plugin:

```bash
$ npm install eslint-plugin-markdown
```

Um JS zu überprüfen, das innerhalb von Codeblöcken erscheint, führen Sie dann aus:

```bash
$ standard --plugin markdown '**/*.md'
```

Um Code innerhalb von HTML-Dateien zu überprüfen, verwenden Sie ein ESLint-Plugin:

```bash
$ npm install eslint-plugin-html
```

Dann, um JS zu überprüfen, das innerhalb von `<script>` Tags erscheint, führen Sie aus:

```bash
$ standard --plugin html '**/*.html'
```

## Gibt es einen Git `pre-commit`-Haken?

Ja! Hooks sind großartig, um sicherzustellen, dass ungestylter Code gar nicht erst in Ihr Repo gelangt.
Geben Sie nie wieder Style-Feedback zu einem Pull-Request!

Du hast sogar die Wahl...

### Installieren Sie Ihren eigenen Hook

```bash
#!/bin/bash

# Sicherstellen, dass alle JavaScript-Dateien, die für die Übergabe bereitgestellt werden, den Standard-Code-Stil erfüllen
function xargs-r() {
  # Portable Version von "xargs -r". Das -r Flag ist eine GNU-Erweiterung, die
  # verhindert, dass xargs läuft, wenn keine Eingabedateien vorhanden sind.
  if IFS= read -r -d $'\n' path; then
    echo "$Pfad" | cat - | xargs "$@"
  fi
}
git diff --name-only --cached --relative | grep '\.jsx\?$' | sed 's/[^[:alnum:]]/\\&/g' | xargs-r -E '' -t standard
if [[ $? -ne 0 ]]]; then
  echo 'JavaScript Standard Style Fehler wurden entdeckt. Abbruch der Übertragung.'
  exit 1
fi
```

### Einen `pre-commit`-Haken verwenden

Die [pre-commit](https://pre-commit.com/)-Bibliothek ermöglicht es, Hooks in einer `.pre-commit-config.yaml`-Konfigurationsdatei im Repo zu deklarieren und somit einfacher in einem Team zu pflegen.

Benutzer von pre-commit können einfach `standard` zu ihrer `.pre-commit-config.yaml` Datei hinzufügen, was automatisch `.js`, `.jsx`, `.mjs` und `.cjs` Dateien fixiert:
`yaml`
  - Repository: https://github.com/standard/standard
    rev: master
    hooks:
      - id: standard
```

Alternativ können Sie für fortgeschrittene Styling-Konfigurationen `standard` innerhalb des [eslint-Hooks](https://github.com/pre-commit/mirrors-eslint) verwenden:
```yaml
  - Repository: https://github.com/pre-commit/mirrors-eslint
    rev: master
    hooks:
      - id: eslint
        Dateien: \.[jt]sx?$ # *.js, *.jsx, *.ts und *.tsx
        Typen: [Datei]
        additional_dependencies:
          - eslint@latest
          - eslint-konfig-standard@latest
          # und alle anderen Plugins...
```

## Wie kann ich die Ausgabe bunt und hübsch gestalten?

Die eingebaute Ausgabe ist einfach und geradlinig, aber wenn Sie glänzende Dinge mögen,
installieren Sie [snazzy](https://www.npmjs.com/package/snazzy):

```bash
$ npm install snazzy
```

Und ausführen:

```bash
$ standard | snazzy
```

Es gibt auch [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), und
[standard-summary](https://www.npmjs.com/package/standard-summary).

## Gibt es eine Node.js-API?

Ja!

### `async standard.lintText(text, [opts])`

Lintet den angegebenen Quelltext. Ein "opts"-Objekt kann angegeben werden:

``js
{
  // eindeutig für lintText
  filename: '', // Pfad der Datei, die den zu färbenden Text enthält

  // gemeinsam für lintText und lintFiles
  cwd: '', // aktuelles Arbeitsverzeichnis (Standard: process.cwd())
  fix: false, // Probleme automatisch beheben
  extensions: [], // Dateierweiterungen für lint (hat vernünftige Standardwerte)
  globals: [], // benutzerdefinierte globale Variablen zum Deklarieren
  plugins: [], // benutzerdefinierte eslint-Plugins
  envs: [], // benutzerdefinierte eslint-Umgebung
  parser: '', // benutzerdefinierter js-Parser (z.B. babel-eslint)
  usePackageJson: true, // Optionen aus der nächsten package.json verwenden?
  useGitIgnore: true, // Datei-Ignore-Muster aus .gitignore verwenden?
}
```

Alle Optionen sind optional, obwohl einige ESLint-Plugins die Option "filename" erfordern.

Zusätzliche Optionen können aus einer `package.json` geladen werden, wenn diese für das aktuelle Arbeitsverzeichnis gefunden wird. Siehe unten für weitere Details.

Gibt ein `Promise` zurück, das die `Results` auflöst oder mit einem `Error` zurückgewiesen wird.

Das `Results`-Objekt enthält die folgenden Eigenschaften:

``js
const results = {
  Ergebnisse: [
    {
      filePath: '',
      messages: [
        { ruleId: '', message: '', Zeile: 0, Spalte: 0 }
      ],
      errorCount: 0,
      warningCount: 0,
      output: '' // korrigierter Quellcode (nur mit der Option {fix: true} vorhanden)
    }
  ],
  errorCount: 0,
  warningCount: 0
}
```

### `async standard.lintFiles(files, [opts])`

Lintet die angegebenen `Dateien` Globs. Ein "opts"-Objekt kann angegeben werden:

``js
{
  // einzigartig für lintFiles
  ignore: [], // zu ignorierende Datei-Globs (hat vernünftige Standardwerte)

  // gemeinsam für lintText und lintFiles
  cwd: '', // aktuelles Arbeitsverzeichnis (Standard: process.cwd())
  fix: false, // Probleme automatisch beheben
  extensions: [], // Dateierweiterungen für lint (hat vernünftige Standardwerte)
  globals: [], // benutzerdefinierte globale Variablen zum Deklarieren
  plugins: [], // benutzerdefinierte eslint-Plugins
  envs: [], // benutzerdefinierte eslint-Umgebung
  parser: '', // benutzerdefinierter js-Parser (z.B. babel-eslint)
  usePackageJson: true, // Optionen aus der nächsten package.json verwenden?
  useGitIgnore: true, // Datei-Ignore-Muster aus .gitignore verwenden?
}
```

Zusätzliche Optionen können aus einer `package.json` geladen werden, wenn diese für das aktuelle Arbeitsverzeichnis gefunden wird. Siehe unten für weitere Details.

Sowohl `ignore` als auch `files` Muster werden relativ zum aktuellen Arbeitsverzeichnis aufgelöst.

Gibt ein `Promise` zurück, das die `results` auflöst oder mit einem `Error` zurückgewiesen wird (wie oben).

## Wie kann ich zu StandardJS beitragen?

Beiträge sind willkommen! Sehen Sie sich die [issues] (https://github.com/standard/standard/issues) oder die [PRs] (https://github.com/standard/standard/pulls) an, und machen Sie Ihre eigenen, wenn Sie etwas wollen, das Sie dort nicht sehen.

Wollen Sie sich unterhalten? Schließe dich den Mitwirkenden im IRC im `#standard`-Kanal auf freenode an.

Hier sind einige wichtige Pakete aus dem `Standard`-Ökosystem:

- **[standard](https://github.com/standard/standard)** - dieses Repo
  - **[standard-engine](https://github.com/standard/standard-engine)** - cli-Engine für beliebige eslint-Regeln
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** - eslint-Regeln für Standard
  - **[eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)** - eslint-Regeln für Standard (JSX)
  - **[eslint](https://github.com/eslint/eslint)** - der Linter, der Standard unterstützt
- **[snazzy](https://github.com/standard/snazzy)** - hübsche Terminalausgabe für Standard
- **[standard-www](https://github.com/standard/standard-www)** - Code für https://standardjs.com
- **[semistandard](https://github.com/standard/semistandard)** - Standard, mit Semikolons (wenn Sie müssen)
- **[standardx](https://github.com/standard/standardx)** - standard, mit eigenen Anpassungen

Es gibt auch viele **[Editor-Plugins](#are-there-text-editor-plugins)**, eine Liste von
**[npm-Pakete, die `standard` verwenden](https://github.com/standard/standard-packages)**,
und eine fantastische Liste von
**[Pakete im `standard`-Ökosystem](https://github.com/standard/awesome-standard)**.

## Sicherheitsrichtlinien und -verfahren

Das `Standard`-Team und die Community nehmen alle Sicherheitsprobleme in `Standard` ernst. Bitte lesen Sie unser Dokument [Sicherheitsrichtlinien und -verfahren](https://github.com/standard/.github/blob/master/SECURITY.md), um zu erfahren, wie Sie Probleme melden können.

## Lizenz

[MIT](LIZENZ). Copyright (c) [Feross Aboukhadijeh](https://feross.org).
