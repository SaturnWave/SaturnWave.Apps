import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gameBySlug, games } from "@/content/games";
import { languageNames, languages } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: PageProps<"/games/[slug]">): Promise<Metadata> {
  const game = gameBySlug((await params).slug);
  return { title: game?.name.en };
}

export default async function GamePage({ params }: PageProps<"/games/[slug]">) {
  const game = gameBySlug((await params).slug);
  if (!game) notFound();

  return (
    <article className="game">
      <h1>
        {game.name.en}
        {game.workingTitle && <span className="badge">working title</span>}
      </h1>
      <p className="lead">{game.summary.en}</p>
      <p lang="tr" className="lead secondary">
        {game.name.tr}: {game.summary.tr}
      </p>
      <h2>Privacy policy</h2>
      <ul className="link-list">
        {languages.map((language) => (
          <li key={language}>
            <Link href={`/games/${game.slug}/privacy/${language}/`} hrefLang={language}>
              {languageNames[language]}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Support</h2>
      <p>
        <Link href="/support/">How to reach us</Link>
      </p>
      {game.storeUrl && (
        <p>
          <a href={game.storeUrl}>Get it on Google Play</a>
        </p>
      )}
    </article>
  );
}
