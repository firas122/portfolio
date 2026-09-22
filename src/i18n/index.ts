import { en } from "./en";
import { fr } from "./fr";
import { defaultLocale, type Locale } from "./config";

export * from "./config";
export type Content = typeof en;

const dictionaries: Record<Locale, Content> = { en, fr };

export function getContent(locale: string | undefined): Content {
  return dictionaries[locale as Locale] ?? dictionaries[defaultLocale];
}
