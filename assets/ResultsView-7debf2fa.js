import{u as l,s as y,m as R,o,c as a,a as m,b as e,t as n,h as p,e as r,f,F as x,r as E,g as V}from"./index-48a52602.js";const L={class:"wrapper"},C={key:0},g={key:1},v={key:2},w={key:3},D={key:4},A={key:5},B={__name:"Results",setup(d){const c=l(),{maxLoad:t,curLoad:s,status:_}=y(c),{reset:u}=R(l,["reset"]);return(N,i)=>{const h=E("RouterLink");return o(),a(x,null,[m("div",L,[e(t)!=""&&e(s)==""?(o(),a("h4",C," Your maximum equip load is "+n(e(t)),1)):p("",!0),e(s)==""?(o(),a("p",g)):e(s)<=e(t)*.2999?(o(),a("h4",v,n(e(_))+" LIGHT. ",1)):e(s)>e(t)*.2999&&e(s)<=e(t)*.6999?(o(),a("h4",w,n(e(_))+" MEDIUM. ",1)):e(s)>e(t)*.6999&&e(s)<=e(t)*.9999?(o(),a("h4",D,n(e(_))+" HEAVY. ",1)):e(s)>=e(t)*.9999?(o(),a("h4",A,n(e(_))+" OVERLOADED. ",1)):p("",!0),r(h,{to:"/"},{default:f(()=>[m("button",{onClick:i[0]||(i[0]=(...k)=>e(u)&&e(u)(...k))},"RESET ↺")]),_:1})]),r(e(V))],64)}}},T={__name:"ResultsView",setup(d){return(c,t)=>(o(),a("main",null,[r(B)]))}};export{T as default};
