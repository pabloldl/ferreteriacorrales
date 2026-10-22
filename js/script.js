'use strict';
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const copyButton = document.querySelector('#copy-phone');
const status = document.querySelector('#copy-status');
const manual = document.querySelector('#manual-copy');
const phoneInput = document.querySelector('#phone-value');
if (copyButton) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText('956716358');
        copied = true;
      }
    } catch { /* Use the selectable fallback below. */ }
    if (!copied) {
      manual.hidden = false;
      phoneInput.focus();
      phoneInput.select();
      phoneInput.setSelectionRange(0, phoneInput.value.length);
      try { copied = document.execCommand('copy'); } catch { copied = false; }
    }
    if (copied) {
      manual.hidden = true;
      copyButton.focus({ preventScroll: true });
      status.textContent = 'Teléfono copiado: 956 716 358.';
    } else {
      status.textContent = 'Selecciona el número y cópialo con el menú de tu dispositivo o con Ctrl/Cmd + C.';
    }
  });
}
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const targets = document.querySelectorAll('.mechanical-reveal, .bench-surface');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('awaiting', 'pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(target => {
    target.classList.add(target.matches('.bench-surface') ? 'pending' : 'awaiting');
    observer.observe(target);
  });
  motionPreference.addEventListener('change', event => {
    if (event.matches) {
      targets.forEach(target => target.classList.remove('awaiting', 'pending'));
      observer.disconnect();
    }
  });
}
