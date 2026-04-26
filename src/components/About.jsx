import { useEffect, useRef } from 'react'

const BIO_WORDS = [
  { t: "I'm a software engineer from the",                                      b: false },
  { t: "Indian Institute of Information Technology,",                    b: true  },
  { t: "and over the past three years, I've built",                             b: false },
  { t: "Flutter products",                                                      b: true  },
  { t: "used by",                                                               b: false },
  { t: "real people in the real world.",                                        b: true  },
  { t: "As a",                                                                  b: false },
  { t: "founding engineer",                                                     b: true  },
  { t: "at a Canadian home and auto services startup, I helped shape everything from", b: false },
  { t: "mobile architecture",                                                   b: true  },
  { t: "to",                                                                    b: false },
  { t: "user experience and product decisions.",                                b: true  },
  { t: "At",                                                                    b: false },
  { t: "Globatech,",                                                            b: true  },
  { t: "I build",                                                               b: false },
  { t: "white-labelled fintech products",                                       b: true  },
  { t: "that balance user needs, business goals, and scale. Through it all, I've developed a deep appreciation for", b: false },
  { t: "thoughtful design,",                                                    b: true  },
  { t: "strong product thinking,",                                              b: true  },
  { t: "and the impact of",                                                     b: false },
  { t: "building the right thing",                                              b: true  },
  { t: "— not just building it well.",                                          b: false },
].flatMap(({ t, b }) => t.split(' ').map(word => ({ word, bold: b })))

export default function About() {
  const sectionRef = useRef(null)
  const wordRefs = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onScroll = () => {
      const scrollTop = window.scrollY
      const sectionTop = section.offsetTop
      const sectionH = section.offsetHeight
      const winH = window.innerHeight

      const progress = Math.max(
        0,
        Math.min(1, (scrollTop - sectionTop) / (sectionH - winH))
      )

      wordRefs.current.forEach((el, i) => {
        if (!el) return
        const wp = Math.max(
          0,
          Math.min(1, (progress * BIO_WORDS.length - i + 3) / 6)
        )
        el.style.color = `rgba(255,255,255,${(0.12 + wp * 0.88).toFixed(3)})`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ minHeight: '120vh', padding: 0 }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 12px',
          boxSizing: 'border-box',
        }}
      >
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.4rem, 2.2vw, 2.8rem)',
            fontWeight: 300,
            lineHeight: 1.5,
            textAlign: 'center',
            width: '100%',
            maxWidth: '1600px',
            letterSpacing: '-0.02em',
            margin: '0 auto',
            overflowWrap: 'break-word',
          }}
        >
          {BIO_WORDS.map(({ word, bold }, i) => (
            <span
              key={i}
              ref={el => { wordRefs.current[i] = el }}
              style={{
                color: 'rgba(255,255,255,0.12)',
                fontWeight: bold ? 600 : 200,
                display: 'inline',
              }}
            >
              {word}
              {i < BIO_WORDS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}