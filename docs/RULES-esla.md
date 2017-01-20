# JavaScript Standard Style

Read in: [English](RULES.md)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Esto es un TL;DR (muy largo, no lo leí) de reglas JavaScript [standard](https://github.com/feross/standard).

La mejor manera de aprender acerca de `standard` es instalarlo darle una prueba en tu código.

## Reglas

* **Usar 2 espacios** como sangría.

  eslint: [`indent`](http://eslint.org/docs/rules/indent)

  ```js
  function hello (name) {
    console.log('hi', name)
  }
  ```

* **Usar comillas simples en cadenas de texto** con la excepcion para evitar escapado de texto

  eslint: [`quotes`](http://eslint.org/docs/rules/quotes)

  ```js
  console.log('hello there') // comillas simples
  $("<div class='box'>") // escapado de texto
  ```

* **No dejar variables sin usar.**

  eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars)

  ```js
  function myFunction () {
    var result = something()   // ✗ evitar
  }
  ```

* **Espacio después de las palabras claves.**

  eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing)

  ```js
  if (condition) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ evitar
  ```

* **Agregar un espacio antes de los paréntesis de la función declarada**

  eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren)

  ```js
  function name (arg) { ... }   // ✓ ok
  function name(arg) { ... }    // ✗ evitar

  run(function () { ... })      // ✓ ok
  run(function() { ... })       // ✗ evitar
  ```

* **Usar siempre** `===` en vez de `==`.<br>
  Exception: `obj == null` is allowed to check for `null || undefined`.

  eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq)

  ```js
  if (name === 'John')   // ✓ ok
  if (name == 'John')    // ✗ evitar
  ```

  ```js
  if (name !== 'John')   // ✓ ok
  if (name != 'John')    // ✗ evitar
  ```

* **Operadores infijos** deben ser espaciados.

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

* **Comas deben tener un espacio** despues de ellas.

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

* **Mantener declaracion else** en la misma linea que sus llaves.

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

* **Para delcaraciones if multi-linea** usar llaves.

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

* **Siempre gestionar** el parámetro `err` en las funciones.

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

* **En las variables globales usar el sufijo** `window.`.<br>
  Con la excepcion de: `document`, `console` y `navigator`.

  eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

  ```js
  window.alert('hi')   // ✓ ok
  ```

* **Múltiples líneas en blanco no está permitido.**

  eslint: [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines)

  ```js
  // ✓ ok
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ evitar
  var value = 'hello world'


  console.log(value)
  ```

* **Para el operador ternario** en multi-linea, colocar el `?` y `:` en su propia nueva linea.

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

* **Para declaraciones var,** escribir solo una asignación en cada declaracion

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

* **Envolver asignaciones condicionales** con paréntesis adicionales. Esto hace claro que la intención de la expresión es una asignación y no un error de igualdad (`===`).

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

## Puntos y comas (semicolos)

* Sin puntos y comas. (see: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  eslint: [`semi`](http://eslint.org/docs/rules/semi)

  ```js
  window.alert('hi')   // ✓ ok
  window.alert('hi');  // ✗ evitar
  ```

* Nunca empezar una linea con `(`, `[`, o `` ` ``. Este es el único problema cuando se omiten los puntos y comas, y `standard` te protege de problemas potenciales

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

  Nota: si te encuentras a menudo escribiendo código de esta manera,
  quizás estás tratando de ser muy listo.

  esta taquigrafía es rechazada, en favor a expresiones claras y legibles, cuando sea posible.

  En vez de esto:

  ```js
  ;[1, 2, 3].forEach(bar)
  ```

  Se prefiere esto:

  ```js
  var nums = [1, 2, 3]
  nums.forEach(bar)
  ```


## Lectura de ayuda con referencia hacia los puntos y comas

- [An Open Letter to JavaScript Leaders Regarding Semicolons][1]
- [JavaScript Semicolon Insertion – Everything you need to know][2]

##### También un video:

- [Are Semicolons Necessary in JavaScript? - YouTube][3]

Los minificadores de código populares hoy en día están basados en AST
(Árbol abstracto de sintaxis), de manera que pueden gestionar JavaScript
sin puntos y comas sin problemas (puntos y comas no son requeridos en JavaScript).

##### Extrácto de *["An Open Letter to JavaScript Leaders Regarding Semicolons"][1]*:

[Depender de ASI (Inserción automática de puntos y comas)] es bastante seguro, y perfectamente válido que cualquier navegador web entiende, Compilador Closure, yuicompressor, packer y jsmin todos pueden perfectamente minificarlo. No existe impacto en el performance.

Lamento que, en vez de educarlos, sus líderes en este lenguaje les han dado mentiras y miedos. Que sinverguenza. Yo te recomiendo aprender como las declaraciones realmente terminan en JavaScript (y en cuales casos no terminan), de esta manera tu puedes escribir código que encuentres hermoso.

En general, `\n` termina una declaración a menos que
La declaración tiene sin cerrar un paréntesis, array literal, o objeto literal o termina de una manera no válida (por instancia, terminar con `.` o `,`)
La línea es `--` o `++` (en este caso esto decrementa/incrementa el proximo token)
Es un `for()`, `while()`, `do`, `if()`, o `else`, no exista una llave `{`
La próxima línea empieza con `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.` o algún operador binario que solo se encuentra entre dos tokens en un sola expresión

El primero es bastante obvio. Incluso JSLint no tiene problemas con caracteres `\n` en JSON y constructores entre paréntesis, y con declaraciones `var` que lapsan múltiples líneas terminando con `,`.

El segundo es super raro. Yo nunca he visto un caso (fuera de este tipo de conversaciones) donde quisieras escribir `i\n++\nj`, pero, de hecho eso es analizado como `i; ++j;`y  no `j++; j`.

El tercero es bien entendido, es generalmente despreciado. `if (x)\ny()` es equivalente a `if (x) { y() }`. El constructor no termina hasta que alcanza un bloque o una declaración.

`;` es una declaración JavaScript válida, entonces `if(x);` es el equivalente a `if(x){}` o “Sí x, hacer nada” Esto es más comúnmente aplicado a bucles donde el bucle también chequea si la función actualiza, No es usual, pero existe.

El cuarto es generalmente el caso inducido “Oh no, necesitas puntos y comas”. Pero pasa que es bastante simple darle el prefijo a esas linas con puntos y comas, si no quieres que sean la continuacion de la linea previa. Por ejemplo, en vez de esto:

```js
foo();
[1,2,3].forEach(bar);
```

podrias hacer esto:

```js
foo()
;[1,2,3].forEach(bar)
```

La ventaja es que los prefijos son fáciles de notar, una vez te acostumbras a ver líneas que no empiecen con `(` o `[` sin puntos y comas.

*Fin the la cita de "An Open Letter to JavaScript Leaders Regarding Semicolons".*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
