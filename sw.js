const CACHE_NAME = 'foodai-v1';
const ASSETS = [
  './',
  './index.html'
];

// Instalación: Guarda los archivos principales en la caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activación: Limpia cachés antiguas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de red/caché para peticiones
self.addEventListener('fetch', (e) => {
  // Para las peticiones a la API, intenta red y no guarda en caché
  if (e.request.url.includes('pollinations.ai')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Para archivos locales, sirve desde la caché y actualiza en segundo plano
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
