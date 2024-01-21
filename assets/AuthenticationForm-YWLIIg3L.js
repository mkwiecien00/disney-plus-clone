import{u as i,r,j as e,L as E}from"./index-wUCRqxtA.js";import{P as a}from"./MotionContainer-W5z_GpBz.js";import{C as v}from"./Container-Z-dxuOrD.js";const k="/disney-plus-clone/assets/disney-logo-color--NyIJpbx.svg",I=({mode:h,onSignin:f,onSignup:b,error:p})=>{const n=h=="signin",[l,t]=r.useState(""),[s,w]=r.useState(""),[c,g]=r.useState("");r.useEffect(()=>{const o=localStorage.getItem("signInEmail"),x=localStorage.getItem("signUpEmail"),d=localStorage.getItem("lastEnteredEmail");o&&n&&t(o),x&&!n&&t(x),d&&n&&o&&t(o),d&&n&&!o&&t(d)},[n]);const y=o=>{t(o.target.value)},j=o=>{w(o.target.value)},S=o=>{o.preventDefault(),n?f({email:l,password:s}):s.length<6?g("Password must be at least 6 characters long."):(g(""),b({email:l,password:s}))};return e.jsxs(P,{children:[e.jsxs(C,{children:[e.jsx(z,{src:k,alt:"Logo of Disney+ App"}),e.jsxs("form",{onSubmit:S,children:[e.jsx(A,{children:n?"Sign in":"Sign up"}),e.jsxs(L,{children:[e.jsx(u,{type:"email",name:"email",placeholder:"Email",value:l,onChange:y,required:!0}),e.jsxs("div",{children:[e.jsx(u,{type:"password",name:"password",placeholder:"Password",value:s,onChange:j,required:!0}),c?e.jsx(m,{children:c}):"",p?e.jsx(m,{children:p}):""]})]}),e.jsx(D,{type:"submit",children:n?"Sign in":"Sign up"})]})]}),e.jsxs(H,{children:[n?"New to Disney Plus?":"Already on Disney Plus?",e.jsx(E,{to:`${n?"/disney-plus-clone/auth/signup":"/disney-plus-clone/auth/signin"}`,children:e.jsx("span",{children:n?"Sign up now":"Sign in"})})]})]})};I.propTypes={mode:a.string,onSignin:a.func,onSignup:a.func,error:a.string};const P=i(v)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,C=i.div`
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
`,z=i.img`
	height: 50px;
	margin: 10px 0;

	@media (min-width: 1000px) {
		height: 60px;
	}
`,A=i.h2`
	margin: 30px 0 20px;

	@media (min-width: 1000px) {
		font-size: 23px;
	}
`,L=i.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 30px;
`,u=i.input`
	width: 100%;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.4);
	border-radius: 5px;

	@media (min-width: 1000px) {
		font-size: 15px;
	}
`,m=i.p`
	padding: 0;
	margin: 0;
	font-size: 11px;
	color: #0158e1;
`,D=i.button`
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
`,H=i.p`
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
