// utility/boot.js — single entry point for all shared utility scripts.
// Loads each script sequentially in the correct order.
// Pages only need: <script src="utility/boot.js"></script>
(function () {
  var base = document.currentScript.src.replace(/[^/]+$/, '');
  var queue = ['loader.js', 'theme.js', 'components.js', 'glow-btn.js', 'page-transition.js', 'reveal.js'];

  function load(file) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = base + file;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  queue.reduce(function (chain, file) {
    return chain.then(function () { return load(file); });
  }, Promise.resolve());
})();
