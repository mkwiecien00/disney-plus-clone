import{j as r,r as s,k as $e,u as N}from"./index-Gi-OKZpW.js";import{B as qe,A as De,u as Se,L as ve,E as we}from"./ErrorBlock-TXy61EMN.js";import{C as Ce}from"./Container-AehQcF8G.js";import{P as me,O as ee}from"./MotionContainer-aH0jcYhy.js";import{G as Re}from"./GridContainer-n58EHnEe.js";import{G as Ne,a as ze,g as he,e as te,j as Ge,d as ge,r as Qe,i as Ue,s as Ie}from"./createSvgIcon-XSAcZ-fK.js";import{u as Ve,_ as je,b as d,q as Ke,T as Ye,j as Ze,i as Je,k as Ee,m as Xe,c as ye,f as ne,h as et,t as tt}from"./useTheme-jvTYYSrJ.js";import{T as nt}from"./Title-C-1QubbU.js";import{f as ot}from"./fetchHomePageData-zKZo7eDr.js";import"./motion-HV_q233a.js";function rt(e){return e==null||Object.keys(e).length===0}function it(e){const{styles:t,defaultTheme:n={}}=e,i=typeof t=="function"?o=>t(rt(o)?n:o):t;return r.jsx(Ne,{styles:i})}function at({styles:e,themeId:t,defaultTheme:n={}}){const i=Ve(n),o=typeof e=="function"?e(t&&i[t]||i):e;return r.jsx(it,{styles:o})}const st=["onChange","maxRows","minRows","style","value"];function D(e){return parseInt(e,10)||0}const lt={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function xe(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const ut=s.forwardRef(function(t,n){const{onChange:i,maxRows:o,minRows:a=1,style:R,value:y}=t,b=je(t,st),{current:S}=s.useRef(y!=null),x=s.useRef(null),E=ze(n,x),c=s.useRef(null),v=s.useRef(0),[A,P]=s.useState({outerHeightStyle:0}),T=s.useCallback(()=>{const p=x.current,f=he(p).getComputedStyle(p);if(f.width==="0px")return{outerHeightStyle:0};const m=c.current;m.style.width=f.width,m.value=p.value||t.placeholder||"x",m.value.slice(-1)===`
`&&(m.value+=" ");const w=f.boxSizing,B=D(f.paddingBottom)+D(f.paddingTop),I=D(f.borderBottomWidth)+D(f.borderTopWidth),k=m.scrollHeight;m.value="x";const F=m.scrollHeight;let C=k;a&&(C=Math.max(Number(a)*F,C)),o&&(C=Math.min(Number(o)*F,C)),C=Math.max(C,F);const Q=C+(w==="border-box"?B+I:0),M=Math.abs(C-k)<=1;return{outerHeightStyle:Q,overflow:M}},[o,a,t.placeholder]),L=(p,z)=>{const{outerHeightStyle:f,overflow:m}=z;return v.current<20&&(f>0&&Math.abs((p.outerHeightStyle||0)-f)>1||p.overflow!==m)?(v.current+=1,{overflow:m,outerHeightStyle:f}):p},h=s.useCallback(()=>{const p=T();xe(p)||P(z=>L(z,p))},[T]);te(()=>{const p=()=>{const k=T();xe(k)||$e.flushSync(()=>{P(F=>L(F,k))})},z=()=>{v.current=0,p()};let f;const m=Ge(z),w=x.current,B=he(w);B.addEventListener("resize",m);let I;return typeof ResizeObserver<"u"&&(I=new ResizeObserver(z),I.observe(w)),()=>{m.clear(),cancelAnimationFrame(f),B.removeEventListener("resize",m),I&&I.disconnect()}},[T]),te(()=>{h()}),s.useEffect(()=>{v.current=0},[y]);const G=p=>{v.current=0,S||h(),i&&i(p)};return r.jsxs(s.Fragment,{children:[r.jsx("textarea",d({value:y,onChange:G,ref:E,rows:a,style:d({height:A.outerHeightStyle,overflow:A.overflow?"hidden":void 0},R)},b)),r.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:c,tabIndex:-1,style:d({},lt.shadow,R,{paddingTop:0,paddingBottom:0})})]})}),dt=async({signal:e,query:t})=>{try{const n=await fetch(`${qe}/search/multi?query=${t}&api_key=${De}`,{signal:e});if(!n.ok)throw new Error("Failed to fetch data based on entered query.");return(await n.json()).results.filter(a=>(a.media_type==="movie"||a.media_type==="tv")&&a.poster_path).map(a=>({...a,media_type:a.media_type==="movie"?"movie":"series"}))}catch{return console.error("An error occurred while fetching search results. Please try again later."),null}};function ct({props:e,states:t,muiFormControl:n}){return t.reduce((i,o)=>(i[o]=e[o],n&&typeof e[o]>"u"&&(i[o]=n[o]),i),{})}const pt=s.createContext(void 0),ke=pt;function ft(){return s.useContext(ke)}function mt(e){return r.jsx(at,d({},e,{defaultTheme:Ke,themeId:Ye}))}function be(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function ht(e,t=!1){return e&&(be(e.value)&&e.value!==""||t&&be(e.defaultValue)&&e.defaultValue!=="")}function gt(e){return Je("MuiInputBase",e)}const yt=Ze("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),oe=yt,xt=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],bt=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${ne(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},St=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},vt=e=>{const{classes:t,color:n,disabled:i,error:o,endAdornment:a,focused:R,formControl:y,fullWidth:b,hiddenLabel:S,multiline:x,readOnly:E,size:c,startAdornment:v,type:A}=e,P={root:["root",`color${ne(n)}`,i&&"disabled",o&&"error",b&&"fullWidth",R&&"focused",y&&"formControl",c&&c!=="medium"&&`size${ne(c)}`,x&&"multiline",v&&"adornedStart",a&&"adornedEnd",S&&"hiddenLabel",E&&"readOnly"],input:["input",i&&"disabled",A==="search"&&"inputTypeSearch",x&&"inputMultiline",c==="small"&&"inputSizeSmall",S&&"inputHiddenLabel",v&&"inputAdornedStart",a&&"inputAdornedEnd",E&&"readOnly"]};return et(P,gt,t)},wt=Ee("div",{name:"MuiInputBase",slot:"Root",overridesResolver:bt})(({theme:e,ownerState:t})=>d({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${oe.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&d({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),Ct=Ee("input",{name:"MuiInputBase",slot:"Input",overridesResolver:St})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",i=d({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),o={opacity:"0 !important"},a=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return d({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${oe.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":a,"&:focus::-moz-placeholder":a,"&:focus:-ms-input-placeholder":a,"&:focus::-ms-input-placeholder":a},[`&.${oe.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),Rt=r.jsx(mt,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),zt=s.forwardRef(function(t,n){var i;const o=Xe({props:t,name:"MuiInputBase"}),{"aria-describedby":a,autoComplete:R,autoFocus:y,className:b,components:S={},componentsProps:x={},defaultValue:E,disabled:c,disableInjectingGlobalStyles:v,endAdornment:A,fullWidth:P=!1,id:T,inputComponent:L="input",inputProps:h={},inputRef:G,maxRows:p,minRows:z,multiline:f=!1,name:m,onBlur:w,onChange:B,onClick:I,onFocus:k,onKeyDown:F,onKeyUp:C,placeholder:Q,readOnly:M,renderSuffix:ie,rows:O,slotProps:ae={},slots:se={},startAdornment:W,type:le="text",value:Fe}=o,Pe=je(o,xt),$=h.value!=null?h.value:Fe,{current:U}=s.useRef($!=null),H=s.useRef(),Te=s.useCallback(l=>{},[]),He=ze(H,G,h.ref,Te),[V,K]=s.useState(!1),u=ft(),g=ct({props:o,muiFormControl:u,states:["color","disabled","error","hiddenLabel","size","required","filled"]});g.focused=u?u.focused:V,s.useEffect(()=>{!u&&c&&V&&(K(!1),w&&w())},[u,c,V,w]);const Y=u&&u.onFilled,Z=u&&u.onEmpty,_=s.useCallback(l=>{ht(l)?Y&&Y():Z&&Z()},[Y,Z]);te(()=>{U&&_({value:$})},[$,_,U]);const Me=l=>{if(g.disabled){l.stopPropagation();return}k&&k(l),h.onFocus&&h.onFocus(l),u&&u.onFocus?u.onFocus(l):K(!0)},We=l=>{w&&w(l),h.onBlur&&h.onBlur(l),u&&u.onBlur?u.onBlur(l):K(!1)},_e=(l,...pe)=>{if(!U){const fe=l.target||H.current;if(fe==null)throw new Error(tt(1));_({value:fe.value})}h.onChange&&h.onChange(l,...pe),B&&B(l,...pe)};s.useEffect(()=>{_(H.current)},[]);const Le=l=>{H.current&&l.currentTarget===l.target&&H.current.focus(),I&&I(l)};let J=L,j=h;f&&J==="input"&&(O?j=d({type:void 0,minRows:O,maxRows:O},j):j=d({type:void 0,maxRows:p,minRows:z},j),J=ut);const Oe=l=>{_(l.animationName==="mui-auto-fill-cancel"?H.current:{value:"x"})};s.useEffect(()=>{u&&u.setAdornedStart(!!W)},[u,W]);const q=d({},o,{color:g.color||"primary",disabled:g.disabled,endAdornment:A,error:g.error,focused:g.focused,formControl:u,fullWidth:P,hiddenLabel:g.hiddenLabel,multiline:f,size:g.size,startAdornment:W,type:le}),ue=vt(q),de=se.root||S.Root||wt,X=ae.root||x.root||{},ce=se.input||S.Input||Ct;return j=d({},j,(i=ae.input)!=null?i:x.input),r.jsxs(s.Fragment,{children:[!v&&Rt,r.jsxs(de,d({},X,!ge(de)&&{ownerState:d({},q,X.ownerState)},{ref:n,onClick:Le},Pe,{className:ye(ue.root,X.className,b,M&&"MuiInputBase-readOnly"),children:[W,r.jsx(ke.Provider,{value:null,children:r.jsx(ce,d({ownerState:q,"aria-invalid":g.error,"aria-describedby":a,autoComplete:R,autoFocus:y,defaultValue:E,disabled:g.disabled,id:T,onAnimationStart:Oe,name:m,placeholder:Q,readOnly:M,required:g.required,rows:O,value:$,onKeyDown:F,onKeyUp:C,type:le},j,!ge(ce)&&{as:J,ownerState:d({},q,j.ownerState)},{ref:He,className:ye(ue.input,j.className,M&&"MuiInputBase-readOnly"),onBlur:We,onChange:_e,onFocus:Me}))}),A,ie?ie(d({},g,{startAdornment:W})):null]}))]})}),It=zt;var re={},jt=Ue;Object.defineProperty(re,"__esModule",{value:!0});var Ae=re.default=void 0,Et=jt(Qe()),kt=r;Ae=re.default=(0,Et.default)((0,kt.jsx)("path",{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"SearchRounded");const Be=({onChange:e,query:t})=>r.jsxs(At,{children:[r.jsx(Bt,{}),r.jsx(Ft,{id:"searchInput",value:t,onChange:e,placeholder:"Search for movies or series...",inputProps:{"aria-label":"Search for movies or series"},fullWidth:!0})]});Be.propTypes={onChange:me.func,query:me.string};const At=N.div`
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
`,Bt=Ie(Ae)({marginRight:"10px",fontSize:"27px"}),Ft=Ie(It)({color:"white",fontSize:"16px","@media (min-width: 700px)":{fontSize:"18px"},"@media (min-width: 1200px)":{fontSize:"20px"}}),Pt=()=>{const{data:e,isPending:t,isError:n}=Se({queryKey:["homepage-data"],queryFn:({signal:o})=>ot({signal:o})});let i=[];if(e){const o=e.find(a=>a.category==="upcoming-movies");o&&(i=o.data.results||[])}return r.jsxs(Tt,{children:[t&&r.jsx(ve,{}),n&&r.jsx(we,{message:"Something went wrong, please try again later."}),e&&r.jsx(Re,{movies:i,title:"Explore",path:"movie"})]})},Tt=N(Ce)`
	padding-top: 10px;
`,Ut=()=>{const e=localStorage.getItem("searchQuery"),[t,n]=s.useState(e||""),[i,o]=s.useState(e||""),[a,R]=s.useState(!0),y=t.trim().length>0;s.useEffect(()=>{if(localStorage.setItem("searchQuery",t),y){const c=setTimeout(()=>{R(!1),o(t.trim())},1e3);return()=>clearTimeout(c)}else R(!0)},[t,y]);const{data:b,isLoading:S,isError:x}=Se({queryKey:["search-data",i],queryFn:({signal:c})=>dt({signal:c,query:i}),enabled:!a&&y}),E=c=>{n(c.target.value)};return r.jsxs(Ht,{children:[r.jsx(Be,{onChange:E,query:t}),r.jsxs(Mt,{children:[!a&&r.jsx(ee,{children:r.jsxs(r.Fragment,{children:[r.jsxs(nt,{children:["Search results for ",t]}),S&&r.jsx(ve,{}),x&&r.jsx(we,{message:"Something went wrong, please try again later."}),(b==null?void 0:b.length)>0?r.jsx(ee,{children:r.jsx(Re,{movies:b})}):!S&&r.jsx("p",{children:"No movie or series containing your search term was found."})]})}),a&&r.jsx(ee,{children:r.jsx(Pt,{})})]})]})},Ht=N(Ce)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
`,Mt=N.section`
	padding: 0 60px 60px;
	width: 100%;
	text-align: center;
`;export{Ut as default};