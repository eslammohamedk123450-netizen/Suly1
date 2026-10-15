export function setupInteractions(siteConfig, getContent = () => siteConfig) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  const observeReveals = () => document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => revealObserver.observe(element));
  observeReveals();

  document.addEventListener('languagechange', observeReveals);
  document.querySelectorAll('img').forEach((img) => img.addEventListener('error', () => { img.closest('.project-visual')?.classList.add('image-missing'); img.alt = 'Image placeholder'; }));

  if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    }, { passive: true });
  }

  const dialog = document.querySelector('#project-dialog');
  const dialogTitle = document.querySelector('#dialog-title');
  const dialogCategory = document.querySelector('#dialog-category');
  const dialogDescription = document.querySelector('#dialog-description');
  const dialogTags = document.querySelector('#dialog-tags');
  const dialogLinks = document.querySelector('#dialog-links');
  const dialogArt = document.querySelector('#dialog-art');

  const openProject = (project) => {
    if (!project) return;
    dialogTitle.textContent = project.title;
    dialogCategory.textContent = `${project.label} / ${project.category}`;
    dialogDescription.textContent = project.detail;
    dialogTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join('');
    dialogArt.innerHTML = `<img src="${project.image}" alt="" />`;
    dialogLinks.innerHTML = project.liveUrl || project.sourceUrl ? [project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">Live demo ↗</a>` : '', project.sourceUrl ? `<a href="${project.sourceUrl}" target="_blank" rel="noreferrer">Source code ↗</a>` : ''].join('') : '<span class="dialog-placeholder">Links will appear when a real deployment or repository is available.</span>';
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
  };

  document.querySelector('#project-list').addEventListener('click', (event) => {
    const card = event.target.closest('[data-project-id]');
    if (card) openProject(getContent().projects.find((project) => project.id === card.dataset.projectId));
  });
  document.querySelector('#project-list').addEventListener('keydown', (event) => {
    const card = event.target.closest('[data-project-id]');
    if (card && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openProject(getContent().projects.find((project) => project.id === card.dataset.projectId)); }
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

  document.addEventListener('pointerdown', (event) => {
    const target = event.target.closest('.button, .text-link, .contact-link, .rail-social');
    if (target) target.classList.add('is-pressed');
  });
  document.addEventListener('pointerup', () => document.querySelectorAll('.is-pressed').forEach((element) => element.classList.remove('is-pressed')));
}
