import{b as m,r as u,j as i,I as c,i as s,H as p,J as g}from"./index-f4kqRJ2O.js";import{M as d}from"./MotionContainer-ZB23DNTS.js";import{A as h}from"./AuthenticationForm-O-QU-FTw.js";import"./motion-W1U401kF.js";import"./Container-C8EZLKHf.js";const f=()=>{const o=m(),[t,n]=u.useState(null);let r;const l=async e=>{try{await c(s,e.email,e.password),await p(s,e.email,e.password),await g(s.currentUser,{displayName:e.userName}),o("/disney-plus-clone/"),localStorage.setItem("signInEmail",e.email),localStorage.removeItem("signUpEmail")}catch(a){console.error(a),a.code==="auth/email-already-in-use"&&(r="This email is already in use. Please sign in.",n(r),localStorage.setItem("signInEmail",e.email))}};return i.jsx(d,{children:i.jsx(h,{mode:"signup",onSignup:l,error:t})})};export{f as default};
