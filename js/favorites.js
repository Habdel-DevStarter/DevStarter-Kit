(function () {
  var STORAGE_KEY = "devstarter-favorites";

  function readFavorites() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch (error) {
      return [];
    }
  }

  function writeFavorites(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function getItemKey(item) {
    var page = document.body.getAttribute("data-page") || "page";
    var title = item.dataset.title || item.querySelector("h2,h3")?.textContent || "template";
    return (page + "::" + title).toLowerCase().trim();
  }

  function ensureFavoriteButton(item) {
    if (item.querySelector(".favorite-toggle")) return;

    var key = getItemKey(item);
    item.dataset.favoriteKey = key;

    var button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn--ghost favorite-toggle";
    button.dataset.favoriteToggle = "true";
    button.textContent = "☆ Favori";

    var head = item.querySelector(".template-block__head");
    var actions = item.querySelector(".card__actions");

    if (head) {
      head.appendChild(button);
    } else if (actions) {
      actions.appendChild(button);
    } else {
      item.appendChild(button);
    }
  }

  function syncFavoriteState() {
    var favorites = readFavorites();
    var set = new Set(favorites);
    document.querySelectorAll("[data-search-item]").forEach(function (item) {
      var key = item.dataset.favoriteKey || getItemKey(item);
      var isFav = set.has(key);
      item.dataset.favorite = String(isFav);
      var button = item.querySelector(".favorite-toggle");
      if (!button) return;
      button.textContent = isFav ? "★ Favori" : "☆ Favori";
      button.classList.toggle("is-favorite", isFav);
    });
  }

  function toggleFavorite(item) {
    var favorites = readFavorites();
    var key = item.dataset.favoriteKey || getItemKey(item);
    var index = favorites.indexOf(key);
    if (index === -1) {
      favorites.push(key);
      if (window.DevStarterToast) window.DevStarterToast("Ajouté aux favoris");
    } else {
      favorites.splice(index, 1);
      if (window.DevStarterToast) window.DevStarterToast("Retiré des favoris");
    }
    writeFavorites(favorites);
    syncFavoriteState();
    if (typeof window.DevStarterApplyFilters === "function") window.DevStarterApplyFilters();
  }

  function ensureFavoritesFilterButton() {
    var toolbar = document.querySelector(".toolbar");
    if (!toolbar || toolbar.querySelector("[data-filter-favorites]")) return;
    var button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn--ghost";
    button.setAttribute("data-filter-favorites", "true");
    button.setAttribute("aria-pressed", "false");
    button.textContent = "Favoris";
    toolbar.appendChild(button);
  }

  document.querySelectorAll("[data-search-item]").forEach(function (item) {
    ensureFavoriteButton(item);
  });
  ensureFavoritesFilterButton();
  syncFavoriteState();

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest("[data-favorite-toggle]");
    if (toggle) {
      var card = toggle.closest("[data-search-item]");
      if (card) toggleFavorite(card);
      return;
    }

    var filterBtn = event.target.closest("[data-filter-favorites]");
    if (!filterBtn) return;
    var active = filterBtn.getAttribute("aria-pressed") === "true";
    filterBtn.setAttribute("aria-pressed", String(!active));
    filterBtn.classList.toggle("is-favorite", !active);
    if (typeof window.DevStarterApplyFilters === "function") window.DevStarterApplyFilters();
  });
})();

