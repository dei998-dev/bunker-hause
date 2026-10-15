/* Header: transparent over the hero, solid after it; highlights the nav link of the section in view. */
(function (BH) {
  'use strict';
  var dom = BH.core.dom;

  function watchHero(header) {
    var hero = dom.qs('.hero');
    if (!hero || !('IntersectionObserver' in window)) { header.setAttribute('data-solid', 'true'); return; }
    var io = new IntersectionObserver(function (entries) {
      header.setAttribute('data-solid', entries[0].isIntersecting ? 'false' : 'true');
    }, { rootMargin: '-' + (header.offsetHeight || 72) + 'px 0px 0px 0px' });
    io.observe(hero);
  }

  function watchSections(header) {
    if (!('IntersectionObserver' in window)) return;
    var links = dom.qsa('.site-nav a', header);
    var bySection = {};
    links.forEach(function (a) {
      var section = document.getElementById(a.getAttribute('href').slice(1));
      if (section) bySection[section.id] = a;
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        if (bySection[e.target.id]) bySection[e.target.id].setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(bySection).forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  BH.modules.header = {
    init: function (header) { watchHero(header); watchSections(header); }
  };
})(window.BH);
