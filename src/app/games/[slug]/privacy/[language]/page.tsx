import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPolicyView } from "@/components/PrivacyPolicyView";
import { gameBySlug, games } from "@/content/games";
import { languages, type Language } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.flatMap((game) => languages.map((language) => ({ slug: game.slug, language })));
}

function isLanguage(value: string): value is Language {
  return (languages as readonly string[]).includes(value);
}

export async function generateMetadata({ params }: PageProps<"/games/[slug]/privacy/[language]">): Promise<Metadata> {
  const { slug, language } = await params;
  const game = gameBySlug(slug);
  if (!game || !isLanguage(language)) return {};
  return { title: `${game.privacy[language].title} · ${game.name[language]}` };
}

export default async function PrivacyInLanguage({ params }: PageProps<"/games/[slug]/privacy/[language]">) {
  const { slug, language } = await params;
  const game = gameBySlug(slug);
  if (!game || !isLanguage(language)) notFound();
  return <PrivacyPolicyView game={game} language={language} />;
}
