import{h as a,r as i,j as t,u as r}from"./index-5qv2dOw2.js";import{C as p}from"./Container-h2fJLOgH.js";import{O as c}from"./MotionContainer-GO2Q-18_.js";import{G as m}from"./GridContainer-oFyjeK63.js";import{T as d}from"./Title-l6_ZLkvo.js";import"./motion-OjOZ8-bH.js";import"./useTheme-xB-EWlEr.js";const L=()=>{const e=a(n=>n.watchList),[s,o]=i.useState(e.resources);return i.useEffect(()=>{o(e.resources)},[e.resources]),t.jsxs(x,{children:[t.jsx(d,{children:"My List"}),t.jsx(c,{children:t.jsx(h,{children:s.length>0?t.jsx(m,{movies:s}):t.jsx(u,{children:"Your watch list is empty. Why don't you add something in here? 💫"})})})]})},x=r(p)`
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
`;export{L as default};
