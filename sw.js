/* Mind It! webpage — works offline once it has been opened (build 129).
   Network first, so a new build arrives as soon as there is internet; without internet the saved copy opens.
   Build 135: the page is kept ONCE (under ./index.html), whatever address opened it — before, every address with
   something after "?" kept its own 3.4 MB copy, which ate into the space the browser gives this site (the same space
   the players and pictures need). The new cache name clears the old copies. */
var C = "mindit-web-135";
var PAGE = "./index.html";
var FILES = [PAGE, "./apple-touch-icon.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(C).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== C; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
function keyFor(req) {   // one cache entry per file: the quiz page under ./index.html, everything else without its "?…"
  var u = new URL(req.url);
  if (req.mode === "navigate" || /\/(index\.html)?$/.test(u.pathname)) return new URL(PAGE, self.registration.scope).href;
  u.search = ""; u.hash = ""; return u.href;
}
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var u = new URL(e.request.url); if (u.origin !== self.location.origin) return;
  var key = keyFor(e.request);
  var net = new Promise(function (ok, bad) {
    var t = setTimeout(function () { bad(new Error("slow")); }, 5000);   // Wi-Fi without internet: don't wait forever
    fetch(e.request).then(function (r) { clearTimeout(t); ok(r); }, function (x) { clearTimeout(t); bad(x); });
  });
  e.respondWith(net.then(function (r) {
    if (r && r.ok && r.type === "basic") { var cp = r.clone(); caches.open(C).then(function (c) { c.put(key, cp); }); }
    return r;
  }).catch(function () {
    return caches.match(key).then(function (r) {
      if (r) return r;
      if (e.request.mode === "navigate") return caches.match(new URL(PAGE, self.registration.scope).href);   // the quiz page itself, whatever address was typed
      return Response.error();
    });
  }));
});
