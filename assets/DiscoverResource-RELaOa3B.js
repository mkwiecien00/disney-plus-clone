import{u as i,r as s,j as e,v as y}from"./index-f4kqRJ2O.js";import{u as f,L as h,E as b}from"./ErrorBlock-KlhdA9yg.js";import{p as j,O as C}from"./MotionContainer-ZB23DNTS.js";import{C as S}from"./Container-C8EZLKHf.js";import{G as v}from"./GridContainer-K7yRgNlL.js";import{T as w}from"./Title-Wi9gHx7f.js";const c={movie:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:27,name:"Horror"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:53,name:"Thriller"}],series:[{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"}]},k=({type:a})=>{const d=localStorage.getItem(`selectedCategory_${a}`),[o,l]=s.useState(d||c[a[0].id]),[m,p]=s.useState([]),g=t=>{localStorage.setItem(`selectedCategory_${a}`,t.target.value),l(t.target.value)},{data:r,isPending:x,isError:u,isSuccess:n}=f({queryKey:[`${a}-data`,o],queryFn:({signal:t})=>y({signal:t,resourceType:a,category:o})});return s.useEffect(()=>{n&&p(r)},[n,r]),e.jsxs(F,{children:[e.jsxs(T,{children:[e.jsxs(E,{children:["Select your favorite ",a," category:"]}),e.jsx(A,{id:"category-selection",value:o,onChange:g,className:"select",children:c[a].map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))})]}),e.jsxs("div",{children:[x&&e.jsx(h,{}),u&&e.jsx(b,{message:"Something went wrong, please try again later."}),n&&!r.length&&e.jsx("p",{children:"No data available for the selected category."}),n&&r.length>0&&e.jsx(C,{children:e.jsx(v,{movies:m,path:a})})]})]})};k.propTypes={type:j.PropTypes.string};const F=i(S)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 60px;
	text-align: center;
`,T=i.section`
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
`,E=i(w)`
	margin: 10px 0;
	display: flex;
	align-items: center;
`,A=i.select`
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
`;export{k as D};
