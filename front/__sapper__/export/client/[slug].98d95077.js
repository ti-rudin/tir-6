import{S as t,i as s,s as a,o as e,e as n,m as o,K as i,d as r,r as c,c as l,b as h,q as u,f as d,h as f,j as m,y as p,n as v}from"./client.0adb7cab.js";function x(t){let s,a,x,b,j,g,w=t[0].title+"",y=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),x=n("h1"),b=o(w),j=e(),g=n("div"),this.h()},l(t){i('[data-svelte="svelte-iu3vwn"]',document.head).forEach(r),a=c(t),x=l(t,"H1",{class:!0});var s=h(x);b=u(s,w),s.forEach(r),j=c(t),g=l(t,"DIV",{class:!0}),h(g).forEach(r),this.h()},h(){d(x,"class","text-2xl"),d(g,"class","content")},m(t,s){f(t,a,s),f(t,x,s),m(x,b),f(t,j,s),f(t,g,s),g.innerHTML=y},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&w!==(w=t[0].title+"")&&p(b,w),1&a&&y!==(y=t[0].html+"")&&(g.innerHTML=y)},i:v,o:v,d(t){t&&r(a),t&&r(x),t&&r(j),t&&r(g)}}}async function b({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,x,a,{post:0})}}export{b as preload};
