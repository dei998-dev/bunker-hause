/* La Agenda. Formats and prices follow real events on @bunker_hause; the DATES ARE SAMPLES for the proposal.
   category: comunidad | comedia | bienestar | talleres | musica  (labels and colours live in components/category-tag.js) */
(function (BH) {
  'use strict';
  var P = 'assets/img/photos/';
  BH.data.categories = ['comunidad', 'comedia', 'bienestar', 'talleres', 'musica'];
  BH.data.events = [
    { id: 'open-mic', category: 'comedia', date: '2026-10-22', time: '19:30', place: { es: 'Bar', en: 'Bar' },
      title: { es: 'Stand Up Comedy · Open Mic', en: 'Stand-up Comedy · Open Mic' },
      host: { es: 'Con La Papayas', en: 'Hosted by La Papayas' },
      price: { es: 'Aporte voluntario', en: 'Pay what you want' }, image: P + 'tile-wall-cocktail.jpg',
      imageAlt: { es: 'Invitada sonriendo con un cóctel', en: 'A smiling guest with a cocktail' } },
    { id: 'safismo-social', category: 'comunidad', date: '2026-10-23', time: '18:00', place: { es: 'Rooftop', en: 'Rooftop' },
      title: { es: 'Safismo Social', en: 'Safismo Social' },
      price: '$13', priceNote: '· 2 × $20', note: { es: 'Incluye una bebida de cortesía.', en: 'Includes a welcome drink.' },
      image: P + 'rooftop-friends.jpg', imageAlt: { es: 'Dos amigas ríen en el rooftop', en: 'Two friends laughing on the rooftop' } },
    { id: 'yoga-zazen', category: 'bienestar', date: '2026-10-24', time: '10:00', place: { es: 'Terraza', en: 'Terrace' },
      title: { es: 'Yoga + Meditación Zazen', en: 'Yoga + Zazen meditation' },
      price: '$15', priceNote: '· 2 × $25', soldOut: true, image: P + 'room-dresser.jpg',
      imageAlt: { es: 'Toallas enrolladas sobre una cama', en: 'Rolled towels on a bed' } },
    { id: 'conexiones', category: 'talleres', date: '2026-10-28', time: '19:00', place: { es: 'Sala', en: 'Lounge' },
      title: { es: 'Conexiones en la Hause: salud preventiva', en: 'Conexiones en la Hause: preventive health' },
      price: '$3', note: { es: 'Conversatorio con invitadas especialistas.', en: 'An open talk with guest specialists.' },
      image: P + 'house-rules.jpg', imageAlt: { es: 'Una huésped lee un folleto en la cama', en: 'A guest reading a leaflet in bed' } },
    { id: 'karaoke', category: 'musica', date: '2026-10-30', time: '19:30', place: { es: 'Bar', en: 'Bar' },
      title: { es: 'Noche de Karaoke', en: 'Karaoke night' },
      price: { es: 'Entrada libre', en: 'Free entry' }, note: { es: 'Micrófono abierto, corazón contento.', en: 'Open mic, happy heart.' },
      image: P + 'stair-room-plaque.jpg', imageAlt: { es: 'Escalera con la placa de una habitación', en: 'A staircase with a room plaque' } },
    { id: 'shibari-jam', category: 'talleres', date: '2026-11-05', time: '19:00', place: { es: 'Sala', en: 'Lounge' },
      title: { es: 'Shibari · Jam de dibujo', en: 'Shibari · Drawing jam' },
      price: '$6', priceNote: { es: '· pareja $10', en: '· couple $10' }, image: P + 'dorm-bunks.jpg',
      imageAlt: { es: 'Alfombra andina entre literas', en: 'Andean rug between bunk beds' } },
    { id: 'teatro-ciegas', category: 'comedia', date: '2026-11-06', time: '19:00', place: { es: 'Toda la casa', en: 'The whole house' },
      title: { es: 'Teatro a Ciegas: Orígenes', en: 'Blind Theatre: Orígenes' },
      price: { es: 'Cupos limitados', en: 'Limited places' }, note: { es: 'Un viaje sensorial. Sin ver, solo sentir.', en: 'A sensory journey. No seeing, only feeling.' },
      image: P + 'room-door-uno.jpg', imageAlt: { es: 'Puerta azul con murales geométricos', en: 'Blue door with geometric murals' } },
    { id: 'trueque', category: 'comunidad', date: '2026-11-14', time: '10:00', place: { es: 'Rooftop', en: 'Rooftop' },
      title: { es: 'Día de Trueque', en: 'Swap Day' },
      price: { es: 'Entrada libre', en: 'Free entry' }, note: { es: 'Trae lo que ya no usas y llévate algo nuevo.', en: "Bring what you don't use and take something new." },
      image: P + 'rooftop-friends.jpg', imageAlt: { es: 'Amigas en el rooftop', en: 'Friends on the rooftop' } }
  ];
})(window.BH);
