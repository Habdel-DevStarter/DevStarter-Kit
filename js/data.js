/**
 * DEVSTARTER KIT — Données des templates
 * data.js — Catalogue centralisé
 */

const TEMPLATES_DATA = {
  navbars: [
    {
      id: 'navbar-simple',
      title: 'Navbar Simple',
      description: 'Navigation horizontale épurée avec logo et liens.',
      level: 'beginner',
      tags: ['HTML', 'CSS'],
      html: `<nav class="navbar-simple">
  <div class="navbar-simple__inner">
    <a href="#" class="navbar-simple__logo">MonSite</a>
    <ul class="navbar-simple__menu">
      <li><a href="#">Accueil</a></li>
      <li><a href="#">À propos</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>`,
      css: `.navbar-simple {
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
}

.navbar-simple__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-simple__logo {
  font-size: 1.25rem;
  font-weight: 800;
  color: #6C63FF;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.navbar-simple__menu {
  display: flex;
  list-style: none;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.navbar-simple__menu a {
  padding: 8px 16px;
  border-radius: 999px;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.navbar-simple__menu a:hover {
  color: #6C63FF;
  background: rgba(108, 99, 255, 0.08);
}`
    },
    {
      id: 'navbar-centered',
      title: 'Navbar Centrée',
      description: 'Logo centré avec liens des deux côtés. Idéale pour les marques premium.',
      level: 'beginner',
      tags: ['HTML', 'CSS'],
      html: `<nav class="navbar-centered">
  <div class="navbar-centered__inner">
    <ul class="navbar-centered__left">
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
    <a href="#" class="navbar-centered__logo">Brand</a>
    <ul class="navbar-centered__right">
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>`,
      css: `.navbar-centered {
  background: #0D0D1A;
  padding: 20px 0;
}

.navbar-centered__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-centered__left,
.navbar-centered__right {
  display: flex;
  list-style: none;
  gap: 4px;
  margin: 0;
  padding: 0;
  flex: 1;
}

.navbar-centered__right {
  justify-content: flex-end;
}

.navbar-centered__left a,
.navbar-centered__right a {
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 6px;
  transition: all 0.2s;
}

.navbar-centered__left a:hover,
.navbar-centered__right a:hover {
  color: white;
  background: rgba(255,255,255,0.1);
}

.navbar-centered__logo {
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
  text-decoration: none;
  letter-spacing: -0.03em;
  padding: 0 32px;
}`
    },
    {
      id: 'navbar-cta',
      title: 'Navbar avec CTA',
      description: 'Navbar professionnelle avec bouton d'appel à l'action mis en avant.',
      level: 'intermediate',
      tags: ['HTML', 'CSS'],
      html: `<nav class="navbar-cta">
  <div class="navbar-cta__inner">
    <a href="#" class="navbar-cta__logo">
      <span class="navbar-cta__icon">🚀</span> DevKit
    </a>
    <ul class="navbar-cta__menu">
      <li><a href="#">Fonctionnalités</a></li>
      <li><a href="#">Tarifs</a></li>
      <li><a href="#">Docs</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
    <div class="navbar-cta__actions">
      <a href="#" class="navbar-cta__login">Connexion</a>
      <a href="#" class="navbar-cta__btn">Commencer gratuitement →</a>
    </div>
  </div>
</nav>`,
      css: `.navbar-cta {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(108, 99, 255, 0.15);
  padding: 14px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-cta__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar-cta__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 800;
  color: #1A1A2E;
  text-decoration: none;
  letter-spacing: -0.02em;
  flex-shrink: 0;
}

.navbar-cta__menu {
  display: flex;
  list-style: none;
  gap: 4px;
  flex: 1;
  margin: 0;
  padding: 0;
}

.navbar-cta__menu a {
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 999px;
  transition: all 0.2s;
}

.navbar-cta__menu a:hover {
  color: #6C63FF;
  background: rgba(108, 99, 255, 0.08);
}

.navbar-cta__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.navbar-cta__login {
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 16px;
  transition: color 0.2s;
}

.navbar-cta__login:hover { color: #6C63FF; }

.navbar-cta__btn {
  background: linear-gradient(135deg, #6C63FF, #0FCCCE);
  color: white;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 999px;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3);
  white-space: nowrap;
}

.navbar-cta__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(108, 99, 255, 0.4);
}`
    },
    {
      id: 'navbar-dashboard',
      title: 'Navbar Dashboard',
      description: 'Barre de navigation pour interface d'administration avec avatar et notifications.',
      level: 'intermediate',
      tags: ['HTML', 'CSS', 'JS'],
      html: `<nav class="navbar-dashboard">
  <div class="navbar-dashboard__left">
    <button class="navbar-dashboard__toggle">☰</button>
    <a href="#" class="navbar-dashboard__logo">DashApp</a>
    <div class="navbar-dashboard__search">
      <input type="text" placeholder="Rechercher...">
    </div>
  </div>
  <div class="navbar-dashboard__right">
    <button class="navbar-dashboard__notif">
      🔔 <span class="navbar-dashboard__badge">3</span>
    </button>
    <div class="navbar-dashboard__user">
      <div class="navbar-dashboard__avatar">JD</div>
      <div class="navbar-dashboard__info">
        <span class="navbar-dashboard__name">Jean Dupont</span>
        <span class="navbar-dashboard__role">Admin</span>
      </div>
    </div>
  </div>
</nav>`,
      css: `.navbar-dashboard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 64px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  gap: 16px;
}

.navbar-dashboard__left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.navbar-dashboard__toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  color: #6b7280;
  transition: background 0.2s;
}

.navbar-dashboard__toggle:hover { background: #f3f4f6; }

.navbar-dashboard__logo {
  font-size: 1.1rem;
  font-weight: 800;
  color: #6C63FF;
  text-decoration: none;
  white-space: nowrap;
}

.navbar-dashboard__search input {
  padding: 8px 16px;
  background: #f9fafb;
  border: 1.5px solid #e5e7eb;
  border-radius: 999px;
  font-size: 0.875rem;
  width: 220px;
  outline: none;
  transition: all 0.2s;
}

.navbar-dashboard__search input:focus {
  border-color: #6C63FF;
  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.12);
  background: white;
}

.navbar-dashboard__right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.navbar-dashboard__notif {
  position: relative;
  background: none;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}

.navbar-dashboard__notif:hover {
  border-color: #6C63FF;
  background: rgba(108, 99, 255, 0.05);
}

.navbar-dashboard__badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #EF4444;
  color: white;
  font-size: 10px;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-dashboard__user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px 6px 6px;
  border-radius: 99px;
  border: 1.5px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.2s;
}

.navbar-dashboard__user:hover {
  border-color: #6C63FF;
  background: rgba(108, 99, 255, 0.05);
}

.navbar-dashboard__avatar {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #6C63FF, #0FCCCE);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}

.navbar-dashboard__info { display: flex; flex-direction: column; }
.navbar-dashboard__name { font-size: 0.8rem; font-weight: 600; color: #1A1A2E; }
.navbar-dashboard__role { font-size: 0.7rem; color: #9CA3AF; }`
    },
    {
      id: 'navbar-glassmorphism',
      title: 'Navbar Glassmorphism',
      description: 'Navbar transparente effet verre avec blur — tendance 2025.',
      level: 'advanced',
      tags: ['HTML', 'CSS'],
      html: `<div class="glass-nav-wrapper">
  <nav class="navbar-glass">
    <a href="#" class="navbar-glass__logo">✦ Studio</a>
    <ul class="navbar-glass__menu">
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Journal</a></li>
      <li><a href="#" class="navbar-glass__cta">Contact →</a></li>
    </ul>
  </nav>
</div>`,
      css: `.glass-nav-wrapper {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 80px 40px;
  border-radius: 16px;
}

.navbar-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 99px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.navbar-glass__logo {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.navbar-glass__menu {
  display: flex;
  list-style: none;
  gap: 4px;
  align-items: center;
  margin: 0;
  padding: 0;
}

.navbar-glass__menu a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 999px;
  transition: all 0.2s;
}

.navbar-glass__menu a:hover {
  color: white;
  background: rgba(255, 255, 255, 0.15);
}

.navbar-glass__cta {
  background: white !important;
  color: #764ba2 !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`
    }
  ],

  footers: [
    {
      id: 'footer-simple',
      title: 'Footer Simple',
      description: 'Footer minimaliste avec copyright et liens essentiels.',
      level: 'beginner',
      tags: ['HTML', 'CSS'],
      html: `<footer class="footer-simple">
  <div class="footer-simple__inner">
    <span class="footer-simple__copy">© 2025 MonSite. Tous droits réservés.</span>
    <nav class="footer-simple__links">
      <a href="#">Confidentialité</a>
      <a href="#">CGU</a>
      <a href="#">Contact</a>
    </nav>
  </div>
</footer>`,
      css: `.footer-simple {
  background: #1A1A2E;
  padding: 24px 0;
}

.footer-simple__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-simple__copy {
  color: rgba(255,255,255,0.5);
  font-size: 0.875rem;
}

.footer-simple__links {
  display: flex;
  gap: 24px;
}

.footer-simple__links a {
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.footer-simple__links a:hover { color: white; }`
    }
  ]
};

// Export global
window.TEMPLATES_DATA = TEMPLATES_DATA;
