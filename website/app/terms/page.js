import Doc from '../../components/Doc';
import { site } from '../../lib/site';
export const metadata = { title: 'Terms of use' };
export default function Page() {
  return (
    <Doc title="Terms of use">
<h2>1. Purpose</h2><p>These terms govern your use of this website and the game {site.game}. By using them, you accept these terms.</p>
<h2>2. Access</h2><p>The site and the game are free. Internet access and device costs are your responsibility. We may change, suspend or remove them at any time.</p>
<h2>3. Fair use</h2><p>You agree not to attack, copy, reverse engineer for unlawful purposes, or overload the site or the game.</p>
<h2>4. In-game coins</h2><p>Coins are earned by playing and have no cash value. They cannot be bought, sold or exchanged for money. Saved progress is stored on your device and may be lost if you clear it.</p>
<h2>5. Intellectual property</h2><p>All content belongs to {site.org}. You get a personal, non-transferable right to play the game.</p>
<h2>6. Liability</h2><p>The game is provided as is, without guarantee. Our liability is limited to the extent permitted by law.</p>
<h2>7. Changes and law</h2><p>We may update these terms; the date above shows the latest version. They are governed by French law. Contact: {site.email}.</p>
    </Doc>
  );
}
