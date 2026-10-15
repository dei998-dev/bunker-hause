/* Boot: draw icons and shapes, apply the language, render data, then start every [data-module].
   To add behaviour: create js/modules/<name>.js registering BH.modules['<name>'] = { init(root) {} },
   add its <script> to index.html and put data-module="<name>" on the element it controls. */
(function (BH) {
  'use strict';
  var dom = BH.core.dom;
  function boot() {
    BH.core.icons.hydrate(document);
    BH.core.shapes.hydrate(document);
    BH.core.i18n.apply(document);
    BH.modules.render.init();
    dom.qsa('[data-module]').forEach(function (el) {
      var name = el.getAttribute('data-module'), mod = BH.modules[name];
      if (!mod || typeof mod.init !== 'function') return;
      try { mod.init(el); } catch (err) { console.error('[BH] module "' + name + '" failed', err); }
    });
    document.documentElement.classList.add('is-ready');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})(window.BH);
