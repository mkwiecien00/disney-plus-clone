import{u as B,r as S,j as z}from"./index-f4kqRJ2O.js";import{i as I,j as K,k as O,b as x,m as _,o as D,e as L,_ as U,c as Z,B as w,D as k,h as A}from"./useTheme-PSJI0DF8.js";const ue=B.div`
	position: relative;
	height: 100%;
	width: 100%;
	box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
	cursor: pointer;
	overflow: hidden;
	border: 3px solid transparent;
	border-radius: 10px;
	transition: all 0.3s ease;

	img {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}

	&:hover {
		border-color: rgba(249, 249, 249, 0.7);
	}
`,F=S.createContext(),N=F;function q(e){return I("MuiGrid",e)}const H=[0,1,2,3,4,5,6,7,8,9,10],J=["column-reverse","column","row-reverse","row"],Q=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=K("MuiGrid",["root","container","item","zeroMinWidth",...H.map(e=>`spacing-xs-${e}`),...J.map(e=>`direction-xs-${e}`),...Q.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),X=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function Y({theme:e,ownerState:n}){let i;return e.breakpoints.keys.reduce((t,r)=>{let o={};if(n[r]&&(i=n[r]),!i)return t;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=w({values:n.columns,breakpoints:e.breakpoints.values}),p=typeof a=="object"?a[r]:a;if(p==null)return t;const u=`${Math.round(i/p*1e8)/1e6}%`;let c={};if(n.container&&n.item&&n.columnSpacing!==0){const s=e.spacing(n.columnSpacing);if(s!=="0px"){const l=`calc(${u} + ${m(s)})`;c={flexBasis:l,maxWidth:l}}}o=x({flexBasis:u,flexGrow:0,maxWidth:u},c)}return e.breakpoints.values[r]===0?Object.assign(t,o):t[e.breakpoints.up(r)]=o,t},{})}function ee({theme:e,ownerState:n}){const i=w({values:n.direction,breakpoints:e.breakpoints.values});return k({theme:e},i,t=>{const r={flexDirection:t};return t.indexOf("column")===0&&(r[`& > .${h.item}`]={maxWidth:"none"}),r})}function M({breakpoints:e,values:n}){let i="";Object.keys(n).forEach(r=>{i===""&&n[r]!==0&&(i=r)});const t=Object.keys(e).sort((r,o)=>e[r]-e[o]);return t.slice(0,t.indexOf(i))}function ne({theme:e,ownerState:n}){const{container:i,rowSpacing:t}=n;let r={};if(i&&t!==0){const o=w({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=M({breakpoints:e.breakpoints.values,values:o})),r=k({theme:e},o,(p,u)=>{var c;const s=e.spacing(p);return s!=="0px"?{marginTop:`-${m(s)}`,[`& > .${h.item}`]:{paddingTop:m(s)}}:(c=a)!=null&&c.includes(u)?{}:{marginTop:0,[`& > .${h.item}`]:{paddingTop:0}}})}return r}function re({theme:e,ownerState:n}){const{container:i,columnSpacing:t}=n;let r={};if(i&&t!==0){const o=w({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=M({breakpoints:e.breakpoints.values,values:o})),r=k({theme:e},o,(p,u)=>{var c;const s=e.spacing(p);return s!=="0px"?{width:`calc(100% + ${m(s)})`,marginLeft:`-${m(s)}`,[`& > .${h.item}`]:{paddingLeft:m(s)}}:(c=a)!=null&&c.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${h.item}`]:{paddingLeft:0}}})}return r}function te(e,n,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return n.forEach(r=>{const o=e[r];Number(o)>0&&t.push(i[`spacing-${r}-${String(o)}`])}),t}const ie=O("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e,{container:t,direction:r,item:o,spacing:a,wrap:p,zeroMinWidth:u,breakpoints:c}=i;let s=[];t&&(s=te(a,c,n));const l=[];return c.forEach(d=>{const f=i[d];f&&l.push(n[`grid-${d}-${String(f)}`])}),[n.root,t&&n.container,o&&n.item,u&&n.zeroMinWidth,...s,r!=="row"&&n[`direction-xs-${String(r)}`],p!=="wrap"&&n[`wrap-xs-${String(p)}`],...l]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ee,ne,re,Y);function oe(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return n.forEach(t=>{const r=e[t];if(Number(r)>0){const o=`spacing-${t}-${String(r)}`;i.push(o)}}),i}const se=e=>{const{classes:n,container:i,direction:t,item:r,spacing:o,wrap:a,zeroMinWidth:p,breakpoints:u}=e;let c=[];i&&(c=oe(o,u));const s=[];u.forEach(d=>{const f=e[d];f&&s.push(`grid-${d}-${String(f)}`)});const l={root:["root",i&&"container",r&&"item",p&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...s]};return A(l,q,n)},ae=S.forwardRef(function(n,i){const t=_({props:n,name:"MuiGrid"}),{breakpoints:r}=D(),o=L(t),{className:a,columns:p,columnSpacing:u,component:c="div",container:s=!1,direction:l="row",item:d=!1,rowSpacing:f,spacing:v=0,wrap:j="wrap",zeroMinWidth:V=!1}=o,b=U(o,X),E=f||v,P=u||v,R=S.useContext(N),G=s?p||12:R,y={},W=x({},b);r.keys.forEach($=>{b[$]!=null&&(y[$]=b[$],delete W[$])});const C=x({},o,{columns:G,container:s,direction:l,item:d,rowSpacing:E,columnSpacing:P,wrap:j,zeroMinWidth:V,spacing:v},y,{breakpoints:r.keys}),T=se(C);return z.jsx(N.Provider,{value:G,children:z.jsx(ie,x({ownerState:C,className:Z(T.root,a),as:c,ref:i},W))})}),le=ae,de=B.h2`
	text-align: left;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 30px;

	@media (min-width: 600px) {
		font-size: 20px;
	}

	@media (min-width: 800px) {
		font-size: 25px;
	}
`;export{le as G,ue as I,de as T};
