/* ═══════════════════════════════════════════════════════════════
   BCN ENCUENTRO PRENUPCIAL — Main JS
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── FLOATING NAV ── */
const fnav       = document.getElementById('fnav');
const scrollTop  = document.getElementById('scrollTop');
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.fnav-links a');

function onScroll() {
  const y = window.scrollY;

  /* Show / hide nav after 80vh */
  if (fnav) {
    fnav.classList.toggle('visible', y > window.innerHeight * 0.8);
  }

  /* Show / hide scroll-to-top */
  if (scrollTop) {
    scrollTop.classList.toggle('visible', y > 400);
  }

  /* Active section highlight in nav */
  let current = '';
  sections.forEach(sec => {
    if (y >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });

  /* Subtle parallax on cover photo */
  const coverPhoto = document.querySelector('.cover-photo');
  if (coverPhoto && y < window.innerHeight) {
    coverPhoto.style.transform = `translateY(${y * 0.3}px)`;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run on load

/* ── SCROLL TO TOP ── */
if (scrollTop) {
  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── INTERSECTION OBSERVER — fade-in sections ── */
const observerOpts = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOpts);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── SMOOTH SCROLL for all anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = fnav ? 60 : 0;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});

/* ── MOBILE NAV TOGGLE ── */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu    = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileMenuBtn.setAttribute(
      'aria-expanded',
      mobileMenu.classList.contains('open')
    );
  });
}

/* ── IMAGE LAZY LOAD FALLBACK (for browsers without native lazy) ── */
if ('loading' in HTMLImageElement.prototype === false) {
  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src || img.src;
        imgObserver.unobserve(img);
      }
    });
  });
  lazyImgs.forEach(img => imgObserver.observe(img));
}

/* ── PRINT HELPER ── */
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('.act-card, .prov-card').forEach(card => {
    card.style.height = 'auto';
  });
});
