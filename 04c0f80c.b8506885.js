(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(502)),c={title:"onUserInputChange",tags:"browser,event,advanced"},i={id:"onUserInputChange",isDocsHomePage:!1,title:"onUserInputChange",description:"JS",source:"@site/docs/onUserInputChange.md",permalink:"/30-seconds-of-typescript/docs/onUserInputChange",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/onUserInputChange.md",sidebar:"someSidebar",previous:{title:"on",permalink:"/30-seconds-of-typescript/docs/on"},next:{title:"once",permalink:"/30-seconds-of-typescript/docs/once"}},s=[],p={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Run the callback whenever the user input type changes (",Object(a.b)("inlineCode",{parentName:"p"},"mouse")," or ",Object(a.b)("inlineCode",{parentName:"p"},"touch"),"). Useful for enabling/disabling code depending on the input device. This process is dynamic and works with hybrid devices (e.g. touchscreen laptops)."),Object(a.b)("p",null,"Use two event listeners. Assume ",Object(a.b)("inlineCode",{parentName:"p"},"mouse")," input initially and bind a ",Object(a.b)("inlineCode",{parentName:"p"},"touchstart")," event listener to the document.\nOn ",Object(a.b)("inlineCode",{parentName:"p"},"touchstart"),", add a ",Object(a.b)("inlineCode",{parentName:"p"},"mousemove")," event listener to listen for two consecutive ",Object(a.b)("inlineCode",{parentName:"p"},"mousemove")," events firing within 20ms, using ",Object(a.b)("inlineCode",{parentName:"p"},"performance.now()"),".\nRun the callback with the input type as an argument in either of these situations."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const onUserInputChange = (callback) => {\n  let type = "mouse",\n    lastTime = 0;\n  const mousemoveHandler = () => {\n    const now = performance.now();\n    if (now - lastTime < 20)\n      (type = "mouse"),\n        callback(type),\n        document.removeEventListener("mousemove", mousemoveHandler);\n    lastTime = now;\n  };\n  document.addEventListener("touchstart", () => {\n    if (type === "touch") return;\n    (type = "touch"),\n      callback(type),\n      document.addEventListener("mousemove", mousemoveHandler);\n  });\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'onUserInputChange((type) => {\n  console.log("The user is now using", type, "as an input method.");\n});\n')))}u.isMDXComponent=!0},502:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,d=l["".concat(c,".").concat(b)]||l[b]||m[b]||a;return t?o.a.createElement(d,i(i({ref:n},p),{},{components:t})):o.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);