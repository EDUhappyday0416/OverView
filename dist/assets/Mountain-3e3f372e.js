import{i as b,A as k,q as w,z as D,k as t,o as n,c as d,g as e,b as s,s as a,F as i,e as B,x as M,C,t as c}from"./index-098384d1.js";const F=s("h4",{class:"pa-3"}," 百岳 ",-1),N={class:"mountain"},Q={__name:"Mountain",setup(V){const l=b(),r=k(),u=w(()=>r.MountainData.data);return D(()=>{l.loading.show({delay:400,message:"請稍等..."}),r.getQueryMountainData().then(_=>{_&&l.loading.hide()})}),(_,j)=>{const m=t("v-divider"),v=t("v-card-title"),g=t("v-card-text"),p=t("v-img"),f=t("v-card"),h=t("v-col"),x=t("v-row");return n(),d(i,null,[F,e(m,{class:"pa-3"}),s("div",N,[e(x,{"no-gutters":"",class:"d-flex justify-center"},{default:a(()=>[(n(!0),d(i,null,B(u.value,(o,y)=>(n(),M(h,{class:"ma-2",key:y,cols:"12",sm:"12",md:"3"},{default:a(()=>[s("div",null,[e(f,{class:"mx-auto"},{default:a(()=>[e(p,{src:o.images,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",style:{"object-fit":"cover"},"max-height":"250",cover:"",class:"bg-grey-lighten-2 align-end text-white"},{default:a(()=>[e(v,null,{default:a(()=>[C(c(o.name)+" "+c(o.height),1)]),_:2},1024),e(g,null,{default:a(()=>[s("div",null,c(o.location),1)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1024)])]),_:2},1024))),128))]),_:1})])],64)}}};export{Q as default};
