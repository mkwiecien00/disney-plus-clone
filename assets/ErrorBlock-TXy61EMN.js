var ie=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var i=(t,e,r)=>(ie(t,e,"read from private field"),r?r.call(t):e.get(t)),l=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},h=(t,e,r,s)=>(ie(t,e,"write to private field"),s?s.call(t,r):e.set(t,r),r);var f=(t,e,r)=>(ie(t,e,"access private method"),r);import{S as Ie,o as ae,p as Ae,q as be,t as Re,v as Qe,x as Fe,y as Te,z as Oe,A as we,r as O,B as Le,c as _,u as Ee,j as oe}from"./index-Gi-OKZpW.js";import{P as De}from"./MotionContainer-aH0jcYhy.js";var v,c,$,p,E,I,R,k,A,Q,U,P,C,F,x,B,V,ue,K,ce,z,le,W,he,N,de,q,fe,H,pe,X,Ue,Ce,Be=(Ce=class extends Ie{constructor(e,r){super();l(this,x);l(this,V);l(this,K);l(this,z);l(this,W);l(this,N);l(this,q);l(this,H);l(this,X);l(this,v,void 0);l(this,c,void 0);l(this,$,void 0);l(this,p,void 0);l(this,E,void 0);l(this,I,void 0);l(this,R,void 0);l(this,k,void 0);l(this,A,void 0);l(this,Q,void 0);l(this,U,void 0);l(this,P,void 0);l(this,C,void 0);l(this,F,new Set);this.options=r,h(this,v,e),h(this,R,null),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,c).addObserver(this),_e(i(this,c),this.options)?f(this,x,B).call(this):this.updateResult(),f(this,W,he).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ve(i(this,c),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ve(i(this,c),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,N,de).call(this),f(this,q,fe).call(this),i(this,c).removeObserver(this)}setOptions(e,r){const s=this.options,n=i(this,c);if(this.options=i(this,v).defaultQueryOptions(e),ae(s,this.options)||i(this,v).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,c),observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),f(this,H,pe).call(this);const a=this.hasListeners();a&&Se(i(this,c),n,this.options,s)&&f(this,x,B).call(this),this.updateResult(r),a&&(i(this,c)!==n||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&f(this,V,ue).call(this);const o=f(this,K,ce).call(this);a&&(i(this,c)!==n||this.options.enabled!==s.enabled||o!==i(this,C))&&f(this,z,le).call(this,o)}getOptimisticResult(e){const r=i(this,v).getQueryCache().build(i(this,v),e),s=this.createResult(r,e);return ke(this,s)&&(h(this,p,s),h(this,I,this.options),h(this,E,i(this,c).state)),s}getCurrentResult(){return i(this,p)}trackResult(e){const r={};return Object.keys(e).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(i(this,F).add(s),e[s])})}),r}getCurrentQuery(){return i(this,c)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const r=i(this,v).defaultQueryOptions(e),s=i(this,v).getQueryCache().build(i(this,v),r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(e){return f(this,x,B).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),i(this,p)))}createResult(e,r){var me;const s=i(this,c),n=this.options,a=i(this,p),o=i(this,E),d=i(this,I),S=e!==s?e.state:i(this,$),{state:u}=e;let{error:M,errorUpdatedAt:G,fetchStatus:w,status:b}=u,j=!1,y;if(r._optimisticResults){const g=this.hasListeners(),se=!g&&_e(e,r),je=g&&Se(e,s,r,n);(se||je)&&(w=Te(e.options.networkMode)?"fetching":"paused",u.dataUpdatedAt||(b="pending")),r._optimisticResults==="isRestoring"&&(w="idle")}if(r.select&&typeof u.data<"u")if(a&&u.data===(o==null?void 0:o.data)&&r.select===i(this,k))y=i(this,A);else try{h(this,k,r.select),y=r.select(u.data),y=Oe(a==null?void 0:a.data,y,r),h(this,A,y),h(this,R,null)}catch(g){h(this,R,g)}else y=u.data;if(typeof r.placeholderData<"u"&&typeof y>"u"&&b==="pending"){let g;if(a!=null&&a.isPlaceholderData&&r.placeholderData===(d==null?void 0:d.placeholderData))g=a.data;else if(g=typeof r.placeholderData=="function"?r.placeholderData((me=i(this,Q))==null?void 0:me.state.data,i(this,Q)):r.placeholderData,r.select&&typeof g<"u")try{g=r.select(g),h(this,R,null)}catch(se){h(this,R,se)}typeof g<"u"&&(b="success",y=Oe(a==null?void 0:a.data,g,r),j=!0)}i(this,R)&&(M=i(this,R),y=i(this,A),G=Date.now(),b="error");const ee=w==="fetching",te=b==="pending",re=b==="error",ge=te&&ee;return{status:b,fetchStatus:w,isPending:te,isSuccess:b==="success",isError:re,isInitialLoading:ge,isLoading:ge,data:y,dataUpdatedAt:u.dataUpdatedAt,error:M,errorUpdatedAt:G,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>S.dataUpdateCount||u.errorUpdateCount>S.errorUpdateCount,isFetching:ee,isRefetching:ee&&!te,isLoadingError:re&&u.dataUpdatedAt===0,isPaused:w==="paused",isPlaceholderData:j,isRefetchError:re&&u.dataUpdatedAt!==0,isStale:ye(e,r),refetch:this.refetch}}updateResult(e){const r=i(this,p),s=this.createResult(i(this,c),this.options);if(h(this,E,i(this,c).state),h(this,I,this.options),i(this,E).data!==void 0&&h(this,Q,i(this,c)),ae(s,r))return;h(this,p,s);const n={},a=()=>{if(!r)return!0;const{notifyOnChangeProps:o}=this.options,d=typeof o=="function"?o():o;if(d==="all"||!d&&!i(this,F).size)return!0;const m=new Set(d??i(this,F));return this.options.throwOnError&&m.add("error"),Object.keys(i(this,p)).some(S=>{const u=S;return i(this,p)[u]!==r[u]&&m.has(u)})};(e==null?void 0:e.listeners)!==!1&&a()&&(n.listeners=!0),f(this,X,Ue).call(this,{...n,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,W,he).call(this)}},v=new WeakMap,c=new WeakMap,$=new WeakMap,p=new WeakMap,E=new WeakMap,I=new WeakMap,R=new WeakMap,k=new WeakMap,A=new WeakMap,Q=new WeakMap,U=new WeakMap,P=new WeakMap,C=new WeakMap,F=new WeakMap,x=new WeakSet,B=function(e){f(this,H,pe).call(this);let r=i(this,c).fetch(this.options,e);return e!=null&&e.throwOnError||(r=r.catch(Ae)),r},V=new WeakSet,ue=function(){if(f(this,N,de).call(this),be||i(this,p).isStale||!Re(this.options.staleTime))return;const r=Qe(i(this,p).dataUpdatedAt,this.options.staleTime)+1;h(this,U,setTimeout(()=>{i(this,p).isStale||this.updateResult()},r))},K=new WeakSet,ce=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(i(this,c)):this.options.refetchInterval)??!1},z=new WeakSet,le=function(e){f(this,q,fe).call(this),h(this,C,e),!(be||this.options.enabled===!1||!Re(i(this,C))||i(this,C)===0)&&h(this,P,setInterval(()=>{(this.options.refetchIntervalInBackground||Fe.isFocused())&&f(this,x,B).call(this)},i(this,C)))},W=new WeakSet,he=function(){f(this,V,ue).call(this),f(this,z,le).call(this,f(this,K,ce).call(this))},N=new WeakSet,de=function(){i(this,U)&&(clearTimeout(i(this,U)),h(this,U,void 0))},q=new WeakSet,fe=function(){i(this,P)&&(clearInterval(i(this,P)),h(this,P,void 0))},H=new WeakSet,pe=function(){const e=i(this,v).getQueryCache().build(i(this,v),this.options);if(e===i(this,c))return;const r=i(this,c);h(this,c,e),h(this,$,e.state),this.hasListeners()&&(r==null||r.removeObserver(this),e.addObserver(this))},X=new WeakSet,Ue=function(e){we.batch(()=>{e.listeners&&this.listeners.forEach(r=>{r(i(this,p))}),i(this,v).getQueryCache().notify({query:i(this,c),type:"observerResultsUpdated"})})},Ce);function $e(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function _e(t,e){return $e(t,e)||t.state.dataUpdatedAt>0&&ve(t,e,e.refetchOnMount)}function ve(t,e,r){if(e.enabled!==!1){const s=typeof r=="function"?r(t):r;return s==="always"||s!==!1&&ye(t,e)}return!1}function Se(t,e,r,s){return r.enabled!==!1&&(t!==e||s.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&ye(t,r)}function ye(t,e){return t.isStaleByTime(e.staleTime)}function ke(t,e){return!ae(t.getCurrentResult(),e)}var Pe=O.createContext(!1),Ve=()=>O.useContext(Pe);Pe.Provider;function Ke(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var ze=O.createContext(Ke()),We=()=>O.useContext(ze);function Ne(t,e){return typeof t=="function"?t(...e):!!t}var qe=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},He=t=>{O.useEffect(()=>{t.clearReset()},[t])},Ge=({result:t,errorResetBoundary:e,throwOnError:r,query:s})=>t.isError&&!e.isReset()&&!t.isFetching&&s&&Ne(r,[t.error,s]),Ye=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},Je=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,Xe=(t,e,r)=>e.fetchOptimistic(t).catch(()=>{r.clearReset()});function Ze(t,e,r){const s=Le(r),n=Ve(),a=We(),o=s.defaultQueryOptions(t);o._optimisticResults=n?"isRestoring":"optimistic",Ye(o),qe(o,a),He(a);const[d]=O.useState(()=>new e(s,o)),m=d.getOptimisticResult(o);if(O.useSyncExternalStore(O.useCallback(S=>{const u=n?()=>{}:d.subscribe(we.batchCalls(S));return d.updateResult(),u},[d,n]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),O.useEffect(()=>{d.setOptions(o,{listeners:!1})},[o,d]),Je(o,m))throw Xe(o,d,a);if(Ge({result:m,errorResetBoundary:a,throwOnError:o.throwOnError,query:s.getQueryCache().get(o.queryHash)}))throw m.error;return o.notifyOnChangeProps?m:d.trackResult(m)}function mt(t,e){return Ze(t,Be,e)}const L="https://api.themoviedb.org/3/",D="35f3fea26d7c6bea37a8777ddbddbed3",bt=[{category:"popular-movies",type:"movie",title:"Popular Movies",path:`${L}/discover/movie?with_watch_providers=337&watch_region=US&language=en-US&sort_by=popularity.desc&api_key=${D}`},{category:"popular-series",type:"series",title:"Popular Series",path:`${L}/discover/tv?with_watch_providers=337&watch_region=US&language=en-US&sort_by=popularity.desc&api_key=${D}`},{category:"upcoming-movies",type:"movie",title:"Upcoming Movies",path:`${L}/movie/upcoming?region=US&language=en-US&api_key=${D}`},{category:"top-rated-movies",type:"movie",title:"Top Rated Movies",path:`${L}/movie/top_rated?region=US&language=en-US&api_key=${D}`},{category:"top-rated-series",type:"series",title:"Top Rated Series",path:`${L}/tv/top_rated?region=US&language=en-US&api_key=${D}`}];var xe={},T={};Object.defineProperty(T,"__esModule",{value:!0});T.cssValue=T.parseLengthAndUnit=void 0;var et={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Me(t){if(typeof t=="number")return{value:t,unit:"px"};var e,r=(t.match(/^[0-9.]*/)||"").toString();r.includes(".")?e=parseFloat(r):e=parseInt(r,10);var s=(t.match(/[^0-9]*$/)||"").toString();return et[s]?{value:e,unit:s}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}T.parseLengthAndUnit=Me;function tt(t){var e=Me(t);return"".concat(e.value).concat(e.unit)}T.cssValue=tt;var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.createAnimation=void 0;var rt=function(t,e,r){var s="react-spinners-".concat(t,"-").concat(r);if(typeof window>"u"||!window.document)return s;var n=document.createElement("style");document.head.appendChild(n);var a=n.sheet,o=`
    @keyframes `.concat(s,` {
      `).concat(e,`
    }
  `);return a&&a.insertRule(o,0),s};Z.createAnimation=rt;var J=_&&_.__assign||function(){return J=Object.assign||function(t){for(var e,r=1,s=arguments.length;r<s;r++){e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},J.apply(this,arguments)},st=_&&_.__createBinding||(Object.create?function(t,e,r,s){s===void 0&&(s=r);var n=Object.getOwnPropertyDescriptor(e,r);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,s,n)}:function(t,e,r,s){s===void 0&&(s=r),t[s]=e[r]}),it=_&&_.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),nt=_&&_.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&st(e,t,r);return it(e,t),e},at=_&&_.__rest||function(t,e){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)e.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};Object.defineProperty(xe,"__esModule",{value:!0});var Y=nt(O),ne=T,ot=Z,ut=(0,ot.createAnimation)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");function ct(t){var e=t.loading,r=e===void 0?!0:e,s=t.color,n=s===void 0?"#000000":s,a=t.speedMultiplier,o=a===void 0?1:a,d=t.cssOverride,m=d===void 0?{}:d,S=t.size,u=S===void 0?15:S,M=t.margin,G=M===void 0?2:M,w=at(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),b=J({display:"inherit"},m),j=function(y){return{backgroundColor:n,width:(0,ne.cssValue)(u),height:(0,ne.cssValue)(u),margin:(0,ne.cssValue)(G),borderRadius:"100%",display:"inline-block",animation:"".concat(ut," ").concat(.75/o,"s ").concat(y*.12/o,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return r?Y.createElement("span",J({style:b},w),Y.createElement("span",{style:j(1)}),Y.createElement("span",{style:j(2)}),Y.createElement("span",{style:j(3)})):null}var lt=xe.default=ct;const Rt=()=>oe.jsx(ht,{children:oe.jsx(lt,{color:"rgba(255, 255, 255, 0.7)",margin:4,size:10})}),ht=Ee.div`
	margin: 0 60px 50px;
`,dt=({message:t})=>oe.jsx(ft,{children:t});dt.propTypes={message:De.string};const ft=Ee.p`
	margin: 0 60px 50px;
`;export{D as A,L as B,dt as E,Rt as L,bt as c,mt as u};