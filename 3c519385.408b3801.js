(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{200:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(502)),c={title:"lowercaseKeys",tags:"object,intermediate"},s={id:"lowercaseKeys",isDocsHomePage:!1,title:"lowercaseKeys",description:"JS",source:"@site/docs/lowercaseKeys.md",permalink:"/30-seconds-of-typescript/docs/lowercaseKeys",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/lowercaseKeys.md",sidebar:"someSidebar",previous:{title:"longestItem",permalink:"/30-seconds-of-typescript/docs/longestItem"},next:{title:"luhnCheck",permalink:"/30-seconds-of-typescript/docs/luhnCheck"}},i=[],l={rightToc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Creates a new object from the specified object, where all the keys are in lowercase."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Object.keys()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to create a new object from the specified object.\nConvert each key in the original object to lowercase, using ",Object(a.b)("inlineCode",{parentName:"p"},"String.toLowerCase()"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const lowercaseKeys = (obj) =>\n  Object.keys(obj).reduce((acc, key) => {\n    acc[key.toLowerCase()] = obj[key];\n    return acc;\n  }, {});\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const myObj = { Name: \"Adam\", sUrnAME: \"Smith\" };\nconst myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};\n")))}p.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,y=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return r?o.a.createElement(y,s(s({ref:t},l),{},{components:r})):o.a.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);