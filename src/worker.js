importScripts('/env.js')
workbox.setConfig({
  debug: process.env.NODE_ENV === 'development',
});
// load service worker immediately
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest)

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'my-image-cache',
  }),
)
