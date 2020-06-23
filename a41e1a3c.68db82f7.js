(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{365:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),o=(n(0),n(503)),a={title:"elementIsVisibleInViewport",tags:"browser,advanced"},l={id:"elementIsVisibleInViewport",isDocsHomePage:!1,title:"elementIsVisibleInViewport",description:"Returns true if the element specified is visible in the viewport, false otherwise.",source:"@site/docs/elementIsVisibleInViewport.md",permalink:"/30-seconds-of-typescript/docs/elementIsVisibleInViewport",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/elementIsVisibleInViewport.md"},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the element specified is visible in the viewport, ",Object(o.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Element.getBoundingClientRect()")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"window.inner(Width|Height)")," values\nto determine if a given element is visible in the viewport.\nOmit the second argument to determine if the element is entirely visible, or specify ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to determine if\nit is partially visible."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const elementIsVisibleInViewport = (el, partiallyVisible = false) => {\n  const { top, left, bottom, right } = el.getBoundingClientRect();\n  const { innerHeight, innerWidth } = window;\n  return partiallyVisible\n    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&\n        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))\n    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}\nelementIsVisibleInViewport(el); // false - (not fully visible)\nelementIsVisibleInViewport(el, true); // true - (partially visible)\n")))}s.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||b[m]||o;return n?i.a.createElement(f,l(l({ref:t},p),{},{components:n})):i.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);