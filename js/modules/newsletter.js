/* Newsletter sign-up. Prototype: validates only; connect to the mailing tool later. */
(function (BH) {
  'use strict';
  var dom = BH.core.dom, i18n = BH.core.i18n;
  BH.modules.newsletter = {
    init: function (form) {
      var input = form.elements.email, status = dom.qs('[data-newsletter-status]', form);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
        input.closest('.field').classList.toggle('field--error', !ok);
        input.setAttribute('aria-invalid', String(!ok));
        status.textContent = i18n.t(ok ? 'footer.newsOk' : 'footer.newsErr');
        if (ok) form.reset(); else input.focus();
      });
    }
  };
})(window.BH);
