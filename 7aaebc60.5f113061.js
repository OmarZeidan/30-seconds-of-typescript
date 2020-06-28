(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(502)),i={title:"renderElement",tags:"browser,recursion,advanced"},c={id:"renderElement",isDocsHomePage:!1,title:"renderElement",description:"JS",source:"@site/docs/renderElement.md",permalink:"/30-seconds-of-typescript/docs/renderElement",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/renderElement.md",sidebar:"someSidebar",previous:{title:"renameKeys",permalink:"/30-seconds-of-typescript/docs/renameKeys"},next:{title:"reverseString",permalink:"/30-seconds-of-typescript/docs/reverseString"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Renders the given DOM tree in the specified DOM element."),Object(a.b)("p",null,"Destructure the first argument into ",Object(a.b)("inlineCode",{parentName:"p"},"type")," and ",Object(a.b)("inlineCode",{parentName:"p"},"props"),", use ",Object(a.b)("inlineCode",{parentName:"p"},"type")," to determine if the given element is a text element.\nBased on the element's ",Object(a.b)("inlineCode",{parentName:"p"},"type"),", use either ",Object(a.b)("inlineCode",{parentName:"p"},"Document.createTextNode()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Document.createElement()")," to create the DOM element.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Object.keys(props"),", adding attributes to the DOM element and setting event listeners, as necessary.\nUse recursion to render ",Object(a.b)("inlineCode",{parentName:"p"},"props.children"),", if any.\nFinally, use ",Object(a.b)("inlineCode",{parentName:"p"},"Node.appendChild()")," to append the DOM element to the specified ",Object(a.b)("inlineCode",{parentName:"p"},"container"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const renderElement = ({ type, props = {} }, container) => {\n  const isTextElement = !type;\n  const element = isTextElement\n    ? document.createTextNode("")\n    : document.createElement(type);\n\n  const isListener = (p) => p.startsWith("on");\n  const isAttribute = (p) => !isListener(p) && p !== "children";\n\n  Object.keys(props).forEach((p) => {\n    if (isAttribute(p)) element[p] = props[p];\n    if (!isTextElement && isListener(p))\n      element.addEventListener(p.toLowerCase().slice(2), props[p]);\n  });\n\n  if (!isTextElement && props.children && props.children.length)\n    props.children.forEach((childElement) =>\n      renderElement(childElement, element)\n    );\n\n  container.appendChild(element);\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const myElement = {\n  type: "button",\n  props: {\n    type: "button",\n    className: "btn",\n    onClick: () => alert("Clicked"),\n    children: [{ props: { nodeValue: "Click me" } }],\n  },\n};\n\nrenderElement(myElement, document.body);\n')))}l.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);