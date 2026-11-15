'use client';
import { site } from '../lib/site';
export default function ContactForm() {
  function send(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(f.get('subject'))}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form onSubmit={send} className="form">
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Subject<input name="subject" required /></label>
      <label>Message<textarea name="message" rows="6" required /></label>
      <button className="btn" type="submit">Open in my email app</button>
      <p className="muted">This form does not store anything on our servers. It prepares an email in your own mail app.</p>
    </form>
  );
}
