import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Devuelve una función `t()` con los textos de interfaz del idioma dado. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Resuelve un campo bilingüe `{ es, en }` al idioma activo. */
export function tr<T>(value: { es: T; en: T }, lang: Lang): T {
  return value[lang] ?? value[defaultLang];
}
