(()=>{var e={};e.id=105,e.ids=[105],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},41790:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page-experimental.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},3144:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>d,routeModule:()=>m,tree:()=>u});var s=r(73137),i=r(54647),n=r(4183),a=r.n(n),o=r(71775),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(t,c);let l=s.AppPageRouteModule,u=["",{children:["redirect",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,83116)),"/home/sanniv/expense/app/redirect/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,36598)),"/home/sanniv/expense/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"]}],d=["/home/sanniv/expense/app/redirect/page.tsx"],x="/redirect/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new l({definition:{kind:i.x.APP_PAGE,page:"/redirect/page",pathname:"/redirect",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},4018:(e,t,r)=>{Promise.resolve().then(r.bind(r,40167))},40167:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(60080),i=r(9885),n=r(5705),a=r(12125);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);var c=r(68384),l=r(57114),u=r(28516);let d={joinInvitedRoom:async(e,t)=>{let{roomId:r}=t;if(!r)throw Error("Missing required parameter: roomId");try{let t=await (0,u.Ls)(r);t.success&&e.push(`/dashboard/trip/${t.trip.id}`)}catch(e){throw console.error("Error joining room:",e),Error("Failed to join room")}}};function x(){return s.jsx("div",{className:"min-h-screen w-full bg-background text-foreground flex flex-col items-center justify-center p-4",children:(0,s.jsxs)("div",{className:"text-center space-y-4",children:[s.jsx(n.Z,{className:"h-12 w-12 animate-spin mx-auto text-primary"}),s.jsx("h2",{className:"text-xl font-semibold",children:"Redirecting..."})]})})}function p(){return(0,s.jsxs)("div",{className:"min-h-screen w-full bg-background text-foreground flex flex-col items-center justify-center p-4",children:[(0,s.jsxs)("div",{className:"max-w-md w-full text-center space-y-6",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx("div",{className:"flex justify-center",children:s.jsx(o,{className:"h-24 w-24 text-destructive animate-pulse"})}),s.jsx("h1",{className:"text-4xl font-bold tracking-tighter sm:text-5xl",children:"Redirect Error"}),s.jsx("h2",{className:"text-xl font-semibold tracking-tight sm:text-2xl",children:"Invalid Redirect Request"})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[s.jsx(c.z,{variant:"default",onClick:()=>window.history.back(),className:"min-w-[140px]",children:"Go Back"}),s.jsx(c.z,{variant:"outline",onClick:()=>window.location.href="/",className:"min-w-[140px]",children:"Home Page"})]})]}),s.jsx("div",{className:"absolute bottom-4 text-center text-sm text-muted-foreground",children:s.jsx("p",{children:"\xa9 2024 Tripkaro. All rights reserved."})})]})}let m=function(){let e=(0,l.useRouter)(),[t,r]=(0,i.useState)(!0),[n,a]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{let t=new URLSearchParams(window.location.search),s=t.get("fn"),i=async()=>{if(!s||!Object.keys(d).includes(s)){a(!1),r(!1);return}let i={};t.forEach((e,t)=>{"fn"!==t&&(i[t]=e)});try{a(!0),await d[s](e,i)}catch(e){console.error("Error in redirect function:",e),a(!1)}finally{r(!1)}};i()},[e]),t)?s.jsx(x,{}):n?null:s.jsx(p,{})}},83116:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>c});var s=r(17536);let i=(0,s.createProxy)(String.raw`/home/sanniv/expense/app/redirect/page.tsx`),{__esModule:n,$$typeof:a}=i,o=i.default,c=o}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[650,690,262,684,384,838,348],()=>r(3144));module.exports=s})();