export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'meta.title': 'José Francisco Navas Ordoñez — Full Stack Developer',
    'meta.description':
      'Portfolio de José Francisco Navas Ordoñez, Full Stack Developer: experiencia, stack tecnológico y proyectos.',
    'skills.years': 'años',
    'stack.title': 'Stack',
    'experience.title': 'Experiencia',
    'projects.title': 'Proyectos',
    'projects.work': 'Proyecto de empresa',
    'projects.workAt': 'Desarrollado en',
    'projects.personal': 'Proyecto personal',
    'hobbies.title': 'Hobbies',
    'theme.dark': 'Oscuro',
    'theme.light': 'Claro',
    'theme.accentLabel': 'Color de acento',
    'nav.switchLang': 'EN',
    'nav.switchLangAria': 'Ver el sitio en inglés',
    'footer.built': 'Hecho con Astro',
  },
  en: {
    'meta.title': 'José Francisco Navas Ordoñez — Full Stack Developer',
    'meta.description':
      'Portfolio of José Francisco Navas Ordoñez, Full Stack Developer: experience, tech stack and projects.',
    'skills.years': 'yrs',
    'stack.title': 'Stack',
    'experience.title': 'Experience',
    'projects.title': 'Projects',
    'projects.work': 'Company project',
    'projects.workAt': 'Built at',
    'projects.personal': 'Personal project',
    'hobbies.title': 'Hobbies',
    'theme.dark': 'Dark',
    'theme.light': 'Light',
    'theme.accentLabel': 'Accent color',
    'nav.switchLang': 'ES',
    'nav.switchLangAria': 'View the site in Spanish',
    'footer.built': 'Built with Astro',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];
