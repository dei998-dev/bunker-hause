/* Hero slides — what's on right now. Keep 3–5. `action` opens the book panel or links to a section. */
(function (BH) {
  'use strict';
  BH.data.slides = [
    {
      id: 'safismo',
      eyebrow: { es: 'Este viernes en el rooftop', en: 'This Friday on the rooftop' },
      title: { es: 'Safismo Social', en: 'Safismo Social' },
      lead: { es: 'Música, juegos y gente bonita. Una noche para conocer a la comunidad sáfica de Quito, con una bebida de cortesía.', en: "Music, games and lovely people. A night to meet Quito's sapphic community, with a welcome drink." },
      image: 'assets/img/photos/rooftop-friends.jpg',
      imageAlt: { es: 'Dos amigas ríen en el rooftop de Bunker Hause', en: 'Two friends laughing on the Bunker Hause rooftop' },
      stamp: { top: { es: 'Vie', en: 'Fri' }, big: '23', bottom: { es: 'Oct', en: 'Oct' } },
      primary: { label: 'cta.bookTicket', panel: 'events' },
      secondary: { label: 'agenda.all', href: '#agenda' }
    },
    {
      id: 'rooms',
      eyebrow: { es: 'Duerme en la Hause', en: 'Sleep at the Hause' },
      title: { es: 'Tu casa en Quito', en: 'Your home in Quito' },
      lead: { es: 'Camas y habitaciones privadas con luz natural, self check-in y una comunidad de viajeros, nómadas digitales y gente local.', en: 'Beds and private rooms with natural light, self check-in and a community of travellers, digital nomads and locals.' },
      image: 'assets/img/photos/room-door-uno.jpg',
      imageAlt: { es: 'Puerta azul de la habitación Uno, con murales geométricos andinos', en: 'The blue door of room Uno, with Andean geometric murals' },
      stamp: { top: { es: 'Check-in', en: 'Check-in' }, big: '14h', bottom: { es: 'a 19h', en: 'to 7 pm' } },
      primary: { label: 'cta.book', panel: 'rooms' },
      secondary: { label: 'nav.rooms', href: '#habitaciones' }
    },
    {
      id: 'space',
      eyebrow: { es: 'Alquila el espacio', en: 'Host an event' },
      title: { es: 'Tu evento, en nuestra casa', en: 'Your event, in our house' },
      lead: { es: 'Rooftop, sala y bar para talleres, shows y celebraciones, con la difusión de nuestra comunidad.', en: 'Rooftop, lounge and bar for workshops, shows and celebrations, with a shout-out to our community.' },
      image: 'assets/img/photos/tile-wall-cocktail.jpg',
      imageAlt: { es: 'Una invitada brinda frente a la pared de azulejos turquesa', en: 'A guest raises a cocktail against the turquoise tiles' },
      stamp: { top: { es: 'Rooftop', en: 'Rooftop' }, big: '3', bottom: { es: 'espacios', en: 'spaces' } },
      primary: { label: 'space.cta', panel: 'space' },
      secondary: { label: 'nav.space', href: '#espacio' }
    }
  ];
})(window.BH);
