/* Mind It! webpage — works offline once it has been opened (build 129).
   Network first, so a new build arrives as soon as there is internet; without internet the saved copy opens. */
var C = "mindit-web-129";
var FILES = ["./", "./index.html", "./apple-touch-icon.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(C).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== C; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var u = new URL(e.request.url); if (u.origin !== self.location.origin) return;
  var net = new Promise(function (ok, bad) {
    var t = setTimeout(function () { bad(new Error("slow")); }, 5000);   // Wi-Fi without internet: don't wait forever
    fetch(e.request).then(function (r) { clearTimeout(t); ok(r); }, function (x) { clearTimeout(t); bad(x); });
  });
  e.respondWith(net.then(function (r) {
    if (r && r.ok) { var cp = r.clone(); caches.open(C).then(function (c) { c.put(e.request, cp); }); }
    return r;
  }).catch(function () {
    return caches.match(e.request, { ignoreSearch: true }).then(function (r) {
      if (r) return r;
      if (e.request.mode === "navigate") return caches.match("./index.html");   // the quiz page itself, whatever address was typed
      return Response.error();
    });
  }));
});
