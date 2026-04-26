import { useEffect, useRef } from 'react'

const screenshots = [
  { src: null, label: 'Dashboard — 2do app' },
  { src: null, label: 'Home — services app' },
  { src: null, label: 'Dashboard — fintech app' },
  { src: null, label: 'Onboarding — services app' },
  { src: null, label: 'Portfolio view — fintech app' },
]

const looped = [...screenshots, ...screenshots]

export default function Gallery() {
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
            <div className="showcase-item" key={i}>
              <div className="showcase-img">
                {src
                  ? <img src={src} alt={label} />
                  : <div className="showcase-placeholder" />
                }
              </div>
              <p className="showcase-label">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
