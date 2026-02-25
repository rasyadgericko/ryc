// ===== REDUCED MOTION CHECK =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== LOADER =====
const loaderEl = document.getElementById('loader');
const countEl = document.getElementById('loaderCount');
let count = 0;

if (prefersReducedMotion) {
  loaderEl.style.display = 'none';
} else {
  const ci = setInterval(() => {
    count += Math.floor(Math.random() * 8) + 2;
    if (count >= 100) { count = 100; clearInterval(ci); }
    countEl.textContent = count;
    if (count === 100) {
      setTimeout(() => loaderEl.classList.add('done'), 400);
      setTimeout(() => { loaderEl.style.display = 'none'; }, 1600);
    }
  }, 50);
}

// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice && window.innerWidth > 768) {
  let cx = 0, cy = 0, tx = 0, ty = 0;
  let isOnGrid = false;
  let lastCX = -1, lastCY = -1;
  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });

  (function animateCursor() {
    if (isOnGrid) {
      // Snap to exact mouse position — no lag so cursor matches grid highlight speed
      cx = tx; cy = ty;
    } else {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
    }
    // Only write to DOM when position has meaningfully changed — avoids redundant style recalcs
    const rx = cx | 0, ry = cy | 0;
    if (rx !== lastCX || ry !== lastCY) {
      cursor.style.left = rx + 'px';
      cursor.style.top = ry + 'px';
      lastCX = rx; lastCY = ry;
    }
    requestAnimationFrame(animateCursor);
  })();

  document.querySelectorAll('a, button, .service-row, .case-card, .test-card, input, textarea, .faq-q').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
  });

  // Eye cursor on the animated grid
  const aboutWrap = document.querySelector('.about-visual-wrap');
  if (aboutWrap) {
    aboutWrap.addEventListener('mouseenter', () => {
      isOnGrid = true;
      cursor.classList.remove('expand');
      cursor.classList.add('on-grid');
    });
    aboutWrap.addEventListener('mouseleave', () => {
      isOnGrid = false;
      cursor.classList.remove('on-grid');
    });
  }
} else {
  cursor.style.display = 'none';
  document.body.style.cursor = 'auto';
}

// ===== THEME =====
const themeToggles = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')].filter(Boolean);
const htmlEl = document.documentElement;

function updateThemeUI(theme) {
  const icon = theme === 'dark' ? '&#9681;' : '&#9680;';
  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  themeToggles.forEach(t => { t.innerHTML = icon; t.setAttribute('aria-label', label); });
}

// Restore saved theme — default to dark on first visit
const savedTheme = localStorage.getItem('ryc-theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);
updateThemeUI(savedTheme);

themeToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const isLight = htmlEl.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', newTheme);
    updateThemeUI(newTheme);
    localStorage.setItem('ryc-theme', newTheme);
  });
});

// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

navToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  navToggle.classList.toggle('active', menuOpen);
  navToggle.setAttribute('aria-expanded', String(menuOpen));
  navToggle.setAttribute('aria-label', menuOpen ? 'Close navigation menu' : 'Open navigation menu');
  mobileMenu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
});

// Close menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuOpen) {
    menuOpen = false;
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    navToggle.focus();
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const t = document.querySelector(href);
    if (t) {
      t.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      t.setAttribute('tabindex', '-1');
      t.focus({ preventScroll: true });
    }
  });
});

// ===== REVEALS =====
if (!prefersReducedMotion) {
  const ro = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal-text, .fade-up').forEach(el => ro.observe(el));
} else {
  document.querySelectorAll('.reveal-text, .fade-up').forEach(el => el.classList.add('visible'));
}


// ===== LOGOS STRIP REVEAL =====
const logosStrip = document.querySelector('.logos-strip');
if (logosStrip) {
  const logosObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        logosObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  logosObs.observe(logosStrip);
}

