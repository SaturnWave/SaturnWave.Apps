import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: site.developer, template: `%s · ${site.developer}` },
  description: `${site.developer} makes puzzle games for phones. Privacy policies and support for every game.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            {site.developer}
          </Link>
          <nav aria-label="Site">
            <Link href="/">Games</Link>
            <Link href="/support/">Support</Link>
          </nav>
        </header>
        <main className="page">{children}</main>
        <footer className="site-footer">
          <span>
            © {new Date().getFullYear()} {site.developer}
          </span>
          <Link href="/support/">Support</Link>
        </footer>
      </body>
    </html>
  );
}
