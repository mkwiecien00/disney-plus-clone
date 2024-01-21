import{h as c,r as o,i as p,j as t,u as r}from"./index-wUCRqxtA.js";import{C as d}from"./Container-Z-dxuOrD.js";import{O as m}from"./MotionContainer-W5z_GpBz.js";import{G as u}from"./GridContainer-t7GXO0l1.js";import{T as x}from"./Title-rV1qHVmW.js";import"./motion-__EWgNln.js";import"./useTheme-BDZTHUil.js";const M=()=>{const s=c(e=>e.watchList),[i,n]=o.useState([]);return o.useEffect(()=>{const e=s.resources.filter(a=>a.userId===p.currentUser.uid);n(e)},[s.resources]),t.jsxs(h,{children:[t.jsx(x,{children:"My List"}),t.jsx(m,{children:t.jsx(l,{children:i.length>0?t.jsx(u,{movies:i}):t.jsx(f,{children:"Your watch list is empty. Why don't you add something in here? 💫"})})})]})},h=r(d)`
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
