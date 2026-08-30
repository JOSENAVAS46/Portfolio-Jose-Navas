import type { ImageMetadata } from 'astro';

import profilePhoto from '../assets/images/profile_img.jpeg';
import agrosoftLogo from '../assets/images/agrosoft.svg';
import birobidLogo from '../assets/images/birobid-white.png';
import biciImg from '../assets/images/bici.jpeg';
import portfolioProject from '../assets/projects/mi_portafolio.png';
import pokedexProject from '../assets/projects/pokedex.png';
import facebookIcon from '../assets/icons/facebook.png';
import instagramIcon from '../assets/icons/instagram.png';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

/** Texto que existe en los dos idiomas del sitio. */
export type Localized = { es: string; en: string };

export interface Social {
  name: string;
  url: string;
  icon: ImageMetadata;
}

export interface Profile {
  name: string;
  role: Localized;
  location: Localized;
  email: string;
  phone: string;
  whatsapp: string;
  website: string;
  photo: ImageMetadata;
  description: Localized;
  socials: Social[];
}

export interface Skill {
  name: string;
  /** 0–100, alimenta la barra de progreso. */
  level: number;
}

export interface SkillGroup {
  title: Localized;
  years: { from: number; to: number };
  skills: Skill[];
}

export interface Experience {
  company: string;
  location: string;
  logo?: ImageMetadata;
  /** El logo es un wordmark horizontal, no un ícono cuadrado. */
  logoWide?: boolean;
  /** Fondo del chip del logo: 'light' (blanco), 'dark' (tinta) o 'none'. */
  logoBg?: 'light' | 'dark' | 'none';
  url?: string;
  role: Localized;
  dates: Localized;
  description: Localized;
}

export interface Project {
  title: Localized;
  image?: ImageMetadata;
  tech: string[];
  description: Localized;
  /** 'work' = proyecto de empresa en el que participé; 'personal' = proyecto propio. */
  kind: 'work' | 'personal';
  /** Empresa donde se desarrolló (solo proyectos 'work'). */
  company?: string;
  /** Enlace principal (repo, demo o Play Store). */
  link?: { label: Localized; url: string };
}

export interface Hobby {
  title: Localized;
  image: ImageMetadata;
  description: Localized;
}

export const profile: Profile = {
  name: 'José Francisco Navas Ordoñez',
  role: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
  location: { es: 'Guayaquil, Ecuador', en: 'Guayaquil, Ecuador' },
  email: 'jose.navasordonez@gmail.com',
  phone: '+593 96 300 2366',
  whatsapp: 'https://wa.me/593963002366',
  website: 'https://josenavas46-portfolio.netlify.app/',
  photo: profilePhoto,
  description: {
    es: 'Ingeniero de Software y desarrollador Full Stack con experiencia creando y manteniendo APIs con .NET Core, Flask y Laravel, frontend con React.js y aplicaciones móviles Android con Flutter (arquitectura BLoC, modo online/offline e integración con APIs). Manejo de bases de datos SQL Server y PostgreSQL, con enfoque en soluciones eficientes, escalables y de código mantenible.',
    en: 'Software Engineer and Full Stack developer with experience building and maintaining APIs in .NET Core, Flask and Laravel, frontend work with React.js, and Android mobile apps with Flutter (BLoC architecture, online/offline mode and API integration). Comfortable with SQL Server and PostgreSQL databases, focused on efficient, scalable and maintainable solutions.',
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/JOSENAVAS46',
      icon: githubIcon,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jos%C3%A9-francisco-navas-ord%C3%B3%C3%B1ez-836574167/',
      icon: linkedinIcon,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jose_navas_46/',
      icon: instagramIcon,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/josefrancisco.navasordonez',
      icon: facebookIcon,
    },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: { es: 'Front End', en: 'Front End' },
    years: { from: 0, to: 4 },
    skills: [{ name: 'React.js', level: 60 }],
  },
  {
    title: { es: 'Back End', en: 'Back End' },
    years: { from: 0, to: 4 },
    skills: [
      { name: '.NET Core', level: 80 },
      { name: 'Flask (Python)', level: 45 },
      { name: 'Java / Spring Boot', level: 45 },
      { name: 'PHP / Laravel', level: 40 },
    ],
  },
  {
    title: { es: 'Base de Datos', en: 'Databases' },
    years: { from: 0, to: 4 },
    skills: [
      { name: 'SQL Server', level: 80 },
      { name: 'PostgreSQL', level: 45 },
    ],
  },
  {
    title: { es: 'Móvil', en: 'Mobile' },
    years: { from: 0, to: 3 },
    skills: [{ name: 'Flutter (Android)', level: 80 }],
  },
];

