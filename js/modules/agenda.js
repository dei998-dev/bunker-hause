/* La Agenda: category filters + the events carousel, sorted by date. */
(function (BH) {
  'use strict';
  var dom = BH.core.dom, esc = dom.esc, i18n = BH.core.i18n, C = BH.components;
  var DOT = { comunidad: 'var(--cat-comunidad)', comedia: 'var(--cat-comedia)', bienestar: 'var(--cat-bienestar)', talleres: 'var(--cat-talleres)', musica: 'var(--cat-musica)' };
  BH.modules.agenda = {
    init: function (root) {
      var filtersEl = dom.qs('[data-agenda-filters]', root), list = dom.qs('[data-agenda-list]', root), track = dom.qs('#agenda-track', root);
      var active = 'all';

      function renderFilters() {
        var cats = ['all'].concat(BH.data.categories);
        filtersEl.innerHTML = cats.map(function (c) {
          var label = c === 'all' ? i18n.t('agenda.allCats') : C.categoryLabel(c);
          var dot = c === 'all' ? '' : '<span class="filter__dot" style="--dot:' + DOT[c] + '" aria-hidden="true"></span>';
          return '<button class="filter" type="button" data-cat="' + c + '" aria-pressed="' + (c === active) + '">' + dot + esc(label) + '</button>';
        }).join('');
      }
      function renderList() {
        var items = BH.data.events
          .filter(function (e) { return active === 'all' || e.category === active; })
          .sort(function (a, b) { return a.date < b.date ? -1 : 1; });
        list.innerHTML = items.length
          ? items.map(function (e) { return '<li>' + C.eventCard(e) + '</li>'; }).join('')
          : '<li class="carousel__empty">' + esc(i18n.t('agenda.empty')) + '</li>';
        track.dispatchEvent(new CustomEvent('bh:updated'));
      }

      filtersEl.addEventListener('click', function (e) {
        var b = e.target.closest('[data-cat]'); if (!b) return;
        active = b.getAttribute('data-cat');
        dom.qsa('[data-cat]', filtersEl).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        renderList();
      });
      renderFilters(); renderList();
      i18n.onChange(function () { renderFilters(); renderList(); });
    }
  };
})(window.BH);
