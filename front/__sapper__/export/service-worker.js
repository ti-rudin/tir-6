!function(){"use strict";const e=["client/index.cjs.3931196c.js","client/index.cjs.62b81007.js","client/index.618523b7.js","client/botstatuspage.0504d67d.js","client/client.0adb7cab.js","client/instruction.12e885bc.js","client/settings.465d0e42.js","client/TextField.5e603177.js","client/about.785688b3.js","client/index.99ebda14.js","client/[slug].98d95077.js","client/newbot.608753c4.js","client/index.esm.5c8bc2f6.js"].concat(["service-worker-index.html","favicon.png","global.css","index.css","logo-192.png","logo-512.png","logo.png","logo.svg","manifest.json","tailwind.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1601137691714").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1601137691714"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1601137691714").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();