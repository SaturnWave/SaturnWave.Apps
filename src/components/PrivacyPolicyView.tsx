import Link from "next/link";
import type { Game } from "@/content/games";
import { languageNames, languages, site, type Language } from "@/content/site";

const contactWords: Record<Language, { heading: string; write: string; pending: string }> = {
  en: { heading: "Contact", write: "Questions about this policy:", pending: "A contact address will be added here before the game is released." },
  tr: { heading: "İletişim", write: "Bu politikayla ilgili sorular için:", pending: "İletişim adresi oyun yayına çıkmadan önce buraya eklenecek." },
};

const updatedWord: Record<Language, string> = { en: "Last updated", tr: "Son güncelleme" };

/** One game's privacy policy in one language, with links to the same policy in the other languages. */
export function PrivacyPolicyView({ game, language }: { game: Game; language: Language }) {
  const policy = game.privacy[language];
  const contact = contactWords[language];
  return (
    <article className="policy" lang={language}>
      <nav aria-label="Languages" className="language-switch">
        {languages.map((other) =>
          other === language ? (
            <span key={other} aria-current="page">
              {languageNames[other]}
            </span>
          ) : (
            <Link key={other} href={`/games/${game.slug}/privacy/${other}/`} hrefLang={other}>
              {languageNames[other]}
            </Link>
          ),
        )}
      </nav>
      <h1>
        {policy.title} · {game.name[language]}
      </h1>
      <p className="updated">
        {updatedWord[language]}: {policy.updated}
      </p>
      <p className="lead">{policy.intro}</p>
      {policy.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
      <section>
        <h2>{contact.heading}</h2>
        {site.contactEmail ? (
          <p>
            {contact.write} <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          </p>
        ) : (
          <p>{contact.pending}</p>
        )}
      </section>
    </article>
  );
}
