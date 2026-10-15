/* Availability search. Prototype: validates and reports; later it queries the availability service
   (Airbnb iCal sync → own calendar) and goes to the booking page. */
(function (BH) {
  'use strict';
  var dom = BH.core.dom, i18n = BH.core.i18n;
  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  BH.modules['booking-bar'] = {
    init: function (form) {
      var cin = form.elements.checkin, cout = form.elements.checkout, status = dom.qs('[data-booking-status]', form);
      var today = new Date();
      cin.min = iso(today);
      cout.min = iso(new Date(today.getTime() + 864e5));
      cin.addEventListener('change', function () {
        if (!cin.value) return;
        var next = new Date(cin.value + 'T00:00'); next.setDate(next.getDate() + 1);
        cout.min = iso(next);
        if (!cout.value || cout.value <= cin.value) cout.value = iso(next);
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = cin.value && cout.value && cout.value > cin.value;
        cout.closest('.field').classList.toggle('field--error', !ok);
        cout.setAttribute('aria-invalid', String(!ok));
        if (!ok) { status.textContent = i18n.t('booking.errDates'); (cin.value ? cout : cin).focus(); return; }
        var nights = Math.round((new Date(cout.value) - new Date(cin.value)) / 864e5);
        var g = form.elements.guests;
        status.textContent = i18n.t('booking.ok', { nights: nights, guests: g.options[g.selectedIndex].text });
      });
    }
  };
})(window.BH);
