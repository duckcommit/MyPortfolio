const cases = [
  {
    tag: 'Flutter · Fintech · 2024',
    title: 'Redesigning the onboarding flow for a UPI payments app',
    desc: 'The existing onboarding had a 62% drop-off by step 3. I identified friction points through session recordings and user interviews, then designed and shipped a progressive disclosure model in Flutter — reducing onboarding to 4 steps with smart defaults.',
    metrics: [
      { value: '38%', label: 'Drop-off reduced' },
      { value: '4.6★', label: 'App Store rating' },
      { value: '12k',  label: 'Daily active users' },
    ],
    featured: true,
  },
  {
    tag: 'Flutter · Health · 2023',
    title: 'Habit tracker — zero to launch',
    desc: 'Ideated, designed, and shipped a habit tracking app solo. Conducted discovery interviews with 18 users. Learned why most trackers fail and designed around streaks psychology.',
    metrics: [
      { value: '800+', label: 'Downloads, month 1' },
      { value: '68%',  label: 'D30 retention' },
    ],
  },
  {
    tag: 'Design System · 2023',
    title: 'Building a Flutter component library for a startup',
    desc: 'Designed and built a 40+ component library that reduced design-to-dev handoff time. Documented usage patterns, tokens, and accessibility guidelines.',
    metrics: [
      { value: '40%', label: 'Faster dev cycles' },
      { value: '40+', label: 'Components shipped' },
    ],
  },
]

export default function Cases() {
  return (
    <section id="cases" className="cases-section">
      <div className="section-label">Case studies</div>
      <h2 className="section-title">
        Work that<br />shipped.
      </h2>

      <div className="cases-grid">
        {cases.map(({ tag, title, desc, metrics, featured }) => (
          <a
            href="#"
            className={`case-card${featured ? ' featured' : ''}`}
            key={title}
          >
            <div className="case-arrow">↗</div>
            <div className="case-tag">{tag}</div>
            <div className="case-title">{title}</div>
            <div className="case-desc">{desc}</div>
            <div className="case-meta">
              {metrics.map(({ value, label }) => (
                <div className="case-metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
