/**
 * Single source of truth for personal content.
 * Replace placeholder contact URLs and image files here; no layout code changes are needed.
 */
export const siteConfig = {
  language: 'en',
  direction: 'ltr',
  site: {
    name: 'Islam Mohamed',
    displayName: 'ESLAM',
    surname: 'MOHAMED',
    brand: 'ESLAM MOHAMED — DIGITAL CREATOR',
    heroKicker: 'Hello, I’m Islam.',
    role: 'Developer & Digital Creator',
    heroDescription: 'I’m learning to turn ideas into digital experiences through code, visual systems, and patient experimentation.',
    aboutHeading: 'Learning the craft behind the screen.',
    aboutText: 'I’m interested in the space where programming, visual design, and human attention meet. Every project is a chance to understand a little more: how a clear system can make an idea feel natural, useful, and unexpectedly alive.',
    aboutSecondary: 'This is an honest record of experiments, study, and small leaps forward. I’m building the fundamentals one thoughtful interface at a time.',
    contactText: 'If you’d like to share a project, a question, or a useful point of view, the best way to reach me is directly.',
    profileImage: 'assets/images/profile.jpg'
  },
  theme: {
    ink: '#11111B',
    navy: '#17172A',
    violet: '#8B5CF6',
    indigo: '#312E81',
    lavender: '#C4B5FD',
    text: '#F5F3FF',
    muted: '#AAA6BD'
  },
  skills: [
    { name: 'HTML', level: 'Learning / using', detail: 'Semantic structure & accessible foundations', mark: '01' },
    { name: 'CSS', level: 'Learning / using', detail: 'Responsive systems & visual rhythm', mark: '02' },
    { name: 'JavaScript', level: 'Learning / using', detail: 'Interactions, logic & creative experiments', mark: '03' },
    { name: 'Python', level: 'Learning / using', detail: 'Exploring programming beyond the browser', mark: '04' }
  ],
  projects: [
    {
      id: 'suly',
      title: 'Suly Academic Technology',
      category: 'Educational platform concept',
      label: 'Concept / 01',
      description: 'A calm academic space concept that brings lessons, progress, and useful moments of focus into one clear experience.',
      detail: 'This demonstration explores how an educational platform could feel less like a dashboard and more like a guided study room. The next iteration would test real content structure, accessibility, and student feedback.',
      tags: ['HTML', 'CSS', 'Learning UX'],
      image: 'assets/images/project-suly.svg',
      liveUrl: '',
      sourceUrl: ''
    },
    {
      id: 'orbit',
      title: 'Interactive 3D Portfolio',
      category: 'Creative web experience concept',
      label: 'Concept / 02',
      description: 'A procedural space where motion, typography, and a small 3D study work together to introduce a creative developer.',
      detail: 'The project studies the balance between a living visual system and readable communication. It is a concept for learning Three.js, interaction design, and performance-aware motion on the web.',
      tags: ['JavaScript', 'Three.js', 'Motion'],
      image: 'assets/images/project-3d.svg',
      liveUrl: '',
      sourceUrl: ''
    },
    {
      id: 'store',
      title: 'E-Commerce Website',
      category: 'Online store concept',
      label: 'Concept / 03',
      description: 'A considered storefront direction for presenting products with clarity, confidence, and a little atmosphere.',
      detail: 'This demonstration focuses on hierarchy, product storytelling, and the small interaction details that help an online store feel trustworthy. It has no live commerce backend or checkout connection.',
      tags: ['HTML', 'CSS', 'Interface design'],
      image: 'assets/images/project-store.svg',
      liveUrl: '',
      sourceUrl: ''
    }
  ],
  journey: [
    { marker: 'Now', title: 'Building the foundations', detail: 'Example placeholder — replace this with your current focus, course, or learning goal.', state: 'current' },
    { marker: 'Next', title: 'Shipping a small real project', detail: 'Example placeholder — describe the next practical step you want to complete.', state: 'upcoming' },
    { marker: 'Later', title: 'Growing through feedback', detail: 'Example placeholder — add a future direction when it becomes specific and real.', state: 'upcoming' }
  ],
  contact: {
    email: 'your-email@example.com',
    whatsapp: '',
    github: '',
    linkedin: '',
    instagram: ''
  }
};
