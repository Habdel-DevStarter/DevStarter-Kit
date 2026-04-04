/**
 * DEVSTARTER KIT — Main
 * main.js — Initialisation globale de l'application
 */

/* --- Module Toast --- */
const Toast = (() => {
  let container;

  function _getContainer() {
    if (!container) {
      container = document.getElementById('toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
      }
    }
    return container;
  }

  function show(message, type = 'info', duration = 3000) {
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const c     = _getContainer();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <span class="toast__icon">${icons[type] || icons.info}</span>
      <span class="toast__msg">${message}</span>
    `;

    c.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      toast.addEventListener('animationend', () => toast.remove());
    }, duration);
  }

  return { show };
})();

/* --- Navbar scroll --- */
function initNavbar() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Marquer lien actif
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav__link, .mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === './')) {
      link.classList.add('active');
    }
    if (href && href !== '#' && currentPage.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    }
  });
}

/* --- Mobile menu --- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu      = document.querySelector('.mobile-menu');
  const overlay   = document.querySelector('.mobile-overlay');

  if (!hamburger || !menu) return;

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    overlay?.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    overlay?.classList.remove('show');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* --- Scroll to top --- */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- Page loader --- */
function initPageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  if (document.readyState === 'complete') {
    setTimeout(() => loader.classList.add('loaded'), 300);
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('loaded'), 300);
    });
  }
}

/* --- Reveal on scroll --- */
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* --- Tabs --- */
function initTabs() {
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('[data-tab]');
    if (!tab) return;

    const target = tab.dataset.tab;
    const group  = tab.closest('[data-tab-group]') || tab.closest('.tabs, .template-item');
    if (!group) return;

    // Désactiver tous les onglets/contenus du groupe
    group.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('active'));
    group.querySelectorAll('[data-tab-content]').forEach(c => c.classList.remove('active'));
    // Aussi chercher dans le parent
    const parent = group.closest('.template-item') || group.parentElement;
    if (parent) {
      parent.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('active'));
      parent.querySelectorAll('[data-tab-content]').forEach(c => c.classList.remove('active'));
    }

    tab.classList.add('active');
    const content = document.querySelector(`[data-tab-content="${target}"]`) ||
                    group.querySelector(`[data-tab-content="${target}"]`) ||
                    (parent && parent.querySelector(`[data-tab-content="${target}"]`));
    if (content) content.classList.add('active');
  });
}

/* --- Accordion --- */
function initAccordion() {
  document.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header');
    if (!header) return;

    const item = header.closest('.accordion-item');
    const body = item?.querySelector('.accordion-body');
    if (!body) return;

    const isOpen = body.classList.contains('open');
    body.classList.toggle('open', !isOpen);
    header.querySelector('.accordion-icon')?.setAttribute('style', isOpen ? '' : 'transform:rotate(180deg)');
  });
}

/* --- Counter animation --- */
function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseInt(el.dataset.counter, 10);
    const suffix = el.dataset.suffix || '';
    let current  = 0;
    const step   = target / 60;

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.unobserve(el);

      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 16);
    }, { threshold: .5 });

    obs.observe(el);
  });
}

/* --- Init globale --- */
document.addEventListener('DOMContentLoaded', () => {
  DarkMode.init();
  initPageLoader();
  initNavbar();
  initMobileMenu();
  initScrollTop();
  initReveal();
  initTabs();
  initAccordion();
  animateCounters();
  Copy.initCopyButtons();
  Copy.initRipple();
});

// Export global
window.Toast = Toast;
