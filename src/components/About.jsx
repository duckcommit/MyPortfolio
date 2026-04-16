import { useEffect, useRef } from 'react'

const skills = [
  { name: 'Flutter / Dart',    level: 'Expert',       width: 92 },
  { name: 'UI / UX Design',    level: 'Advanced',     width: 85 },
  { name: 'Product Strategy',  level: 'Growing',      width: 68 },
  { name: 'User Research',     level: 'Intermediate', width: 72 },
  { name: 'Data Analysis',     level: 'Intermediate', width: 60 },
]

export default function About() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const fills = el.querySelectorAll('.skill-fill')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            fills.forEach(f => { f.style.width = f.dataset.width + '%' })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="section-label">About me</div>
      <h2 className="section-title">
        Builder with a<br />designer&apos;s eye
      </h2>

      <div className="about-grid" ref={wrapRef}>
        <div className="about-left">
          <p>
            I&apos;ve spent the last few years building{' '}
            <strong>production Flutter apps</strong> that people actually love
            using — obsessing over every animation curve, every spacing
            decision, every micro-interaction.
          </p>
          <p>
            Now I&apos;m making a deliberate move into{' '}
            <strong>product management</strong>. Not because I&apos;m running
            away from building, but because I want to decide <em>what</em>{' '}
            gets built and <em>why</em>. I think the best PMs have shipped
            code. I have.
          </p>
          <p>
            I bring something rare to a PM role: I can prototype in hours,
            read a Figma file with a critical eye, and still run a structured
            discovery sprint.
          </p>
        </div>

        <div className="about-right skills-wrap">
          {skills.map(({ name, level, width }) => (
            <div className="skill-item" key={name}>
              <div className="skill-top">
                <span>{name}</span>
                <span>{level}</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  data-width={width}
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
