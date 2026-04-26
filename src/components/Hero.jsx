import { useState, useEffect } from 'react'
import HeroAnimation from './HeroAnimation'

const CYCLE_WORDS = ['craftsmanship.', 'pixel perfection.', 'product thinking.']

const STATS = [
  { val: '3',   text: 'Years production Flutter', sub: 'engineering'  },
  { val: '0→1', text: 'Product built',            sub: 'from scratch' },
  { val: '3+',  text: 'White-label fintech',      sub: 'deployments'  },
  { val: '40+', text: 'Component library',        sub: 'built'        },
  { val: '∞',   text: 'Pixels obsessed over',     sub: 'and counting' },
]

function TypingWord() {
  const [wordIdx,  setWordIdx]  = useState(0)
  const [text,     setText]     = useState('')
  const [erasing,  setErasing]  = useState(false)

  useEffect(() => {
    const word = CYCLE_WORDS[wordIdx]
    let t

    if (!erasing) {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 72)
      } else {
        t = setTimeout(() => setErasing(true), 2400)
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(t => t.slice(0, -1)), 38)
      } else {
        setErasing(false)
        setWordIdx(i => (i + 1) % CYCLE_WORDS.length)
      }
    }
    return () => clearTimeout(t)
  }, [text, erasing, wordIdx])

  return (
    <span className="hero-type-word">
      {text}
      <span className="hero-type-cursor">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-overlay" />

      <div className="hero-content">
        <div className="hero-left">
          

          <h1 className="hero-title">
            <span className="ht-dim">Where </span>
            <span className="ht-strong">engineering precision</span>
            <br />
            <span className="ht-dim">meets design</span>
            <br />
            <TypingWord />
          </h1>

          <div className="hero-bottom">
            <p className="hero-sub">
              I&apos;m Vyshnav. Three years of building products taught me that great
              technology matters only when it feels intuitive, useful, and delightful.
              I blend engineering precision, design craft, and product thinking to
              create experiences people love to use.
            </p>

            <div className="hero-actions">
              <a href="#cases" className="btn-primary">See my work &rarr;</a>
              <a href="#contact" className="btn-ghost">Let&apos;s talk</a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <HeroAnimation />
        </div>
      </div>

      <div className="hero-stats">
        <div className="marquee-wrap">
          <div className="marquee-content">
            {[0, 1, 2, 3].map(gi => (
              <div className="marquee-group" aria-hidden={gi > 0 ? 'true' : undefined} key={gi}>
                {STATS.map(({ val, text, sub }) => (
                  <div className="stat-item" key={`${gi}-${val}`}>
                    <span className="stat-val">{val}</span>
                    <span className="stat-text">
                      {text}
                      <span className="stat-sub">{sub}</span>
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">scroll</span>
      </div>
    </section>
  )
}