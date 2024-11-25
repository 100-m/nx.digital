import{f as E,C,p as R,r as b,D as T,E as N,G as j,o as v,c,a as m,b as u,w as i,i as o,d as y,t as g,x as $,H as B,m as G,I as D,h as q,z as f,k as A}from"./BPRHiPFR.js";import H from"./DNvfnZ5w.js";import P from"./7v3nTUlU.js";import J from"./DlLPVOrX.js";import K from"./By2t22F3.js";import L from"./BayXnVkV.js";import{a as M,u as O}from"./5aBfFGo0.js";import{_ as Q}from"./CtvC2g-e.js";const W={class:"flex h-auto h-full max-h-full flex-col gap-3 overflow-hidden"},X={class:"flex justify-between"},Y={class:"h-full flex-1 overflow-y-auto rounded bg-white p-4 shadow"},Z={key:0,class:"truncate"},ee={key:1},oe={key:0,class:"truncate"},te={key:1},ne={for:"blocking",class:"flex flex-1 cursor-pointer select-none items-center gap-x-2 py-1 pl-1 font-medium"},le={for:"resolving",class:"flex flex-1 cursor-pointer select-none items-center gap-x-2 py-1 pl-1 font-medium"},se={key:0,class:"truncate"},ae={key:1},re=E({__name:"cc-form-workflow",props:{modelValue:{required:!0},modelModifiers:{},currentStep:{default:0},currentStepModifiers:{},refresh:{default:0},refreshModifiers:{}},emits:["update:modelValue","update:currentStep","update:refresh"],setup(x){const r=C(x,"modelValue"),d=C(x,"currentStep"),p=C(x,"refresh"),l=R(()=>r.value.steps[d.value-1]),F=["userInput","commandRun"],a=["event 1","event 2","event 3","event 4"],S=["condition 1","condition 2","condition 3","condition 4"];b(!1);const e=T({id:l.value.id,phase:l.value.phase,name:l.value.name,instruction:l.value.instruction,type:l.value.type,url:l.value.url,blocking:l.value.blocking,resolving:l.value.resolving,condition:l.value.condition||void 0,waitFor:l.value.waitFor||void 0,event:l.value.event||void 0});N(d,()=>{e.id=l.value.id,e.phase=l.value.phase,e.name=l.value.name,e.instruction=l.value.instruction,e.type=l.value.type,e.waitFor=l.value.waitFor||[]}),j(()=>{e.id=l.value.id,e.phase=l.value.phase,e.name=l.value.name,e.instruction=l.value.instruction,e.type=l.value.type,e.waitFor=l.value.waitFor||[]});async function w(s,t,V){await M.functions.update(s,t,V),p.value++}async function U(s,t,V){await M.functions.delete(s,t,V),d.value>1&&d.value--,p.value++}return(s,t)=>{const V=G,h=H,_=P,z=J,k=K,I=L;return v(),c("div",W,[m("div",X,[t[15]||(t[15]=m("h2",{class:"text-md flex-none font-bold"},"Edit Step",-1)),u(V,{size:"2xs",label:"Delete step",color:"red",icon:"i-carbon/trash-can",onClick:t[0]||(t[0]=n=>U("workflows",r.value.id,d.value))})]),m("div",Y,[u(I,{state:o(e),class:"space-y-4",onChange:t[14]||(t[14]=n=>w("workflows",r.value.id,o(e)))},{default:i(()=>[u(_,{label:"Phase name"},{default:i(()=>[u(h,{modelValue:o(e).phase,"onUpdate:modelValue":t[1]||(t[1]=n=>o(e).phase=n)},null,8,["modelValue"])]),_:1}),u(_,{label:"Step name"},{default:i(()=>[u(h,{modelValue:o(e).name,"onUpdate:modelValue":t[2]||(t[2]=n=>o(e).name=n)},null,8,["modelValue"])]),_:1}),u(_,{label:"Step instruction"},{default:i(()=>[u(z,{autoresize:"",maxrows:10,rows:4,modelValue:o(e).instruction,"onUpdate:modelValue":t[3]||(t[3]=n=>o(e).instruction=n)},null,8,["modelValue"])]),_:1}),u(_,{label:"Step type"},{default:i(()=>[u(k,{modelValue:o(e).type,"onUpdate:modelValue":t[4]||(t[4]=n=>o(e).type=n),options:F,onChange:t[5]||(t[5]=n=>w("workflows",r.value.id,o(e)))},{option:i(({option:n})=>[y(g(n),1)]),_:1},8,["modelValue"])]),_:1}),u(_,{label:"Condition"},{default:i(()=>[u(k,{modelValue:o(e).condition,"onUpdate:modelValue":t[6]||(t[6]=n=>o(e).condition=n),options:S,onChange:t[7]||(t[7]=n=>w("workflows",r.value.id,o(e)))},{label:i(()=>[o(e).condition&&o(e).condition.length?(v(),c("span",Z,g(o(e).condition),1)):(v(),c("span",ee,"Select condition"))]),option:i(({option:n})=>[y(g(n),1)]),_:1},8,["modelValue"])]),_:1}),u(_,{label:"waitFor"},{default:i(()=>[u(k,{modelValue:o(e).waitFor,"onUpdate:modelValue":t[8]||(t[8]=n=>o(e).waitFor=n),options:a,multiple:"",onChange:t[9]||(t[9]=n=>w("workflows",r.value.id,o(e)))},{label:i(()=>[o(e).waitFor&&o(e).waitFor.length?(v(),c("span",oe,g(o(e).waitFor.join(", ")),1)):(v(),c("span",te,"Select events"))]),option:i(({option:n})=>[y(g(n),1)]),_:1},8,["modelValue"])]),_:1}),m("label",ne,[$(m("input",{"onUpdate:modelValue":t[10]||(t[10]=n=>o(e).blocking=n),id:"blocking",name:"blocking",type:"checkbox",class:"text-primary focus:ring-primary h-3.5 w-3.5 cursor-pointer rounded border-stone-400 focus:ring-1"},null,512),[[B,o(e).blocking]]),t[16]||(t[16]=m("span",{class:"truncate"},"Blocking",-1))]),m("label",le,[$(m("input",{"onUpdate:modelValue":t[11]||(t[11]=n=>o(e).resolving=n),id:"resolving",name:"resolving",type:"checkbox",class:"text-primary focus:ring-primary h-3.5 w-3.5 cursor-pointer rounded border-stone-400 focus:ring-1"},null,512),[[B,o(e).resolving]]),t[17]||(t[17]=m("span",{class:"truncate"},"Resolving",-1))]),u(_,{label:"Event To Validate"},{default:i(()=>[u(k,{modelValue:o(e).event,"onUpdate:modelValue":t[12]||(t[12]=n=>o(e).event=n),options:a,onChange:t[13]||(t[13]=n=>w("workflows",r.value.id,o(e)))},{label:i(()=>[o(e).event&&o(e).event.length?(v(),c("span",se,g(o(e).event),1)):(v(),c("span",ae,"Select events"))]),option:i(({option:n})=>[y(g(n),1)]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["state"])])])}}}),we=E({__name:"7+workflow",setup(x){const r=b({}),d=b(1),p=b(0),{data:l}=O("workflowsData");return N(l,()=>{r.value=l.value[0]}),(F,a)=>{const S=D("cc-phases"),e=D("cc-steps"),w=re,U=Q;return v(),q(U,null,{default:i(()=>[o(r).name?(v(),c("div",{class:"@[1000px]:grid-cols-4 @[1250px]:grid-cols-5 grid flex-1 grid-cols-3 gap-5 overflow-hidden",key:o(p)},[u(S,{class:"@[1000px]:row-span-2 row-span-3",modelValue:o(r),"onUpdate:modelValue":a[0]||(a[0]=s=>f(r)?r.value=s:null),currentStep:o(d),"onUpdate:currentStep":a[1]||(a[1]=s=>f(d)?d.value=s:null),refresh:o(p),"onUpdate:refresh":a[2]||(a[2]=s=>f(p)?p.value=s:null)},null,8,["modelValue","currentStep","refresh"]),u(e,{class:"@[1000px]:row-span-2 row-span-3",modelValue:o(r),"onUpdate:modelValue":a[3]||(a[3]=s=>f(r)?r.value=s:null),currentStep:o(d),"onUpdate:currentStep":a[4]||(a[4]=s=>f(d)?d.value=s:null),refresh:o(p),"onUpdate:refresh":a[5]||(a[5]=s=>f(p)?p.value=s:null)},null,8,["modelValue","currentStep","refresh"]),u(w,{class:"row-span-3",modelValue:o(r),"onUpdate:modelValue":a[6]||(a[6]=s=>f(r)?r.value=s:null),currentStep:o(d),"onUpdate:currentStep":a[7]||(a[7]=s=>f(d)?d.value=s:null),refresh:o(p),"onUpdate:refresh":a[8]||(a[8]=s=>f(p)?p.value=s:null)},null,8,["modelValue","currentStep","refresh"])])):A("",!0)]),_:1})}}});export{we as default};
