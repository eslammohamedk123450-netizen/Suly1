
## Latest visual direction

The current interface follows the supplied reference direction: a dark developer dashboard aesthetic with a violet/indigo glow, a fixed desktop side rail, compact top navigation, skill cards, project cards, services, notes/blog cards, and a social/contact area.

### Arabic and English

Use the `AR` and `EN` buttons in the top-right language switcher. The selected language is stored in the browser and the document automatically changes its `lang` and `dir` attributes; Arabic uses RTL layout and Cairo when the font is available. All editable translations live in `js/site-config.js` under `translations.en` and `translations.ar`.

### Social links

Add your real URLs in the `contact` object in `js/site-config.js`:

```js
contact: {
  email: 'your-email@example.com',
  whatsapp: 'https://wa.me/201000000000',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  instagram: 'https://www.instagram.com/your-handle',
  youtube: 'https://www.youtube.com/@your-channel',
  telegram: 'https://t.me/your-handle'
}
```

Empty values are intentionally not rendered as fake links. Replace the examples with your actual accounts before publishing.

### 3D laptop scene

The hero now uses a procedural Three.js laptop built from browser geometry: a metallic base, keyboard keys, hinged screen, glowing code lines, orbital ring, lighting, pointer parallax, and a CSS fallback if WebGL or the CDN is unavailable. No external 3D model is required.
