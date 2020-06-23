(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{427:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(503)),c={title:"longestItem",tags:"array,string,intermediate"},i={id:"longestItem",isDocsHomePage:!1,title:"longestItem",description:"Takes any number of iterable objects or objects with a length property and returns the longest one.",source:"@site/docs/longestItem.md",permalink:"/30-seconds-of-typescript/docs/longestItem",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/longestItem.md"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Takes any number of iterable objects or objects with a ",Object(a.b)("inlineCode",{parentName:"p"},"length")," property and returns the longest one.\nIf multiple objects have the same length, the first one will be returned.\nReturns ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")," if no arguments are provided."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()"),", comparing the ",Object(a.b)("inlineCode",{parentName:"p"},"length")," of objects to find the longest one."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"longestItem('this', 'is', 'a', 'testcase'); // 'testcase'\nlongestItem(...['a', 'ab', 'abc']); // 'abc'\nlongestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'\nlongestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]\nlongestItem([1, 2, 3], 'foobar'); // 'foobar'\n")))}p.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);