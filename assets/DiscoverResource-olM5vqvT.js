import{u as r,r as s,j as e,v as y}from"./index-wUCRqxtA.js";import{u as f,L as h,E as j}from"./ErrorBlock-FKga795Q.js";import{p as C,O as S}from"./MotionContainer-W5z_GpBz.js";import{C as v}from"./Container-Z-dxuOrD.js";import{G as b}from"./GridContainer-t7GXO0l1.js";import{T as w}from"./Title-rV1qHVmW.js";const d={movie:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:27,name:"Horror"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:53,name:"Thriller"}],series:[{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"}]},F=({type:t})=>{const c=localStorage.getItem(`selectedCategory_${t}`),[o,m]=s.useState(c||d[t[0].id]),[l,p]=s.useState([]),g=a=>{localStorage.setItem(`selectedCategory_${t}`,a.target.value),m(a.target.value)},{data:i,isPending:x,isError:u,isSuccess:n}=f({queryKey:[`${t}-data`,o],queryFn:({signal:a})=>y({signal:a,resourceType:t,category:o})});return s.useEffect(()=>{n&&p(i)},[n,i]),e.jsxs(T,{children:[e.jsxs(E,{children:[e.jsxs(A,{children:["Select your favorite ",t," category:"]}),e.jsx(D,{id:"category-selection",value:o,onChange:g,children:d[t].map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))})]}),e.jsxs("div",{children:[x&&e.jsx(h,{}),u&&e.jsx(j,{message:"Something went wrong, please try again later."}),n&&!i.length&&e.jsx("p",{children:"No data available for the selected category."}),n&&i.length>0&&e.jsx(S,{children:e.jsx(b,{movies:l,path:t})})]})]})};F.propTypes={type:C.PropTypes.string};const T=r(v)`
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
