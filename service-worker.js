if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const n=e=>a(e,r),f={module:{uri:r},exports:s,require:n};i[r]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-b4970c4e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/11/20/ES6-ES12介紹/4_4.jpg",revision:"c92da81ecd84a5d74a73cb6b52358726"},{url:"2021/11/20/ES6-ES12介紹/4_5.jpg",revision:"24cd046ed06291fd4ec31debb0ba2978"},{url:"2021/11/20/ES6-ES12介紹/index.html",revision:"f865fb9f51c7420a6c8d5e1df662387e"},{url:"2021/11/20/ES6-ES12介紹/top.jpg",revision:"653f96196d9694679103ae9172c2d4d1"},{url:"2021/12/07/Vue3使用筆記/index.html",revision:"724ad771605b108c89da251f55f4219e"},{url:"2021/12/07/Vue3使用筆記/top.jpg",revision:"bbf1b6581a0bcd221718d96ea2490c30"},{url:"2021/12/09/Python學習一/index.html",revision:"2d37bdb35a524213ba043161d3e546b5"},{url:"2021/12/09/Python學習一/top.jpg",revision:"56ac632f1e7b0cc6637d52d7c21a7be9"},{url:"2021/12/13/PHP常用函式/index.html",revision:"c1e047ca028fd8708b620776a1676ebe"},{url:"2021/12/13/PHP常用函式/top.jpg",revision:"022f9814c5659169d2228aa5cabfb882"},{url:"2022/02/03/前後端更新/Bopay_payment_error.jpg",revision:"b8b1a20aad5e0aa90fbbc1a830474ec9"},{url:"2022/02/03/前後端更新/index.html",revision:"1df3c1a4d67eba5f31f813c93587ef1a"},{url:"2022/02/03/會員問題/index.html",revision:"b57bdf55c75873e28fc4afebaa8b3cfe"},{url:"404.html",revision:"d1f66f3b1f12dc5f1b778b2e313e63bc"},{url:"all_image/avatar.jpg",revision:"1b7e9fe162c69a498a8c44bc821651c6"},{url:"all_image/home.jpg",revision:"d005cb1bc93b4e6064de51ccac185c02"},{url:"all_image/sub_page_top_img.jpg",revision:"d01a4d3650b75fa65258628aaf33090c"},{url:"archives/2021/11/index.html",revision:"8f1b2cffa1607d4246ca33ecc90ff820"},{url:"archives/2021/12/index.html",revision:"8166994952a6e91dca5ae5ba74ed67af"},{url:"archives/2021/index.html",revision:"65fa7abc363142c45b2773641cbe3942"},{url:"archives/2022/02/index.html",revision:"e4c0b5292108e637b776a636701de972"},{url:"archives/2022/index.html",revision:"8d0a195807598fdd089974521c3f6433"},{url:"archives/index.html",revision:"6f1974d9002cf1dcbd1ff26d1f0b805e"},{url:"categories/index.html",revision:"7cf7a5f4442bd788ca291fa63a120077"},{url:"categories/javascript/index.html",revision:"4666bc7a8883d60b26e04d93e852454b"},{url:"categories/php/index.html",revision:"264fc3c229c20295f738e91c37cd69c6"},{url:"categories/python/index.html",revision:"d534d5218bd9018ef52ddb6ee22153fd"},{url:"categories/vue/index.html",revision:"648fee563c7989d8622b4046a6039ba0"},{url:"categories/工作/index.html",revision:"8de00db4485bbf248618673e62462926"},{url:"css/index.css",revision:"42b4a651aa11cbf6ad249f39503f2eba"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"googleaf03e35a9bfdbe11.html",revision:"84976d0bf7f0ae4d9600d298c15cfcdf"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"5375519aa061f11b2ef27f5aca365f1b"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"93169d082c5713e0b66ef865b2b7f309"},{url:"tags/Bochat/index.html",revision:"89a15a858939b5e30520cef938ee46da"},{url:"tags/Bopay-payment/index.html",revision:"2063e752f320e8262106e500f87dcefa"},{url:"tags/ES6/index.html",revision:"97bf0d8e06c45c9968d1b0d274c2016f"},{url:"tags/index.html",revision:"60d72e9746b458d81a869acee56f5eb1"},{url:"tags/javascript/index.html",revision:"dc018e0acd19c4a015d93e8feaf9e9ff"},{url:"tags/Jenkins/index.html",revision:"514b1578f18e3fa0e43698413d63a277"},{url:"tags/php/index.html",revision:"2848033a329bb97cc2180cfda563c3d4"},{url:"tags/python/index.html",revision:"e5e7396840a07c5eba6f568b7625a57f"},{url:"tags/vue-cli/index.html",revision:"7d20ba8374044e92c0f13b94528d66df"},{url:"tags/vue-js/index.html",revision:"89add878c1d59c163c740a00581c8682"},{url:"tags/vue3/index.html",revision:"1d685e61034313b4c13d3963b1a3f3a6"},{url:"tags/web/index.html",revision:"e8399fbb9dc9c3f8f8d2a42a83c9f568"},{url:"tags/前端/index.html",revision:"c5960472f39a6a7ee226ca8acc00d4b4"},{url:"tags/後端/index.html",revision:"c9d9ade35f042e304351568458c359fd"},{url:"tags/會員問題處理/index.html",revision:"ce3d47939dcac20d8ca7cdae4878b62f"}],{}),e.registerRoute(/^https:\/\/nengyi1024\.github\.io\/HexoBlog\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
