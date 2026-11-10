const CACHE_NAME = "calculadora-v1";

const ARQUIVOS_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];

self.addEventListener("install", function (evento) {

    evento.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(ARQUIVOS_CACHE);
            })
    );

});

self.addEventListener("fetch", function (evento) {

    evento.respondWith(
        caches.match(evento.request)
            .then(function (resposta) {

                return resposta || fetch(evento.request);

            })
    );

});