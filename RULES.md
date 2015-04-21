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

## Automatic semicolon insertion (ASI)

*Quoting from ["An Open Letter to JavaScript Leaders Regarding Semicolons"][1]:*

In general, `\n` ends a statement unless:
  1. The statement has an unclosed paren, array literal, or object literal or ends in some
     other way that is not a valid way to end a statement. (For instance, ending with `.`
     or `,`.)
  2. The line is `--` or `++` (in which case it will decrement/increment the next token.)
  3. It is a `for()`, `while()`, `do`, `if()`, or `else`, and there is no `{`
  4. The next line starts with `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, or some other
     binary operator that can only be found between two tokens in a single expression.

The first is pretty obvious. Even JSLint is ok with `\n` chars in JSON and parenthesized constructs, and with `var` statements that span multiple lines ending in `,`.

The second is super weird. I’ve never seen a case (outside of these sorts of conversations) where you’d want to do write `i\n++\nj`, but, point of fact, that’s parsed as `i; ++j`, not `i++; j`.

The third is well understood, if generally despised. `if (x)\ny()` is equivalent to `if (x) { y() }`. The construct doesn’t end until it reaches either a block, or a statement.

`;` is a valid JavaScript statement, so `if(x);` is equivalent to `if(x){}` or, “If x, do nothing.” This is more commonly applied to loops where the loop check also is the update function. Unusual, but not unheard of.

The fourth is generally the fud-inducing “oh noes, you need semicolons!” case. But, as it turns out, it’s quite easy to *prefix* those lines with semicolons if you don’t mean them to be continuations of the previous line. For example, instead of this:

```js
foo();
[1,2,3].forEach(bar);
```

you could do this:

```js
foo()
;[1,2,3].forEach(bar)
```

The advantage is that the prefixes are easier to notice, once you are accustomed to never seeing lines starting with `(` or `[` without semis.

*End quote from "An Open Letter to JavaScript Leaders Regarding Semicolons".*

### Avoid clever short-hands

Clever short-hands are discouraged, in favor of clear and readable expressions, whenever
possible. So, while this is allowed:

```js
;[1,2,3].forEach(bar)
```

This is much preferred:

```js
var nums = [1,2,3]
nums.forEach(bar)
```

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://github.com/maxogden/messages/issues/18
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Window.self
