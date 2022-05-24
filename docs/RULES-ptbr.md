# JavaScript Standard Style

<p align="center">
  <a href="/docs/RULES-en.md">English</a> •
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

Este é um resumo das regras do JavaScript [standard](https://github.com/standard/standard).

A melhor maneira de aprender sobre o `standard` é apenas instalá-lo e experimentá-lo em seu código.

## Regras

* **Use 2 espaços** para identação.

  eslint: [`indent`](http://eslint.org/docs/rules/indent)

  ```js
  function hello (name) {
    console.log('hi', name)
  }
  ```

* **Use aspas simples para strings**, exceto para evitar escape.

  eslint: [`quotes`](http://eslint.org/docs/rules/quotes)

  ```js
  console.log('hello there')    // ✓ ok
  console.log("hello there")    // ✗ evitar
  console.log(`hello there`)    // ✗ evitar

  $("<div class='box'>")        // ✓ ok
  console.log(`hello ${name}`)  // ✓ ok
  ```

* **Sem variável não utilizada.**

  eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars)

  ```js
  function myFunction () {
    var result = something()   // ✗ evitar
  }
  ```

* **Adicione um espaço após as palavras-chave.**

  eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing)

  ```js
  if (condition) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ evitar
  ```

* **Adicione um espaço antes dos parênteses de uma declaração de função.**

  eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren)

  ```js
  function name (arg) { ... }   // ✓ ok
  function name(arg) { ... }    // ✗ evitar

  run(function () { ... })      // ✓ ok
  run(function() { ... })       // ✗ evitar
  ```

* **Sempre use** `===` em vez de `==`.<br>
  Exceção: `obj == null` tem permissão para verificar `null || undefined`.

  eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq)

  ```js
  if (name === 'John')   // ✓ ok
  if (name == 'John')    // ✗ evitar
  ```

  ```js
  if (name !== 'John')   // ✓ ok
  if (name != 'John')    // ✗ evitar
  ```

* **Operadores infixos** devem ser espaçados.

  eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops)

  ```js
  // ✓ ok
  var x = 2
  var message = 'hello, ' + name + '!'
  ```

  ```js
  // ✗ evitar
  var x=2
  var message = 'hello, '+name+'!'
  ```

* **As vírgulas devem ter um espaço** depois delas.

  eslint: [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing)

  ```js
  // ✓ ok
  var list = [1, 2, 3, 4]
  function greet (name, options) { ... }
  ```

  ```js
  // ✗ evitar
  var list = [1,2,3,4]
  function greet (name,options) { ... }
  ```

* **Mantenha as instruções else** na mesma linha das suas chaves.

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
  // ✗ evitar
  if (condition) {
    // ...
  }
  else {
    // ...
  }
  ```

* **Para instruções if com várias linhas,** use chaves.

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
  // ✗ evitar
  if (options.quiet !== true)
    console.log('done')
  ```

