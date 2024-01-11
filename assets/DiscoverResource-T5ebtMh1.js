import{u as r,r as s,j as e,o as y}from"./index-rJX80wUs.js";import{u as h,L as f,E as j,C}from"./ErrorBlock-sndPsHm9.js";import{p as S,O as b}from"./MotionContainer-SYDlRwkY.js";import{G as v,T as w}from"./GridContainer-cPI5odCb.js";const d={movie:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:27,name:"Horror"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:53,name:"Thriller"}],series:[{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"}]},F=({type:a})=>{const c=localStorage.getItem(`selectedCategory_${a}`),[o,l]=s.useState(c||d[a[0].id]),[m,p]=s.useState([]),g=t=>{localStorage.setItem(`selectedCategory_${a}`,t.target.value),l(t.target.value)},{data:i,isPending:x,isError:u,isSuccess:n}=h({queryKey:[`${a}-data`,o],queryFn:({signal:t})=>y({signal:t,resourceType:a,category:o})});return s.useEffect(()=>{n&&p(i)},[n,i]),e.jsxs(T,{children:[e.jsxs(E,{children:[e.jsxs(A,{children:["Select your favorite ",a," category:"]}),e.jsx(D,{id:"category-selection",value:o,onChange:g,children:d[a].map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))})]}),e.jsxs("div",{children:[x&&e.jsx(f,{}),u&&e.jsx(j,{message:"Something went wrong, please try again later."}),n&&!i.length&&e.jsx("p",{children:"No data available for the selected category."}),n&&i.length>0&&e.jsx(b,{children:e.jsx(v,{movies:m,path:a})})]})]})};F.propTypes={type:S.PropTypes.string};const T=r(C)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 60px;
	text-align: center;
`,E=r.section`
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
`,A=r(w)`
	margin: 10px 0;
	display: flex;
	align-items: center;
`,D=r.select`
	width: 160px;
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
`;export{F as D};
