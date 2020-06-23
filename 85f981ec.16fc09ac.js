(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(503)),i={title:"sortedLastIndexBy",tags:"array,math,function,intermediate"},c={id:"sortedLastIndexBy",isDocsHomePage:!1,title:"sortedLastIndexBy",description:"Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.",source:"@site/docs/sortedLastIndexBy.md",permalink:"/30-seconds-of-typescript/docs/sortedLastIndexBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/sortedLastIndexBy.md"},s=[],d={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function."),Object(a.b)("p",null,"Check if the array is sorted in descending order (loosely).\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to apply the iterator function to all elements of the array.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reverse()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.findIndex()")," to find the appropriate last index where the element should be inserted, based on the provided iterator function."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const sortedLastIndexBy = (arr, n, fn) => {\n  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);\n  const val = fn(n);\n  const index = arr\n    .map(fn)\n    .reverse()\n    .findIndex(el => (isDescending ? val <= el : val >= el));\n  return index === -1 ? 0 : arr.length - index;\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1\n")))}p.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,b=l["".concat(i,".").concat(f)]||l[f]||u[f]||a;return n?o.a.createElement(b,c(c({ref:t},d),{},{components:n})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);