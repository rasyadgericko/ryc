// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Fade-in observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Schedule day toggle
document.querySelectorAll('.schedule-day').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.schedule-day').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
