/* ES / EN switch. Every [data-module="lang-switch"] on the page stays in sync. */
(function (BH) {
  'use strict';
  var dom = BH.core.dom, i18n = BH.core.i18n;
  function sync(root) {
    dom.qsa('[data-lang]', root).forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === i18n.lang())); });
  }
  BH.modules['lang-switch'] = {
    init: function (root) {
      sync(root);
      root.addEventListener('click', function (e) {
        var b = e.target.closest('[data-lang]');
        if (b) i18n.set(b.getAttribute('data-lang'));
      });
      i18n.onChange(function () { sync(root); });
    }
  };
})(window.BH);
