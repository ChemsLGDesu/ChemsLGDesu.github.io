/* =========================================================
   James Goñe — Portfolio
   Vanilla JS: header, menu, scrollspy, reveal, filters.
   ========================================================= */

(function () {
  'use strict';

  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = Array.from(document.querySelectorAll('.nav__link'));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Header on scroll ─────────────────────────────────── */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    updateActiveLink();
  }

  /* ── Active nav link (scrollspy) ──────────────────────── */
  function updateActiveLink() {
    const marker = header.offsetHeight + window.innerHeight * 0.28;
    let current = sections[0];

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) current = section;
    }

    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    if (window.scrollY < 10) current = sections[0];
    else if (atBottom) current = sections[sections.length - 1];

    navLinks.forEach(link => {
      link.classList.toggle(
        'is-active',
        current && link.getAttribute('href') === '#' + current.id
      );
    });
  }

  /* ── Mobile menu ──────────────────────────────────────── */
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }

  menuToggle.addEventListener('click', () => {
    setMenu(!nav.classList.contains('is-open'));
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) setMenu(false);
  });

  /* ── Reveal on scroll ─────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ── Project filters ──────────────────────────────────── */
  const filters = Array.from(document.querySelectorAll('.filter'));
  const projects = Array.from(document.querySelectorAll('.project'));

  filters.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.filter;

      filters.forEach(btn => {
        const active = btn === button;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });

      projects.forEach(project => {
        const show = value === 'all' || project.dataset.status === value;
        project.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ── Footer year ──────────────────────────────────────── */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ── Init ─────────────────────────────────────────────── */
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
