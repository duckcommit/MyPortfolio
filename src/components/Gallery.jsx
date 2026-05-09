import { useState, useRef, useEffect, useCallback } from 'react'

const base = import.meta.env.BASE_URL

const designs = [
  {
    src: '/design/2do-splash.jpg',
    label: 'Splash — 2do',
    app: '2do · Home & Services',
    screen: 'Onboarding',
    desc: 'Full-bleed cinematic hero with a warm dusk photograph of a home. The wordmark sits low and left — grounding the brand in domesticity. A single mobile number field and CTA keep the entry completely frictionless.',
  },
  {
    src: '/design/2do-otp.jpg',
    label: 'OTP — 2do',
    app: '2do · Home & Services',
    screen: 'Verification',
    desc: 'Six segmented OTP boxes float over the same atmospheric backdrop. The active field glows in brand orange. A countdown timer for resend and a prominent Verify CTA close the loop without any visual noise.',
  },
  {
    src: '/design/2do-home.jpg',
    label: 'Home — 2do',
    app: '2do · Home & Services',
    screen: 'Service Discovery',
    desc: 'Navy top bar anchors location context. A rotating promotional banner sits above an 8-icon service grid — HVAC to Painting — each a clean outlined tile. Appliance repair cards stack below with pricing surfaced upfront.',
  },
  {
    src: '/design/Indigo-redesigned.png',
    label: 'Redesign — IndiGo',
    app: 'IndiGo · Airline',
    screen: 'Travel Mode',
    desc: "Redesigned IndiGo's travel-day app experience to reduce cognitive load at peak stress moments — proposing a context-aware Travel Mode with instant boarding pass access and glanceable flight status.",
  },
  {
    src: '/design/regatta-onboarding.jpg',
    label: 'Welcome — Regatta',
    app: 'Henley Royal Regatta',
    screen: 'Onboarding',
    desc: 'A full-bleed crowd photograph bleeds through a deep navy tint. The app positions itself as the "Official Companion" — heritage serif typeface, muted gold accent, and a dot pagination sequence prime first-time users for the event ahead.',
  },
  {
    src: '/design/regatta-register.jpg',
    label: 'Register — Regatta',
    app: 'Henley Royal Regatta',
    screen: 'Registration',
    desc: 'Sign-up stripped to its essentials — Google, Microsoft, and Apple OAuth circles plus an email fallback. The headline "Join the Regatta." frames account creation as an event, not a form.',
  },
  {
    src: '/design/regatta-home.jpg',
    label: 'Home — Regatta',
    app: 'Henley Royal Regatta',
    screen: 'Dashboard',
    desc: 'A live event countdown dominates the top card — days, hours, minutes, seconds. Below it, a wayfinding banner and a LIVE race feed give the home screen immediate utility the moment you land.',
  },
  {
    src: '/design/regatta-live.jpg',
    label: 'Live Race — Regatta',
    app: 'Henley Royal Regatta',
    screen: 'Live Coverage',
    desc: 'Real-time race data displayed as a horizontal progress bar — Leander leading Thames by 1.2 lengths. Current river conditions (21°C, tailwind) sit below in a tight grid. The teal card palette is unmistakably "on the water."',
  },
  {
    src: '/design/regatta-leaderboard.jpg',
    label: 'Leaderboard — Regatta',
    app: 'Henley Royal Regatta',
    screen: 'Results & Challenges',
    desc: 'Ranked results for Diamond Challenge Sculls with country flags and split times. Below, a Daily Challenges gamification layer (80/280 pts) encourages engagement beyond passive race watching.',
  },
  {
    src: '/design/regatta-predict.jpg',
    label: 'Predict — Regatta',
    app: 'Henley Royal Regatta',
    screen: 'Predictions',
    desc: 'Community prediction bars overlay crowd probability on each fixture — 62% vs 38%. The Portfolio Crew Challenge below adds a social layer, letting groups compete on cumulative points across the full regatta.',
  },
  {
    src: '/design/regatta-discover.jpg',
    label: 'Discover — Regatta',
    app: 'Henley Royal Regatta',
    screen: 'Venue Guide',
    desc: 'The Discover tab maps the physical venue — Food & Drink and Facilities surfaced as filterable photo cards. Each carries a location tag so guests can navigate a sprawling riverside event without a paper map.',
  },
  {
    src: '/design/regatta-schedule.jpg',
    label: 'Schedule — Regatta',
    app: 'Henley Royal Regatta',
    screen: 'Schedule',
    desc: 'A horizontal day-selector (Tue–Sat) feeds a vertical race timeline. Each row shows time, event name, boat class, and a live indicator. The left-border accent line gives the list a newspaper-results feel at a glance.',
  },
]

const looped = [...designs, ...designs]

export default function Gallery() {
  const [active, setActive] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        items.forEach((item, i) => {
          item.style.transitionDelay = `${i * 100}ms`
          item.classList.add('visible')
        })
        observer.disconnect()
      },
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(() => setActive(i => (i - 1 + designs.length) % designs.length), [])
  const next = useCallback(() => setActive(i => (i + 1) % designs.length), [])

  useEffect(() => {
    if (active === null) return
    const handler = e => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [active, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  return (
    <section id="design" ref={sectionRef}>
      <div className="gallery-header reveal">
        <div className="section-eyebrow">Design showcase</div>
        <h2 className="section-title">
          Flutter UIs I<br /><em>obsessed over.</em>
        </h2>
      </div>

      <div className="showcase-track">
        <div className="showcase-inner">
          {looped.map(({ src, label }, i) => (
            <div
              className="showcase-item"
              key={i}
              onClick={() => setActive(i % designs.length)}
            >
              <div className="showcase-img">
                <img src={base + src.slice(1)} alt={label} />
              </div>
              <p className="showcase-label">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="design-modal" onClick={close}>
          <div className="design-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="design-modal-close" onClick={close} aria-label="Close">✕</button>

            <div className="design-modal-img-wrap">
              <img
                className="design-modal-img"
                src={base + designs[active].src.slice(1)}
                alt={designs[active].screen}
              />
            </div>

            <div className="design-modal-content">
              <p className="design-modal-app">{designs[active].app}</p>
              <h3 className="design-modal-screen">{designs[active].screen}</h3>
              <p className="design-modal-desc">{designs[active].desc}</p>

              <div className="design-modal-nav">
                <button className="design-modal-arrow" onClick={prev} aria-label="Previous">
                  ←
                </button>
                <span className="design-modal-count">
                  {active + 1} <span>/ {designs.length}</span>
                </span>
                <button className="design-modal-arrow" onClick={next} aria-label="Next">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
