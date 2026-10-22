import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/content/games";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Support" };

export default function Support() {
  return (
    <article>
      <h1>Support</h1>
      {site.contactEmail ? (
        <p className="lead">
          Write to <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and tell us which game and phone you
          play on. We answer in English and Turkish.
        </p>
      ) : (
        <p className="lead">A support address will be added here before the first game is released.</p>
      )}
      <h2>Privacy</h2>
      <ul className="link-list">
        {games.map((game) => (
          <li key={game.slug}>
            <Link href={`/games/${game.slug}/privacy/`}>{game.name.en}: privacy policy</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
