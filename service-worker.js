if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"c5feb234d142b3ca92ac46822ff38ba5","url":"404.html"},{"revision":"f421e8705f913d07193df994d3bf01fd","url":"blog/index.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"e1f0cf91c3c19dc35580d13ad3e01aa7","url":"fonts/Archia/archia-light-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"02155d96e4a3f18305ab944925389c77","url":"fonts/Archia/archia-regular-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e88f1cf30180bd74b3201844b0c03c69","url":"fonts/Archia/archia-thin-webfont.woff2"},{"revision":"c5feb234d142b3ca92ac46822ff38ba5","url":"index.html"},{"revision":"19ea237f625ba54c0794b973f5144f40","url":"precache-manifest.19ea237f625ba54c0794b973f5144f40.js"},{"revision":"cb740fc90ec139afa150d1df7e351d57","url":"static/css/13.93b3b32d.chunk.css"},{"revision":"2f6270eda5270d0b74ae3088a7359a70","url":"static/css/main.962af12f.chunk.css"},{"revision":"a8c031668e9c87f2faa51b48651e491c","url":"static/js/0.4a2f490b.chunk.js"},{"revision":"78fde426f8b37180462f06c26f6a3945","url":"static/js/1.486dccbc.chunk.js"},{"revision":"eab41e7e91347fed0e86794f1a06b40c","url":"static/js/11.251531a7.chunk.js"},{"revision":"ef9f8c52d63913a83ca9f0a1b0ebddbe","url":"static/js/12.1af9d03f.chunk.js"},{"revision":"23ed39925e3b2dad3fbe9504a83ae727","url":"static/js/13.d0968699.chunk.js"},{"revision":"d1788d2f6892f63ddb8e04b134f2e735","url":"static/js/14.fe02c85f.chunk.js"},{"revision":"e3e68af286080260af7123e3273d5cfa","url":"static/js/15.472134a7.chunk.js"},{"revision":"b198d11ff0dfb5158d59df5eb4570ed5","url":"static/js/2.a11b4982.chunk.js"},{"revision":"4908d5f978ed8898607b1edad2b4c97a","url":"static/js/DeepDive.4aa3890c.chunk.js"},{"revision":"71fa80b63e8743314c7b1b84a44d54f4","url":"static/js/Essentials.cc092ec0.chunk.js"},{"revision":"1ce3306b3b8c061155f6bb90fa7db7af","url":"static/js/FAQ.944737a8.chunk.js"},{"revision":"a2b083e11080d64932541404262d4b81","url":"static/js/Home.70ec4ea6.chunk.js"},{"revision":"5013aed54e3f4a555c4e9c87ee99a68f","url":"static/js/main.060063d6.chunk.js"},{"revision":"5f51225a20cb7602f691c7bb62ec0441","url":"static/js/PatientDB.48fef70d.chunk.js"},{"revision":"6170a830419191a13221a35dcd61fc8f","url":"static/js/runtime-main.7ed5b089.js"},{"revision":"781171a526ac3978ad229b99e691161a","url":"static/js/State.93555988.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
