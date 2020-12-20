self.addEventListener('install', (e) => {
  console.log('ServiceWorker install', e)
});

self.addEventListener('activate', (e) => {
  console.log('ServiceWorker activate:', e)
});