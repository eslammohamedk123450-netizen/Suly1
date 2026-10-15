export function setupInteractions(siteConfig) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      img.closest('.project-visual')?.classList.add('image-missing');
      img.alt = 'Image placeholder';
    });
  });

  const cursor = document.querySelector('.cursor-orb');
  if (cursor && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
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
  const closeButton = document.querySelector('.dialog-close');

  const openProject = (project) => {
    dialogTitle.textContent = project.title;
    dialogCategory.textContent = `${project.label} / ${project.category}`;
    dialogDescription.textContent = project.detail;
    dialogTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join('');
    dialogArt.innerHTML = `<img src="${project.image}" alt="" />`;
    dialogLinks.innerHTML = '';
    if (project.liveUrl || project.sourceUrl) {
      dialogLinks.innerHTML = [
        project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">Live demo ↗</a>` : '',
        project.sourceUrl ? `<a href="${project.sourceUrl}" target="_blank" rel="noreferrer">Source code ↗</a>` : ''
      ].join('');
    } else {
      dialogLinks.innerHTML = '<span class="dialog-placeholder">Links will appear here when a real deployment or repository is available.</span>';
    }
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  };

  document.querySelectorAll('[data-project-id]').forEach((card) => {
    const project = siteConfig.projects.find((item) => item.id === card.dataset.projectId);
    card.addEventListener('click', () => openProject(project));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(project); }
    });
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

  document.querySelectorAll('.button, .text-link, .contact-link').forEach((element) => {
    element.addEventListener('pointerdown', () => element.classList.add('is-pressed'));
    element.addEventListener('pointerup', () => element.classList.remove('is-pressed'));
    element.addEventListener('pointerleave', () => element.classList.remove('is-pressed'));
  });
}
