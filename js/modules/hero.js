/* Hero slider: renders BH.data.slides, autoplays (paused on hover, focus, hidden tab and reduced motion),
   dots are a tablist with arrow-key support, and a visible pause/play button. */
(function (BH) {
  'use strict';
  var dom = BH.core.dom, esc = dom.esc, i18n = BH.core.i18n, shape = BH.core.shapes.svg, icon = BH.core.icons.svg;
  var INTERVAL = 7000;

  function slideHTML(s, i, total) {
    var pick = i18n.pick, t = i18n.t;
    var primary = s.primary.panel
      ? '<button class="btn btn--primary btn--lg" type="button" data-open="book-panel" data-panel-item="' + esc(s.primary.panel) + '">' + esc(t(s.primary.label)) + icon('arrow-right') + '</button>'
      : '<a class="btn btn--primary btn--lg" href="' + esc(s.primary.href) + '">' + esc(t(s.primary.label)) + '</a>';
    var secondary = s.secondary ? '<a class="btn btn--inverse btn--lg" href="' + esc(s.secondary.href) + '">' + esc(t(s.secondary.label)) + '</a>' : '';
    return '' +
      '<article class="hero-slide" id="hero-slide-' + i + '" role="tabpanel" aria-roledescription="slide" aria-label="' + esc(t('hero.slide', { n: i + 1, total: total })) + '" aria-hidden="true">' +
        '<div class="hero-slide__text">' +
          '<p class="hero-slide__eyebrow">' + esc(pick(s.eyebrow)) + '</p>' +
          (i === 0 ? '<h2 class="hero-slide__title">' : '<h2 class="hero-slide__title">') + esc(pick(s.title)) + '</h2>' +
          '<p class="hero-slide__lead">' + esc(pick(s.lead)) + '</p>' +
          '<div class="hero-slide__actions">' + primary + secondary + '</div>' +
        '</div>' +
        '<figure class="hero-slide__media">' +
          '<img class="ticket" src="' + esc(s.image) + '" alt="' + esc(pick(s.imageAlt)) + '" width="800" height="1000"' + (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">' +
          '<div class="hero-slide__stamp" aria-hidden="true">' + shape('oval') +
            '<span>' + esc(pick(s.stamp.top)) + '<b>' + esc(s.stamp.big) + '</b>' + esc(pick(s.stamp.bottom)) + '</span>' +
          '</div>' +
        '</figure>' +
      '</article>';
  }

  BH.modules.hero = {
    init: function (root) {
      var slidesEl = dom.qs('[data-hero-slides]', root), dotsEl = dom.qs('[data-hero-dots]', root), toggle = dom.qs('[data-hero-toggle]', root);
      var data = BH.data.slides || [], index = 0, timer = null;
      var userPaused = dom.reducedMotion(), hoverPaused = false;

      function render() {
        slidesEl.innerHTML = data.map(function (s, i) { return slideHTML(s, i, data.length); }).join('');
        dotsEl.innerHTML = data.map(function (s, i) {
          return '<button class="hero__dot" type="button" role="tab" aria-controls="hero-slide-' + i + '" aria-label="' + esc(i18n.pick(s.title)) + '" aria-selected="false" tabindex="-1"></button>';
        }).join('');
        show(index, false);
        updateToggle();
      }
      function show(i, moveFocus) {
        index = (i + data.length) % data.length;
        dom.qsa('.hero-slide', slidesEl).forEach(function (el, n) {
          var on = n === index;
          el.setAttribute('aria-hidden', String(!on));
          if (on) el.removeAttribute('inert'); else el.setAttribute('inert', '');
        });
        dom.qsa('.hero__dot', dotsEl).forEach(function (d, n) {
          d.setAttribute('aria-selected', String(n === index));
          d.tabIndex = n === index ? 0 : -1;
          if (n === index && moveFocus) d.focus();
        });
      }
      function running() { return !userPaused && !hoverPaused && !document.hidden && data.length > 1; }
      function schedule() {
        clearTimeout(timer);
        if (running()) timer = setTimeout(function () { show(index + 1, false); schedule(); }, INTERVAL);
      }
      function updateToggle() {
        toggle.setAttribute('aria-label', i18n.t(userPaused ? 'hero.play' : 'hero.pause'));
        toggle.innerHTML = icon(userPaused ? 'play' : 'pause');
      }

      dotsEl.addEventListener('click', function (e) {
        var d = e.target.closest('.hero__dot'); if (!d) return;
        show(dom.qsa('.hero__dot', dotsEl).indexOf(d), false); schedule();
      });
      dotsEl.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault(); show(index + (e.key === 'ArrowRight' ? 1 : -1), true); schedule();
        }
      });
      toggle.addEventListener('click', function () { userPaused = !userPaused; updateToggle(); schedule(); });
      root.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { hoverPaused = true; schedule(); } });
      root.addEventListener('pointerleave', function () { hoverPaused = false; schedule(); });
      root.addEventListener('focusin', function () { hoverPaused = true; schedule(); });
      root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) { hoverPaused = false; schedule(); } });
      document.addEventListener('visibilitychange', schedule);

      /* Swipe between slides on touch screens */
      var startX = null;
      slidesEl.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
      slidesEl.addEventListener('touchend', function (e) {
        if (startX === null) return;
        var dx = e.changedTouches[0].clientX - startX; startX = null;
        if (Math.abs(dx) > 50) { show(index + (dx < 0 ? 1 : -1), false); schedule(); }
      }, { passive: true });

      render(); schedule();
      i18n.onChange(function () { render(); });
    }
  };
})(window.BH);
