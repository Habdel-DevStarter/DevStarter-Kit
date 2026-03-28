(function () {
  var techSelect = document.querySelector("[data-filter-tech]");
  var levelSelect = document.querySelector("[data-filter-level]");
  var container = document.querySelector("[data-search-container]");
  if (!container || (!techSelect && !levelSelect)) return;

  function applyFilters() {
    var techValue = techSelect ? techSelect.value.toLowerCase() : "all";
    var levelValue = levelSelect ? levelSelect.value.toLowerCase() : "all";
    var favToggle = document.querySelector("[data-filter-favorites]");
    var favoritesOnly = favToggle ? favToggle.getAttribute("aria-pressed") === "true" : false;
    var input = document.querySelector("[data-search-input]");
    var query = input ? input.value.trim().toLowerCase() : "";

    container.querySelectorAll("[data-search-item]").forEach(function (item) {
      var tech = (item.dataset.tech || "").toLowerCase();
      var level = (item.dataset.level || "").toLowerCase();
      var title = (item.dataset.title || "").toLowerCase();
      var desc = (item.dataset.desc || "").toLowerCase();

      var matchTech = techValue === "all" || tech.includes(techValue);
      var matchLevel = levelValue === "all" || level === levelValue;
      var matchSearch = !query || title.includes(query) || desc.includes(query);
      var matchFavorite = !favoritesOnly || item.dataset.favorite === "true";
      item.style.display = matchTech && matchLevel && matchSearch && matchFavorite ? "" : "none";
    });
  }

  if (techSelect) techSelect.addEventListener("change", applyFilters);
  if (levelSelect) levelSelect.addEventListener("change", applyFilters);
  var input = document.querySelector("[data-search-input]");
  if (input) input.addEventListener("input", applyFilters);

  var params = new URLSearchParams(window.location.search);
  var levelParam = (params.get("level") || "").toLowerCase();
  var allowedLevels = ["beginner", "intermediate", "advanced"];
  if (levelSelect && allowedLevels.includes(levelParam)) {
    levelSelect.value = levelParam;
  }

  var techParam = (params.get("tech") || "").toLowerCase();
  var allowedTech = ["html", "css", "js", "all"];
  if (techSelect && allowedTech.includes(techParam)) {
    techSelect.value = techParam;
  }

  window.DevStarterApplyFilters = applyFilters;
  applyFilters();
})();

