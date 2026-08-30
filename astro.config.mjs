// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Destino de despliegue:
 *   - Netlify (por defecto): se sirve en la raíz de josenavas46-portfolio.netlify.app
 *   - GitHub Pages: DEPLOY_TARGET=gh-pages → se sirve bajo /Portfolio-Jose-Navas/
 * El workflow de GitHub Actions fija DEPLOY_TARGET; Netlify y el dev local no.
 */
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

// https://astro.build/config
export default defineConfig({
  site: ghPages
    ? 'https://josenavas46.github.io'
    : 'https://josenavas46-portfolio.netlify.app',
  base: ghPages ? '/Portfolio-Jose-Navas' : '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
