/* EventCard: data → HTML. Used by the Agenda carousel; reusable on the full Agenda page. */
(function (BH) {
  'use strict';
  var esc = BH.core.dom.esc, i18n = BH.core.i18n, icon = BH.core.icons.svg, shape = BH.core.shapes.svg, f = BH.components.format;
  BH.components.eventCard = function (ev) {
    var t = i18n.t, pick = i18n.pick;
    var href = '#evento-' + esc(ev.id);
    return '' +
      '<article class="card event-card" data-category="' + esc(ev.category) + '">' +
        '<div class="card__media">' +
          '<img src="' + esc(ev.image) + '" alt="' + esc(pick(ev.imageAlt)) + '" width="800" height="1000" loading="lazy" decoding="async">' +
          '<div class="event-card__date" aria-hidden="true">' + shape('oval') +
            '<span>' + esc(f.weekday(ev.date)) + '</span><b>' + esc(f.day(ev.date)) + '</b><span>' + esc(f.month(ev.date)) + '</span>' +
          '</div>' +
          '<div class="event-card__tag">' + BH.components.categoryTag(ev.category) + '</div>' +
          (ev.soldOut ? '<div class="event-card__soldout">' + esc(t('agenda.soldOut')) + '</div>' : '') +
        '</div>' +
        '<div class="card__body">' +
          '<h3 class="card__title"><a href="' + href + '">' + esc(pick(ev.title)) + '</a></h3>' +
          '<p class="card__meta">' +
            '<span>' + icon('calendar') + esc(f.long(ev.date)) + '</span>' +
            '<span>' + icon('clock') + esc(ev.time) + '</span>' +
            '<span>' + icon('pin') + esc(pick(ev.place)) + '</span>' +
          '</p>' +
          (ev.host ? '<p class="card__note">' + esc(pick(ev.host)) + '</p>' : '') +
          (ev.note ? '<p class="card__note">' + esc(pick(ev.note)) + '</p>' : '') +
          '<div class="card__foot">' +
            '<span class="card__price">' + esc(pick(ev.price)) + (ev.priceNote ? ' <small>' + esc(pick(ev.priceNote)) + '</small>' : '') + '</span>' +
            (ev.soldOut ? '' : '<button class="btn btn--primary" type="button" data-open="book-panel" data-panel-item="events">' + esc(t('cta.bookTicket')) + '</button>') +
          '</div>' +
        '</div>' +
      '</article>';
  };
})(window.BH);
