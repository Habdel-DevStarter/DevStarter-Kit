(function () {
  var STORAGE_KEY = "devstarter-theme";
  var root = document.documentElement;
  var button = document.getElementById("themeToggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (button) button.textContent = "Clair";
    } else {
      root.removeAttribute("data-theme");
      if (button) button.textContent = "Sombre";
    }
  }

  var saved = localStorage.getItem(STORAGE_KEY) || "light";
  applyTheme(saved);

  if (button) {
    button.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
})();

