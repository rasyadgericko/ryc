(function() {
  'use strict';

  // Theme, mobile nav, and reveal animations handled by shared utilities (boot.js).

  // ===== FORM PROGRESSIVE DISCLOSURE =====
  const formDetailsToggle = document.getElementById('formDetailsToggle');
  const formDetailsPanel = document.getElementById('formDetails');
  if (formDetailsToggle && formDetailsPanel) {
    formDetailsToggle.addEventListener('click', () => {
      const expanded = formDetailsToggle.getAttribute('aria-expanded') === 'true';
      formDetailsToggle.setAttribute('aria-expanded', !expanded);
      formDetailsPanel.classList.toggle('open');
      formDetailsToggle.querySelector('span:first-child').textContent = expanded ? 'Add project details' : 'Hide project details';
    });
  }

  // ===== BUDGET SLIDER =====
  const budgetRange = document.getElementById('contact-budget');
  const budgetDisplay = document.getElementById('budget-display');
  if (budgetRange && budgetDisplay) {
    budgetRange.addEventListener('input', () => {
      const val = parseInt(budgetRange.value, 10);
      budgetDisplay.textContent = val >= 50000 ? '$50,000+' : '$' + val.toLocaleString();
    });
  }

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    function showFormSuccess() {
      const successEl = document.getElementById('formSuccess');
      successEl.classList.add('is-visible');
      contactForm.style.opacity = '0';
      contactForm.style.pointerEvents = 'none';

      setTimeout(() => {
        successEl.classList.remove('is-visible');
        contactForm.reset();
        contactForm.style.opacity = '';
        contactForm.style.pointerEvents = '';
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message &#8594;';
        formStatus.textContent = '';

        const formDetails = document.getElementById('formDetails');
        const toggle = document.getElementById('formDetailsToggle');
        if (formDetails && formDetails.classList.contains('open')) {
          formDetails.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.querySelector('span:first-child').textContent = 'Add project details';
        }
      }, 4000);
    }

    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');

      if (!name.value.trim()) { name.focus(); return; }
      if (!email.value.trim() || !email.validity.valid) { email.focus(); return; }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      formStatus.textContent = '';

      fetch('https://formspree.io/f/xreadpyb', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm)
      })
      .then(res => {
        if (res.ok) {
          showFormSuccess();
        } else {
          return res.json().then(data => {
            formStatus.textContent = data.errors
              ? data.errors.map(err => err.message).join(', ')
              : 'Something went wrong. Please try again.';
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message &#8594;';
          });
        }
      })
      .catch(() => {
        formStatus.textContent = 'Network error. Please try again.';
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message &#8594;';
      });
    });
  }

})();
