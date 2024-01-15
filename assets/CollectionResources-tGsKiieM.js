import{d as l,p as m,j as e,u as p}from"./index-ZVHg3Gff.js";import{u as d,L as y,E as u}from"./ErrorBlock-RFft37HI.js";import{C as h}from"./Container-luc_ohzm.js";import{G as x}from"./GridContainer-8MD8WP63.js";import{O as v}from"./MotionContainer-C1iw8o1V.js";import"./Title-nZOUEF2i.js";import"./useTheme-ivGl02lA.js";const f={disney:{fetchQuery:"discover/movie?with_companies=2",mediaType:"movie",collectionHeader:"Explore Disney Collection"},pixar:{fetchQuery:"discover/movie?with_companies=3",mediaType:"movie",collectionHeader:"Explore Pixar Collection"},marvel:{fetchQuery:"discover/movie?with_companies=420",mediaType:"movie",collectionHeader:"Explore Marvel Collection"},starwars:{fetchQuery:"search/movie?query=star%20wars",mediaType:"movie",collectionHeader:"Explore Star Wars Collection"},nationalgeographic:{fetchQuery:"discover/movie?with_companies=7521",mediaType:"movie",collectionHeader:"Explore National Geographic Collection"},star:{fetchQuery:"discover/tv?with_networks=2739",mediaType:"series",collectionHeader:"Explore Star Collection"}},_=()=>{const o=l(),{fetchQuery:r,mediaType:t,collectionHeader:a}=f[o.id],{data:i,isPending:n,isError:s}=d({queryKey:["collection-data",o.id],queryFn:({signal:c})=>m({signal:c,fetchQuery:r})});return e.jsxs(g,{children:[n&&e.jsx(y,{}),s&&e.jsx(u,{message:"Something went wrong, please try again later."}),i&&e.jsx(v,{children:e.jsx(x,{movies:i,path:t,title:a})})]})},g=p(h)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	padding: 60px;
	text-align: center;
`;export{_ as default};
