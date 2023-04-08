# JavaScript Standard Style

<p align="center">
  <a href="/docs/RULES-en.md">English</a> •
  <a href="/docs/RULES-de.md">Deutsch</a> •
  <a href="/docs/RULES-esla.md">Español (Latinoamérica)</a> •
  <a href="/docs/RULES-fr.md">Français</a> •
  <a href="/docs/RULES-id.md">Bahasa Indonesia</a> •
  <a href="/docs/RULES-iteu.md">Italiano (Italian)</a> •
  <a href="/docs/RULES-ja.md">日本語 (Japanese)</a> •
  <a href="/docs/RULES-kokr.md">한국어 (Korean)</a> •
  <a href="/docs/RULES-ptbr.md">Português (Brasil)</a> •
  <a href="/docs/RULES-zhcn.md">简体中文 (Simplified Chinese)</a> •
  <a href="/docs/RULES-zhtw.md">繁體中文 (Taiwanese Mandarin)</a>
</p>

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Ini adalah ringkasan dari peraturan penggunaan Javascript [standard](https://github.com/standard/standard).

Cara terbaik untuk belajar tentang `standard` adalah dengan memasangnya pada projek Anda dan cobalah didalam kode anda.

## Peraturan

* **Gunakan 2 spasi** untuk indentasi.

  eslint: [`indent`](http://eslint.org/docs/rules/indent)

  ```js
  function hello (name) {
    console.log('hi', name)
  }
  ```

* **Gunakan tanda kutip tunggal untuk _string_** kecuali untuk menghindari _escaping_.

  eslint: [`quotes`](http://eslint.org/docs/rules/quotes)

  ```js
  console.log('hello there')    // ✓ ok
  console.log("hello there")    // ✗ hindari
  console.log(`hello there`)    // ✗ hindari

  $("<div class='box'>")        // ✓ ok
  console.log(`hello ${name}`)  // ✓ ok
  ```

* **Tidak ada variabel yang tidak digunakan.**

  eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars)

  ```js
  function myFunction () {
    var result = something()   // ✗ hindari
  }
  ```

* **Tambahkan spasi setelah _keyword_.**

  eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing)

  ```js
  if (condition) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ hindari
  ```

* **Tambahkan spasi sebelum kurung dari deklarasi fungsi.**

  eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren)

  ```js
  function name (arg) { ... }   // ✓ ok
  function name(arg) { ... }    // ✗ hindari

  run(function () { ... })      // ✓ ok
  run(function() { ... })       // ✗ hindari
  ```

* **Selalu gunakan** `===` daripada `==`.<br>
  Pengecualian: `obj == null` diperbolehkan untuk memeriksa `null || undefined`.

  eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq)

  ```js
  if (name === 'John')   // ✓ ok
  if (name == 'John')    // ✗ hindari
  ```

  ```js
  if (name !== 'John')   // ✓ ok
  if (name != 'John')    // ✗ hindari
  ```

* **Infix operators** must be spaced.
* **Operator *Infix*** harus diberi spasi.

  eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops)

  ```js
  // ✓ ok
  var x = 2
  var message = 'hello, ' + name + '!'
  ```

  ```js
  // ✗ hindari
  var x=2
  var message = 'hello, '+name+'!'
  ```

* **Tanda koma harus memiliki spasi** setelahnya.

  eslint: [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing)

  ```js
  // ✓ ok
  var list = [1, 2, 3, 4]
  function greet (name, options) { ... }
  ```

  ```js
  // ✗ hindari
  var list = [1,2,3,4]
  function greet (name,options) { ... }
  ```

