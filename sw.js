// https://codelabs.developers.google.com/codelabs/workbox-lab/

importScripts("workbox-sw.js");
// importScripts("./node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.1.js");
// importScripts("https://unpkg.com/workbox-sw@2.0.3/build/importScripts/workbox-sw.dev.v2.0.3.js");

/**
 * Create an instance of WorkboxSW.
 * Setting clientsClaims to true tells our service worker to take control as
 * soon as it's activated.
 */
var workboxSW = new WorkboxSW({clientsClaim: true});

/**
 * precache() is passed a manifest of URLs and versions, and does the following
 * each time the service worker starts up:
 *   - Adds all new URLs to a cache.
 *   - Refreshes the previously cached response if the URL isn't new, but the
 *     revision changes. This will also trigger a Broadcast Channel API message
 *     sent to the channel 'precache-updates'.
 *   - Removes entries for URLs that used to be in the list, but aren't anymore.
 *   - Sets up a fetch handler to respond to any requests for URLs in this
 *     list using a cache-first strategy.
 *
 * DO NOT CREATE OR UPDATE THIS LIST BY HAND!
 * Instead, add one of our tools (workbox-cli, workbox-webpack-plugin, or
 * workbox-build) to your existing build process, and have that regenerate the
 * manifest at the end of every build.
 */
workboxSW.precache([
  {
    "url": "assets/css/styles.css",
    "revision": "53c82f2751038595e99c365d4e50a22e"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.woff2",
    "revision": "a85ccf360fecc9e944dae3617f131577"
  },
  {
    "url": "assets/icons/icon-256.png",
    "revision": "d5222afc45cee197edfd4f5579dc940c"
  },
  {
    "url": "assets/icons/icon-large.png",
    "revision": "dfc2528c59fd4c821f5163e26dbfa0c3"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "1f4015200de4b8fd686702b81af11c5e"
  },
  {
    "url": "assets/rybar.png",
    "revision": "a44d9b099ee4bf6cc9cd1c829db5ae6f"
  },
  {
    "url": "dextr.html",
    "revision": "4fcd5cca14233d091fee2da28dd540cb"
  },
  {
    "url": "images/inflet/mobile-search-wide.png",
    "revision": "c847f4a4838e21c7789989337494f452"
  },
  {
    "url": "images/inflet/mobile-search.png",
    "revision": "81394e100050a79d3c106780d2367861"
  },
  {
    "url": "images/inflet/publish.png",
    "revision": "3b96b7c58fd11f4ff840a41d6a4ad06c"
  },
  {
    "url": "images/inflet/publish1.png",
    "revision": "23a1e94af0be0dc21ce703e5c068c0e9"
  },
  {
    "url": "images/inflet/search-criteria.png",
    "revision": "55ee225fa44c99be800394e6b155679d"
  },
  {
    "url": "images/inflet/search-layout.png",
    "revision": "9487c9ecd825e0c9786c2f4666792de0"
  },
  {
    "url": "images/inflet/search-map.png",
    "revision": "9f7d43073359d54ab52a4e441336eb94"
  },
  {
    "url": "images/inflet/search-map1.png",
    "revision": "6a505283ef8f430bcc81c2b16d2bf512"
  },
  {
    "url": "images/inflet/search.png",
    "revision": "0542a93fd9ba235fe14088ca7918b745"
  },
  {
    "url": "images/pREST_client.png",
    "revision": "24f032eafb173764f4f504df77065c1e"
  },
  {
    "url": "images/pREST_controller.png",
    "revision": "f4bf6264a782d21595cb27f14289d766"
  },
  {
    "url": "images/pREST_web.png",
    "revision": "f9e97cd0d56faf844d14e3799f4a60ce"
  },
  {
    "url": "images/soa.png",
    "revision": "e84abffb328b4c5fa396bb89519ec1a5"
  },
  {
    "url": "images/swid_card.png",
    "revision": "0c11b0959d7d65082d51e7b624478b67"
  },
  {
    "url": "images/swid_schema.png",
    "revision": "cafaee2edd882aea045ff55ad8b141f4"
  },
  {
    "url": "index.html",
    "revision": "b99bc22c317b45df525bf09a8625640a"
  },
  {
    "url": "manifest.json",
    "revision": "1f370a03879f388b98da03fbddc52f8d"
  },
  {
    "url": "sw-init.js",
    "revision": "ba76a7e37335c5a113737b53de912b93"
  },
  {
    "url": "sw.js",
    "revision": "77a9287ad5e613bc200f264d641c3cd3"
  },
  {
    "url": "technology.html",
    "revision": "616472e1198d482f0c23242249a97209"
  },
  {
    "url": "template.html",
    "revision": "0ff418121b8ee49134786f26b989d329"
  }
]);

