(function (BH) {
  'use strict';
  var esc = BH.core.dom.esc, i18n = BH.core.i18n, icon = BH.core.icons.svg;
  BH.components.roomCard = function (room) {
    var t = i18n.t, pick = i18n.pick;
    var price = room.price
      ? '<span class="card__price"><small>' + esc(t('rooms.from')) + ' </small>' + esc(room.price) + ' <small>' + esc(pick(room.unit) || t('rooms.night')) + '</small></span>'
      : '<span class="card__note">' + esc(t('rooms.rate')) + '</span>';
    return '' +
      '<article class="card room-card">' +
        '<div class="card__media ticket">' +
          '<img src="' + esc(room.image) + '" alt="' + esc(pick(room.imageAlt)) + '" width="800" height="1067" loading="lazy" decoding="async">' +
          (room.plaque ? '<span class="room-card__plaque" aria-hidden="true">' + esc(room.plaque) + '</span>' : '') +
          (room.badge ? '<span class="room-card__badge">' + esc(pick(room.badge)) + '</span>' : '') +
        '</div>' +
        '<div class="card__body">' +
          '<h3 class="card__title"><a href="#habitacion-' + esc(room.id) + '">' + esc(pick(room.name)) + '</a></h3>' +
          '<p class="card__meta">' +
            '<span>' + icon('bed') + esc(pick(room.kind)) + '</span>' +
            '<span>' + icon('users') + esc(room.guests) + '</span>' +
            '<span>' + icon('bath') + esc(pick(room.bath)) + '</span>' +
          '</p>' +
          '<div class="card__foot">' + price +
            '<button class="btn btn--secondary" type="button" data-open="book-panel" data-panel-item="rooms">' + esc(t('cta.book')) + '</button>' +
          '</div>' +
        '</div>' +
      '</article>';
  };
})(window.BH);
