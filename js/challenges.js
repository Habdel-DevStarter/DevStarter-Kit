(function () {
  var checklistKey = "devstarter-ux-checklist";

  function saveChecks() {
    var values = Array.prototype.map.call(document.querySelectorAll(".js-ux-check"), function (input) {
      return input.checked;
    });
    localStorage.setItem(checklistKey, JSON.stringify(values));
  }

  function restoreChecks() {
    var raw = localStorage.getItem(checklistKey);
    if (!raw) return;
    var values;
    try {
      values = JSON.parse(raw);
    } catch (error) {
      return;
    }
    document.querySelectorAll(".js-ux-check").forEach(function (input, index) {
      input.checked = Boolean(values[index]);
    });
  }

  restoreChecks();

  document.addEventListener("click", function (event) {
    var btn = event.target.closest(".js-show-answer");
    if (!btn) return;
    var card = btn.closest(".challenge-card");
    if (!card) return;
    var answer = card.querySelector(".challenge-answer");
    if (!answer) return;

    var hidden = answer.classList.toggle("hidden");
    btn.textContent = hidden ? "Voir correction" : "Masquer correction";
  });

  document.addEventListener("change", function (event) {
    if (!event.target.matches(".js-ux-check")) return;
    saveChecks();
  });
})();
