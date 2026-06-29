const CACHE_NAME = "kaloclair-v2-1-scan-ia";
const FILES_TO_CACHE = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./maskable-512.png"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))); self.skipWaiting(); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))); self.clients.claim(); });
self.addEventListener("fetch", event => { if (event.request.method !== "GET") return; const url = new URL(event.request.url); if (url.pathname.startsWith("/api/")) return; event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))); });
