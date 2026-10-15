/* Scroll-snap carousel. Adds prev/next buttons to [data-carousel-arrows="<carousel id>"] and keeps them in sync. */
(function (BH) {
  'use strict';
  var dom = BH.core.dom, i18n = BH.core.i18n, icon = BH.core.icons.svg;
  BH.modules.carousel = {
    init: function (el) {
      var arrows = dom.qs('[data-carousel-arrows="' + el.id + '"]');
      if (!arrows) return;
      arrows.innerHTML =
        '<button class="icon-btn" type="button" data-dir="-1">' + icon('arrow-left') + '</button>' +
        '<button class="icon-btn" type="button" data-dir="1">' + icon('arrow-right') + '</button>';
      var prev = arrows.children[0], next = arrows.children[1];
      function labels() { prev.setAttribute('aria-label', i18n.t('a11y.prev')); next.setAttribute('aria-label', i18n.t('a11y.next')); }
      function update() {
        var max = el.scrollWidth - el.clientWidth - 2;
        prev.disabled = el.scrollLeft <= 2;
        next.disabled = el.scrollLeft >= max;
      }
      function step() {
        var item = dom.qs('.carousel__track > li', el);
        return item ? item.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
      }
      arrows.addEventListener('click', function (e) {
        var b = e.target.closest('[data-dir]'); if (!b) return;
        el.scrollBy({ left: step() * Number(b.getAttribute('data-dir')), behavior: dom.reducedMotion() ? 'auto' : 'smooth' });
      });
      el.addEventListener('keydown', function (e) {
        if (e.target !== el) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); el.scrollBy({ left: step() }); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); el.scrollBy({ left: -step() }); }
      });
      var ticking = false;
      el.addEventListener('scroll', function () {
        if (ticking) return; ticking = true;
        requestAnimationFrame(function () { update(); ticking = false; });
      }, { passive: true });
      window.addEventListener('resize', update);
      document.addEventListener('bh:rendered', update);
      el.addEventListener('bh:updated', function () { el.scrollLeft = 0; update(); });
      labels(); update();
      i18n.onChange(labels);
    }
  };
})(window.BH);