// ===== HERO WAVES =====
(function initHeroWaves() {
  const canvas = document.getElementById('heroWaves');
  if (!canvas) return;

  const hero = canvas.closest('.hero');
  const ctx = canvas.getContext('2d');
  let width = 0, height = 0, dpr = 1;
  let mouseX = -9999, mouseY = -9999;
  let targetMouseX = -9999, targetMouseY = -9999;
  let animId = null;
  let t = 0;
  // Cache rect — updated on resize, avoids forced reflow on every mousemove
  let heroRect = { left: 0, top: 0 };
  // Cache color string — avoids DOM read every animation frame
  let cachedWaveColor = getColor();
  themeToggles.forEach(btn => btn.addEventListener('click', () => { cachedWaveColor = getColor(); }));

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = hero.offsetWidth;
    height = hero.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    heroRect = hero.getBoundingClientRect();
  }

  hero.addEventListener('mousemove', e => {
    targetMouseX = e.clientX - heroRect.left;
    targetMouseY = e.clientY - heroRect.top;
  });
  hero.addEventListener('mouseleave', () => {
    targetMouseX = -9999;
    targetMouseY = -9999;
  });

  function getColor() {
    return document.documentElement.getAttribute('data-theme') === 'dark'
      ? '255,255,255' : '0,0,0';
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Ease mouse toward target
    if (targetMouseX > -1000) {
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;
    } else {
      mouseX = -9999;
      mouseY = -9999;
    }

    const color = cachedWaveColor;
    const NUM_WAVES = 8;

    for (let i = 0; i < NUM_WAVES; i++) {
      const progress = i / (NUM_WAVES - 1);
      const baseY = height * (0.12 + progress * 0.78);
      const amp = 20 + (1 - Math.abs(progress - 0.5) * 2) * 18;
      const freq = 0.0055 + i * 0.0004;
      const speed = 0.28 + i * 0.055;
      const phase = t * speed + i * 1.2;
      const alpha = 0.035 + (1 - Math.abs(progress - 0.5) * 2) * 0.045;

      ctx.beginPath();
      let first = true;
      for (let x = 0; x <= width; x += 6) {
        const baseWave = baseY + Math.sin(x * freq + phase) * amp;
        let dy = 0;
        if (mouseX > -1000) {
          const dx = x - mouseX;
          const distY = baseWave - mouseY;
          const dist = Math.sqrt(dx * dx + distY * distY);
          const rippleR = 200;
          if (dist < rippleR) {
            const influence = 1 - dist / rippleR;
            dy = influence * influence * 50 * Math.sin(dist * 0.045 - t * 3.5);
          }
        }
        const y = baseWave + dy;
        if (first) { ctx.moveTo(x, y); first = false; }
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = 'rgba(' + color + ',' + alpha + ')';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    t += 0.012;
    animId = requestAnimationFrame(draw);
  }

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(resize).observe(hero);
  } else {
    window.addEventListener('resize', resize);
  }
  resize();

  if (!prefersReducedMotion) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animId) animId = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(animId);
          animId = null;
        }
      });
    }, { threshold: 0.05 });
    obs.observe(hero);
  }
})();

// ===== MAGNETIC BUTTONS =====
if (!isTouchDevice && !prefersReducedMotion) {
  document.querySelectorAll('.mag-btn').forEach(b => {
    b.addEventListener('mousemove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = 'translate(' + ((e.clientX - r.left - r.width/2) * 0.2) + 'px, ' + ((e.clientY - r.top - r.height/2) * 0.2) + 'px)';
    });
    b.addEventListener('mouseleave', () => { b.style.transform = ''; });
  });
}

