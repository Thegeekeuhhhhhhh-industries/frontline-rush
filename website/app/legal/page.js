import Doc from '../../components/Doc';
import { site } from '../../lib/site';
export const metadata = { title: 'Legal notice' };
export default function Page() {
  return (
    <Doc title="Legal notice">
<h2>Publisher</h2>
<p>{site.org}, represented by {site.owner}. Legal status: {site.legalForm}.</p>{/*</Doc> Registration: {site.registration}.</p>*/}
<p>Email: {site.email}. Publication director: {site.owner}.</p>
<h2>Hosting</h2><p>{site.host}</p>
<h2>Intellectual property</h2>
<p>The game, its name, code, graphics and texts are the property of {site.org} unless stated otherwise. Any reproduction without written permission is prohibited.</p>
<h2>Liability</h2>
<p>We do our best to keep this site and the game accurate and available, but cannot guarantee uninterrupted access. We are not liable for damage resulting from their use.</p>
<h2>Governing law</h2><p>This notice is governed by French law.</p>
    </Doc>
  );
}
