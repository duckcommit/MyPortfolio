import { useEffect, useRef } from 'react'

const links = [
  { icon: '✉',  label: 'official.vysh@gmail.com', href: 'mailto:official.vysh@gmail.com', primary: true  },
  { icon: 'in', label: 'LinkedIn',                href: 'https://www.linkedin.com/in/vyshnav-ajith/',                               primary: false },
  { icon: '⌥',  label: 'Resume PDF',              href: 'https://drive.google.com/file/d/1jdlKXuMhNMXsZOU6FG9_JXs5c-enmhh7/view?usp=sharing', primary: false },
  { icon: '◈',  label: 'GitHub',                  href: 'https://github.com/duckcommit',                               primary: false },
]

export default function Contact() {
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
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef}>
      <div className="contact-box reveal">
        <div className="contact-left">
          <div className="contact-label">Get in touch</div>
          <h2 className="contact-title">
            Let&apos;s build<br />
            <em>the right things.</em>
          </h2>
          <p className="contact-sub">
            I&apos;m looking for roles where a founding
            engineer&apos;s instinct and a designer&apos;s eye are actually
            useful. If your team ships product and cares about craft, let&apos;s
            talk.
          </p>
          <div className="contact-links">
            {links.map(({ icon, label, href, primary }) => (
              <a
                href={href}
                className={`contact-link${primary ? '' : ' ghost'}`}
                key={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-link-icon">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>

        <svg className="contact-geo" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8"/>
          <circle cx="150" cy="150" r="110" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="150" cy="150" r="80"  stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8"/>
          <circle cx="150" cy="150" r="50"  stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="150" cy="150" r="20"  stroke="currentColor" strokeWidth="0.5"/>
          <line x1="10"  y1="150" x2="290" y2="150" stroke="currentColor" strokeWidth="0.5"/>
          <line x1="150" y1="10"  x2="150" y2="290" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="150" cy="150" r="5" fill="currentColor"/>
          <circle cx="150" cy="40"  r="3" fill="currentColor"/>
          <circle cx="150" cy="260" r="3" fill="currentColor"/>
          <circle cx="40"  cy="150" r="3" fill="currentColor"/>
          <circle cx="260" cy="150" r="3" fill="currentColor"/>
        </svg>
      </div>
    </section>
  )
}
