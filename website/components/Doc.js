import { site } from '../lib/site';
export default function Doc({ title, children }) {
  return (
    <article className="wrap doc">
      <h1>{title}</h1>
      <p className="muted">Last updated: {site.updated}</p>
      {children}
    </article>
  );
}
