// NHSECCS app - minimal service worker (makes the app installable)
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){if(e.request.mode==="navigate"){e.respondWith(fetch(e.request))}});
