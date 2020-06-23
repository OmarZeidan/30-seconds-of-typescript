(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{355:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(503)),c={title:"hz",tags:"function,intermediate"},i={id:"hz",isDocsHomePage:!1,title:"hz",description:"Returns the number of times a function executed per second.",source:"@site/docs/hz.md",permalink:"/30-seconds-of-typescript/docs/hz",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/hz.md"},s=[],u={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns the number of times a function executed per second.\n",Object(a.b)("inlineCode",{parentName:"p"},"hz")," is the unit for ",Object(a.b)("inlineCode",{parentName:"p"},"hertz"),", the unit of frequency defined as one cycle per second."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"performance.now()")," to get the difference in milliseconds before and after the iteration loop to calculate the time elapsed executing the function ",Object(a.b)("inlineCode",{parentName:"p"},"iterations")," times.\nReturn the number of cycles per second by converting milliseconds to seconds and dividing it by the time elapsed.\nOmit the second argument, ",Object(a.b)("inlineCode",{parentName:"p"},"iterations"),", to use the default of 100 iterations."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const hz = (fn, iterations = 100) => {\n  const before = performance.now();\n  for (let i = 0; i < iterations; i++) fn();\n  return (1000 * iterations) / (performance.now() - before);\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// 10,000 element array\nconst numbers = Array(10000)\n  .fill()\n  .map((_, i) => i);\n\n// Test functions with the same goal: sum up the elements in the array\nconst sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);\nconst sumForLoop = () => {\n  let sum = 0;\n  for (let i = 0; i < numbers.length; i++) sum += numbers[i];\n  return sum;\n};\n\n// `sumForLoop` is nearly 10 times faster\nMath.round(hz(sumReduce)); // 572\nMath.round(hz(sumForLoop)); // 4784\n")))}p.isMDXComponent=!0},503:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,d=l["".concat(c,".").concat(m)]||l[m]||f[m]||a;return t?o.a.createElement(d,i(i({ref:n},u),{},{components:t})):o.a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);