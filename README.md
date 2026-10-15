# ESLAM MOHAMED — Digital Creator Portfolio

A static, single-page portfolio for Islam Mohamed. The experience uses semantic HTML, CSS, vanilla JavaScript ES modules, and a procedural Three.js hero study. It is intentionally honest: the project cards are labeled **concepts/demonstrations** and do not contain invented client work, testimonials, achievements, or live URLs.

## Quick preview

No build tool is required. From the project root, run any static server, for example:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

The 3D scene imports Three.js from `https://unpkg.com/three@0.170.0/build/three.module.js`, so the full scene needs an internet connection. If the CDN or WebGL is unavailable, the page automatically shows a lightweight CSS fallback.

## Edit your content

Almost all personal content lives in `js/site-config.js`.

1. **Replace your profile image.** Replace `assets/images/profile.jpg` with your own photograph using the same filename, or update `site.profileImage` in the config. The current file is a neutral placeholder, not a generated portrait.
2. **Change your name and role.** Update `site.name`, `site.displayName`, `site.surname`, and `site.role`.
3. **Edit the introduction and About copy.** Update `heroDescription`, `aboutHeading`, `aboutText`, `aboutSecondary`, and `contactText`.
4. **Add or remove skills.** Edit the `skills` array. Each entry accepts `name`, `level`, `detail`, and `mark`; the page layout will render it automatically.
5. **Add, remove, or edit projects.** Edit the `projects` array. Each project supports `id`, `title`, `category`, `label`, `description`, `detail`, `tags`, `image`, `liveUrl`, and `sourceUrl`. Leave URL fields empty until a real deployment or repository exists.
6. **Update project images.** Put a new image in `assets/images/` and point the project `image` field to its relative path. Keep descriptive `alt` text in `js/main.js` if the image's subject changes.
7. **Change social links and contact information.** Update the `contact` object. Empty values are hidden automatically. The email link is generated from `contact.email`.
8. **Adjust colors.** Update the `theme` object. The keys map to CSS custom properties, so the visual system changes without editing layout rules.

## Project structure

- `index.html` — accessible page shell, navigation, sections, modal, metadata.
- `css/main.css` — core layout and component styling.
- `css/animations.css` — entrance, reveal, and reduced-motion rules.
- `css/responsive.css` — tablet and mobile breakpoints.
- `js/site-config.js` — the editable content source of truth.
- `js/main.js` — theme application and content rendering.
- `js/navigation.js` — mobile menu, active section, and header behavior.
- `js/interactions.js` — reveals, project details, image fallback, and focus-safe interactions.
- `js/three-scene.js` — dynamic Three.js import, procedural geometry, lighting, device quality, cleanup, and fallback.
- `assets/images/` — profile placeholder and editable project thumbnails.
- `assets/icons/favicon.svg` — small local favicon.

## GitHub Pages publishing for beginners

1. Extract `eslam-portfolio.zip`.
2. Create a new GitHub repository, or open one you already own.
3. Upload the extracted files so `index.html` is at the repository root. Do not upload the enclosing folder as the only top-level item.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select your branch (usually `main`), and choose the `/ (root)` folder.
6. Save and wait for GitHub to finish building the Pages site.
7. Open the generated URL and test the home page, navigation, project modal, contact links, and mobile layout.
8. For future edits, replace the image or edit `js/site-config.js`, commit the changes, and push them to the same branch. GitHub Pages will publish the update automatically.

For a project repository such as `username.github.io/my-portfolio`, the code uses relative paths so assets continue to work under the repository subpath.

## Personal replacement checklist

Before publishing, replace the placeholder email (`your-email@example.com`), add your WhatsApp/GitHub/social URLs, replace `assets/images/profile.jpg`, review the role and About copy, replace the example Journey milestones with real ones, and change the concept/demo project text or URLs only when the projects are genuinely deployed. Do not add claims you cannot verify.

## QA summary

The delivered build is designed and checked as a static project: asset references are relative, JavaScript is split into browser modules, the route manifest declares `/`, the 404 page uses relative links, project links are omitted when no real URL exists, and image/WebGL fallbacks are present. A preview screenshot and environment-specific checks are recorded with the handoff. The only external runtime dependency is the documented Three.js CDN import (plus optional Google Fonts).
