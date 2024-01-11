import{u as p,j as t,L as m}from"./index-rJX80wUs.js";import{P as e}from"./MotionContainer-SYDlRwkY.js";import{G as n,I as l}from"./Grid-Wt7ku0Zj.js";const c=p.h2`
	text-align: left;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 30px;

	@media (min-width: 600px) {
		font-size: 20px;
	}
`,x=({movies:a,path:o,title:i})=>t.jsxs(t.Fragment,{children:[i&&t.jsx(c,{children:i}),t.jsx(n,{container:!0,spacing:2,columns:12,alignItems:"center",children:a.map((s,r)=>t.jsx(n,{item:!0,xs:12,sm:4,md:3,lg:2,children:t.jsx(m,{to:`/disney-plus-clone/${o}/${s.id}`,children:t.jsx(l,{children:t.jsx("img",{src:`https://image.tmdb.org/t/p/w500/${s.poster_path}`,alt:s.title||s.name})},r)},r)},r))})]});x.propTypes={movies:e.array,title:e.string,path:e.string};export{x as G,c as T};
