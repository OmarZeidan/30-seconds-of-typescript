(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{390:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(503)),c={title:"CSVToJSON",tags:"string,array,object,advanced"},i={id:"CSVToJSON",isDocsHomePage:!1,title:"CSVToJSON",description:"Converts a comma-separated values (CSV) string to a 2D array of objects.",source:"@site/docs/CSVToJSON.md",permalink:"/30-seconds-of-typescript/docs/CSVToJSON",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/CSVToJSON.md"},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Converts a comma-separated values (CSV) string to a 2D array of objects.\nThe first row of the string is used as the title row."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.indexOf('\\n')")," and ",Object(a.b)("inlineCode",{parentName:"p"},"String.prototype.split(delimiter)")," to separate the first row (title row) into values.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"String.prototype.split('\\n')")," to create a string for each row, then ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"String.prototype.split(delimiter)")," to separate the values in each row.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to create an object for each row's values, with the keys parsed from the title row.\nOmit the second argument, ",Object(a.b)("inlineCode",{parentName:"p"},"delimiter"),", to use a default delimiter of ",Object(a.b)("inlineCode",{parentName:"p"},","),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const CSVToJSON = (data, delimiter = ',') => {\n  const titles = data.slice(0, data.indexOf('\\n')).split(delimiter);\n  return data\n    .slice(data.indexOf('\\n') + 1)\n    .split('\\n')\n    .map(v => {\n      const values = v.split(delimiter);\n      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});\n    });\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"CSVToJSON('col1,col2\\na,b\\nc,d'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];\nCSVToJSON('col1;col2\\na;b\\nc;d', ';'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];\n")))}s.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);