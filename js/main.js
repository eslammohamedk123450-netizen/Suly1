import { siteConfig } from './site-config.js';
import { setupNavigation } from './navigation.js';
import { setupInteractions } from './interactions.js';
import { initThreeScene } from './three-scene.js';

const root = document.documentElement;
let activeLanguage = localStorage.getItem('eslam-language') || siteConfig.defaultLanguage;
let current = siteConfig.translations[activeLanguage] || siteConfig.translations.en;

function applyTheme() {
  Object.entries(siteConfig.theme).forEach(([key, value]) => root.style.setProperty(`--${key}`, value));
}

function safeLink(url, label, icon) {
  if (!url) return '';
  const href = url.startsWith('mailto:') || url.startsWith('https://') || url.startsWith('http://') || url.startsWith('tel:') ? url : `https://${url}`;
  return `<a href="${href}" target="_blank" rel="noreferrer" class="contact-link"><span>${icon}</span><span>${label}</span><b>↗</b></a>`;
}

function updateText() {
  root.lang = activeLanguage;
  root.dir = current.direction;
  document.title = `${current.site.name} — ${current.site.brandRole}`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', current.site.description);
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (current.ui[key] && typeof current.ui[key] === 'string') element.textContent = current.ui[key];
  });
  document.querySelectorAll('[data-site]').forEach((element) => {
    const key = element.dataset.site;
    if (current.site[key]) element.textContent = current.site[key];
  });
  const profile = document.querySelector('[data-profile-image]');
  if (profile) profile.src = siteConfig.profileImage;
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
  document.querySelectorAll('[data-language]').forEach((button) => button.classList.toggle('is-active', button.dataset.language === activeLanguage));
}

function renderSkills() {
  document.querySelector('#skills-list').innerHTML = current.skills.map((skill) => `<article class="skill-row"><span class="skill-mark">${skill.mark}</span><div class="skill-name"><h3>${skill.name}</h3><p>${skill.detail}</p></div><span class="skill-level">${skill.level}</span></article>`).join('');
}

function renderProjects() {
  document.querySelector('#project-list').innerHTML = current.projects.map((project, index) => `<article class="project-card reveal ${index % 2 ? 'project-card-offset' : ''}" data-project-id="${project.id}" tabindex="0" role="button" aria-label="Open details for ${project.title}"><div class="project-visual"><img src="${project.image}" alt="Abstract thumbnail for ${project.title}" loading="lazy" /><span class="project-number">${project.label}</span><span class="project-badge">${current.ui.featured}</span><span class="project-open">↗</span></div><div class="project-info"><p class="project-category">${project.category}</p><h3>${project.title}</h3><p>${project.description}</p><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div></div></article>`).join('');
}

function renderServices() {
  const icons = ['◈', '⌁', '▦', '✦'];
  document.querySelector('#services-list').innerHTML = current.ui.services.map((service, index) => `<article class="service-card"><span>${icons[index]}</span><b>0${index + 1}</b><h3>${service}</h3><p>${current.site.servicesIntro}</p></article>`).join('');
}

function renderBlog() {
  document.querySelector('#blog-list').innerHTML = current.ui.blogCards.map((card, index) => `<article class="blog-card"><span>0${index + 1} / NOTE</span><h3>${card.title}</h3><p>${card.text}</p><a href="#contact">${current.ui.readMore} <b>↗</b></a></article>`).join('');
}

function renderJourneyCompatibility() {
  // Keep the existing config timeline available to editors even though this visual direction uses Services/Blog.
  return current.journey;
}

function renderContact() {
  const { email, whatsapp, github, linkedin, instagram, youtube, telegram } = siteConfig.contact;
  const socialLabels = activeLanguage === 'ar' ? [['whatsapp', 'واتساب', '◌'], ['github', 'GitHub', '⌘'], ['linkedin', 'LinkedIn', 'in'], ['instagram', 'إنستغرام', '◎'], ['youtube', 'YouTube', '▶'], ['telegram', 'تيليجرام', '➤']] : [['whatsapp', 'WhatsApp', '◌'], ['github', 'GitHub', '⌘'], ['linkedin', 'LinkedIn', 'in'], ['instagram', 'Instagram', '◎'], ['youtube', 'YouTube', '▶'], ['telegram', 'Telegram', '➤']];
  const links = [safeLink(`mailto:${email}`, email, '@')];
  socialLabels.forEach(([key, label, icon]) => {
    links.push(siteConfig.contact[key] ? safeLink(siteConfig.contact[key], label, icon) : `<div class="contact-link is-placeholder"><span>${icon}</span><span>${label}</span><small>${activeLanguage === 'ar' ? 'أضف الرابط من ملف الإعداد' : 'Add URL in config'}</small><b>＋</b></div>`);
  });
  document.querySelector('#contact-links').innerHTML = links.join('') || `<p class="contact-placeholder">${activeLanguage === 'ar' ? 'أضف روابط التواصل من js/site-config.js' : 'Add your contact links in js/site-config.js'}</p>`;
  document.querySelector('#rail-socials').innerHTML = [
    safeLink(github, 'GitHub', '⌘'), safeLink(linkedin, 'LinkedIn', 'in'), safeLink(instagram, 'Instagram', '◎'), safeLink(youtube, 'YouTube', '▶'), safeLink(whatsapp, 'WhatsApp', '◌')
  ].filter(Boolean).map((link) => link.replace('class="contact-link"', 'class="rail-social"')).join('');
}

function renderAll() {
  current = siteConfig.translations[activeLanguage] || siteConfig.translations.en;
  updateText(); renderSkills(); renderProjects(); renderServices(); renderBlog(); renderContact(); renderJourneyCompatibility();
}

function setupLanguage() {
  document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => {
    activeLanguage = button.dataset.language;
    localStorage.setItem('eslam-language', activeLanguage);
    renderAll();
    document.dispatchEvent(new CustomEvent('languagechange', { detail: activeLanguage }));
  }));
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle?.addEventListener('click', () => document.body.classList.toggle('soft-mode'));
}

async function bootstrap() {
  applyTheme(); renderAll(); setupLanguage(); setupNavigation(); setupInteractions(siteConfig, () => current); await initThreeScene({ canvas: document.querySelector('#hero-canvas'), fallback: document.querySelector('#hero-fallback') });
}

bootstrap();
