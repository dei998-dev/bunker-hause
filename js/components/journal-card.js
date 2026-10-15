(function (BH) {
  'use strict';
  var esc = BH.core.dom.esc, i18n = BH.core.i18n, f = BH.components.format;
  BH.components.journalCard = function (post) {
    var pick = i18n.pick;
    return '' +
      '<a class="journal-card" href="#journal-' + esc(post.id) + '">' +
        '<img src="' + esc(post.image) + '" alt="" width="800" height="800" loading="lazy" decoding="async">' +
        '<h3 class="journal-card__title">' + esc(pick(post.title)) + '</h3>' +
        '<p class="journal-card__foot"><span>' + esc(pick(post.kicker)) + '</span><time datetime="' + esc(post.date) + '">' + esc(f.short(post.date)) + '</time></p>' +
      '</a>';
  };
})(window.BH);
