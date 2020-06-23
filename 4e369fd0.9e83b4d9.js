(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{231:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(503)),p={title:"join",tags:"array,intermediate"},i={id:"join",isDocsHomePage:!1,title:"join",description:"Joins all elements of an array into a string and returns this string.",source:"@site/docs/join.md",permalink:"/30-seconds-of-typescript/docs/join",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/join.md"},c=[],l={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Joins all elements of an array into a string and returns this string.\nUses a separator and an end separator."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to combine elements into a string.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"separator"),", to use a default separator of ",Object(o.b)("inlineCode",{parentName:"p"},"','"),".\nOmit the third argument, ",Object(o.b)("inlineCode",{parentName:"p"},"end"),", to use the same value as ",Object(o.b)("inlineCode",{parentName:"p"},"separator")," by default."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\nconst join = (arr, separator = ',', end = separator) =>\n  arr.reduce(\n    (acc, val, i) =>\n      i === arr.length - 2\n        ? acc + val + end\n        : i === arr.length - 1\n          ? acc + val\n          : acc + val + separator,\n    ''\n  );\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'); // \"pen,pineapple,apple&pen\"\njoin(['pen', 'pineapple', 'apple', 'pen'], ','); // \"pen,pineapple,apple,pen\"\njoin(['pen', 'pineapple', 'apple', 'pen']); // \"pen,pineapple,apple,pen\"\n")))}s.isMDXComponent=!0},503:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,f=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(f,i(i({ref:n},l),{},{components:t})):a.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);