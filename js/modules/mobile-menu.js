/* Mobile menu: the overlay module does open/close; this closes it if the screen grows to desktop. */
(function (BH) {
  'use strict';
  BH.modules['mobile-menu'] = {
    init: function (root) {
      var mq = window.matchMedia('(min-width: 901px)');
      var onChange = function () { if (mq.matches && !root.hidden) BH.core.overlay.close(root); };
      if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);
    }
  };
})(window.BH);
