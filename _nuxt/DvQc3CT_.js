import{_ as h,a as D}from"./54CX02i0.js";import{_ as C}from"./LYYSEoiu.js";import{f as F,g as L,h as M,w as p,i as b,o as e,a as i,t as c,d as S,b as u,c as o,j as $,k as a,P as y,n as W,F as g}from"./BPRHiPFR.js";import{g as q}from"./qhOtPnIg.js";import"./CP__BkEg.js";import"./5aBfFGo0.js";import"./By2t22F3.js";import"./DdNB9Kmc.js";import"./DbT-WjiX.js";import"./DeI5MkbJ.js";import"./7v3nTUlU.js";import"./BayXnVkV.js";import"./CyOYk8dp.js";import"./QJuNpHnT.js";import"./3i7_2xzH.js";import"./gFbj9LAa.js";import"./BIx12qXI.js";import"./BFBR_-AK.js";import"./CtvC2g-e.js";const w={class:"flex items-center"},B={class:"ml-1 min-w-16 text-xs"},N={key:1,"nx-header":"",class:"truncate",tooltip:"Dissemination Date"},V=["tooltip"],z=["tooltip"],E=["tooltip"],R={key:5,"nx-header":"",class:"truncate",tooltip:"Juridiction - Language"},T=["tooltip"],A=["tooltip"],H=["tooltip"],J=["tooltip"],P={key:2,"nx-cell":""},j=["tooltip"],O=["innerHTML"],U={key:5,"nx-cell":"",class:"flex items-center truncate px-2"},G={key:6,"nx-cell":"",class:"flex items-center truncate px-2"},I={class:"mr-1 min-w-[60px] text-stone-400"},K={class:"truncate"},yt=F({__name:"2-actions",setup(Q){const{config:f}=L();return(l,r)=>{const m=h,k=D,v=C;return e(),M(v,{options:b(f),class:"[&_[nx-header-container='0']_.group\\/resizer]:hidden"},{selected:p(({selection:t})=>[i("div",w,[i("div",B,[i("b",null,c(t.length),1),S(" "+c(l.t.selected),1)]),u(m,{data:t,class:"!h-7 flex-1"},null,8,["data"])])]),header:p(({header:t})=>[t.label==="Status"?(e(),o("div",{key:0,"nx-header":"",class:"ml-10 flex items-center divide-x text-sm text-stone-400",onClick:r[0]||(r[0]=$(()=>{},["stop"]))},r[1]||(r[1]=[i("div",{class:"px-2"},"Status",-1),i("div",{class:"px-2"},"Owner",-1)]))):a("",!0),t.label==="Working Date"&&(l._.provides[y]||l.$route).query.tab==="2"?(e(),o("div",N,"Diss. Dt.")):a("",!0),t.label==="Working Date"&&(l._.provides[y]||l.$route).query.tab!=="2"?(e(),o("div",{key:2,"nx-header":"",class:"truncate",tooltip:t.label},"Work Dt.",8,V)):a("",!0),t.label==="Working Month"?(e(),o("div",{key:3,"nx-header":"",class:"truncate",tooltip:t.label},"Work Mo.",8,z)):a("",!0),t.label==="Document"?(e(),o("div",{key:4,"nx-header":"",class:"truncate",tooltip:t.label},"Doc.",8,E)):a("",!0),t.label==="Language"?(e(),o("div",R,"Jur. Lang.")):a("",!0),t.label==="Regulator"?(e(),o("div",{key:6,"nx-header":"",class:"truncate",tooltip:t.label},"Reg.",8,T)):a("",!0),t.label==="Concatenate"?(e(),o("div",{key:7,"nx-header":"",class:"truncate",tooltip:t.label},"Concat.",8,A)):a("",!0),t.label==="Frequency"?(e(),o("div",{key:8,"nx-header":"",class:"truncate",tooltip:t.label},"Freq.",8,H)):a("",!0),t.label==="Encryption"?(e(),o("div",{key:9,"nx-header":"",class:"truncate",tooltip:t.label},"Encrypt.",8,J)):a("",!0)]),cell:p(({cell:t,header:s,row:n,view:d,state:X})=>{var _,x;return[d.node.type==="node"||["date","time","number","boolean"].includes(s.metadata.type)?(e(),o(g,{key:0},[],64)):a("",!0),n._data?s.label==="Status"?(e(),o("div",P,[u(k,{data:n._data},null,8,["data"])])):["Document"].includes(s.label)?(e(),o("div",{key:3,"nx-cell":"",class:"flex items-center truncate px-2",tooltip:n._data.info.document},c(t),9,j)):["Language"].includes(s.label)?(e(),o("div",{key:4,"nx-cell":"",innerHTML:("getFlags"in l?l.getFlags:b(q))(n._data.info)},null,8,O)):["Management Company","Auditor"].includes(s.label)?(e(),o("div",U,c(typeof t=="string"?t:""),1)):["Umbrella","Fund","Share"].includes(s.label)?(e(),o("div",G,[i("span",I,c((_=n._data.info[s.label.toLowerCase()])==null?void 0:_.id),1),i("span",K,c((x=n._data.info[s.label.toLowerCase()])==null?void 0:x.name),1)])):a("",!0):(e(),o(g,{key:1},[],64))]}),"line-addon":p(({state:t,item:s,isItemHover:n})=>{var d;return[n&&((d=t.dataMap.map[s.id])!=null&&d._data)?(e(),o("div",{key:0,class:"absolute top-0 z-50 flex h-7 -translate-x-full items-center px-2",style:W({left:`${t.columns.headers.list[0].width+212}px`})},[u(m,{class:"bg-primary-50 !h-7",data:t.dataMap.map[s.id]._data},null,8,["data"])],4)):a("",!0)]}),_:1},8,["options"])}}});export{yt as default};