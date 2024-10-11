"use strict";(self.webpackChunkrestyle=self.webpackChunkrestyle||[]).push([[899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"breakpoints",title:"Breakpoints"},o=void 0,s={unversionedId:"fundamentals/breakpoints",id:"fundamentals/breakpoints",title:"Breakpoints",description:"Breakpoints are defined as minimum widths (inclusive) for different target screen sizes where we want to apply differing styles. Consider giving your breakpoints names that give a general idea of the type of device the user is using. Breakpoints can be defined by either a single value (width) or an object containing both width and height:",source:"@site/docs/fundamentals/breakpoints.md",sourceDirName:"fundamentals",slug:"/fundamentals/breakpoints",permalink:"/restyle/fundamentals/breakpoints",draft:!1,editUrl:"https://github.com/shopify/restyle/edit/master/docusaurus/docs/fundamentals/breakpoints.md",tags:[],version:"current",lastUpdatedBy:"Talha Naqvi",lastUpdatedAt:1716846245,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"breakpoints",title:"Breakpoints"},sidebar:"docs",previous:{title:"Variants",permalink:"/restyle/fundamentals/variants"},next:{title:"Responsive values",permalink:"/restyle/fundamentals/responsive-values"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Breakpoints are defined as minimum widths (inclusive) for different target screen sizes where we want to apply differing styles. Consider giving your breakpoints names that give a general idea of the type of device the user is using. Breakpoints can be defined by either a single value (width) or an object containing both width and height:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const theme = createTheme({\n  breakpoints: {\n    phone: 0,\n    longPhone: {\n      width: 0,\n      height: 812,\n    },\n    tablet: 768,\n    largeTablet: 1024,\n  },\n});\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/fundamentals/responsive-values"},"Responsive Values")," section to see how these can be used. Defining ",(0,a.kt)("inlineCode",{parentName:"p"},"breakpoints")," is optional and we recommend defining it only if you plan to use them due to a performance hit (up to 10 % worse average FPS when scrolling in a list) responsive values incur."))}u.isMDXComponent=!0}}]);