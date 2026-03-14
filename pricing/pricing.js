(function() {
  'use strict';

  // Theme, mobile nav, and reveal animations handled by shared utilities (boot.js).

  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;

      // Close all others
      document.querySelectorAll('.faq-q').forEach(other => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          other.nextElementSibling.classList.remove('open');
        }
      });

      btn.setAttribute('aria-expanded', String(!expanded));
      answer.classList.toggle('open');
    });
  });

})();
