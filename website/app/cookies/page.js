import Doc from '../../components/Doc';
import { site } from '../../lib/site';
export const metadata = { title: 'Cookie policy' };
export default function Page() {
  return (
    <Doc title="Cookie policy">
<h2>What cookies are</h2><p>Cookies and similar technologies store small pieces of information on your device.</p>
<h2>What we use</h2>
<ul><li><b>Essential:</b> <code>cookie-consent</code> remembers your choice for 6 months. The game also stores your progress in your browser storage. These do not need consent.</li>
<li><b>Optional (analytics, third-party):</b> none are active at the moment. If we add any, they will load only after you accept.</li></ul>
<h2>Your choice</h2><p>You can accept or refuse at any time. Use the "Cookie settings" link in the footer to change your choice, or clear cookies in your browser settings.</p>
<h2>Contact</h2><p>{site.email}</p>
    </Doc>
  );
}
