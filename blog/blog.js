(function() {
  'use strict';

  // Theme, mobile nav, and reveal animations handled by shared utilities (boot.js).

  // ===== CATEGORY FILTER =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const featuredArticle = document.querySelector('.featured-article');
  const articleCards = document.querySelectorAll('.article-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (featuredArticle) {
        const cat = featuredArticle.dataset.category;
        const show = filter === 'all' || cat === filter;
        featuredArticle.hidden = !show;
        featuredArticle.setAttribute('aria-hidden', String(!show));
      }

      let visibleCount = 0;
      articleCards.forEach(card => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;
        card.hidden = !show;
        card.setAttribute('aria-hidden', String(!show));
        if (show) visibleCount++;
      });

      const countEl = document.querySelector('.blog-count');
      if (countEl) {
        const total = (featuredArticle && !featuredArticle.hidden ? 1 : 0) + visibleCount;
        countEl.textContent = total + (total === 1 ? ' Article' : ' Articles');
      }
    });
  });

  // ===== NEWSLETTER FORM =====
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterBtn = document.getElementById('newsletterBtn');
  const newsletterSuccess = document.getElementById('newsletterSuccess');
  const newsletterStatus = document.getElementById('newsletterStatus');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();

      const emailInput = document.getElementById('newsletter-email');
      if (!emailInput.value.trim() || !emailInput.validity.valid) {
        emailInput.focus();
        return;
      }

      newsletterBtn.disabled = true;
      newsletterBtn.querySelector('span').textContent = 'Sending...';
      newsletterStatus.textContent = '';

      fetch('https://formspree.io/f/xpqypjzj', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(newsletterForm)
      })
      .then(res => {
        if (res.ok) {
          newsletterForm.style.opacity = '0';
          newsletterForm.style.pointerEvents = 'none';
          newsletterSuccess.classList.add('is-visible');

          setTimeout(() => {
            newsletterSuccess.classList.remove('is-visible');
            newsletterForm.reset();
            newsletterForm.style.opacity = '';
            newsletterForm.style.pointerEvents = '';
            newsletterBtn.disabled = false;
            newsletterBtn.querySelector('span').textContent = 'Subscribe';
          }, 4000);
        } else {
          return res.json().then(data => {
            newsletterStatus.textContent = data.errors
              ? data.errors.map(err => err.message).join(', ')
              : 'Something went wrong. Please try again.';
            newsletterBtn.disabled = false;
            newsletterBtn.querySelector('span').textContent = 'Subscribe';
          });
        }
      })
      .catch(() => {
        newsletterStatus.textContent = 'Network error. Please try again.';
        newsletterBtn.disabled = false;
        newsletterBtn.querySelector('span').textContent = 'Subscribe';
      });
    });
  }

})();
