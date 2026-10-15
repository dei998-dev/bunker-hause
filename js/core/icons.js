/* Line icons (24px grid, 1.75 stroke). Fill any <svg data-icon="name"> or call BH.core.icons.svg(name). */
(function (BH) {
  'use strict';
  var P = {
    'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
    'arrow-left': ['M19 12H5', 'M11 6l-6 6 6 6'],
    'calendar': ['M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z', 'M4 10h16', 'M8.5 3v4', 'M15.5 3v4'],
    'clock': ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 7v5l3 2'],
    'pin': ['M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z', 'M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'],
    'users': ['M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', 'M3 20c.6-3.4 3-5.5 6-5.5s5.4 2.1 6 5.5', 'M16 4.3a3.5 3.5 0 0 1 0 6.4', 'M18 14.8c1.6.7 2.7 2.4 3 5.2'],
    'bed': ['M3 18V7', 'M3 14h18v4', 'M21 14v-2.5A2.5 2.5 0 0 0 18.5 9H11v5', 'M7 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'],
    'bath': ['M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z', 'M6 12V6a2 2 0 0 1 4 0', 'M7 19l-1 2', 'M17 19l1 2'],
    'chat': ['M4 12a8 8 0 1 1 3.3 6.5L4 19.5l1-3.3A8 8 0 0 1 4 12z', 'M9 10.5h6', 'M9 13.5h4'],
    'close': ['M6 6l12 12', 'M18 6L6 18'],
    'menu': ['M4 7h16', 'M4 12h16', 'M4 17h16'],
    'chevron-down': ['M6 9l6 6 6-6'],
    'check': ['M5 12.5l4.5 4.5L19 7.5'],
    'ticket': ['M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V10a2 2 0 0 0 0 4v2.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5V14a2 2 0 0 0 0-4z', 'M14 6v12'],
    'wifi': ['M2.5 9a14 14 0 0 1 19 0', 'M5.5 12.2a9.5 9.5 0 0 1 13 0', 'M8.6 15.4a5 5 0 0 1 6.8 0', 'M12 19h.01'],
    'sun': ['M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M12 2v2', 'M12 20v2', 'M4.9 4.9l1.4 1.4', 'M17.7 17.7l1.4 1.4', 'M2 12h2', 'M20 12h2', 'M4.9 19.1l1.4-1.4', 'M17.7 6.3l1.4-1.4'],
    'plane': ['M10.5 13.5L3 11l1.5-1.5 7 1L16 6a2 2 0 0 1 3 3l-4.5 4.5 1 7L14 22l-2.5-7.5', 'M7 17l-3 1 1-3'],
    'laundry': ['M5 3h14v18H5z', 'M5 7h14', 'M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M8 5h.01'],
    'mountain': ['M3 20l6-11 4 6 2-3 6 8z', 'M8 11l1.5 1.5L11 11'],
    'heart': ['M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z'],
    'pause': ['M9 5v14', 'M15 5v14'],
    'play': ['M7 5l12 7-12 7z'],
    'instagram': ['M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M17.2 6.8h.01']
  };
  function inner(name) { return (P[name] || []).map(function (d) { return '<path d="' + d + '"/>'; }).join(''); }
  BH.core.icons = {
    svg: function (name, cls) {
      return '<svg class="icon' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + inner(name) + '</svg>';
    },
    hydrate: function (root) {
      BH.core.dom.qsa('svg[data-icon]', root).forEach(function (el) {
        el.setAttribute('viewBox', '0 0 24 24');
        el.setAttribute('focusable', 'false');
        el.innerHTML = inner(el.getAttribute('data-icon'));
      });
    }
  };
})(window.BH);
