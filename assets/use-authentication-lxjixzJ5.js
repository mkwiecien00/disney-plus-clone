import{u as a,r,j as t,L as D,b as F,e as H,C as N,h as o,D as T,E as q,m as B}from"./index-Gi-OKZpW.js";import{P as x}from"./MotionContainer-aH0jcYhy.js";import{C as W}from"./Container-AehQcF8G.js";const J="/disney-plus-clone/assets/disney-logo-color--NyIJpbx.svg",R=({mode:p,onSignin:h,onSignup:f,error:m})=>{const e=p=="signin",I=6,j=10,[s,i]=r.useState(""),[l,w]=r.useState(""),[u,v]=r.useState(""),[c,A]=r.useState(""),[g,y]=r.useState(""),[U,P]=r.useState(!1);r.useEffect(()=>{const n=localStorage.getItem("signInEmail"),S=localStorage.getItem("signUpEmail"),d=localStorage.getItem("lastEnteredEmail");!n&!d&!S&e&&(i("test@test.com"),w("test123")),n&&e&&i(n),S&&!e&&i(S),d&&e&&n&&i(n),d&&e&&!n&&(i(d),d==="test@test.com"&&w("test123"))},[e]);const C=n=>{i(n.target.value)},L=n=>{w(n.target.value)},k=n=>{A(n.target.value)},z=n=>{n.preventDefault(),e&&h({email:s,password:l}),e||(c.trim()===""?y("Username cannot be empty."):c.trim().length>j?y("Username cannot be longer than 10 characters."):y(""),l.length<I?v("Password must be at least 6 characters long."):v("")),P(!0)};return r.useEffect(()=>{U&&!g&&!u&&!e&&s&&l&&c&&f({email:s,password:l,userName:c}),P(!1)},[g,u,s,l,c,e,U]),t.jsxs($,{children:[t.jsxs(G,{children:[t.jsx(K,{src:J,alt:"Logo of Disney+ App"}),t.jsxs("form",{onSubmit:z,children:[t.jsx(M,{children:e?"Sign in":"Sign up"}),t.jsxs(O,{children:[!e&&t.jsxs("div",{children:[t.jsx(E,{type:"name",name:"username",placeholder:"Username",value:c,onChange:k,required:!0}),g?t.jsx(b,{children:g}):""]}),t.jsx(E,{type:"email",name:"email",placeholder:"Email",value:s,onChange:C,required:!0}),t.jsxs("div",{children:[t.jsx(E,{type:"password",name:"password",placeholder:"Password",value:l,onChange:L,required:!0}),u?t.jsx(b,{children:u}):"",m?t.jsx(b,{children:m}):""]})]}),t.jsx(Q,{type:"submit",children:e?"Sign in":"Sign up"})]})]}),t.jsxs(V,{children:[e?"New to Disney Plus?":"Already on Disney Plus?",t.jsx(D,{to:`${e?"/disney-plus-clone/auth/signup":"/disney-plus-clone/auth/signin"}`,children:t.jsx("span",{children:e?"Sign up now":"Sign in"})})]})]})};R.propTypes={mode:x.string,onSignin:x.func,onSignup:x.func,error:x.string};const $=a(W)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`,G=a.div`
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
`,K=a.img`
	height: 50px;
	margin: 10px 0;

	@media (min-width: 1000px) {
		height: 60px;
	}
`,M=a.h2`
	margin: 30px 0 20px;

	@media (min-width: 1000px) {
		font-size: 23px;
	}
`,O=a.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 30px;
`,E=a.input`
	width: 100%;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.4);
	border-radius: 5px;

	@media (min-width: 1000px) {
		font-size: 15px;
	}
`,b=a.p`
	padding: 0;
	margin: 0;
	font-size: 11px;
	color: #0158e1;
`,Q=a.button`
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
`,V=a.p`
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
`,_=()=>{const p=F(),h=H(),[f,m]=r.useState(null);let e;return{signIn:async s=>{try{await N(o,s.email,s.password),p("/disney-plus-clone/"),localStorage.setItem("lastEnteredEmail",s.email),localStorage.removeItem("signInEmail"),localStorage.removeItem("signUpEmail")}catch(i){console.error(i),i.code==="auth/invalid-credential"&&(e="Invalid password or email. Please try again.",m(e),localStorage.setItem("signUpEmail",s.email))}},signUp:async s=>{try{await T(o,s.email,s.password),await N(o,s.email,s.password),await q(o.currentUser,{displayName:s.userName}),h(B.signInUser({uid:o.currentUser.uid,email:o.currentUser.email,userName:o.currentUser.displayName})),p("/disney-plus-clone/"),localStorage.setItem("signInEmail",s.email),localStorage.removeItem("signUpEmail")}catch(i){console.error(i),i.code==="auth/email-already-in-use"&&(e="This email is already in use. Please sign in.",m(e),localStorage.setItem("signInEmail",s.email))}},error:f}};export{R as A,_ as u};
