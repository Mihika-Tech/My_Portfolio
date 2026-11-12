import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: { default: "Mihika Dakappagari", template: "%s · Mihika Dakappagari" },
  description: "AI and full-stack engineer building observable LLM systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable} ${newsreader.variable}`}>
      <body>
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <header className="flex items-baseline justify-between py-8">
            <Link href="/" className="font-serif text-xl">
              Mihika Dakappagari
            </Link>
            <nav className="flex gap-6 text-sm text-muted">
              <Link href="/#work" className="hover:text-ink">
                Work
              </Link>
              <Link href="/writing" className="hover:text-ink">
                Writing
              </Link>
              <Link href="/about" className="hover:text-ink">
                About
              </Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-24 border-t border-rule py-8 text-sm text-muted">
            © {new Date().getFullYear()} Mihika Dakappagari
          </footer>
        </div>
      </body>
    </html>
  );
}
