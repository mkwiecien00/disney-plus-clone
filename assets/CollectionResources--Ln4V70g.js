import{d as l,n as m,j as e,u as p}from"./index-yJRrSh05.js";import{u as d,L as y,E as u,C as h}from"./ErrorBlock-ZqHbTuH4.js";import{C as x}from"./CollectionGrid-jdWF1Hu_.js";import{O as v}from"./MotionContainer-y9wKo8ZZ.js";import"./Grid-hhU6ymdg.js";import"./useTheme-rdjvDUhx.js";const f={disney:{fetchQuery:"discover/movie?with_companies=2",mediaType:"movie",collectionHeader:"Explore Disney Collection"},pixar:{fetchQuery:"discover/movie?with_companies=3",mediaType:"movie",collectionHeader:"Explore Pixar Collection"},marvel:{fetchQuery:"discover/movie?with_companies=420",mediaType:"movie",collectionHeader:"Explore Marvel Collection"},starwars:{fetchQuery:"search/movie?query=star%20wars",mediaType:"movie",collectionHeader:"Explore Star Wars Collection"},nationalgeographic:{fetchQuery:"discover/movie?with_companies=7521",mediaType:"movie",collectionHeader:"Explore National Geographic Collection"},star:{fetchQuery:"discover/tv?with_networks=2739",mediaType:"series",collectionHeader:"Explore Star Collection"}},H=()=>{const o=l(),{fetchQuery:r,mediaType:t,collectionHeader:a}=f[o.id],{data:i,isPending:s,isError:c}=d({queryKey:["collection-data",o.id],queryFn:({signal:n})=>m({signal:n,fetchQuery:r}),staleTime:1e4});return e.jsxs(C,{children:[s&&e.jsx(y,{}),c&&e.jsx(u,{message:"Something went wrong, please try again later."}),i&&e.jsx(v,{children:e.jsx(x,{movies:i,path:t,title:a})})]})},C=p(h)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	padding: 60px;
	text-align: center;
`;export{H as default};
