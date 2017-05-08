<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/feross/standard"><img src="https://img.shields.io/travis/feross/standard/master.svg" alt="travis"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/eslint-config-standard"><img src="https://img.shields.io/npm/dm/eslint-config-standard.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<h4 align="center">One JavaScript Style to Rule Them All</h4>

<p align="center">
  Translations:
  <a href="docs/README-ptbr.md">Português</a>,
  <a href="docs/README-esla.md">Spanish</a>,
  <a href="docs/README-zhtw.md">繁體中文</a>,
  <a href="docs/README-zhcn.md">简体中文</a>
  <a href="docs/README-kokr.md">한국어</a>
</p>

<br>

## 교정 & 자동 코드 수정을 도와주는 JavaScript 스타일 가이드

이 모듈은 다음과 같은 세 가지 방법으로 시간을 절약할 수 있습니다.

- **환경설정이 필요없습니다.** 프로젝트에서 일관된 스타일을 적용하는 가장 쉬운 방법입니다. 그냥 넣기만 하면 됩니다.
- **자동으로 코드 포멧을 맞춰줍니다.** `standard --fix`를 실행하면 지저분하거나 일관성없는 코드와 작별인사 할 수 있습니다.
- **스타일 이슈 및 프로그래머의 오류를 조기에 파악할 수 있습니다.** 리뷰어와 기여자 사이의 관계를 제거함으로써 귀중한 코드 리뷰 시간을 절약할 수 있습니다.

만드는 것의 대해 결정할 필요가 없습니다. `.eslintrc`, `.jshintrc`, `.jscsrc` 파일들을 관리할 필요가 없이 바로 가능합니다.


설치하는 방법입니다.

```
npm install standard --save-dev
```

## 규칙