// ===== TILT CARDS =====
if (!isTouchDevice && !prefersReducedMotion) {
  document.querySelectorAll('.work-card').forEach(c => {
    c.addEventListener('mousemove', e => {
      const r = c.getBoundingClientRect();
      const xPct = (e.clientX - r.left) / r.width - 0.5;
      const yPct = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = 'perspective(800px) rotateY(' + (xPct * 6) + 'deg) rotateX(' + (-yPct * 6) + 'deg)';
    });
    c.addEventListener('mouseleave', () => { c.style.transform = ''; c.style.transition = 'transform 0.5s ease'; });
    c.addEventListener('mouseenter', () => { c.style.transition = 'none'; });
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('contact-name');
  const email = document.getElementById('contact-email');

  if (!name.value.trim()) { name.focus(); return; }
  if (!email.value.trim() || !email.validity.valid) { email.focus(); return; }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  setTimeout(() => {
    submitBtn.textContent = 'Sent \u2713';
    formStatus.textContent = 'Thank you! We\'ll be in touch within 24 hours.';
    setTimeout(() => {
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message &#8594;';
      formStatus.textContent = '';
    }, 3000);
  }, 1000);
});

// ===== ABOUT VISUAL =====
(function initAboutVisual() {
  const canvas = document.getElementById('aboutVisual');
  const wrap = canvas && canvas.closest('.about-visual-wrap');
  if (!canvas || !wrap) return;

  let width = 0, height = 0, ctx = null;
  const CELL = 50;
  let mouseX = -9999, mouseY = -9999;
  let isHovering = false;
  let animId = null;

  // Animated squares — same concept as AnimatedGridPattern (random fade-in/out)
  const NUM_SQUARES = 15;
  const MAX_OPACITY = 0.13;
  const FADE_DURATION = 2800; // ms per full fade-in → fade-out cycle
  let squares = [];

  function resize() {
    const rect = wrap.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    initSquares(performance.now());
  }

  function randomPos() {
    const maxCol = Math.max(1, Math.floor(width / CELL));
    const maxRow = Math.max(1, Math.floor(height / CELL));
    return [Math.floor(Math.random() * maxCol), Math.floor(Math.random() * maxRow)];
  }

  function initSquares(now) {
    squares = Array.from({ length: NUM_SQUARES }, (_, i) => {
      const [col, row] = randomPos();
      return { id: i, col, row, startTime: now + Math.random() * FADE_DURATION };
    });
  }

  function getColor() {
    return document.documentElement.getAttribute('data-theme') === 'dark'
      ? [241, 241, 241] : [22, 22, 22];
  }

  // Use canvas.getBoundingClientRect() for pixel-precise coords (avoids border offset)
  wrap.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    isHovering = true;
  });
  wrap.addEventListener('mouseleave', () => {
    isHovering = false;
    mouseX = -9999;
    mouseY = -9999;
  });

  function draw(now) {
    if (!ctx) { animId = requestAnimationFrame(draw); return; }
    ctx.clearRect(0, 0, width, height);
    const [ri, gi, bi] = getColor();
    const rgb = `${ri},${gi},${bi}`;

    const cols = Math.floor(width / CELL);
    const rows = Math.floor(height / CELL);
    const hCol = Math.floor(mouseX / CELL);
    const hRow = Math.floor(mouseY / CELL);
    const R = 2; // bounded cell-check radius around cursor

    // --- Auto-animated squares (fade in → fade out → reposition, like AnimatedGridPattern) ---
    for (const sq of squares) {
      const elapsed = now - sq.startTime;
      const half = FADE_DURATION / 2;
      let opacity = 0;
      if (elapsed >= 0 && elapsed < half) {
        opacity = (elapsed / half) * MAX_OPACITY;
      } else if (elapsed >= half && elapsed < FADE_DURATION) {
        opacity = ((FADE_DURATION - elapsed) / half) * MAX_OPACITY;
      } else if (elapsed >= FADE_DURATION) {
        const [c, r] = randomPos();
        sq.col = c; sq.row = r;
        sq.startTime = now + Math.random() * 400;
        opacity = 0;
      }
      if (opacity > 0.004) {
        ctx.fillStyle = `rgba(${rgb},${opacity})`;
        ctx.fillRect(sq.col * CELL + 1, sq.row * CELL + 1, CELL - 1, CELL - 1);
      }
    }

    // --- Cursor proximity fills — only ±R cells around cursor, not entire grid ---
    if (isHovering) {
      for (let dc = -R; dc <= R; dc++) {
        for (let dr = -R; dr <= R; dr++) {
          const col = hCol + dc;
          const row = hRow + dr;
          if (col < 0 || row < 0 || col >= cols || row >= rows) continue;
          const cx = col * CELL + CELL / 2;
          const cy = row * CELL + CELL / 2;
          const dist = Math.sqrt((cx - mouseX) ** 2 + (cy - mouseY) ** 2);
          const influence = Math.max(0, 1 - dist / (CELL * 2.2));
          if (influence > 0.01) {
            ctx.fillStyle = `rgba(${rgb},${influence * 0.22})`;
            ctx.fillRect(col * CELL + 1, row * CELL + 1, CELL - 1, CELL - 1);
          }
        }
      }
    }

    // --- Grid lines with cursor column/row brightness ---
    ctx.lineWidth = 1;
    for (let col = 0; col <= cols; col++) {
      const x = col * CELL;
      let extra = 0;
      if (isHovering) {
        const t = Math.max(0, 1 - Math.abs(x - mouseX) / (CELL * 2));
        extra = t * t * 0.45;
      }
      ctx.strokeStyle = `rgba(${rgb},${0.09 + extra})`;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let row = 0; row <= rows; row++) {
      const y = row * CELL;
      let extra = 0;
      if (isHovering) {
        const t = Math.max(0, 1 - Math.abs(y - mouseY) / (CELL * 2));
        extra = t * t * 0.45;
      }
      ctx.strokeStyle = `rgba(${rgb},${0.09 + extra})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // --- Intersection dots near cursor — bounded to ±R intersections ---
    if (isHovering) {
      for (let dc = -R; dc <= R + 1; dc++) {
        for (let dr = -R; dr <= R + 1; dr++) {
          const x = (hCol + dc) * CELL;
          const y = (hRow + dr) * CELL;
          const dist = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
          const influence = Math.max(0, 1 - dist / (CELL * 2));
          if (influence > 0.01) {
            ctx.beginPath();
            ctx.arc(x, y, 2.5 * influence, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgb},${influence * 0.9})`;
            ctx.fill();
          }
        }
      }
    }

    animId = requestAnimationFrame(draw);
  }

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
  }
  resize();

  if (!prefersReducedMotion) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animId) animId = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(animId);
          animId = null;
        }
      });
    }, { threshold: 0.05 });
    obs.observe(wrap);
  }
})();

