import{_ as V,ay as $,az as c,f as q,aC as j,aD as m,aF as I,a6 as N,b8 as O,p as y,aJ as A,aK as R,o as s,c as n,a as d,x as z,bQ as D,B as F,v as l,Z as v,d as h,t as k,k as p}from"./BPRHiPFR.js";const M={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-radio",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},f=$(c.ui.strategy,c.ui.radio,M),G=q({inheritAttrs:!1,props:{id:{type:String,default:null},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>f.default.color,validator(e){return c.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:a,attrs:g}=j("radio",m(e,"ui"),f,m(e,"class")),b=e.id??I(),i=N("radio-group",null),{emitFormChange:t,color:o,name:C}=i??O(e,f),S=y({get(){return e.modelValue},set(u){r("update:modelValue",u),i||t()}});function w(u){r("change",u.target.value)}const B=y(()=>A(R(a.value.base,a.value.form,a.value.background,a.value.border,o.value&&a.value.ring.replaceAll("{color}",o.value),o.value&&a.value.color.replaceAll("{color}",o.value)),e.inputClass));return{inputId:b,ui:a,attrs:g,pick:S,name:C,inputClass:B,onChange:w}}}),J=["data-n-ids"],P=["id","name","required","value","disabled"],T=["for"];function U(e,r,a,g,b,i){return s(),n("div",{class:l(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[d("div",{class:l(e.ui.container)},[z(d("input",F({id:e.inputId,"onUpdate:modelValue":r[0]||(r[0]=t=>e.pick=t),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:e.inputClass},e.attrs,{onChange:r[1]||(r[1]=(...t)=>e.onChange&&e.onChange(...t))}),null,16,P),[[D,e.pick]])],2),e.label||e.$slots.label?(s(),n("div",{key:0,class:l(e.ui.inner)},[d("label",{for:e.inputId,class:l(e.ui.label)},[v(e.$slots,"label",{label:e.label},()=>[h(k(e.label),1)]),e.required?(s(),n("span",{key:0,class:l(e.ui.required)},"*",2)):p("",!0)],10,T),e.help||e.$slots.help?(s(),n("p",{key:0,class:l(e.ui.help)},[v(e.$slots,"help",{help:e.help},()=>[h(k(e.help),1)])],2)):p("",!0)],2)):p("",!0)],10,J)}const E=V(G,[["render",U]]),Q=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{Q as R,E as _,M as r};