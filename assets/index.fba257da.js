var E=Object.defineProperty,U=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var B=(a,o,t)=>o in a?E(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,w=(a,o)=>{for(var t in o||(o={}))A.call(o,t)&&B(a,t,o[t]);if(b)for(var t of b(o))S.call(o,t)&&B(a,t,o[t]);return a},h=(a,o)=>U(a,D(o));import{D as m}from"./index.18912145.js";import{B as F}from"./index.2a14dd0c.js";import{I as x}from"./index.a4965125.js";import{S as f}from"./index.abd96d23.js";import{C as T}from"./index.81de271b.js";import{A as N}from"./AppType.78e3bbda.js";import{d as I}from"./index.9b1139e6.js";import{u as V,a as _,_ as z,b as M,c as P}from"./en-US.f8762106.js";import{w as H,a as L}from"./utils.5a4067e3.js";import{_ as q}from"./elevation.6f443b25.js";import{q as R,$ as W,e as C,o as G,c as J,i as s,j as n,F as K,m as l,t as i}from"./vendor.efca09d3.js";import"./index.359a10a2.js";import"./lock.363e6814.js";import"./index.45528475.js";import"./zIndex.2548bfbd.js";import"./components.8013e964.js";import"./shared.506a394a.js";import"./index.b50b8baf.js";import"./index.831fc111.js";import"./elements.6395be39.js";var O={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},Q={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:j,use:X,pack:u,packs:wo,merge:ho}=V(),Y=a=>{P(a),X(a)};_("zh-CN",z);_("en-US",M);j("zh-CN",O);j("en-US",Q);const Z={name:"DialogExample",components:{VarDialog:m.Component,VarButton:F,VarIcon:x,VarCell:T,AppType:N},setup(){const a=R({show:!1,show1:!1,show2:!1,value:""}),o={confirm:()=>f.success("confirm"),cancel:()=>f.error("cancel"),close:()=>f.info("close")},t=()=>m({message:u.value.message}),e=async()=>o[await m(u.value.message)](),y=()=>{m({title:u.value.title,message:u.value.message})},v=()=>{m({message:u.value.message,confirmButton:!1,cancelButton:!1})},d=(p,k)=>{f.loading(u.value.asyncCloseProgress),setTimeout(()=>{o[p](),k()},1e3)},r=()=>{m({message:u.value.message,onBeforeClose:d})};return H(Y),L(I),h(w({pack:u},W(a)),{asyncClose:r,createBasic:t,createAction:e,modifyTitle:y,hideButton:v,onBeforeClose:d,Snackbar:f})}};function $(a,o,t,e,y,v){const d=C("app-type"),r=C("var-button"),p=C("var-dialog"),k=C("var-icon"),g=C("var-cell");return G(),J(K,null,[s(d,null,{default:n(()=>[l(i(e.pack.functionCall),1)]),_:1}),s(r,{type:"primary",block:"",onClick:e.createBasic},{default:n(()=>[l(i(e.pack.basicUsage),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:e.modifyTitle},{default:n(()=>[l(i(e.pack.modifyTitle),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:e.hideButton},{default:n(()=>[l(i(e.pack.hideButton),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:e.createAction},{default:n(()=>[l(i(e.pack.handleUserBehavior),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:e.asyncClose},{default:n(()=>[l(i(e.pack.asyncClose),1)]),_:1},8,["onClick"]),s(d,null,{default:n(()=>[l(i(e.pack.componentCall),1)]),_:1}),s(r,{type:"warning",block:"",onClick:o[0]||(o[0]=c=>a.show=!0)},{default:n(()=>[l(i(e.pack.basicUsage),1)]),_:1}),s(p,{show:a.show,"onUpdate:show":o[1]||(o[1]=c=>a.show=c),title:e.pack.title,message:e.pack.message,onConfirm:o[2]||(o[2]=()=>e.Snackbar.success("confirm")),onCancel:o[3]||(o[3]=()=>e.Snackbar.error("cancel")),onClosed:o[4]||(o[4]=()=>e.Snackbar.info("closed"))},null,8,["show","title","message"]),s(r,{type:"warning",block:"",onClick:o[5]||(o[5]=c=>a.show1=!0)},{default:n(()=>[l(i(e.pack.asyncClose),1)]),_:1}),s(p,{show:a.show1,"onUpdate:show":o[6]||(o[6]=c=>a.show1=c),title:e.pack.title,message:e.pack.message,onBeforeClose:e.onBeforeClose},null,8,["show","title","message","onBeforeClose"]),s(r,{type:"warning",block:"",onClick:o[7]||(o[7]=c=>a.show2=!0)},{default:n(()=>[l(i(e.pack.customSlots),1)]),_:1}),s(p,{show:a.show2,"onUpdate:show":o[8]||(o[8]=c=>a.show2=c)},{title:n(()=>[s(k,{name:"information",color:"#2979ff"})]),default:n(()=>[s(g,null,{default:n(()=>[l(i(e.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[l(i(e.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[l(i(e.pack.message),1)]),_:1})]),_:1},8,["show"])],64)}var _o=q(Z,[["render",$],["__scopeId","data-v-7374df38"]]);export{_o as default};
