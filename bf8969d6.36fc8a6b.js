(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{406:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(502)),c={title:"standardDeviation",tags:"math,array,intermediate"},i={id:"standardDeviation",isDocsHomePage:!1,title:"standardDeviation",description:"JS",source:"@site/docs/standardDeviation.md",permalink:"/30-seconds-of-typescript/docs/standardDeviation",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/standardDeviation.md",sidebar:"someSidebar",previous:{title:"stableSort",permalink:"/30-seconds-of-typescript/docs/stableSort"},next:{title:"stringPermutations",permalink:"/30-seconds-of-typescript/docs/stringPermutations"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Returns the standard deviation of an array of numbers."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to calculate the mean, variance and the sum of the variance of the values, the variance of the values, then\ndetermine the standard deviation.\nYou can omit the second argument to get the sample standard deviation or set it to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to get the population standard deviation."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const standardDeviation = (arr, usePopulation = false) => {\n  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;\n  return Math.sqrt(\n    arr\n      .reduce((acc, val) => acc.concat((val - mean) ** 2), [])\n      .reduce((acc, val) => acc + val, 0) /\n      (arr.length - (usePopulation ? 0 : 1))\n  );\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"standardDeviation([10, 2, 38, 23, 38, 23, 21]); // 13.284434142114991 (sample)\nstandardDeviation([10, 2, 38, 23, 38, 23, 21], true); // 12.29899614287479 (population)\n")))}l.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);