/**
 * registerNavigationRoute() is used for sites that follow the App Shell Model,
 * https://developers.google.com/web/fundamentals/architecture/app-shell
 * It tells the service worker that whenever there's a navigation request for
 * a new URL, instead of returning the HTML for that URL, return a previously
 * cached "shell" HTML file instead.
 *
 * If you want more control over which navigations use the "shell" HTML, you
 * can provide an optional array of regular expressions:
 *   - whitelist (which defaults to [/./])
 *   - blacklist (which defaults to [])
 *
 * (For the purposes of this demo, which doesn't follow the App Shell Model,
 * registerNavigationRoute() is commented out.)
 */
// workboxSW.router.registerNavigationRoute('app-shell.html', {
//     whitelist: [/./],
//     blacklist: [],
// });

/**
 * Requests for URLs that aren't precached can be handled by runtime caching.
 * Workbox has a flexible routing system, giving you control over which caching
 * strategies to use for which kind of requests.
 *
 * registerRoute() takes a RegExp or a string as its first parameter.
 *   - RegExps can match any part of the request URL.
 *   - Strings are Express-style routes, parsed by
 *     https://github.com/nightwolfz/path-to-regexp
 *
 * registerRoute() takes a caching strategy as its second parameter.
 * The built-in strategies are:
 *   - cacheFirst
 *   - cacheOnly
 *   - networkFirst
 *   - networkOnly
 *   - staleWhileRevalidate
 * Advice about which strategies to use for various assets can be found at
 * https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
 *
 * Each strategy can be configured with additional options, controlling the
 * name of the cache that's used, cache expiration policies, which response
 * codes are considered valid (useful when you want to cache opaque responses)
 * and whether updates to previously cached responses should trigger a message
 * using the BroadcastChannel API.
 *
 * The following routes show this flexibility put to use.
 */

/**
 * Set up a route that will match any URL requested that ends in .txt.
 * Handle those requests using a network-first strategy.
 */
// workboxSW.router.registerRoute(
//     /\.txt$/,
//     workboxSW.strategies.networkFirst()
// );

/**
 * Set up a route that will match any URL requested that starts with
 * https://httpbin.org/delay/.
 * Handle those requests using a network-first strategy, but with a timeout.
 * If there's no network response before the timeout, then return the previous
 * response from the cache instead.
 */
// workboxSW.router.registerRoute(
//     "https://httpbin.org/delay/(.*)",
//     workboxSW.strategies.networkFirst({networkTimeoutSeconds: 3})
// );

/**
 * Set up a route that will match any URL requested that starts with
 * https://httpbin.org/image/.
 * Handle those requests using a cache-first strategy, storing them in a
 * dedicated cache named 'images'.
 * That cache has a maximum size of 2 entries,
 * and once that's reached, the least-recently used entry will be deleted.
 * Additionally, any entries older than 7 * 24 * 60 * 60 seconds (1 week) will
 * be deleted.
 * Because the image responses are cross-domain and don't use CORS, they will
 * be "opaque", and have a status code of 0. When using a cache-first strategy,
 * we need to explicitly opt-in to caching responses with a status of 0.
 */
// workboxSW.router.registerRoute(
//     "https://httpbin.org/image/(.*)",
//     workboxSW.strategies.cacheFirst({
//         cacheName: "images",
//         cacheExpiration: {
//         maxEntries: 2,
//         maxAgeSeconds: 7 * 24 * 60 * 60,
//         },
//         cacheableResponse: {statuses: [0, 200]},
//     })
// );
