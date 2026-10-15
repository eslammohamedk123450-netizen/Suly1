import { siteConfig } from './site-config.js';
import { setupNavigation } from './navigation.js';
import { setupInteractions } from './interactions.js';
import { initThreeScene } from './three-scene.js';

const root = document.documentElement;

function applyTheme() {
  Object.entries(siteConfig.theme).forEach(([key, value]) => root.style.setProperty(`--${key}`, value));
  root.lang = siteConfig.language;
  root.dir = siteConfig.direction;
}

function setTextAttributes() {
  document.querySelectorAll('[data-site]').forEach((element) => {
    const key = element.dataset.site;
    if (siteConfig.site[key]) element.textContent = siteConfig.site[key];
  });
  const profileImage = document.querySelector('[data-profile-image]');
  if (profileImage) profileImage.src = siteConfig.site.profileImage;
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
}

function renderSkills() {
  const target = document.querySelector('#skills-list');
  target.innerHTML = siteConfig.skills.map((skill) => `
    <article class="skill-row">
      <span class="skill-mark">${skill.mark}</span>
      <div class="skill-name"><h3>${skill.name}</h3><p>${skill.detail}</p></div>
      <span class="skill-level">${skill.level}</span>
    </article>
  `).join('');
}

function renderProjects() {
  const target = document.querySelector('#project-list');
  target.innerHTML = siteConfig.projects.map((project, index) => `
    <article class="project-card reveal ${index % 2 ? 'project-card-offset' : ''}" data-project-id="${project.id}" tabindex="0" role="button" aria-label="Open details for ${project.title}">
      <div class="project-visual"><img src="${project.image}" alt="Abstract thumbnail for ${project.title}" loading="lazy" /><span class="project-number">${project.label}</span><span class="project-open" aria-hidden="true">↗</span></div>
      <div class="project-info"><p class="project-category">${project.category}</p><h3>${project.title}</h3><p>${project.description}</p><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div></div>
    </article>
  `).join('');
}

function renderJourney() {
  const target = document.querySelector('#journey-list');
  target.innerHTML = siteConfig.journey.map((item) => `
    <article class="timeline-item ${item.state === 'current' ? 'is-current' : ''}">
      <div class="timeline-marker"><span>${item.marker}</span></div>
      <div class="timeline-content"><h3>${item.title}</h3><p>${item.detail}</p></div>
    </article>
  `).join('');
}

function safeLink(url, label, icon) {
  if (!url) return '';
  const href = url.startsWith('mailto:') || url.startsWith('https://') || url.startsWith('http://') || url.startsWith('tel:') || url.startsWith('https://wa.me') ? url : `https://${url}`;
  return `<a href="${href}" target="_blank" rel="noreferrer" class="contact-link"><span>${icon}</span><span>${label}</span><b>↗</b></a>`;
}

function renderContact() {
  const { email, whatsapp, github, linkedin, instagram } = siteConfig.contact;
  const links = [
    safeLink(`mailto:${email}`, email, '@'),
    whatsapp ? safeLink(whatsapp, 'WhatsApp', '◌') : '',
    safeLink(github, 'GitHub', '⌘'),
    safeLink(linkedin, 'LinkedIn', 'in'),
    safeLink(instagram, 'Instagram', '◎')
  ].filter(Boolean);
  document.querySelector('#contact-links').innerHTML = links.join('') || '<p class="contact-placeholder">Add your contact links in <code>js/site-config.js</code>.</p>';
}

async function bootstrap() {
  applyTheme();
  setTextAttributes();
  renderSkills();
  renderProjects();
  renderJourney();
  renderContact();
  setupNavigation();
  setupInteractions(siteConfig);
  await initThreeScene({ canvas: document.querySelector('#hero-canvas'), fallback: document.querySelector('#hero-fallback') });
}

bootstrap();
