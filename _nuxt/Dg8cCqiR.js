import{r as B,_ as O}from"./Bc1iQyWM.js";import{_ as z,ay as S,az as l,f as G,aC as h,aD as o,b8 as U,a7 as j,p as w,o as r,c as d,a as F,s as A,Y as i,d as N,t as _,k as D,F as T,q,h as E,w as C,A as c,ba as s}from"./BJUyEi7U.js";const I={wrapper:"relative flex items-start",fieldset:"",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},f=S(l.ui.strategy,l.ui.radioGroup,I),L=S(l.ui.strategy,l.ui.radio,B),P=G({components:{URadio:O},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Boolean],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>f.default.color,validator(e){return l.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:u}){const{ui:m,attrs:g}=h("radioGroup",o(e,"ui"),f,o(e,"class")),{ui:p}=h("radio",o(e,"uiRadio"),L),{emitFormChange:b,color:n,name:t}=U(e,f,!1);j("radio-group",{color:n,name:t});const y=a=>{u("update:modelValue",a),u("change",a),b()},v=a=>s(a,e.valueAttribute,s(a,e.optionAttribute)),R=a=>s(a,e.optionAttribute,s(a,e.valueAttribute)),V=a=>e.modelValue===v(a),$=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:v(a),label:R(a),selected:V(a)},k=w(()=>e.options.map(a=>$(a)));return{ui:m,uiRadio:p,attrs:g,normalizedOptions:k,onUpdate:y}}});function Y(e,u,m,g,p,b){const n=O;return r(),d("div",{class:A(e.ui.wrapper)},[F("fieldset",c(e.attrs,{class:e.ui.fieldset}),[e.legend||e.$slots.legend?(r(),d("legend",{key:0,class:A(e.ui.legend)},[i(e.$slots,"legend",{},()=>[N(_(e.legend),1)])],2)):D("",!0),(r(!0),d(T,null,q(e.normalizedOptions,t=>(r(),E(n,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,help:t.help,disabled:t.disabled||e.disabled,ui:e.uiRadio,onChange:y=>e.onUpdate(t.value)},{label:C(()=>[i(e.$slots,"label",c({ref_for:!0},{option:t,selected:t.selected}))]),help:C(()=>[i(e.$slots,"help",c({ref_for:!0},{option:t,selected:t.selected}))]),_:2},1032,["label","model-value","value","help","disabled","ui","onChange"]))),128))],16)],2)}const K=z(P,[["render",Y]]);export{K as default};
