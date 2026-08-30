# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es

Portfolio personal de José Francisco Navas Ordoñez, construido con **Astro** (sitio estático, sin
integración de framework UI). Bilingüe (español por defecto, inglés en `/en/`). Tema claro/oscuro y
color de acento configurables, persistidos en `localStorage`.

## Comandos

```
npm install
npm run dev       # http://localhost:4321/
npm run build     # astro check + astro build → dist/
npm run preview   # sirve dist/ localmente
```

No hay tests. `npm run build` corre `astro check` (type-check de .astro/.ts) y falla ante errores de tipos.

## Arquitectura

### Fuente única de contenido — `src/data/portfolio.ts`

**Todo el contenido del sitio vive aquí** (perfil, skills, experiencia, proyectos, hobbies), tipado.
Cada texto visible al usuario es un objeto `Localized = { es, en }`. Las imágenes se `import`an al
inicio del archivo para que pasen por `astro:assets` (optimización + hashing + resolución del `base`).

Para cambiar textos, niveles de skill, trabajos o proyectos se edita **solo este archivo**. No hay
HTML con contenido ni JSON de traducciones sueltos.

### i18n

- Configurado en `astro.config.mjs` (`i18n`, `defaultLocale: 'es'`, `prefixDefaultLocale: false`).
- `src/i18n/ui.ts`: strings de interfaz (labels, meta) por idioma. `src/i18n/utils.ts`:
  `useTranslations(lang)` → `t('clave')`, y `tr(campo, lang)` para resolver un `Localized`.
- Rutas: `src/pages/index.astro` (es) y `src/pages/en/index.astro` (en). Ambas renderizan
  `src/components/Portfolio.astro` con la prop `lang`; ese componente arma la página entera.
- El cambio de idioma es un enlace `<a>` (en `Header.astro`), no JavaScript.

### Tema y color de acento

- Clase `dark` en `<html>` (no en `<body>`). El default es oscuro.
- `Layout.astro` incluye un `<script is:inline>` bloqueante que lee `localStorage` (`theme`, `accent`)
  y los aplica antes del primer pintado (evita FOUC).
- `ThemeControls.astro` cablea el toggle y los swatches; escribe en `localStorage`.
- Los colores son custom properties en `src/styles/global.css`: `:root` (claro) y `:root.dark` (oscuro);
  **`--accent`** es el color de acento, sobreescribible en runtime (los swatches y el script inline lo fijan).

### Estilos

Dirección visual: **editorial / técnico** ("spec sheet"). Un único `src/styles/global.css` con tokens
(espaciado, radios, tipografía), importado desde `Layout.astro`.

- Tipografía (vía `@fontsource*` en `Layout.astro`): **Fraunces Variable** (display, `--font-display`),
  **IBM Plex Sans** (texto, `--font-sans`), **IBM Plex Mono** (etiquetas: números de sección, fechas,
  tags, badges — `--font-mono`).
- Secciones numeradas (`01 / Stack`) con regla hairline. Skills en un `.panel` unificado con filas
  divididas por hairlines. Proyectos en `.projects-grid`. Fondo con grano SVG en `body::before`.
- Las barras de skills usan `--level` inline + `@keyframes` bajo `@media (prefers-reduced-motion: no-preference)`.
- Revelado en carga: clase `.reveal` con `style="--i: N"` para escalonar el `animation-delay`.

### Logos de experiencia

`Experience.logo` es opcional; `logoWide` para wordmarks horizontales; `logoBg` (`'light' | 'dark' | 'none'`)
controla el fondo del chip (el logo de Birobid es blanco → `'dark'`; el de Agrosoft es a color → `'light'`).

## Deploy — dos destinos

`astro.config.mjs` cambia `site` y `base` según `process.env.DEPLOY_TARGET`:

| Destino | Trigger | URL | `base` |
|---|---|---|---|
| **Netlify** (principal, la del CV) | push a `main`, `netlify.toml` | `josenavas46-portfolio.netlify.app` | `/` |
| **GitHub Pages** | `.github/workflows/deploy.yml` (fija `DEPLOY_TARGET=gh-pages`) | `josenavas46.github.io/Portfolio-Jose-Navas/` | `/Portfolio-Jose-Navas` |

`npm run dev`/`build` local = config de Netlify (raíz). Para GitHub Pages hace falta
**Settings → Pages → Source: "GitHub Actions"** en el repo.

Al añadir enlaces o assets, usar componentes de Astro (`<Image>`, `getRelativeLocaleUrl`) o
`import.meta.env.BASE_URL`; nunca rutas absolutas a mano (romperían el build de GitHub Pages).
