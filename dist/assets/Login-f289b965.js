import{_ as g,u as m,r as c,a as h,o as b,c as f,b as s,w as r,v as p,p as k,d as w}from"./index-ff5efc87.js";const l=t=>(k("data-v-5ab69a24"),t=t(),w(),t),x={class:"login"},I=l(()=>s("div",{class:"login__label"},"LOGIN ACCOUNT",-1)),L={class:"login__form"},U=l(()=>s("div",{class:"login__email__label"},"Email",-1)),y={class:"login__email"},B={class:"login__form"},C=l(()=>s("div",{class:"login__password__label"},"Password",-1)),S={class:"login__password"},N={class:"login__btn"},V={__name:"Login",setup(t){const _=m(),a=c("frances@kk.kk"),n=c("123456"),i=h(),u=()=>{const d={email:a.value,password:n.value};console.log(i),i.loginUser(d).then(o=>{o.access_token&&_.push({path:"/dashboard"})})},v=()=>{_.push({path:"/register"})};return(d,o)=>(b(),f("div",x,[I,s("div",L,[U,s("div",y,[r(s("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e)},null,512),[[p,a.value]])])]),s("div",B,[C,s("div",S,[r(s("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=e=>n.value=e)},null,512),[[p,n.value]])])]),s("div",N,[s("button",{onClick:o[2]||(o[2]=e=>u())},"登入")]),s("div",{class:"login__goBtn",onClick:o[3]||(o[3]=e=>v())},"尚未註冊?")]))}},O=g(V,[["__scopeId","data-v-5ab69a24"]]);export{O as default};
