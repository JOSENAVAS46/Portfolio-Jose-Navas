# Portfolio — José Francisco Navas Ordoñez

Portfolio personal bilingüe (ES/EN) construido con [Astro](https://astro.build). Tema claro/oscuro y
color de acento configurables.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321/
```

## Build

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

## Contenido

Todo el contenido (perfil, skills, experiencia, proyectos, hobbies) se edita en
[`src/data/portfolio.ts`](src/data/portfolio.ts). Cada texto tiene versión `es` e `en`.

## Deploy

En cada push a `main` se despliega a dos sitios:

- **Netlify** — [josenavas46-portfolio.netlify.app](https://josenavas46-portfolio.netlify.app) (raíz).
  Config en [`netlify.toml`](netlify.toml).
- **GitHub Pages** — `josenavas46.github.io/Portfolio-Jose-Navas/` vía
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) (requiere **Settings → Pages → Source:
  "GitHub Actions"**).

`astro.config.mjs` ajusta `site`/`base` con `process.env.DEPLOY_TARGET` (`gh-pages` sólo lo fija el workflow).