// ===== CTA GLOBE (D3 Dotted Wireframe) =====
(function initGlobe() {
  const canvas = document.getElementById('ctaGlobe');
  if (!canvas) return;

  // Lazy-load D3 only when globe scrolls into view — avoids blocking ~550 KB parse on startup
  let booted = false;
  const triggerObs = new IntersectionObserver(entries => {
    if (!booted && entries[0].isIntersecting) {
      booted = true;
      triggerObs.disconnect();
      if (typeof d3 !== 'undefined') {
        boot();
      } else {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js';
        s.onload = boot;
        document.head.appendChild(s);
      }
    }
  }, { threshold: 0.05 });
  triggerObs.observe(canvas);

  function boot() {
    const wrap = canvas.closest('.cta-globe');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = wrap ? Math.min(wrap.offsetWidth, 520) : 520;
    const baseRadius = size * 0.44;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;

    const projection = d3.geoOrthographic()
      .scale(baseRadius)
      .translate([cx, cy])
      .clipAngle(90);

    const pathGen = d3.geoPath().projection(projection).context(ctx);
    const graticule = d3.geoGraticule()();

    const rotation = [0, -20];
    let autoRotate = true;
    let animId = null;
    let landFeatures = null;
    const allDots = []; // each entry is a pre-allocated [lng, lat] array

    // Cache colors per theme — recomputed only when theme toggles
    let cachedColors = null;
    function getColors() {
      return cachedColors || (cachedColors = computeColors());
    }
    function computeColors() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return {
        outline:    isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.55)',
        graticule:  isDark ? 'rgba(255,255,255,0.1)'  : 'rgba(0,0,0,0.08)',
        landFill:   isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
        landStroke: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.35)',
        dots:       isDark ? 'rgba(180,180,180,0.8)'  : 'rgba(60,60,60,0.65)',
      };
    }
    themeToggles.forEach(btn => btn.addEventListener('click', () => { cachedColors = null; }));

    // --- Point-in-polygon helpers ---
    function pointInRing(point, ring) {
      let inside = false;
      const [px, py] = point;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i], [xj, yj] = ring[j];
        if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) {
          inside = !inside;
        }
      }
      return inside;
    }

    function pointInFeature(pt, feature) {
      const geo = feature.geometry;
      if (geo.type === 'Polygon') {
        if (!pointInRing(pt, geo.coordinates[0])) return false;
        for (let i = 1; i < geo.coordinates.length; i++) {
          if (pointInRing(pt, geo.coordinates[i])) return false;
        }
        return true;
      }
      if (geo.type === 'MultiPolygon') {
        for (const poly of geo.coordinates) {
          if (pointInRing(pt, poly[0])) {
            let inHole = false;
            for (let i = 1; i < poly.length; i++) {
              if (pointInRing(pt, poly[i])) { inHole = true; break; }
            }
            if (!inHole) return true;
          }
        }
      }
      return false;
    }

    function generateDots(feature) {
      const dots = [];
      const [[minLng, minLat], [maxLng, maxLat]] = d3.geoBounds(feature);
      const step = 16 * 0.08;
      for (let lng = minLng; lng <= maxLng; lng += step) {
        for (let lat = minLat; lat <= maxLat; lat += step) {
          // Store as pre-allocated array to avoid per-frame heap allocations
          if (pointInFeature([lng, lat], feature)) dots.push([lng, lat]);
        }
      }
      return dots;
    }

    // --- Render ---
    function render() {
      ctx.clearRect(0, 0, size, size);
      const c = getColors();
      const sc = projection.scale();
      const sf = sc / baseRadius;

      // Globe outline
      ctx.beginPath();
      ctx.arc(cx, cy, sc, 0, Math.PI * 2);
      ctx.strokeStyle = c.outline;
      ctx.lineWidth = 1.5 * sf;
      ctx.stroke();

      if (!landFeatures) return;

      // Graticule
      ctx.beginPath();
      pathGen(graticule);
      ctx.strokeStyle = c.graticule;
      ctx.lineWidth = 0.7 * sf;
      ctx.stroke();

      // Land — single path pass for both fill and stroke (avoids double pathGen traversal)
      ctx.beginPath();
      landFeatures.features.forEach(f => pathGen(f));
      ctx.fillStyle = c.landFill;
      ctx.fill();
      ctx.strokeStyle = c.landStroke;
      ctx.lineWidth = 0.8 * sf;
      ctx.stroke();

      // Halftone dots — only front hemisphere, using pre-allocated coord arrays
      const rot = projection.rotate();
      const center = [-rot[0], -rot[1]];
      allDots.forEach(coord => {
        if (d3.geoDistance(coord, center) > Math.PI / 2) return;
        const proj = projection(coord);
        if (!proj) return;
        ctx.beginPath();
        ctx.arc(proj[0], proj[1], 1.1 * sf, 0, Math.PI * 2);
        ctx.fillStyle = c.dots;
        ctx.fill();
      });
    }

    // --- Interaction: drag to rotate ---
    let isDragging = false;
    let dragStart = null;
    let rotStart = null;

    canvas.addEventListener('mousedown', e => {
      isDragging = true;
      autoRotate = false;
      dragStart = [e.clientX, e.clientY];
      rotStart = [...rotation];
      canvas.style.cursor = 'grabbing';
    });
    document.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart[0];
      const dy = e.clientY - dragStart[1];
      rotation[0] = rotStart[0] + dx * 0.5;
      rotation[1] = Math.max(-90, Math.min(90, rotStart[1] - dy * 0.5));
      projection.rotate(rotation);
      render();
    });
    document.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      canvas.style.cursor = 'grab';
      setTimeout(() => { autoRotate = true; }, 200);
    });

    // --- Interaction: scroll to zoom ---
    canvas.addEventListener('wheel', e => {
      e.preventDefault();
      const factor = e.deltaY > 0 ? 0.9 : 1.1;
      const newR = Math.max(baseRadius * 0.5, Math.min(baseRadius * 3, projection.scale() * factor));
      projection.scale(newR);
      render();
    }, { passive: false });

    // --- Touch support ---
    let touchStart = null, touchRotStart = null;
    canvas.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        touchStart = [e.touches[0].clientX, e.touches[0].clientY];
        touchRotStart = [...rotation];
        autoRotate = false;
      }
    }, { passive: true });
    canvas.addEventListener('touchmove', e => {
      if (e.touches.length === 1 && touchStart) {
        const dx = e.touches[0].clientX - touchStart[0];
        const dy = e.touches[0].clientY - touchStart[1];
        rotation[0] = touchRotStart[0] + dx * 0.5;
        rotation[1] = Math.max(-90, Math.min(90, touchRotStart[1] - dy * 0.5));
        projection.rotate(rotation);
        render();
      }
    }, { passive: true });
    canvas.addEventListener('touchend', () => {
      setTimeout(() => { autoRotate = true; }, 500);
    }, { passive: true });

    // --- Load GeoJSON — generate dots in idle chunks to avoid long tasks ---
    fetch('https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json')
      .then(r => r.json())
      .then(data => {
        landFeatures = data;
        const features = data.features;
        if (typeof requestIdleCallback === 'function') {
          let fi = 0;
          function processChunk(deadline) {
            while (fi < features.length && deadline.timeRemaining() > 2) {
              generateDots(features[fi++]).forEach(d => allDots.push(d));
            }
            if (fi < features.length) requestIdleCallback(processChunk);
            else render();
          }
          requestIdleCallback(processChunk);
        } else {
          features.forEach(f => generateDots(f).forEach(d => allDots.push(d)));
          render();
        }
      });

    // --- Animation loop ---
    function animate() {
      if (autoRotate && !prefersReducedMotion) {
        rotation[0] += 0.25;
        projection.rotate(rotation);
        render();
      }
      animId = requestAnimationFrame(animate);
    }

    // Only animate when visible
    if (!prefersReducedMotion) {
      const animObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!animId) animId = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(animId);
            animId = null;
          }
        });
      }, { threshold: 0.05 });
      animObs.observe(canvas);
    } else {
      render();
    }
  }
})();

// ===== KEYBOARD SUPPORT FOR SERVICE ROWS =====
document.querySelectorAll('.service-row[tabindex="0"]').forEach(row => {
  row.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      row.click();
    }
  });
});

// ===== STAT COUNTER ANIMATION =====
function animateCounter(el, target, duration) {
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const statsStrip = document.querySelector('.stats-strip');
if (statsStrip) {
  const statNums = statsStrip.querySelectorAll('.stat-number[data-target]');
  if (!prefersReducedMotion) {
    const statsObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNums.forEach(el => animateCounter(el, parseInt(el.dataset.target), 1800));
          statsObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    statsObs.observe(statsStrip);
  } else {
    statNums.forEach(el => { el.textContent = el.dataset.target; });
  }
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const answer = btn.nextElementSibling;

    // Close all other items
    document.querySelectorAll('.faq-q').forEach(other => {
      if (other !== btn) {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.classList.remove('open');
      }
    });

    btn.setAttribute('aria-expanded', String(!isExpanded));
    answer.classList.toggle('open', !isExpanded);
  });
});