import{R as d}from"./index.991f7121.js";import{t as v}from"./elements.6395be39.js";import{_ as c}from"./elevation.7fcd6f98.js";import{d as u,f,w as m,o as t,c as i,G as r,h as s,p as y,n as g,t as o}from"./vendor.4723551d.js";function S(e){return["fill","contain","cover","none","scale-down"].includes(e)}const _={src:{type:String},fit:{type:String,validator:S,default:"cover"},height:{type:[String,Number]},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:{type:Function}};const h=u({name:"VarCard",directives:{Ripple:d},props:_,setup(){return{toSizeUnit:v}}}),k=["src","alt"],C={key:0,class:"var-card__title"},$={key:0,class:"var-card__subtitle"},b={key:0,class:"var-card__description"},z={key:0,class:"var-card__footer"};function w(e,n,B,D,N,V){const l=f("ripple");return m((t(),i("div",{class:y(["var-card",[e.elevation?`var-elevation--${e.elevation}`:"var-elevation--2"]]),onClick:n[0]||(n[0]=(...p)=>e.onClick&&e.onClick(...p))},[r(e.$slots,"image",{},()=>[e.src?(t(),i("img",{key:0,class:"var-card__image",style:g({objectFit:e.fit,height:e.toSizeUnit(e.height)}),src:e.src,alt:e.alt},null,12,k)):s("v-if",!0)]),r(e.$slots,"title",{},()=>[e.title?(t(),i("div",C,o(e.title),1)):s("v-if",!0)]),r(e.$slots,"subtitle",{},()=>[e.subtitle?(t(),i("div",$,o(e.subtitle),1)):s("v-if",!0)]),r(e.$slots,"description",{},()=>[e.description?(t(),i("div",b,o(e.description),1)):s("v-if",!0)]),e.$slots.extra?(t(),i("div",z,[r(e.$slots,"extra")])):s("v-if",!0)],2)),[[l,{disabled:!e.ripple}]])}var a=c(h,[["render",w]]);a.install=function(e){e.component(a.name,a)};export{a as C};
