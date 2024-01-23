import{u as t,r as a,j as e,L as E}from"./index-OhJuMAOB.js";import{P as l}from"./MotionContainer-z8cKftTe.js";import{C as v}from"./Container-PeYAxBG_.js";const k="/disney-plus-clone/assets/disney-logo-color--NyIJpbx.svg",I=({mode:f,onSignin:b,onSignup:w,error:g})=>{const o=f=="signin",[d,i]=a.useState(""),[r,p]=a.useState(""),[x,m]=a.useState("");a.useEffect(()=>{const n=localStorage.getItem("signInEmail"),c=localStorage.getItem("signUpEmail"),s=localStorage.getItem("lastEnteredEmail");!n&!s&!c&o&&(i("test@test.com"),p("test123")),n&&o&&i(n),c&&!o&&i(c),s&&o&&n&&i(n),s&&o&&!n&&i(s),s==="test@test.com"&&o&&p("test123")},[o]);const y=n=>{i(n.target.value)},j=n=>{p(n.target.value)},S=n=>{n.preventDefault(),o?b({email:d,password:r}):r.length<6?m("Password must be at least 6 characters long."):(m(""),w({email:d,password:r}))};return e.jsxs(P,{children:[e.jsxs(C,{children:[e.jsx(z,{src:k,alt:"Logo of Disney+ App"}),e.jsxs("form",{onSubmit:S,children:[e.jsx(A,{children:o?"Sign in":"Sign up"}),e.jsxs(L,{children:[e.jsx(u,{type:"email",name:"email",placeholder:"Email",value:d,onChange:y,required:!0}),e.jsxs("div",{children:[e.jsx(u,{type:"password",name:"password",placeholder:"Password",value:r,onChange:j,required:!0}),x?e.jsx(h,{children:x}):"",g?e.jsx(h,{children:g}):""]})]}),e.jsx(D,{type:"submit",children:o?"Sign in":"Sign up"})]})]}),e.jsxs(H,{children:[o?"New to Disney Plus?":"Already on Disney Plus?",e.jsx(E,{to:`${o?"/disney-plus-clone/auth/signup":"/disney-plus-clone/auth/signin"}`,children:e.jsx("span",{children:o?"Sign up now":"Sign in"})})]})]})};I.propTypes={mode:l.string,onSignin:l.func,onSignup:l.func,error:l.string};const P=t(v)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,C=t.div`
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
`,z=t.img`
	height: 50px;
	margin: 10px 0;

	@media (min-width: 1000px) {
		height: 60px;
	}
`,A=t.h2`
	margin: 30px 0 20px;

	@media (min-width: 1000px) {
		font-size: 23px;
	}
`,L=t.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 30px;
`,u=t.input`
	width: 100%;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.4);
	border-radius: 5px;

	@media (min-width: 1000px) {
		font-size: 15px;
	}
`,h=t.p`
	padding: 0;
	margin: 0;
	font-size: 11px;
	color: #0158e1;
`,D=t.button`
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

	&.google-submission {
		color: white;
		background-color: rgba(0, 0, 0);
		border: 1px solid rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&.google-submission:hover {
		color: black;
		background-color: white;
	}

	@media (min-width: 1000px) {
		height: 40px;
		font-size: 15px;
	}
`,H=t.p`
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
`;export{I as A};
