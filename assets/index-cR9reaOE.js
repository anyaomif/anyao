import{_ as v,r as c,b as l,c as t,d as o,f as e,k as f,F as x,j as y,n as i,e as r,w as g,B as k,t as w,p as C,m as A,z as S}from"./index-B9PLwloD.js";const d=s=>(C("data-v-ff960fc9"),s=s(),A(),s),b={class:"layout"},B={class:"flex aic jcc logo"},I=d(()=>e("img",{src:S,alt:"anyao",style:{width:"50px",height:"50px"}},null,-1)),N={key:0,style:{"white-space":"nowrap"}},V={class:"main-content"},j=d(()=>e("span",null,"洋洋，今天进步了吗",-1)),z={__name:"index",setup(s){const a=c(!1),_=c([{name:"首页",route:"/ayaoAdmin/index/home"},{name:"文章管理",route:"/ayaoAdmin/index/article"},{name:"分类管理",route:"/ayaoAdmin/index/category"}]),u=()=>{a.value=!a.value};return(F,L)=>{const p=l("router-link"),m=l("router-view");return t(),o("div",b,[e("aside",{class:i(["sidebar",{collapsed:a.value}])},[e("div",B,[I,a.value?f("",!0):(t(),o("span",N,"AnYao's Admin"))]),e("ul",null,[(t(!0),o(x,null,y(_.value,(n,h)=>(t(),o("li",{key:h},[r(p,{to:n.route,class:"menu-item","active-class":"active"},{default:g(()=>[k(w(n.name),1)]),_:2},1032,["to"])]))),128))])],2),e("div",V,[e("header",{class:"header"},[j,e("div",{onClick:u,class:"toggle-btn"},"菜单")]),e("main",{class:i(["content",{collapsed:a.value}])},[r(m)],2)])])}}},E=v(z,[["__scopeId","data-v-ff960fc9"]]);export{E as default};
