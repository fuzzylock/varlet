import{S as b}from"./index.3c1562a8.js";import{u as w}from"./provide.1b47eaf0.js";import{_ as I}from"./elevation.7fcd6f98.js";import{d as C,r as S,y as v,e as g,o as y,l as T,j as $,G as x}from"./vendor.4723551d.js";const B={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}};const A=C({name:"VarTabsItems",components:{VarSwipe:b},props:B,setup(e){const r=S(null),{tabItemList:n,bindTabItem:l,length:u}=w(),m=t=>n.find(({name:a})=>t===a.value),i=t=>n.find(({index:a})=>t===a.value),f=t=>m(t)||i(t),d=t=>{var o;const a=f(t);!a||(n.forEach(({setCurrent:s})=>s(!1)),a.setCurrent(!0),(o=r.value)==null||o.to(a.index.value))},h=t=>{var s,p;const a=n.find(({index:_})=>_.value===t),o=(s=a.name.value)!=null?s:a.index.value;(p=e["onUpdate:active"])==null||p.call(e,o)};return l({}),v(()=>e.active,d),v(()=>u.value,()=>d(e.active)),{swipe:r,handleSwipeChange:h}}});function P(e,r,n,l,u,m){const i=g("var-swipe");return y(),T(i,{class:"var-tabs-items",ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:$(()=>[x(e.$slots,"default")]),_:3},8,["loop","touchable","onChange"])}var c=I(A,[["render",P]]);c.install=function(e){e.component(c.name,c)};export{c as T};
