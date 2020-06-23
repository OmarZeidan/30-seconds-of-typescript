(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{322:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),c=(n(0),n(503)),a={title:"scrollToTop",tags:"browser,intermediate"},l={id:"scrollToTop",isDocsHomePage:!1,title:"scrollToTop",description:"Smooth-scrolls to the top of the page.",source:"@site/docs/scrollToTop.md",permalink:"/30-seconds-of-typescript/docs/scrollToTop",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/scrollToTop.md"},i=[],p={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Smooth-scrolls to the top of the page."),Object(c.b)("p",null,"Get distance from top using ",Object(c.b)("inlineCode",{parentName:"p"},"document.documentElement.scrollTop")," or ",Object(c.b)("inlineCode",{parentName:"p"},"document.body.scrollTop"),".\nScroll by a fraction of the distance from the top. Use ",Object(c.b)("inlineCode",{parentName:"p"},"window.requestAnimationFrame()")," to animate the scrolling."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const scrollToTop = () => {\n  const c = document.documentElement.scrollTop || document.body.scrollTop;\n  if (c > 0) {\n    window.requestAnimationFrame(scrollToTop);\n    window.scrollTo(0, c - c / 8);\n  }\n};\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"scrollToTop();\n")))}s.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(a,".").concat(f)]||u[f]||m[f]||c;return n?o.a.createElement(d,l(l({ref:t},p),{},{components:n})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);