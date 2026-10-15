/* Bunker Hause — global namespace.
   Every file registers itself on window.BH so the site works as plain scripts
   (opened from disk or any static host) without a build step.
   BH.data       content (events, rooms…) — edit these to change what the page shows
   BH.components pure template functions: data → HTML string
   BH.modules    behaviour, each with init(root) — booted by js/main.js from [data-module] */
window.BH = window.BH || { core: {}, data: {}, components: {}, modules: {} };
