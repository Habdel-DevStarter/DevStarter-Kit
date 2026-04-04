/**
 * DEVSTARTER KIT — Module Copy
 * copy.js — Gestion copie clipboard
 */

const Copy = (() => {
  /**
   * Copier du texte vers le presse-papiers
   * @param {string} text - Texte à copier
   * @param {HTMLElement} [btn] - Bouton déclencheur (pour feedback visuel)
   */
  async function copyText(text, btn = null) {
    try {
      await navigator.clipboard.writeText(text);
      _feedback(btn, true);
      Toast.show('Code copié dans le presse-papiers ! 🎉', 'success');
    } catch {
      // Fallback pour les navigateurs plus anciens
      _fallbackCopy(text);
      _feedback(btn, true);
      Toast.show('Code copié !', 'success');
    }
  }

  /**
   * Fallback execCommand (déprécié mais compatible)
   */
  function _fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed;top:-999px;left:-999px;opacity:0;';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  /**
   * Feedback visuel sur le bouton
   */
  function _feedback(btn, success) {
    if (!btn) return;

    const original = btn.innerHTML;
    btn.innerHTML = success ? '✔ Copié !' : '✖ Erreur';
    btn.classList.add(success ? 'copied' : 'error');
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = original;
      btn.classList.remove('copied', 'error');
      btn.disabled = false;
    }, 2000);
  }

  /**
   * Initialise tous les boutons .copy-btn dans la page
   */
  function initCopyButtons() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.copy-btn');
      if (!btn) return;

      // Cherche le code dans le bloc parent ou via data-code
      const dataCode = btn.dataset.code;
      const codeBlock = btn.closest('.code-block');

      if (dataCode) {
        copyText(decodeURIComponent(dataCode), btn);
      } else if (codeBlock) {
        const pre = codeBlock.querySelector('pre');
        if (pre) copyText(pre.textContent, btn);
      }
    });
  }

  /**
   * Ajoute un effet ripple aux boutons
   */
  function addRipple(btn, e) {
    const circle = document.createElement('span');
    const rect   = btn.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height);

    circle.classList.add('ripple-circle');
    circle.style.cssText = `
      width:${size}px;height:${size}px;
      left:${e.clientX - rect.left - size/2}px;
      top:${e.clientY - rect.top - size/2}px;
    `;

    btn.appendChild(circle);
    circle.addEventListener('animationend', () => circle.remove());
  }

  function initRipple() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-ripple, .btn--primary, .btn--secondary');
      if (btn) addRipple(btn, e);
    });
  }

  return { copyText, initCopyButtons, initRipple };
})();

window.Copy = Copy;
