"use strict";var precacheConfig=[["/index.html","e6b7f6de24661e703a62794f9eeec74c"],["/static/css/main.ea803cde.css","494a1c513bc694362d418ca89313fbcb"],["/static/js/main.0028cdbf.js","a2a1943dd716aebd8dba8bea015b276f"],["/static/media/01-gears.52964f37.svg","52964f3750075a905cd8250a56ab6299"],["/static/media/02-bulb.f1939cec.svg","f1939cecc4b286dd9eeeab3a657cb908"],["/static/media/03-develop.75b923bb.svg","75b923bb71fed1a483c31b25edbce075"],["/static/media/android-logo.88048276.svg","8804827675b438bc4c7c7b53724dc9a7"],["/static/media/apple-icon.a47ac51c.svg","a47ac51cff89be42c686324f4c753470"],["/static/media/ar-glasses.0692c7c2.svg","0692c7c2f0464c54eeedac0d9a3f0bb1"],["/static/media/back-ellipse.00c0a7a6.svg","00c0a7a61bd292671d77f48238b81ec3"],["/static/media/browser-icon.928b5073.svg","928b507332d0b8c23ee9315aa9fdecd5"],["/static/media/facebook-logo.1d9eec3d.svg","1d9eec3d05362f9938337fa46639d452"],["/static/media/front-elips.74589251.svg","7458925168efbb7d22a0d75e05786d77"],["/static/media/game-controller.856804a6.svg","856804a6b6e55de71ecc7d7962f9b258"],["/static/media/instagram.a3f4b69b.svg","a3f4b69b7e4cc293ae8b3d23d034bc1e"],["/static/media/ipo.b75e5ba7.svg","b75e5ba72e73874cc7357b7d81bb9f29"],["/static/media/java.ecb0eb50.svg","ecb0eb50edaa89d3bc9d4a1ce9dffb3f"],["/static/media/js.f0ff2f2e.svg","f0ff2f2eb579dd9abc45f7fcd9ce43b4"],["/static/media/kotlin.239eba57.svg","239eba57e3e85fcc88ff838ab9ca9a1a"],["/static/media/layout-icon.6d9f7825.svg","6d9f7825d03e40a455b900e51fe7be4f"],["/static/media/linkedin-logo.b545ecef.svg","b545ecef4d15217993f30b02c0ada9f3"],["/static/media/neobis.967d6884.svg","967d68841db655a143d328c4e676fe06"],["/static/media/phone-illustration.de78d5f3.svg","de78d5f34796175065f54ab3f97de6a2"],["/static/media/project-management.bbae4726.svg","bbae4726ec719efa53f20eca3171fce6"],["/static/media/python.94589385.svg","945893858b58ff2947081f015e88ff68"],["/static/media/react.721e5b52.svg","721e5b52b8ad87d3d76ca967675dd63b"],["/static/media/swift.fd2ed07d.svg","fd2ed07d57ff5631468b0c66083c0a23"],["/static/media/tablet-illustration.ccb5e3f6.svg","ccb5e3f675a07f03bbaf573d0c29afb7"],["/static/media/terminal-icon.d317cfc6.svg","d317cfc6ca1782c28d779ac7614b6233"],["/static/media/tree-illustration.4a62af6e.svg","4a62af6e8d916b5ca30fe17428bf8fdf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});