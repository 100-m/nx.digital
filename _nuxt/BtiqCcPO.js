import{Y as C,G as k,S as T,h as B}from"./B-wdTbJr.js";import{_ as A,ay as D,az as m,f as F,aC as H,aD as h,p,aE as V,aF as z,H as n,o as y,h as b,w as r,b as f,A as c,a as S,s as w,k as $,Y as L}from"./BJUyEi7U.js";const O={wrapper:"fixed inset-0 flex z-50",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},base:"relative flex-1 flex flex-col w-full focus:outline-none",background:"bg-white dark:bg-gray-900",ring:"",rounded:"",padding:"",shadow:"shadow-xl",width:"w-screen max-w-md",height:"h-screen max-h-96",translate:{base:"translate-x-0",left:"-translate-x-full rtl:translate-x-full",right:"translate-x-full rtl:-translate-x-full",top:"-translate-y-full",bottom:"translate-y-full"},transition:{enter:"transform transition ease-in-out duration-300",leave:"transform transition ease-in-out duration-200"}},P=D(m.ui.strategy,m.ui.slideover,O),R=F({components:{HDialog:C,HDialogPanel:k,TransitionRoot:T,TransitionChild:B},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right","top","bottom"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:s}){const{ui:a,attrs:v}=H("slideover",h(e,"ui"),P,h(e,"class")),i=p({get(){return e.modelValue},set(t){s("update:modelValue",t)}}),g=p(()=>{if(!e.transition)return{};let t,o;switch(e.side){case"left":t=a.value.translate.left,o=a.value.translate.left;break;case"right":t=a.value.translate.right,o=a.value.translate.right;break;case"top":t=a.value.translate.top,o=a.value.translate.top;break;case"bottom":t=a.value.translate.bottom,o=a.value.translate.bottom;break;default:t=a.value.translate.right,o=a.value.translate.right}return{...a.value.transition,enterFrom:t,enterTo:a.value.translate.base,leaveFrom:a.value.translate.base,leaveTo:o}}),l=p(()=>{switch(e.side){case"left":return"horizontal";case"right":return"horizontal";case"top":return"vertical";case"bottom":return"vertical";default:return"right"}});function u(t){if(e.preventClose){s("close-prevented");return}i.value=t,s("close")}const d=()=>{s("after-leave")};return V(()=>z()),{ui:a,attrs:v,isOpen:i,transitionClass:g,sideType:l,onAfterLeave:d,close:u}}});function j(e,s,a,v,i,g){const l=n("TransitionChild"),u=n("HDialogPanel"),d=n("HDialog"),t=n("TransitionRoot");return y(),b(t,{as:"template",appear:e.appear,show:e.isOpen,onAfterLeave:e.onAfterLeave},{default:r(()=>[f(d,c({class:[e.ui.wrapper,{"justify-end":e.side==="right"},{"items-end":e.side==="bottom"}]},e.attrs,{onClose:e.close}),{default:r(()=>[e.overlay?(y(),b(l,c({key:0,as:"template",appear:e.appear},e.ui.overlay.transition,{class:e.ui.overlay.transition.enterFrom}),{default:r(()=>[S("div",{class:w([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear","class"])):$("",!0),f(l,c({as:"template",appear:e.appear},e.transitionClass,{class:e.transitionClass.enterFrom}),{default:r(()=>[f(u,{class:w([e.ui.base,e.sideType==="horizontal"?[e.ui.width,"h-full"]:[e.ui.height,"w-full"],e.ui.background,e.ui.ring,e.ui.rounded,e.ui.padding,e.ui.shadow])},{default:r(()=>[L(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear","class"])]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const G=A(R,[["render",j]]);export{G as default};
