import{S as t,i as s,s as a,m as e,e as n,l as o,L as i,f as r,q as c,c as l,b as u,p as h,g as p,j as f,k as m,x as d,n as x}from"./client.a2ba287e.js";function g(t){let s,a,g,j,v,b,w=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(w),v=e(),b=n("div"),this.h()},l(t){i("svelte-iu3vwn",document.head).forEach(r),a=c(t),g=l(t,"H1",{class:!0});var s=u(g);j=h(s,w),s.forEach(r),v=c(t),b=l(t,"DIV",{class:!0}),u(b).forEach(r),this.h()},h(){p(g,"class","text-2xl"),p(b,"class","content")},m(t,s){f(t,a,s),f(t,g,s),m(g,j),f(t,v,s),f(t,b,s),b.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&w!==(w=t[0].title+"")&&d(j,w),1&a&&E!==(E=t[0].html+"")&&(b.innerHTML=E)},i:x,o:x,d(t){t&&r(a),t&&r(g),t&&r(v),t&&r(b)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function v(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,v,g,a,{post:0})}}export{j as preload};