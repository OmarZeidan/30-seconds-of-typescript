---
title: palindrome
tags: string,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if the given string is a palindrome, `false` otherwise.

Convert the string to `String.prototype.toLowerCase()` and use `String.prototype.replace()` to remove non-alphanumeric characters from it.
Then, use the spread operator (`...`) to split the string into individual characters, `Array.prototype.reverse()`, `String.prototype.join('')` and compare it to the original, unreversed string, after converting it to `String.prototype.toLowerCase()`.

```js
const palindrome = (str) => {
  const s = str.toLowerCase().replace(/[\W_]/g, "");
  return s === [...s].reverse().join("");
};
```

```js
palindrome("taco cat"); // true
```
