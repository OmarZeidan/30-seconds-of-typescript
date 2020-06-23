(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{415:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return d}));var n=t(2),a=t(6),o=(t(0),t(503)),c={title:"orderBy",tags:"object,array,intermediate"},p={id:"orderBy",isDocsHomePage:!1,title:"orderBy",description:"Returns a sorted array of objects ordered by properties and orders.",source:"@site/docs/orderBy.md",permalink:"/30-seconds-of-typescript/docs/orderBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/orderBy.md"},i=[],s={rightToc:i};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns a sorted array of objects ordered by properties and orders."),Object(o.b)("p",null,"Uses ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.sort()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"props")," array with a default value of ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", use array destructuring to swap the properties position depending on the order passed.\nIf no ",Object(o.b)("inlineCode",{parentName:"p"},"orders")," array is passed it sort by ",Object(o.b)("inlineCode",{parentName:"p"},"'asc'")," by default."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const orderBy = (arr, props, orders) =>\n  [...arr].sort((a, b) =>\n    props.reduce((acc, prop, i) => {\n      if (acc === 0) {\n        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];\n        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;\n      }\n      return acc;\n    }, 0)\n  );\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];\norderBy(users, ['name', 'age'], ['asc', 'desc']); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]\norderBy(users, ['name', 'age']); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]\n")))}d.isMDXComponent=!0},503:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=d(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(t),b=n,f=u["".concat(c,".").concat(b)]||u[b]||l[b]||o;return t?a.a.createElement(f,p(p({ref:r},s),{},{components:t})):a.a.createElement(f,p({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);