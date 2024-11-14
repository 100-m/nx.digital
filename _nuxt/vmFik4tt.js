import{ay as Y,bw as se,az as p,bz as re,_ as de,f as ce,aY as ge,aZ as be,a_ as pe,a$ as ve,b0 as fe,aB as K,l as Z,aC as R,aD as D,p as i,b5 as ye,b6 as me,b7 as he,b8 as Ie,r as Me,aJ as Ce,aK as m,T as Ae,b9 as Se,ba as ke,D as Oe,aE as ze,aF as Be,H as h,o as t,h as I,w as M,a as C,s as u,b as f,A as E,c as d,Y as A,k as b,aI as qe,F as we,q as He,n as Ve,t as J,d as P}from"./BJUyEi7U.js";const r=Y(p.ui.strategy,p.ui.input,se),G=Y(p.ui.strategy,p.ui.inputMenu,re),Ne=ce({components:{HCombobox:ge,HComboboxButton:be,HComboboxOptions:pe,HComboboxOption:ve,HComboboxInput:fe,UIcon:K,UAvatar:Z},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>r.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>G.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>G.default.selectedIcon},disabled:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(r.size).includes(e)}},color:{type:String,default:()=>r.default.color,validator(e){return[...p.ui.colors,...Object.keys(r.color)].includes(e)}},variant:{type:String,default:()=>r.default.variant,validator(e){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(s=>Object.keys(s))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},search:{type:Function,default:void 0},searchAttributes:{type:Array,default:null},searchLazy:{type:Boolean,default:!1},debounce:{type:Number,default:200},popper:{type:Object,default:()=>({})},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:s,slots:q}){const{ui:a,attrs:W}=R("input",D(e,"ui"),r,D(e,"class")),{ui:w}=R("inputMenu",D(e,"uiMenu"),G),S=i(()=>ye({},e.popper,w.value.popper)),[v,k]=me(S.value),{size:H,rounded:V}=he({ui:a,props:e}),{emitFormBlur:N,emitFormChange:$,inputId:j,color:n,size:F,name:y}=Ie(e,r),o=i(()=>H.value??F.value),O=Me(""),c=i({get(){return e.query??O.value},set(l){O.value=l,s("update:query",l)}}),X=i(()=>{if(e.modelValue)if(e.valueAttribute){const l=L.value.find(g=>g[e.valueAttribute]===e.modelValue);return l?l[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]}),_=i(()=>{var g,B;const l=((B=(g=a.value.color)==null?void 0:g[n.value])==null?void 0:B[e.variant])||a.value.variant[e.variant];return Ce(m(a.value.base,a.value.form,V.value,a.value.placeholder,a.value.size[o.value],e.padded?a.value.padding[o.value]:"p-0",l==null?void 0:l.replaceAll("{color}",n.value),(z.value||q.leading)&&a.value.leading.padding[o.value],(Q.value||q.trailing)&&a.value.trailing.padding[o.value]),e.inputClass)}),z=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),Q=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),x=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),ee=i(()=>e.loading&&!z.value?e.loadingIcon:e.trailingIcon||e.icon),ae=i(()=>m(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[o.value])),ne=i(()=>m(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&a.value.icon.loading)),le=i(()=>m(a.value.icon.trailing.wrapper,a.value.icon.trailing.padding[o.value])),ue=i(()=>m(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&!z.value&&a.value.icon.loading)),U=e.search&&typeof e.search=="function"?Ae(e.search,e.debounce):void 0,L=Se(async()=>U?await U(c.value):e.options||[],[],{lazy:e.searchLazy}),ie=i(()=>!c.value||U?L.value:L.value.filter(l=>{var g;return((g=e.searchAttributes)!=null&&g.length?e.searchAttributes:[e.optionAttribute]).some(B=>{if(["string","number"].includes(typeof l))return String(l).search(new RegExp(c.value,"i"))!==-1;const T=ke(l,B);return T!=null&&String(T).search(new RegExp(c.value,"i"))!==-1})}));Oe(k,l=>{l?s("open"):(s("close"),N())});function te(l){c.value="",s("update:modelValue",l),s("change",l),$()}function oe(l){c.value=l.target.value}return ze(()=>Be()),{ui:a,uiMenu:w,attrs:W,name:y,inputId:j,popper:S,trigger:v,container:k,label:X,isLeading:z,isTrailing:Q,inputClass:_,leadingIconName:x,leadingIconClass:ne,leadingWrapperIconClass:ae,trailingIconName:ee,trailingIconClass:ue,trailingWrapperIconClass:le,filteredOptions:ie,query:c,onUpdate:te,onQueryChange:oe}}}),$e={class:"truncate"};function je(e,s,q,a,W,w){const S=h("HComboboxInput"),v=K,k=h("HComboboxButton"),H=Z,V=h("HComboboxOption"),N=h("HComboboxOptions"),$=h("HCombobox");return t(),I($,{by:e.by,name:e.name,"model-value":e.modelValue,disabled:e.disabled,nullable:e.nullable,as:"div",class:u(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:M(({open:j})=>[C("div",{class:u(e.uiMenu.trigger)},[f(S,E({id:e.inputId,name:e.name,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass,autocomplete:"off"},e.attrs,{"display-value":()=>e.query?e.query:e.label,onChange:e.onQueryChange}),null,16,["id","name","required","placeholder","disabled","class","display-value","onChange"]),e.isLeading&&e.leadingIconName||e.$slots.leading?(t(),d("span",{key:0,class:u(e.leadingWrapperIconClass)},[A(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[f(v,{name:e.leadingIconName,class:u(e.leadingIconClass)},null,8,["name","class"])])],2)):b("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(t(),I(k,{key:1,ref:"trigger",class:u(e.trailingWrapperIconClass)},{default:M(()=>[A(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[f(v,{name:e.trailingIconName,class:u(e.trailingIconClass)},null,8,["name","class"])])]),_:3},8,["class"])):b("",!0)],2),j?(t(),d("div",{key:0,ref:"container",class:u([e.uiMenu.container,e.uiMenu.width])},[f(qe,E({appear:""},e.uiMenu.transition),{default:M(()=>[C("div",null,[e.popper.arrow?(t(),d("div",{key:0,"data-popper-arrow":"",class:u(Object.values(e.uiMenu.arrow))},null,2)):b("",!0),f(N,{static:"",class:u([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:M(()=>[(t(!0),d(we,null,He(e.filteredOptions,(n,F)=>(t(),I(V,{key:F,as:"template",value:e.valueAttribute?n[e.valueAttribute]:n,disabled:n.disabled},{default:M(({active:y,selected:o,disabled:O})=>[C("li",{class:u([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,y?e.uiMenu.option.active:e.uiMenu.option.inactive,o&&e.uiMenu.option.selected,O&&e.uiMenu.option.disabled])},[C("div",{class:u(e.uiMenu.option.container)},[A(e.$slots,"option",{option:n,active:y,selected:o},()=>[n.icon?(t(),I(v,{key:0,name:n.icon,class:u([e.uiMenu.option.icon.base,y?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,n.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):n.avatar?(t(),I(H,E({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...n.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):n.chip?(t(),d("span",{key:2,class:u(e.uiMenu.option.chip.base),style:Ve({background:`#${n.chip}`})},null,6)):b("",!0),C("span",$e,J(["string","number"].includes(typeof n)?n:n[e.optionAttribute]),1)])],2),o?(t(),d("span",{key:0,class:u([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[f(v,{name:e.selectedIcon,class:u(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):b("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.query&&!e.filteredOptions.length?(t(),d("p",{key:0,class:u(e.uiMenu.option.empty)},[A(e.$slots,"option-empty",{query:e.query},()=>[P(' No results for "'+J(e.query)+'". ',1)])],2)):e.filteredOptions.length?b("",!0):(t(),d("p",{key:1,class:u(e.uiMenu.empty)},[A(e.$slots,"empty",{query:e.query},()=>[s[0]||(s[0]=P(" No options. "))])],2))]),_:3},8,["class"])])]),_:3},16)],2)):b("",!0)]),_:3},8,["by","name","model-value","disabled","nullable","class","onUpdate:modelValue"])}const Ue=de(Ne,[["render",je]]);export{Ue as default};
