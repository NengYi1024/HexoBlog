if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>d(e,c),l={module:{uri:c},exports:s,require:n};i[c]=Promise.all(a.map((e=>l[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-b4970c4e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/11/20/ES6-ES12介紹/4_4.jpg",revision:"c92da81ecd84a5d74a73cb6b52358726"},{url:"2021/11/20/ES6-ES12介紹/4_5.jpg",revision:"24cd046ed06291fd4ec31debb0ba2978"},{url:"2021/11/20/ES6-ES12介紹/index.html",revision:"32824731c17e43c0318a086dea8214bc"},{url:"2021/11/20/ES6-ES12介紹/top.jpg",revision:"653f96196d9694679103ae9172c2d4d1"},{url:"2021/12/07/Vue3使用筆記/index.html",revision:"6e72e0719964923b3acfebb22093c1e6"},{url:"2021/12/07/Vue3使用筆記/top.jpg",revision:"bbf1b6581a0bcd221718d96ea2490c30"},{url:"2021/12/09/Python學習一/index.html",revision:"09eab7dbf0b8c8e3df9a4736315a0d59"},{url:"2021/12/09/Python學習一/top.jpg",revision:"56ac632f1e7b0cc6637d52d7c21a7be9"},{url:"404.html",revision:"1b6d3ac36a42b29fe18544c1f2fe62d4"},{url:"all_image/avatar.jpg",revision:"1b7e9fe162c69a498a8c44bc821651c6"},{url:"all_image/home.jpg",revision:"d005cb1bc93b4e6064de51ccac185c02"},{url:"all_image/sub_page_top_img.jpg",revision:"d01a4d3650b75fa65258628aaf33090c"},{url:"archives/2021/11/index.html",revision:"73c06696cb55817f9697fcf6bd44652a"},{url:"archives/2021/12/index.html",revision:"ff26a6586538d0dbe11107d4f3d4c6aa"},{url:"archives/2021/index.html",revision:"1146a0bfe7e78b8cdc62136b4b6f43c2"},{url:"archives/index.html",revision:"8048d6de83153bd18144553d091b3903"},{url:"categories/index.html",revision:"2682b62ee8a813ad537d7f92e158337e"},{url:"categories/javascript/index.html",revision:"78f9ca53e304cbaa34da346725ed99ef"},{url:"categories/python/index.html",revision:"ea830d71bcaded1ed13785a4d7f057c2"},{url:"categories/vue/index.html",revision:"df2dcff52379e035b2445ce380651cfa"},{url:"css/index.css",revision:"42b4a651aa11cbf6ad249f39503f2eba"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"googleaf03e35a9bfdbe11.html",revision:"84976d0bf7f0ae4d9600d298c15cfcdf"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"65690f44c6794c19a6d18e43885369fa"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"77a00d61679a8a8ba3321c91156741a9"},{url:"tags/ES6/index.html",revision:"19f626e8c513f5476754dbb7c068496f"},{url:"tags/index.html",revision:"b0627a6d4b0ea70a539f674702bd85e3"},{url:"tags/javascript/index.html",revision:"d17d0b94c79abd446eb68eb2c13b134a"},{url:"tags/python/index.html",revision:"43508b5980bd1fe37da54deaff4c1718"},{url:"tags/vue-cli/index.html",revision:"719b4c3bf71362f8761eeac70f0fb641"},{url:"tags/vue-js/index.html",revision:"9d92df4e5b4f61e02de77c3026f52b4a"},{url:"tags/vue3/index.html",revision:"f5d29900b3a08046dfe7e4aff2288496"},{url:"tags/web/index.html",revision:"ca36bb93f640fad1b087602ef78590bf"},{url:"tags/前端/index.html",revision:"909f945a9e8d76d96054740eb060d96a"}],{}),e.registerRoute(/^https:\/\/nengyi1024\.github\.io\/HexoBlog\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
