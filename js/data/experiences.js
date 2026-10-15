/* Recommended experiences. art: an illustration + a palette tile (ink must match the tile: teal ink on white/apricot, paper ink on teal/terracotta). */
(function (BH) {
  'use strict';
  var I = 'assets/img/illustrations/';
  BH.data.experiences = [
    { id: 'teleferico', tile: 'teal', wide: true, art: I + 'mountains-wide-paper.png',
      title: { es: 'Teleférico y Rucu Pichincha', en: 'Cable car and Rucu Pichincha' },
      text: { es: 'Sube en el TelefériQo y camina hacia la cumbre con Quito a tus pies.', en: 'Ride the TelefériQo and hike towards the summit with Quito at your feet.' },
      duration: { es: 'Medio día', en: 'Half day' }, mode: { es: 'Por tu cuenta', en: 'On your own' } },
    { id: 'carolina', tile: 'apricot', art: I + 'tree-teal.png',
      title: { es: 'Parque La Carolina', en: 'Parque La Carolina' },
      text: { es: 'A pocos minutos de la casa: bici, jardín botánico y domingos de picnic.', en: 'Minutes from the house: bikes, the botanical garden and Sunday picnics.' },
      duration: { es: '2–3 horas', en: '2–3 hours' }, mode: { es: 'Caminando', en: 'On foot' } },
    { id: 'cotopaxi', tile: 'terracotta', art: I + 'pine-paper.png',
      title: { es: 'Volcán Cotopaxi', en: 'Cotopaxi volcano' },
      text: { es: 'Páramo, lagunas y el volcán más famoso del Ecuador en un día.', en: "Highlands, lagoons and Ecuador's most famous volcano in a day." },
      duration: { es: 'Día completo', en: 'Full day' }, mode: { es: 'Tour con la casa', en: 'House tour' } },
    { id: 'mindo', tile: 'white', art: I + 'monstera-engraved-teal.png',
      title: { es: 'Mindo y el bosque nublado', en: 'Mindo cloud forest' },
      text: { es: 'Colibríes, cascadas y chocolate a dos horas de Quito.', en: 'Hummingbirds, waterfalls and chocolate two hours from Quito.' },
      duration: { es: 'Día completo', en: 'Full day' }, mode: { es: 'Tour con la casa', en: 'House tour' } }
  ];
})(window.BH);
