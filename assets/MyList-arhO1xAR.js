import{h as c,r as o,i as p,j as t,u as r}from"./index-9lK6ZGJy.js";import{C as d}from"./Container-NQp4c7no.js";import{O as m}from"./MotionContainer-aMU34C1R.js";import{G as u}from"./GridContainer-L-UCjJ4_.js";import{T as x}from"./Title-iRUcIuIv.js";import"./motion-0oL8nVNs.js";import"./useTheme-3x0eIDPZ.js";const M=()=>{const s=c(e=>e.watchList),[i,n]=o.useState([]);return o.useEffect(()=>{const e=s.resources.filter(a=>a.userId===p.currentUser.uid);n(e)},[s.resources]),t.jsxs(h,{children:[t.jsx(x,{children:"My List"}),t.jsx(m,{children:t.jsx(l,{children:i.length>0?t.jsx(u,{movies:i}):t.jsx(f,{children:"Your watch list is empty. Why don't you add something in here? 💫"})})})]})},h=r(d)`
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
