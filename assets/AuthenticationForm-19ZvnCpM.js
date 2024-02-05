import{u as s,r as i,j as e,L as A}from"./index-F0zcrMZA.js";import{P as d}from"./MotionContainer-wY8W7tsZ.js";import{C as L}from"./Container-B2BD6ZJt.js";const k="/disney-plus-clone/assets/disney-logo-color--NyIJpbx.svg",z=({mode:y,onSignin:j,onSignup:S,error:b})=>{const n=y=="signin",E=10,v=10,[c,o]=i.useState(""),[a,p]=i.useState(""),[m,w]=i.useState(""),[l,C]=i.useState(""),[x,g]=i.useState("");i.useEffect(()=>{const t=localStorage.getItem("signInEmail"),u=localStorage.getItem("signUpEmail"),r=localStorage.getItem("lastEnteredEmail");!t&!r&!u&n&&(o("test@test.com"),p("test123")),t&&n&&o(t),u&&!n&&o(u),r&&n&&t&&o(t),r&&n&&!t&&o(r),r==="test@test.com"&&n&&p("test123")},[n]);const I=t=>{o(t.target.value)},P=t=>{p(t.target.value)},N=t=>{C(t.target.value)},U=t=>{t.preventDefault(),n?j({email:c,password:a}):(l.trim()===""?g("Username cannot be empty."):l.length>v?g("Username cannot be longer than 10 characters."):g(""),a.length<E?w("Password must be at least 6 characters long."):w(""),!x&&!m&&S({email:c,password:a,userName:l}))};return e.jsxs(H,{children:[e.jsxs(D,{children:[e.jsx(q,{src:k,alt:"Logo of Disney+ App"}),e.jsxs("form",{onSubmit:U,children:[e.jsx(B,{children:n?"Sign in":"Sign up"}),e.jsxs(F,{children:[!n&&e.jsxs("div",{children:[e.jsx(h,{type:"name",name:"username",placeholder:"Username",value:l,onChange:N,required:!0}),x?e.jsx(f,{children:x}):""]}),e.jsx(h,{type:"email",name:"email",placeholder:"Email",value:c,onChange:I,required:!0}),e.jsxs("div",{children:[e.jsx(h,{type:"password",name:"password",placeholder:"Password",value:a,onChange:P,required:!0}),m?e.jsx(f,{children:m}):"",b?e.jsx(f,{children:b}):""]})]}),e.jsx(T,{type:"submit",children:n?"Sign in":"Sign up"})]})]}),e.jsxs(J,{children:[n?"New to Disney Plus?":"Already on Disney Plus?",e.jsx(A,{to:`${n?"/disney-plus-clone/auth/signup":"/disney-plus-clone/auth/signin"}`,children:e.jsx("span",{children:n?"Sign up now":"Sign in"})})]})]})};z.propTypes={mode:d.string,onSignin:d.func,onSignup:d.func,error:d.string};const H=s(L)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,D=s.div`
	display: flex;
	max-width: 350px;
	max-height: 500px;
	flex-direction: column;
	justify-content: center;
	padding: 30px;
	width: 70%;
	color: black;
	background-color: #ffffff;
	border-radius: 16px;
	box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
`,q=s.img`
	height: 50px;
	margin: 10px 0;

	@media (min-width: 1000px) {
		height: 60px;
	}
`,B=s.h2`
	margin: 30px 0 20px;

	@media (min-width: 1000px) {
		font-size: 23px;
	}
`,F=s.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 30px;
`,h=s.input`
	width: 100%;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.4);
	border-radius: 5px;

	@media (min-width: 1000px) {
		font-size: 15px;
	}
`,f=s.p`
	padding: 0;
	margin: 0;
	font-size: 11px;
	color: #0158e1;
`,T=s.button`
	width: 100%;
	height: 35px;
	padding: 10px 20px;
	color: white;
	background-color: #0158e1;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: #0582f0;
	}

	@media (min-width: 1000px) {
		height: 40px;
		font-size: 15px;
	}
`,J=s.p`
	color: rgba(255, 255, 255, 0.7);
	padding: 5px;
	font-size: 13px;

	span {
		color: white;
		margin-left: 5px;
		font-weight: bold;
	}

	@media (min-width: 1000px) {
		font-size: 15px;
	}
`;export{z as A};
