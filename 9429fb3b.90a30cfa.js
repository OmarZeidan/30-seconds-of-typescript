(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{329:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(502)),i={title:"throttle",tags:"function,advanced"},c={id:"throttle",isDocsHomePage:!1,title:"throttle",description:"JS",source:"@site/docs/throttle.md",permalink:"/30-seconds-of-typescript/docs/throttle",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/throttle.md",sidebar:"someSidebar",previous:{title:"takeWhile",permalink:"/30-seconds-of-typescript/docs/takeWhile"},next:{title:"timeTaken",permalink:"/30-seconds-of-typescript/docs/timeTaken"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Creates a throttled function that only invokes the provided function at most once per every ",Object(a.b)("inlineCode",{parentName:"p"},"wait")," milliseconds"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"setTimeout()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"clearTimeout()")," to throttle the given method, ",Object(a.b)("inlineCode",{parentName:"p"},"fn"),".\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Function.prototype.apply()")," to apply the ",Object(a.b)("inlineCode",{parentName:"p"},"this")," context to the function and provide the necessary ",Object(a.b)("inlineCode",{parentName:"p"},"arguments"),".\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Date.now()")," to keep track of the last time the throttled function was invoked.\nOmit the second argument, ",Object(a.b)("inlineCode",{parentName:"p"},"wait"),", to set the timeout at a default of 0 ms."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const throttle = (fn, wait) => {\n  let inThrottle, lastFn, lastTime;\n  return function () {\n    const context = this,\n      args = arguments;\n    if (!inThrottle) {\n      fn.apply(context, args);\n      lastTime = Date.now();\n      inThrottle = true;\n    } else {\n      clearTimeout(lastFn);\n      lastFn = setTimeout(function () {\n        if (Date.now() - lastTime >= wait) {\n          fn.apply(context, args);\n          lastTime = Date.now();\n        }\n      }, Math.max(wait - (Date.now() - lastTime), 0));\n    }\n  };\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'window.addEventListener(\n  "resize",\n  throttle(function (evt) {\n    console.log(window.innerWidth);\n    console.log(window.innerHeight);\n  }, 250)\n); // Will log the window dimensions at most every 250ms\n')))}p.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);