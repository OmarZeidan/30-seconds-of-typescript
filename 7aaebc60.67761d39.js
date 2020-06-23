(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{295:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),i=(t(0),t(503)),c={title:"renderElement",tags:"browser,recursion,advanced"},a={id:"renderElement",isDocsHomePage:!1,title:"renderElement",description:"Renders the given DOM tree in the specified DOM element.",source:"@site/docs/renderElement.md",permalink:"/30-seconds-of-typescript/docs/renderElement",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/renderElement.md"},p=[],l={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Renders the given DOM tree in the specified DOM element."),Object(i.b)("p",null,"Destructure the first argument into ",Object(i.b)("inlineCode",{parentName:"p"},"type")," and ",Object(i.b)("inlineCode",{parentName:"p"},"props"),", use ",Object(i.b)("inlineCode",{parentName:"p"},"type")," to determine if the given element is a text element.\nBased on the element's ",Object(i.b)("inlineCode",{parentName:"p"},"type"),", use either ",Object(i.b)("inlineCode",{parentName:"p"},"Document.createTextNode()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Document.createElement()")," to create the DOM element.\nUse ",Object(i.b)("inlineCode",{parentName:"p"},"Object.keys(props"),", adding attributes to the DOM element and setting event listeners, as necessary.\nUse recursion to render ",Object(i.b)("inlineCode",{parentName:"p"},"props.children"),", if any.\nFinally, use ",Object(i.b)("inlineCode",{parentName:"p"},"Node.appendChild()")," to append the DOM element to the specified ",Object(i.b)("inlineCode",{parentName:"p"},"container"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const renderElement = ({ type, props = {} }, container) => {\n  const isTextElement = !type;\n  const element = isTextElement\n    ? document.createTextNode('')\n    : document.createElement(type);\n\n  const isListener = p => p.startsWith('on');\n  const isAttribute = p => !isListener(p) && p !== 'children';\n\n  Object.keys(props).forEach(p => {\n    if(isAttribute(p)) element[p] = props[p];\n    if(!isTextElement && isListener(p))\n      element.addEventListener(p.toLowerCase().slice(2), props[p]);\n  });\n\n  if(!isTextElement && props.children && props.children.length)\n    props.children.forEach(childElement => renderElement(childElement, element));\n\n  container.appendChild(element);\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const myElement = {\n  type: 'button',\n  props: {\n    type: 'button',\n    className: 'btn',\n    onClick: () => alert('Clicked'),\n    children: [\n      { props: { nodeValue: 'Click me' } }\n    ]\n  }\n};\n\nrenderElement(\n  myElement,\n  document.body\n);\n")))}s.isMDXComponent=!0},503:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,b=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?o.a.createElement(b,a(a({ref:n},l),{},{components:t})):o.a.createElement(b,a({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);