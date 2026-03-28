(function () {
  var preview = document.getElementById("themePreview");
  var output = document.getElementById("themeVarsOutput");
  var copyBtn = document.getElementById("copyThemeVars");
  if (!preview || !output || !copyBtn) return;

  function updateOutput() {
    var styles = getComputedStyle(preview);
    var vars = [
      "--color-primary",
      "--color-secondary",
      "--color-accent",
      "--color-bg",
      "--color-text",
      "--radius-lg",
    ];

    var lines = [":root {"];
    vars.forEach(function (name) {
      lines.push("  " + name + ": " + styles.getPropertyValue(name).trim() + ";");
    });
    lines.push("}");
    output.textContent = lines.join("\n");
  }

  function applyVar(name, value) {
    preview.style.setProperty(name, value);
    updateOutput();
  }

  document.querySelectorAll(".js-theme-input").forEach(function (input) {
    input.addEventListener("input", function () {
      applyVar(input.dataset.var, input.value);
    });
  });

  document.querySelectorAll(".js-theme-range").forEach(function (input) {
    input.addEventListener("input", function () {
      applyVar(input.dataset.var, input.value + "px");
    });
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.textContent).then(function () {
      if (window.DevStarterToast) window.DevStarterToast("Variables CSS copiées");
    });
  });

  updateOutput();
})();
