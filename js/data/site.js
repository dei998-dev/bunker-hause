/* Business facts used across the site. Source: Airbnb/Hostelworld listings and Instagram (Oct 2026).
   TODO(client): confirm every value before launch — the Hostelworld info is known to be outdated. */
(function (BH) {
  'use strict';
  BH.data.site = {
    name: 'Bunker Hause',
    whatsapp: '593984083856',            // used for wa.me links (from the Instagram flyers)
    whatsappLabel: '+593 98 408 3856',
    instagram: 'bunker_hause',
    address: { line1: 'Pasaje San Gabriel Oe1-111 y Jorge Juan', line2: 'Quito, Ecuador', maps: 'https://maps.google.com/?q=Pasaje+San+Gabriel+Oe1-111+Quito' },
    whatsappMessages: {
      general: { es: 'Hola Bunker Hause, tengo una consulta.', en: 'Hi Bunker Hause, I have a question.' },
      space: { es: 'Hola Bunker Hause, quiero cotizar un evento en su espacio.', en: 'Hi Bunker Hause, I would like a quote for an event at your space.' }
    },
    hours: [
      { es: 'Check-in 14:00 – 19:00', en: 'Check-in 2 pm – 7 pm' },
      { es: 'Check-out hasta las 12:00', en: 'Check-out by 12 noon' },
      { es: 'Rooftop: jue a sáb, 18:00 – 23:00', en: 'Rooftop: Thu to Sat, 6 pm – 11 pm' }
    ],
    facts: [
      { icon: 'pin', es: 'Cerca del Parque La Carolina', en: 'Near Parque La Carolina' },
      { icon: 'sun', es: 'Rooftop con vista a Quito', en: 'Rooftop over Quito' },
      { icon: 'wifi', es: 'Wifi de 179 Mbps', en: '179 Mbps wifi' },
      { icon: 'heart', es: 'Queer-friendly', en: 'Queer-friendly' }
    ],
    amenities: [
      { icon: 'wifi', title: { es: 'Coworking y wifi rápido', en: 'Co-working and fast wifi' }, text: { es: '179 Mbps y un espacio para trabajar.', en: '179 Mbps and a dedicated workspace.' } },
      { icon: 'sun', title: { es: 'Rooftop', en: 'Rooftop' }, text: { es: 'Pizza y bebidas, jue a sáb de 18:00 a 23:00.', en: 'Pizza and drinks, Thu–Sat 6–11 pm.' } },
      { icon: 'plane', title: { es: 'Transfer al aeropuerto', en: 'Airport transfer' }, text: { es: '$25 en efectivo, ida o vuelta.', en: '$25 cash, each way.' } },
      { icon: 'laundry', title: { es: 'Lavandería aliada', en: 'Partner laundry' }, text: { es: 'Te traen la ropa a la casa sin costo extra.', en: 'They bring your clothes back at no extra cost.' } }
    ]
  };
})(window.BH);
