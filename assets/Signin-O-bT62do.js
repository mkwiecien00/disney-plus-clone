import{b as l,r as m,j as o,k as c,H as g}from"./index-VPe8L2p7.js";import{A as p}from"./AuthenticationForm-EaWOTdkR.js";import{M as d}from"./MotionContainer-IbEoF34k.js";import"./Container-V3uBE-Gs.js";import"./motion-scdQyrTM.js";const I=()=>{const t=l(),[i,s]=m.useState(null);let r;const n=async e=>{try{await g(c,e.email,e.password),t("/disney-plus-clone/"),localStorage.setItem("lastEnteredEmail",e.email),localStorage.removeItem("signInEmail")}catch(a){console.error(a),a.code==="auth/invalid-credential"&&(r="Invalid password or email. Please try again.",s(r),localStorage.setItem("signUpEmail",e.email))}};return o.jsx(d,{children:o.jsx(p,{mode:"signin",onSignin:n,error:i})})};export{I as default};
