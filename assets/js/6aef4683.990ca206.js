(self.webpackChunk=self.webpackChunk||[]).push([[46242],{3905:(e,r,t)=>{"use strict";t.r(r),t.d(r,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>s});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){return function(r){var t=d(r.components);return n.createElement(e,i({},r,{components:t}))}},d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,f=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},51591:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>l,toc:()=>s,default:()=>m});var n=t(74034),a=t(79973),i=(t(67294),t(3905)),o=["components"],c={id:"legacy-apis",title:"Legacy APIs",slug:"/api-reference/legacy-apis/",description:"API reference for legacy APIs",keywords:["QueryRenderer","Container"]},p=void 0,l={unversionedId:"api-reference/legacy-apis/legacy-apis",id:"api-reference/legacy-apis/legacy-apis",isDocsHomePage:!1,title:"Legacy APIs",description:"API reference for legacy APIs",source:"@site/docs/api-reference/legacy-apis/legacy-apis.md",sourceDirName:"api-reference/legacy-apis",slug:"/api-reference/legacy-apis/",permalink:"/docs/next/api-reference/legacy-apis/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/legacy-apis/legacy-apis.md",tags:[],version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1647536279,formattedLastUpdatedAt:"3/17/2022",frontMatter:{id:"legacy-apis",title:"Legacy APIs",slug:"/api-reference/legacy-apis/",description:"API reference for legacy APIs",keywords:["QueryRenderer","Container"]},sidebar:"docs",previous:{title:"GraphQL Directives",permalink:"/docs/next/api-reference/graphql-and-directives/"},next:{title:"GraphQL Server Specification",permalink:"/docs/next/guides/graphql-server-specification/"}},s=[],d={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"API references for our previous legacy APIs are available in our previous docs website:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/query-renderer"},(0,i.mdx)("inlineCode",{parentName:"a"},"QueryRenderer"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/fragment-container"},(0,i.mdx)("inlineCode",{parentName:"a"},"Fragment Container"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/refetch-container"},(0,i.mdx)("inlineCode",{parentName:"a"},"Refetch Container"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/pagination-container"},(0,i.mdx)("inlineCode",{parentName:"a"},"Pagination Container"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/mutations"},(0,i.mdx)("inlineCode",{parentName:"a"},"Mutations"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/subscriptions"},(0,i.mdx)("inlineCode",{parentName:"a"},"Subscriptions")))))}m.isMDXComponent=!0}}]);