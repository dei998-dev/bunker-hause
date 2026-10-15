/* Room catalogue. TODO(client): real room names, capacities and rates (price: null shows "See rates"). */
(function (BH) {
  'use strict';
  var P = 'assets/img/photos/';
  BH.data.rooms = [
    { id: 'uno', plaque: 'Uno', name: { es: 'Habitación Uno', en: 'Room Uno' },
      kind: { es: 'Privada · cama doble', en: 'Private · double bed' }, guests: 2, bath: { es: 'Baño compartido', en: 'Shared bathroom' },
      price: null, image: P + 'room-door-uno.jpg', imageAlt: { es: 'Puerta azul de la habitación Uno con murales geométricos', en: 'Blue door of room Uno with geometric murals' } },
    { id: 'privada', name: { es: 'Habitación privada', en: 'Private room' },
      kind: { es: 'Privada · cama doble', en: 'Private · double bed' }, guests: 2, bath: { es: 'Baño compartido', en: 'Shared bathroom' },
      badge: { es: 'Vista a la ciudad', en: 'City view' },
      price: null, image: P + 'room-dresser.jpg', imageAlt: { es: 'Cama con cobija azul y cómoda roja de madera', en: 'Bed with a blue blanket and a red wooden dresser' } },
    { id: 'dorm', name: { es: 'Dormitorio compartido', en: 'Shared dorm' },
      kind: { es: 'Cama en litera', en: 'Bunk bed' }, guests: 1, bath: { es: 'Baño compartido', en: 'Shared bathroom' },
      price: null, unit: { es: '/ cama', en: '/ bed' }, image: P + 'dorm-bunks.jpg', imageAlt: { es: 'Literas con cortinas y alfombra andina', en: 'Bunk beds with curtains and an Andean rug' } },
    { id: 'escalera', name: { es: 'Habitación del altillo', en: 'Loft room' },
      kind: { es: 'Privada · cama individual', en: 'Private · single bed' }, guests: 1, bath: { es: 'Baño compartido', en: 'Shared bathroom' },
      price: null, image: P + 'stair-room-plaque.jpg', imageAlt: { es: 'Escalera hacia una habitación con placa de madera', en: 'Stairs up to a room with a wooden plaque' } }
  ];
})(window.BH);
