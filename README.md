# Bunker Hause — website (homepage proposal)

Static HTML, CSS and JavaScript. No build step: open `index.html` in a browser, or serve the folder with any static server.

## Structure

```
index.html              Page markup. Lists (events, rooms…) are empty containers filled from js/data.
css/
  main.css              Entry file: imports everything below, in order.
  base/                 tokens (colours, type, spacing, radii), reset, typography, utilities
  layout/               container, section
  components/           reusable pieces: button, field, tag, cards, carousel, overlay, book panel, menus
  sections/             one file per homepage section (header, hero, agenda, rooms, …)
js/
  core/                 namespace, DOM helpers, safe storage, icons, brand shapes, i18n
  data/                 CONTENT — edit these to change what the page shows (ES + EN)
  components/           template functions: data → HTML (event card, room card, …)
  modules/              behaviour, one file each; started from [data-module="name"]
  main.js               boot
assets/img/             logo, photos, illustrations, shapes
```

## Common changes

- **Add an event:** add an object to `js/data/events.js` (date `YYYY-MM-DD`, category, texts in `es` and `en`).
- **Change a hero slide:** `js/data/slides.js`.
- **Change interface text:** `js/data/strings.js` (both languages).
- **Add a section:** markup in `index.html`, styles in `css/sections/<name>.css` (import it in `main.css`), behaviour in `js/modules/<name>.js` with `data-module="<name>"`.
- **Brand colours / spacing:** only in `css/base/tokens.css`.

## Language

Spanish by default. The ES/EN switch remembers the visitor's choice; `?lang=en` forces English.

## Not connected yet (prototype)

- Availability search → Airbnb calendars (iCal) / booking flow.
- Payments → Payphone.
- Newsletter → mailing tool.
- Links to detail pages (`#evento-…`, `#habitacion-…`) are placeholders.

## Before launch

- Roxborough CF webfont files (DM Serif Display is the stand-in).
- Real room names, rates and photos; event dates and photos; licence for the illustrations.
- Bundle `css/main.css` imports and the scripts for production performance.
