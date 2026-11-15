import { site } from '../lib/site';

const features = [
  ['Steer & shoot', 'Drag to move your squad. It fires automatically, and your shots upgrade the gates ahead.'],
  ['Pick the right gate', 'Add, multiply or avoid. Every choice changes the size of your squad.'],
  ['Beat the boss', 'Each level ends in a bigger boss. Grab gun crates to hit harder.'],
  ['3D, made for phones', 'Low-poly 3D, one-finger controls, and short levels you can play anywhere.'],
  ['Shop & skins', 'Earn coins, then upgrade your starting squad, your gun and your squad colours.'],
  ['Free, no real-money purchases', 'Coins are earned by playing. Progress is saved on your device.'],
];

export default function Home() {
  return (
    <div className="wrap">
      <section className="hero">
        <p className="muted">A game by {site.org}</p>
        <h1>{site.game}</h1>
        <p>Lead your squad through the gates, outgun the enemies and take down the boss.</p>
        <p className="row" style={{ justifyContent: 'flex-start' }}>
          {site.playStore ? <a className="btn ghost" href={site.playStore}>Get it on Google Play</a> : <span className="btn ghost" aria-disabled="true">Google Play: coming soon</span>}
          {site.playWeb ? <a className="btn ghost" href={site.playWeb}>Try it on web</a> : <span className="btn ghost" aria-disabled="true">Web: coming soon</span>}
        </p>
      </section>
      <section className="section" aria-labelledby="f">
        <h2 id="f">Features</h2>
        <div className="grid">{features.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>
      <section className="section" aria-labelledby="h">
        <h2 id="h">How to play</h2>
        <ol><li>Drag left or right to steer.</li><li>Shoot the gates to boost them and pick the best one.</li><li>Collect gun crates, then defeat the boss to clear the level.</li></ol>
      </section>
    </div>
  );
}
