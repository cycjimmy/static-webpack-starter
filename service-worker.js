if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let o={};const t=e=>n(e,l),c={module:{uri:l},exports:o,require:t};i[l]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-099bf95e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./favicon.ico",revision:"91cc61c2c328a3f972a956bbfcb70e23"},{url:"./index.html",revision:"801fcf83adec45ff27d400e550f1e664"},{url:"./scripts/load.bundle.ac55abce.min.js",revision:null},{url:"./scripts/main.bundle.fd8af0b1.min.js",revision:null},{url:"./scripts/runtime.bundle.79097763.min.js",revision:null},{url:"./style/load.ac55abce.min.css",revision:null}],{})}));
