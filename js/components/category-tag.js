(function (BH) {
  'use strict';
  var esc = BH.core.dom.esc, i18n = BH.core.i18n;
  var LABELS = {
    comunidad: { es: 'Comunidad', en: 'Community' },
    comedia: { es: 'Comedia & escena', en: 'Comedy & stage' },
    bienestar: { es: 'Bienestar', en: 'Wellbeing' },
    talleres: { es: 'Talleres & charlas', en: 'Workshops & talks' },
    musica: { es: 'Música & fiesta', en: 'Music & parties' }
  };
  BH.components.categoryLabel = function (cat) { return i18n.pick(LABELS[cat]) || cat; };
  BH.components.categoryTag = function (cat) {
    return '<span class="tag tag--' + esc(cat) + '">' + esc(BH.components.categoryLabel(cat)) + '</span>';
  };
})(window.BH);
