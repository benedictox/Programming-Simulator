const CACHE_NAME = "programming-simulator-v1";
const APP_SHELL = [
  "./index.html",
  "./pages/html-learning.html",
  "./pages/html-exercises.html",
  "./pages/css-learning.html",
  "./pages/css-exercises.html",
  "./pages/javascript-learning.html",
  "./pages/javascript-exercises.html",
  "./pages/sql-learning.html",
  "./pages/sql-exercises.html",
  "./stylesheets/main.css",
  "./stylesheets/learning.css",
  "./stylesheets/exercises.css",
  "./javascripts/code-lab.js",
  "./javascripts/topic-exercises.js",
  "./javascripts/offline.js",
  "./manifest.webmanifest",
  "./icons/app-icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key.startsWith("programming-simulator-") && key !== CACHE_NAME,
            )
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (
    request.method !== "GET" ||
    new URL(request.url).origin !== self.location.origin
  )
    return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) {
            const copy = response.clone();
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, copy);
          }
          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request, {
            ignoreSearch: true,
          });
          return (
            cachedPage ||
            caches.match(new URL("./index.html", self.registration.scope))
          );
        }),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then(async (response) => {
        if (response.ok) {
          const copy = response.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, copy);
        }
        return response;
      });
    }),
  );
});
