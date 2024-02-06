import{f as c,r as o,h as p,j as t,u as r}from"./index-Gi-OKZpW.js";import{C as d}from"./Container-AehQcF8G.js";import{O as m}from"./MotionContainer-aH0jcYhy.js";import{G as u}from"./GridContainer-n58EHnEe.js";import{T as x}from"./Title-C-1QubbU.js";import"./motion-HV_q233a.js";import"./useTheme-jvTYYSrJ.js";const M=()=>{const s=c(e=>e.watchList),[i,n]=o.useState([]);return o.useEffect(()=>{const e=s.resources.filter(a=>a.userId===p.currentUser.uid);n(e)},[s.resources]),t.jsxs(h,{children:[t.jsx(x,{children:"My List"}),t.jsx(m,{children:t.jsx(l,{children:i.length>0?t.jsx(u,{movies:i}):t.jsx(f,{children:"Your watch list is empty. Why don't you add something in here? 💫"})})})]})},h=r(d)`
	margin-top: 30px;
	padding: 60px;
	text-align: center;
`,l=r.section`
	padding-bottom: 60px;
	width: 100%;
	text-align: left;
`,f=r.p`
	@media (min-width: 600px) {
		font-size: 18px;
	}

	@media (min-width: 1000px) {
		font-size: 20px;
	}
`;export{M as default};
