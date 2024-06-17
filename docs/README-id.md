<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/standard/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://discord.gg/ZegqCBr"><img src="https://img.shields.io/discord/612704110008991783" alt="discord"></a>
  <a href="https://travis-ci.org/standard/standard"><img src="https://img.shields.io/travis/standard/standard/master.svg" alt="travis"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/eslint-config-standard"><img src="https://img.shields.io/npm/dm/eslint-config-standard.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<h5 align="center">
  Sponsored by&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://socket.dev"><img src="https://cdn.rawgit.com/standard/standard/master/docs/logos/socket.png" alt="Socket – Supply Chain Dependency Security for JavaScript and npm" height=50 valign="middle"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://wormhole.app/?utm_medium=sponsorship&utm_source=standard&utm_campaign=feross"><img src="https://cdn.rawgit.com/standard/standard/master/docs/logos/wormhole.png" alt="Wormhole" height=50 valign="middle"></a>
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

## Panduan penulisan Javascript, linter, dan formatter

Modul ini menghemat waktu kamu (dan lainnya!) dengan tiga cara:

- **Tanpa konfigurasi.** Cara paling mudah untuk menaikan kualitas kode kamu didalam projek. Tanpa harus membuat keputusan. Tanpa berkas`.eslintrc` untuk dikelola. Tinggal dijalankan.
- **Secara otomatis memformat kode.** Tinggal jalankan `standard --fix` dan katakan selamat tinggal pada kode yang berantakan dan tidak konsisten.
- **Tangkap masalah gaya penulisan & error dari programmer dengan cepat.** Hemat waktu untuk mereview kode dengan mengeliminasi kegiatan bolak-balik antara reviewer & kontributor.

Cobalah dengan menjalankan `npx standard --fix` sekarang juga!

## Daftar isi

