import{_ as m,r as i,a as p,q as d,c as u,d as v,t as _,k as f,s as g,o as w,b as y,g as B,v as b,e as c,u as h}from"./index-B9PLwloD.js";import{B as I}from"./blog-DzJxv8-h.js";import"./request-BHdVL5DQ.js";const x={key:0,class:"loading flex-center fwb"},L={__name:"ayLoading",props:{visible:{type:Boolean,default:!1},interval:{type:Number,default:500}},setup(r){const s=r,o=i("Please wait");let e=0,l=null;const a=()=>{l=setInterval(()=>{e=(e+1)%6,o.value="Please wait"+".".repeat(e)},s.interval)},t=()=>{clearInterval(l)};return p(()=>{t()}),d(()=>s.visible,n=>{n?a():t()},{immediate:!0}),(n,D)=>r.visible?(u(),v("div",x,_(o.value),1)):f("",!0)}},k=m(L,[["__scopeId","data-v-04401344"]]),P={class:"ma w-full"},V="preview-only",C={__name:"detail",setup(r){const s=g(),o=i(""),e=i(!1),l=async a=>{const t=await I.getBlogById(a);if(console.log(t),!t.data){h.navTo({name:"BlogDefault"});return}o.value=t.data.content,e.value=!1};return d(()=>s.params.id,(a,t)=>{e.value=!0,l(a)},{deep:!0,immediate:!0}),w(()=>{}),(a,t)=>{const n=y("MdPreview");return u(),v("div",P,[B(c(n,{editorId:V,modelValue:o.value},null,8,["modelValue"]),[[b,!e.value]]),c(k,{visible:e.value,interval:300},null,8,["visible"])])}}};export{C as default};
