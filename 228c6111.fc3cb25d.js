(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(502)),i={title:"dig",tags:"object,recursion,intermediate"},c={id:"dig",isDocsHomePage:!1,title:"dig",description:"JS",source:"@site/docs/dig.md",permalink:"/30-seconds-of-typescript/docs/dig",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/dig.md",sidebar:"someSidebar",previous:{title:"differenceWith",permalink:"/30-seconds-of-typescript/docs/differenceWith"},next:{title:"digitize",permalink:"/30-seconds-of-typescript/docs/digitize"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Returns the target value in a nested JSON object, based on the given key."),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"in")," operator to check if ",Object(o.b)("inlineCode",{parentName:"p"},"target")," exists in ",Object(o.b)("inlineCode",{parentName:"p"},"obj"),".\nIf found, return the value of ",Object(o.b)("inlineCode",{parentName:"p"},"obj[target]"),", otherwise use ",Object(o.b)("inlineCode",{parentName:"p"},"Object.values(obj)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to recursively call ",Object(o.b)("inlineCode",{parentName:"p"},"dig")," on each nested object until the first matching key/value pair is found."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const dig = (obj, target) =>\n  target in obj\n    ? obj[target]\n    : Object.values(obj).reduce((acc, val) => {\n        if (acc !== undefined) return acc;\n        if (typeof val === "object") return dig(val, target);\n      }, undefined);\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const data = {\n  level1: {\n    level2: {\n      level3: "some data",\n    },\n  },\n};\ndig(data, "level3"); // \'some data\'\ndig(data, "level4"); // undefined\n')))}s.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);