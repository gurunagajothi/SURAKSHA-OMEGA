const CACHE_NAME = "suraksha-cache-v1";

const urlsToCache = [
  "/SURAKSHA-OMEGA/",
  "/SURAKSHA-OMEGA/index.html",
  "/SURAKSHA-OMEGA/sos.html",
  "/SURAKSHA-OMEGA/laws.html",
  "/SURAKSHA-OMEGA/admin.html",
  "/SURAKSHA-OMEGA/css/style.css",
  "/SURAKSHA-OMEGA/js/sos.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
