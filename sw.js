/* مسلسلي — عامل خدمة PWA: يخدّم الواجهة بثبات ويحدّثها عند كل نشر
   يستخدم نمط "الشبكة أولًا" للملفات المحلية حتى لا يفسد تعديلات الأدمن */
const CACHE = "masalsali-core-v1";
const CORE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // الموارد الخارجية (فيديوهات، بوسترات...) تمر مباشرة بلا تخزين
  if (url.origin !== self.location.origin) return;

  // التنقل: الشبكة أولًا ثم نسخة مؤقتة للواجهة
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // الملفات المحلية: الشبكة أولًا (تحديث دائم) مع بديل من الكاش عند انقطاع
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});