self.addEventListener('install', (e) => {
  console.log('Service Worker de Festival Run instalado');
});

self.addEventListener('fetch', (e) => {
  // Esto permite que el juego cargue más rápido
  e.respondWith(fetch(e.request));
});
