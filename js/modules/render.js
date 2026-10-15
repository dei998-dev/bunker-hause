/* Renders every [data-render="name"] list from BH.data, and re-renders on language change.
   To add a list: add a renderer below and a [data-render="name"] element in the HTML. */
(function (BH) {
  'use strict';
  var dom = BH.core.dom, esc = dom.esc, i18n = BH.core.i18n, icon = BH.core.icons.svg, C = BH.components;
  function li(inner, cls) { return '<li' + (cls ? ' class="' + cls + '"' : '') + '>' + inner + '</li>'; }
  function wa(kind) {
    var site = BH.data.site, msg = i18n.pick(site.whatsappMessages[kind] || site.whatsappMessages.general);
    return 'https://wa.me/' + site.whatsapp + '?text=' + encodeURIComponent(msg);
  }

  var renderers = {
    facts: function () { return BH.data.site.facts.map(function (x) { return li(icon(x.icon) + esc(i18n.pick(x))); }).join(''); },
    rooms: function () { return BH.data.rooms.map(function (r) { return li(C.roomCard(r)); }).join(''); },
    amenities: function () {
      return BH.data.site.amenities.map(function (a) {
        return li('<span class="amenity__icon">' + icon(a.icon) + '</span><span><b>' + esc(i18n.pick(a.title)) + '</b><span>' + esc(i18n.pick(a.text)) + '</span></span>', 'amenity');
      }).join('');
    },
    spaces: function () {
      return BH.data.spaces.map(function (s) { return li('<b>' + esc(i18n.pick(s.name)) + '</b><span>' + esc(i18n.pick(s.text)) + '</span>', 'space-item'); }).join('');
    },
    experiences: function () { return BH.data.experiences.map(function (x) { return li(C.experienceCard(x)); }).join(''); },
    journal: function () { return BH.data.journal.map(function (p) { return li(C.journalCard(p)); }).join(''); },
    address: function () {
      var a = BH.data.site.address;
      return esc(a.line1) + '<br>' + esc(a.line2) + '<br><a class="link" href="' + esc(a.maps) + '" target="_blank" rel="noopener">Google Maps</a>';
    },
    hours: function () { return BH.data.site.hours.map(function (h) { return li(esc(i18n.pick(h))); }).join(''); },
    contact: function () {
      var s = BH.data.site;
      return li('<a href="' + esc(wa('general')) + '" target="_blank" rel="noopener">WhatsApp ' + esc(s.whatsappLabel) + '</a>') +
             li('<a href="https://www.instagram.com/' + esc(s.instagram) + '/" target="_blank" rel="noopener">Instagram @' + esc(s.instagram) + '</a>');
    }
  };

  function renderAll() {
    dom.qsa('[data-render]').forEach(function (el) {
      var fn = renderers[el.getAttribute('data-render')];
      if (fn) el.innerHTML = fn();
    });
    dom.qsa('[data-whatsapp]').forEach(function (a) { a.href = wa(a.getAttribute('data-whatsapp')); });
    dom.qsa('select[data-options="guests"]').forEach(function (sel) {
      var v = sel.value || '2';
      sel.innerHTML = [1, 2, 3, 4, 5, 6].map(function (n) {
        return '<option value="' + n + '">' + esc(n === 1 ? i18n.t('booking.guest1') : i18n.t('booking.guestN', { n: n })) + '</option>';
      }).join('');
      sel.value = v;
    });
    dom.qsa('[data-year]').forEach(function (el) { el.textContent = '© ' + new Date().getFullYear(); });
    document.dispatchEvent(new CustomEvent('bh:rendered'));
  }

  BH.modules.render = { init: function () { renderAll(); i18n.onChange(renderAll); }, renderers: renderers, wa: wa };
})(window.BH);
