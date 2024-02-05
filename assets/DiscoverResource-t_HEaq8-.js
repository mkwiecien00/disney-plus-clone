import{u as d,r as l,j as e}from"./index-F0zcrMZA.js";import{B as y,A as h,u as f,L as w,E as v}from"./ErrorBlock-OdHjSor8.js";import{p as b,O as j}from"./MotionContainer-wY8W7tsZ.js";import{C}from"./Container-B2BD6ZJt.js";import{G as S}from"./GridContainer-e73i06Nd.js";import{T as k}from"./Title-4Ff2Hqmg.js";const E=async({signal:a,resourceType:o,category:n})=>{try{const i=o==="movie"?"discover/movie":o==="series"?"discover/tv":null;if(!i)throw new Error("Invalid type.");const s=await fetch(`${y}/${i}?with_watch_providers=337&with_genres=${n}&api_key=${h}`,{signal:a});if(!s.ok)throw new Error("Failed to fetch data based on selected category.");return(await s.json()).results.filter(t=>t.poster_path).map(t=>({...t}))}catch{return console.error("An error occurred while fetching resource list for category. Please try again later."),null}},g={movie:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:27,name:"Horror"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:53,name:"Thriller"}],series:[{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"}]},A=({type:a})=>{const o=localStorage.getItem(`selectedCategory_${a}`),[n,i]=l.useState(o||g[a][0].id),[s,m]=l.useState([]),p=r=>{localStorage.setItem(`selectedCategory_${a}`,r.target.value),i(r.target.value)},{data:t,isPending:x,isError:u,isSuccess:c}=f({queryKey:[`${a}-data`,n],queryFn:({signal:r})=>E({signal:r,resourceType:a,category:n})});return l.useEffect(()=>{c&&m(t)},[c,t]),e.jsxs(F,{children:[e.jsxs(_,{children:[e.jsxs(D,{children:["Select your favorite ",a," category:"]}),e.jsx(T,{id:"category-selection",value:n,onChange:p,className:"select",children:g[a].map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))})]}),e.jsxs("div",{children:[x&&e.jsx(w,{}),u&&e.jsx(v,{message:"Something went wrong, please try again later."}),c&&!t.length&&e.jsx("p",{children:"No data available for the selected category."}),c&&t.length>0&&e.jsx(j,{children:e.jsx(S,{movies:s,path:a})})]})]})};A.propTypes={type:b.PropTypes.string};const F=d(C)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 60px;
	text-align: center;
`,_=d.section`
	margin: 20px 0 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: baseline;
	width: 100%;
	gap: 10px;

	@media (min-width: 600px) {
		flex-direction: row;
		gap: 30px;
	}

	@media (min-width: 700px) {
		margin: 40px 0 50px;
		flex-direction: row;
		justify-content: start;
	}
`,D=d(k)`
	margin: 10px 0;
	display: flex;
	align-items: center;
`,T=d.select`
	width: 200px;
	cursor: pointer;
	padding: 10px 20px;
	appearance: none;
	text-align-last: center;
	-webkit-appearance: none;
	border-radius: 50px;
	background-color: rgb(49, 51, 60);
	color: rgb(249, 249, 249);
	outline: none;
	transition: border 0.3s, background-color 0.3s;

	&:hover {
		background-color: rgba(49, 51, 60, 0.5);
	}

	&.select {
		background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%),
			linear-gradient(to right, #ccc, #ccc);
		background-position: calc(100% - 20px) calc(10px + 5px), calc(100% - 15px) calc(10px + 5px), calc(100% - 30px) 10px;
		background-size: 5px 5px, 5px 5px, 1px 15px;
		background-repeat: no-repeat;
	}
`;export{A as D};
