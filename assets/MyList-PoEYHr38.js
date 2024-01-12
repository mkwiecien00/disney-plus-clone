import{h as a,r as i,j as t,u as r}from"./index-USMy8gte.js";import{C as c}from"./Container-xN4LJso2.js";import{O as p}from"./MotionContainer-wpntGwnW.js";import{G as m}from"./GridContainer--jWndck-.js";import{T as d}from"./Title-pU4tm7G-.js";import"./useTheme-L7ABDJX3.js";const C=()=>{const e=a(n=>n.watchList),[s,o]=i.useState(e.resources);return i.useEffect(()=>{o(e.resources)},[e.resources]),t.jsxs(x,{children:[t.jsx(d,{children:"My List"}),t.jsx(p,{children:t.jsx(h,{children:s.length>0?t.jsx(m,{movies:s}):t.jsx(u,{children:"Your watch list is empty. Why don't you add something in here? 💫"})})})]})},x=r(c)`
	margin-top: 30px;
	padding: 60px;
	text-align: center;
`,h=r.section`
	padding-bottom: 60px;
	width: 100%;
	text-align: left;
`,u=r.p`
	@media (min-width: 600px) {
		font-size: 18px;
	}

	@media (min-width: 1000px) {
		font-size: 20px;
	}
`;export{C as default};
