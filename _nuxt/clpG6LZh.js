import{f as w,g,h as _,w as f,i as C,o as l,a as s,t as c,d as h,b as v,c as k,n as x,k as m,m as z}from"./BPRHiPFR.js";import{_ as M}from"./LYYSEoiu.js";import{a as $}from"./5aBfFGo0.js";import"./DbT-WjiX.js";import"./By2t22F3.js";import"./DeI5MkbJ.js";import"./7v3nTUlU.js";import"./BayXnVkV.js";import"./CyOYk8dp.js";import"./QJuNpHnT.js";import"./3i7_2xzH.js";import"./gFbj9LAa.js";import"./BIx12qXI.js";import"./qhOtPnIg.js";import"./BFBR_-AK.js";import"./CtvC2g-e.js";const B={class:"flex items-center gap-2"},V={class:"ml-1 min-w-16 text-xs"},N={class:"ml-auto text-xs"},O=w({__name:"4-events",setup(P){const{config:b}=g();function d(o,r){r.forEach(a=>{const u={...a,value:o};$.database.update("events",u)})}return(o,r)=>{const a=z,u=M;return l(),_(u,{options:C(b)},{selected:f(({selection:e})=>[s("div",B,[s("div",V,[s("b",null,c(e.length),1),h(" "+c(o.t.selected),1)]),v(a,{size:"2xs",icon:"i-carbon/checkmark",onPointerdown:t=>d(!0,e),tooltip:o.t.validate},null,8,["onPointerdown","tooltip"]),v(a,{size:"2xs",icon:"i-carbon/close",onPointerdown:t=>d(!1,e),color:"red",tooltip:o.t.invalidate},null,8,["onPointerdown","tooltip"])])]),cell:f(({header:e,view:t,state:n})=>[t.node.type==="node"&&n.columns.headers.list[0]===e?(l(),k("div",{key:0,style:x({minWidth:Math.min(n.columns.headers.list.reduce((p,i)=>p+i.width,0)-5,n.container.width-30)+"px"}),class:"flex h-full w-full items-center truncate px-2"},[h(c(t.node.id==="true"?o.t.validated:t.node.id==="false"?o.t.invalidated:t.node.id)+" ",1),s("div",N,[s("b",null,c(t.node.total_rows),1),r[0]||(r[0]=h(" lines "))])],4)):m("",!0)]),"line-addon":f(({state:e,item:t,isItemHover:n})=>{var p;return[n&&((p=e.dataMap.map[t.id])!=null&&p._data)?(l(),k("div",{key:0,class:"absolute top-0 z-50 flex h-7 -translate-x-full items-center px-2",style:x({left:`${e.columns.headers.list.reduce((i,y)=>i+y.width,0)+24}px`})},[e.dataMap.map[t.id]._data.value?m("",!0):(l(),_(a,{key:0,icon:"i-carbon/checkmark",size:"2xs",variant:"solid",tooltip:o.t.validate,onClick:i=>d(!0,[e.dataMap.map[t.id]._data])},null,8,["tooltip","onClick"])),e.dataMap.map[t.id]._data.value?(l(),_(a,{key:1,icon:"i-carbon/close",size:"2xs",variant:"solid",color:"red",tooltip:o.t.invalidate,onClick:i=>d(!1,[e.dataMap.map[t.id]._data])},null,8,["tooltip","onClick"])):m("",!0)],4)):m("",!0)]}),_:1},8,["options"])}}});export{O as default};