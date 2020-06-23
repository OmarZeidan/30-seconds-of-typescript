(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(503)),c={title:"sampleSize",tags:"array,random,intermediate"},i={id:"sampleSize",isDocsHomePage:!1,title:"sampleSize",description:"Gets n random elements at unique keys from array up to the size of array.",source:"@site/docs/sampleSize.md",permalink:"/30-seconds-of-typescript/docs/sampleSize",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/sampleSize.md"},p=[],l={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Gets ",Object(o.b)("inlineCode",{parentName:"p"},"n")," random elements at unique keys from ",Object(o.b)("inlineCode",{parentName:"p"},"array")," up to the size of ",Object(o.b)("inlineCode",{parentName:"p"},"array"),"."),Object(o.b)("p",null,"Shuffle the array using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/30-seconds/30-seconds-of-code#shuffle"}),"Fisher-Yates algorithm"),".\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," to get the first ",Object(o.b)("inlineCode",{parentName:"p"},"n")," elements.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"n")," to get only one element at random from the array."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const sampleSize = ([...arr], n = 1) => {\n  let m = arr.length;\n  while (m) {\n    const i = Math.floor(Math.random() * m--);\n    [arr[m], arr[i]] = [arr[i], arr[m]];\n  }\n  return arr.slice(0, n);\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"sampleSize([1, 2, 3], 2); // [3,1]\nsampleSize([1, 2, 3], 4); // [2,3,1]\n")))}s.isMDXComponent=!0},503:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?a.a.createElement(b,i(i({ref:t},l),{},{components:r})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);