- Quick start
  - [Pemasangan](#pemasangan)
  - [Penggunaan](#penggunaan)
  - [Apa yang kamu lakukan jika kamu pintar](#apa-yang-kamu-lakukan-jika-kamu-pintar)
- FAQ
  - [Kenapa saya harus menggunakan JavaScript Standard Style?](#kenapa-saya-harus-menggunakan-javascript-standard-style)
  - [Siapa yang menggunakan JavaScript Standard Style?](#siapa-yang-menggunakan-javascript-standard-style)
  - [Apakah terdapat plugin untuk text editor?](#apakah-terdapat-plugin-untuk-text-editor)
  - [Apakah terdapat badge readme?](#apakah-terdapat-badge-readme)
  - [Saya tidak setuju dengan aturan X, bisakah diganti?](#saya-tidak-setuju-dengan-aturan-x-bisakah-diganti)
  - [Tapi ini bukanlah standar web yang sesungguhnya!](#tapi-ini-bukanlah-standar-web-yang-sesungguhnya)
  - [Apakah terdapat formater yang otomatis?](#apakah-terdapat-formater-yang-otomatis)
  - [Bagaimana cara saya mengabaikan berkas?](#bagaimana-cara-saya-mengabaikan-berkas)
  - [Bagaimana cara menyembunyikan peringatan tertentu?](#bagaimana-cara-menyembunyikan-peringatan-tertentu)
  - [Saya menggunakan librari yang memenuhi penamaan global. Bagaimana cara saya menghindari error "variable is not defined"?](#saya-menggunakan-librari-yang-memenuhi-penamaan-global-bagaimana-cara-saya-menghundari-error-variable-is-not-defined)
  - [Bagaimana cara saya menggunakan fitur javascript yang experimental (ES Next)?](#bagaimana-cara-saya-menggunakan-fitur-javascript-yang-experimental-es-next)
  - [Bisakah saya menggunakan varian bahasa Javascript, seperti Flow atau Typescript?](#bisakah-saya-menggunakan-varian-bahasa-javascript-seperti-flow-atau-typescript)
  - [Bagaimana dengan Mocha, Jest, Jasmine, QUnit, etc?](#bagaimana-dengan-mocha-jest-jasmine-qunit-etc)
  - [Bagaimana dengan Web Workers dan Service Workers?](#bagaimana-dengan-web-workers-dan-service-workers)
  - [Bisakah saya memeriksa kode didalam berkas Markdown atau HTML?](#bisakah-saya-memeriksa-kode-didalam-berkas-markdown-atau-html)
  - [Apakah terdapat Git `pre-commit` hook?](#apakah-terdapat-git-pre-commit-hook)
  - [Bagaimana cara membuat outputnya menjadi berwarna dan cantik?](#bagaimana-cara-membuat-outputnya-menjadi-berwarna-dan-cantik)
  - [Apakah terdapat API untuk NodeJS?](#apakah-terdapat-api-untuk-nodejs)
  - [Bagaimana caranya saya berkonstribusi kepada StandardJS?](#bagaimana-caranya-saya-berkonstribusi-kepada-standardjs)
- [Lisensi](#lisensi)

## Pemasangan

Cara paling mudah untuk menggunakan Javascript Standard Style adalah dengan menginstallnya secara global dengan program Node line command. Jalankan perintah berikut didalam Terminal:

```bash
$ npm install standard --global
```

Atau, kamu bisa memasang `standard` secara lokal, untuk penggunaan didalam projek tunggal:

```bash
$ npm install standard --save-dev
```

*Catatan: Untuk menjalankan perintah-perintahnya, [Node.js](http://nodejs.org) dan [npm](https://npmjs.com) harus diinstall terlebih dahulu.*

## Penggunaan

Setelah kamu memasang `standard`, kamu harusnya sudah bisa untuk menggunakan program `standard`. Kasus paling sederhananya adalah memeriksa gaya penulisan dari seluruh berkas Javascript didalam direktori yang sedang digunakan:

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

Jika kamu memasang `standard` secara lokal, lebih baik jalankan dengan `npx`:

```bash
$ npx standard
```

Secara opsional kamu bisa memberikan sebuah direktori (atau direktori-direktori) menggunakan pola glob. Pastikan kamu memberikan tanda kutip pada path yang menganduk pola glob jadi direktori-direktorinya diperluas oleh `standard` daripada oleh shell-nya:

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**Note:** secara default `standard` akan mencari seluruh berkas berkas dengan pola yang sama: `**/*.js`, `**/*.jsx`.

## Apa yang kamu lakukan jika kamu pintar

1. Tambahkan kedalam `package.json`

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

2. Gaya diperiksa secara otomatis ketika kamu menjalankan `npm test`

  ```bash
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Tidak perlu memberikan feedback pada gaya penulisan didalam pull request lagi!

## Kenapa saya harus menggunakan Javascript Standard Style?

Keindahan dari Javascript Standard Style adalah kesederhanannya. Tidak ada seorangpun yang ingin memelihara berkas dengan ratusan-baris gaya konfigurasi untuk setiap modul/projek yang dikerjakan. Cukup untuk kegilaan itu!

Modul ini menghemat waktu kamu (dan lainnya!) dengan tiga cara:


- **Tanpa konfigurasi.** Cara paling mudah untuk menaikan kualitas kode kamu didalam projek. Tanpa harus membuat keputusan. Tanpa berkas`.eslintrc` untuk dikelola. Tinggal masukan.
- **Secara otomatis memformat kode.** Tinggal jalankan `standard --fix` dan katakan selamat tinggal pada kode yang berantakan dan tidak konsisten.
- **Tangkap masalah gaya penulisan & error dari programmer dengan cepat.** Hemat waktu untuk mereview kode dengan mengeliminasi kegiatan bolak-balik antara reviewer & kontributor.

Mengadopsi gaya `standard` berarti meninggikan pentingnya kejelasan dan konvensi komunitas lebih tinggi daripada gaya penulisan sendiri. Hal ini mungkin tidak masuk akal untuk 100% projek dan kultur dari pengembangan, entah bagaimana untuk open source bisa menjadi tempat yang dihindari oleh pemula. Siapkan dengan jelas, ekspektasi otomasi kontributor membuat projek lebih baik.

Untuk info lebih, lihatlah obrolan konferensi ["Write Perfect Code with Standard and
ESLint"](https://www.youtube.com/watch?v=kuHfMw8j4xk). Didalam obrolan ini, kamu akan belajar tentang linting, kapan ketika menggunakan `standard` dibandingkan dengan `eslint`, dan bagaimana `indahnya` dibandingkan dengan `standard`.

## Siapa yang menggunakan Javascript Standard Style?

[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodejs.png>](https://nodejs.org) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/npm.png>](https://www.npmjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/github.png>](https://github.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/elastic.png>](https://www.elastic.co) |
|---|---|---|---|

[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/express.png>](http://expressjs.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/electron.png>](http://electron.atom.io) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nuxtjs.png>](https://nuxtjs.org/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/atom.png>](https://atom.io) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/brave.png>](https://www.brave.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zeit.png>](https://zeit.co) |
|---|---|---|---|

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nearform.png>](http://www.nearform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/typeform.png>](https://www.typeform.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
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

| [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/searchapi.png>](https://www.searchapi.io/) | [<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/testingbot.png>](https://testingbot.com/) | Your Logo Here |
|---|---|---|---|


Selain perusahaan, beberapa anggota komunitas menggunakan `standard` didalam packages yang [terlalu banyak](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)
untuk ditampilkan disini.

`standard` juga merupakan linter dengan peringkat teratas didalam showcase Github [Clean Code Linter](https://github.com/showcases/clean-code-linters).

## Apakah terdapat plugin untuk text editor?

Pertama, pasang `standard`. Lalu, pasang plugin yang sesuai untuk editor kamu:

### Sublime Text

Menggunakan **[Package Control][sublime-1]**, pasang **[SublimeLinter][sublime-2]** dan
**[SublimeLinter-contrib-standard][sublime-3]**.

Untuk formating otomatis saat menyimpan, pasang **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

Pasang **[linter-js-standard][atom-1]**.

Secara alternatif, kamu bisa memasang **[linter-js-standard-engine][atom-4]**. Daripada versi `standard` yang telah digabungkan, versi ini akan secara otomatis menggunakan versi yang telah terpasang didalam projek yang sedang digunakan. Versi ini juga akan bekerja dengan linter lainnya yang berdasarkan **[standard-engine][atom-5]**.

Untuk formating otomatis, pasang **[standard-formatter][atom-2]**. Untuk snippets, pasang **[standardjs-snippets][atom-3]**.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets
[atom-4]: https://atom.io/packages/linter-js-standard-engine
[atom-5]: https://github.com/standard/standard-engine

### Visual Studio Code

Pasang **[vscode-standard][vscode-1]**. (Sudah termasuk dukungan untuk pem-format otomatis.)

Snippets untuk JS, pasang **[vscode-standardjs-snippets][vscode-2]**. Snippets untuk React, pasang **[vscode-react-standard][vscode-3]**.

[vscode-1]: https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items?itemName=TimonVS.ReactSnippetsStandard

### Vim

Pasang **[ale][vim-1]**. Dan tambahkan baris ini kedalam berkas `.vimrc`.

```vim
let g:ale_linters = {
\   'javascript': ['standard'],
\}
let g:ale_fixers = {'javascript': ['standard']}
```

Kode ini akan menyetel standard sebagai satu-satunya linter dan fixer untuk file javascript kamu dan menghindari konflik dengan eslint. Untuk linting dan pembenaran otomatis saat disimpan, tambahkan baris ini kedalam `.vimrc`:
```vim
let g:ale_lint_on_save = 1
let g:ale_fix_on_save = 1
```


Plugin alternatif untuk dipertimbangkan [neomake][vim-2] dan [syntastic][vim-3], keduanya memiliki dukungan bawaan untuk `standard` (walaupun konfigurasi mungkin masih dibutuhkan).

[vim-1]: https://github.com/w0rp/ale
[vim-2]: https://github.com/neomake/neomake
[vim-3]: https://github.com/vim-syntastic/syntastic

### Emacs

Pasang **[Flycheck][emacs-1]** dan lihat **[manual][emacs-2]** untuk mempelajari bagaimana cara menggunakannya didalam projek kamu.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

Carilah ekstensi registry untuk **["Standard Code Style"][brackets-1]** dan klik "Install".

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains, etc.)

WebStorm [baru saja mengumumkan dukungan natif](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)
untuk `standard` langsung didalam IDE.

Jika kamu lebih suka untuk mengkonfigurasi `standard` secara manual, [ikuti arahan disini][webstorm-1]. Arahan tersebuh dapat diaplikasikan kedalam seluruh produk JetBrains, termasuk PhpStorm, IntelliJ, RubyMine, etc.

[webstorm-1]: webstorm.md

## Apakah terdapat badge readme?

Ya! jika kamu menggunakan `standard didalam projek kamu, kamu bisa memasukan salah satu dari badge ini didalam readme kamu untuk membiarkan orang-orang tahu bahwa kode kamu menggunakan gaya standard.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```md
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
```

## Saya tidak setuju dengan aturan X, bisakah diganti??

Tidak. Point utama dari `standard` adalah untuk menghemat waktu kamu dengan menghindari [bikeshedding][bikeshedding] didalam gaya penulisan. Masih banyak perdebatan obline tentang penggunaan tabs dengan spasi, dll. Yang mana tidak akan berakhir. Debat-debat ini hanya akan mengganggu kita menyelesaikan pekerjaan kita. Pada akhirnya kamu 'harus memilih sesuatu', dan itulah seluruh filosofi dari `standard` -- 'pilihlah sesuatu' adalah opini yang masuk akal. Semoga, pengguna melihat nilai dari opini itu daripada harus terus berdebat tentang hal-hal lainnya.

Terdapat beberapa package yang mirip untuk orang-orang yang tidak ingin sepenuhnya menggunakan `standard`:
- [semistandard](https://github.com/standard/semistandard) - standard, dengan titik koma
- [standardx](https://github.com/standard/standardx) - standard, dengan pengaturan kustom

Jika kamu benar-benar ingin mengkonfigurasi ratusan dari aturan ESLint satu persatu, kamu selalu bisa menggunakan `eslint` langsung dengan [eslint-config-standard](https://github.com/standard/eslint-config-standard) untuk melapisi perubahan terlebih dahulu.
[`standard-eject`](https://github.com/josephfrazier/standard-eject) bisa membantu kamu memigrasi dari `standard` menjadi `eslint` dan `eslint-config-standard`.

Saran ahli: Gunakanlah `standard`. Terdapat masalah sesungguhnya yang mana akan menghabiskan waktu kamu dalam memecahkan masalahnya! :P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

## Tapi ini bukanlah standar web yang sesungguhnya!

Tentu saja bukan! Gayanya yang digunakan disini tidak terdapat pada official web standards groups manapun, itulah kenapa repo ini dipanggil dengan `standard/standard` dan bukan `ECMA/standard`.

Kata dari "standard" memiliki arti lebih dari "web standard" :-) Contoh:

- Modul ini membantu kode kita untuk memiliki *kualitas dari standard* yang tinggi.
- Modul ini memastikan bahwa kontributor baru mengikuti dasar dari beberapa *style standards*.

## Apakah terdapat formater yang otomatis?

Ya! Kamu bisa menggunakan `standard --fix` untuk memperbaiki kebanyakan masalah secara otomatis.

`standard --fix` dibuat kedalam `standard` untuk kenyamanan yang maksimal. Tapi kebanyakan masalah dapat diperbaiki, tapi beberapa error (seperti lupa untuk menghandle error) harus diperbaiki secara manual.

Untuk menghemat waktu kamu, `standard` mengeluarkan pesan "`Run standard --fix untuk secara otomatis memperbaiki beberapa masalah`" ketika kode tersebut mendeteksi masalah yang bisa diperbaiki secara otomatis.

## Bagaimana cara saya mengabaikan berkas?

Beberapa path (`node_modules/`, `coverage/`, `vendor/`, `*.min.js`, dan berkas/folder yang dimulai dengan `.` seperti `.git/`) akan secara otomatis diabaikan.

Path didalam sebuah file projek root `.gitignore` juga secara otomatis diabaikan.

Terkadang kamu perlu untuk mengabaikan folder tambahan atau file tertentu yang telah di minified. Untuk melakukan hal itu, tambahkan properti `standard.ignore` didalam `package.json`:

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

## Bagaimana cara menyembunyikan peringatan tertentu?

Didalam kasus yang jarang terjadi, kamu perlu keluar dari aturan dan menyembunyikan peringatan yang dibuat oleh `standard`.

Javascript Standard Style menggunakan [ESLint](http://eslint.org/) didalamnya dan kamu bisa menyembunyikan peringatan seperti saat kamu menggunakan ESLint secara langsung.

Nonaktifkan **semua aturan** didalam baris tertentu:

```js
file = 'I know what I am doing' // eslint-disable-line
```

Atau, Nonaktifkan **hanya** aturan`"no-use-before-define"`:

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

Atau, nonaktifkan aturan `"no-use-before-define"` untuk **beberapa baris**:

```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

## Saya menggunakan librari yang memenuhi penamaan global. Bagaimana cara saya menghindari error "variable is not defined"?

Beberapa package (seperti `mocha`) yang memasukan fungsinya (seperti `describe`, `it`) didalam objek global (bentuk yang buruk). Sejak fungsi-fungsi ini tidak didefinisikan atau `require` dimanapun didalam kode kamu, `standard` akan memperingatkan bahwa kamu menggunakan variabel yang tidak didefinisikan (biasanya, aturan ini akan sangat berguna untuk menangkap typo-typo!). Tapi kita ingin menonaktifkannya untuk variabel-variabel global.

Untuk membiarkan `standard` (tentunya sama seperti manusia yang membaca kode kamu) mengetahui bahwa beberapa variabel adalah global didalam kode kamu, tambahkan ini dipaling atas dari berkas kamu:

```js
/* global myVar1, myVar2 */
```

Jika kamu mempunyai ratusan berkas, mungkin kamu ingin menghindari menambahkan komentar disetiap berkas. Dalam kasus ini, jalankan:

```bash
$ standard --global myVar1 --global myVar2
```

Atau, tambahkan ini kedalam `package.json`:

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

*Catatan: `global` dan `globals` sama saja.*

## Bagaimana cara saya menggunakan fitur javascript yang experimental (ES Next)?

`standard` mendukung fitur ECMAScript yang paling terbaru, ES8 (ES2017), termasuk fitur proposal bahasa yang mana sekarang didalam "Stage 4" dari proses proposal.

Untuk mendukun fitur bahasa eksperimental, `standard` menspesifikasikan dukungan kustom parser Javascript. Sebelum menggunakan parser kustom, pertimbangkan apakah menambahkan kompleksitas akan bermanfaat.

Untuk mendukung parser kustom, pertama pasang dahulu dari npm:

```bash
npm install @babel/eslint-parser --save-dev
```

Lalu jalankan:

```bash
$ standard --parser @babel/eslint-parser
```

Atau, tambahkan ini kedalam `package.json`:

```json
{
  "standard": {
    "parser": "@babel/eslint-parser"
  }
}
```

## Bisakah saya menggunakan varian bahasa Javascript, seperti Flow atau Typescript?

`standard` mendukung fitur ECMAScript yang paling terbaru. Namun, Flow dan TypeScript menambahkan sintaks baru kedalam bahasanya, jadi keduanya tidak didukung.

Untuk mendukung varian bahasa dari Javascript, `standard` mendukung menspesifikasikan parser Javascript kustom sama sepertin plugin ESLint untuk meng-handle perubahan sintaks. Sebelum menggunakan varian bahasa dari Javascript, pertimbangkan apakah menambah kompleksitas akan bermanfaat.

### Flow

Untuk menggunakan Flow, kamu harus menjalankan `standard` dengan `@babel/eslint-parser` sebagai parsernya dan `eslint-plugin-flowtype` sebagai pluginnya.

```bash
npm install @babel/eslint-parser eslint-plugin-flowtype --save-dev
```

Lalu jalankan:

```bash
$ standard --parser @babel/eslint-parser --plugin flowtype
```

Atau, tambahkan ini kedalam `package.json`:

```json
{
  "standard": {
    "parser": "@babel/eslint-parser",
    "plugins": [ "flowtype" ]
  }
}
```

*Catatan: `plugin` dan `plugins` sama saja.*

### TypeScript

Untuk menggunakan TypeScript, kamu harus menjalankan `standard` dengan `@typescript-eslint/parser` sebagai parsernya, `@typescript-eslint/eslint-plugin` sebagai pluginnya, dan beritahu standard untuk lint berkas `**/*.ts` (karena hal itu tidak diimplementasikan secara default).

Sayangnya, terdapat [masalah](https://github.com/standard/standard/issues/1283) yang terjadi diluar dugaan dengan `standard` dan TypeScript dimana `standard` mengeluarkan error unused-variable yang tidak benar (misal: ketika kamu mengimport interface). Dan sebagai solusi, kamu bisa menggunakan [standardx](https://github.com/standard/standardx) :sweat_smile:.

```bash
npm install standardx @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

Lalu jalankan:

```bash
$ standardx --parser @typescript-eslint/parser --plugin @typescript-eslint/eslint-plugin **/*.ts
```

Atau, tambahkan ini kedalam `package.json`:

```json
{
  "eslintConfig": {
    "rules": {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error"
    }
  },
  "standardx": {
    "parser": "@typescript-eslint/parser",
    "plugins": [ "@typescript-eslint/eslint-plugin" ]
  }
}
```

Dengan kode diatas didalam `package.json`, kamu bisa menjalankan:

```bash
standardx **/*.ts
```

Dan kamu mungkin harus menghilangkan `standard` juga untuk menghindari kebingungan dimana itu digunakan secara tidak sengaja dimana seharusnya `standarx`.

```bash
npm uninstall standard
```

## Bagaimana dengan Mocha, Jest, Jasmine, QUnit, etc?

Untuk dukungan mocha didalam berkas test, tambahkan kode ini dibagian paling atas dari berkas test:

```js
/* eslint-env mocha */
```

Atau, Jalankan:

```bash
$ standard --env mocha
```

Dimana `mocha` bisa jadi salah satu dari `jest`, `jasmine`, `qunit`, `phantomjs`, dan lainnya. Untuk melihat seluruh daftar, lihat dokumentasi ESLint
[specifying environments](http://eslint.org/docs/user-guide/configuring.html#specifying-environments). Untuk melihat global apa saja yang tersedia didalam environment ini, lihat npm modul [globals](https://github.com/sindresorhus/globals/blob/master/globals.json).

*Catatan: `env` dan `envs` sama saja.*

## Bagaimana dengan Web Workers dan Service Workers?

Tambahkan kode ini dibagian paling atas dari berkas web worker:

```js
/* eslint-env worker */
```

Kode diatas membiarkan `standard` (sama seperti manusia yang membaca kodenya) tahu bahwa `self` adalah sebuah global didalam kode web worker.

Untuk Service Worker, tambahkan kode ini:

```js
/* eslint-env serviceworker */
```

## Bisakah saya memeriksa kode didalam berkas Markdown atau HTML?

Untuk memeriksa berkas Markdown, gunakan [`standard-markdown`](https://www.npmjs.com/package/standard-markdown).

Alternatifnya, terdapat plugin ESLint yang bisa memeriksa kode didalam Markdown, HTML, dan berkas dengan bahasa yang lain:

Untuk memeriksa kode didalam berkas Markdown, gunakan plugin ESLint:

```bash
$ npm install eslint-plugin-markdown
```

Lalu, untuk memeriksa JS yang muncul didalam blok kode, jalankan:

```bash
$ standard --plugin markdown '**/*.md'
```

Untuk memeriksa kode didalam berkas HTML, gunakan plugin ESLint:

```bash
$ npm install eslint-plugin-html
```

Lalu, untuk memeriksa JS yang muncul didalam tag `<script>`, jalankan:

```bash
$ standard --plugin html '**/*.html'
```

## Apakah terdapat Git pre-commit hook?

Lucu sekali ketika kamu bertanya hal ini!

```bash
#!/bin/bash

# Memastikan seluruh berkas javascript siap untuk dicommit dengan gaya penulisan standard
function xargs-r() {
  # Versi portable dari "xargs -r". Tanda -r adalah ekstensi GNU yang
  # menghindari xargs untuk berjalan jika tidak ada berkas yang dimasukan.
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

## Bagaimana cara membuat outputnya menjadi berwarna dan cantik?

Output bawaannya sangat sederhana dan jelas, tapi jika kamu suka sesuatu yang indah, pasang [snazzy](https://www.npmjs.com/package/snazzy):

```bash
$ npm install snazzy
```

Dan jalankan:

```bash
$ standard | snazzy
```

Juga ada [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), dan
[standard-summary](https://www.npmjs.com/package/standard-summary).

## Apakah terdapat API untuk Node.js?

Ya!

### `async standard.lintText(text, [opts])`

Lint sumber `text` yang disediakan. Objek `opts` bisa juga disediakan:

```js
{
  // unique to lintText
  filename: '',         // path of file containing the text being linted

  // common to lintText and lintFiles
  cwd: '',              // current working directory (default: process.cwd())
  fix: false,           // automatically fix problems
  extensions: [],       // file extensions to lint (has sane defaults)
  globals: [],          // custom global variables to declare
  plugins: [],          // custom eslint plugins
  envs: [],             // custom eslint environment
  parser: '',           // custom js parser (e.g. babel-eslint)
  usePackageJson: true, // use options from nearest package.json?
  useGitIgnore: true    // use file ignore patterns from .gitignore?
}
```

Option tambahan mungkin di ambil dari `package.json` jika ditemukan didalam direktori yang sedang digunakan.

Objek `results` akan mengandung properti berikut:

```js
const results = {
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

### `async standard.lintFiles(files, [opts])`

Lint globs `files` yang disediakan. Sebuah objek `opts` bisa disediakan:

```js
{
  // unique to lintFiles
  ignore: [],           // file globs to ignore (has sane defaults)

  // common to lintText and lintFiles
  cwd: '',              // current working directory (default: process.cwd())
  fix: false,           // automatically fix problems
  extensions: [],       // file extensions to lint (has sane defaults)
  globals: [],          // custom global variables to declare
  plugins: [],          // custom eslint plugins
  envs: [],             // custom eslint environment
  parser: '',           // custom js parser (e.g. babel-eslint)
  usePackageJson: true, // use options from nearest package.json?
  useGitIgnore: true    // use file ignore patterns from .gitignore?
}
```

Objek `results` (sama seperti diatas).

## Bagaimana caranya saya berkonstribusi kepada StandardJS?

Kontribusi sangat disambut! Lihat [issues](https://github.com/standard/standard/issues) atau [PRs](https://github.com/standard/standard/pulls)nya, dan buatlah pull request jika kamu melihat ada kekurangan.

Ingin bertanya? Bergabunglah dengan kontributor didalam channel `#standard` IRC di freenode.

Ini adalah beberapa package penting didalam ekosistem `standard`:

- **[standard](https://github.com/standard/standard)** - repo ini
  - **[standard-engine](https://github.com/standard/standard-engine)** - cli engine untuk aturan yang panjang
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** - eslint untuk aturan yang standar
  - **[eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)** - eslint untuk aturan yang standar (JSX)
  - **[eslint-plugin-standard](https://github.com/standard/eslint-plugin-standard)** - aturan eslint kustom yang standar (bukan bagian dari eslint utama)
  - **[eslint](https://github.com/eslint/eslint)** - linter yang menggerakan standard
- **[snazzy](https://github.com/standard/snazzy)** - output terminal yang cantik untuk standard
- **[standard-www](https://github.com/standard/standard-www)** - kode untuk https://standardjs.com
- **[semistandard](https://github.com/standard/semistandard)** - standard, dengan titik koma (jika harus)
- **[standardx](https://github.com/standard/standardx)** - standard, dengan pengaturan kustom

Juga terdapat beberapa **[plugin editor](#are-there-text-editor-plugins)**, daftar dari
**[package npm yang digunakan `standard`](https://github.com/standard/standard-packages)**,
dan daftar yang bagus dari
**[package didalam ekosistem `standard`](https://github.com/standard/awesome-standard)**.

## Kebijakan dan Prosedur Keamanan

Tim dari `standard` dan komunitas memeriksa seluruh bug didalam `standard` dengan serius. Periksa dokumen [kebijakan dan prosedur keamanan](https://github.com/standard/.github/blob/master/SECURITY.md) untuk belajar bagaimana cara melaporkan masalah.

## Lisensi

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](https://feross.org).
