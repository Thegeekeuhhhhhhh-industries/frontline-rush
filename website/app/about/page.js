import { site } from '../../lib/site';
export const metadata = { title: 'About' };
export default function About() {
  return (
    <div className="wrap section">
      <h1>About</h1>
      <h2>{site.owner}</h2>
      <p>I'm a computer science student at EPITA and a software engineer. {site.game} is one of my projects.</p>
      <p>Portfolio: <a href={site.url}>{site.url.replace('https://', '')}</a></p>
      <h2>{site.org}</h2>
      <p>{site.org} is the independent studio behind {site.game}. It builds games and software with a focus on clean, fast and accessible experiences.</p>
    </div>
  );
}
