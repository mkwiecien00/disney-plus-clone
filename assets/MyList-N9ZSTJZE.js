import{e as d,h as u,r as s,i as r,H as h,j as t,u as i}from"./index-YmnFcFS6.js";import{C as m}from"./Container-AzXlYK8L.js";import{O as l}from"./MotionContainer-q2BwKzaS.js";import{G as x}from"./GridContainer-lG0kpQc1.js";import{T as f}from"./Title-srtS5bF9.js";import"./motion-P8NVqol4.js";import"./useTheme-rFnIoMm6.js";const S=()=>{const o=d(),n=u(e=>e.watchList),[a,c]=s.useState([]);return s.useEffect(()=>{r.currentUser?o(h({user:r.currentUser.uid})):console.log("User is not logged in.")},[o]),s.useEffect(()=>{const e=n.resources.filter(p=>p.userId===r.currentUser.uid);c(e)},[n.resources]),t.jsxs(g,{children:[t.jsx(f,{children:"My List"}),t.jsx(l,{children:t.jsx(y,{children:a.length>0?t.jsx(x,{movies:a}):t.jsx(j,{children:"Your watch list is empty. Why don't you add something in here? 💫"})})})]})},g=i(m)`
	margin-top: 30px;
	padding: 60px;
	text-align: center;
`,y=i.section`
	padding-bottom: 60px;
	width: 100%;
	text-align: left;
`,j=i.p`
	@media (min-width: 600px) {
		font-size: 18px;
	}

	@media (min-width: 1000px) {
		font-size: 20px;
	}
`;export{S as default};
