const screens = [
  {
    className: 'mock-1',
    chip: { color: 'var(--accent)', label: 'Finance' },
    heading: <>Your money,<br />your control.</>,
    label: 'Fintech Dashboard',
    sublabel: 'Flutter · Material 3',
    content: (
      <>
        <div className="mock-card">
          <div className="mock-card-label">Total balance</div>
          <div className="mock-card-val" style={{ color: 'var(--accent)' }}>₹84,230</div>
        </div>
        <div className="mock-row">
          <div className="mock-mini"><strong style={{ color: 'var(--accent)' }}>+12%</strong>this month</div>
          <div className="mock-mini"><strong>₹3,200</strong>spent today</div>
        </div>
        <div className="mock-tag-row">
          <span className="mock-tag green">Savings ↑</span>
          <span className="mock-tag">SIP active</span>
          <span className="mock-tag purple">Goals</span>
        </div>
      </>
    ),
  },
  {
    className: 'mock-2',
    chip: { color: '#a89ff5', label: 'Social' },
    heading: <>Connect.<br />Grow.</>,
    label: 'Community App',
    sublabel: 'Flutter · Custom animations',
    content: (
      <>
        <div className="mock-list">
          <div className="mock-list-item">
            <div className="mock-avatar" />
            <div className="mock-li-text">Priya joined your circle<small>2 min ago</small></div>
          </div>
          <div className="mock-list-item">
            <div className="mock-avatar g" />
            <div className="mock-li-text">Streak: 14 days 🔥<small>Keep going!</small></div>
          </div>
          <div className="mock-list-item">
            <div className="mock-avatar p" />
            <div className="mock-li-text">New challenge unlocked<small>Design sprint</small></div>
          </div>
        </div>
        <div className="mock-tag-row">
          <span className="mock-tag purple">3 new</span>
          <span className="mock-tag">Trending</span>
        </div>
      </>
    ),
  },
  {
    className: 'mock-3',
    chip: { color: '#4caf82', label: 'Health' },
    heading: <>Today&apos;s<br />habits.</>,
    label: 'Habit Tracker',
    sublabel: 'Flutter · Riverpod',
    content: (
      <>
        <div className="mock-list">
          <div className="mock-list-item">
            <div className="mock-avatar g" />
            <div className="mock-li-text">Morning run ✓<small>6:30 AM · 5.2 km</small></div>
          </div>
          <div className="mock-list-item">
            <div className="mock-avatar" />
            <div className="mock-li-text">Read 30 min<small>In progress</small></div>
          </div>
          <div className="mock-list-item">
            <div className="mock-avatar p" />
            <div className="mock-li-text">Meditate<small>Not started</small></div>
          </div>
        </div>
        <div className="mock-row" style={{ marginTop: '4px' }}>
          <div className="mock-mini"><strong style={{ color: 'var(--accent)' }}>2/3</strong>done today</div>
          <div className="mock-mini"><strong>14🔥</strong>streak</div>
        </div>
      </>
    ),
  },
]

export default function Gallery() {
  return (
    <section id="design">
      <div className="section-label">Design showcase</div>
      <h2 className="section-title">
        Flutter UIs I<br />obsessed over.
      </h2>

      <div className="gallery-grid">
        {screens.map(({ className, chip, heading, label, sublabel, content }) => (
          <div className="gallery-item" key={label}>
            <div className={`mock-screen ${className}`}>
              <div className="mock-status">
                <span>9:41</span>
                <span>◼◼◼</span>
              </div>
              <div className="mock-chip">
                <span style={{ color: chip.color }}>●</span> {chip.label}
              </div>
              <div className="mock-h">{heading}</div>
              {content}
            </div>
            <div className="gallery-label">
              {label}
              <small>{sublabel}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
