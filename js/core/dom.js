(function (BH) {
  'use strict';
  var dom = {
    qs: function (sel, root) { return (root || document).querySelector(sel); },
    qsa: function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); },
    on: function (el, type, handler, opts) { el.addEventListener(type, handler, opts); return function () { el.removeEventListener(type, handler, opts); }; },
    /* Escape text before it goes into a template string */
    esc: function (value) {
      return String(value == null ? '' : value)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    },
    html: function (el, markup) { if (el) el.innerHTML = markup; return el; },
    reducedMotion: function () { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; },
    focusable: function (root) {
      return dom.qsa('a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])', root)
        .filter(function (el) { return el.offsetParent !== null || el === document.activeElement; });
    }
  };
  BH.core.dom = dom;
})(window.BH);
