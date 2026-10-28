/** The developer behind the games: one site, one contact, one app-ads.txt for every game. */
export const site = {
  developer: "SaturnWave",
  /** The address players and stores write to (the owner named it on 2026-10-28). */
  contactEmail: "saturnwave.apps@gmail.com" as string | undefined,
} as const;

/** The languages the site's legal pages are written in; English is the default. */
export const languages = ["en", "tr"] as const;
export type Language = (typeof languages)[number];

export const languageNames: Record<Language, string> = { en: "English", tr: "Türkçe" };
