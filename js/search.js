/**
 * DEVSTARTER KIT — Recherche & Filtres
 * search.js + filters.js — Logique de filtrage
 */

/* --- Module Search --- */
const Search = (() => {
  let _query = '';
  let _onSearch = null;

  function init(inputSelector, callback) {
    _onSearch = callback;
    const input = document.querySelector(inputSelector);
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        _query = e.target.value.trim().toLowerCase();
        if (_onSearch) _onSearch(_query);
      }, 250);
    });

    // Clear on Escape
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        input.value = '';
        _query = '';
        if (_onSearch) _onSearch('');
      }
    });
  }

  function getQuery() { return _query; }

  return { init, getQuery };
})();

/* --- Module Filters --- */
const Filters = (() => {
  let _active = new Set(['all']);
  let _onFilter = null;

  function init(containerSelector, callback) {
    _onFilter = callback;
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;

      const value = chip.dataset.filter;

      if (value === 'all') {
        _active.clear();
        _active.add('all');
      } else {
        _active.delete('all');
        if (_active.has(value)) {
          _active.delete(value);
          if (_active.size === 0) _active.add('all');
        } else {
          _active.add(value);
        }
      }

      _updateUI(container);
      if (_onFilter) _onFilter([..._active]);
    });
  }

  function _updateUI(container) {
    container.querySelectorAll('.filter-chip').forEach(chip => {
      chip.classList.toggle('active', _active.has(chip.dataset.filter));
    });
  }

  function isActive(value) {
    return _active.has('all') || _active.has(value);
  }

  function getActive() { return [..._active]; }

  return { init, isActive, getActive };
})();

/* --- Module FilterGrid --- */
/**
 * Combine search + filters pour filtrer une grille de cartes
 */
const FilterGrid = (() => {
  function init({ gridSelector, cardSelector, searchSelector, filterSelector, emptyMessage = 'Aucun résultat trouvé.' }) {
    const grid  = document.querySelector(gridSelector);
    if (!grid) return;

    const cards = () => [...grid.querySelectorAll(cardSelector)];

    function applyFilters() {
      const query  = Search.getQuery();
      const active = Filters.getActive();
      let visible  = 0;

      cards().forEach(card => {
        const title = (card.dataset.title || card.querySelector('h3,h4')?.textContent || '').toLowerCase();
        const desc  = (card.dataset.desc  || card.querySelector('p')?.textContent    || '').toLowerCase();
        const tags  = (card.dataset.tags  || '').toLowerCase().split(',');
        const level = (card.dataset.level || '').toLowerCase();

        const matchSearch = !query || title.includes(query) || desc.includes(query) || tags.some(t => t.includes(query));
        const matchFilter = active.includes('all') || active.some(f => tags.includes(f.toLowerCase()) || level === f.toLowerCase());

        const show = matchSearch && matchFilter;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      // Afficher message vide
      let noResults = grid.querySelector('.no-results');
      if (visible === 0) {
        if (!noResults) {
          noResults = document.createElement('div');
          noResults.className = 'no-results';
          noResults.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <p>${emptyMessage}</p>`;
          grid.appendChild(noResults);
        }
        noResults.style.display = '';
      } else if (noResults) {
        noResults.style.display = 'none';
      }
    }

    if (searchSelector) Search.init(searchSelector, () => applyFilters());
    if (filterSelector) Filters.init(filterSelector, () => applyFilters());

    return { refresh: applyFilters };
  }

  return { init };
})();

window.Search = Search;
window.Filters = Filters;
window.FilterGrid = FilterGrid;
