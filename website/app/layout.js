import './globals.css';
import Link from 'next/link';
import { Chakra_Petch } from 'next/font/google';
import CookieBanner, { CookieSettings } from '../components/CookieBanner';
import { site } from '../lib/site';
const font = Chakra_Petch({ subsets: ['latin'], weight: ['500', '700'] });
export const metadata = {
  title: { default: `${site.game} – a 3D squad runner for mobile`, template: `%s · ${site.game}` },
  description: 'Steer your squad, shoot the gates, beat the boss. Free 3D action game by Thegeekeuhhhhhhh Industries.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <a className="skip" href="#main">Skip to content</a>
        <header className="bar"><div className="wrap row">
          <Link href="/" className="brand">{site.game}</Link>
          <nav aria-label="Main"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
        </div></header>
        <main id="main">{children}</main>
        <footer className="foot"><div className="wrap">
          <p>© {new Date().getFullYear()} {site.org}</p>
          <nav aria-label="Legal">
            <Link href="/legal">Legal notice</Link><Link href="/terms">Terms of use</Link>
            <Link href="/privacy">Privacy policy</Link><Link href="/cookies">Cookie policy</Link>
            <Link href="/accessibility">Accessibility</Link><CookieSettings />
          </nav>
        </div></footer>
        <CookieBanner />
      </body>
    </html>
  );
}
