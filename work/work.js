/* ===== WORK PAGE — RYC ===== */
(function() {
  'use strict';

  // Theme + fade-up/reveal-text handled by shared utilities (boot.js).

  /* ── Card reveal observer (stagger effect for dynamically loaded cards) ── */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    window._workRevealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); window._workRevealObs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }

  /* ── Fetch from Supabase & build grid ───────────────────────── */
  async function loadProjects() {
    const grid = document.getElementById('workGrid');
    if (!grid || !window.supabase) return;

    const sb = window.RYC.sb;
    if (!sb) return;

    const { data: works, error } = await sb
      .from('works')
      .select('num, cat, title, description, metrics, color, display_url, link, image_url')
      .eq('active', true)
      .order('sort_order');

    if (error || !works?.length) return;

    const arrowSVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';

    works.forEach((w, i) => {
      const slug = window.RYC.toSlug(w.title);
      const isExternal = w.link.startsWith('http');
      const overlayLabel = isExternal ? 'Visit live site' : 'View project';

      const screen = w.image_url
        ? `<img src="${w.image_url}" alt="${w.title} screenshot" width="480" height="300" loading="${i === 0 ? 'eager' : 'lazy'}">`
        : (window.RYC.MOCK[slug] || '');

      const card = document.createElement('a');
      card.className = 'work-card' + (i === 0 ? ' featured' : '');
      card.setAttribute('role', 'listitem');
      card.href = w.link;
      if (isExternal) {
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
      }

      card.innerHTML = `
        <div class="work-card-browser">
          <div class="work-card-bar">
            <div class="work-card-dots"><i></i><i></i><i></i></div>
            <div class="work-card-url">${w.display_url}</div>
          </div>
          <div class="work-card-screen">
            ${screen}
            <div class="work-card-overlay" aria-hidden="true">
              <span class="work-card-overlay-pill">${overlayLabel} ${arrowSVG}</span>
            </div>
          </div>
        </div>
        <div class="work-card-body">
          <div class="work-card-cat">${w.cat}</div>
          <div class="work-card-title">${w.title}</div>
          <div class="work-card-desc">${w.description}</div>
          <div class="work-card-metrics">
            ${w.metrics.map(m => `<span class="work-card-metric">${m}</span>`).join('')}
          </div>
        </div>`;
      grid.appendChild(card);
    });

    // "Your Project" placeholder
    const ph = document.createElement('div');
    ph.className = 'work-card-placeholder';
    ph.setAttribute('role', 'listitem');
    ph.setAttribute('tabindex', '0');
    ph.addEventListener('click', () => { window.location.href = '/contact.html'; });
    ph.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.location.href = '/contact.html'; }
    });
    ph.innerHTML = `
      <div class="work-card-placeholder-icon" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="6" y="6" width="36" height="36" rx="8"/>
          <line x1="24" y1="16" x2="24" y2="32"/>
          <line x1="16" y1="24" x2="32" y2="24"/>
        </svg>
      </div>
      <div class="work-card-placeholder-title">Your project here</div>
      <div class="work-card-placeholder-sub">This spot is reserved for you.</div>`;
    grid.appendChild(ph);

    // Observe cards for staggered reveal
    if (window._workRevealObs) {
      grid.querySelectorAll('.work-card, .work-card-placeholder').forEach((card, idx) => {
        card.style.transitionDelay = `${idx * 0.08}s`;
        window._workRevealObs.observe(card);
      });
    } else {
      // Reduced motion — show immediately
      grid.querySelectorAll('.work-card, .work-card-placeholder').forEach(c => c.classList.add('visible'));
    }
  }

  // Wait for Supabase SDK to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProjects);
  } else {
    loadProjects();
  }
})();
