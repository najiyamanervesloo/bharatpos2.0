// ============================================================
//  Bharat POS – Service Worker (PWA)
//  Strategy: Cache-First for static assets, Network-First for API
// ============================================================

const CACHE_NAME   = 'bharat-pos-v2';
const STATIC_CACHE = 'bharat-pos-static-v2';
const DATA_CACHE   = 'bharat-pos-data-v2';

// Assets to pre-cache on install
const PRECACHE_ASSETS = [
  './index.html',
  './manifest.json',
  './poslogo.png',
  './icon-72x72.png',
  './icon-96x96.png',
  './icon-128x128.png',
  './icon-144x144.png',
  './icon-152x152.png',
  './icon-192x192.png',
  './icon-384x384.png',
  './icon-512x512.png'
];

// External CDN assets to cache on first fetch
const CDN_HOSTS = [
  'unpkg.com',
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
];

// ── Install ──────────────────────────────────────────────────
self.addEventListener('install', event => {
  console.log('[SW] Installing Bharat POS Service Worker…');
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('[SW] Pre-caching app shell');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ── Activate ─────────────────────────────────────────────────
self.addEventListener('activate', event => {
  console.log('[SW] Activating Bharat POS Service Worker…');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== STATIC_CACHE && name !== DATA_CACHE)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ── Fetch ─────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip chrome-extension and other non-http(s) schemes
  if (!url.protocol.startsWith('http')) return;

  // CDN assets → Cache First (long-lived)
  if (CDN_HOSTS.some(host => url.hostname.includes(host))) {
    event.respondWith(cacheFirst(event.request, STATIC_CACHE));
    return;
  }

  // Local app shell → Cache First with network fallback
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(event.request, STATIC_CACHE));
    return;
  }
});

// ── Strategies ───────────────────────────────────────────────

/** Cache First: serve from cache, fall back to network then cache result */
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const networkRes = await fetch(request);
    if (networkRes && networkRes.status === 200) {
      cache.put(request, networkRes.clone());
    }
    return networkRes;
  } catch {
    // Return offline fallback for navigation requests
    if (request.mode === 'navigate') {
      const fallback = await cache.match('./index.html');
      if (fallback) return fallback;
    }
    return new Response('Offline – Bharat POS is not available right now.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// ── Background Sync (future-ready) ───────────────────────────
self.addEventListener('sync', event => {
  console.log('[SW] Background sync:', event.tag);
  // Placeholder for future sync of offline transactions
});

// ── Push Notifications ────────────────────────────────────────
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title   = data.title   || 'Bharat POS';
  const options = {
    body: data.body || 'You have a new notification.',
    icon: './poslogo.png',
    badge: './poslogo.png',
    tag: data.tag || 'bharat-pos',
    data: data.url || '/',
    actions: data.actions || [],
    vibrate: [200, 100, 200]
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const target = event.notification.data || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url === target && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(target);
    })
  );
});

console.log('[SW] Bharat POS Service Worker loaded ✓');
