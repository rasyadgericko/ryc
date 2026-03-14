// utility/theme.js — centralised theme toggle (loaded by boot.js on all pages)
// Dispatches 'rycthemechange' on <html> so page scripts can react (e.g. canvas recolour).
(function () {
  var root = document.documentElement;
  if (root.hasAttribute('data-ryc-theme-init')) return; // guard against double-init
  root.setAttribute('data-ryc-theme-init', '');

  window.RYC = window.RYC || {};

  function get() { return localStorage.getItem('ryc-theme') || 'dark'; }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('ryc-theme', theme);
    var isDark = theme === 'dark';
    var icon = isDark ? '\u25D0' : '\u25D1';   // ◐ / ◑
    var label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    document.querySelectorAll('#themeToggle, #themeToggleMobile').forEach(function (t) {
      t.innerHTML = icon;
      t.setAttribute('aria-label', label);
    });
    root.dispatchEvent(new CustomEvent('rycthemechange', { detail: { theme: theme } }));
  }

  // Apply saved theme immediately
  apply(get());

  // Attach toggle listeners (buttons injected later by components.js — use delegation)
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('#themeToggle, #themeToggleMobile');
    if (!btn) return;
    apply(get() === 'dark' ? 'light' : 'dark');
  });

  window.RYC.getTheme = get;
  window.RYC.setTheme = apply;
})();