* **Sempre trate o** parâmetro `err` da função.

  eslint: [`handle-callback-err`](http://eslint.org/docs/rules/handle-callback-err)

  ```js
  // ✓ ok
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })
  ```

  ```js
  // ✗ evitar
  run(function (err) {
    window.alert('done')
  })
  ```

* **Declare globais do navegador** com um comentário `/* global */`.<br>
  As exceções são: `window`, `document` e `navigator`.<br>
  Impede o uso acidental de globais de navegador mal nomeados como `open`, `length`,
  `event` e `name`.

  ```js
  /* global alert, prompt */

  alert('hi')
  prompt('ok?')
  ```

  Referenciar explicitamente a função ou propriedade em `window` também está bem, embora
  tal código não será executado em um Worker que usa `self` em vez de `window`.

  eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

  ```js
  window.alert('hi')   // ✓ ok
  ```

* **Não são permitidas várias linhas em branco.**

  eslint: [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines)

  ```js
  // ✓ ok
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ evitar
  var value = 'hello world'
  // blank line
  // blank line
  console.log(value)
  ```

* **Para o operador ternário** em uma configuração de várias linhas, coloque `?` e `:` em suas próprias linhas.

  eslint: [`operator-linebreak`](http://eslint.org/docs/rules/operator-linebreak)

  ```js
  // ✓ ok
  var location = env.development ? 'localhost' : 'www.api.com'

  // ✓ ok
  var location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ evitar
  var location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **Para declarações var,** escreva cada declaração em sua própria declaração.

  eslint: [`one-var`](http://eslint.org/docs/rules/one-var)

  ```js
  // ✓ ok
  var silent = true
  var verbose = true

  // ✗ evitar
  var silent = true, verbose = true

  // ✗ evitar
  var silent = true,
      verbose = true
  ```

* **Envolva atribuições condicionais** com parênteses adicionais. Isso deixa claro que a expressão é intencionalmente uma atribuição (`=`) em vez de um erro de digitação para igualdade (`===`).

  eslint: [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign)

  ```js
  // ✓ ok
  while ((m = text.match(expr))) {
    // ...
  }

  // ✗ evitar
  while (m = text.match(expr)) {
    // ...
  }
  ```

* **Adicione espaços dentro de blocos de linha única.**

  eslint: [`block-spacing`](http://eslint.org/docs/rules/block-spacing)

  ```js
    function foo () {return true}    // ✗ evitar
    function foo () { return true }  // ✓ ok
  ```

* **Use camelcase ao nomear variáveis e funções.**

  eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase)

  ```js
    function my_function () { }    // ✗ evitar
    function myFunction () { }     // ✓ ok

    var my_var = 'hello'           // ✗ evitar
    var myVar = 'hello'            // ✓ ok
  ```

* **Vírgulas à direita não são permitidas.**

  eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

  ```js
    var obj = {
      message: 'hello',   // ✗ evitar
    }
  ```

* **As vírgulas devem ser colocadas no final da linha atual.**

  eslint: [`comma-style`](http://eslint.org/docs/rules/comma-style)

  ```js
    var obj = {
      foo: 'foo'
      ,bar: 'bar'   // ✗ evitar
    }

    var obj = {
      foo: 'foo',
      bar: 'bar'   // ✓ ok
    }
  ```

* **O ponto deve estar na mesma linha que a propriedade.**

  eslint: [`dot-location`](http://eslint.org/docs/rules/dot-location)

  ```js
    console.
      log('hello')  // ✗ evitar

    console
      .log('hello') // ✓ ok
  ```

* **Os arquivos devem terminar com uma nova linha.**

  eslint: [`eol-last`](http://eslint.org/docs/rules/eol-last)

* **Sem espaço entre os identificadores de função e suas invocações.**

  eslint: [`func-call-spacing`](http://eslint.org/docs/rules/func-call-spacing)

  ```js
  console.log ('hello') // ✗ evitar
  console.log('hello')  // ✓ ok
  ```

* **Adicione espaço entre dois pontos e valor nos pares de valores-chave.**

  eslint: [`key-spacing`](http://eslint.org/docs/rules/key-spacing)

  ```js
  var obj = { 'key' : 'value' }    // ✗ evitar
  var obj = { 'key' :'value' }     // ✗ evitar
  var obj = { 'key':'value' }      // ✗ evitar
  var obj = { 'key': 'value' }     // ✓ ok
  ```

* **Os nomes dos construtores devem começar com letra maiúscula.**

  eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap)

  ```js
  function animal () {}
  var dog = new animal()    // ✗ evitar

  function Animal () {}
  var dog = new Animal()    // ✓ ok
  ```

* **O construtor sem argumentos deve ser invocado entre parênteses.**

  eslint: [`new-parens`](http://eslint.org/docs/rules/new-parens)

  ```js
  function Animal () {}
  var dog = new Animal    // ✗ evitar
  var dog = new Animal()  // ✓ ok
  ```

* **Os objetos devem conter um getter quando um setter é definido.**

  eslint: [`accessor-pairs`](http://eslint.org/docs/rules/accessor-pairs)

  ```js
  var person = {
    set name (value) {    // ✗ evitar
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

* **Construtores de classes derivadas devem chamar `super`.**

  eslint: [`constructor-super`](http://eslint.org/docs/rules/constructor-super)

  ```js
  class Dog {
    constructor () {
      super()             // ✗ evitar
      this.legs = 4
    }
  }

  class Dog extends Animal {
    constructor () {      // ✗ evitar
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

* **Use arrays literais em vez de construtores de Array.**

  eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor)

  ```js
  var nums = new Array(1, 2, 3)   // ✗ evitar
  var nums = [1, 2, 3]            // ✓ ok
  ```

* **Evite usar `arguments.callee` e `arguments.caller`.**

  eslint: [`no-caller`](http://eslint.org/docs/rules/no-caller)

  ```js
  function foo (n) {
    if (n <= 0) return

    arguments.callee(n - 1)   // ✗ evitar
  }

  function foo (n) {
    if (n <= 0) return

    foo(n - 1)                // ✓ ok
  }
  ```

* **Evite modificar variáveis de declarações de classe.**

  eslint: [`no-class-assign`](http://eslint.org/docs/rules/no-class-assign)

  ```js
  class Dog {}
  Dog = 'Fido'    // ✗ evitar
  ```

* **Evite modificar variáveis declaradas usando `const`.**

  eslint: [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign)

  ```js
  const score = 100
  score = 125       // ✗ evitar
  ```

* **Evite usar expressões constantes em condições (exceto loops).**

  eslint: [`no-constant-condition`](http://eslint.org/docs/rules/no-constant-condition)

  ```js
  if (false) {    // ✗ evitar
    // ...
  }

  if (x === 0) {  // ✓ ok
    // ...
  }

  while (true) {  // ✓ ok
    // ...
  }
  ```

* **Sem caracteres de controle em expressões regulares.**

  eslint: [`no-control-regex`](http://eslint.org/docs/rules/no-control-regex)

  ```js
  var pattern = /\x1f/    // ✗ evitar
  var pattern = /\x20/    // ✓ ok
  ```

* **Nenhuma instrução `debugger`.**

  eslint: [`no-debugger`](http://eslint.org/docs/rules/no-debugger)

  ```js
  function sum (a, b) {
    debugger      // ✗ evitar
    return a + b
  }
  ```

* **Nenhum operador `delete` nas variáveis.**

  eslint: [`no-delete-var`](http://eslint.org/docs/rules/no-delete-var)

  ```js
  var name
  delete name     // ✗ evitar
  ```

* **Nenhum argumento duplicado nas definições de função.**

  eslint: [`no-dupe-args`](http://eslint.org/docs/rules/no-dupe-args)

  ```js
  function sum (a, b, a) {  // ✗ evitar
    // ...
  }

  function sum (a, b, c) {  // ✓ ok
    // ...
  }
  ```

* **Nenhum nome duplicado nos membros da classe.**

  eslint: [`no-dupe-class-members`](http://eslint.org/docs/rules/no-dupe-class-members)

  ```js
  class Dog {
    bark () {}
    bark () {}    // ✗ evitar
  }
  ```

* **Nenhuma chave duplicada em literais de objeto.**

  eslint: [`no-dupe-keys`](http://eslint.org/docs/rules/no-dupe-keys)

  ```js
  var user = {
    name: 'Jane Doe',
    name: 'John Doe'    // ✗ evitar
  }
  ```

* **Nenhum rótulo `case` duplicado em instruções `switch`.**

  eslint: [`no-duplicate-case`](http://eslint.org/docs/rules/no-duplicate-case)

  ```js
  switch (id) {
    case 1:
      // ...
    case 1:     // ✗ evitar
  }
  ```

* **Use uma única instrução de importação por módulo.**

  eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

  ```js
  import { myFunc1 } from 'module'
  import { myFunc2 } from 'module'          // ✗ evitar

  import { myFunc1, myFunc2 } from 'module' // ✓ ok
  ```

* **Nenhuma classe de caracteres vazia em expressões regulares.**

  eslint: [`no-empty-character-class`](http://eslint.org/docs/rules/no-empty-character-class)

  ```js
  const myRegex = /^abc[]/      // ✗ evitar
  const myRegex = /^abc[a-z]/   // ✓ ok
  ```

* **Nenhum padrão de desestruturação vazio.**

  eslint: [`no-empty-pattern`](http://eslint.org/docs/rules/no-empty-pattern)

  ```js
  const { a: {} } = foo         // ✗ evitar
  const { a: { b } } = foo      // ✓ ok
  ```

* **Não use `eval()`.**

  eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

  ```js
  eval( "var result = user." + propName ) // ✗ evitar
  var result = user[propName]             // ✓ ok
  ```

* **Não reatribuir exceções em cláusulas `catch`.**

  eslint: [`no-ex-assign`](http://eslint.org/docs/rules/no-ex-assign)

  ```js
  try {
    // ...
  } catch (e) {
    e = 'new value'             // ✗ evitar
  }

  try {
    // ...
  } catch (e) {
    const newVal = 'new value'  // ✓ ok
  }
  ```

* **Não extender objetos nativos.**

  eslint: [`no-extend-native`](http://eslint.org/docs/rules/no-extend-native)

  ```js
  Object.prototype.age = 21     // ✗ evitar
  ```

* **Evite vinculação de função desnecessária.**

  eslint: [`no-extra-bind`](http://eslint.org/docs/rules/no-extra-bind)

  ```js
  const name = function () {
    getName()
  }.bind(user)    // ✗ evitar

  const name = function () {
    this.getName()
  }.bind(user)    // ✓ ok
  ```

* **Evite conversões booleanas desnecessárias.**

  eslint: [`no-extra-boolean-cast`](http://eslint.org/docs/rules/no-extra-boolean-cast)

  ```js
  const result = true
  if (!!result) {   // ✗ evitar
    // ...
  }

  const result = true
  if (result) {     // ✓ ok
    // ...
  }
  ```

* **Sem parênteses desnecessários em volta de expressões de função.**

  eslint: [`no-extra-parens`](http://eslint.org/docs/rules/no-extra-parens)

  ```js
  const myFunc = (function () { })   // ✗ evitar
  const myFunc = function () { }     // ✓ ok
  ```

* **Use `break` para evitar falhas em cases `switch`.**

  eslint: [`no-fallthrough`](http://eslint.org/docs/rules/no-fallthrough)

  ```js
  switch (filter) {
    case 1:
      doSomething()    // ✗ evitar
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

* **Sem decimais flutuantes.**

  eslint: [`no-floating-decimal`](http://eslint.org/docs/rules/no-floating-decimal)

  ```js
  const discount = .5      // ✗ evitar
  const discount = 0.5     // ✓ ok
  ```

* **Evite reatribuir declarações de função.**

  eslint: [`no-func-assign`](http://eslint.org/docs/rules/no-func-assign)

  ```js
  function myFunc () { }
  myFunc = myOtherFunc    // ✗ evitar
  ```

* **Não reatribuir variáveis globais somente leitura.**

  eslint: [`no-global-assign`](http://eslint.org/docs/rules/no-global-assign)

  ```js
  window = {}     // ✗ evitar
  ```

* **Nenhum `eval()` implícito.**

  eslint: [`no-implied-eval`](http://eslint.org/docs/rules/no-implied-eval)

  ```js
  setTimeout("alert('Hello world')")                   // ✗ evitar
  setTimeout(function () { alert('Hello world') })     // ✓ ok
  ```

* **Nenhuma declaração de função em blocos aninhados.**

  eslint: [`no-inner-declarations`](http://eslint.org/docs/rules/no-inner-declarations)

  ```js
  if (authenticated) {
    function setAuthUser () {}    // ✗ evitar
  }
  ```

* **Nenhuma string de expressão regular inválida nos construtores `RegExp`.**

  eslint: [`no-invalid-regexp`](http://eslint.org/docs/rules/no-invalid-regexp)

  ```js
  RegExp('[a-z')    // ✗ evitar
  RegExp('[a-z]')   // ✓ ok
  ```

* **Sem espaços em branco irregulares.**

  eslint: [`no-irregular-whitespace`](http://eslint.org/docs/rules/no-irregular-whitespace)

  ```js
  function myFunc () /*<NBSP>*/{}   // ✗ evitar
  ```

* **Não use `__iterator__`.**

  eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)

  ```js
  Foo.prototype.__iterator__ = function () {}   // ✗ evitar
  ```

* **Nenhum rótulo que compartilhe um nome com uma variável no escopo.**

  eslint: [`no-label-var`](http://eslint.org/docs/rules/no-label-var)

  ```js
  var score = 100
  function game () {
    score: while (true) {      // ✗ evitar
      score -= 10
      if (score > 0) continue score
      break
    }
  }
  ```

* **Sem declarações de rótulos.**

  eslint: [`no-labels`](http://eslint.org/docs/rules/no-labels)

  ```js
  label:
    while (true) {
      break label     // ✗ evitar
    }
  ```

* **Nenhum bloco aninhado desnecessário.**

  eslint: [`no-lone-blocks`](http://eslint.org/docs/rules/no-lone-blocks)

  ```js
  function myFunc () {
    {                   // ✗ evitar
      myOtherFunc()
    }
  }

  function myFunc () {
    myOtherFunc()       // ✓ ok
  }
  ```

* **Evite misturar espaços e tabulações para identação.**

  eslint: [`no-mixed-spaces-and-tabs`](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

* **Não use vários espaços, exceto para identação.**

  eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces)

  ```js
  const id =    1234    // ✗ evitar
  const id = 1234       // ✓ ok
  ```

* **Sem strings de várias linhas.**

  eslint: [`no-multi-str`](http://eslint.org/docs/rules/no-multi-str)

  ```js
  const message = 'Hello \
                   world'     // ✗ evitar
  ```

* **Nenhum `new` sem atribuir um objeto a uma variável.**

  eslint: [`no-new`](http://eslint.org/docs/rules/no-new)

  ```js
  new Character()                     // ✗ evitar
  const character = new Character()   // ✓ ok
  ```

* **Não use o construtor `Function`.**

  eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func)

  ```js
  var sum = new Function('a', 'b', 'return a + b')    // ✗ evitar
  ```

* **Não use o construtor `Object`.**

  eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object)

  ```js
  let config = new Object()   // ✗ evitar
  ```

* **Não use `new require`.**

  eslint: [`no-new-require`](http://eslint.org/docs/rules/no-new-require)

  ```js
  const myModule = new require('my-module')    // ✗ evitar
  ```

* **Não use o construtor `Symbol`.**

  eslint: [`no-new-symbol`](http://eslint.org/docs/rules/no-new-symbol)

  ```js
  const foo = new Symbol('foo')   // ✗ evitar
  ```

* **Não use instâncias de wrapper primitivas.**

  eslint: [`no-new-wrappers`](http://eslint.org/docs/rules/no-new-wrappers)

  ```js
  const message = new String('hello')   // ✗ evitar
  ```

* **Não chamar propriedades de objetos globais como funções.**

  eslint: [`no-obj-calls`](http://eslint.org/docs/rules/no-obj-calls)

  ```js
  const math = Math()   // ✗ evitar
  ```

* **Sem literais octais.**

  eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal)

  ```js
  const octal = 042         // ✗ evitar
  const decimal = 34        // ✓ ok
  const octalString = '042' // ✓ ok
  ```

* **Nenhuma sequência de escape octal em literais de string.**

  eslint: [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape)

  ```js
  const copyright = 'Copyright \251'  // ✗ evitar
  ```

* **Evite a concatenação de strings ao usar `__dirname` e `__filename`.**

  eslint: [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat)

  ```js
  const pathToFile = __dirname + '/app.js'            // ✗ evitar
  const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok
  ```
* **Evite usar `__proto__`.** Use `getPrototypeOf` em vez disso.

  eslint: [`no-proto`](http://eslint.org/docs/rules/no-proto)

  ```js
  const foo = obj.__proto__               // ✗ evitar
  const foo = Object.getPrototypeOf(obj)  // ✓ ok
  ```

* **Nenhuma redeclaração de variáveis.**

  eslint: [`no-redeclare`](http://eslint.org/docs/rules/no-redeclare)

  ```js
  let name = 'John'
  let name = 'Jane'     // ✗ evitar

  let name = 'John'
  name = 'Jane'         // ✓ ok
  ```

* **Evite vários espaços em literais de expressão regular.**

  eslint: [`no-regex-spaces`](http://eslint.org/docs/rules/no-regex-spaces)

  ```js
  const regexp = /test   value/   // ✗ evitar

  const regexp = /test {3}value/  // ✓ ok
  const regexp = /test value/     // ✓ ok
  ```

* **As atribuições em declarações de retorno devem estar entre parênteses.**

  eslint: [`no-return-assign`](http://eslint.org/docs/rules/no-return-assign)

  ```js
  function sum (a, b) {
    return result = a + b     // ✗ evitar
  }

  function sum (a, b) {
    return (result = a + b)   // ✓ ok
  }
  ```

* **Evite atribuir uma variável a si mesma**

  eslint: [`no-self-assign`](http://eslint.org/docs/rules/no-self-assign)

  ```js
  name = name   // ✗ evitar
  ```

* **Evite comparar uma variável consigo mesma.**

  eslint: [`no-self-compare`](http://eslint.org/docs/rules/no-self-compare)

  ```js
  if (score === score) {}   // ✗ evitar
  ```

* **Evite usar o operador vírgula.**

  eslint: [`no-sequences`](http://eslint.org/docs/rules/no-sequences)

  ```js
  if (doSomething(), !!test) {}   // ✗ evitar
  ```

* **Nomes restritos não devem ser sombreados.**

  eslint: [`no-shadow-restricted-names`](http://eslint.org/docs/rules/no-shadow-restricted-names)

  ```js
  let undefined = 'value'     // ✗ evitar
  ```

* **Arrays dispersos não são permitidas.**

  eslint: [`no-sparse-arrays`](http://eslint.org/docs/rules/no-sparse-arrays)

  ```js
  let fruits = ['apple',, 'orange']       // ✗ evitar
  ```

* **As tabulações não devem ser usadas**

  eslint: [`no-tabs`](http://eslint.org/docs/rules/no-tabs)

* **Strings regulares não devem conter espaços reservados literais de modelo.**

  eslint: [`no-template-curly-in-string`](http://eslint.org/docs/rules/no-template-curly-in-string)

  ```js
  const message = 'Hello ${name}'   // ✗ evitar
  const message = `Hello ${name}`   // ✓ ok
  ```

* **`super()` deve ser chamado antes de usar `this`.**

  eslint: [`no-this-before-super`](http://eslint.org/docs/rules/no-this-before-super)

  ```js
  class Dog extends Animal {
    constructor () {
      this.legs = 4     // ✗ evitar
      super()
    }
  }
  ```

* **Somente `throw` um objeto `Error`.**

  eslint: [`no-throw-literal`](http://eslint.org/docs/rules/no-throw-literal)

  ```js
  throw 'error'               // ✗ evitar
  throw new Error('error')    // ✓ ok
  ```

* **Espaço em branco não permitido no final da linha.**

  eslint: [`no-trailing-spaces`](http://eslint.org/docs/rules/no-trailing-spaces)

* **Não é permitido inicializar com `undefined`.**

  eslint: [`no-undef-init`](http://eslint.org/docs/rules/no-undef-init)

  ```js
  let name = undefined    // ✗ evitar

  let name
  name = 'value'          // ✓ ok
  ```

* **Sem condições não modificadas de loops.**

  eslint: [`no-unmodified-loop-condition`](http://eslint.org/docs/rules/no-unmodified-loop-condition)

  ```js
  for (let i = 0; i < items.length; j++) {...}    // ✗ evitar
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

* **Sem operadores ternários quando existem alternativas mais simples.**

  eslint: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary)

  ```js
  let score = val ? val : 0     // ✗ evitar
  let score = val || 0          // ✓ ok
  ```

* **Nenhum código inacessível após as instruções `return`, `throw`, `continue` e `break`.**

  eslint: [`no-unreachable`](http://eslint.org/docs/rules/no-unreachable)

  ```js
  function doSomething () {
    return true
    console.log('never called')     // ✗ evitar
  }
  ```

* **Nenhuma instrução de controle de fluxo em blocos `finally`.**

  eslint: [`no-unsafe-finally`](http://eslint.org/docs/rules/no-unsafe-finally)

  ```js
  try {
    // ...
  } catch (e) {
    // ...
  } finally {
    return 42     // ✗ evitar
  }
  ```

* **O operando esquerdo de operadores relacionais não deve ser negado.**

  eslint: [`no-unsafe-negation`](http://eslint.org/docs/rules/no-unsafe-negation)

  ```js
  if (!key in obj) {}       // ✗ evitar
  if (!(key in obj)) {}     // ✓ ok
  ```

* **Evite o uso desnecessário de `.call()` e `.apply()`.**

  eslint: [`no-useless-call`](http://eslint.org/docs/rules/no-useless-call)

  ```js
  sum.call(null, 1, 2, 3)   // ✗ evitar
  ```

* **Evite usar chaves de propriedade computadas desnecessárias em objetos.**

  eslint: [`no-useless-computed-key`](http://eslint.org/docs/rules/no-useless-computed-key)

  ```js
  const user = { ['name']: 'John Doe' }   // ✗ evitar
  const user = { name: 'John Doe' }       // ✓ ok
  ```

* **Sem construtor desnecessário.**

  eslint: [`no-useless-constructor`](http://eslint.org/docs/rules/no-useless-constructor)

  ```js
  class Car {
    constructor () {      // ✗ evitar
    }
  }
  ```

* **Sem uso desnecessário de escape.**

  eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape)

  ```js
  let message = 'Hell\o'  // ✗ evitar
  ```

* **Não é permitido renomear atribuições de importação, exportação e desestruturadas para o mesmo nome.**

  eslint: [`no-useless-rename`](http://eslint.org/docs/rules/no-useless-rename)

  ```js
  import { config as config } from './config'     // ✗ evitar
  import { config } from './config'               // ✓ ok
  ```

* **Sem espaço em branco antes das propriedades.**

  eslint: [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)

  ```js
  user .name      // ✗ evitar
  user.name       // ✓ ok
  ```

* **Não use instruções `with`.**

  eslint: [`no-with`](http://eslint.org/docs/rules/no-with)

  ```js
  with (val) {...}    // ✗ evitar
  ```

* **Mantenha a consistência de novas linhas entre as propriedades do objeto.**

  eslint: [`object-property-newline`](http://eslint.org/docs/rules/object-property-newline)

  ```js
  const user = {
    name: 'Jane Doe', age: 30,
    username: 'jdoe86'            // ✗ evitar
  }

  const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ ok

  const user = {
    name: 'Jane Doe',
    age: 30,
    username: 'jdoe86'
  }                                                                 // ✓ ok
  ```

* **Sem preenchimento dentro de blocos.**

  eslint: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks)

  ```js
  if (user) {
                              // ✗ evitar
    const name = getName()

  }

  if (user) {
    const name = getName()    // ✓ ok
  }
  ```

* **Sem espaços em branco entre os operadores de propagação e suas expressões.**

  eslint: [`rest-spread-spacing`](http://eslint.org/docs/rules/rest-spread-spacing)

  ```js
  fn(... args)    // ✗ evitar
  fn(...args)     // ✓ ok
  ```

* **Os pontos e vírgulas devem ter um espaço depois e nenhum espaço antes.**

  eslint: [`semi-spacing`](http://eslint.org/docs/rules/semi-spacing)

  ```js
  for (let i = 0 ;i < items.length ;i++) {...}    // ✗ evitar
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

* **Deve ter um espaço antes dos blocos.**

  eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

  ```js
  if (admin){...}     // ✗ evitar
  if (admin) {...}    // ✓ ok
  ```

* **Sem espaços entre parênteses.**

  eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens)

  ```js
  getName( name )     // ✗ evitar
  getName(name)       // ✓ ok
  ```

* **Deve ter um espaço depois dos operadores unários.**

  eslint: [`space-unary-ops`](http://eslint.org/docs/rules/space-unary-ops)

  ```js
  typeof!admin        // ✗ evitar
  typeof !admin        // ✓ ok
  ```

* **Use espaços nos comentários.**

  eslint: [`spaced-comment`](http://eslint.org/docs/rules/spaced-comment)

  ```js
  //comment           // ✗ evitar
  // comment          // ✓ ok

  /*comment*/         // ✗ evitar
  /* comment */       // ✓ ok
  ```

* **Sem espaçamento nas template strings.**

  eslint: [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)

  ```js
  const message = `Hello, ${ name }`    // ✗ evitar
  const message = `Hello, ${name}`      // ✓ ok
  ```

* **Use `isNaN()` ao verificar `NaN`.**

  eslint: [`use-isnan`](http://eslint.org/docs/rules/use-isnan)

  ```js
  if (price === NaN) { }      // ✗ evitar
  if (isNaN(price)) { }       // ✓ ok
  ```

* **`typeof` deve ser comparado a uma string válida.**

  eslint: [`valid-typeof`](http://eslint.org/docs/rules/valid-typeof)

  ```js
  typeof name === 'undefimed'     // ✗ evitar
  typeof name === 'undefined'     // ✓ ok
  ```

* **As Expressões de Função Invocadas Imediatamente (IIFEs) devem ser encapsuladas.**

  eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife)

  ```js
  const getName = function () { }()     // ✗ evitar

  const getName = (function () { }())   // ✓ ok
  const getName = (function () { })()   // ✓ ok
  ```

* **O `*` nas expressões `yield*` devem ter um espaço antes e depois.**

  eslint: [`yield-star-spacing`](http://eslint.org/docs/rules/yield-star-spacing)

  ```js
  yield* increment()    // ✗ evitar
  yield * increment()   // ✓ ok
  ```

* **Evite condições Yoda.**

  eslint: [`yoda`](http://eslint.org/docs/rules/yoda)

  ```js
  if (42 === age) { }    // ✗ evitar
  if (age === 42) { }    // ✓ ok
  ```

## Pontos e vírgulas

* Sem ponto e vírgula. (veja: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  eslint: [`semi`](http://eslint.org/docs/rules/semi)

  ```js
  window.alert('hi')   // ✓ ok
  window.alert('hi');  // ✗ evitar
  ```

* Nunca comece uma linha com `(`, `[`, `` ` ``, ou um punhado de outras possibilidades improváveis.

  Esta é a única pegadinha com a omissão de ponto e vírgula, e o `standard` protege você desse possível problema.

  (A lista completa é: `[`, `(`, `` ` ``, `+`, `*`, `/`, `-`, `,`, `.`, mas a maioria deles nunca aparecem no início de uma linha no código real.)

  eslint: [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline)

  ```js
  // ✓ ok
  ;(function () {
    window.alert('ok')
  }())

  // ✗ evitar
  (function () {
    window.alert('ok')
  }())
  ```

  ```js
  // ✓ ok
  ;[1, 2, 3].forEach(bar)

  // ✗ evitar
  [1, 2, 3].forEach(bar)
  ```

  ```js
  // ✓ ok
  ;`hello`.indexOf('o')

  // ✗ evitar
  `hello`.indexOf('o')
  ```

  Nota: Se você costuma escrever código assim, pode estar tentando ser esperto demais.

  Abreviações inteligentes são desencorajadas, em favor de expressões claras e legíveis, sempre que possível.

  Em vez disso:

  ```js
  ;[1, 2, 3].forEach(bar)
  ```

  Isso é fortemente preferido:

  ```js
  var nums = [1, 2, 3]
  nums.forEach(bar)
  ```

## Leitura útil

- [Uma carta aberta aos líderes de JavaScript sobre ponto e vírgula][1]
- [Inserção de ponto e vírgula JavaScript – Tudo o que você precisa saber][2]

##### E um vídeo útil:

- [Os pontos e vírgulas são necessários em JavaScript? - YouTube][3]

Todos os minificadores de código populares em uso hoje usam minificação baseada em AST, para que possam
lidar com JavaScript sem ponto e vírgula sem problemas (uma vez que os pontos e vírgulas não são necessários
em JavaScript).

##### Trecho de *["Uma carta aberta aos líderes de JavaScript sobre ponto e vírgula"][1]*:

> [Confiar na inserção automática de ponto e vírgula] é um JS bastante seguro e perfeitamente válido que todo navegador entende. Closure compiler, yuicompressor, packer e jsmin podem minificá-lo adequadamente. Não há impacto no desempenho em nenhum lugar.
>
> Lamento que, em vez de educá-lo, os líderes desta comunidade linguística tenham lhe dado mentiras e medo. Isso foi vergonhoso. Eu recomendo aprender como as instruções em JS são realmente encerradas (e em quais casos elas não são encerradas), para que você possa escrever um código que ache bonito.
>
> Em geral, `\n` termina uma instrução a menos que:
> 1. A instrução tem um parêntese não fechado, literal de array ou literal de objeto ou termina em alguma
> outra forma que não é uma forma válida de terminar uma declaração. (Por exemplo, terminando com `.`
> ou `,`.)
> 2. A linha é `--` ou `++` (nesse caso, diminuirá/incrementará o próximo token.)
> 3. É um `for()`, `while()`, `do`, `if()` ou `else`, e não há `{`
> 4. A próxima linha começa com `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, ou algum outro
> operador binário que só pode ser encontrado entre dois tokens em uma única expressão.
>
> A primeira é bastante óbvia. Mesmo JSLint está ok com caracteres `\n` em JSON e construções entre parênteses, e com instruções `var` que abrangem várias linhas terminando em `,`.
>
> O segundo é super estranho. Eu nunca vi um caso (fora desse tipo de conversa) em que você gostaria de escrever `i\n++\nj`, mas, na verdade, isso é analisado como `i; ++j`, não `i++; j`.
>
> A terceira é bem compreendida, se geralmente desprezada. `if (x)\ny()` é equivalente a `if (x) { y() }`. A construção não termina até atingir um bloco ou uma instrução.
>
> `;` é uma instrução JavaScript válida, então `if(x);` é equivalente a `if(x){}` ou, “Se x, não faça nada”. Isso é mais comumente aplicado a loops em que a verificação de loop também é a função de atualização. Incomum, mas não inédito.
>
> O quarto é geralmente o "oh não, você precisa de ponto e vírgula!" caso. Mas, como se vê, é muito fácil *prefixar* essas linhas com ponto e vírgula se você não quiser que sejam continuações da linha anterior. Por exemplo, em vez disso:
>
> ```js
> foo();
> [1,2,3].forEach(bar);
> ```
>
> você poderia fazer isso:
>
> ```js
> foo()
> ;[1,2,3].forEach(bar)
> ```
>
> A vantagem é que os prefixos são mais fáceis de notar, uma vez que você está acostumado a nunca ver linhas começando com `(` ou `[` sem semis.

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
