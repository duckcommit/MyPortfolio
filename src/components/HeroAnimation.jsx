import { useState, useEffect, useRef } from 'react'

const base = import.meta.env.BASE_URL

const PHASE_DURATION = 3600
const FADE_DURATION  = 500

/* ─── SURVEY FORM SCREEN (indigo) ────────────────── */
function SurveyFormScreen() {
  return (
    <div style={{
      background: '#f5f3ff',
      width: '100%', height: '100%',
      padding: '18px 16px',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      overflowY: 'hidden',
    }}>
      <div style={{ borderBottom: '1px solid rgba(99,102,241,0.18)', paddingBottom: 10, marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#1e1b4b', letterSpacing: -0.3 }}>UX Research Form</div>
        <div style={{ fontSize: 8.5, color: '#6366f1', fontFamily: 'monospace', marginTop: 3 }}>Interview #3 · IndiGo Travel App</div>
      </div>

      {/* Q1 */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#1e1b4b', marginBottom: 9, lineHeight: 1.4 }}>
          1. What matters most in a travel app?
        </div>
        {[
          { label: 'Instant boarding pass access',     checked: true  },
          { label: 'Real-time flight status updates',  checked: true  },
          { label: 'Seat selection & upgrades',        checked: false },
          { label: 'Loyalty points & offers',          checked: false },
        ].map(({ label, checked }) => (
          <div key={label} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 7 }}>
            <div style={{
              width: 11, height: 11, marginTop: 1,
              border: `1.5px solid ${checked ? '#4f46e5' : '#c7d2fe'}`,
              background: checked ? '#4f46e5' : 'transparent',
              borderRadius: 2, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {checked && (
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
                  <path d="M1 2.8L2.7 4.8L6 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 9.5, color: checked ? '#1e1b4b' : '#a5b4fc', fontWeight: checked ? 500 : 400, lineHeight: 1.4 }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Q2 */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#1e1b4b', marginBottom: 9, lineHeight: 1.4 }}>
          2. When do you use the airline app most?
        </div>
        {['Day of travel — at the airport', 'While booking or planning', 'Post-flight (feedback, points)'].map((label, i) => (
          <div key={label} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 7 }}>
            <div style={{
              width: 11, height: 11, borderRadius: '50%',
              border: `1.5px solid ${i === 0 ? '#4f46e5' : '#c7d2fe'}`,
              background: i === 0 ? '#4f46e5' : 'transparent',
              flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {i === 0 && <div style={{ width: 4, height: 4, background: '#fff', borderRadius: '50%' }} />}
            </div>
            <span style={{ fontSize: 9.5, color: i === 0 ? '#1e1b4b' : '#a5b4fc', fontWeight: i === 0 ? 500 : 400 }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Q3 — rating */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#1e1b4b', marginBottom: 9 }}>
          3. How stressful is travel-day navigation?
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[1, 2, 3, 4, 5].map(n => (
            <div key={n} style={{
              width: 30, height: 30,
              border: `1.5px solid ${n <= 4 ? '#4f46e5' : '#c7d2fe'}`,
              background: n <= 4 ? '#4f46e5' : 'transparent',
              borderRadius: 5,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 600,
              color: n <= 4 ? '#fff' : '#a5b4fc',
            }}>
              {n}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 8, color: '#a5b4fc', fontFamily: 'monospace' }}>Additional notes ↓</div>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{ height: 1, background: 'rgba(99,102,241,0.15)' }} />
        ))}
      </div>
    </div>
  )
}

/* ─── PAPER WIREFRAME SCREEN (IndiGo Travel Mode sketch) ─ */
function PaperWireframeScreen() {
  const p = { strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', stroke: '#3730a3' }

  return (
    <div style={{ background: '#eef2ff', width: '100%', height: '100%', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 24px, rgba(99,102,241,0.07) 24px, rgba(99,102,241,0.07) 25px)',
        pointerEvents: 'none',
      }} />

      <svg width="100%" height="100%" viewBox="0 0 300 610" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>

        {/* ── STATUS BAR ── */}
        <line x1="16" y1="18" x2="60" y2="18" {...p} strokeWidth="0.7" opacity="0.3" />
        <line x1="240" y1="18" x2="286" y2="18" {...p} strokeWidth="0.7" opacity="0.3" />

        {/* ── HEADER ── */}
        <line x1="16" y1="38" x2="90" y2="38" {...p} strokeWidth="1.4" opacity="0.5" />
        <line x1="16" y1="46" x2="62" y2="46" {...p} strokeWidth="0.8" opacity="0.3" />
        {/* Bell icon */}
        <path d="M260,32 C260,26 268,26 268,32 L268,40 C268,42 256,42 256,40 Z" {...p} strokeWidth="0.9" opacity="0.4" />
        {/* Avatar */}
        <circle cx="281" cy="37" r="9" {...p} strokeWidth="0.9" opacity="0.4" />
        {/* Divider */}
        <path d="M14,56 Q80,54 150,57 Q220,59 286,56" {...p} strokeWidth="0.5" opacity="0.22" />

        {/* ── TRAVEL MODE BANNER ── */}
        <path d="M14,66 L286,66 L286,120 L14,120 Z" {...p} strokeWidth="1" opacity="0.35" />
        {[76, 86, 96, 106, 116].map((y, i) => (
          <line key={`tm${i}`} x1="14" y1={y} x2="286" y2={y} {...p} strokeWidth="0.18" opacity="0.07" />
        ))}
        {/* "Travel Mode" label */}
        <line x1="24" y1="82" x2="140" y2="82" {...p} strokeWidth="1.2" opacity="0.45" />
        <line x1="24" y1="92" x2="100" y2="92" {...p} strokeWidth="0.7" opacity="0.28" />
        {/* Plane icon sketch */}
        <path d="M230,85 L260,93 L240,98 L235,110" {...p} strokeWidth="1.1" opacity="0.42" />
        <path d="M238,91 L242,79 L248,88" {...p} strokeWidth="0.7" opacity="0.3" />
        {/* Activate CTA */}
        <path d="M24,105 L130,105 L130,116 L24,116 Z" {...p} strokeWidth="0.9" opacity="0.4" />

        {/* ── BOARDING PASS CARD ── */}
        <path d="M14,130 L286,130 L286,240 L14,240 Z" {...p} strokeWidth="0.9" opacity="0.33" />
        {/* dashed divider mid-card */}
        <path d="M14,186 L286,186" stroke="#3730a3" strokeWidth="0.6" strokeDasharray="4 3" fill="none" opacity="0.3" />
        {/* Flight number + route */}
        <line x1="24" y1="146" x2="90" y2="145" {...p} strokeWidth="1.3" opacity="0.42" />
        <line x1="24" y1="157" x2="66" y2="157" {...p} strokeWidth="0.65" opacity="0.28" />
        {/* DEL → BOM */}
        <line x1="24" y1="172" x2="68" y2="172" {...p} strokeWidth="1.6" opacity="0.38" />
        <path d="M82,172 L120,172" {...p} strokeWidth="0.6" strokeDasharray="3 2" opacity="0.3" />
        <line x1="134" y1="172" x2="178" y2="172" {...p} strokeWidth="1.6" opacity="0.38" />
        {/* Seat + Gate */}
        <line x1="24" y1="198" x2="80" y2="198" {...p} strokeWidth="0.7" opacity="0.3" />
        <line x1="24" y1="208" x2="56" y2="208" {...p} strokeWidth="1.1" opacity="0.38" />
        <line x1="180" y1="198" x2="236" y2="198" {...p} strokeWidth="0.7" opacity="0.3" />
        <line x1="180" y1="208" x2="220" y2="208" {...p} strokeWidth="1.1" opacity="0.38" />
        {/* QR code placeholder */}
        <path d="M226,132 L272,132 L272,178 L226,178 Z" {...p} strokeWidth="0.8" opacity="0.32" />
        {[136, 144, 152, 160, 168].map((y, i) => (
          <line key={`qr${i}`} x1="230" y1={y} x2="268" y2={y} {...p} strokeWidth="0.3" opacity="0.2" />
        ))}
        {/* Boarding time */}
        <line x1="24" y1="226" x2="180" y2="226" {...p} strokeWidth="0.65" opacity="0.25" />

        {/* ── FLIGHT STATUS CARD ── */}
        <path d="M14,250 L286,250 L286,340 L14,340 Z" {...p} strokeWidth="0.9" opacity="0.33" />
        <line x1="24" y1="266" x2="120" y2="265" {...p} strokeWidth="1.2" opacity="0.4" />
        {/* Progress bar */}
        <path d="M24,286 L272,286" {...p} strokeWidth="5" opacity="0.1" />
        <path d="M24,286 L170,286" {...p} strokeWidth="5" opacity="0.25" />
        {/* Plane on track */}
        <circle cx="170" cy="286" r="5" {...p} strokeWidth="0.9" opacity="0.4" />
        {/* DEL / BOM labels */}
        <line x1="24" y1="300" x2="60" y2="300" {...p} strokeWidth="0.7" opacity="0.3" />
        <line x1="240" y1="300" x2="272" y2="300" {...p} strokeWidth="0.7" opacity="0.3" />
        {/* Status pill */}
        <path d="M24,314 L96,314 L96,328 L24,328 Z" {...p} strokeWidth="0.8" opacity="0.4" />
        <line x1="32" y1="321" x2="88" y2="321" {...p} strokeWidth="0.6" opacity="0.35" />

        {/* ── BOTTOM NAV ── */}
        <path d="M14,558 Q150,556 286,559" {...p} strokeWidth="0.5" opacity="0.22" />
        {[37, 87, 150, 213, 263].map((cx, i) => (
          <g key={`nav${i}`}>
            <circle cx={cx} cy={582} r={10} {...p} strokeWidth="0.8" opacity={i === 0 ? 0.5 : 0.22} />
            {i === 0 && <circle cx={cx} cy={582} r={4} {...p} strokeWidth="0.7" opacity="0.4" />}
          </g>
        ))}

        <text x="150" y="544" textAnchor="middle"
          style={{ fontSize: '8px', fill: 'rgba(99,102,241,0.35)', letterSpacing: '0.12em', fontFamily: 'monospace' }}>
          rough sketch
        </text>
      </svg>
    </div>
  )
}

/* ─── FINAL UI SCREEN (IndiGo redesign) ─────────── */
function FinalUIScreen() {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <img
        src={base + 'design/Indigo-redesigned.png'}
        alt="IndiGo airline app redesign"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
      />
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
