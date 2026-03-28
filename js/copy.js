(function () {
  function setCopiedState(button) {
    var original = button.dataset.originalText || button.textContent;
    button.dataset.originalText = original;
    button.textContent = "Copié ✔";
    window.setTimeout(function () {
      button.textContent = original;
    }, 2000);
  }

  function copyText(text, button) {
    navigator.clipboard
      .writeText(text)
      .then(function () {
        setCopiedState(button);
        if (window.DevStarterToast) window.DevStarterToast("Code copié");
      })
      .catch(function () {
        if (window.DevStarterToast) window.DevStarterToast("Presse-papiers bloqué");
      });
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".js-copy");
    if (!button) return;

    var inline = button.dataset.copyInline;
    if (inline) {
      copyText(inline, button);
      return;
    }

    var targetId = button.dataset.copyTarget;
    if (!targetId) return;
    var target = document.getElementById(targetId);
    if (!target) return;
    copyText(target.textContent.trim(), button);
  });
})();

