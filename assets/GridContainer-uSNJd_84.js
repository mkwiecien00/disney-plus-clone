import{j as s,L as l}from"./index-VPe8L2p7.js";import{P as e}from"./MotionContainer-IbEoF34k.js";import{T as c,G as n,I as m}from"./Title-SaPHk62X.js";const o=({movies:i,path:p,title:a})=>s.jsxs(s.Fragment,{children:[a&&s.jsx(c,{children:a}),s.jsx(n,{container:!0,spacing:2,columns:12,alignItems:"center",children:i.map((r,t)=>s.jsx(n,{item:!0,xs:12,sm:4,md:3,lg:2,children:s.jsx(l,{to:`/disney-plus-clone/${p||r.resourceType||r.media_type}/${r.id||r.detailsId}`,children:s.jsx(m,{children:s.jsx("img",{src:`https://image.tmdb.org/t/p/w500/${r.poster_path||r.path}`,alt:r.title||r.name})},t)},t)},t))})]});o.propTypes={movies:e.array,title:e.string,path:e.string};export{o as G};