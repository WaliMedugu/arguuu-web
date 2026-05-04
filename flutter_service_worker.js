'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d2b40bd95d6aee4d9bc4b94d31c2ac0c",
".git/config": "06055f5e03b4fb05925022071646739c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d8c8aad73f62631eab610067b4e84fd0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d065939bdc76a402b2939b99e8cc41e",
".git/logs/refs/heads/main": "1d1c5dc414db43b38e9e9ec5da3c0471",
".git/logs/refs/remotes/origin/main": "181b8353640162c195ea9ac3fbb3b5eb",
".git/objects/0a/1046ff4bd122d10b46a182e427f632fb5c086d": "78fb8950a1edee9b2fdecce84ba64fc7",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "dee38288e294701bf8f665ae546a43e3",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "16aa5ea60d4bd28a318f9d493db923b3",
".git/objects/26/0f63ed5a7b2180e5b3776d5d3d0cd4ada1d264": "6bb29dd98c901ac2044f857f6c3d8b0a",
".git/objects/29/8b821b23ab269af4aeebf074df675c8b859cea": "b985b25ea4f016eb6b68ab0d4b7da1e1",
".git/objects/2c/703d4b89482454fbe560e1d88f5233005f9c85": "b2b6d3abed5b2bfc27862998425570ec",
".git/objects/2d/e54afb4762c4b9f79bb474e9a2a9d348b1f563": "4f6b787a4274f76307e0f63575ec3559",
".git/objects/2e/19c6dcec832d5137ea4af4cc44748899fd7317": "140e7f629b4daff43b92d23dcab1cd24",
".git/objects/40/a01d4a547dda4a789346bb20ef1afd6d32f897": "6602a3ec87c0c6eb97338814b619d83d",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "338245ef1a85e95987f94776d0669c97",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "23e8f7ce2c2856c1943e6cb51334416e",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "6d57e2d4816384a5236f4a52d9f1014b",
".git/objects/54/cc569ee95749b5e6e938eb249003f1a1f9f522": "aabf23854b3c81c2b80045850e1ef023",
".git/objects/56/426ee5e0923260033c6e03a11a3d1ecfbeed64": "0bc55f4ec8135603b1161802b4795f90",
".git/objects/58/685f0f9b160027069aeba78d0f08db6287c543": "4c54d4474db14376ccc7c2db63e09b67",
".git/objects/5c/a4d8a23db5bfd173719e451bcc43e8286e5171": "de6ce936c6ca2e852871af2847852ebe",
".git/objects/60/9434a6f00a35b9b2be57d656e4027e1c37550d": "c6fc7dcf2b0cef4125c4900f152b6512",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/6d/a8fd6f402d852ec90f4856f8a7ab199bf24844": "37de9741c5d20f25bc04de929b64bf15",
".git/objects/6e/82d41aa1b7814058863f20b223b5ecfc1f5133": "a04ec53349a0c219358e2fdda499af02",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "6dc767ec6498faa598b6dd7d00386498",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "e14aa589bb7e68e3a524c297a802bde9",
".git/objects/7b/8cf49d5ef553de7986f7cc0aee5680001fcf43": "323d1a1e1bd9fd6ccb7f6c3f880f845d",
".git/objects/7e/ce5019ea24465fa0258cd25363a3a44008c5b5": "b4b0a2330dbe21e28338ee4568f3958e",
".git/objects/80/104a1e918ae037db06fe2441a9a4e1da37993b": "4591aee18209af6ef7c3a9475c4c19dd",
".git/objects/81/bd51199c7d707288e579db96a4ba6216ca125a": "1434ae808d22024efca3da096926f2da",
".git/objects/88/cd039259a47638e7c2796224a58eb7cfd2a450": "aa54da447af28f4e6a0255fff236169c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8c/082c8de090865264d37594e396c4d6c0099fe4": "9d552925a65d361aa162a571f1150e1f",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "5d4a29a9a87b890bf4925183f1d2e3f7",
".git/objects/95/cfb8fbcda8552f3ec3295b8ec394bf31a70661": "2dcd01ba5a3ab9a63078793dd6532c10",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "dc1d3b6ac68817e26c52a2b7aca98a10",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "b94174a22a0644ded353026549009c74",
".git/objects/af/ab5c7568d5f99dadabb171cd87799373e1b14a": "0bada6bbc683bfb46ab2d614d6ff9534",
".git/objects/b0/67a6218e0be31182f8b91b89c4b57a00bb9ce5": "44dd11896369d51809aa9f82ee60379a",
".git/objects/b1/2e567c3d820a25fa4a7e87fa96c5c322365921": "66fe726aaaaca72478432cc8b670f3a9",
".git/objects/b1/6e29193a002178c7519295cc1a2b8004b76414": "a17623df3dbcc08d068ad11ed60aeb0c",
".git/objects/b3/b2ec82be663ae0d93e4ce94141073966ed88fa": "3fed3668022c00d7c8cfa9c90366c642",
".git/objects/b4/f7281d0ed91e41dd3c8f3543f20e69f05b6e79": "375c5575362444eade65324d8c31df74",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "a488dd5b768f3e95bb3ded676201c413",
".git/objects/ba/300fa7271596a8bb9fe569dd0a389a6201b809": "04436c537abcf25e77f8b2e8c018f974",
".git/objects/bc/ed5e9fc6544142f99e9cee846f5989bc2f7a74": "b092e799774ff0989beda23a3f1f0bc1",
".git/objects/c5/e2b6aa0339f87af45a6a4941614b518ded507b": "74db22e9ca272ac816230390e4111998",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "0c4bbf647e92f25144f535178c7f7f15",
".git/objects/c8/2c2cb2e9a069bb38758194ecc461443878fe07": "79b7fcfdec8819e7601f183ad79f283a",
".git/objects/ce/3a9724bb974b703b66f24fc230aa46373beec8": "70f7a92cc43b2038793fa7d6d1b32242",
".git/objects/d3/7a4a3c6b645b78e4cb103bd2851b91b10747c3": "68ea01c379fb249ffe7e4d6582ee93ba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/6568e68b81f3ff22c35db6624d8b4e1415bc26": "2431045f2cbed8474e884ed1d0344cf6",
".git/objects/d8/77a6a450850e6f6cda3fc1d08b189920469b59": "93c82d64cf5bb8c3a98f39ec2168fa6e",
".git/objects/d9/8441b523bbcd3d2a2e5c5fc117c1b023355302": "906156342d1003f5e8e23bc633e581cb",
".git/objects/da/f305671e68ec98a8e55b32df0e500f84a67ef4": "e33928c32a94ca6e546d8f570d38beca",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "6a4baf0ee5d7f24d01892e880c87e9b5",
".git/objects/df/04c8415a09d4c7a37f991000aa5e34d7c3fe36": "4c661a27c4b001131d41694df0477094",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "eaf69ee68e07ccd33759fba4b5e36d4e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/cf387555ece96df89d242be7b2b28332e96105": "0abe2a18c070e36f87c74c66f779d4ee",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/f6/89810666cba6cc3af8dcd9e478d315d834e512": "cac5c1b5a9b502e7139639b68d1b7b4c",
".git/objects/f8/f258c199f5b890038204ad78ea4c20a2516afb": "9bfc1321dd431032a62d300d2ce76963",
".git/objects/f9/6df35ccd9a6192465e45deac1ae9512750f93a": "d8c14d90feddf07a939f06f95ffffa23",
".git/objects/fd/295ec60c22e80fdd9ee57ca5d493e5db2e6fcb": "58297de632fa061a19d6d512c6795113",
".git/refs/heads/main": "2b85e84dea94db61bfd32fdced356508",
".git/refs/remotes/origin/main": "2b85e84dea94db61bfd32fdced356508",
".well-known/apple-app-site-association": "23b91f71c500dddf8b1ce2a133de6031",
".well-known/assetlinks.json": "b483c22d25c8558557633a52b1594108",
"app-ads.txt": "006346ab6e2b099e52321a2bc3916f1a",
"assets/AssetManifest.bin": "b4bd5c0e9cca47bef95f925107095da3",
"assets/AssetManifest.bin.json": "7f833573056e35f91e6fbca38d2dcdc5",
"assets/AssetManifest.json": "31d69a1d1424b8d4eb37ce151e3de088",
"assets/assets/arguuu_logo.png": "5b4df4b98c3fe5d7fa145cd00bceae22",
"assets/assets/bg.png": "864ad76214f0b7e0ad00caeb66bc65cd",
"assets/assets/logo.png": "d7fac52ebc998d8367daedfdddbb1433",
"assets/assets/premium.png": "5ec802343ca032cb785dbfc8d624e029",
"assets/assets/premium2.png": "66901a3a1a058516aa309eeaf8875fff",
"assets/FontManifest.json": "6b650aa969f62b06b7d4b461c82ea0a4",
"assets/fonts/MaterialIcons-Regular.otf": "d42c79bba40704a5e8bea330ccbb3566",
"assets/NOTICES": "130e7bd4c23a1401ef99216321548f2c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1e5d47a0bc1559e57273e04652e4751f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5b4df4b98c3fe5d7fa145cd00bceae22",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "6298e52964f8899b2ddd743d4ecebcf8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "078dc6d60d1f44c46fc970b00e74807d",
"/": "078dc6d60d1f44c46fc970b00e74807d",
"main.dart.js": "b745b16f7248872f177b71a1a430ab0c",
"manifest.json": "7cce14de8f7bfcf050ce9328b64f6fc7",
"robots.txt": "b31b81ed873e3be3c4d033d20f870b54",
"sitemap.xml": "6ee30a3a7fab9dfde5e976cc0035df75",
"vercel.json": "eba25c95a8435b6e21acd45ccd827e1b",
"version.json": "5f0873bbc69ef0cd248acf11c884103c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
