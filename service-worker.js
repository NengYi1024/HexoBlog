if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const l=e=>c(e,d),f={module:{uri:d},exports:s,require:l};i[d]=Promise.all(a.map((e=>f[e]||l(e)))).then((e=>(r(...e),s)))}}define(["./workbox-b4970c4e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/11/20/ES6-ES12介紹/index.html",revision:"a52dd1a2579befcd47ea105978c1db13"},{url:"404.html",revision:"609ce58b1fcf5c6220aecf0138d78ede"},{url:"all_image/2021_11_20/2021_11_20_4_4.jpg",revision:"c92da81ecd84a5d74a73cb6b52358726"},{url:"all_image/2021_11_20/2021_11_20_4_5.jpg",revision:"24cd046ed06291fd4ec31debb0ba2978"},{url:"all_image/2021_11_20/2021_11_20.jpg",revision:"4ae0093c5ac238d5f4f06796e9b3b2bd"},{url:"all_image/avatar.jpg",revision:"1b7e9fe162c69a498a8c44bc821651c6"},{url:"all_image/home.jpg",revision:"d005cb1bc93b4e6064de51ccac185c02"},{url:"all_image/sub_page_top_img.jpg",revision:"d01a4d3650b75fa65258628aaf33090c"},{url:"archives/2021/11/index.html",revision:"990c51410fe63ec910f1a395557c34a0"},{url:"archives/2021/index.html",revision:"666103f610b91d0491275b255d5f29bc"},{url:"archives/index.html",revision:"f70517e786e696f0fbdea7383b380d69"},{url:"categories/index.html",revision:"1a24b1318b5f3cfb35319225bf6cc071"},{url:"categories/javascript/index.html",revision:"5424c8b5ddcc20c2d7c1960f4b079793"},{url:"css/index.css",revision:"42b4a651aa11cbf6ad249f39503f2eba"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"0c68adf1cd2b4953fdffa3c3596d197f"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"8f23e35c54a384999f7f952f91390b14"},{url:"tags/ES6/index.html",revision:"7effae746825bee8e44d26c4063469e4"},{url:"tags/index.html",revision:"46cc5032f927e82b399ad02dc779780f"},{url:"tags/javascript/index.html",revision:"3b64b8e21b26b1169a4a363dcd3f1fa9"},{url:"tags/web/index.html",revision:"c1f70cfaea3dedc42ae73389248cdbdd"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
