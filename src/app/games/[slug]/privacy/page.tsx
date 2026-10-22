import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPolicyView } from "@/components/PrivacyPolicyView";
import { gameBySlug, games } from "@/content/games";

// The address a store listing links to: the English policy, with links to the other languages.
export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: PageProps<"/games/[slug]/privacy">): Promise<Metadata> {
  const game = gameBySlug((await params).slug);
  return game ? { title: `${game.privacy.en.title} · ${game.name.en}` } : {};
}

export default async function Privacy({ params }: PageProps<"/games/[slug]/privacy">) {
  const game = gameBySlug((await params).slug);
  if (!game) notFound();
  return <PrivacyPolicyView game={game} language="en" />;
}
