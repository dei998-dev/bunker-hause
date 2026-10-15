(function (BH) {
  'use strict';
  var esc = BH.core.dom.esc, i18n = BH.core.i18n, icon = BH.core.icons.svg;
  BH.components.experienceCard = function (x) {
    var pick = i18n.pick;
    return '' +
      '<article class="exp-card">' +
        '<div class="exp-card__art exp-card__art--' + esc(x.tile) + (x.wide ? ' exp-card__art--wide' : '') + '">' +
          '<img src="' + esc(x.art) + '" alt="" decoding="async">' +
        '</div>' +
        '<p class="exp-card__meta"><span>' + icon('clock') + esc(pick(x.duration)) + '</span><span>' + icon('users') + esc(pick(x.mode)) + '</span></p>' +
        '<h3 class="exp-card__title"><a href="#experiencia-' + esc(x.id) + '">' + esc(pick(x.title)) + '</a></h3>' +
        '<p class="exp-card__text">' + esc(pick(x.text)) + '</p>' +
      '</article>';
  };
})(window.BH);
