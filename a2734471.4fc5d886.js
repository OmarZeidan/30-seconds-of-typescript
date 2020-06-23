(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{363:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(503)),c={title:"matches",tags:"object,type,intermediate"},i={id:"matches",isDocsHomePage:!1,title:"matches",description:"Compares two objects to determine if the first one contains equivalent property values to the second one.",source:"@site/docs/matches.md",permalink:"/30-seconds-of-typescript/docs/matches",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/matches.md"},s=[],p={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Compares two objects to determine if the first one contains equivalent property values to the second one."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Object.keys(source)")," to get all the keys of the second object, then ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.every()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Object.hasOwnProperty()")," and strict comparison to determine if all keys exist in the first object and have the same values."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const matches = (obj, source) =>\n  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true\nmatches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false\n")))}u.isMDXComponent=!0},503:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(c,".").concat(m)]||l[m]||b[m]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);