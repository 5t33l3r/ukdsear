// Offline cache for the protected copy of UKDSEAR ENGINEER v4.1
// The cached page is the encrypted one, so a cached copy is no more
// readable than the file itself. The password is still needed each time.
const CACHE = "ukdsear-locked-engineer-v4.1";
const FILES = ["./", "./index.html", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(function (hit) {
    return hit || fetch(e.request).catch(function () { return caches.match("./index.html"); });
  }));
});
