import Doc from '../../components/Doc';
import { site } from '../../lib/site';
export const metadata = { title: 'Privacy policy' };
export default function Page() {
  return (
    <Doc title="Privacy policy">
<h2>Who is responsible</h2><p>{site.org} ({site.owner}), {site.email}.</p>
<h2>What we collect</h2>
<ul><li><b>Contact:</b> if you email us, we receive your name, email address and message, and use them only to reply. We keep them as long as needed for that, up to 3 years after the last contact.</li>
<li><b>Game data:</b> level, coins and shop choices are saved on your own device. We do not receive them.</li>
<li><b>Cookie choice:</b> we store your cookie choice for 6 months.</li>
<li><b>Technical logs:</b> our host may log IP addresses for security.</li></ul>
<h2>Legal basis</h2><p>Our legitimate interest (answering you, security), your consent (optional cookies), and our legal obligations.</p>
<h2>Sharing</h2><p>We do not sell your data. It may be processed by our hosting and email providers acting for us.</p>
<h2>Your rights</h2><p>Under the GDPR, you can access, correct, delete, restrict or port your data and object to its use. Write to {site.email}. You can also complain to the CNIL (cnil.fr).</p>
<h2>Children</h2><p>The game is suitable for all ages. We do not knowingly collect children data.</p>
    </Doc>
  );
}
