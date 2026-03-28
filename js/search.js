(function () {
  var input = document.querySelector("[data-search-input]");
  var container = document.querySelector("[data-search-container]");

  if (!input || !container) return;

  input.addEventListener("input", function () {
    var query = input.value.trim().toLowerCase();
    var items = container.querySelectorAll("[data-search-item]");
    items.forEach(function (item) {
      var title = (item.dataset.title || "").toLowerCase();
      var desc = (item.dataset.desc || "").toLowerCase();
      var matchSearch = title.includes(query) || desc.includes(query);
      var matchTech = item.dataset.filterTech !== "false";
      var matchLevel = item.dataset.filterLevel !== "false";
      item.style.display = matchSearch && matchTech && matchLevel ? "" : "none";
      item.dataset.filterSearch = String(matchSearch);
    });
  });
})();

