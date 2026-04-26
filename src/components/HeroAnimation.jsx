import { useState, useEffect, useRef } from 'react'

const PHASE_DURATION = 3600
const FADE_DURATION  = 500

/* ─── SURVEY FORM SCREEN (paper) ─────────────────── */
function SurveyFormScreen() {
  return (
    <div style={{
      background: '#fdf9f0',
      width: '100%', height: '100%',
      padding: '18px 16px',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      overflowY: 'hidden',
    }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(107,93,78,0.2)', paddingBottom: 10, marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1208', letterSpacing: -0.3 }}>UX Research Form</div>
        <div style={{ fontSize: 8.5, color: '#8B7B6A', fontFamily: 'monospace', marginTop: 3 }}>Interview #7 · May 2024</div>
      </div>

      {/* Q1 */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#1a1208', marginBottom: 9, lineHeight: 1.4 }}>
          1. When do you abandon an app?
        </div>
        {[
          { label: 'Navigation is confusing',         checked: true  },
          { label: 'Too many steps for a simple task', checked: false },
          { label: 'No feedback after my actions',    checked: true  },
          { label: 'Inconsistent design patterns',    checked: false },
        ].map(({ label, checked }) => (
          <div key={label} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 7 }}>
            <div style={{
              width: 11, height: 11, marginTop: 1,
              border: `1.5px solid ${checked ? '#1a1208' : '#b0a090'}`,
              background: checked ? '#1a1208' : 'transparent',
              borderRadius: 2, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {checked && (
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
                  <path d="M1 2.8L2.7 4.8L6 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 9.5, color: checked ? '#1a1208' : '#b0a090', fontWeight: checked ? 500 : 400, lineHeight: 1.4 }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Q2 */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#1a1208', marginBottom: 9, lineHeight: 1.4 }}>
          2. Preferred onboarding style?
        </div>
        {['Step-by-step guided tour', 'Explore on my own', 'Short video walkthrough'].map((label, i) => (
          <div key={label} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 7 }}>
            <div style={{
              width: 11, height: 11, borderRadius: '50%',
              border: `1.5px solid ${i === 1 ? '#1a1208' : '#b0a090'}`,
              background: i === 1 ? '#1a1208' : 'transparent',
              flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {i === 1 && <div style={{ width: 4, height: 4, background: '#fff', borderRadius: '50%' }} />}
            </div>
            <span style={{ fontSize: 9.5, color: i === 1 ? '#1a1208' : '#b0a090', fontWeight: i === 1 ? 500 : 400 }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Q3 — rating */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#1a1208', marginBottom: 9 }}>
          3. Importance of visual feedback?
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[1, 2, 3, 4, 5].map(n => (
            <div key={n} style={{
              width: 30, height: 30,
              border: `1.5px solid ${n <= 4 ? '#1a1208' : '#b0a090'}`,
              background: n <= 4 ? '#1a1208' : 'transparent',
              borderRadius: 5,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 600,
              color: n <= 4 ? '#fff' : '#b0a090',
            }}>
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Notes area */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 8, color: '#b0a090', fontFamily: 'monospace' }}>Additional notes ↓</div>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{ height: 1, background: 'rgba(107,93,78,0.18)' }} />
        ))}
      </div>
    </div>
  )
}

/* ─── PAPER WIREFRAME SCREEN (SVG pencil) ─────────── */
function PaperWireframeScreen() {
  const p = { strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', stroke: '#3d3427' }

  return (
    <div style={{ background: '#f4efe3', width: '100%', height: '100%', position: 'relative' }}>
      {/* Faint ruled lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 24px, rgba(139,123,106,0.07) 24px, rgba(139,123,106,0.07) 25px)',
        pointerEvents: 'none',
      }} />

      <svg width="100%" height="100%" viewBox="0 0 300 610" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>

        {/* ── HEADER ── */}
        {/* Logo squiggle */}
        <path d="M16,38 C21,33 26,44 31,38 C36,32 41,44 46,38" {...p} strokeWidth="1.5" opacity="0.65" />
        {/* Avatar circle */}
        <circle cx="276" cy="36" r="11" {...p} strokeWidth="0.9" opacity="0.45" />
        <line x1="270" y1="32" x2="282" y2="32" {...p} strokeWidth="0.7" opacity="0.4" />
        <line x1="270" y1="38" x2="282" y2="38" {...p} strokeWidth="0.7" opacity="0.4" />
        {/* Divider - slightly wobbly */}
        <path d="M14,54 Q80,52 150,55 Q220,57 286,54" {...p} strokeWidth="0.6" opacity="0.25" />

        {/* ── HERO CARD (rough rect) ── */}
        <path d="M14,64 L285,62 L284,152 L15,154 Z" {...p} strokeWidth="1" opacity="0.4" />
        {/* Subtle cross-hatching inside card */}
        {[74, 84, 94, 104, 114, 124, 134, 144].map((y, i) => (
          <line key={`ch${i}`} x1="14" y1={y} x2="285" y2={y} {...p} strokeWidth="0.25" opacity="0.1" />
        ))}
        {/* "Portfolio Value" label */}
        <line x1="24" y1="80" x2="118" y2="80" {...p} strokeWidth="0.75" opacity="0.33" />
        {/* Big number — thick wobbly */}
        <path d="M24,112 C55,109 100,115 196,111" {...p} strokeWidth="3.5" opacity="0.37" />
        {/* Subtitle */}
        <line x1="24" y1="132" x2="88" y2="132" {...p} strokeWidth="0.7" opacity="0.28" />

        {/* ── STAT CARDS ── */}
        {/* Left */}
        <path d="M14,162 L142,160 L141,220 L15,222 Z" {...p} strokeWidth="0.9" opacity="0.38" />
        <path d="M22,180 C40,177 62,183 82,180" {...p} strokeWidth="2" opacity="0.4" />
        <line x1="22" y1="197" x2="70" y2="197" {...p} strokeWidth="0.7" opacity="0.28" />
        {/* Right */}
        <path d="M158,162 L286,164 L285,221 L157,220 Z" {...p} strokeWidth="0.9" opacity="0.38" />
        <path d="M166,180 C184,177 205,183 228,180" {...p} strokeWidth="2" opacity="0.4" />
        <line x1="166" y1="197" x2="212" y2="197" {...p} strokeWidth="0.7" opacity="0.28" />

        {/* ── SECTION LABEL ── */}
        <line x1="14" y1="240" x2="92" y2="239" {...p} strokeWidth="0.75" opacity="0.36" />

        {/* ── ALLOCATION BARS ── */}
        {/* Equity */}
        <line x1="14" y1="260" x2="64" y2="260" {...p} strokeWidth="0.7" opacity="0.33" />
        <path d="M14,271 L200,270" {...p} strokeWidth="4" opacity="0.3" />
        <line x1="216" y1="267" x2="255" y2="267" {...p} strokeWidth="0.7" opacity="0.28" />
        {/* Debt */}
        <line x1="14" y1="293" x2="52" y2="293" {...p} strokeWidth="0.7" opacity="0.33" />
        <path d="M14,304 L118,303" {...p} strokeWidth="4" opacity="0.3" />
        <line x1="134" y1="300" x2="170" y2="300" {...p} strokeWidth="0.7" opacity="0.28" />
        {/* Gold */}
        <line x1="14" y1="326" x2="44" y2="326" {...p} strokeWidth="0.7" opacity="0.33" />
        <path d="M14,337 L74,338" {...p} strokeWidth="4" opacity="0.3" />
        <line x1="90" y1="333" x2="120" y2="333" {...p} strokeWidth="0.7" opacity="0.28" />

        {/* ── BOTTOM NAV SKETCH ── */}
        <path d="M14,558 Q150,556 286,559" {...p} strokeWidth="0.5" opacity="0.22" />
        {[46, 96, 150, 204, 254].map((cx, i) => (
          <g key={`nav${i}`}>
            <circle cx={cx} cy={582} r={10} {...p} strokeWidth="0.8" opacity="0.28" />
            {i === 2 && <circle cx={cx} cy={582} r={4} {...p} strokeWidth="0.7" opacity="0.32" />}
          </g>
        ))}

        {/* Label */}
        <text x="150" y="544" textAnchor="middle"
          style={{ fontSize: '8px', fill: 'rgba(107,93,78,0.38)', letterSpacing: '0.12em', fontFamily: 'monospace' }}>
          rough sketch
        </text>
      </svg>
    </div>
  )
}

/* ─── FINAL UI SCREEN (phone) ─────────────────────── */
function FinalUIScreen() {
  return (
    <div style={{
      background: 'linear-gradient(155deg, #0d1117, #131a26)',
      width: '100%', height: '100%',
      padding: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      color: '#fff',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'monospace' }}>
        <span>9:41</span><span>◼◼◼</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Portfolio</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)' }}>8 holdings</div>
        </div>
        <div style={{ width: 28, height: 28, background: '#f0b429', borderRadius: 8 }} />
      </div>

      <div style={{ display: 'flex', gap: 6 }}>
        {[{ v: '+8.4%', l: 'Returns' }, { v: '12', l: 'Holdings' }].map(({ v, l }) => (
          <div key={l} style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '8px 10px' }}>
            <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{v}</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'linear-gradient(135deg, #e8684a, #b83a20)', borderRadius: 12, padding: '10px 12px' }}>
        <div style={{ fontSize: 9, opacity: 0.65, marginBottom: 4 }}>Total portfolio value</div>
        <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>₹24,50,000</div>
      </div>

      {[{ l: 'Equity', w: '65%' }, { l: 'Debt', w: '22%' }, { l: 'Gold', w: '13%' }].map(({ l, w }) => (
        <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 3, fontSize: 9, color: 'rgba(255,255,255,0.45)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{l}</span><span>{w}</span></div>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 99 }}>
            <div style={{ width: w, height: '100%', background: '#f0b429', borderRadius: 99 }} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── PHASES ──────────────────────────────────────── */
const PHASES = [
  { id: 'survey',    label: 'Research',  Screen: SurveyFormScreen,    type: 'paper' },
  { id: 'wireframe', label: 'Wireframe', Screen: PaperWireframeScreen, type: 'paper' },
  { id: 'finalui',   label: 'Final UI',  Screen: FinalUIScreen,        type: 'phone' },
]

/* ─── MAIN ────────────────────────────────────────── */
export default function HeroAnimation() {
  const [phase,        setPhase]        = useState(0)
  const [prevPhase,    setPrevPhase]    = useState(null)
  const [visible,      setVisible]      = useState(true)
  const [ghostOpacity, setGhostOpacity] = useState(0)
  const phaseRef   = useRef(0)
  const ghostTimer = useRef(null)

  useEffect(() => {
    const tick = () => {
      setVisible(false)
      setTimeout(() => {
        setPrevPhase(phaseRef.current)
        setGhostOpacity(0.14)
        phaseRef.current = (phaseRef.current + 1) % PHASES.length
        setPhase(phaseRef.current)
        setVisible(true)
        if (ghostTimer.current) clearTimeout(ghostTimer.current)
        ghostTimer.current = setTimeout(() => setGhostOpacity(0), PHASE_DURATION * 0.55)
      }, FADE_DURATION)
    }

    const timer = setInterval(tick, PHASE_DURATION + FADE_DURATION)
    return () => {
      clearInterval(timer)
      if (ghostTimer.current) clearTimeout(ghostTimer.current)
    }
  }, [])

  const currentPhase  = PHASES[phase]
  const ghostPhase    = prevPhase !== null ? PHASES[prevPhase] : null
  const GhostScreen   = ghostPhase?.Screen
  const CurrentScreen = currentPhase.Screen
  const showGhost     = ghostPhase && ghostPhase.type === currentPhase.type

  const ghostLayer = showGhost ? (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 0,
      opacity: ghostOpacity,
      transition: `opacity ${PHASE_DURATION * 0.4}ms ease`,
      pointerEvents: 'none',
    }}>
      <GhostScreen />
    </div>
  ) : null

  const contentLayer = (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 1,
      opacity: visible ? 1 : 0,
      transition: `opacity ${FADE_DURATION}ms ease`,
    }}>
      <CurrentScreen />
    </div>
  )

  return (
    <div className="hanim-wrap">
      <div className={`hanim-glow hanim-glow--${currentPhase.id}`} />

      {currentPhase.type === 'paper' ? (
        <div className="hanim-paper">
          <div className="hanim-screen">
            {ghostLayer}
            {contentLayer}
          </div>
        </div>
      ) : (
        <div className="hanim-phone">
          <div className="hanim-island" />
          <div className="hanim-screen">
            {ghostLayer}
            {contentLayer}
          </div>
          <div className="hanim-home" />
        </div>
      )}

      <div className="hanim-stages">
        {PHASES.map(({ id, label }, i) => (
          <div key={id} className={`hanim-stage${phase === i ? ' active' : ''}`}>
            <div className="hanim-stage-dot" />
            <span className="hanim-stage-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
