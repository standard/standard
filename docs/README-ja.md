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

<p align="center">
  <a href="/docs/README-en.md">English</a> •
  <a href="/docs/README-esla.md">Español (Latinoamérica)</a> •
  <a href="/docs/README-fr.md">Français</a> •
  <a href="/docs/README-iteu.md">Italiano (Italian)</a> •
  <a href="/docs/README-ja.md">日本語 (Japanese)</a> •
  <a href="/docs/README-kokr.md">한국어 (Korean)</a> •
  <a href="/docs/README-ptbr.md">Português (Brasil)</a> •
  <a href="/docs/README-zhcn.md">简体中文 (Simplified Chinese)</a> •
  <a href="/docs/README-zhtw.md">繁體中文 (Taiwanese Mandarin)</a>
</p>

## JavaScript スタイルガイド、リンター、フォーマッター

このモジュールは、3つの方法であなたの（そして他の人の！）時間を節約します。：

- **設定不要** プロジェクトに一貫性のあるスタイルを適用する最も簡単な方法です。単に入れるだけ！
- **コードを自動的にフォーマット** ただ`standard --fix`を実行するだけで、汚いコードや一貫性のないコードにサヨナラしましょう。
- **スタイルの問題やプログラマーのエラーを早期にキャッチ** レビュアーと作業者の間の往復をなくすことで、貴重なコードレビューの時間を節約します。

導入するために考えなければならないことも、管理するための`.eslintrc`、`.jshintrc`、`.jscsrc`ファイルも必要ありません。ただこれだけで動作します。

インストール方法：

```
npm install standard --save-dev
```

### オープンソースサポーター

<a href="https://tidelift.com/subscription/pkg/npm-standard?utm_source=npm-standard&utm_medium=readme" target='_blank'><img src='https://feross.org/images/supporters/tidelift.png' width=250></a>

