(()=>{"use strict";var e,r,t,n,o,a,u,i,l,f,c,s,p,d,h={665:(e,r,t)=>{t.e(496).then(t.bind(t,3496)).catch(e=>console.error(e))}},g={};function v(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={exports:{}};return h[e](t,t.exports,v),t.exports}v.m=h,v.c=g,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce((r,t)=>(v.f[t](e,r),r),[])),v.u=e=>e+"."+{116:"347548cf3f783ac759cb",496:"8ec65e1a22bd880923ff",530:"326039c5f54386ae1c18",619:"b2a392ecc8ca06c03f19",699:"f795f11617fe3ea08701"}[e]+".js",v.miniCssF=e=>{},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="mfe1:",v.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var u,i;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var c=l[f];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+o){u=c;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,v.nc&&u.setAttribute("nonce",v.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var s=(r,n)=>{u.onerror=u.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(e=>e(n)),r)return r(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),i&&document.head.appendChild(u)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{v.S={};var e={},r={};v.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];v.o(v.S,t)||(v.S[t]={});var a=v.S[t],u="mfe1",i=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(o[r]={get:t,from:u,eager:!!n})},l=[];switch(t){case"default":i("@angular/common","12.0.0",()=>v.e(530).then(()=>()=>v(1116))),i("@angular/core","12.0.0",()=>v.e(619).then(()=>()=>v(8619))),i("@angular/router","12.0.0",()=>v.e(699).then(()=>()=>v(8699)))}return e[t]=l.length?Promise.all(l).then(()=>e[t]=1):1}}})(),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var r=v.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),t=e=>{var r=e=>e.split(".").map(e=>+e==e?+e:e),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var u=r[n],i=(typeof u)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=u)return o<u;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var u=[];for(a=1;a<e.length;a++){var i=e[a];u.push(0===i?"not("+l()+")":1===i?"("+l()+" || "+l()+")":2===i?u.pop()+" "+u.pop():o(i))}return l();function l(){return u.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var u=0,i=1,l=!0;;i++,u++){var f,c,s=i<e.length?(typeof e[i])[0]:"";if(u>=r.length||"o"==(c=(typeof(f=r[u]))[0]))return!l||("u"==s?i>n&&!o:""==s!=o);if("u"==c){if(!l||"u"!=s)return!1}else if(l)if(s==c)if(i<=n){if(f!=e[i])return!1}else{if(o?f>e[i]:f<e[i])return!1;f!=e[i]&&(l=!1)}else if("s"!=s&&"n"!=s){if(o||i<=n)return!1;l=!1,i--}else{if(i<=n||c<s!=o)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,i--)}}var p=[],d=p.pop.bind(p);for(u=1;u<e.length;u++){var h=e[u];p.push(1==h?d()|d():2==h?d()&d():h?a(h,r):!d())}return!!d()},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e,0)},i=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",l=(e,r,t,n)=>{var o=u(e,t);if(!a(n,o))throw new Error(i(t,o,n));return f(e[t][o])},f=e=>(e.loaded=1,e.get()),c=(e=>function(r,t,n,o){var a=v.I(r);return a&&a.then?a.then(e.bind(e,r,v.S[r],t,n,o)):e(0,v.S[r],t,n,o)})((e,r,t,n,o)=>r&&v.o(r,t)?l(r,0,t,n):o()),s={},p={2066:()=>c("default","@angular/core",[2,12,0,0],()=>v.e(619).then(()=>()=>v(8619))),379:()=>c("default","@angular/router",[2,12,0,0],()=>v.e(699).then(()=>()=>v(8699))),2562:()=>c("default","@angular/common",[2,12,0,0],()=>v.e(530).then(()=>()=>v(1116))),508:()=>c("default","@angular/common",[4,12,0,0],()=>v.e(116).then(()=>()=>v(1116))),7443:()=>c("default","@angular/core",[4,12,0,0],()=>v.e(619).then(()=>()=>v(8619)))},d={496:[2066,379,2562,508,7443],530:[7443],699:[508,7443]},v.f.consumes=(e,r)=>{v.o(d,e)&&d[e].forEach(e=>{if(v.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,v.m[e]=t=>{delete v.c[e],t.exports=r()}},n=r=>{delete s[e],v.m[e]=t=>{throw delete v.c[e],r}};try{var o=p[e]();o.then?r.push(s[e]=o.then(t).catch(n)):t(o)}catch(a){n(a)}})},(()=>{var e={179:0};v.f.j=(r,t)=>{var n=v.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((t,o)=>n=e[r]=[t,o]);t.push(n[2]=o);var a=v.p+v.u(r),u=new Error;v.l(a,t=>{if(v.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}},"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,u,i]=t,l=0;for(n in u)v.o(u,n)&&(v.m[n]=u[n]);for(i&&i(v),r&&r(t);l<a.length;l++)v.o(e,o=a[l])&&e[o]&&e[o][0](),e[a[l]]=0},t=self.webpackChunkmfe1=self.webpackChunkmfe1||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),v(665)})();