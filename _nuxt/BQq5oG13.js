import{_ as c}from"./3i7_2xzH.js";import{_ as u}from"./CtvC2g-e.js";import{f as m,h as r,w as p,o as f,b as l}from"./BPRHiPFR.js";import"./gFbj9LAa.js";import"./By2t22F3.js";import"./BIx12qXI.js";import"./qhOtPnIg.js";const P=m({__name:"6-actions",setup(d){const o=[{name:"TOP Valo Equity",num:1,cutoff:"17:00",status:"active"},{name:"TOP Step Regler Accountant",num:10,cutoff:"17:00",status:"active"},{name:"TOP Step Regler Control",num:20,cutoff:"17:00",status:"active"},{name:"TOP Valo Bond",num:30,cutoff:"17:00",status:"active"},{name:"TOP Recon Stock Controller",num:42,cutoff:"17:00",status:"active"},{name:"TOP Recon Stock Accountant",num:42,cutoff:"17:00",status:"active"},{name:"TOP Market Data",num:42,cutoff:"17:00",status:"inactive"}],e={actions:["space","separator","hide","group","sort","filter","find","transpose","pivot","plot","density","info","import","export"],columns:[{key:"name",width:200,type:"string"},{key:"num",width:100,type:"number"},{key:"cutoff",width:100,type:"date"},{key:"status",width:100,type:"boolean",hide:!0}],display:"plot",plot:{viz:"bar",x:"name",y:"num"}};return(n,t)=>{const a=c,s=u;return f(),r(s,null,{default:p(()=>[l(a,{options:e,class:"h-full",data:o,onState:t[0]||(t[0]=i=>n.window.state=i)})]),_:1})}}});export{P as default};
