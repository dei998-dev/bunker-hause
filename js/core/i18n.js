/* Tiny i18n: Spanish default, English second.
   Static text: data-i18n="key" (text) and data-i18n-attr="attr:key;attr2:key2".
   Data text: objects like { es: '…', en: '…' } read with BH.core.i18n.pick(obj). */
(function (BH) {
  'use strict';
  var dom = BH.core.dom, storage = BH.core.storage;
  var SUPPORTED = ['es', 'en'];
  var listeners = [];
  /* Spanish is the default; only the visitor's own choice (saved) or ?lang=en changes it. */
  var current = (function () {
    var param = (window.location.search.match(/[?&]lang=(es|en)/) || [])[1];
    if (param) return param;
    var saved = storage.get('lang', null);
    return SUPPORTED.indexOf(saved) > -1 ? saved : 'es';
  })();

  function lookup(key) {
    var table = (BH.data.strings || {})[current] || {};
    var fallback = (BH.data.strings || {}).es || {};
    return key in table ? table[key] : (key in fallback ? fallback[key] : key);
  }

  var i18n = {
    lang: function () { return current; },
    t: function (key, vars) {
      var s = lookup(key);
      if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
      return s;
    },
    pick: function (obj) {
      if (obj == null) return '';
      if (typeof obj !== 'object') return obj;
      return obj[current] != null ? obj[current] : obj.es;
    },
    apply: function (root) {
      dom.qsa('[data-i18n]', root).forEach(function (el) { el.textContent = i18n.t(el.getAttribute('data-i18n')); });
      dom.qsa('[data-i18n-attr]', root).forEach(function (el) {
        el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
          var p = pair.split(':'); if (p.length === 2) el.setAttribute(p[0].trim(), i18n.t(p[1].trim()));
        });
      });
      document.documentElement.lang = current;
      if (BH.data.strings && BH.data.strings[current]['meta.title']) document.title = i18n.t('meta.title');
    },
    set: function (lang) {
      if (SUPPORTED.indexOf(lang) < 0 || lang === current) return;
      current = lang;
      storage.set('lang', lang);
      i18n.apply(document);
      listeners.forEach(function (fn) { fn(lang); });
    },
    onChange: function (fn) { listeners.push(fn); }
  };
  BH.core.i18n = i18n;
})(window.BH);
