import{_ as $}from"./banner.102ae9df.js";import{A}from"./AnimationBox.f0b2f32b.js";import{_ as D,d as G,a5 as H,af as L,g as n,a as l,Z as P,a7 as w,c as s,w as R,f as h,h as U,D as t,K as C,p as y,N as u,ag as a,V as d,i as x,n as c,ah as W,ai as Z,I as p,H as j}from"./vue-router.esm-bundler.c9213159.js";import{w as q,g as m}from"./utils.ffe55eac.js";import"./main.ffafe397.js";import"./clipboard.4312f935.js";const _=i=>(W("data-v-efe1234c"),i=i(),Z(),i),J={class:"root-page"},O={class:"profile-container"},Q={style:{"padding-left":"6px"}},X={class:"base-title"},Y={class:"base-description"},ee={class:"button-group"},te={class:"block-button-content"},se=_(()=>t("span",null,"GITHUB",-1)),oe={class:"block-button-content"},ae=_(()=>t("span",null,"\u5FEB\u901F\u5F00\u59CB",-1)),ne=_(()=>t("div",null,[t("div",{class:"post-introduce"},[t("div",{class:"introduce-img"},[t("img",{class:"img",src:$})])])],-1)),ce=G({setup(i){const B=H(),v=L(),T=n(s,"pc.header.github"),f=n(s,"themesKey"),o=l(P(f)),I=l(n(s,"pc.header.darkMode")),N=l(n(s,"title")),b=l(n(s,"pc.title")["zh-CN"]),z=l(n(s,"pc.header.i18n")),S=()=>{window.open(T)},M=()=>{const{language:e}=m();v.push(`/${e}/home`)},g=()=>({action:"themesChange",from:"pc",data:o.value}),k=e=>{o.value=e,w(s,o.value),window.localStorage.setItem(f,o.value)},V=()=>{var e;k(o.value==="darkThemes"?"themes":"darkThemes"),window.postMessage(g(),"*"),(e=document.getElementById("mobile"))==null||e.contentWindow.postMessage(g(),"*")},E=()=>{const{language:e}=m();!e||(document.title=b.value)},F=()=>{const{language:e}=m(),{menuName:r}=m(),K=`/${e==="zh-CN"?"en-US":"zh-CN"}/${r}`;v.replace(K)};return w(s,o.value),window.postMessage(g(),"*"),q((e,r)=>{r==="mobile"&&k(e)}),R(()=>B.path,E,{immediate:!0}),(e,r)=>(h(),U("div",J,[t("div",O,[t("div",Q,[t("div",X,C(N.value),1),t("div",Y,C(b.value),1),t("div",ee,[I.value?(h(),y(a(d),{key:0,class:"round-button",round:"",onClick:V},{default:u(()=>[c(a(p),{size:"24px",name:o.value==="themes"?"white-balance-sunny":"weather-night"},null,8,["name"])]),_:1})):x("v-if",!0),z.value?(h(),y(a(d),{key:1,class:"round-button",round:"",onClick:F},{default:u(()=>[c(a(p),{name:"translate",size:"24px"})]),_:1})):x("v-if",!0)])]),c(a(d),{class:"block-button",block:"",onClick:S},{default:u(()=>[t("div",te,[se,c(a(p),{style:{"margin-left":"10px"},name:"github",size:"24px"})])]),_:1}),c(a(d),{class:"block-button",block:"",onClick:M},{default:u(()=>[t("div",oe,[ae,c(A,{class:"logo",style:j({transform:"rotate(-90deg)"})},null,8,["style"])])]),_:1})]),ne]))}});var ge=D(ce,[["__scopeId","data-v-efe1234c"]]);export{ge as default};
