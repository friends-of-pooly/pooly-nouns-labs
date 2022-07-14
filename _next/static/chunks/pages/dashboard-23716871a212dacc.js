(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{39920:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(76370)}])},80026:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var n=r(56094),s=r(97458),a=r(83849),l=r.n(a),i=r(52983),o=function(e){var t=e.className,r=l()(t,"color-mode cursor-pointer"),a=(0,n.Z)(i.useState("light"),2),o=a[0],c=a[1];(0,i.useEffect)((function(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light"),c("dark")):(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"),c("light"))}),[]);return(0,s.jsx)("div",{className:r,onClick:function(e){document.documentElement.classList.toggle("dark"),c("dark"===o?"light":"dark")},children:"dark"===o?"\ud83c\udf15":"\ud83c\udf19"})}},76370:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(97458),s=r(43193),a=r(83849),l=r.n(a),i=function(e){var t=e.children,r=e.href,s=e.classNames,a=l()("text-neutral-600 hover:text-neutral-800 dark:text-white",s);return(0,n.jsx)("a",{className:a,target:"_blank",href:r,rel:"noreferrer",children:t})},o=function(){return(0,n.jsxs)("nav",{className:"z-50 grid w-full grid-cols-12 px-5 py-4 shadow-sm shadow-gray-400 dark:bg-gray-700 dark:shadow-gray-900",children:[(0,n.jsx)("div",{className:"col-span-6 flex flex-1 items-center",children:(0,n.jsx)("ul",{className:"text-2xs flex list-none flex-col md:min-w-full md:flex-col",children:(0,n.jsx)("li",{children:(0,n.jsx)(i,{classNames:"text-xs",href:"https://github.com/turbo-eth/turbo-eth",children:"Documentation"})})})}),(0,n.jsx)("div",{className:"col-span-6 flex w-full items-center justify-end px-2",children:(0,n.jsx)(s.NL,{})})]})},c=r(52983),d=r(7862),u=r.n(d);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var m=(0,c.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,s=e.size,a=void 0===s?24:s,l=f(e,["color","size"]);return c.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),c.createElement("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"}))}));m.propTypes={color:u().string,size:u().oneOfType([u().string,u().number])},m.displayName="Activity";var p=m;function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var j=(0,c.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,s=e.size,a=void 0===s?24:s,l=v(e,["color","size"]);return c.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),c.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));j.propTypes={color:u().string,size:u().oneOfType([u().string,u().number])},j.displayName="GitHub";var y=j,g=r(80026),b=r(29074),w=r.n(b),k=r(84502),N=function(e){var t=e.className,r=e.defaultStyle,s=l()("flex items-center justify-between cursor-pointer "),a=l()(t,"app-logo","font-bold text-xl hover:opacity-70",{"text-purple-600 hover:text-purple-700":r});return(0,n.jsx)(w(),{passHref:!0,href:"/",children:(0,n.jsxs)("span",{className:s,children:[(0,n.jsx)("span",{className:"",children:k.X.emoji}),(0,n.jsx)("span",{className:a,children:k.X.title})]})})},O=r(49072),_=function(e){var t=e.label,r=e.href,s=e.image,a=e.labelStyle,i=e.iconStyle,o=(0,O.useRouter)(),c=o.pathname.match(r),d=!!c&&c[0]===o.pathname,u=l()("items-center cursor-pointer px-3 py-0"),h=l()("flex items-center justify-between"),f=l()("text-baseline uppercases py-2 block",a,{"text-sky-500 hover:text-sky-600":d,"text-blueGray-700 hover:text-blueGray-500":!d}),m=l()("mr-0 text-sms",i,{"opacity-75":d,"text-blueGray-300":!d});return(0,n.jsx)("li",{className:u,children:(0,n.jsx)(w(),{passHref:!0,href:r,children:(0,n.jsxs)("span",{className:h,children:[(0,n.jsx)("span",{className:f,children:t})," ",(0,n.jsx)("span",{className:m,children:s})]})})})},E=function(){return(0,n.jsx)("div",{className:"z-50 col-span-2 flex h-screen flex-col bg-white shadow-sm shadow-gray-300 dark:shadow-gray-900",children:(0,n.jsxs)("div",{className:"align-self-bottom z-10 flex h-full flex-col justify-between p-4 dark:bg-gray-900 dark:text-white",children:[(0,n.jsxs)("div",{className:"area-top",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)(N,{className:"text-neutral-800 dark:text-white"}),(0,n.jsx)(g.U,{})]}),(0,n.jsx)("hr",{className:"my-2 opacity-20"}),(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:"-ml-3 flex list-none flex-col pl-0 text-xs md:min-w-full md:flex-col",children:(0,n.jsx)(_,{label:"Dashboard",href:"/dashboard",image:(0,n.jsx)(p,{width:16})})})})]}),(0,n.jsx)("div",{className:"area-bottom",children:(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:"text-2xs flex list-none flex-col md:min-w-full md:flex-col",children:(0,n.jsx)(i,{classNames:"text-xs",href:"https://github.com/turbo-eth/turbo-eth",children:(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("span",{className:"",children:"Github"}),(0,n.jsx)(y,{width:16})]})})})})})]})})};function P(e){var t=e.children,r=e.meta;return(0,n.jsxs)("div",{className:"grid h-full max-h-screen min-h-screen grid-cols-12 overflow-hidden",children:[r,(0,n.jsx)(E,{}),(0,n.jsx)("div",{className:"z-10 col-span-10 max-h-screen",children:(0,n.jsxs)("div",{className:"overflow-autos flex h-full max-h-screen flex-col",children:[(0,n.jsx)("div",{className:"area-top z-10 flex-none",children:(0,n.jsx)(o,{})}),(0,n.jsx)("main",{className:"area-main flex-6 basis-4/5s mx-auto w-full grow overflow-auto bg-gray-100 p-10 dark:bg-gray-800 dark:text-white",children:t})]})})]})}var T=r(93304),S=function(){return(0,n.jsxs)(P,{meta:(0,n.jsx)(T.h,{title:"Admin",description:"TurboETH Admin"}),children:[(0,n.jsx)("h3",{className:"text-2xl font-bold",children:"Dashboard"}),(0,n.jsx)("hr",{className:"my-6 opacity-50"})]})}},93304:function(e,t,r){"use strict";r.d(t,{h:function(){return c}});var n=r(97458),s=r(32924),a=r.n(s),l=r(49072),i=r(11304),o=r(84502),c=function(e){var t=(0,l.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,n.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,n.jsx)(i.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.X.locale,site_name:o.X.site_name}})]})}},31772:function(e,t,r){"use strict";var n=r(25148);function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,a,l){if(l!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:s};return r.PropTypes=r,r}},7862:function(e,t,r){e.exports=r(31772)()},25148:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[81,774,888,179],(function(){return t=39920,e(e.s=t);var t}));var t=e.O();_N_E=t}]);