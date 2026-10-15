/* Journal (blog) teasers. Sample posts for the proposal. */
(function (BH) {
  'use strict';
  var P = 'assets/img/photos/';
  BH.data.journal = [
    { id: 'fin-de-semana', kicker: { es: 'Crónicas', en: 'Chronicles' }, date: '2026-10-12', image: P + 'rooftop-friends.jpg',
      title: { es: 'Lo que te perdiste este fin de semana', en: 'What you missed this weekend' } },
    { id: 'aeropuerto', kicker: { es: 'Guía Quito', en: 'Quito guide' }, date: '2026-10-02', image: P + 'stair-room-plaque.jpg',
      title: { es: 'Cómo llegar desde el aeropuerto', en: 'Getting here from the airport' } },
    { id: 'reglas', kicker: { es: 'La Hause', en: 'The Hause' }, date: '2026-09-20', image: P + 'house-rules.jpg',
      title: { es: 'Las reglas de la casa, explicadas', en: 'The house rules, explained' } }
  ];
})(window.BH);
