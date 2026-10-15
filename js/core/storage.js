/* Safe localStorage: private windows and blocked storage must never break the page. */
(function (BH) {
  'use strict';
  var PREFIX = 'bh:';
  BH.core.storage = {
    get: function (key, fallback) {
      try { var v = window.localStorage.getItem(PREFIX + key); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { window.localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    }
  };
})(window.BH);
