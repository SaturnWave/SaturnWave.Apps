# SaturnWave games site

The public pages the app stores ask for, for every SaturnWave game:

- `/games/<slug>/privacy/`: the privacy policy (English), with every language at `/games/<slug>/privacy/<language>/`.
- `/support/`: how to reach the developer.
- `/app-ads.txt`: the authorised ad sellers, one file for all games, at the root of the site's domain.

It is a Next.js site with a static export (`output: "export"`), written in TypeScript and published by GitLab Pages
(`.gitlab-ci.yml`).

## Adding a game

Add an entry to `src/content/games.ts`: its slug (it goes into the store listing, so it never changes), its names,
a summary, its Android package and its privacy policy in every language of `src/content/site.ts`.

## Working on it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # writes the static site to out/
```

The contact address lives in `src/content/site.ts`; while it is absent, the pages say one will be added.
