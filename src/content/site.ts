/** The developer behind the games: one site, one contact, one app-ads.txt for every game. */
export const site = {
  developer: "SaturnWave",
  /** Absent until the owner names the address players and stores should write to. */
  contactEmail: undefined as string | undefined,
} as const;

/** The languages the site's legal pages are written in; English is the default. */
export const languages = ["en", "tr"] as const;
export type Language = (typeof languages)[number];

export const languageNames: Record<Language, string> = { en: "English", tr: "Türkçe" };
