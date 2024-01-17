import{j as r,r as a,m as qe,u as _,f as Ne,p as De}from"./index-9li2z96X.js";import{u as Se,L as ve,E as we}from"./ErrorBlock-zUNy4Obx.js";import{C as Ce}from"./Container--WguAKYD.js";import{P as me,O as ee}from"./MotionContainer-ESEckwcE.js";import{G as Re}from"./GridContainer-menOhT9l.js";import{G as _e,u as ze,f as he,d as te,h as Ge,c as ge,r as Qe,i as Ue,s as Ie}from"./createSvgIcon-y7oStP8C.js";import{u as Ve,_ as je,b as d,q as Ke,T as Ze,j as Je,i as Xe,k as Ee,m as Ye,c as ye,f as ne,h as et,t as tt}from"./useTheme-qAOzjQl-.js";import{T as nt}from"./Title-AmsEGDHV.js";import"./motion-4OxqokiU.js";function ot(e){return e==null||Object.keys(e).length===0}function rt(e){const{styles:t,defaultTheme:n={}}=e,i=typeof t=="function"?o=>t(ot(o)?n:o):t;return r.jsx(_e,{styles:i})}function it({styles:e,themeId:t,defaultTheme:n={}}){const i=Ve(n),o=typeof e=="function"?e(t&&i[t]||i):e;return r.jsx(rt,{styles:o})}const at=["onChange","maxRows","minRows","style","value"];function D(e){return parseInt(e,10)||0}const st={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function xe(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const lt=a.forwardRef(function(t,n){const{onChange:i,maxRows:o,minRows:l=1,style:R,value:y}=t,b=je(t,at),{current:S}=a.useRef(y!=null),x=a.useRef(null),E=ze(n,x),c=a.useRef(null),v=a.useRef(0),[A,T]=a.useState({outerHeightStyle:0}),P=a.useCallback(()=>{const p=x.current,f=he(p).getComputedStyle(p);if(f.width==="0px")return{outerHeightStyle:0};const m=c.current;m.style.width=f.width,m.value=p.value||t.placeholder||"x",m.value.slice(-1)===`
`&&(m.value+=" ");const w=f.boxSizing,F=D(f.paddingBottom)+D(f.paddingTop),I=D(f.borderBottomWidth)+D(f.borderTopWidth),k=m.scrollHeight;m.value="x";const B=m.scrollHeight;let C=k;l&&(C=Math.max(Number(l)*B,C)),o&&(C=Math.min(Number(o)*B,C)),C=Math.max(C,B);const Q=C+(w==="border-box"?F+I:0),M=Math.abs(C-k)<=1;return{outerHeightStyle:Q,overflow:M}},[o,l,t.placeholder]),L=(p,z)=>{const{outerHeightStyle:f,overflow:m}=z;return v.current<20&&(f>0&&Math.abs((p.outerHeightStyle||0)-f)>1||p.overflow!==m)?(v.current+=1,{overflow:m,outerHeightStyle:f}):p},h=a.useCallback(()=>{const p=P();xe(p)||T(z=>L(z,p))},[P]);te(()=>{const p=()=>{const k=P();xe(k)||qe.flushSync(()=>{T(B=>L(B,k))})},z=()=>{v.current=0,p()};let f;const m=Ge(z),w=x.current,F=he(w);F.addEventListener("resize",m);let I;return typeof ResizeObserver<"u"&&(I=new ResizeObserver(z),I.observe(w)),()=>{m.clear(),cancelAnimationFrame(f),F.removeEventListener("resize",m),I&&I.disconnect()}},[P]),te(()=>{h()}),a.useEffect(()=>{v.current=0},[y]);const G=p=>{v.current=0,S||h(),i&&i(p)};return r.jsxs(a.Fragment,{children:[r.jsx("textarea",d({value:y,onChange:G,ref:E,rows:l,style:d({height:A.outerHeightStyle,overflow:A.overflow?"hidden":void 0},R)},b)),r.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:c,tabIndex:-1,style:d({},st.shadow,R,{paddingTop:0,paddingBottom:0})})]})});function ut({props:e,states:t,muiFormControl:n}){return t.reduce((i,o)=>(i[o]=e[o],n&&typeof e[o]>"u"&&(i[o]=n[o]),i),{})}const dt=a.createContext(void 0),ke=dt;function ct(){return a.useContext(ke)}function pt(e){return r.jsx(it,d({},e,{defaultTheme:Ke,themeId:Ze}))}function be(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function ft(e,t=!1){return e&&(be(e.value)&&e.value!==""||t&&be(e.defaultValue)&&e.defaultValue!=="")}function mt(e){return Xe("MuiInputBase",e)}const ht=Je("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),oe=ht,gt=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],yt=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${ne(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},xt=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},bt=e=>{const{classes:t,color:n,disabled:i,error:o,endAdornment:l,focused:R,formControl:y,fullWidth:b,hiddenLabel:S,multiline:x,readOnly:E,size:c,startAdornment:v,type:A}=e,T={root:["root",`color${ne(n)}`,i&&"disabled",o&&"error",b&&"fullWidth",R&&"focused",y&&"formControl",c&&c!=="medium"&&`size${ne(c)}`,x&&"multiline",v&&"adornedStart",l&&"adornedEnd",S&&"hiddenLabel",E&&"readOnly"],input:["input",i&&"disabled",A==="search"&&"inputTypeSearch",x&&"inputMultiline",c==="small"&&"inputSizeSmall",S&&"inputHiddenLabel",v&&"inputAdornedStart",l&&"inputAdornedEnd",E&&"readOnly"]};return et(T,mt,t)},St=Ee("div",{name:"MuiInputBase",slot:"Root",overridesResolver:yt})(({theme:e,ownerState:t})=>d({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${oe.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&d({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),vt=Ee("input",{name:"MuiInputBase",slot:"Input",overridesResolver:xt})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",i=d({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),o={opacity:"0 !important"},l=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return d({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${oe.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":l,"&:focus::-moz-placeholder":l,"&:focus:-ms-input-placeholder":l,"&:focus::-ms-input-placeholder":l},[`&.${oe.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),wt=r.jsx(pt,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),Ct=a.forwardRef(function(t,n){var i;const o=Ye({props:t,name:"MuiInputBase"}),{"aria-describedby":l,autoComplete:R,autoFocus:y,className:b,components:S={},componentsProps:x={},defaultValue:E,disabled:c,disableInjectingGlobalStyles:v,endAdornment:A,fullWidth:T=!1,id:P,inputComponent:L="input",inputProps:h={},inputRef:G,maxRows:p,minRows:z,multiline:f=!1,name:m,onBlur:w,onChange:F,onClick:I,onFocus:k,onKeyDown:B,onKeyUp:C,placeholder:Q,readOnly:M,renderSuffix:ie,rows:$,slotProps:ae={},slots:se={},startAdornment:W,type:le="text",value:Be}=o,Te=je(o,gt),q=h.value!=null?h.value:Be,{current:U}=a.useRef(q!=null),H=a.useRef(),Pe=a.useCallback(s=>{},[]),He=ze(H,G,h.ref,Pe),[V,K]=a.useState(!1),u=ct(),g=ut({props:o,muiFormControl:u,states:["color","disabled","error","hiddenLabel","size","required","filled"]});g.focused=u?u.focused:V,a.useEffect(()=>{!u&&c&&V&&(K(!1),w&&w())},[u,c,V,w]);const Z=u&&u.onFilled,J=u&&u.onEmpty,O=a.useCallback(s=>{ft(s)?Z&&Z():J&&J()},[Z,J]);te(()=>{U&&O({value:q})},[q,O,U]);const Me=s=>{if(g.disabled){s.stopPropagation();return}k&&k(s),h.onFocus&&h.onFocus(s),u&&u.onFocus?u.onFocus(s):K(!0)},We=s=>{w&&w(s),h.onBlur&&h.onBlur(s),u&&u.onBlur?u.onBlur(s):K(!1)},Oe=(s,...pe)=>{if(!U){const fe=s.target||H.current;if(fe==null)throw new Error(tt(1));O({value:fe.value})}h.onChange&&h.onChange(s,...pe),F&&F(s,...pe)};a.useEffect(()=>{O(H.current)},[]);const Le=s=>{H.current&&s.currentTarget===s.target&&H.current.focus(),I&&I(s)};let X=L,j=h;f&&X==="input"&&($?j=d({type:void 0,minRows:$,maxRows:$},j):j=d({type:void 0,maxRows:p,minRows:z},j),X=lt);const $e=s=>{O(s.animationName==="mui-auto-fill-cancel"?H.current:{value:"x"})};a.useEffect(()=>{u&&u.setAdornedStart(!!W)},[u,W]);const N=d({},o,{color:g.color||"primary",disabled:g.disabled,endAdornment:A,error:g.error,focused:g.focused,formControl:u,fullWidth:T,hiddenLabel:g.hiddenLabel,multiline:f,size:g.size,startAdornment:W,type:le}),ue=bt(N),de=se.root||S.Root||St,Y=ae.root||x.root||{},ce=se.input||S.Input||vt;return j=d({},j,(i=ae.input)!=null?i:x.input),r.jsxs(a.Fragment,{children:[!v&&wt,r.jsxs(de,d({},Y,!ge(de)&&{ownerState:d({},N,Y.ownerState)},{ref:n,onClick:Le},Te,{className:ye(ue.root,Y.className,b,M&&"MuiInputBase-readOnly"),children:[W,r.jsx(ke.Provider,{value:null,children:r.jsx(ce,d({ownerState:N,"aria-invalid":g.error,"aria-describedby":l,autoComplete:R,autoFocus:y,defaultValue:E,disabled:g.disabled,id:P,onAnimationStart:$e,name:m,placeholder:Q,readOnly:M,required:g.required,rows:$,value:q,onKeyDown:B,onKeyUp:C,type:le},j,!ge(ce)&&{as:X,ownerState:d({},N,j.ownerState)},{ref:He,className:ye(ue.input,j.className,M&&"MuiInputBase-readOnly"),onBlur:We,onChange:Oe,onFocus:Me}))}),A,ie?ie(d({},g,{startAdornment:W})):null]}))]})}),Rt=Ct;var re={},zt=Ue;Object.defineProperty(re,"__esModule",{value:!0});var Ae=re.default=void 0,It=zt(Qe()),jt=r;Ae=re.default=(0,It.default)((0,jt.jsx)("path",{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"SearchRounded");const Fe=({onChange:e,query:t})=>r.jsxs(Et,{children:[r.jsx(kt,{}),r.jsx(At,{id:"searchInput",value:t,onChange:e,placeholder:"Search for movies or series...",inputProps:{"aria-label":"Search for movies or series"},fullWidth:!0})]});Fe.propTypes={onChange:me.func,query:me.string};const Et=_.div`
	display: flex;
	align-items: center;
	width: 85%;
	margin: 20px 0;
	padding: 10px;
	background-color: rgb(75, 78, 90);
	border-radius: 8px;

	@media (min-width: 700px) {
		width: 90%;
		margin: 40px 0;
		padding: 15px;
	}

	@media (min-width: 1200px) {
		width: 95%;
		margin: 60px 0;
		padding: 20px;
	}
`,kt=Ie(Ae)({marginRight:"10px",fontSize:"27px"}),At=Ie(Rt)({color:"white",fontSize:"16px","@media (min-width: 700px)":{fontSize:"18px"},"@media (min-width: 1200px)":{fontSize:"20px"}}),Ft=()=>{const{data:e,isPending:t,isError:n}=Se({queryKey:["homepage-data"],queryFn:({signal:o})=>Ne({signal:o})});let i=[];if(e){const o=e.find(l=>l.category==="upcoming-movies");o&&(i=o.data.results||[])}return r.jsxs(Bt,{children:[t&&r.jsx(ve,{}),n&&r.jsx(we,{message:"Something went wrong, please try again later."}),e&&r.jsx(Re,{movies:i,title:"Explore",path:"movie"})]})},Bt=_(Ce)`
	padding-top: 10px;
`,_t=()=>{const e=localStorage.getItem("searchQuery"),[t,n]=a.useState(e||""),[i,o]=a.useState(e||""),[l,R]=a.useState(!0),y=t.trim().length>0;a.useEffect(()=>{if(localStorage.setItem("searchQuery",t),y){const c=setTimeout(()=>{R(!1),o(t.trim())},1e3);return()=>clearTimeout(c)}else R(!0)},[t,y]);const{data:b,isLoading:S,isError:x}=Se({queryKey:["search-data",i],queryFn:({signal:c})=>De({signal:c,query:i}),enabled:!l&&y}),E=c=>{n(c.target.value)};return r.jsxs(Tt,{children:[r.jsx(Fe,{onChange:E,query:t}),r.jsxs(Pt,{children:[!l&&r.jsx(ee,{children:r.jsxs(r.Fragment,{children:[r.jsxs(nt,{children:["Search results for ",t]}),S&&r.jsx(ve,{}),x&&r.jsx(we,{message:"Something went wrong, please try again later."}),(b==null?void 0:b.length)>0?r.jsx(ee,{children:r.jsx(Re,{movies:b})}):!S&&r.jsx("p",{children:"No movie or series containing your search term was found."})]})}),l&&r.jsx(ee,{children:r.jsx(Ft,{})})]})]})},Tt=_(Ce)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
`,Pt=_.section`
	padding: 0 60px 60px;
	width: 100%;
	text-align: center;
`;export{_t as default};