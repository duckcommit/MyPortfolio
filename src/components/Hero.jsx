export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-circle" />
      <div className="hero-bg-circle2" />

      {/* Left — copy */}
      <div className="hero-left">
        <div className="hero-tag">Available for PM roles · Pune, India</div>
        <h1 className="hero-title">
          Flutter builder.<br />
          <em>Product thinker.</em>
        </h1>
        <p className="hero-sub">
          I ship beautiful, pixel-perfect Flutter apps — and now I want to own
          the strategy behind what gets built. 3 years of UI obsession, finally
          meeting product thinking.
        </p>
        <div className="hero-actions">
          <a href="#cases" className="btn-primary">See my work</a>
          <a href="#contact" className="btn-ghost">Get in touch →</a>
        </div>
      </div>

      {/* Right — phone mockup */}
      <div className="hero-visual">
        <div className="phone-wrap">
          <div className="phone-glow" />

          <div className="phone">
            <div className="phone-screen">
              <div className="ps-header">
                <span className="ps-title">Dashboard</span>
                <div className="ps-icon" />
              </div>

              <div className="ps-stat-row">
                <div className="ps-stat">
                  <strong>2.4k</strong>Active users
                </div>
                <div className="ps-stat">
                  <strong>94%</strong>Retention
                </div>
              </div>

              <div className="ps-card">
                <div className="ps-card-label">Monthly revenue</div>
                <div className="ps-card-val">₹1,24,000</div>
              </div>

              <div className="ps-bar-row">
                {[
                  { label: 'Onboarding',       width: '88%' },
                  { label: 'Feature adoption', width: '72%' },
                  { label: 'NPS score',        width: '60%' },
                ].map(({ label, width }) => (
                  <div className="ps-bar-item" key={label}>
                    <span>{label}</span>
                    <div className="ps-bar-track">
                      <div className="ps-bar-fill" style={{ width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="floating-badge badge-1">
            <div className="badge-dot" />
            Flutter 3.x
          </div>
          <div className="floating-badge badge-2">
            <div className="badge-dot purple" />
            UI / Product Design
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        scroll to explore
      </div>
    </section>
  )
}
