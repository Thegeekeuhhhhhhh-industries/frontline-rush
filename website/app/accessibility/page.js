import Doc from '../../components/Doc';
import { site } from '../../lib/site';
export const metadata = { title: 'Accessibility statement' };
export default function Page() {
  return (
    <Doc title="Accessibility statement">
<p>{site.org} wants {site.game} and this website to be usable by everyone.</p>
<h2>Status</h2><p>This site has not yet been formally audited against WCAG 2.1 / RGAA. We aim for AA level.</p>
<h2>What we do</h2><ul><li>Keyboard navigation and visible focus.</li><li>A skip link and a clear heading structure.</li><li>High contrast colours and reduced-motion support.</li><li>Labelled form fields.</li></ul>
<h2>Known limits</h2><p>The game is a touch-based action game that needs fast reactions and screen sight, and it is not fully accessible to everyone.</p>
<h2>Report a problem</h2><p>Write to {site.email}. We will reply as soon as possible. If our answer is unsatisfactory, you can contact the Défenseur des droits (defenseurdesdroits.fr).</p>
    </Doc>
  );
}
