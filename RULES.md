# JavaScript Standard Style

Right now, the best way to learn about `standard` is to just install it and give it a try
on your code. Over time, we hope to enumerate all the rules here. So far, only the most
important rules are listed here. Please send PRs!

## High-Level Rules

- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches *tons* of bugs!
- **No semicolons** – [It's][1] [fine.][2] [Really!][3]
- **Never start a line with `(` or `[`**
    - This is the **only** gotcha with omitting semicolons – *automatically checked for you!*
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Name the context variable `self` – `var self = this`
  - Accidental [`window.self`][4] usage is dissallowed (happens when `var self = this` is
    omitted)
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` – except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.

## ASI

Statements beginning with the following characters are prone to breakage with Automatic Semicolon Insertion (ASI).

```
+ * / - ` , . ( [
```

For example, the following code is disallowed:

```js
(Array.isArray(names) ? names : [ names ])
  .forEach(function (name) {
    console.log(name)
  })
```

Instead, the statement should be preceded with a semicolon:

```js
;(Array.isArray(names) ? names : [ names ])
  .forEach(function (name) {
    console.log(name)
  })
```

However; clever short-hand is discouraged in favour of clear and readable expressions:

```js
names = Array.isArray(names) ? names : [ names ]
names.forEach(function (name) {
  console.log(name)
})
```

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://github.com/maxogden/messages/issues/18
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Window.self
