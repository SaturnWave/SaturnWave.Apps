import Link from "next/link";
import { games } from "@/content/games";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="intro">
        <h1>{site.developer}</h1>
        <p>Puzzle games for phones. Each game below has its privacy policy and support here.</p>
      </section>
      <ul className="game-list">
        {games.map((game) => (
          <li key={game.slug}>
            <Link href={`/games/${game.slug}/`} className="game-card">
              <span className="game-name">
                {game.name.en}
                {game.workingTitle && <span className="badge">working title</span>}
              </span>
              <span className="game-summary">{game.summary.en}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
