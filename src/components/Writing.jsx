import { useEffect, useRef } from 'react'

const posts = [
  {
    num: '01',
    title: "Why Duolingo's streak mechanic is both brilliant and broken",
    desc: 'A product teardown of one of the most effective — and controversial — retention mechanisms in consumer apps today.',
    cta: 'Read teardown →',
  },
  {
    num: '02',
    title: "How I'd redesign Google Pay's split bill experience",
    desc: "A spec exercise: user stories, tradeoffs, and a proposed solution for one of the most frustrating flows in India's top UPI app.",
    cta: 'Read spec →',
  },
  {
    num: '03',
    title: 'What Flutter taught me about shipping fast without shipping ugly',
    desc: "Speed and quality aren't opposites. Three lessons from building production Flutter apps that apply directly to product decision-making.",
    cta: 'Read essay →',
  },
]

export default function Writing() {
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
    <section id="writing" className="writing-section" ref={sectionRef}>
      <div className="writing-header reveal">
        <div className="section-eyebrow">PM Thinking</div>
        <h2 className="section-title">
          How I think<br /><em>about product.</em>
        </h2>
      </div>

      {posts.map(({ num, title, desc, cta }) => (
        <a href="#" className="writing-row reveal" key={num}>
          <div className="writing-row-num">{num}</div>
          <div>
            <div className="writing-row-title">{title}</div>
            <div className="writing-row-desc">{desc}</div>
            <div className="writing-row-cta">{cta}</div>
          </div>
          <div className="writing-row-arrow">↗</div>
        </a>
      ))}
    </section>
  )
}
