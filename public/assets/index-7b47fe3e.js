import{d as p,a as i,o as f,A as r,R as u,e as y,c as E,j as h}from"./index-3832c784.js";import{f as k,_ as x}from"./flv-e249b53e.js";const j={class:"container-fluid"},B=h('<h1 class="text-center" data-v-3198e67d>监控</h1><div class="row bg-secondary" id="jk" data-v-3198e67d><div class="col-3 text-center text-light" id="jk1" data-v-3198e67d>监控1</div><div class="col-3 text-center text-light" id="jk2" data-v-3198e67d>监控2</div><div class="col-3 text-center text-light" id="jk3" data-v-3198e67d>监控3</div><div class="col-3 text-center text-light" id="jk4" data-v-3198e67d>监控4</div></div>',2),I=[B],V=p({__name:"index",setup(b){const v=i(!0),m=i(!0),_=i(!0),g=i(!0),o=(s,e)=>{const t=k.createPlayer({type:"flv",url:s,isLive:!0});return t.attachMediaElement(e),t.load(),t.play(),()=>{t.pause(),t.unload(),t.detachMediaElement()}};function l(s){const e=document.createElement("video");e.controls=!0,e.id=s;const t=document.getElementById("jk");t==null||t.appendChild(e)}function n(s){const e=document.getElementById(s);console.log(e),e==null||e.remove()}return f(()=>{var s=document.getElementById("jk1"),e=document.getElementById("jk2"),t=document.getElementById("jk3"),d=document.getElementById("jk4");s==null||s.addEventListener("click",()=>{let a=()=>{};if(v.value){r(s,"bg-success"),v.value=!1,l("camera1");let c=document.getElementById("camera1");a=o("ws://localhost:8080/ws",c)}else u(s,"bg-success"),v.value=!0,a(),n("camera1"),console.log("执行移除")}),e==null||e.addEventListener("click",()=>{let a=()=>{};if(m.value){r(e,"bg-success"),m.value=!1,l("camera2");let c=document.getElementById("camera2");a=o("ws://localhost:8080/ws2",c)}else u(e,"bg-success"),m.value=!0,a(),n("camera2")}),t==null||t.addEventListener("click",()=>{let a=()=>{};if(_.value){r(t,"bg-success"),_.value=!1,l("camera3");let c=document.getElementById("camera3");a=o("ws://localhost:8080/ws3",c)}else u(t,"bg-success"),_.value=!0,a(),n("camera3")}),d==null||d.addEventListener("click",()=>{let a=()=>{};if(g.value){r(d,"bg-success"),g.value=!1,l("camera4");let c=document.getElementById("camera4");a=o("ws://localhost:8080/ws4",c)}else u(d,"bg-success"),g.value=!0,a(),n("camera4")})}),(s,e)=>(E(),y("div",j,I))}});const S=x(V,[["__scopeId","data-v-3198e67d"]]);export{S as default};