export const experience: Experience[] = [
  {
    company: 'Agrosoft Latam',
    location: 'Guayaquil',
    logo: agrosoftLogo,
    logoWide: true,
    logoBg: 'light',
    url: 'https://www.agrosoftlatam.com/',
    role: {
      es: 'Desarrollador Full Stack IoT',
      en: 'Full Stack IoT Developer',
    },
    dates: { es: 'Diciembre 2025 - Actualidad', en: 'December 2025 - Present' },
    description: {
      es: 'Desarrollo Full Stack orientado a IoT con Flutter, .NET Core, Blazor y PostgreSQL.',
      en: 'IoT-oriented Full Stack development with Flutter, .NET Core, Blazor and PostgreSQL.',
    },
  },
  {
    company: 'Birobid S.A.',
    location: 'Guayaquil',
    logo: birobidLogo,
    logoWide: true,
    logoBg: 'dark',
    url: 'https://birobid.com/',
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer',
    },
    dates: { es: 'Enero 2024 - Diciembre 2025', en: 'January 2024 - December 2025' },
    description: {
      es: 'Creación y mantenimiento de APIs con .NET Core, Flask y Laravel; frontend con React.js y Visual Basic; bases de datos SQL Server y desarrollo de aplicaciones móviles Android con Flutter, con foco en soluciones eficientes y escalables.',
      en: 'Built and maintained APIs with .NET Core, Flask and Laravel; frontend with React.js and Visual Basic; SQL Server databases and Android mobile apps with Flutter, focused on efficient and scalable solutions.',
    },
  },
];

export const projects: Project[] = [
  {
    title: { es: 'Adm Enterprise', en: 'Adm Enterprise' },
    kind: 'work',
    company: 'Birobid S.A.',
    tech: ['.NET Core', 'React.js', 'SQL Server', 'ERP B2B'],
    description: {
      es: 'Soporte técnico y mantenimiento continuo de un ERP web B2B: corrección de bugs, optimizaciones de rendimiento y desarrollos personalizados por cliente, añadiendo funcionalidades que mejoraron la eficiencia operativa y la experiencia de usuario.',
      en: 'Ongoing support and maintenance of a B2B web ERP: bug fixing, performance optimization and per-client custom development, adding features that improved operational efficiency and user experience.',
    },
  },
  {
    title: { es: 'Adm Go', en: 'Adm Go' },
    kind: 'work',
    company: 'Birobid S.A.',
    tech: ['Flutter', 'Dart', 'APIs REST', 'Offline-first'],
    description: {
      es: 'Mantenimiento de una app móvil Flutter en producción: resolución de incidencias, optimización de rendimiento y actualización de dependencias, con operación online/offline y sincronización automática mediante bases de datos locales.',
      en: 'Maintenance of a production Flutter mobile app: issue resolution, performance tuning and dependency upgrades, with online/offline operation and automatic sync through local databases.',
    },
  },
  {
    title: { es: 'Adm Contenedores', en: 'Adm Contenedores' },
    kind: 'work',
    company: 'Birobid S.A.',
    tech: ['Flutter', 'APIs REST', 'FTP', 'Fotografía'],
    description: {
      es: 'Extensión móvil Flutter para un sistema de logística que gestiona el ciclo completo de contenedores (recepción, partida, control de temperaturas y consolidación): informes con captura de fotos, sincronización en tiempo real vía APIs y subida de evidencias a servidor FTP.',
      en: 'Flutter mobile extension for a logistics system managing the full container lifecycle (arrival, departure, temperature control and consolidation): photo-based reports, real-time sync via APIs and evidence upload to an FTP server.',
    },
  },
  {
    title: { es: 'Adm Inventory', en: 'Adm Inventory' },
    kind: 'work',
    company: 'Birobid S.A.',
    tech: ['Flutter', 'Cámara / códigos de barras', 'APIs REST'],
    description: {
      es: 'App móvil para la gestión de inventarios mediante actualización masiva de códigos de barras con la cámara del dispositivo, integrada con un ERP web propietario por APIs REST para consultas en tiempo real y sincronización bidireccional en entornos de retail.',
      en: 'Mobile app for inventory management through bulk barcode updates using the device camera, integrated with a proprietary web ERP over REST APIs for real-time queries and two-way sync in retail environments.',
    },
  },
  {
    title: { es: 'Mi Portafolio', en: 'My Portfolio' },
    kind: 'personal',
    image: portfolioProject,
    tech: ['Astro', 'TypeScript', 'CSS'],
    description: {
      es: 'Este sitio: portafolio bilingüe construido con Astro para mostrar mi experiencia, stack y proyectos, con tema claro/oscuro y color de acento configurable.',
      en: 'This site: a bilingual portfolio built with Astro to showcase my experience, stack and projects, with light/dark theme and a configurable accent color.',
    },
    link: {
      label: { es: 'Código', en: 'Code' },
      url: 'https://github.com/JOSENAVAS46/Portfolio-Jose-Navas',
    },
  },
  {
    title: { es: 'Pokedex con PokéAPI', en: 'Pokedex with PokéAPI' },
    kind: 'personal',
    image: pokedexProject,
    tech: ['JavaScript', 'HTML5', 'CSS'],
    description: {
      es: 'Página web que consume la PokéAPI para practicar la comunicación entre frontend, backend y una fuente de datos externa.',
      en: 'Web page that consumes the PokéAPI to practice communication between frontend, backend and an external data source.',
    },
    link: {
      label: { es: 'Código', en: 'Code' },
      url: 'https://github.com/JOSENAVAS46/POKEDEX-JS',
    },
  },
];

export const hobbies: Hobby[] = [
  {
    title: { es: 'Bicicleta de montaña', en: 'Mountain biking' },
    image: biciImg,
    description: {
      es: 'Me fascina andar en bicicleta: es un medio de transporte bueno para el medio ambiente y para la salud.',
      en: 'I love riding my bike: it is a means of transport that is good for the environment and for your health.',
    },
  },
];
