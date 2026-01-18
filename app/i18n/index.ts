import en from "./locales/en.json";
import ar from "./locales/ar.json";

export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";

const translations = {
  en,
  ar,
} as const;

export type TranslationKeys = typeof en;

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}
