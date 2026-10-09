const CACHE_NAME = 'morse-pwa-v6';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // network-first; solo se guardan y se aceptan respuestas válidas (ok u opacas,
  // como las fuentes de Google). Si la red falla o responde con error (ej. 404
  // porque el sitio se despublicó), se usa la copia guardada.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok || response.type === 'opaque') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        }
        return caches.match(event.request).then((cached) => cached || response);
      })
      .catch(() => caches.match(event.request))
  );
});