var C=Object.defineProperty;var W=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var S=(e,t,n)=>(W(e,typeof t!="symbol"?t+"":t,n),n);import{r,a as d,o as b,b as z,d as I,c as E,e as k,f as y,R as $,A as T,g as G,t as X,p as Y,h as A,i as N}from"./index-3832c784.js";import{C as P}from"./chat-d1ce3963.js";import{_ as w,f as D}from"./flv-e249b53e.js";const x=r({x:0,y:0}),g=d(!1);function H(){const e=d(null),t=d(null),n=d(0),f=r({x:0,y:0}),l=r({x:0,y:0}),c=r({x:0,y:0}),s=r({x:0,y:0}),i=d(0),u=r({force:0,x:0,y:0});class v{constructor(a,_){S(this,"x");S(this,"y");this.x=a,this.y=_}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){const a=this.length();return a===0?(this.x=0,this.y=0):(this.x/=a,this.y/=a),this}}function m(){e.value&&(i.value=e.value.offsetWidth/2,e.value.style.height=`${e.value.offsetWidth}px`,n.value=e.value.offsetWidth,f.x=window.innerWidth/2,f.y=window.innerHeight-(40+e.value.offsetHeight/2))}function p(){e.value&&(e.value.addEventListener("touchmove",M,!1),e.value.addEventListener("touchstart",B,!1),e.value.addEventListener("touchend",J,!1))}function h(o){let a=o;return a<0,Math.round(a*(255/i.value))}function M(o){o.stopPropagation(),o.preventDefault(),t.value&&(l.x=o.touches[0].clientX,l.y=o.touches[0].clientY,s.x=l.x-f.x,s.y=f.y-l.y,R())}function R(){let o=0,a=0,_=new v(s.x,s.y),O=_.length();u.force=O/(n.value/2),O>n.value/2?(_.normalize(),u.x=_.x,u.y=_.y,o=n.value/2*u.x,a=n.value/2*u.y):(u.x=s.x/(n.value/2),u.y=s.y/(n.value/2),o=s.x,a=s.y),x.x=h(o),x.y=h(a),V(o,-a)}function V(o,a){t.value&&(t.value.style.left=`${n.value*.3+o}px`,t.value.style.top=`${n.value*.3+a}px`)}function B(o){t.value&&(c.x=o.touches[0].pageX,c.y=o.touches[0].pageY,g.value=!0)}function J(o){t.value&&e.value&&(t.value.style.left=e.value.offsetWidth*.3+"px",t.value.style.top=e.value.offsetWidth*.3+"px",x.x=0,x.y=0,g.value=!1)}return b(()=>{m(),p()}),z(()=>{g.value=!1}),{virtual:e,rocker:t}}function j(){return x}function q(){return g.value}const U=I({__name:"yaogan",setup(e){const{virtual:t,rocker:n}=H(),f=r({x:0,y:1}),l=r({x:0,y:-1}),c=r({x:-1,y:0}),s=r({x:1,y:0}),i=d(0);return b(()=>{function u(){const v={type:"move",msg:JSON.stringify({x:0,y:0})},m=q(),p=j();if(m)p.x>150?v.msg=JSON.stringify(s):p.x<-150?v.msg=JSON.stringify(c):p.y>150?v.msg=JSON.stringify(f):p.y<-150&&(v.msg=JSON.stringify(l)),P(v),console.log("发送",JSON.stringify(v.msg)),i.value=0;else if(i.value<10){const h={type:"move",msg:"not move"};P(h),console.log("发送",h),i.value++}}setInterval(u,100)}),(u,v)=>(E(),k("div",null,[y("div",{class:"JoyStick",ref_key:"virtual",ref:t},[y("span",{class:"Rocker",ref_key:"rocker",ref:n},null,512)],512)]))}});const F=w(U,[["__scopeId","data-v-71114396"]]),L=e=>(Y("data-v-f61c3bf3"),e=e(),A(),e),K={class:"badge",id:"peer"},Q=L(()=>y("button",{type:"button",class:"btn btn-primary",id:"btn"},"开启图传",-1)),Z=L(()=>y("div",{class:"live mt-5"},[y("div",{id:"Ldiv",class:"yin"},[y("video",{autoplay:"",controls:"",id:"live"})])],-1)),ee=I({__name:"index",setup(e){const t=d(""),n=d(!0),f=(l,c)=>{const s=D.createPlayer({type:"flv",url:l,isLive:!0},{enableStashBuffer:!1});return s.attachMediaElement(c),s.load(),s.play(),()=>{s.pause(),s.unload(),s.detachMediaElement()}};return b(()=>{var l=document.getElementById("live");let c=()=>{};var s=document.getElementById("btn"),i=document.getElementById("Ldiv");s.addEventListener("click",function(){console.log("点击按钮"),c=f("ws://localhost:8080/ws2",l),n.value?(n.value=!1,console.log("移除隐藏"),l.play(),$(i,"yin")):(n.value=!0,T(i,"yin"),console.log("添加隐藏"),l.pause(),c())})}),(l,c)=>(E(),k("div",null,[y("h3",null,[G("图传状态："),y("nav",K,X(t.value),1)]),Q,Z]))}});const te=w(ee,[["__scopeId","data-v-f61c3bf3"]]),le=I({__name:"index",setup(e){return(t,n)=>(E(),k("div",null,[N(te),N(F)]))}});export{le as default};
