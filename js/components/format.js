/* Date helpers shared by cards (dates are 'YYYY-MM-DD', shown in the visitor's language). */
(function (BH) {
  'use strict';
  function d(iso) { var p = iso.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function loc() { return BH.core.i18n.lang() === 'en' ? 'en-GB' : 'es-EC'; }
  function clean(s) { return s.replace('.', ''); }
  BH.components.format = {
    weekday: function (iso) { return clean(d(iso).toLocaleDateString(loc(), { weekday: 'short' })); },
    day: function (iso) { return String(d(iso).getDate()); },
    month: function (iso) { return clean(d(iso).toLocaleDateString(loc(), { month: 'short' })); },
    long: function (iso) { return d(iso).toLocaleDateString(loc(), { weekday: 'short', day: 'numeric', month: 'short' }).replace(/\./g, ''); },
    short: function (iso) { var x = d(iso); return x.getDate() + '/' + (x.getMonth() + 1) + '/' + String(x.getFullYear()).slice(2); }
  };
})(window.BH);
