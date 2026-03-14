/* ===== BLOG-POST.JS — Shared TOC + Share Logic =====
   Loaded per-page on blog posts (not via boot.js).
   Requires: .prose, #tocNav, share button IDs in DOM.
   ================================================= */

(function () {
  // ===== TABLE OF CONTENTS =====
  var prose = document.querySelector('.prose');
  var tocNav = document.getElementById('tocNav');
  if (prose && tocNav) {
    var headings = prose.querySelectorAll('h2');
    headings.forEach(function (h, i) {
      if (!h.id) h.id = 'section-' + i;
      var a = document.createElement('a');
      a.className = 'toc-link';
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      tocNav.appendChild(a);
    });
    if (headings.length === 0 && tocNav.closest('.toc-box')) {
      tocNav.closest('.toc-box').style.display = 'none';
    }
    var tocLinks = tocNav.querySelectorAll('.toc-link');
    var headingObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          tocLinks.forEach(function (l) { l.classList.remove('active'); });
          var active = tocNav.querySelector('[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-80px 0px -40% 0px' });
    headings.forEach(function (h) { headingObserver.observe(h); });
  }

  // ===== SHARE =====
  var pageUrl = encodeURIComponent(window.location.href);
  var pageTitle = encodeURIComponent(document.title.replace(' — RYC Insights', ''));
  var tw = document.getElementById('shareTwitter');
  var li = document.getElementById('shareLinkedIn');
  var fb = document.getElementById('shareFacebook');
  var cp = document.getElementById('copyLink');

  if (tw) tw.href = 'https://twitter.com/intent/tweet?text=' + pageTitle + '&url=' + pageUrl + '&via=rycworks';
  if (li) li.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + pageUrl;
  if (fb) fb.href = 'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl;
  if (cp) cp.addEventListener('click', function () {
    navigator.clipboard.writeText(window.location.href).then(function () {
      cp.classList.add('copied');
      setTimeout(function () { cp.classList.remove('copied'); }, 2000);
    });
  });
})();
