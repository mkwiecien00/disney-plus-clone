import{u as p,j as t,L as m}from"./index-sMYjJySH.js";import{P as e}from"./MotionContainer-vq7lzPBb.js";import{G as i,I as l}from"./Grid-oAk3aW2w.js";const c=p.h2`
	text-align: left;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 30px;

	@media (min-width: 600px) {
		font-size: 20px;
	}
`,x=({movies:n,path:o,title:a})=>t.jsxs(t.Fragment,{children:[t.jsx(c,{children:a}),t.jsx(i,{container:!0,spacing:2,columns:12,alignItems:"center",children:n.map((s,r)=>t.jsx(i,{item:!0,xs:12,sm:4,md:3,lg:2,children:t.jsx(m,{to:`/disney-plus-clone/${o}/${s.id}`,children:t.jsx(l,{children:t.jsx("img",{src:`https://image.tmdb.org/t/p/w500/${s.poster_path}`,alt:s.title||s.name})},r)},r)},r))})]});x.propTypes={movies:e.array,title:e.string,path:e.string};export{x as C,c as T};
