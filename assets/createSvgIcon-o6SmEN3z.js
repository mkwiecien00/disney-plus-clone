import{B as ne,D as W,E as oe,F as O,G as se,H as ie,l as ue,m as ae,n as le,i as g,p as ce,_ as fe,d as N,g as de,k as pe,C as me}from"./useTheme-PVIvZca4.js";import{r as i,m as ye,j as P,g as ve}from"./index-G_BKMnoN.js";var H={exports:{}},s={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=typeof Symbol=="function"&&Symbol.for,k=a?Symbol.for("react.element"):60103,D=a?Symbol.for("react.portal"):60106,b=a?Symbol.for("react.fragment"):60107,$=a?Symbol.for("react.strict_mode"):60108,_=a?Symbol.for("react.profiler"):60114,x=a?Symbol.for("react.provider"):60109,C=a?Symbol.for("react.context"):60110,j=a?Symbol.for("react.async_mode"):60111,w=a?Symbol.for("react.concurrent_mode"):60111,E=a?Symbol.for("react.forward_ref"):60112,I=a?Symbol.for("react.suspense"):60113,he=a?Symbol.for("react.suspense_list"):60120,R=a?Symbol.for("react.memo"):60115,T=a?Symbol.for("react.lazy"):60116,Se=a?Symbol.for("react.block"):60121,ge=a?Symbol.for("react.fundamental"):60117,be=a?Symbol.for("react.responder"):60118,$e=a?Symbol.for("react.scope"):60119;function f(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case k:switch(e=e.type,e){case j:case w:case b:case _:case $:case I:return e;default:switch(e=e&&e.$$typeof,e){case C:case E:case T:case R:case x:return e;default:return t}}case D:return t}}}function X(e){return f(e)===w}s.AsyncMode=j;s.ConcurrentMode=w;s.ContextConsumer=C;s.ContextProvider=x;s.Element=k;s.ForwardRef=E;s.Fragment=b;s.Lazy=T;s.Memo=R;s.Portal=D;s.Profiler=_;s.StrictMode=$;s.Suspense=I;s.isAsyncMode=function(e){return X(e)||f(e)===j};s.isConcurrentMode=X;s.isContextConsumer=function(e){return f(e)===C};s.isContextProvider=function(e){return f(e)===x};s.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===k};s.isForwardRef=function(e){return f(e)===E};s.isFragment=function(e){return f(e)===b};s.isLazy=function(e){return f(e)===T};s.isMemo=function(e){return f(e)===R};s.isPortal=function(e){return f(e)===D};s.isProfiler=function(e){return f(e)===_};s.isStrictMode=function(e){return f(e)===$};s.isSuspense=function(e){return f(e)===I};s.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===b||e===w||e===_||e===$||e===I||e===he||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===R||e.$$typeof===x||e.$$typeof===C||e.$$typeof===E||e.$$typeof===ge||e.$$typeof===be||e.$$typeof===$e||e.$$typeof===Se)};s.typeOf=f;H.exports=s;var _e=H.exports,Y=_e,xe={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ce={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J={};J[Y.ForwardRef]=xe;J[Y.Memo]=Ce;var tt=ne(function(e,t){var r=e.styles,n=W([r],void 0,i.useContext(oe)),o=i.useRef();return O(function(){var l=t.key+"-global",u=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),c=!1,d=document.querySelector('style[data-emotion="'+l+" "+n.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),d!==null&&(c=!0,d.setAttribute("data-emotion",l),u.hydrate([d])),o.current=[u,c],function(){u.flush()}},[t]),O(function(){var l=o.current,u=l[0],c=l[1];if(c){l[1]=!1;return}if(n.next!==void 0&&se(t,n.next,!0),u.tags.length){var d=u.tags[u.tags.length-1].nextElementSibling;u.before=d,u.flush()}t.insert("",n,u,!1)},[t,n.name]),null});function we(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return W(t)}var rt=function(){var t=we.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Ee(...e){return e.reduce((t,r)=>r==null?t:function(...o){t.apply(this,o),r.apply(this,o)},()=>{})}function Ie(e,t=166){let r;function n(...o){const l=()=>{e.apply(this,o)};clearTimeout(r),r=setTimeout(l,t)}return n.clear=()=>{clearTimeout(r)},n}function Re(e,t){return()=>null}function Te(e,t){var r,n;return i.isValidElement(e)&&t.indexOf((r=e.type.muiName)!=null?r:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function Q(e){return e&&e.ownerDocument||document}function Me(e){return Q(e).defaultView||window}function ze(e,t){return()=>null}function Z(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const ee=typeof window<"u"?i.useLayoutEffect:i.useEffect;let B=0;function Fe(e){const[t,r]=i.useState(e),n=e||t;return i.useEffect(()=>{t==null&&(B+=1,r(`mui-${B}`))},[t]),n}const U=ye.useId;function Ne(e){if(U!==void 0){const t=U();return e??t}return Fe(e)}function Pe(e,t,r,n,o){return null}function Ae({controlled:e,default:t,name:r,state:n="value"}){const{current:o}=i.useRef(e!==void 0),[l,u]=i.useState(t),c=o?e:l,d=i.useCallback(m=>{o||u(m)},[]);return[c,d]}function Ve(e){const t=i.useRef(e);return ee(()=>{t.current=e}),i.useRef((...r)=>(0,t.current)(...r)).current}function ke(...e){return i.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{Z(r,t)})},e)}let M=!0,A=!1,G;const De={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function je(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&De[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Le(e){e.metaKey||e.altKey||e.ctrlKey||(M=!0)}function z(){M=!1}function qe(){this.visibilityState==="hidden"&&A&&(M=!0)}function Oe(e){e.addEventListener("keydown",Le,!0),e.addEventListener("mousedown",z,!0),e.addEventListener("pointerdown",z,!0),e.addEventListener("touchstart",z,!0),e.addEventListener("visibilitychange",qe,!0)}function Be(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return M||je(t)}function Ue(){const e=i.useCallback(o=>{o!=null&&Oe(o.ownerDocument)},[]),t=i.useRef(!1);function r(){return t.current?(A=!0,window.clearTimeout(G),G=window.setTimeout(()=>{A=!1},100),t.current=!1,!0):!1}function n(o){return Be(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:n,onBlur:r,ref:e}}const nt=ie();function ot(e){return typeof e=="string"}function Ge(e){return ue("MuiSvgIcon",e)}ae("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Ke=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],We=e=>{const{color:t,fontSize:r,classes:n}=e,o={root:["root",t!=="inherit"&&`color${g(t)}`,`fontSize${g(r)}`]};return pe(o,Ge,n)},He=le("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.color!=="inherit"&&t[`color${g(r.color)}`],t[`fontSize${g(r.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var r,n,o,l,u,c,d,m,S,y,v,h,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(r=e.transitions)==null||(n=r.create)==null?void 0:n.call(r,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((l=e.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,20))||"1.25rem",medium:((c=e.typography)==null||(d=c.pxToRem)==null?void 0:d.call(c,24))||"1.5rem",large:((m=e.typography)==null||(S=m.pxToRem)==null?void 0:S.call(m,35))||"2.1875rem"}[t.fontSize],color:(y=(v=(e.vars||e).palette)==null||(v=v[t.color])==null?void 0:v.main)!=null?y:{action:(h=(e.vars||e).palette)==null||(h=h.action)==null?void 0:h.active,disabled:(p=(e.vars||e).palette)==null||(p=p.action)==null?void 0:p.disabled,inherit:void 0}[t.color]}}),V=i.forwardRef(function(t,r){const n=ce({props:t,name:"MuiSvgIcon"}),{children:o,className:l,color:u="inherit",component:c="svg",fontSize:d="medium",htmlColor:m,inheritViewBox:S=!1,titleAccess:y,viewBox:v="0 0 24 24"}=n,h=fe(n,Ke),p=i.isValidElement(o)&&o.type==="svg",L=N({},n,{color:u,component:c,fontSize:d,instanceFontSize:t.fontSize,inheritViewBox:S,viewBox:v,hasSvgAsChild:p}),q={};S||(q.viewBox=v);const re=We(L);return P.jsxs(He,N({as:c,className:de(re.root,l),focusable:"false",color:m,"aria-hidden":y?void 0:!0,role:y?"img":void 0,ref:r},q,h,p&&o.props,{ownerState:L,children:[p?o.props.children:o,y?P.jsx("title",{children:y}):null]}))});V.muiName="SvgIcon";function Xe(e,t){function r(n,o){return P.jsx(V,N({"data-testid":`${t}Icon`,ref:o},n,{children:e}))}return r.muiName=V.muiName,i.memo(i.forwardRef(r))}var te={exports:{}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(te);var st=te.exports,F={};const Ye={configure:e=>{me.configure(e)}},Je=Object.freeze(Object.defineProperty({__proto__:null,capitalize:g,createChainedFunction:Ee,createSvgIcon:Xe,debounce:Ie,deprecatedPropType:Re,isMuiElement:Te,ownerDocument:Q,ownerWindow:Me,requirePropFactory:ze,setRef:Z,unstable_ClassNameGenerator:Ye,unstable_useEnhancedEffect:ee,unstable_useId:Ne,unsupportedProp:Pe,useControlled:Ae,useEventCallback:Ve,useForkRef:ke,useIsFocusVisible:Ue},Symbol.toStringTag,{value:"Module"})),Qe=ve(Je);var K;function it(){return K||(K=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Qe}(F)),F}export{tt as G,Ue as a,Ve as b,ot as c,ee as d,Z as e,Me as f,Ee as g,Ie as h,st as i,Xe as j,rt as k,Q as o,it as r,nt as s,ke as u};