- **2칸 공백을 사용합니다.** – 들여쓰기
- **문자열에 작은 따옴표를 사용합니다.** – 누락된 곳은 제외합니다.
- **사용되지 않는 변수가 없어야 합니다.** – 이 것은 대량의 버그를 초래하는 원인입니다.
- **세미콜론이 없어야 합니다.** – [It's][1] [fine.][2] [Really!][3]
- **`(`, `[`, or `` ` ``과 같이 라인을 시작하지 말아야 합니다.**
  - 세미콜론 생략시 반드시 문제가 생길 수 있습니다. – *자동으로 체크할 수 있도록 준비되어 있습니다.*
  - [More details][4]
- **키워드 뒤에 공백을 사용합니다.** `if (condition) { ... }`
- **함수명 뒤에 공백을 사용합니다.** `function name (arg) { ... }`
- 항상 `==` 대신 `===`을 사용합니다. - 단, `null || undefined`는 `obj == null`로 확인할 수 있습니다.
- node.js에서 err 파라미터는 항상 처리해야 합니다.
- 항상 브라우저 전역에 `window` 접두사를 붙입니다. - `document`와 `navigator`는 괜찮습니다.
  - `open`, `length`, `event`, `name` 등 불분명하게 브라우저 전역을 우연히 사용하는 것을 방지합니다.
- **[더 많은 장점][5]이 있습니다.** - *`standard`를 시도해보세요!*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES.md#semicolons
[5]: RULES.md#javascript-standard-style

더 나은 아이디어를 얻으려면 JavaScript Standard 스타일로 작성된 [샘플 파일](https://github.com/expressjs/body-parser/blob/master/index.js)을 살펴보십시오. 또는 `standard`을 사용하는 [수천 개의 프로젝트](https://raw.githubusercontent.com/feross/standard-packages/master/all.json) 중 하나를 확인하십시오!

## 목차

- 빠른 시작
  - [설치](#install)
  - [사용법](#usage)
  - [이해가 잘되면 다음을 수행합니다](#what-you-might-do-if-youre-clever)
- 질의응답
  - [왜 JavaScript Standard Style을 사용해야 할까요?](#why-should-i-use-javascript-standard-style)
  - [누가 JavaScript Standard Style을 사용하나요?](#who-uses-javascript-standard-style)
  - [텍스트 편집 플러그인이 있나요?](#are-there-text-editor-plugins)
  - [readme에 넣을 수 있는 뱃지로고가 있나요?](#is-there-a-readme-badge)
  - [나와는 룰이 맞지 않습니다. 변경 가능합니까?](#i-disagree-with-rule-x-can-you-change-it)
  - [그러나 이 것은 실제 웹표준이 아닙니다!](#but-this-isnt-a-real-web-standard)
  - [자동으로 포멧을 맞춰주는 것이 있나요?](#is-there-an-automatic-formatter)
  - [어떻게하면 파일들을 무시할 수 있나요?](#how-do-i-ignore-files)
  - [어떻게하면 경고를 숨길 수 있나요?](#how-do-i-hide-a-certain-warning)
  - [전역 namespace를 오염시키는 라이브러리를 사용합니다. "vaiable is not defined" 오류를 방지하려면 어떻게 해야 하나요?](#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors)
  - [실험용 JavaScript (ES Next) 기능은 어떻게 사용하나요?](#how-do-i-use-experimental-javascript-es-next-features)
  - [Flow와 같은 JavaScrpt 언어 변형을 사용할 수 있나요?](#can-i-use-a-javascript-language-variant-like-flow)
  - [Mocha, Jasmine, QUnit 등은 어떻습니까?](#what-about-mocha-jasmine-qunit-etc)
  - [Web Workes는 어떻습니까?](#what-about-web-workers)
  - [Markdown 또는 HTML 파일 내부의 코드를 확인할 수 있나요?](#can-i-check-code-inside-of-markdown-or-html-files)
  - [Git `pre-commit` hook이 있나요?](#is-there-a-git-pre-commit-hook)
  - [출력을 모두 화려하고 예쁘게 만드려면 어떻게 해야 하나요?](#how-do-i-make-the-output-all-colorful-and-pretty)
  - [Node.js API가 있나요?](#is-there-a-nodejs-api)
  - [`standard` 기여는 어떻게 하나요?](#how-do-i-contribute-to-standard)
- [라이선스](#license)

## 설치

JavaScript Standard Style을 사용하는 가장 쉬운 방법은 Node 명령 프로그램을 통해 전역으로 설치하는 것입니다. 터미널에서 다음 명령을 실행하세요.

```bash
$ npm install standard --global
```

또는 `standard`를 로컬에 설치하여 단일 프로젝트에서 사용할 수 있습니다.

```bash
$ npm install standard --save-dev
```

*메모: 위 명령을 실행하려면 [Node.js](http://nodejs.org)와 [npm](https://npmjs.com)이 설치되어 있어야 합니다.*

## 사용법

`standard`를 설치 한 후에 `standard` 프로그램을 사용할 수 있습니다. 가장 간단한 사용 사례는 현재 작업 디렉토리에있는 모든 JavaScript 파일의 스타일을 확인하는 것입니다.

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

You can optionally pass in a directory (or directories) using the glob pattern. Be
sure to quote paths containing glob patterns so that they are expanded by
`standard` instead of your shell:
glob 패턴을 사용하여 디렉토리(또는 디렉토리들)를 선택적으로 전달할 수 있습니다. glob 패턴을 포함하는 경로를 인용 부호로 묶어 쉘 대신에 `standard`에 의해 확장되도록 할 수 있습니다.

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**메모** 기본적으로`standard`는 `**/*.js`, `**/*.jsx` 패턴과 일치하는 모든 파일을 찾을 것입니다.

## 이해가 잘되면 다음을 수행합니다

1. `package.json`에 다음코드를 추가합니다.

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

2. `npm test`를 실행할 때 자동으로 스타일을 검사합니다.

  ```bash
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. style 의견의 대해 절대로 풀 리퀘스트를 요청하지 마세요.

## 왜 JavaScript Standard Style을 사용해야 할까요?

JavaScript Standard Style의 장점은 간단하다는 것입니다. 어느누구도 작업하는 모든 모듈/프로젝트에 대해 수백 줄 style의 구성 파일을 유지하려고하지 않습니다. 더 이상 바보같은 짓은 그만하세요.

이 모듈은 세가지의 방법으로 당신(또는 주변사람들)의 시간을 절약할 수 있습니다.

- **환경설정이 필요없습니다.** 프로젝트에서 일관된 스타일을 적용하는 가장 쉬운 방법입니다. 그냥 넣기만 하면 됩니다.
- **자동으로 코드 포멧을 맞춰줍니다.** `standard --fix`를 실행하면 지저분하거나 일관성없는 코드와 작별인사 할 수 있습니다.
- **스타일 이슈 및 프로그래머의 오류를 조기에 파악할 수 있습니다.** 리뷰어와 기여자 사이의 관계를 제거함으로써 귀중한 코드 리뷰 시간을 절약할 수 있습니다.

`standard` 스타일을 채택한다는 것은 개인적 스타일보다 코드 명확성과 커뮤니티 협업의 중요성을 우선으로 하는 것을 의미합니다. 이것은 프로젝트와 개발문화에 100% 타당하지 않을 수도 있지만, 오픈소스는 초보자들에게 적대적인 장소가 될 수 있습니다. 명확하고 자동화된 기여를 기대할수록 프로젝트가 더욱 건강해 집니다.

## 누가 JavaScript Standard Style을 사용하나요?

주변에 많은 사람들!

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/npm.png>](https://www.npmjs.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/github.png>](https://github.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/opbeat.png>](https://opbeat.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/nearform.png>](http://www.nearform.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/brave.png>](https://www.brave.com) |
|---|---|---|---|---|

| [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/zeit.png>](https://zeit.co) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/typeform.jpg>](https://www.typeform.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/express.png>](http://expressjs.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/webtorrent.png>](https://webtorrent.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/ipfs.png>](https://ipfs.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/dat.png>](https://datproject.org) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/bitcoinjs.png>](https://bitcoinjs.org) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/atom.png>](https://atom.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/electron.png>](http://electron.atom.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/voltra.png>](https://voltra.co) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/treasuredata.png>](https://www.treasuredata.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/clevertech.png>](https://clevertech.biz) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/studynotes.jpg>](https://www.apstudynotes.org) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/optiopay.png>](https://www.optiopay.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/jaguar-landrover.png>](https://www.jlrtechincubator.com/jlrti/) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/bustle.jpg>](https://www.bustle.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/zentrick.png>](https://www.zentrick.com) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/greenkeeper.png>](https://greenkeeper.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/karma.png>](https://karma-runner.github.io) | [<img width=150 src=https://cdn.rawgit.com/feross/standard/master/docs/logos/taser.png>](https://www.taser.com) |
|---|---|---|---|

회사 이외에 많은 커뮤니티 회원은 여기에 나열하기에는 [너무 많은](https://raw.githubusercontent.com/feross/standard-packages/master/all.json) 패키지들이 `standard`를 사용합니다.

또한 GitHub의 [Clean Code Linter](https://github.com/showcases/clean-code-linters) 쇼케이스에서도 볼 수 있습니다.

## 텍스트 편집 플러그인이 있나요?

먼저, `standard`를 설치합니다. 그런 다음, 편집기에 적절한 플러그인을 설치하세요.

### Sublime Text

**[Package Control][sublime-1]** 을 사용하여, **[SublimeLinter][sublime-2]** 와 **[SublimeLinter-contrib-standard][sublime-3]** 를 설치합니다.

저장시 자동포멧을 적용하려면 **[StandardFormat][sublime-4]** 을 설치하세요.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

**[linter-js-standard][atom-1]** 를 설치합니다.

저장시 자동포멧을 적용하려면 **[standard-formatter][atom-2]** 를 설치합니다. 스니펫의 경우 **[standardjs-snippets][atom-3]** 을 설치합니다.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets

### Visual Studio Code

**[vscode-standardjs][vscode-1]** 를 설치합니다. (자동포멧을 지원합니다.)

JS 스니펫의 경우 **[vscode-standardjs-snippets][vscode-2]** 을 설치합니다. React 스니펫의 경우 **[vscode-react-standard][vscode-3]** 를 설치합니다.

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

### Vim

**[ale][vim-1]** 를 설치합니다.

For automatic formatting on save, add these lines to `.vimrc`:

저장시 자동포멧을 적용하려면 해당 코드를 `.vimrc`에 추가하세요.

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

고려해야 할 대체 플러그인으로는 [neomake][vim-2] 및 [syntastic][vim-3]이 있으며, 둘 다 표준에 대한 지원이 내장되어 있습니다. (추가적으로 구성이 필요할 수도 있습니다)

[vim-1]: https://github.com/w0rp/ale
[vim-2]: https://github.com/neomake/neomake
[vim-3]: https://github.com/vim-syntastic/syntastic

### Emacs

**[Flycheck][emacs-1]** 를 설치하고 **[manual][emacs-2]** 을 확인하여 프로젝트에서 활성화하는 방법을 확인하십시오.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

extension registry에서 **["Standard Code Style"][brackets-1]** 을 검색하여 "Install"을 클릭하세요.

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains, etc.)

WebStrom은 `standard`가 직접적으로 IDE에서 사용가능다고 [기본적인 지원에 관한 최근 발표](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/) 했습니다.

만약 수동으로 `standard`를 구성하려면 [안내서]([webstorm-1])를 따르십시오. 이것은 PhpStorm, IntelliJ, RubyMine 등 모든 JetBrains 제품에 적용됩니다.

[webstorm-1]: docs/webstorm.md

## readme에 넣을 수 있는 뱃지로고가 있나요?

네! 프로젝트에서 `standard`를 사용한다면, readme에 이 뱃지들 중 하나를 포함시켜 코드가 standard 스타일을 사용하고 있음을 사람들에게 알릴 수 있습니다.

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```md
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
```

## 나와는 룰이 맞지 않습니다. 변경 가능합니까?

안됩니다. `standard`의 전체적인 요점은 코드 스타일에 대한 [bikeshedding][bikeshedding]을 피함으로써 시간을 절약하는 것입니다. 탭과 공백 등에 관해서는 온라인으로 많은 논쟁이 있기때문에 해결되지 않을 것입니다. 이러한 논쟁은 어떠한 것도 얻지 못하게합니다. 결국 `뭔가를 골라야 한다`입니다. 그것은 `standard`의 철학입니다. 이는 `단지 뭔가를 선택하세요`라는 의견입니다. 바라건대, 사용자들이 자신들의 의견을 방어하는 것에 대해 가치를 보게 되기를 바랍니다.

수백 개의 ESLint 규칙을 개별적으로 구성하려는 경우 `eslint`를 직접 [eslint-config-standard](https://github.com/feross/eslint-config-standard)와 함께 사용하여 변경 사항을 맨 위에 배치 할 수 있습니다.

팁 : 표준을 사용하고 계속 진행하십시오. 당신의 시간을 소비하고 있는 실질적인 문제를 해결하세요! :P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

## 그러나 이 것은 실제 웹표준이 아닙니다!

물론 표준이 아닙니다! 여기에 제시된 스타일은 공식 웹 표준 그룹과 관련이 없으므로 `ECMA/standard`이 아닌 `feross/standard`라고하는 이유입니다.

"standard"이라는 단어는 "web standard"이상의 의미를 가지고 있습니다 :-)

예를 들어,
- 이 모듈은 우리의 코드를 높은 수준의 품질로 유지하는 데 도움이됩니다.
- 이 모듈은 새로운 기여자가 몇 가지 기본 스타일 표준을 준수하도록합니다.

## 자동으로 포멧을 맞춰주는 것이 있나요?

예! `standard --fix`를 사용하면 자동으로 대부분의 문제를 자동으로 해결할 수 있습니다.

`standard --fix`는 최대의 편의를 위해 `standard`에 내장되어 있습니다. 대부분의 문제점은 고칠 수 있지만 일부 오류(오류 처리를 잊어 버리는 것)는 수동으로 해결해야합니다.

시간을 절약하기 위해 `standard`는 자동으로 수정할 수있는 문제를 발견하면 "`Run standard --fix to automatically fix some problems`" 메시지를 출력합니다.

## 어떻게하면 파일들을 무시할 수 있나요?

특정 경로 (`node_modules/`, `coverage/`, `vendor/`, `*.min.js`, `bundle.js`, `.git/`와 같이 `.`으로 시작하는 파일/폴더)는 자동으로 무시됩니다.

프로젝트의 루트 `.gitignore` 파일에 있는 경로도 자동으로 무시됩니다.

때로는 추가 폴더 또는 특정 축소 파일을 무시해야합니다. 이를 수행하려면 `package.json`에 `standard.ignore` 속성을 추가하십시오.

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

## 어떻게하면 경고를 숨길 수 있나요?

드문 경우이지만 규칙을 위반하고 `standard`에 의해 생성 된 경고를 숨길 필요가 있습니다.

JavaScript 표준 스타일은 [ESLint](http://eslint.org/)를 사용하며 ESLint를 직접 사용한 경우 일반적으로 경고를 숨길 수 있습니다.

자세한 출력을 얻으려면 (무시할 특정 규칙 이름을 찾을 수 있도록) 다음을 실행하십시오.

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

특정 줄에서 **모든 규칙** 을 비활성화할 수 있습니다.

```js
file = 'I know what I am doing' // eslint-disable-line
```

혹은, 특정 줄에서 **`"no-use-before-define"` 규칙만** 비활성화 할 수 있습니다.

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

`"no-use-before-define"` 규칙을 여러 줄에 적용할 수 있습니다.

```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

## 전역 namespace를 오염시키는 라이브러리를 사용합니다. "vaiable is not defined" 오류를 방지하려면 어떻게 해야 하나요?

일부 패키지 (예 : `mocha`)는 전역 개체 (가난한 형태!)에 기능 (예 : `describe`, `it`)을 지정합니다. 이 함수는 정의되지 않았거나 코드의 어느 곳에서든지 요구 될 수 있기 때문에 `standard`에서는 정의되지 않은 변수를 사용하고 있다고 경고합니다 (일반적으로 이 규칙은 오타를 잡는 데 유용합니다). 그러나 우리는 이 전역 변수들에 대해 이를 비활성화 하고자합니다.

`standard` (코드를 읽는 사람뿐만 아니라)에서 특정 변수가 코드에서 전역이라는 것을 알 수 있도록 파일의 맨 위에 추가하십시오.

```js
/* global myVar1, myVar2 */
```

수백 개의 파일이 있다면 모든 파일에 주석을 추가하지 않는 것이 좋습니다. 이 경우 다음을 실행하십시오.

```bash
$ standard --global myVar1 --global myVar2
```

혹은 `package.json`에 다음코드를 추가하세요.

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

*노트: `global`과 `globals`는 같습니다.

## 실험용 JavaScript (ES Next) 기능은 어떻게 사용하나요?

`standard`는 제안 프로세스의 "단계 4"에있는 언어 기능 제안을 포함하여 최신 ECMAScript 기능인 ES8 (ES2017)을 지원합니다.

실험용 언어 기능을 지원하기 위해 `standard`는 맞춤 JavaScript 파서를 지정하는 것을 지원합니다. 커스텀 파서를 사용하기 전에 추가 된 복잡성이 그럴 가치가 있는지 고려하십시오.

```bash
$ standard --parser babel-eslint
```

혹은, `package.json`에 아래코드를 추가하세요.

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

`standard'가 전역으로 설치되면 (즉,`npm install standard --global`), `babel-eslint`를 `npm install babel-eslint --global`과 함께 설치하십시오.

## Flow와 같은 JavaScrpt 언어 변형을 사용할 수 있나요?

커스텀 JS 언어 변형을 사용하기 전에 추가된 복잡성 (그리고 새로운 기여자를 최신으로 만드는데 필요한 노력)이 그만한 가치가 있는지 고려하십시오.

`standard`는 ESLint 플러그인을 지원합니다. `standard` 중 하나를 보기 전에 코드를 유효한 JavaScript로 변환하려면 이 중 하나를 사용하십시오. 맞춤 구문 분석기를 사용하려면 npm에서 설치하고 다음을 실행하십시오.

```bash
$ standard --plugin 플러그인_이름
```

아니면, `package.json`에 아래 코드를 추가하세요.

```json
{
  "standard": {
    "plugins": [ "플러그인_이름" ]
  }
}
```

Flow를 사용하려면 `babel-eslint`를 파서로 사용해야합니다. 따라서 `npm install eslint-plugin-flowtype babel-eslint`를 수행한 후에, 다음을 실행하십시오.

```bash
$ standard --plugin flowtype --parser babel-eslint
```

아니면, `package.json`에 아래 코드를 추가하세요.

```json
{
  "standard": {
    "plugins": [ "flowtype" ],
    "parser": "babel-eslint"
  }
}
```

`standard`가 전역으로 설치된 경우 (즉, `npm install standard --global`) `npm install-eslint-plugin-flowtype --global`을 사용하여 `eslint-plugin-flowtype`을 전역으로 설치해야합니다.

**참고 : 플러그인 및 플러그인은 동일합니다.**

## Mocha, Jasmine, QUnit 등은 어떻습니까?

테스트 파일에서 mocha를 지원하려면 테스트 파일의 시작 부분에 다음을 추가하십시오.

```js
/* eslint-env mocha */
```

혹은 다음을 실행하세요.

```bash
$ standard --env mocha
```

`mocha`는 `jasmine`, `qunit`, `phantomjs` 중 하나가 될 수 있습니다. 전체 목록을 보려면 ESLint의 [specifying environments(스펙문서)](http://eslint.org/docs/user-guide/configuring.html#specifying-environments)를 확인하십시오. 이러한 환경에서 사용할 수있는 전역의 목록을 보려면 [globals](https://github.com/sindresorhus/globals/blob/master/globals.json) npm 모듈을 확인하십시오.

**참고 : `env` 및 `envs`는 동일합니다.**

## What about Web Workers?

Add this to the top of your files:

```js
/* eslint-env serviceworker */
```

This lets `standard` (as well as humans reading your code) know that `self` is a
global in web worker code.

## Can I check code inside of Markdown or HTML files?

To check code inside Markdown files, use [`standard-markdown`](https://www.npmjs.com/package/standard-markdown).

Alternatively, there are ESLint plugins that can check code inside Markdown, HTML,
and many other types of language files:

To check code inside Markdown files, use an ESLint plugin:

```bash
$ npm install eslint-plugin-markdown
```

Then, to check JS that appears inside code blocks, run:

```bash
$ standard --plugin markdown '**/*.md'
```

To check code inside HTML files, use an ESLint plugin:

```bash
$ npm install eslint-plugin-html
```

Then, to check JS that appears inside `<script>` tags, run:

```bash
$ standard --plugin html '**/*.html'
```

## Is there a Git `pre-commit` hook?

Funny you should ask!

```sh
#!/bin/sh
# Ensure all javascript files staged for commit pass standard code style
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs standard
if [ $? -ne 0 ]; then exit 1; fi
```

## How do I make the output all colorful and *pretty*?

The built-in output is simple and straightforward, but if you like shiny things,
install [snazzy](https://www.npmjs.com/package/snazzy):

```bash
$ npm install snazzy
```

And run:

```bash
$ standard --verbose | snazzy
```

There's also [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), and
[standard-summary](https://www.npmjs.com/package/standard-summary).

## Is there a Node.js API?

Yes!

### `standard.lintText(text, [opts], callback)`

Lint the provided source `text`. An `opts` object may be provided:

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

Additional options may be loaded from a `package.json` if it's found for the
current working directory.

The `callback` will be called with an `Error` and `results` object.

The `results` object will contain the following properties:

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

Synchronous version of `standard.lintText()`. If an error occurs, an exception is
thrown. Otherwise, a `results` object is returned.

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

## How do I contribute to `standard`?

Contributions are welcome! Check out the [issues](https://github.com/feross/standard/issues) or the [PRs](https://github.com/feross/standard/pulls), and make your own if you want something that you don't see there.

Want to chat? Join contributors on IRC in the `#standard` channel on freenode.

Here are some important packages in the `standard` ecosystem:

- **[standard](https://github.com/feross/standard)** - this repo
  - **[standard-engine](https://github.com/flet/standard-engine)** - cli engine for arbitrary eslint rules
  - **[eslint-config-standard](https://github.com/feross/eslint-config-standard)** - eslint rules for standard
  - **[eslint-config-standard-jsx](https://github.com/feross/eslint-config-standard-jsx)** - eslint rules for standard (JSX)
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - custom eslint rules for standard (not part of eslint core)
  - **[eslint](https://github.com/eslint/eslint)** - the linter that powers standard
- **[snazzy](https://github.com/feross/snazzy)** - pretty terminal output for standard
- **[standard-www](https://github.com/feross/standard-www)** - code for https://standardjs.com
- **[semistandard](https://github.com/Flet/semistandard)** - standard, with semicolons (if you must)

There are also many **[editor plugins](#text-editor-plugins)**, a list of
**[npm packages that use `standard`](https://github.com/feross/standard-packages)**,
and an awesome list of
**[packages in the `standard` ecosystem](https://github.com/feross/awesome-standard)**.

## License

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
