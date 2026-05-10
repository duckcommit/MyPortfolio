import { useState, useEffect } from 'react'

const links = [
  { id: 'about',   label: 'About'   },
  { id: 'cases',   label: 'Work'    },
  { id: 'design',  label: 'Design'  },
  { id: 'writing', label: 'Writing' },
]

export default function Nav() {
  const [active, setActive]     = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`nav-header${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-pill">
        <div className="nav-row">
          <a href="#" className="nav-logo">Vyshnav</a>

          <ul className="nav-links">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'active' : ''}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://drive.google.com/file/d/1OJbXf8IBl163tqkGDrNyKCPeVwAF4Dl-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >Resume</a>
          <a href="#contact" className="nav-cta">Let&apos;s Talk</a>
        </div>
      </div>
    </header>
  )
}
