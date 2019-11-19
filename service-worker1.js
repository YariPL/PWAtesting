var cacheName = 'templateCache1';
var dataCacheName = 'templateData1';
//array of files to cache(app shell)
var filesToCache = [
	'/',
	"css/app.css",
	"js/app.js",
	"service-worker1.js",
	"index.html",
	"manifest.json",
	"img/icon-128x128.png",
	"img/icon-144x144.png",
	"img/icon-152x152.png",
	"img/icon-192x192.png", 
	"img/icon-256x256.png"
];
//installing service worker
self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		}).catch(function(error) {
			console.log('Catching app shell failed with ' + error);
		})
	)
});

//activating service worker
self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activate');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if (key !== cacheName && key !== dataCacheName) {
					console.log('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		}).catch(function(error) {
			console.log('Removing old cache failed with ' + error);
		})
	)
	return self.clients.claim();
});

//using network if available or load cache(appshell) if not
self.addEventListener('fetch', function(e) {
  	console.log(e.request);
    e.respondWith(
		caches.match(e.request).then(function(response) {
	        console.log('[ServiceWorker] Fetch Only', e.request.url);
	        return response || fetch(e.request);
		}).catch(function(error) {
			alert('Fetch failed with ' + error);
		})
    );
});


self.addEventListener('message', function(event){

    console.log("SW Received Message: " + event.data);
    console.log(event);

});

