"use strict";(self.webpackChunkinkken=self.webpackChunkinkken||[]).push([[4018],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),d=a,m=s["".concat(i,".").concat(d)]||s[d]||y[d]||o;return r?t.createElement(m,p(p({ref:n},u),{},{components:r})):t.createElement(m,p({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[s]="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9383:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={slug:"yarn",title:"yarn",authors:[{name:"\u590f\u4e00"}],tags:["\u5f00\u53d1"]},p=void 0,c={permalink:"/yarn",source:"@site/blog/Develop/2022-01-10-yarn/index.mdx",title:"yarn",description:"\u2014END\u2014",date:"2022-01-10T00:00:00.000Z",formattedDate:"2022\u5e741\u670810\u65e5",tags:[{label:"\u5f00\u53d1",permalink:"/tags/\u5f00\u53d1"}],readingTime:.655,hasTruncateMarker:!1,authors:[{name:"\u590f\u4e00"}],frontMatter:{slug:"yarn",title:"yarn",authors:[{name:"\u590f\u4e00"}],tags:["\u5f00\u53d1"]},prevItem:{title:"npm",permalink:"/npm"},nextItem:{title:"git",permalink:"/git"}},i={authorsImageUrls:[void 0]},l=[],u={toc:l},s="wrapper";function y(e){let{components:n,...r}=e;return(0,a.kt)(s,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"\n\u5168\u5c40\u5b89\u88c5\uff1a\nnpm install --global yarn\n\n\u5b89\u88c5\u540e\u68c0\u67e5\u7248\u672c\nyarn -v\n\n\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u9879\u76ee\nyarn init\n\n\u6dfb\u52a0\u4f9d\u8d56\u5305\nyarn add [package] \nyarn add [package]@[version] \nyarn add [package]@[tag]\n\n\u5c06\u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u4e0d\u540c\u4f9d\u8d56\u9879\u7c7b\u522b\u4e2d\n\u5206\u522b\u6dfb\u52a0\u5230 devDependencies\u3001peerDependencies \u548c optionalDependencies \u7c7b\u522b\u4e2d\uff1a\nyarn add [package] --dev \nyarn add [package] --peer \nyarn add [package] --optional\n\n\u5347\u7ea7\u4f9d\u8d56\u5305\nyarn upgrade [package] yarn upgrade [package]@[version] yarn upgrade [package]@[tag]\n\n\u79fb\u9664\u4f9d\u8d56\u5305\nyarn remove [package]\n\n\u5b89\u88c5\u9879\u76ee\u7684\u5168\u90e8\u4f9d\u8d56\nyarn\n\u6216\u8005\nyarn install\n\nrun react\u9879\u76ee\nyarn start\n\nbuild react\u9879\u76ee\nyarn run build\n\n\n")),(0,a.kt)("p",null,"\u2014END\u2014"))}y.isMDXComponent=!0}}]);