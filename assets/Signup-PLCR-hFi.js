import{b as m,r as c,j as r,I as u,i as a,H as p}from"./index-gKiYQ5ic.js";import{M as g}from"./MotionContainer-J6hBerHR.js";import{A as d}from"./AuthenticationForm-Lqdrr51g.js";import"./motion-ok79US_3.js";import"./Container-DuzsEoZp.js";const w=()=>{const o=m(),[t,n]=c.useState(null);let s;const l=async e=>{try{await u(a,e.email,e.password),await p(a,e.email,e.password),o("/disney-plus-clone/"),localStorage.setItem("signInEmail",e.email),localStorage.removeItem("signUpEmail")}catch(i){console.error(i),i.code==="auth/email-already-in-use"&&(s="This email is already in use. Please sign in.",n(s),localStorage.setItem("signInEmail",e.email))}};return r.jsx(g,{children:r.jsx(d,{mode:"signup",onSignup:l,error:t})})};export{w as default};