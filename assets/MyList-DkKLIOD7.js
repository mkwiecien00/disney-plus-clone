import{h as c,r as o,i as p,j as t,u as r}from"./index-f4kqRJ2O.js";import{C as d}from"./Container-C8EZLKHf.js";import{O as m}from"./MotionContainer-ZB23DNTS.js";import{G as u}from"./GridContainer-K7yRgNlL.js";import{T as x}from"./Title-Wi9gHx7f.js";import"./motion-W1U401kF.js";import"./useTheme-PSJI0DF8.js";const M=()=>{const s=c(e=>e.watchList),[i,n]=o.useState([]);return o.useEffect(()=>{const e=s.resources.filter(a=>a.userId===p.currentUser.uid);n(e)},[s.resources]),t.jsxs(h,{children:[t.jsx(x,{children:"My List"}),t.jsx(m,{children:t.jsx(l,{children:i.length>0?t.jsx(u,{movies:i}):t.jsx(f,{children:"Your watch list is empty. Why don't you add something in here? 💫"})})})]})},h=r(d)`
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
