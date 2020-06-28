(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{357:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(502)),i={title:"intersectionBy",tags:"array,function,intermediate"},c={id:"intersectionBy",isDocsHomePage:!1,title:"intersectionBy",description:"JS",source:"@site/docs/intersectionBy.md",permalink:"/30-seconds-of-typescript/docs/intersectionBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/intersectionBy.md",sidebar:"someSidebar",previous:{title:"intersection",permalink:"/30-seconds-of-typescript/docs/intersection"},next:{title:"intersectionWith",permalink:"/30-seconds-of-typescript/docs/intersectionWith"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both."),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," by applying ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," to all elements in ",Object(o.b)("inlineCode",{parentName:"p"},"b"),", then use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," on ",Object(o.b)("inlineCode",{parentName:"p"},"a")," to only keep elements, which produce values contained in ",Object(o.b)("inlineCode",{parentName:"p"},"b")," when ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," is applied to them."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const intersectionBy = (a, b, fn) => {\n  const s = new Set(b.map(fn));\n  return [...new Set(a)].filter((x) => s.has(fn(x)));\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]\n")))}l.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);