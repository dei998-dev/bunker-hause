/* Shared dialog behaviour for every .overlay: open/close, focus trap, Escape, scroll lock, focus return.
   Any element with data-open="<overlay id>" opens it (works for content rendered later, via delegation). */
(function (BH) {
  'use strict';
  var dom = BH.core.dom;
  var openStack = [];

  function open(id, trigger, detail) {
    var el = document.getElementById(id);
    if (!el || !el.hidden) return;
    el.hidden = false;
    el.setAttribute('data-state', 'open');
    el._returnFocus = trigger || document.activeElement;
    document.body.classList.add('has-overlay');
    dom.qsa('main, .site-header, .site-footer, .mobile-bar').forEach(function (n) { n.setAttribute('inert', ''); });
    openStack.push(el);
    el.dispatchEvent(new CustomEvent('bh:open', { detail: detail || {} }));
    dom.qsa('[aria-controls="' + id + '"]').forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    var first = dom.focusable(el).filter(function (n) { return !n.hasAttribute('data-close') || n.tagName === 'BUTTON'; })[0];
    requestAnimationFrame(function () { (dom.qs('[data-autofocus]', el) || first || el).focus(); });
  }

  function close(el) {
    if (!el || el.hidden) return;
    el.setAttribute('data-state', 'closing');
    dom.qsa('[aria-controls="' + el.id + '"]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    var done = function () {
      el.hidden = true; el.removeAttribute('data-state');
      openStack = openStack.filter(function (x) { return x !== el; });
      if (!openStack.length) {
        document.body.classList.remove('has-overlay');
        dom.qsa('[inert]').forEach(function (n) { if (!n.classList.contains('hero-slide')) n.removeAttribute('inert'); });
      }
      if (el._returnFocus && el._returnFocus.focus) el._returnFocus.focus({ preventScroll: true });
    };
    if (dom.reducedMotion()) done(); else setTimeout(done, 170);
  }

  document.addEventListener('click', function (e) {
    var opener = e.target.closest('[data-open]');
    if (opener) { e.preventDefault(); open(opener.getAttribute('data-open'), opener, { item: opener.getAttribute('data-panel-item') }); return; }
    var closer = e.target.closest('[data-close]');
    if (closer) {
      var ov = closer.closest('.overlay');
      if (ov) { if (closer.tagName !== 'A') e.preventDefault(); else ov._returnFocus = null; close(ov); }
    }
  });

  document.addEventListener('keydown', function (e) {
    var top = openStack[openStack.length - 1];
    if (!top) return;
    if (e.key === 'Escape') { e.preventDefault(); close(top); return; }
    if (e.key === 'Tab') {
      var f = dom.focusable(top); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  BH.core.overlay = { open: open, close: close };
})(window.BH);
