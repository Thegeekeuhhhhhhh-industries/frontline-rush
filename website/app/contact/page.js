import ContactForm from '../../components/ContactForm';
import { site } from '../../lib/site';
export const metadata = { title: 'Contact' };
export default function Contact() {
  return (
    <div className="wrap section">
      <h1>Contact</h1>
      <p>Questions, bug reports or business enquiries: write to <a href={`mailto:${site.email}`}>{site.email}</a> or use the form.</p>
      <ContactForm />
    </div>
  );
}
