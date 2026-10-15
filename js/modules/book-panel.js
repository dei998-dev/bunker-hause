/* "Reservar" panel: what can be booked, with a photo that changes per item (desktop). */
(function (BH) {
  'use strict';
  var dom = BH.core.dom, esc = dom.esc, i18n = BH.core.i18n, icon = BH.core.icons.svg;
  var P = 'assets/img/photos/';
  var ITEMS = [
    { key: 'rooms', href: '#habitaciones', photo: P + 'dorm-bunks.jpg' },
    { key: 'events', href: '#agenda', photo: P + 'rooftop-friends.jpg' },
    { key: 'space', href: '#espacio', photo: P + 'tile-wall-cocktail.jpg' },
    { key: 'exp', href: '#experiencias', photo: P + 'stair-room-plaque.jpg' },
    { key: 'cowork', href: '#habitaciones', photo: P + 'house-rules.jpg' }
  ];
  BH.modules['book-panel'] = {
    init: function (root) {
      var list = dom.qs('[data-render="panel-items"]', root);
      var photo = dom.qs('[data-panel-photo]', root), title = dom.qs('[data-panel-title]', root), text = dom.qs('[data-panel-text]', root);
      var current = 'rooms';
      function render() {
        list.innerHTML = ITEMS.map(function (it) {
          return '<li><a class="book-panel__item" href="' + it.href + '" data-close data-item="' + it.key + '">' +
            '<span>' + esc(i18n.t('panel.' + it.key)) + '<small>' + esc(i18n.t('panel.' + it.key + 'Hint')) + '</small></span>' + icon('arrow-right') + '</a></li>';
        }).join('');
        preview(current);
      }
      function preview(key) {
        var it = ITEMS.filter(function (x) { return x.key === key; })[0] || ITEMS[0];
        current = it.key;
        photo.src = it.photo;
        title.textContent = i18n.t('panel.' + it.key + 'Title');
        text.textContent = i18n.t('panel.' + it.key + 'Text');
        dom.qsa('.book-panel__item', list).forEach(function (a) { a.setAttribute('aria-current', String(a.getAttribute('data-item') === it.key)); });
      }
      list.addEventListener('pointerover', function (e) { var a = e.target.closest('[data-item]'); if (a) preview(a.getAttribute('data-item')); });
      list.addEventListener('focusin', function (e) { var a = e.target.closest('[data-item]'); if (a) preview(a.getAttribute('data-item')); });
      root.addEventListener('bh:open', function (e) { preview(e.detail.item || 'rooms'); });
      render();
      i18n.onChange(render);
    }
  };
})(window.BH);
