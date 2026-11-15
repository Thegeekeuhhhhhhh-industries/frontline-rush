'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const KEY = 'cookie-consent', MAX = 180 * 864e5;
export function CookieSettings() {
  return <button className="link" onClick={() => window.dispatchEvent(new Event('open-cookie-banner'))}>Cookie settings</button>;
}
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (!v || Date.now() - Number(v.split('|')[1]) > MAX) setOpen(true);
    } catch { setOpen(true); }
    const h = () => setOpen(true);
    window.addEventListener('open-cookie-banner', h);
    return () => window.removeEventListener('open-cookie-banner', h);
  }, []);
  function choose(v) {
    try { localStorage.setItem(KEY, v + '|' + Date.now()); } catch {}
    document.cookie = `${KEY}=${v}; max-age=${MAX / 1000}; path=/; SameSite=Lax`;
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: v }));
    setOpen(false);
  }
  if (!open) return null;
  return (
    <div className="cookie" role="dialog" aria-labelledby="cb-t" aria-describedby="cb-d">
      <h2 id="cb-t">Cookies</h2>
      <p id="cb-d">We use essential storage to remember this choice. Optional cookies (such as analytics) are only used if you accept. See our <Link href="/cookies">cookie policy</Link>.</p>
      <div className="row">
        <button className="btn ghost" onClick={() => choose('refused')}>Refuse</button>
        <button className="btn" onClick={() => choose('accepted')}>Accept</button>
      </div>
    </div>
  );
}
