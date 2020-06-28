---
title: setStyle
tags: browser,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Sets the value of a CSS rule for the specified HTML element.

Use `element.style` to set the value of the CSS rule for the specified element to `val`.

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
```

```js
setStyle(document.querySelector("p"), "font-size", "20px");
// The first <p> element on the page will have a font-size of 20px
```
