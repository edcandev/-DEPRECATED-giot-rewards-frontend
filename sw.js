importScripts('https://cdnjs.cloudflare.com/ajax/libs/cache.adderall/1.0.0/cache.adderall.js');

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

self.addEventListener('install', function(event){
    console.log("[Service Worker] Instalando Service Worker...", event);
});

self.addEventListener('activate', function(event){
    console.log("[Service Worker] Activando Service Worker...", event);
    return self.clients.claim();
});

/*self.addEventListener("fetch", function(event){
    console.log("[Service Worker] Haciendo fetching de...", event);
    event.respondWith(null);
});
*/

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
