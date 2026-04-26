import { useEffect, useRef } from 'react'

const cases = [
  {
    tag: 'Flutter · Services Marketplace · Founding Eng',
    title: 'Building a home & auto services app as the founding engineer',
    desc: "Joined a Canadian home and auto services company before the product existed. As the founding mobile engineer I owned the Flutter codebase from scratch — making architecture calls, obsessing over the UI, and sitting in product discussions that shaped what we built. The best PM training I never signed up for.",
    metrics: [
      { value: '0→1',      label: 'Built from scratch' },
      { value: 'Founding', label: 'Mobile engineer'    },
      { value: 'Canada',   label: 'Live in market'     },
    ],
  },
  {
    tag: 'Flutter · Fintech · Globatech',
    title: 'White-labelled fintech — portfolio management for multiple clients',
    desc: "At Globatech I build and maintain Flutter-based portfolio management apps deployed across multiple white-label clients. Each deployment means adapting to different branding, user personas, and compliance requirements without breaking what works. Complex product work disguised as engineering.",
    metrics: [
      { value: '3+',      label: 'Client deployments' },
      { value: 'Fintech', label: 'Domain expertise'   },
    ],
  },
]

export default function Cases() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const items = el.querySelectorAll('.reveal, .reveal-sm')
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

  return (
    <section id="cases" className="cases-section" ref={sectionRef}>
      <div className="cases-header reveal">
        <div className="section-eyebrow">Case studies</div>
        <h2 className="section-title">
          Work that<br /><em>shipped.</em>
        </h2>
      </div>

      <div className="cases-grid">
        {cases.map(({ tag, title, desc, metrics }) => (
          <div className="case-card reveal" key={tag}>
            <div className="case-card-tag">{tag}</div>
            <div className="case-card-title">{title}</div>
            <div className="case-card-desc">{desc}</div>
            <div className="case-card-meta">
              {metrics.map(({ value, label }) => (
                <div className="case-metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
