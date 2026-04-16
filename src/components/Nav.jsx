import { useState, useEffect } from 'react'

const links = [
  { id: 'about',   label: 'About'   },
  { id: 'cases',   label: 'Work'    },
  { id: 'design',  label: 'Design'  },
  { id: 'writing', label: 'Writing' },
]

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const handleScroll = () => {
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
    <nav>
      <a href="#" className="nav-logo">
        Vyshnav<span>.</span>
      </a>

      <ul className="nav-links">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">
        Let&apos;s Talk
      </a>
    </nav>
  )
}
