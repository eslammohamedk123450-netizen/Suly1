/**
 * Editable portfolio content. Change contact URLs and image paths here.
 * The language switcher stores the selected language in localStorage.
 */
export const siteConfig = {
  defaultLanguage: 'en',
  theme: { ink: '#070711', navy: '#101027', violet: '#8b5cf6', indigo: '#312e81', lavender: '#c4b5fd', text: '#f8f7ff', muted: '#aba8c0' },
  contact: {
    email: 'your-email@example.com',
    whatsapp: '',
    github: '',
    linkedin: '',
    instagram: '',
    youtube: '',
    telegram: ''
  },
  profileImage: 'assets/images/profile.jpg',
  translations: {
    en: {
      langName: 'English',
      direction: 'ltr',
      site: {
        name: 'Islam Mohamed',
        brandRole: 'Full Stack Developer',
        kicker: 'Hello, I’m Islam',
        displayName: 'Islam Mohamed',
        role: 'Full Stack Developer & Web Designer',
        description: 'I build thoughtful websites and digital experiences with clean code, expressive visuals, and a focus on learning in public.',
        availability: 'Available for new projects',
        aboutHeading: 'Building ideas into useful digital experiences.',
        aboutText: 'I’m interested in the space where programming, visual design, and human attention meet. Every project is a chance to make something clearer, faster, and more alive.',
        aboutSecondary: 'This portfolio is an honest record of experiments, study, and small steps forward. Replace the example milestones and project links with your real work as it grows.',
        skillsHeading: 'Technologies I Work With',
        skillsIntro: 'A living toolkit of technologies I’m learning or have used to build responsive, accessible, and expressive interfaces.',
        projectsHeading: 'My Latest Projects',
        projectsIntro: 'A selection of concept work and demonstrations. Real links can be added from one configuration file.',
        servicesHeading: 'What I Can Explore With You',
        servicesIntro: 'Flexible areas for collaboration while I continue developing my craft.',
        blogHeading: 'Notes From The Process',
        blogIntro: 'Short reflections on code, design, and the experiments behind the screen.',
        contactHeading: 'Let’s Build Something Amazing Together!',
        contactText: 'Have an idea, a question, or a useful point of view? Reach out directly through any of the links below.',
        footer: 'Built with curiosity and clean code.'
      },
      ui: {
        home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', servicesLabel: 'Services', blog: 'Blog', contact: 'Contact',
        viewProjects: 'View My Projects', contactMe: 'Contact Me', viewSkills: 'View All Skills', featured: 'Featured', concept: 'Concept',
        learning: 'Learning / using', toolkit: 'Current toolkit', laptopStudy: 'THREE.JS STUDY', laptopLabel: 'FORM / LAPTOP', laptopCaption: 'Procedural laptop', moveLight: 'Move pointer to shift the light', conceptProjects: 'Concept projects', coreTechnologies: 'Core technologies', honestProgress: 'Honest progress', curiousMindset: 'Curious mindset', more: '+ More', available: 'Available', readMore: 'Read more', email: 'Email me', follow: 'Follow / connect',
        services: ['Landing pages', 'Creative front-end', 'Responsive UI systems', 'Interactive experiments'],
        blogCards: [
          { title: 'Designing with intention', text: 'Why spacing, hierarchy, and restraint can make an interface feel confident.' },
          { title: 'Learning Three.js', text: 'Notes from building a procedural laptop scene for the web.' },
          { title: 'Small systems, real progress', text: 'A practical way to keep experiments honest and moving.' }
        ]
      },
      skills: [
        { name: 'HTML', level: 'Learning / using', detail: 'Semantic structure', mark: '</>' },
        { name: 'CSS', level: 'Learning / using', detail: 'Responsive visual systems', mark: '#_' },
        { name: 'JavaScript', level: 'Learning / using', detail: 'Interactions & creative code', mark: 'JS' },
        { name: 'Python', level: 'Learning / using', detail: 'Programming foundations', mark: 'Py' }
      ],
      projects: [
        { id: 'suly', title: 'Suly Academic Technology', category: 'Educational platform concept', label: 'Featured / 01', description: 'A calm academic space concept for lessons, progress, and focused learning.', detail: 'A demonstration exploring how an education platform could feel like a guided study room. Replace with real case-study details when deployed.', tags: ['HTML', 'CSS', 'Learning UX'], image: 'assets/images/project-suly.svg', liveUrl: '', sourceUrl: '' },
        { id: 'orbit', title: 'Interactive 3D Portfolio', category: 'Creative web experience concept', label: 'Featured / 02', description: 'A portfolio direction where motion, typography, and 3D meet.', detail: 'A concept for learning Three.js, interaction design, and performance-aware motion on the web.', tags: ['JavaScript', 'Three.js', 'Motion'], image: 'assets/images/project-3d.svg', liveUrl: '', sourceUrl: '' },
        { id: 'store', title: 'E-Commerce Website', category: 'Online store concept', label: 'Featured / 03', description: 'A considered storefront direction for products with clarity and atmosphere.', detail: 'A demonstration focused on product storytelling and the details that make a store feel trustworthy. It has no checkout backend.', tags: ['HTML', 'CSS', 'Interface design'], image: 'assets/images/project-store.svg', liveUrl: '', sourceUrl: '' }
      ],
      journey: [
        { marker: '01', title: 'Building the foundations', detail: 'Example placeholder — replace this with your current focus or course.', state: 'current' },
        { marker: '02', title: 'Shipping a small real project', detail: 'Example placeholder — add the next practical step you plan to complete.', state: 'upcoming' },
        { marker: '03', title: 'Growing through feedback', detail: 'Example placeholder — document the next direction when it becomes real.', state: 'upcoming' }
      ]
    },
    ar: {
      langName: 'العربية',
      direction: 'rtl',
      site: {
        name: 'إسلام محمد',
        brandRole: 'مطور Full Stack',
        kicker: 'مرحباً، أنا إسلام',
        displayName: 'إسلام محمد',
        role: 'مطور Full Stack ومصمم مواقع',
        description: 'أبني مواقع وتجارب رقمية مدروسة من خلال كود نظيف، وتصميم بصري واضح، وتعلّم مستمر وواقعي.',
        availability: 'متاح لمشاريع جديدة',
        aboutHeading: 'أحوّل الأفكار إلى تجارب رقمية مفيدة.',
        aboutText: 'أهتم بالمساحة التي يلتقي فيها البرمجة والتصميم البصري وانتباه الإنسان. كل مشروع فرصة لصنع شيء أوضح وأسرع وأكثر حياة.',
        aboutSecondary: 'هذه المحفظة سجل صادق للتجارب والتعلّم والخطوات الصغيرة إلى الأمام. استبدل المراحل والروابط التجريبية بعملك الحقيقي مع نموه.',
        skillsHeading: 'التقنيات التي أعمل بها',
        skillsIntro: 'مجموعة متجددة من التقنيات التي أتعلمها أو استخدمتها لبناء واجهات سريعة ومتجاوبة وتفاعلية.',
        projectsHeading: 'أحدث مشاريعي',
        projectsIntro: 'مجموعة من المفاهيم والتجارب. يمكنك إضافة الروابط الحقيقية من ملف إعداد واحد.',
        servicesHeading: 'ما يمكنني استكشافه معك',
        servicesIntro: 'مجالات مرنة للتعاون بينما أواصل تطوير مهاراتي.',
        blogHeading: 'ملاحظات من الرحلة',
        blogIntro: 'تأملات قصيرة حول البرمجة والتصميم والتجارب خلف الشاشة.',
        contactHeading: 'لنبنِ شيئاً مذهلاً معاً!',
        contactText: 'لديك فكرة أو سؤال؟ تواصل معي مباشرة عبر أي من الروابط التالية.',
        footer: 'صُنع بفضول وكود نظيف.'
      },
      ui: {
        home: 'الرئيسية', about: 'نبذة', skills: 'المهارات', projects: 'المشاريع', servicesLabel: 'الخدمات', blog: 'المدونة', contact: 'تواصل',
        viewProjects: 'شاهد مشاريعي', contactMe: 'تواصل معي', viewSkills: 'كل المهارات', featured: 'مميز', concept: 'مفهوم',
        learning: 'أتعلم / أستخدم', toolkit: 'التقنيات الحالية', laptopStudy: 'دراسة THREE.JS', laptopLabel: 'مجسم لابتوب', laptopCaption: 'لابتوب إجرائي', moveLight: 'حرّك المؤشر لتغيير الإضاءة', conceptProjects: 'مشاريع تجريبية', coreTechnologies: 'تقنيات أساسية', honestProgress: 'تقدم صادق', curiousMindset: 'عقل فضولي', more: '+ المزيد', available: 'متاح', readMore: 'اقرأ المزيد', email: 'راسلني', follow: 'تابعني / تواصل',
        services: ['صفحات هبوط', 'واجهات إبداعية', 'أنظمة UI متجاوبة', 'تجارب تفاعلية'],
        blogCards: [
          { title: 'التصميم بقصد', text: 'كيف تجعل المسافات والتسلسل والاختصار الواجهة أكثر ثقة.' },
          { title: 'أتعلم Three.js', text: 'ملاحظات من بناء مشهد لابتوب إجرائي للويب.' },
          { title: 'أنظمة صغيرة وتقدم حقيقي', text: 'طريقة عملية للحفاظ على التجارب صادقة ومتحركة.' }
        ]
      },
      skills: [
        { name: 'HTML', level: 'أتعلم / أستخدم', detail: 'هيكلة دلالية', mark: '</>' },
        { name: 'CSS', level: 'أتعلم / أستخدم', detail: 'أنظمة بصرية متجاوبة', mark: '#_' },
        { name: 'JavaScript', level: 'أتعلم / أستخدم', detail: 'تفاعلات وكود إبداعي', mark: 'JS' },
        { name: 'Python', level: 'أتعلم / أستخدم', detail: 'أساسيات البرمجة', mark: 'Py' }
      ],
      projects: [
        { id: 'suly', title: 'Suly Academic Technology', category: 'مفهوم منصة تعليمية', label: 'مميز / 01', description: 'مفهوم لمنصة أكاديمية تجمع الدروس والتقدم والتعلم الهادئ.', detail: 'تجربة تستكشف كيف يمكن لمنصة تعليمية أن تشبه غرفة دراسة موجهة. أضف تفاصيل دراسة الحالة الحقيقية عند النشر.', tags: ['HTML', 'CSS', 'تجربة تعليمية'], image: 'assets/images/project-suly.svg', liveUrl: '', sourceUrl: '' },
        { id: 'orbit', title: 'Interactive 3D Portfolio', category: 'مفهوم تجربة ويب إبداعية', label: 'مميز / 02', description: 'اتجاه لمحفظة تلتقي فيها الحركة والطباعة والمجسمات ثلاثية الأبعاد.', detail: 'مفهوم لتعلم Three.js وتصميم التفاعل والحركة الواعية بالأداء على الويب.', tags: ['JavaScript', 'Three.js', 'Motion'], image: 'assets/images/project-3d.svg', liveUrl: '', sourceUrl: '' },
        { id: 'store', title: 'E-Commerce Website', category: 'مفهوم متجر إلكتروني', label: 'مميز / 03', description: 'اتجاه لمتجر يعرض المنتجات بوضوح وثقة ولمسة من الأجواء.', detail: 'تجربة تركز على سرد المنتج والتفاصيل التي تجعل المتجر موثوقاً. لا يوجد نظام دفع أو خادم خلفي.', tags: ['HTML', 'CSS', 'تصميم واجهات'], image: 'assets/images/project-store.svg', liveUrl: '', sourceUrl: '' }
      ],
      journey: [
        { marker: '01', title: 'بناء الأساسيات', detail: 'مثال قابل للتعديل — استبدله بما تتعلمه أو تدرسه الآن.', state: 'current' },
        { marker: '02', title: 'إطلاق مشروع حقيقي صغير', detail: 'مثال قابل للتعديل — أضف الخطوة العملية التالية.', state: 'upcoming' },
        { marker: '03', title: 'النمو عبر الملاحظات', detail: 'مثال قابل للتعديل — وثّق الاتجاه القادم عندما يصبح حقيقياً.', state: 'upcoming' }
      ]
    }
  }
};
