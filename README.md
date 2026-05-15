# MeshCraft Website

Public GitHub Pages website for MeshCraft, an iPhone and iPad app for creating mesh gradients, wallpapers, backgrounds, and abstract visuals.

The site is intentionally static: plain HTML and CSS, no backend, and no build step. It hosts the public marketing page, support information, and privacy policy used by the app.

## Structure

- `index.html` contains the single-page website.
- `styles.css` contains all layout and visual styling.
- `site.js` contains the client-side localization logic and translated copy.
- `assets/` contains optimized images loaded by the website.
- `screenshots/` contains source public app screenshots.
- `meshes/` contains source mesh examples.

Localized links use the `lang` query parameter with normal section anchors, for example `/?lang=fr#privacy`.
