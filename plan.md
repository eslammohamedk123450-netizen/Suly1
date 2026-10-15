# ESLAM MOHAMED Portfolio — Implementation Plan

## Scope

A static, single-page portfolio for Islam Mohamed / ESLAM MOHAMED — DIGITAL CREATOR. The site will run directly from GitHub Pages with no build step, backend, database, or private credentials. Personal content stays centralized in `js/site-config.js`.

## Implementation approach

- **HTML shell:** semantic sections, metadata, import map, accessible controls, modal markup, and a WebGL fallback state.
- **CSS system:** CSS custom properties from the config theme, editorial layout, restrained violet/indigo accents, responsive breakpoints, and reduced-motion overrides.
- **Content rendering:** `js/main.js` reads the configuration and renders skills, projects, journey milestones, contact links, and dynamic copyright year.
- **Interaction modules:** `navigation.js` owns mobile navigation, active-section tracking, and smooth anchor behavior. `interactions.js` owns reveals, pointer spotlight, project detail modal, image fallback, and button feedback.
- **3D module:** `three-scene.js` dynamically imports Three.js from a documented CDN, builds procedural metallic geometry, handles resize/device quality, mouse parallax, idle motion, disposal, and a graceful CSS fallback.
- **Assets:** lightweight local SVG artwork for project thumbnails, a replaceable `assets/images/profile.jpg` placeholder, and a favicon. No generated person image is used.
- **Static hosting:** all asset references are relative; `manus-routes.json` describes the root page; `404.html` falls back to the root experience.

## Design direction

### Considered styles

1. **Editorial techno-noir** — a quiet, gallery-like portfolio where typography and negative space frame a sculptural 3D object. (0.06)
2. Neon cyberpunk dashboard — high-energy panels, strong grids, and vivid fluorescent accents. (0.04)
3. Soft brutalist lab notebook — raw typography, utilitarian lines, and exposed system details. (0.08)

### Selected: Editorial techno-noir

- **Design movement:** Digital editorialism blended with luxury product-launch art direction.
- **Core principles:** quiet confidence, contrast through spacing, one sculptural focal point, and motion with purpose.
- **Color philosophy:** near-black and midnight navy create depth; violet is used as an owned signal, not a blanket glow; silver and muted lavender keep the interface precise and readable.
- **Layout paradigm:** asymmetric split compositions and a vertical editorial rail replace centered card stacks. Sections alternate between wide copy fields and compact information columns.
- **Signature elements:** a thin violet timeline rule, numbered section labels, and a clipped orbital mark repeated in the logo, dividers, and 3D scene.
- **Interaction philosophy:** controls feel tactile and measured; hover states reveal intent with a small shift, underline, or light sweep rather than loud effects.
- **Animation:** hero content enters in a short staged sequence; section content reveals once; the 3D object idles slowly; pointer response is subtle and disabled under reduced-motion.
- **Typography system:** Space Grotesk for display and labels, Inter for body copy, with system fallbacks for offline use. Large headings use tight tracking and a compact line-height; body text stays open and readable.
- **Brand essence:** a personal studio journal for learning-led creative development — precise, curious, and experimental.
- **Brand voice:** direct, thoughtful, and quietly ambitious. Example lines: “Ideas become interfaces when you give them a system.” / “Selected experiments, built in public.”
- **Wordmark & logo:** an `EM` monogram built from two offset brackets, paired with a compact all-caps wordmark.
- **Signature brand color:** `#8B5CF6`, a restrained signal violet used for focus, rules, and the orbital accent.

## Project structure

```text
eslam-portfolio/
├── index.html
├── 404.html
├── manus-routes.json
├── README.md
├── LICENSE-THIRD-PARTY.md
├── plan.md
├── TODO.md
├── app.config.ts
├── css/
│   ├── main.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── site-config.js
│   ├── main.js
│   ├── navigation.js
│   ├── interactions.js
│   └── three-scene.js
└── assets/
    ├── icons/favicon.svg
    ├── images/profile.jpg
    ├── images/project-suly.svg
    ├── images/project-3d.svg
    └── images/project-store.svg
```

## Build and verification workflow

1. Write the static source files and local SVG/placeholder assets.
2. Start the configured preview service on port 3000.
3. Check HTML, CSS, JavaScript, JSON, referenced paths, and ZIP extraction locally.
4. Use the managed preview screenshot tool at desktop and mobile sizes.
5. Exercise navigation and modal behavior in the browser where useful, then inspect console output.
6. Fix confirmed issues, create the requested ZIP, and save a checkpoint for the managed project.

## Known limitations

- Three.js is loaded from `unpkg.com` at runtime; the README documents the internet requirement and the CSS fallback remains usable offline.
- Contact links are placeholders until Islam replaces them in `js/site-config.js`.
- Project entries are intentionally labeled concept/demo work and contain no invented live links.
