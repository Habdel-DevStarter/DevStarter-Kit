/**
 * DEVSTARTER KIT — Dark Mode
 * darkmode.js — Toggle thème clair/sombre
 */

const DarkMode = (() => {
  const STORAGE_KEY = 'devstarter-theme';
  const DARK  = 'dark';
  const LIGHT = 'light';

  const ICON_DARK  = '🌙';
  const ICON_LIGHT = '☀️';

  function getPreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    _updateButtons(theme);
  }

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    apply(current === DARK ? LIGHT : DARK);
  }

  function _updateButtons(theme) {
    document.querySelectorAll('.dark-toggle').forEach(btn => {
      btn.innerHTML  = theme === DARK ? ICON_LIGHT : ICON_DARK;
      btn.setAttribute('aria-label', theme === DARK ? 'Activer le mode clair' : 'Activer le mode sombre');
      btn.title = theme === DARK ? 'Mode clair' : 'Mode sombre';
    });
  }

  function init() {
    // Appliquer immédiatement (avant le rendu)
    apply(getPreference());

    // Bind tous les boutons toggle
    document.addEventListener('click', (e) => {
      if (e.target.closest('.dark-toggle')) toggle();
    });

    // Écouter les changements système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        apply(e.matches ? DARK : LIGHT);
      }
    });
  }

  return { init, toggle, apply };
})();

window.DarkMode = DarkMode;
