(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{6439:function(e,t,a){Promise.resolve().then(a.bind(a,9456))},9456:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return es}});var n=a(3827),o=a(4090),r=a(5594),s=a(7447),l=a.n(s),i=a(4991),d=a(1266),c=a(4104),u=a(8687),p=a(9310),f=a(1260),g=a(8082),m=a(7881),h=a(2642),x=a(9586),y=a(6007),v=a(7225),b=a(6674),j=a(9143),N="Dialog",[w,D]=(0,c.b)(N),[R,C]=w(N),k=e=>{let{__scopeDialog:t,children:a,open:r,defaultOpen:s,onOpenChange:l,modal:i=!0}=e,d=o.useRef(null),c=o.useRef(null),[f=!1,g]=(0,p.T)({prop:r,defaultProp:s,onChange:l});return(0,n.jsx)(R,{scope:t,triggerRef:d,contentRef:c,contentId:(0,u.M)(),titleId:(0,u.M)(),descriptionId:(0,u.M)(),open:f,onOpenChange:g,onOpenToggle:o.useCallback(()=>g(e=>!e),[g]),modal:i,children:a})};k.displayName=N;var _="DialogTrigger";o.forwardRef((e,t)=>{let{__scopeDialog:a,...o}=e,r=C(_,a),s=(0,d.e)(t,r.triggerRef);return(0,n.jsx)(x.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":G(r.open),...o,ref:s,onClick:(0,i.M)(e.onClick,r.onOpenToggle)})}).displayName=_;var I="DialogPortal",[O,M]=w(I,{forceMount:void 0}),E=e=>{let{__scopeDialog:t,forceMount:a,children:r,container:s}=e,l=C(I,t);return(0,n.jsx)(O,{scope:t,forceMount:a,children:o.Children.map(r,e=>(0,n.jsx)(h.z,{present:a||l.open,children:(0,n.jsx)(m.h,{asChild:!0,container:s,children:e})}))})};E.displayName=I;var P="DialogOverlay",F=o.forwardRef((e,t)=>{let a=M(P,e.__scopeDialog),{forceMount:o=a.forceMount,...r}=e,s=C(P,e.__scopeDialog);return s.modal?(0,n.jsx)(h.z,{present:o||s.open,children:(0,n.jsx)(W,{...r,ref:t})}):null});F.displayName=P;var W=o.forwardRef((e,t)=>{let{__scopeDialog:a,...o}=e,r=C(P,a);return(0,n.jsx)(v.Z,{as:j.g7,allowPinchZoom:!0,shards:[r.contentRef],children:(0,n.jsx)(x.WV.div,{"data-state":G(r.open),...o,ref:t,style:{pointerEvents:"auto",...o.style}})})}),z="DialogContent",A=o.forwardRef((e,t)=>{let a=M(z,e.__scopeDialog),{forceMount:o=a.forceMount,...r}=e,s=C(z,e.__scopeDialog);return(0,n.jsx)(h.z,{present:o||s.open,children:s.modal?(0,n.jsx)(S,{...r,ref:t}):(0,n.jsx)(V,{...r,ref:t})})});A.displayName=z;var S=o.forwardRef((e,t)=>{let a=C(z,e.__scopeDialog),r=o.useRef(null),s=(0,d.e)(t,a.contentRef,r);return o.useEffect(()=>{let e=r.current;if(e)return(0,b.Ry)(e)},[]),(0,n.jsx)(L,{...e,ref:s,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=a.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,a=0===t.button&&!0===t.ctrlKey;(2===t.button||a)&&e.preventDefault()}),onFocusOutside:(0,i.M)(e.onFocusOutside,e=>e.preventDefault())})}),V=o.forwardRef((e,t)=>{let a=C(z,e.__scopeDialog),r=o.useRef(!1),s=o.useRef(!1);return(0,n.jsx)(L,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var n,o;null===(n=e.onCloseAutoFocus)||void 0===n||n.call(e,t),t.defaultPrevented||(r.current||null===(o=a.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),r.current=!1,s.current=!1},onInteractOutside:t=>{var n,o;null===(n=e.onInteractOutside)||void 0===n||n.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(s.current=!0));let l=t.target;(null===(o=a.triggerRef.current)||void 0===o?void 0:o.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&s.current&&t.preventDefault()}})}),L=o.forwardRef((e,t)=>{let{__scopeDialog:a,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:l,...i}=e,c=C(z,a),u=o.useRef(null),p=(0,d.e)(t,u);return(0,y.EW)(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.M,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:l,children:(0,n.jsx)(f.XB,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":G(c.open),...i,ref:p,onDismiss:()=>c.onOpenChange(!1)})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Q,{titleId:c.titleId}),(0,n.jsx)(Y,{contentRef:u,descriptionId:c.descriptionId})]})]})}),T="DialogTitle",Z=o.forwardRef((e,t)=>{let{__scopeDialog:a,...o}=e,r=C(T,a);return(0,n.jsx)(x.WV.h2,{id:r.titleId,...o,ref:t})});Z.displayName=T;var q="DialogDescription",B=o.forwardRef((e,t)=>{let{__scopeDialog:a,...o}=e,r=C(q,a);return(0,n.jsx)(x.WV.p,{id:r.descriptionId,...o,ref:t})});B.displayName=q;var H="DialogClose",X=o.forwardRef((e,t)=>{let{__scopeDialog:a,...o}=e,r=C(H,a);return(0,n.jsx)(x.WV.button,{type:"button",...o,ref:t,onClick:(0,i.M)(e.onClick,()=>r.onOpenChange(!1))})});function G(e){return e?"open":"closed"}X.displayName=H;var K="DialogTitleWarning",[U,J]=(0,c.k)(K,{contentName:z,titleName:T,docsSlug:"dialog"}),Q=e=>{let{titleId:t}=e,a=J(K),n="`".concat(a.contentName,"` requires a `").concat(a.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(a.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(a.docsSlug);return o.useEffect(()=>{t&&!document.getElementById(t)&&console.error(n)},[n,t]),null},Y=e=>{let{contentRef:t,descriptionId:a}=e,n=J("DialogDescriptionWarning"),r="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(n.contentName,"}.");return o.useEffect(()=>{var e;let n=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");a&&n&&!document.getElementById(a)&&console.warn(r)},[r,t,a]),null},$=a(7461);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let ee=(0,$.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var et=a(1657);let ea=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,n.jsx)(F,{ref:t,className:(0,et.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...o})});ea.displayName=F.displayName;let en=o.forwardRef((e,t)=>{let{className:a,children:o,...r}=e;return(0,n.jsxs)(E,{children:[(0,n.jsx)(ea,{}),(0,n.jsxs)(A,{ref:t,className:(0,et.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...r,children:[o,(0,n.jsxs)(X,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(ee,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});en.displayName=A.displayName,o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,n.jsx)(Z,{ref:t,className:(0,et.cn)("text-lg font-semibold leading-none tracking-tight",a),...o})}).displayName=Z.displayName,o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,n.jsx)(B,{ref:t,className:(0,et.cn)("text-sm text-muted-foreground",a),...o})}).displayName=B.displayName;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let eo=(0,$.Z)("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),er=[{id:1,src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e",alt:"Landscape mountain view",category:"Nature"},{id:2,src:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",alt:"Forest in fog",category:"Nature"},{id:3,src:"https://images.unsplash.com/photo-1433086966358-54859d0ed716",alt:"Waterfall in forest",category:"Nature"},{id:4,src:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",alt:"Sunset over mountains",category:"Landscape"},{id:5,src:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e",alt:"Sun rays through trees",category:"Nature"},{id:6,src:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e",alt:"Lake view",category:"Landscape"}];function es(){let[e,t]=(0,o.useState)(null);return(0,n.jsxs)("div",{className:"container mx-auto px-4 py-16",children:[(0,n.jsxs)("div",{className:"flex items-center gap-4 mb-12",children:[(0,n.jsx)(eo,{className:"w-8 h-8 text-primary"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-4xl font-bold",children:"Photography"}),(0,n.jsx)("p",{className:"text-muted-foreground mt-2",children:"World through my lens."})]})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:er.map((e,a)=>(0,n.jsxs)(r.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*a},className:"relative aspect-square cursor-pointer group",onClick:()=>t(e),children:[(0,n.jsx)(l(),{src:e.src,alt:e.alt,fill:!0,className:"object-cover rounded-lg transition-transform group-hover:scale-[1.02]"}),(0,n.jsx)("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center",children:(0,n.jsx)("span",{className:"text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full",children:e.category})})]},e.id))}),(0,n.jsx)(k,{open:!!e,onOpenChange:()=>t(null),children:(0,n.jsx)(en,{className:"max-w-4xl h-[80vh] p-0",children:e&&(0,n.jsxs)("div",{className:"relative w-full h-full",children:[(0,n.jsx)(l(),{src:e.src,alt:e.alt,fill:!0,className:"object-contain",priority:!0}),(0,n.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent",children:[(0,n.jsx)("p",{className:"text-white text-lg font-medium",children:e.alt}),(0,n.jsx)("p",{className:"text-white/80 text-sm",children:e.category})]})]})})})]})}},1657:function(e,t,a){"use strict";a.d(t,{cn:function(){return r}});var n=a(3167),o=a(1367);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,o.m6)((0,n.W)(t))}},7447:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{getImageProps:function(){return l},default:function(){return i}});let n=a(6921),o=a(8630),r=a(1749),s=n._(a(536)),l=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}},i=r.Image}},function(e){e.O(0,[700,594,138,758,749,971,69,744],function(){return e(e.s=6439)}),_N_E=e.O()}]);