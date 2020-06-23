(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{479:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(503)),i={title:"pullBy",tags:"array,function,advanced"},l={id:"pullBy",isDocsHomePage:!1,title:"pullBy",description:"Mutates the original array to filter out the values specified, based on a given iterator function.",source:"@site/docs/pullBy.md",permalink:"/30-seconds-of-typescript/docs/pullBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/pullBy.md"},p=[],c={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Mutates the original array to filter out the values specified, based on a given iterator function."),Object(o.b)("p",null,"Check if the last argument provided in a function.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to apply the iterator function ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," to all array elements.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," to pull out the values that are not needed.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.length = 0")," to mutate the passed in an array by resetting it's length to zero and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to re-populate it with only the pulled values."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const pullBy = (arr, ...args) => {\n  const length = args.length;\n  let fn = length > 1 ? args[length - 1] : undefined;\n  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;\n  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));\n  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));\n  arr.length = 0;\n  pulled.forEach(v => arr.push(v));\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];\npullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]\n")))}u.isMDXComponent=!0},503:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),y=n,d=s["".concat(i,".").concat(y)]||s[y]||f[y]||o;return r?a.a.createElement(d,l(l({ref:t},c),{},{components:r})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);