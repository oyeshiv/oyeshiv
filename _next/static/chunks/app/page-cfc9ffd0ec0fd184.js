(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{937:function(e,n,t){Promise.resolve().then(t.bind(t,6596)),Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23))},6596:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var a=t(3827),r=t(7815),s=t(4090),i=t(4991),c=t(4104),l=t(4261),o=t(2642),d=t(9586),u=t(3876),f=t(9310),m=t(8687),h="Tabs",[x,y]=(0,c.b)(h,[l.Pc]),p=(0,l.Pc)(),[v,g]=x(h),b=s.forwardRef((e,n)=>{let{__scopeTabs:t,value:r,onValueChange:s,defaultValue:i,orientation:c="horizontal",dir:l,activationMode:o="automatic",...h}=e,x=(0,u.gm)(l),[y,p]=(0,f.T)({prop:r,onChange:s,defaultProp:i});return(0,a.jsx)(v,{scope:t,baseId:(0,m.M)(),value:y,onValueChange:p,orientation:c,dir:x,activationMode:o,children:(0,a.jsx)(d.WV.div,{dir:x,"data-orientation":c,...h,ref:n})})});b.displayName=h;var N="TabsList",j=s.forwardRef((e,n)=>{let{__scopeTabs:t,loop:r=!0,...s}=e,i=g(N,t),c=p(t);return(0,a.jsx)(l.fC,{asChild:!0,...c,orientation:i.orientation,dir:i.dir,loop:r,children:(0,a.jsx)(d.WV.div,{role:"tablist","aria-orientation":i.orientation,...s,ref:n})})});j.displayName=N;var w="TabsTrigger",k=s.forwardRef((e,n)=>{let{__scopeTabs:t,value:r,disabled:s=!1,...c}=e,o=g(w,t),u=p(t),f=M(o.baseId,r),m=R(o.baseId,r),h=r===o.value;return(0,a.jsx)(l.ck,{asChild:!0,...u,focusable:!s,active:h,children:(0,a.jsx)(d.WV.button,{type:"button",role:"tab","aria-selected":h,"aria-controls":m,"data-state":h?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:f,...c,ref:n,onMouseDown:(0,i.M)(e.onMouseDown,e=>{s||0!==e.button||!1!==e.ctrlKey?e.preventDefault():o.onValueChange(r)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&o.onValueChange(r)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==o.activationMode;h||s||!e||o.onValueChange(r)})})})});k.displayName=w;var Z="TabsContent",C=s.forwardRef((e,n)=>{let{__scopeTabs:t,value:r,forceMount:i,children:c,...l}=e,u=g(Z,t),f=M(u.baseId,r),m=R(u.baseId,r),h=r===u.value,x=s.useRef(h);return s.useEffect(()=>{let e=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,a.jsx)(o.z,{present:i||h,children:t=>{let{present:r}=t;return(0,a.jsx)(d.WV.div,{"data-state":h?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":f,hidden:!r,id:m,tabIndex:0,...l,ref:n,style:{...e.style,animationDuration:x.current?"0s":void 0},children:r&&c})}})});function M(e,n){return"".concat(e,"-trigger-").concat(n)}function R(e,n){return"".concat(e,"-content-").concat(n)}C.displayName=Z;var T=t(1657);let V=s.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,a.jsx)(j,{ref:n,className:(0,T.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...r})});V.displayName=j.displayName;let q=s.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,a.jsx)(k,{ref:n,className:(0,T.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...r})});q.displayName=k.displayName;let D=s.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,a.jsx)(C,{ref:n,className:(0,T.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...r})});D.displayName=C.displayName;var A=t(479),P=t(695),I=t(2244),S=t(3276),W=t(5913),F=t(2986),_=t(1828),z=t(4609),E=t(6034);let O={frontend:[{name:"React",icon:(0,a.jsx)(A.Z,{className:"w-8 h-8"})},{name:"Next.js",icon:(0,a.jsx)(A.Z,{className:"w-8 h-8"})},{name:"TypeScript",icon:(0,a.jsx)(A.Z,{className:"w-8 h-8"})},{name:"Tailwind CSS",icon:(0,a.jsx)(A.Z,{className:"w-8 h-8"})}],backend:[{name:"Node.js",icon:(0,a.jsx)(P.Z,{className:"w-8 h-8"})},{name:"Python",icon:(0,a.jsx)(I.Z,{className:"w-8 h-8"})},{name:"PostgreSQL",icon:(0,a.jsx)(S.Z,{className:"w-8 h-8"})},{name:"AWS",icon:(0,a.jsx)(W.Z,{className:"w-8 h-8"})}],tools:[{name:"Git",icon:(0,a.jsx)(F.Z,{className:"w-8 h-8"})},{name:"Docker",icon:(0,a.jsx)(_.Z,{className:"w-8 h-8"})},{name:"Jest",icon:(0,a.jsx)(z.Z,{className:"w-8 h-8"})},{name:"CI/CD",icon:(0,a.jsx)(E.Z,{className:"w-8 h-8"})}]};function B(){return(0,a.jsxs)(b,{defaultValue:"frontend",className:"w-full",children:[(0,a.jsxs)(V,{className:"grid w-full grid-cols-3",children:[(0,a.jsx)(q,{value:"frontend",children:"Frontend"}),(0,a.jsx)(q,{value:"backend",children:"Backend"}),(0,a.jsx)(q,{value:"tools",children:"Tools & Others"})]}),(0,a.jsx)(D,{value:"frontend",className:"mt-6",children:(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:O.frontend.map(e=>(0,a.jsxs)(r.Zb,{className:"p-6 text-center hover:shadow-lg transition-shadow",children:[(0,a.jsx)("div",{className:"flex justify-center mb-4",children:e.icon}),(0,a.jsx)("p",{className:"font-medium",children:e.name})]},e.name))})}),(0,a.jsx)(D,{value:"backend",className:"mt-6",children:(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:O.backend.map(e=>(0,a.jsxs)(r.Zb,{className:"p-6 text-center hover:shadow-lg transition-shadow",children:[(0,a.jsx)("div",{className:"flex justify-center mb-4",children:e.icon}),(0,a.jsx)("p",{className:"font-medium",children:e.name})]},e.name))})}),(0,a.jsx)(D,{value:"tools",className:"mt-6",children:(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:O.tools.map(e=>(0,a.jsxs)(r.Zb,{className:"p-6 text-center hover:shadow-lg transition-shadow",children:[(0,a.jsx)("div",{className:"flex justify-center mb-4",children:e.icon}),(0,a.jsx)("p",{className:"font-medium",children:e.name})]},e.name))})})]})}},7815:function(e,n,t){"use strict";t.d(n,{Ol:function(){return c},SZ:function(){return o},Zb:function(){return i},aY:function(){return d},ll:function(){return l}});var a=t(3827),r=t(4090),s=t(1657);let i=r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:n,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...r})});i.displayName="Card";let c=r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:n,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...r})});c.displayName="CardHeader";let l=r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,a.jsx)("h3",{ref:n,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...r})});l.displayName="CardTitle";let o=r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,a.jsx)("p",{ref:n,className:(0,s.cn)("text-sm text-muted-foreground",t),...r})});o.displayName="CardDescription";let d=r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:n,className:(0,s.cn)("p-6 pt-0",t),...r})});d.displayName="CardContent",r.forwardRef((e,n)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:n,className:(0,s.cn)("flex items-center p-6 pt-0",t),...r})}).displayName="CardFooter"},1657:function(e,n,t){"use strict";t.d(n,{cn:function(){return s}});var a=t(3167),r=t(1367);function s(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.m6)((0,a.W)(n))}},1828:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(7461).Z)("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]])},5913:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(7461).Z)("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]])},3276:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(7461).Z)("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},2986:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(7461).Z)("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]])},695:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(7461).Z)("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]])},2244:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(7461).Z)("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]])},4609:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(7461).Z)("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]])},6034:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,t(7461).Z)("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]])}},function(e){e.O(0,[700,138,231,749,971,69,744],function(){return e(e.s=937)}),_N_E=e.O()}]);