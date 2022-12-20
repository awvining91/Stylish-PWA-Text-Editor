const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

//I updated the TODOs in this section

const pageCache = new CacheFirst({
  storageCache: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
//I added in some code here to try to implement asset caching

registerRoute(


  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({

    // Name of the cache storage.
    storageCache: 'cache-storage',

    plugins: [
      // This is a plugin that helps cache the responses
      new CacheableResponsePlugin({

        statuses: [0, 200],
      }),
      new ExpirationPlugin({

        maxEntries: 59,
        maxAgeSeconds: 29 * 13 * 59 * 59, 
      })
    ],
  })
);
