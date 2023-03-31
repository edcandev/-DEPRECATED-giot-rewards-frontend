/*importScripts('https://cdnjs.cloudflare.com/ajax/libs/cache.adderall/1.0.0/cache.adderall.js');

var STATIC_FILES = [
    "./css/styles.css", 
    "./imgs/giot_rewards_iso.png",
    "./imgs/giot_rewards_login.png",
    "./imgs/giot_rewards_logo.png",
    "./imgs/giot_rewards_next.png",
    "./imgs/giot_rewards_prev.png",
    "./imgs/giot_rewards_rw192.png",
    "./imgs/giot_rewards_rw512.png",
];
*/
//var CACHE_STATIC_NAME= 'static';
self.addEventListener('install', function(event){
    console.log("[Service Worker] Instalando Service Worker...", event);
    event.waitUntil(
        caches.open('static')
            .then(function(cache){
                console.log('[Service Worker] Haciendo precaching de la interfaz');
                cache.addAll([
                    '/',
                    'index.html',
                    '/js/App.js',
                    '/js/api.js',
                    '/js/carousel_worker.js',
                    '/js/components.js',
                    '/js/helper.js',
                    '/css/styles.css',
                    '/imgs/carousel/carousel_alitas.jpeg',
                    '/imgs/carousel/carousel_cafe.jpeg',
                    '/imgs/carousel/carousel_hamburguesa.jpeg',
                    '/imgs/carousel/carousel_malteadas.jpeg',
                    '/imgs/home/home_canjear.png',
                    '/imgs/home/home_consultar.png',
                    '/imgs/home/home_cuenta.png',
                    '/imgs/home/home_menu.png',
                    'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
                    'https://fonts.googleapis.com',
                    'https://fonts.gstatic.com'
                ]);        
            })
    ) 
});

self.addEventListener('activate', function(event){
    console.log("[Service Worker] Activando Service Worker...", event);
    event.waitUntil(
        caches.keys()
            .then(function(keyList){
                return Promise.all(keyList.map(function(key){
                    if(key !== 'static'){
                        console.log('[Service Worker] Removiendo cache anteiores', key);
                        return caches.delete(key);
                    }
                }));
            })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(event){
    console.log("[Service Worker] Haciendo fetching de...", event);
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
                if(response){
                    return response;                  
                }
                else{
                    return fetch(event.request);
                }             v            
            }) 
            .catch(function(err){
                
            })
   );
});

/*
self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                
                
            ]);
        })
    );
});

self.addEventListener("fetch", e  =>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
*/