* **Simpan statemen _else_** pada baris yang sama dengan kurung kurawalnya.

  eslint: [`brace-style`](http://eslint.org/docs/rules/brace-style)

  ```js
  // ✓ ok
  if (condition) {
    // ...
  } else {
    // ...
  }
  ```

  ```js
  // ✗ hindari
  if (condition) {
    // ...
  }
  else {
    // ...
  }
  ```

* **Untuk statemen if yang menggunakan beberapa baris,** gunakan kurung kurawal.

  eslint: [`curly`](http://eslint.org/docs/rules/curly)

  ```js
  // ✓ ok
  if (options.quiet !== true) console.log('done')
  ```

  ```js
  // ✓ ok
  if (options.quiet !== true) {
    console.log('done')
  }
  ```

  ```js
  // ✗ hindari
  if (options.quiet !== true)
    console.log('done')
  ```

* **Selalu tangani** parameter fungsi `err`.

  eslint: [`handle-callback-err`](http://eslint.org/docs/rules/handle-callback-err)
  ```js
  // ✓ ok
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })
  ```

  ```js
  // ✗ hindari
  run(function (err) {
    window.alert('done')
  })
  ```

* **Mendeklarasikan _browser global_** dengan sebuah komen `/* global */`.<br>
  Pengecualian: `window`, `document`, and `navigator`.<br>
  Hindari penggunaan dari penamaan variabel seperti `open`, `length`,
  `event`, and `name`.

  ```js
  /* global alert, prompt */

  alert('hi')
  prompt('ok?')
  ```

  Referensikan secara jelas fungsi atau properti didalam `window` juga ok, walaupun kode tidak akan berjalan didalam *Worker* yang mana menggunakan `self` daripada `window`.

  eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

  ```js
  window.alert('hi')   // ✓ ok
  ```

* **Baris kosong ganda tidak diperbolehkan.**

  eslint: [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines)

  ```js
  // ✓ ok
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ hindari
  var value = 'hello world'


  console.log(value)
  ```

* **Untuk operator _ternary_** didalam setingan _multi-line_, tambahkan `?` dan `:` pada barisnya masing-masing.

  eslint: [`operator-linebreak`](http://eslint.org/docs/rules/operator-linebreak)

  ```js
  // ✓ ok
  var location = env.development ? 'localhost' : 'www.api.com'

  // ✓ ok
  var location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ hindari
  var location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **Untuk mendeklarasikan var,** tulis setiap deklarasinya didalam statemennya masing-masing.

  eslint: [`one-var`](http://eslint.org/docs/rules/one-var)

  ```js
  // ✓ ok
  var silent = true
  var verbose = true

  // ✗ hindari
  var silent = true, verbose = true

  // ✗ hindari
  var silent = true,
      verbose = true
  ```

* **Bungkus _conditional assignments_** dengan kurung tambahan. Hal ini memperjelas bahwa ekspresinya adalah _assignment_ (`=`) daripada sebuah _typo_ untuk persamaan (`===`).

  eslint: [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign)

  ```js
  // ✓ ok
  while ((m = text.match(expr))) {
    // ...
  }

  // ✗ hindari
  while (m = text.match(expr)) {
    // ...
  }
  ```

* **Tambahkan spasi didalam blok baris tunggal.**

  eslint: [`block-spacing`](http://eslint.org/docs/rules/block-spacing)

  ```js
    function foo () {return true}    // ✗ hindari
    function foo () { return true }  // ✓ ok
  ```

* **Gunakan _camelcase_ ketika memberi nama variabel dan fungsi.**

  eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase)

  ```js
    function my_function () { }    // ✗ hindari
    function myFunction () { }     // ✓ ok

    var my_var = 'hello'           // ✗ hindari
    var myVar = 'hello'            // ✓ ok
  ```

* **Trailing commas not allowed.**
* **Akhiran koma tidak diperbolehkan.**

  eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

  ```js
    var obj = {
      message: 'hello',   // ✗ hindari
    }
  ```

* **Koma harus ditempatkan pada akhir dari baris.**

  eslint: [`comma-style`](http://eslint.org/docs/rules/comma-style)

  ```js
    var obj = {
      foo: 'foo'
      ,bar: 'bar'   // ✗ hindari
    }

    var obj = {
      foo: 'foo',
      bar: 'bar'   // ✓ ok
    }
  ```

* **Titik harus berada pada baris yang sama dengan propertinya.**

  eslint: [`dot-location`](http://eslint.org/docs/rules/dot-location)

  ```js
    console.
      log('hello')  // ✗ hindari

    console
      .log('hello') // ✓ ok
  ```

* **Berkas harus berakhir dengan baris baru.**

  eslint: [`eol-last`](http://eslint.org/docs/rules/eol-last)

* **Tidak ada spasi diantara _identifier_ fungsi dan pemanggilannya.**

  eslint: [`func-call-spacing`](http://eslint.org/docs/rules/func-call-spacing)

  ```js
  console.log ('hello') // ✗ hindari
  console.log('hello')  // ✓ ok
  ```

* **Tambahkan spasi diantara kolon dan nilai didalam pasangan _key value_.**

  eslint: [`key-spacing`](http://eslint.org/docs/rules/key-spacing)

  ```js
  var obj = { 'key' : 'value' }    // ✗ hindari
  var obj = { 'key' :'value' }     // ✗ hindari
  var obj = { 'key':'value' }      // ✗ hindari
  var obj = { 'key': 'value' }     // ✓ ok
  ```

* **Nama konstruktor harus dimulai dengan huruf kapital.**

  eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap)

  ```js
  function animal () {}
  var dog = new animal()    // ✗ hindari

  function Animal () {}
  var dog = new Animal()    // ✓ ok
  ```

* **Konstruktor tanpa argumen harus dipanggil dengan kurung.**

  eslint: [`new-parens`](http://eslint.org/docs/rules/new-parens)

  ```js
  function Animal () {}
  var dog = new Animal    // ✗ hindari
  var dog = new Animal()  // ✓ ok
  ```

* **Objek harus mengandung sebuah ```getter``` ketika ```setter```-nya digunakan.**

  eslint: [`accessor-pairs`](http://eslint.org/docs/rules/accessor-pairs)

  ```js
  var person = {
    set name (value) {    // ✗ hindari
      this._name = value
    }
  }

  var person = {
    set name (value) {
      this._name = value
    },
    get name () {         // ✓ ok
      return this._name
    }
  }
  ```

* **Konstruktor dari kelas yang diturunkan harus memanggil `super`.**

  eslint: [`constructor-super`](http://eslint.org/docs/rules/constructor-super)

  ```js
  class Dog {
    constructor () {
      super()             // ✗ hindari
      this.legs = 4
    }
  }

  class Dog extends Animal {
    constructor () {      // ✗ hindari
      this.legs = 4
    }
  }

  class Dog extends Animal {
    constructor () {
      super()             // ✓ ok
      this.legs = 4
    }
  }
  ```

* **Gunakan _array literals_ daripada menggunakan _array constructors_.**

  eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor)

  ```js
  var nums = new Array(1, 2, 3)   // ✗ hindari
  var nums = [1, 2, 3]            // ✓ ok
  ```

* **Hindari menggunakan `arguments.callee` dan `arguments.caller`.**

  eslint: [`no-caller`](http://eslint.org/docs/rules/no-caller)

  ```js
  function foo (n) {
    if (n <= 0) return

    arguments.callee(n - 1)   // ✗ hindari
  }

  function foo (n) {
    if (n <= 0) return

    foo(n - 1)                // ✓ ok
  }
  ```

* **Hindari memodifikasi variabel dari pendeklarasian _class_.**

  eslint: [`no-class-assign`](http://eslint.org/docs/rules/no-class-assign)

  ```js
  class Dog {}
  Dog = 'Fido'    // ✗ hindari
  ```

* **Hindari memodifikasi variabel yang dideklarasikan dengan `const`.**

  eslint: [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign)

  ```js
  const score = 100
  score = 125       // ✗ hindari
  ```

* **Hindari menggunakan ekspresi konstan didalam _conditional_ (kecuali perulangan).**

  eslint: [`no-constant-condition`](http://eslint.org/docs/rules/no-constant-condition)

  ```js
  if (false) {    // ✗ hindari
    // ...
  }

  if (x === 0) {  // ✓ ok
    // ...
  }

  while (true) {  // ✓ ok
    // ...
  }
  ```

* **Tidak ada _control characters_ didalam _regular expressions_.**

  eslint: [`no-control-regex`](http://eslint.org/docs/rules/no-control-regex)

  ```js
  var pattern = /\x1f/    // ✗ hindari
  var pattern = /\x20/    // ✓ ok
  ```

* **Tidak ada statemen `debugger`.**

  eslint: [`no-debugger`](http://eslint.org/docs/rules/no-debugger)

  ```js
  function sum (a, b) {
    debugger      // ✗ hindari
    return a + b
  }
  ```

* **Tidak ada operator `delete` didalam variabel.**

  eslint: [`no-delete-var`](http://eslint.org/docs/rules/no-delete-var)

  ```js
  var name
  delete name     // ✗ hindari
  ```

* **Tidak ada duplikasi argumen didalam definisi fungsi.**

  eslint: [`no-dupe-args`](http://eslint.org/docs/rules/no-dupe-args)

  ```js
  function sum (a, b, a) {  // ✗ hindari
    // ...
  }

  function sum (a, b, c) {  // ✓ ok
    // ...
  }
  ```

* **Tidak ada duplikasi nama didalam _class member_.**

  eslint: [`no-dupe-class-members`](http://eslint.org/docs/rules/no-dupe-class-members)

  ```js
  class Dog {
    bark () {}
    bark () {}    // ✗ hindari
  }
  ```

* **Tidak ada duplikasi _keys_ didalam objek literal.**

  eslint: [`no-dupe-keys`](http://eslint.org/docs/rules/no-dupe-keys)

  ```js
  var user = {
    name: 'Jane Doe',
    name: 'John Doe'    // ✗ hindari
  }
  ```

* **Tidak ada duplikasi label `case` didalam statemen `switch`.**

  eslint: [`no-duplicate-case`](http://eslint.org/docs/rules/no-duplicate-case)

  ```js
  switch (id) {
    case 1:
      // ...
    case 1:     // ✗ hindari
  }
  ```

* **Gunakan statemen import tunggal per modul.**

  eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

  ```js
  import { myFunc1 } from 'module'
  import { myFunc2 } from 'module'          // ✗ hindari

  import { myFunc1, myFunc2 } from 'module' // ✓ ok
  ```

* **Tidak ada karakter kelas kosong didalam _regular expressions_.**

  eslint: [`no-empty-character-class`](http://eslint.org/docs/rules/no-empty-character-class)

  ```js
  const myRegex = /^abc[]/      // ✗ hindari
  const myRegex = /^abc[a-z]/   // ✓ ok
  ```

* **Tidak ada pola destrukturing yang kosong.**

  eslint: [`no-empty-pattern`](http://eslint.org/docs/rules/no-empty-pattern)

  ```js
  const { a: {} } = foo         // ✗ hindari
  const { a: { b } } = foo      // ✓ ok
  ```

* **Tidak menggunakan `eval()`.**

  eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

  ```js
  eval( "var result = user." + propName ) // ✗ avoid
  var result = user[propName]             // ✓ ok
  ```

* **Tidak memasukan ulang _exceptions_ didalam klausa `catch`.**

  eslint: [`no-ex-assign`](http://eslint.org/docs/rules/no-ex-assign)

  ```js
  try {
    // ...
  } catch (e) {
    e = 'new value'             // ✗ hindari
  }

  try {
    // ...
  } catch (e) {
    const newVal = 'new value'  // ✓ ok
  }
  ```

* **Tidak meng-_extend_ objek native.**

  eslint: [`no-extend-native`](http://eslint.org/docs/rules/no-extend-native)

  ```js
  Object.prototype.age = 21     // ✗ hindari
  ```

* **Hindari _binding_ fungsi yang tidak dibutuhkan.**

  eslint: [`no-extra-bind`](http://eslint.org/docs/rules/no-extra-bind)

  ```js
  const name = function () {
    getName()
  }.bind(user)    // ✗ hindari

  const name = function () {
    this.getName()
  }.bind(user)    // ✓ ok
  ```

* **Hindai menggunakan boolean yang tidak dibutuhkan.**

  eslint: [`no-extra-boolean-cast`](http://eslint.org/docs/rules/no-extra-boolean-cast)

  ```js
  const result = true
  if (!!result) {   // ✗ hindari
    // ...
  }

  const result = true
  if (result) {     // ✓ ok
    // ...
  }
  ```

* **Tidak ada kurung yang tidak dibutuhkan disekitar ekspresi fungsi.**

  eslint: [`no-extra-parens`](http://eslint.org/docs/rules/no-extra-parens)

  ```js
  const myFunc = (function () { })   // ✗ hindari
  const myFunc = function () { }     // ✓ ok
  ```

* **Gunakan `break` untuk menghentikan alur didalam `switch`.**

  eslint: [`no-fallthrough`](http://eslint.org/docs/rules/no-fallthrough)

  ```js
  switch (filter) {
    case 1:
      doSomething()    // ✗ hindati
    case 2:
      doSomethingElse()
  }

  switch (filter) {
    case 1:
      doSomething()
      break           // ✓ ok
    case 2:
      doSomethingElse()
  }

  switch (filter) {
    case 1:
      doSomething()
      // fallthrough  // ✓ ok
    case 2:
      doSomethingElse()
  }
  ```

* **Tidak ada _floating decimals_.**

  eslint: [`no-floating-decimal`](http://eslint.org/docs/rules/no-floating-decimal)

  ```js
  const discount = .5      // ✗ hindari
  const discount = 0.5     // ✓ ok
  ```

* **Hindari memasukan ulang deklarasi fungsi.**

  eslint: [`no-func-assign`](http://eslint.org/docs/rules/no-func-assign)

  ```js
  function myFunc () { }
  myFunc = myOtherFunc    // ✗ hindari
  ```

* **Tidak memasukan ulang variabel global yang bersifat _read-only_.**

  eslint: [`no-global-assign`](http://eslint.org/docs/rules/no-global-assign)

  ```js
  window = {}     // ✗ hindari
  ```

* **Tidak ada `eval()` yang disisipkan.**

  eslint: [`no-implied-eval`](http://eslint.org/docs/rules/no-implied-eval)

  ```js
  setTimeout("alert('Hello world')")                   // ✗ hindari
  setTimeout(function () { alert('Hello world') })     // ✓ ok
  ```

* **Tidak ada deklarasi fungsi didalam blok bersarang.**

  eslint: [`no-inner-declarations`](http://eslint.org/docs/rules/no-inner-declarations)

  ```js
  if (authenticated) {
    function setAuthUser () {}    // ✗ hindari
  }
  ```

* **Tidak ada _string regular expression_ yang _invalid_ didalam konstruktor `RegExp`.**

  eslint: [`no-invalid-regexp`](http://eslint.org/docs/rules/no-invalid-regexp)

  ```js
  RegExp('[a-z')    // ✗ hindari
  RegExp('[a-z]')   // ✓ ok
  ```

* **Tidak ada _whitespace_ yang tidak teratur.**

  eslint: [`no-irregular-whitespace`](http://eslint.org/docs/rules/no-irregular-whitespace)

  ```js
  function myFunc () /*<NBSP>*/{}   // ✗ hindari
  ```

* **Tidak ada penggunaan `__iterator__`.**

  eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)

  ```js
  Foo.prototype.__iterator__ = function () {}   // ✗ hindari
  ```

* **Tidak ada label dengan nama yang sama didalam _scope_ variabel.**

  eslint: [`no-label-var`](http://eslint.org/docs/rules/no-label-var)

  ```js
  var score = 100
  function game () {
    score: while (true) {      // ✗ hindari
      score -= 10
      if (score > 0) continue score
      break
    }
  }
  ```

* **Tidak ada statemen label.**

  eslint: [`no-labels`](http://eslint.org/docs/rules/no-labels)

  ```js
  label:
    while (true) {
      break label     // ✗ hindari
    }
  ```

* **Tidak ada blok bersarang yang tidak dibutuhkan.**

  eslint: [`no-lone-blocks`](http://eslint.org/docs/rules/no-lone-blocks)

  ```js
  function myFunc () {
    {                   // ✗ hindari
      myOtherFunc()
    }
  }

  function myFunc () {
    myOtherFunc()       // ✓ ok
  }
  ```

* **Hindari mencampurkan spasi dan _tabs_ untuk indentasi.**

  eslint: [`no-mixed-spaces-and-tabs`](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

* **Tidak diperbolehkan menggunakan spasi ganda kecuali untuk indentasi.**

  eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces)

  ```js
  const id =    1234    // ✗ hindari
  const id = 1234       // ✓ ok
  ```

* **Tidak ada string yang _multiline_.**

  eslint: [`no-multi-str`](http://eslint.org/docs/rules/no-multi-str)

  ```js
  const message = 'Hello \
                   world'     // ✗ hindari
  ```

* **Tidak ada `new` tanpa memasukan objek kedalam sebuah variabel.**

  eslint: [`no-new`](http://eslint.org/docs/rules/no-new)

  ```js
  new Character()                     // ✗ hindari
  const character = new Character()   // ✓ ok
  ```

* **Tidak menggunakan konstruktor `Function`.**

  eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func)

  ```js
  var sum = new Function('a', 'b', 'return a + b')    // ✗ hindari
  ```

* **Tidak menggunakan konstruktor `Object`.**

  eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object)

  ```js
  let config = new Object()   // ✗ hindari
  ```

* **tidak ada penggunaan `new require`.**

  eslint: [`no-new-require`](http://eslint.org/docs/rules/no-new-require)

  ```js
  const myModule = new require('my-module')    // ✗ hindari
  ```

* **Tidak ada penggunaan konstruktor `Symbol`.**

  eslint: [`no-new-symbol`](http://eslint.org/docs/rules/no-new-symbol)

  ```js
  const foo = new Symbol('foo')   // ✗ hindari
  ```

* **Tidak ada penggunaan pembungkus primitiv.**

  eslint: [`no-new-wrappers`](http://eslint.org/docs/rules/no-new-wrappers)

  ```js
  const message = new String('hello')   // ✗ hindari
  ```

* **Tidak memanggil properti objek global sebagai sebuah fungsi.**

  eslint: [`no-obj-calls`](http://eslint.org/docs/rules/no-obj-calls)

  ```js
  const math = Math()   // ✗ hindari
  ```

* **Tidak ada literal _octal_.**

  eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal)

  ```js
  const octal = 042         // ✗ hindari
  const decimal = 34        // ✓ ok
  const octalString = '042' // ✓ ok
  ```

* **Tidak ada tanda _escape_ untuk _octal_ didalam literal _string_.**

  eslint: [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape)

  ```js
  const copyright = 'Copyright \251'  // ✗ hindari
  ```

* **Hindari penggabungan string ketika menggunakan `__dirname` dan `__filename`.**

  eslint: [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat)

  ```js
  const pathToFile = __dirname + '/app.js'            // ✗ hindari
  const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok
  ```

* **Hindari menggunakan `__proto__`.** Lebih baik gunakan `getPrototypeOf`.

  eslint: [`no-proto`](http://eslint.org/docs/rules/no-proto)

  ```js
  const foo = obj.__proto__               // ✗ hindari
  const foo = Object.getPrototypeOf(obj)  // ✓ ok
  ```

* **Tidak ada pendeklarasian ulang variabel.**

  eslint: [`no-redeclare`](http://eslint.org/docs/rules/no-redeclare)

  ```js
  let name = 'John'
  let name = 'Jane'     // ✗ hindari

  let name = 'John'
  name = 'Jane'         // ✓ ok
  ```

* **Hindari penggunaan spasi ganda didalam literal _regular expressions_.**

  eslint: [`no-regex-spaces`](http://eslint.org/docs/rules/no-regex-spaces)

  ```js
  const regexp = /test   value/   // ✗ hindari

  const regexp = /test {3}value/  // ✓ ok
  const regexp = /test value/     // ✓ ok
  ```

* **_Assignments_ didalam statemen _return_ harus dibungkus dengan kurung.**

  eslint: [`no-return-assign`](http://eslint.org/docs/rules/no-return-assign)

  ```js
  function sum (a, b) {
    return result = a + b     // ✗ hindari
  }

  function sum (a, b) {
    return (result = a + b)   // ✓ ok
  }
  ```

* **Hindari memasukan variabel kedalam dirinya-sendiri**

  eslint: [`no-self-assign`](http://eslint.org/docs/rules/no-self-assign)

  ```js
  name = name   // ✗ hindari
  ```

* **Hindari persamaan variabel dengan dirinya-sendiri.**

  eslint: [`no-self-compare`](http://eslint.org/docs/rules/no-self-compare)

  ```js
  if (score === score) {}   // ✗ hindari
  ```

* **Hindari penggunaan operator koma.**

  eslint: [`no-sequences`](http://eslint.org/docs/rules/no-sequences)

  ```js
  if (doSomething(), !!test) {}   // ✗ hindari
  ```

* **Penamaan yang bersifat _restricted_ tidak diperbolehkan.**

  eslint: [`no-shadow-restricted-names`](http://eslint.org/docs/rules/no-shadow-restricted-names)

  ```js
  let undefined = 'value'     // ✗ hindari
  ```

* **Nilai kosong didalam array tidak diperbolehkan.**

  eslint: [`no-sparse-arrays`](http://eslint.org/docs/rules/no-sparse-arrays)

  ```js
  let fruits = ['apple',, 'orange']       // ✗ hindari
  ```

* **_Tabs_ seharusnya tidak boleh digunakan**

  eslint: [`no-tabs`](http://eslint.org/docs/rules/no-tabs)

* **String _regular_ tidak boleh mengandung _template literal_.**

  eslint: [`no-template-curly-in-string`](http://eslint.org/docs/rules/no-template-curly-in-string)

  ```js
  const message = 'Hello ${name}'   // ✗ hindari
  const message = `Hello ${name}`   // ✓ ok
  ```

* **`super()` harus dipanggil sebelum menggunakan `this`.**

  eslint: [`no-this-before-super`](http://eslint.org/docs/rules/no-this-before-super)

  ```js
  class Dog extends Animal {
    constructor () {
      this.legs = 4     // ✗ hindari
      super()
    }
  }
  ```

* **Hanya `throw` sebuah objek `Error`.**

  eslint: [`no-throw-literal`](http://eslint.org/docs/rules/no-throw-literal)

  ```js
  throw 'error'               // ✗ hindari
  throw new Error('error')    // ✓ ok
  ```

* **_Whitespace_ tidak diperbolehkan pada akhiran baris.**

  eslint: [`no-trailing-spaces`](http://eslint.org/docs/rules/no-trailing-spaces)

* **Menginisialisasi `undefined` tidak diperbolehkan.**

  eslint: [`no-undef-init`](http://eslint.org/docs/rules/no-undef-init)

  ```js
  let name = undefined    // ✗ hindari

  let name
  name = 'value'          // ✓ ok
  ```

* **Tidak ada kondisi pada perulangan yang tidak berubah.**

  eslint: [`no-unmodified-loop-condition`](http://eslint.org/docs/rules/no-unmodified-loop-condition)

  ```js
  for (let i = 0; i < items.length; j++) {...}    // ✗ hindari
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

* **Tidak ada operator ternary ketika alternative yang lebih simple ada.**

  eslint: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary)

  ```js
  let score = val ? val : 0     // ✗ hindari
  let score = val || 0          // ✓ ok
  ```

* **Tidak ada kode yang tidak bisa dijangkau setelah statemen `return`, `throw`, `continue`, and `break` statements.**

  eslint: [`no-unreachable`](http://eslint.org/docs/rules/no-unreachable)

  ```js
  function doSomething () {
    return true
    console.log('never called')     // ✗ hindari
  }
  ```

* **Tidak ada statemen _flow control_ didalam blok `finally`.**

  eslint: [`no-unsafe-finally`](http://eslint.org/docs/rules/no-unsafe-finally)

  ```js
  try {
    // ...
  } catch (e) {
    // ...
  } finally {
    return 42     // ✗ hindari
  }
  ```

* **Operan sisi kiri dari operator relasional harus bukanlah negatif.**

  eslint: [`no-unsafe-negation`](http://eslint.org/docs/rules/no-unsafe-negation)

  ```js
  if (!key in obj) {}       // ✗ hindari
  if (!(key in obj)) {}     // ✓ ok
  ```

* **Avoid unnecessary use of `.call()` and `.apply()`.**
* **Hindari penggunaan dari `.call()` dan `.apply()`.**

  eslint: [`no-useless-call`](http://eslint.org/docs/rules/no-useless-call)

  ```js
  sum.call(null, 1, 2, 3)   // ✗ hindari
  ```

* **Hindari penggunaan dari komputasi properti _keys_ didalam objek yang tidak dibutuhkan.**

  eslint: [`no-useless-computed-key`](http://eslint.org/docs/rules/no-useless-computed-key)

  ```js
  const user = { ['name']: 'John Doe' }   // ✗ hindari
  const user = { name: 'John Doe' }       // ✓ ok
  ```

* **Tidak ada konstruktor yang tidak dibutuhkan.**

  eslint: [`no-useless-constructor`](http://eslint.org/docs/rules/no-useless-constructor)

  ```js
  class Car {
    constructor () {      // ✗ hindari
    }
  }
  ```

* **Hindari penggunaan dari karakter _escape_ yang tidak dibutuhkan.**

  eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape)

  ```js
  let message = 'Hell\o'  // ✗ hindari
  ```

* **Menamai ulang _import_, _export_, and _destructured assignments_ dengan nama yang sama tidak diperbolehkan.**

  eslint: [`no-useless-rename`](http://eslint.org/docs/rules/no-useless-rename)

  ```js
  import { config as config } from './config'     // ✗ hindari
  import { config } from './config'               // ✓ ok
  ```

* **Tidak ada _whitespace_ sebelum properti.**

  eslint: [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)

  ```js
  user .name      // ✗ hindari
  user.name       // ✓ ok
  ```

* **Tidak menggunakan statemen `with`.**

  eslint: [`no-with`](http://eslint.org/docs/rules/no-with)

  ```js
  with (val) {...}    // ✗ hindari
  ```

* **Pertahankan konsistensi dari baris baru diantara properti objek.**

  eslint: [`object-property-newline`](http://eslint.org/docs/rules/object-property-newline)

  ```js
  const user = {
    name: 'Jane Doe', age: 30,
    username: 'jdoe86'            // ✗ hindari
  }

  const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ ok

  const user = {
    name: 'Jane Doe',
    age: 30,
    username: 'jdoe86'
  }                                                                 // ✓ ok
  ```

* **Tidak ada _padding_ diantara blok.**

  eslint: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks)

  ```js
  if (user) {
                              // ✗ hindari
    const name = getName()

  }

  if (user) {
    const name = getName()    // ✓ ok
  }
  ```

* **Tidak ada _whitespace_ diantara operator _spread_ dan ekspresinya.**

  eslint: [`rest-spread-spacing`](http://eslint.org/docs/rules/rest-spread-spacing)

  ```js
  fn(... args)    // ✗ hindari
  fn(...args)     // ✓ ok
  ```

* **_Semicolons_ harus memiliki spasi setelah dan tidak ada spasi sebelumnya.**

  eslint: [`semi-spacing`](http://eslint.org/docs/rules/semi-spacing)

  ```js
  for (let i = 0 ;i < items.length ;i++) {...}    // ✗ hindari
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

* **Harus ada spasi sebelum blok.**

  eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

  ```js
  if (admin){...}     // ✗ hindari
  if (admin) {...}    // ✓ ok
  ```

* **Tidak ada spasi didalam kurung.**

  eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens)

  ```js
  getName( name )     // ✗ hindari
  getName(name)       // ✓ ok
  ```

* **Operator _unary_ harus memiliki spasi setelahnya.**

  eslint: [`space-unary-ops`](http://eslint.org/docs/rules/space-unary-ops)

  ```js
  typeof!admin        // ✗ hindari
  typeof !admin        // ✓ ok
  ```

* **Gunakan spasi didalam komentar.**

  eslint: [`spaced-comment`](http://eslint.org/docs/rules/spaced-comment)

  ```js
  //comment           // ✗ hindari
  // comment          // ✓ ok

  /*comment*/         // ✗ hindari
  /* comment */       // ✓ ok
  ```

* **Tidak ada spasi didalam _template string_.**

  eslint: [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)

  ```js
  const message = `Hello, ${ name }`    // ✗ hindari
  const message = `Hello, ${name}`      // ✓ ok
  ```

* **Gunakan `isNaN()` ketika memeriksa `NaN`.**

  eslint: [`use-isnan`](http://eslint.org/docs/rules/use-isnan)

  ```js
  if (price === NaN) { }      // ✗ hindari
  if (isNaN(price)) { }       // ✓ ok
  ```

* **`typeof` harus dibandingkan dengan string yang valid.**

  eslint: [`valid-typeof`](http://eslint.org/docs/rules/valid-typeof)

  ```js
  typeof name === 'undefimed'     // ✗ hindari
  typeof name === 'undefined'     // ✓ ok
  ```

* **_Immediately Invoked Function Expressions_ (IIFEs) harus dibungkus.**

  eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife)

  ```js
  const getName = function () { }()     // ✗ hindari

  const getName = (function () { }())   // ✓ ok
  const getName = (function () { })()   // ✓ ok
  ```

* **Tanda `*` didalam ekspresi `yield*`harus memiliki spasi sebelum dan sesudahnya.**

  eslint: [`yield-star-spacing`](http://eslint.org/docs/rules/yield-star-spacing)

  ```js
  yield* increment()    // ✗ hindari
  yield * increment()   // ✓ ok
  ```

* **Hindari kondisi _Yoda_.**

  eslint: [`yoda`](http://eslint.org/docs/rules/yoda)

  ```js
  if (42 === age) { }    // ✗ hindari
  if (age === 42) { }    // ✓ ok
  ```

## Semicolons

* Tidak ada _semicolons_. (see: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](https://web.archive.org/web/20201206065632/http://inimino.org/~inimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  eslint: [`semi`](http://eslint.org/docs/rules/semi)

  ```js
  window.alert('hi')   // ✓ ok
  window.alert('hi');  // ✗ hindari
  ```

* Jangan pernah memulai baris dengan `(`, `[`, `` ` ``, atau segelintir kode yang mirip lainnya.

  Ini adalah hal yang terjadi dengan menghilangkan _semicolons_, dan `standard` melindungi kamu dari potensi masalah ini.

  (Daftar penuhnya adalah : `[`, `(`, `` ` ``, `+`, `*`, `/`, `-`, `,`, `.`, tapi kebanyakan dari ini tidak pernah muncul pada awal baris didalam kode yang sesungguhnya.)

  eslint: [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline)

  ```js
  // ✓ ok
  ;(function () {
    window.alert('ok')
  }())

  // ✗ hindari
  (function () {
    window.alert('ok')
  }())
  ```

  ```js
  // ✓ ok
  ;[1, 2, 3].forEach(bar)

  // ✗ hindari
  [1, 2, 3].forEach(bar)
  ```

  ```js
  // ✓ ok
  ;`hello`.indexOf('o')

  // ✗ hindari
  `hello`.indexOf('o')
  ```

  Catatan: Jika kamu sering menulis kode seperti ini, kamu mungkin mencoba terlalu jauh.

  Percobaan yang asal-asalan tidak direkomendasikan, dengan alasan dari kebersihan dan keterbacaan kode, kapanpun itu.

  Daripada seperti ini:

  ```js
  ;[1, 2, 3].forEach(bar)
  ```

  Contoh dibawah lebih direkomendasikan:

  ```js
  var nums = [1, 2, 3]
  nums.forEach(bar)
  ```


## Bacaan lanjutan

- [An Open Letter to JavaScript Leaders Regarding Semicolons][1]
- [JavaScript Semicolon Insertion – Everything you need to know][2]

##### Video tambahan:

- [Are Semicolons Necessary in JavaScript? - YouTube][3]

Seluruh _minifier_ kode yang terkenal dan digunakan sekarang menggunakan _AST-based minification_, jadi mereka dapat menangani Javascript tanpa semicolon dengan lancar (sejak semicolon tidak wajib didalam Javascript).

##### Kutipan dari *["An Open Letter to JavaScript Leaders Regarding Semicolons"][1]*:

> [Bergantung kepada pemasukan semicolon otomatis] cukup aman, dan bagus untuk JS yang valid yang mana setiap _browser_ mengerti. _Closure compiler, yuicompressor, packer, and jsmin_ semuadapat secara mudah me-_minify_. Tidak ada masalah dalam performansi.
>
> Maaf, daripada mengedukasi kamu, orang yang memimpin komunitas bahasa ini telah memberikan kamu kebohongan dan ketakutan. Itu adalah hal yang mememalukan. Saya merekomendasikan belajar bagaimana statemen didalam Javascript diakhiri (dan dimana saat mereka tidak diakhiri), jadi kamu bisa menulis kode yang menurutmu indah.
>
> Secara umum, `\n` mengakhiri statemen kecuali:
>   1. Statemennya memiliki parent yang belum ditutup, literal array, atau objek literal atau berakhir di suatu tempat,
>      other way that is not a valid way to end a statement. (For instance, ending with `.`
>      cara lainnya bukanlah cara yang valid untuk mengakhiri statemen. (Contoh, berakhir dengan `.`
>      atau `,`.)
>   2. Barisnya adalah `--` atau `++` (yang mana akan melakukan incement/decrement token selanjutnya.)
>   3. Ini adalah `for()`, `while()`, `do`, `if()`, atau `else`, dan tidak ada `{`
>   4. Baris selanjutnya dimulai dengan `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, atau
>      operator biner yang bisa hanya ditemukan diantara dua token didalam ekspresi tunggal.
>
> Hal yang pertama cukup jelas. Bahkan JSLint ok dengan hal karakter `\n` didalam JSON dan konstruksi tanda kurung, dan dengan statemen `var` yang menjangkau beberapa baris dan berakhir dengan `,`.
>
> Yang kedua super aneh. Saya tidak pernah melihat sebuah kasus (diluar dari pembahasan ini). ketika kamu ingin menulis `i\n++\nj`, tapi, faktanya, potongan kode itu diurai menjadi `i; ++j`, bukan `i++; j`.
>
> Yang ketiga mudah dipahami, jika secara umum tidak disukai. `if (x)\ny()` sama dengan `if (x) { y() }`. Konstruksinya tidak berakhir sampai itu mencapai blok lainnya, atau sebuah statemen.
>
> `;` adalah statemen Javascript yang valid, jadi `if(x);` adalah sama dengan `if(x){}` atau, “Jika x, tidak melakukan apapun.” Hal ini lebih banyak digunakan didalam perulangan dimana perulangannya juga memeriksa apakah fungsinya update. Tidak biasa, tapi bukannya belum pernah dengar.
>
> Yang keempat secara umum sama seperti kasus “oh tidak, kamu butuh semicolon!”. Tapi, seperti yang terjadi, cukup mudah untuk *membetulkan* barisnya dengan semicolon jika kamu tidak mengartikan barisnya adalah lanjutan dari baris sebelumnya. Contoh, daripada:
>
> ```js
> foo();
> [1,2,3].forEach(bar);
> ```
>
> Kamu bisa melakukan hal ini:
>
> ```js
> foo()
> ;[1,2,3].forEach(bar)
> ```
>
> Keuntungannya adalah _prefix_nya mudah untuk diperhatikan, sekalinya kamu telah terbiasa melihat baris yang dimulai tanpa `(` atau `[` tanpa semicolon.

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: https://web.archive.org/web/20201206065632/http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
