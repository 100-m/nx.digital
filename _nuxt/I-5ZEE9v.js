import D from"./DbT-WjiX.js";import{_ as B,ay as N,bY as $,az as c,f as h,aC as j,aD as g,p as E,b5 as L,b6 as O,r as S,o as r,c as n,Z as b,d as i,v as u,b as V,w as k,a as p,k as d,t as T,F as z,q as A,h as U,B as w,aI as F}from"./BPRHiPFR.js";const f=N(c.ui.strategy,c.ui.tooltip,$),I=h({components:{UKbd:D},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>f.default.openDelay},closeDelay:{type:Number,default:()=>f.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:m}=j("tooltip",g(e,"ui"),f,g(e,"class")),l=E(()=>L({},e.popper,t.value.popper)),[y,v]=O(l.value),s=S(!1);let o=null,a=null;function M(){a&&(clearTimeout(a),a=null),!s.value&&(o=o||setTimeout(()=>{s.value=!0,o=null},e.openDelay))}function C(){o&&(clearTimeout(o),o=null),s.value&&(a=a||setTimeout(()=>{s.value=!1,a=null},e.closeDelay))}return{ui:t,attrs:m,popper:l,trigger:y,container:v,open:s,onMouseEnter:M,onMouseLeave:C}}});function K(e,t,m,l,y,v){const s=D;return r(),n("div",w({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:t[0]||(t[0]=(...o)=>e.onMouseEnter&&e.onMouseEnter(...o)),onMouseleave:t[1]||(t[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[b(e.$slots,"default",{open:e.open},()=>[t[2]||(t[2]=i(" Hover "))]),e.open&&!e.prevent?(r(),n("div",{key:0,ref:"container",class:u([e.ui.container,e.ui.width])},[V(F,w({appear:""},e.ui.transition),{default:k(()=>{var o;return[p("div",null,[e.popper.arrow?(r(),n("div",{key:0,"data-popper-arrow":"",class:u(Object.values(e.ui.arrow))},null,2)):d("",!0),p("div",{class:u([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[b(e.$slots,"text",{},()=>[i(T(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(r(),n("span",{key:0,class:u(e.ui.shortcuts)},[p("span",{class:u(e.ui.middot)},"·",2),(r(!0),n(z,null,A(e.shortcuts,a=>(r(),U(s,{key:a,size:"xs"},{default:k(()=>[i(T(a),1)]),_:2},1024))),128))],2)):d("",!0)],2)])]}),_:3},16)],2)):d("",!0)],16)}const H=B(I,[["render",K]]);export{H as default};