[Become a supporter!](https://feross.org/thanks/)

## StandardJS — ルール

- **2スペース** – インデントのため
- **文字列にはシングルクォート** – エスケープを避ける場合を除く
- **未使用の変数なし** – 多くのバグをキャッチ！
- **セミコロンなし** – [It's][1] [fine.][2] [Really!][3] (訳注: 試してみなって！マジで良いぞ！)
  - [詳細][4]
- **キーワードの後にスペース** `if (condition) { ... }`
- **関数名の後にスペース** `function name (arg) { ... }`
- 常に`==`ではなく`===`を使用 – ただし`obj == null`は`null || undefined`をチェックするために許容されています
- 常にnode.jsの`err`引数をハンドル
- ファイルの先頭に`/* global */`コメントでブラウザのグローバルオブジェクトを宣言
  - `open`、`length`、`event`、`name`のようなあいまいな名前のグローバルオブジェクトの誤用を防ぎます
  - 例： `/* global alert, prompt */`
  - 例外： `window`、`document`、`navigator`
- **そして[もっと良いこと色々][5]** – *`standard`を今すぐ試そう！*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES-ja.md#semicolons
[5]: RULES-ja.md#javascript-standard-style

より良いアイデアを得るには、JavaScript Standard Styleで書かれた[サンプルファイル](https://github.com/expressjs/body-parser/blob/master/index.js)を見てみましょう。
または、`standard`を使用している[何千ものプロジェクト](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)を参照してください！

## 目次

- クイックスタート
  - [インストール](#install)
  - [使い方](#usage)
  - [賢いあなたがすべきこと](#what-you-might-do-if-youre-clever)
- FAQ
  - [なぜJavaScript Standard Styleを使うべきなのですか？](#why-should-i-use-javascript-standard-style)
  - [誰がJavaScript Standard Styleを使用していますか？](#who-uses-javascript-standard-style)
  - [テキストエディタのプラグインはありますか？](#are-there-text-editor-plugins)
  - [readme用のバッジはありますか？](#is-there-a-readme-badge)
  - [私はあるルールに反対なのですが、変更してもらえますか？](#i-disagree-with-rule-x-can-you-change-it)
  - [でもこれは本当のウェブ標準ではありません！](#but-this-isnt-a-real-web-standard)
  - [自動フォーマッターはありますか？](#is-there-an-automatic-formatter)
  - [ファイルを無視するには？](#how-do-i-ignore-files)
  - [特定の警告を非表示にするには？](#how-do-i-hide-a-certain-warning)
  - [私はグローバル名前空間を汚染するライブラリを使用しています。"variable is not defined"というエラーを防ぐには？](#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors)
  - [実験的なJavaScriptの機能（ES Next）を使用するには？](#how-do-i-use-experimental-javascript-es-next-features)
  - [FlowやTypeScriptのようなJavaScriptの代替言語を使用できますか？](#can-i-use-a-javascript-language-variant-like-flow-or-typescript)
  - [Mocha、Jest、Jasmine、QUnitなどはどうすれば？](#what-about-mocha-jest-jasmine-qunit-etc)
  - [Web WorkersとService Workersはどうすれば？](#what-about-web-workers-and-service-workers)
  - [MarkdownやHTMLファイル内のコードをチェックできますか？](#can-i-check-code-inside-of-markdown-or-html-files)
  - [Gitの`pre-commit`フックはありますか？](#is-there-a-git-pre-commit-hook)
  - [出力をすべてカラフルで綺麗にするには？](#how-do-i-make-the-output-all-colorful-and-pretty)
  - [Node.jsのAPIはありますか？](#is-there-a-nodejs-api)
  - [StandardJSにコントリビュートするには？](#how-do-i-contribute-to-standardjs)
- [ライセンス](#license)

<h2 id="install">インストール</h2>

JavaScript Standard Styleを使用する最も簡単な方法は、Nodeのコマンドラインプログラムとしてグローバルインストールすることです。ターミナルで次のコマンドを実行してください。：

```bash
$ npm install standard --global
```

または、`standard`を一つのプロジェクトで使うためにローカルインストールできます。：

```bash
$ npm install standard --save-dev
```

*注：上記のコマンドを実行するには、[Node.js](http://nodejs.org)と[npm](https://npmjs.com)がインストールされている必要があります。*

<h2 id="usage">使い方</h2>

`standard`をインストールしたら、`standard`プログラムが使用できるはずです。最もシンプルな使用例は、現在の作業ディレクトリ内のすべてのJavaScriptファイルのスタイルをチェックすることです。：

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

`standard`をローカルにインストールした場合は、かわりに`npx`で実行します。:

```bash
$ npx standard
```

globパターンを用いてディレクトリを渡すこともできます。globパターンを含むパスは、シェルではなく`standard`で展開されるようにクォートで囲んでください。：

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**注：** デフォルトでは、`standard`は次のパターンに一致するすべてのファイルを探索します。：`**/*.js`、`**/*.jsx`

<h2 id="#what-you-might-do-if-youre-clever">賢いあなたがすべきこと</h2>

1. 以下を`package.json`に追加します

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

2. スタイルは`npm test`を実行する際に自動的にチェックされます

  ```bash
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. もう二度とプルリクエストでスタイルのフィードバックをさせないでください！

<h2 id="why-should-i-use-javascript-standard-style">なぜJavaScript Standard Styleを使うべきなのですか？</h2>

JavaScript Standard Styleの美しさは、シンプルなことです。作業しているすべてのモジュール/プロジェクトのために、数百行のスタイル設定ファイルをいくつも管理したい人はいません。こんな狂気はもうたくさんです！

このモジュールは、3つの方法であなた（と他の人！）の時間をセーブします。：

- **設定なし** プロジェクトに一貫性のあるスタイルを適用する最も簡単な方法です。
- **コードを自動的にフォーマット** ただ`standard --fix`を実行し、汚いコードや一貫性のないコードにサヨナラしましょう。
- **スタイルの問題やプログラマーのエラーを早期にキャッチ** レビュアーと作業者の間の往復をなくすことで、貴重なコードレビューの時間をセーブします。

`standard`なスタイルを採用することは、個人のスタイルよりもコードの明確さやコミュニティの慣習を重要視することを意味します。これはプロジェクトと開発文化にとって100%意義があるわけではありませんが、オープンソースは初学者には適さない場所になりえます。コントリビューターの期待を明確にすることで、プロジェクトがより健全な状態になります。

より詳しくは、["Write Perfect Code with Standard and
ESLint"](https://www.youtube.com/watch?v=kuHfMw8j4xk)をご覧ください。このトークでは、リントについて、`standard`と`eslint`の使い分けについて、そして`prettier`との比較について学ぶことができます。

<h2 id="#who-uses-javascript-standard-style">誰がJavaScript Standard Styleを使用していますか？</h2>

多くの人々！

[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodejs.png>](https://nodejs.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/npm.png>](https://www.npmjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/github.png>](https://github.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/elastic.png>](https://www.elastic.co) |
|---|---|---|---|

[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/express.png>](http://expressjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/electron.png>](http://electron.atom.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nuxtjs.png>](https://nuxtjs.org/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/atom.png>](https://atom.io) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/brave.png>](https://www.brave.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zeit.png>](https://zeit.co) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nearform.png>](http://www.nearform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/typeform.png>](https://www.typeform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
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

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/flowsent.png>](https://www.flowsent.com) | Your logo here | Your logo here | Your logo here
|---|---|---|---|

企業に加えて、多くのコミュニティメンバーがここに載せるには[多すぎる](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)パッケージで`standard`を使用しています。

`standard`は、GitHubの[Clean Code Linter](https://github.com/showcases/clean-code-linters)において最もスターの多いリンターでもあります。

<h2 id="are-there-text-editor-plugins">テキストエディタのプラグインはありますか？</h2>

まず、`standard`をインストールしてください。それから、あなたのエディタに適したプラグインをインストールしてください。

### Sublime Text

**[Package Control][sublime-1]** を用いて、 **[SublimeLinter][sublime-2]** と **[SublimeLinter-contrib-standard][sublime-3]** をインストールしてください。

保存時に自動でフォーマットするには、 **[StandardFormat][sublime-4]** をインストールしてください。

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

**[linter-js-standard][atom-1]** をインストールしてください。

あるいは、 **[linter-js-standard-engine][atom-4]** をインストールしてもよいでしょう。バンドルされた`standard`のバージョンではなく、プロジェクトにインストールされているバージョンが自動的に使用されます。 また、 **[standard-engine][atom-5]** を元にした他のリンターでも動作します。

自動フォーマットには、 **[standard-formatter][atom-2]** をインストールしてください。スニペットには、 **[standardjs-snippets][atom-3]** をインストールしてください。

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets
[atom-4]: https://atom.io/packages/linter-js-standard-engine
[atom-5]: https://github.com/Flet/standard-engine

### Visual Studio Code

**[vscode-standardjs][vscode-1]** をインストールしてください（自動フォーマットもサポートしています）。

JavaScriptのスニペットには、 **[vscode-standardjs-snippets][vscode-2]** をインストールしてください。Reactのスニペットには、 **[vscode-react-standard][vscode-3]** をインストールしてください。

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

### Vim

**[ale][vim-1]** をインストールしてください。そして、次の行を`.vimrc`ファイルに追加してください。

```vim
let g:ale_linters = {
\   'javascript': ['standard'],
\}
let g:ale_fixers = {'javascript': ['standard']}
```

これは、standardをJavaScriptファイルのための唯一のリンターとして設定し、eslintとの競合を防ぎます。保存時に自動でリントと修正を行なうには、次の行を`.vimrc`に追加してください。：

```vim
let g:ale_lint_on_save = 1
let g:ale_fix_on_save = 1
```


考慮すべき他のプラグインには[neomake][vim-2]や[syntastic][vim-3]があり、いずれも`standard`のビルトインサポートを備えています（設定が必要かもしれませんが）。

[vim-1]: https://github.com/w0rp/ale
[vim-2]: https://github.com/neomake/neomake
[vim-3]: https://github.com/vim-syntastic/syntastic

### Emacs

**[Flycheck][emacs-1]** をインストールし、プロジェクトで有効にする方法については **[マニュアル][emacs-2]** を参照してください。

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

extension registryで **["Standard Code Style"][brackets-1]** を検索し、"Install"をクリックしてください。

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm（PhpStorm、IntelliJ、RubyMine、JetBrainsなど）

WebStormでは、IDEで`standard`が[ネイティブサポートされるようになりました。](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)

`standard`を手動で設定したい場合、[こちらのガイド][webstorm-1]に従ってください。これは、PhpStorm、IntelliJ、RubyMineなど、すべてのJetBrains製品に適用されます。

[webstorm-1]: docs/webstorm.md

<h2 id="is-there-a-readme-badge">readme用のバッジはありますか？</h2>

はい！プロジェクトで`standard`を使っているなら、コードがstandardスタイルを使用していることを示すためにこれらのバッジをreadmeに含めることができます。

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```md
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
```

<h2 id="i-disagree-with-rule-x-can-you-change-it">私はあるルールに反対なのですが、変更してもらえますか？</h2>

いいえ。`standard`のすべては、スタイルについての[bikeshedding][bikeshedding]（自転車置き場の議論）を避けることであなたの時間をセーブするためにあります。タブ対スペースについてのような議論はオンライン上にたくさんありますが、決して結論は出ません。これらの議論はただ物事を終わらせることから目を逸らさせるだけです。結局のところ、あなたは何かを選ばなければばなりません。これは、`standard`の哲学のすべてです。うまくいけば、ユーザーは自身の意見を守るうえでその価値に気づくでしょう。

`standard`を完全には受け入れたくない人のために、似たようなパッケージが2つあります:
- [semistandard](https://github.com/Flet/semistandard) - セミコロンありのstandard
- [standardx](https://github.com/standard/standardx) - カスタマイズ可能なstandard

本当に何百ものESLintのルールを個別に設定したいなら、ルールを上書きするために[eslint-config-standard](https://github.com/standard/eslint-config-standard)で`eslint`を直接使うことができます。[`standard-eject`](https://github.com/josephfrazier/standard-eject)は、`standard`から`eslint`と`eslint-config-standard`への移行を支援します。

Pro tip: ただ`standard`を使っていってください。時間をかけて解決すべき現実の問題があるでしょう！ :P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

<h2 id="but-this-isnt-a-real-web-standard">でもこれは本当のウェブ標準ではありません！</h2>

もちろん違います！ここに記載されたルールはいかなるウェブ標準グループにも属していません。これは、このリポジトリが`standard/standard`であり、、`ECMA/standard`ではないゆえんです。

"standard"という言葉には、単なる"ウェブ標準"よりも多くの意味があります。 :-) たとえば：

- このモジュールは、コードを高い*品質基準*に保つのに役立ちます。
- このモジュールは、新たなコントリビューターがいくつかの基本的な*スタイル基準*に従うことを保証します。

<h2 id="is-there-an-automatic-formatter">自動フォーマッターはありますか？</h2>

はい！ ほとんどの問題を自動的に修正するために、`standard --fix`が使えます。

`standard --fix`は、最大限の利便性のために`standard`にビルトインされています。ほとんどの問題は修正可能ですが、いくつかのエラー（エラーのハンドルし忘れなど）は手動で修正する必要があります。

時間をセーブするために、`standard`は自動的に修正可能な問題を検出すると"`Run standard --fix to automatically fix some problems`"というメッセージを出力します。

<h2 id="how-do-i-ignore-files">ファイルを無視するには？</h2>

特定のパス（`node_modules/`、`coverage/`、`vendor/`、`*.min.js`、`bundle.js`、`.git/`のようなドットファイル）は自動的に無視されます。

プロジェクトルートの`.gitignore`ファイルに記載されているパスも自動的に無視されます。

ときには、追加のフォルダや特定の縮小ファイルを無視する必要があるでしょう。そのためには、`package.json`に`standard.ignore`プロパティを追加してください。：

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

<h2 id="how-do-i-hide-a-certain-warning">特定の警告を非表示にするには？</h2>

まれにルールを破り、`standard`によって生成された警告を非表示にする必要があるでしょう。

JavaScript Standard Styleは内部で[ESLint](http://eslint.org/)を使用していますが、ESLintを直接使用した場合、通常どおり警告を非表示にすることができます。

（無視するルール名を見つけるために）詳細な出力を得るには：

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

特定の行の **すべてのルール** を無効にするには：

```js
file = 'I know what I am doing' // eslint-disable-line
```

あるいは、`"no-use-before-define"`ルール **のみ** を無効にするには：

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

あるいは、 **複数行** の`"no-use-before-define"`ルールを無効にするには：

```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

<h2 id="i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors">私はグローバル名前空間を汚染するライブラリを使用しています。"variable is not defined"というエラーを防ぐには？</h2>

一部のパッケージ（例：`mocha`）は、関数（例：`describe`、`it`）をグローバルオブジェクトに配置します。これらの関数は定義されていないか、どこかで`require`されているため、`standard`は未定義の変数を使用していることを警告します（通常、このルールはタイプミスを検知するのに本当に役立ちます！）。しかし、これらのグローバル変数に対しては無効にしたいでしょう。

特定の変数がグローバルに存在することを（コードを読んでいる人だけでなく）`standard`に知らせるには、次のコメントをファイルの先頭に追加します。：

```js
/* global myVar1, myVar2 */
```

何百ものファイルがある場合、すべてのファイルにコメントを追加しないほうが望ましいでしょう。次のコマンドを実行してください。：

```bash
$ standard --global myVar1 --global myVar2
```

あるいは、次の内容を`package.json`に追加してください。：

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

*注： `global`と`globals`は同じです。*

<h2 id="how-do-i-use-experimental-javascript-es-next-features">実験的なJavaScriptの機能（ES Next）を使用するには？</h2>

`standard`は、最新のECMAScriptの機能、プロポーザルプロセスの「ステージ4」にある言語機能の提案を含むES8（ES2017）をサポートしています。

実験的な言語機能をサポートするため、`standard`はJavaScriptのカスタムパーサーを指定することができます。カスタムパーサーを使用する前に、複雑さに見合う価値があるかどうかをよく考えてください。

カスタムパーサーを使用するには、まずnpmから以下をインストールしてください。：

```bash
npm install babel-eslint --save-dev
```

そして、次のコマンドを実行します。：

```bash
$ standard --parser babel-eslint
```

あるいは、次の内容を`package.json`に追加してください。：

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

もし`standard`がグローバルインストールされている場合（つまり`npm install standard --global`）、`npm install babel-eslint --global`で`babel-eslint`もグローバルインストールしてください。

<h2 id="can-i-use-a-javascript-language-variant-like-flow-or-typescript">FlowやTypeScriptのようなJavaScriptの代替言語を使用できますか？</h2>

`standard`は最新のECMAScriptの機能をサポートしています。しかしながら、FlowやTypeScriptは言語に新たな構文を追加するため、そのまま使用することはできません。

JavaScriptの代替言語をサポートするため、`standard`は変更された構文をハンドルするためのESLintプラグインはもちろん、JavaScriptのカスタムパーサーの指定をサポートしています。JavaScriptの代替言語を使う前に、複雑さに見合う価値があるかどうかをよく考えてください。

### Flow

Flowを使用するには、`babel-eslint`をパーサとして、`eslint-plugin-flowtype`をプラグインとして`standard`を実行する必要があります。

```bash
npm install babel-eslint eslint-plugin-flowtype --save-dev
```

そして、次のコマンドを実行します。：

```bash
$ standard --parser babel-eslint --plugin flowtype
```

あるいは、次の内容を`package.json`に追加してください。：

```json
{
  "standard": {
    "parser": "babel-eslint",
    "plugins": [ "flowtype" ]
  }
}
```

*注： `plugin`と`plugins`は同じです。*

もし`standard`がグローバルインストールされている場合（つまり`npm install standard --global`）、`npm install babel-eslint eslint-plugin-flowtype --global`で`babel-eslint`と`eslint-plugin-flowtype`もグローバルインストールしてください。

### TypeScript

TypeScriptを使用するには、`@typescript-eslint/parser`をパーサとして、`eslint-plugin-typescript`をプラグインとして`standard`を実行し、`*.ts`ファイルをリントするようにstandardに伝える必要があります（デフォルトではリントされないため）。

```bash
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

そして、次のコマンドを実行します。：

```bash
$ standard --parser @typescript-eslint/parser --plugin @typescript-eslint/eslint-plugin *.ts
```

あるいは、次の内容を`package.json`に追加してください。：

```json
{
  "standard": {
    "parser": "@typescript-eslint/parser",
    "plugins": [ "@typescript-eslint/eslint-plugin" ]
  }
}
```

`package.json`にこれを追加すると、次のコマンドが実行できます。：

```bash
standard *.ts
```

もし`standard`がグローバルインストールされている場合（つまり`npm install standard --global`）、`npm install @typescript-eslint/parser eslint-plugin-typescript --global`で`@typescript-eslint/parser`と`eslint-plugin-typescript`もグローバルインストールしてください。

<h2 id="what-about-mocha-jest-jasmine-qunit-etc">Mocha、Jest、Jasmine、QUnitなどはどうすれば？</h2>

テストファイルでmochaをサポートするには、次のコメントをテストファイルの先頭に追加します。：

```js
/* eslint-env mocha */
```

あるいは、次のコマンドを実行してください。：

```bash
$ standard --env mocha
```

`mocha`は`jest`、`jasmine`、`qunit`、`phantomjs`などのいずれかになります。完全なリストを見るには、ESLintの[specifying environments](http://eslint.org/docs/user-guide/configuring.html#specifying-environments)を参照してください。これらの環境で使用可能なグローバルオブジェクトのリストについては、[globals](https://github.com/sindresorhus/globals/blob/master/globals.json)のnpm moduleを参照してください。

*注： `env`と`envs`は同じです。*

<h2 id="what-about-web-workers-and-service-workers">Web WorkersとService Workersはどうすれば？</h2>

次のコメントをweb workerファイルの先頭に追加してください。：

```js
/* eslint-env worker */
```

これにより、`self`がweb workerのコードでグローバルであることを（コードを読んでいる人だけでなく）`standard`に知らせます。

Service workersには、かわりに次のコメントを追加してください。：

```js
/* eslint-env serviceworker */
```

<h2 id="can-i-check-code-inside-of-markdown-or-html-files">MarkdownやHTMLファイル内のコードをチェックできますか？</h2>

Markdownファイル内のコードをチェックするには、[`standard-markdown`](https://www.npmjs.com/package/standard-markdown)を使用してください。

あるいは、MarkdownやHTML、その他多くの言語ファイル内のコードをチェックできるESLintプラグインがあります。

Markdownファイル内のコードをチェックするには、次のESlintプラグインを使用してください。：

```bash
$ npm install eslint-plugin-markdown
```

そして、コードブロック内のJavaScriptをチェックするために次のコマンドを実行します。：

```bash
$ standard --plugin markdown '**/*.md'
```

HTMLファイル内のコードをチェックするには、次のESlintプラグインを使用してください。：

```bash
$ npm install eslint-plugin-html
```

そして、`<script>`タグ内のJavaScriptをチェックするために次のコマンドを実行します。：

```bash
$ standard --plugin html '**/*.html'
```

<h2 id="is-there-a-git-pre-commit-hook">Gitの<code>pre-commit</code>フックはありますか？</h2>

```bash
#!/bin/bash

# Ensure all JavaScript files staged for commit pass standard code style
function xargs-r() {
  # Portable version of "xargs -r". The -r flag is a GNU extension that
  # prevents xargs from running if there are no input files.
  if IFS= read -r -d $'\n' path; then
    { echo "$path"; cat; } | xargs $@
  fi
}
git diff --name-only --cached --relative | grep '\.jsx\?$' | sed 's/[^[:alnum:]]/\\&/g' | xargs-r -E '' -t standard
if [[ $? -ne 0 ]]; then
  echo 'JavaScript Standard Style errors were detected. Aborting commit.'
  exit 1
fi
```

<h2 id="how-do-i-make-the-output-all-colorful-and-pretty">出力をすべてカラフルで綺麗にするには？</h2>

ビルトインの出力はシンプルで簡単ですが、きらきらしたものが好きなら[snazzy](https://www.npmjs.com/package/snazzy)をインストールしてください。

```bash
$ npm install snazzy
```

そして、次のコマンドを実行します。：

```bash
$ standard --verbose | snazzy
```

[standard-tap](https://www.npmjs.com/package/standard-tap)、[standard-json](https://www.npmjs.com/package/standard-json)、[standard-reporter](https://www.npmjs.com/package/standard-reporter)、[standard-summary](https://www.npmjs.com/package/standard-summary)もあります。

<h2 id="is-there-a-nodejs-api">Node.jsのAPIはありますか？</h2>

はい！

### `standard.lintText(text, [opts], callback)`

渡された`text`をリントします。`opts`オブジェクトを指定できます。：

```js
{
  cwd: '',      // current working directory (default: process.cwd())
  filename: '', // path of the file containing the text being linted (optional, though some eslint plugins require it)
  fix: false,   // automatically fix problems
  globals: [],  // custom global variables to declare
  plugins: [],  // custom eslint plugins
  envs: [],     // custom eslint environment
  parser: ''    // custom js parser (e.g. babel-eslint)
}
```

現在の作業ディレクトリ内に`package.json`があれば、追加のオプションが読み込まれます。

`callback`は、`Error`オブジェクトと`results`オブジェクトを引数として実行されます。

`results`オブジェクトは、次のプロパティを含みます。：

```js
var results = {
  results: [
    {
      filePath: '',
      messages: [
        { ruleId: '', message: '', line: 0, column: 0 }
      ],
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

`standard.lintText()`の同期バージョンです。エラーが発生すると、例外がスローされます。それ以外の場合は、`results`オブジェクトが返されます。

### `standard.lintFiles(files, [opts], callback)`

渡された`files`をリントします。`opts`オブジェクトを指定できます。：

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

`callback`は、`Error`オブジェクトと`results`オブジェクトを引数として実行されます（上記と同じ）。

<h2 id="how-do-i-contribute-to-standardjs">StandardJSにコントリビュートするには？</h2>

コントリビューションは歓迎されます！[Issues](https://github.com/standard/standard/issues)や[Pull Requests](https://github.com/standard/standard/pulls)をチェックし、望みのものがなければ作成してください。

チャットしたい？それなら、freenodeの`#standard`チャンネルでIRCに参加してください。

`standard`のエコシステムには、いくつかの重要なパッケージがあります：

- **[standard](https://github.com/standard/standard)** - このリポジトリ
  - **[standard-engine](https://github.com/flet/standard-engine)** - 任意のESLintルールのCLIエンジン
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** - standardのESLintルール
  - **[eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)** - standardのESLintルール（JSX）
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - standardのカスタムESlintルール（ESLintのコアの一部ではない）
  - **[eslint](https://github.com/eslint/eslint)** - standardを動作させるリンター
- **[snazzy](https://github.com/standard/snazzy)** - standardのきれいなターミナル出力
- **[standard-www](https://github.com/standard/standard-www)** - https://standardjs.com のコード
- **[semistandard](https://github.com/Flet/semistandard)** - セミコロンありのstandard（必要ならば）
- **[standardx](https://github.com/standard/standardx)** - カスタマイズ可能なstandard

多くの **[エディタープラグイン](#are-there-text-editor-plugins)** 、 **[`standard`を使用しているnpmパッケージ](https://github.com/standard/standard-packages)** のリスト、 **[`standard`のエコシステムのパッケージ](https://github.com/standard/awesome-standard)** の素晴らしいリストもあります。

<h2 id="license">ライセンス</h2>

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](https://feross.org).
