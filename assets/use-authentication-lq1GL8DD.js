import{u as r,r as o,j as s,L as k,b as z,e as D,C as U,h as a,D as H,E as T,m as q}from"./index-CRDHgjrp.js";import{P as g}from"./MotionContainer-ViNI996j.js";import{C as B}from"./Container-Mwgt3Ipq.js";const F="/disney-plus-clone/assets/disney-logo-color--NyIJpbx.svg",W=({mode:d,onSignin:u,onSignup:x,error:l})=>{const e=d=="signin",I=6,j=10,[n,i]=o.useState(""),[m,h]=o.useState(""),[f,v]=o.useState(""),[p,P]=o.useState(""),[w,y]=o.useState("");o.useEffect(()=>{const t=localStorage.getItem("signInEmail"),E=localStorage.getItem("signUpEmail"),c=localStorage.getItem("lastEnteredEmail");!t&!c&!E&e&&(i("test@test.com"),h("test123")),t&&e&&i(t),E&&!e&&i(E),c&&e&&t&&i(t),c&&e&&!t&&i(c),c==="test@test.com"&&e&&h("test123")},[e]);const N=t=>{i(t.target.value)},A=t=>{h(t.target.value)},C=t=>{P(t.target.value)},L=t=>{t.preventDefault(),e?u({email:n,password:m}):(p.trim()===""?y("Username cannot be empty."):p.length>j?y("Username cannot be longer than 10 characters."):y(""),m.length<I?v("Password must be at least 6 characters long."):v(""),!w&&!f&&x({email:n,password:m,userName:p}))};return s.jsxs(J,{children:[s.jsxs(R,{children:[s.jsx($,{src:F,alt:"Logo of Disney+ App"}),s.jsxs("form",{onSubmit:L,children:[s.jsx(G,{children:e?"Sign in":"Sign up"}),s.jsxs(K,{children:[!e&&s.jsxs("div",{children:[s.jsx(S,{type:"name",name:"username",placeholder:"Username",value:p,onChange:C,required:!0}),w?s.jsx(b,{children:w}):""]}),s.jsx(S,{type:"email",name:"email",placeholder:"Email",value:n,onChange:N,required:!0}),s.jsxs("div",{children:[s.jsx(S,{type:"password",name:"password",placeholder:"Password",value:m,onChange:A,required:!0}),f?s.jsx(b,{children:f}):"",l?s.jsx(b,{children:l}):""]})]}),s.jsx(M,{type:"submit",children:e?"Sign in":"Sign up"})]})]}),s.jsxs(O,{children:[e?"New to Disney Plus?":"Already on Disney Plus?",s.jsx(k,{to:`${e?"/disney-plus-clone/auth/signup":"/disney-plus-clone/auth/signin"}`,children:s.jsx("span",{children:e?"Sign up now":"Sign in"})})]})]})};W.propTypes={mode:g.string,onSignin:g.func,onSignup:g.func,error:g.string};const J=r(B)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,R=r.div`
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
`,$=r.img`
	height: 50px;
	margin: 10px 0;

	@media (min-width: 1000px) {
		height: 60px;
	}
`,G=r.h2`
	margin: 30px 0 20px;

	@media (min-width: 1000px) {
		font-size: 23px;
	}
`,K=r.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 30px;
`,S=r.input`
	width: 100%;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.4);
	border-radius: 5px;

	@media (min-width: 1000px) {
		font-size: 15px;
	}
`,b=r.p`
	padding: 0;
	margin: 0;
	font-size: 11px;
	color: #0158e1;
`,M=r.button`
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
`,O=r.p`
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
`,Y=()=>{const d=z(),u=D(),[x,l]=o.useState(null);let e;return{signIn:async n=>{try{await U(a,n.email,n.password),d("/disney-plus-clone/"),localStorage.setItem("lastEnteredEmail",n.email),localStorage.removeItem("signInEmail"),localStorage.removeItem("signUpEmail")}catch(i){console.error(i),i.code==="auth/invalid-credential"&&(e="Invalid password or email. Please try again.",l(e),localStorage.setItem("signUpEmail",n.email))}},signUp:async n=>{try{await H(a,n.email,n.password),await U(a,n.email,n.password),await T(a.currentUser,{displayName:n.userName}),u(q.signInUser({uid:a.currentUser.uid,email:a.currentUser.email,userName:a.currentUser.displayName})),d("/disney-plus-clone/"),localStorage.setItem("signInEmail",n.email),localStorage.removeItem("signUpEmail")}catch(i){console.error(i),i.code==="auth/email-already-in-use"&&(e="This email is already in use. Please sign in.",l(e),localStorage.setItem("signInEmail",n.email))}},error:x}};export{W as A,Y as u};
