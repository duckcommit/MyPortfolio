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
      <div style={{ borderBottom: '1px solid rgba(107,93,78,0.2)', paddingBottom: 10, marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1208', letterSpacing: -0.3 }}>UX Research Form</div>
        <div style={{ fontSize: 8.5, color: '#8B7B6A', fontFamily: 'monospace', marginTop: 3 }}>Interview #4 · Regatta Companion</div>
      </div>

      {/* Q1 */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#1a1208', marginBottom: 9, lineHeight: 1.4 }}>
          1. What matters most in an event app?
        </div>
        {[
          { label: 'Live race results & leaderboards', checked: true  },
          { label: 'Venue maps & navigation',          checked: true  },
          { label: 'Schedule & push reminders',        checked: false },
          { label: 'Predictions & social features',    checked: false },
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
          2. How do you follow live sports?
        </div>
        {['Dedicated companion app', 'Social media / live tweets', 'On-site screens & boards'].map((label, i) => (
          <div key={label} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 7 }}>
            <div style={{
              width: 11, height: 11, borderRadius: '50%',
              border: `1.5px solid ${i === 0 ? '#1a1208' : '#b0a090'}`,
              background: i === 0 ? '#1a1208' : 'transparent',
              flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {i === 0 && <div style={{ width: 4, height: 4, background: '#fff', borderRadius: '50%' }} />}
            </div>
            <span style={{ fontSize: 9.5, color: i === 0 ? '#1a1208' : '#b0a090', fontWeight: i === 0 ? 500 : 400 }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Q3 — rating */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#1a1208', marginBottom: 9 }}>
          3. Importance of real-time updates?
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[1, 2, 3, 4, 5].map(n => (
            <div key={n} style={{
              width: 30, height: 30,
              border: `1.5px solid ${n <= 5 ? '#1a1208' : '#b0a090'}`,
              background: n <= 5 ? '#1a1208' : 'transparent',
              borderRadius: 5,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 600,
              color: n <= 5 ? '#fff' : '#b0a090',
            }}>
              {n}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 8, color: '#b0a090', fontFamily: 'monospace' }}>Additional notes ↓</div>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{ height: 1, background: 'rgba(107,93,78,0.18)' }} />
        ))}
      </div>
    </div>
  )
}

/* ─── PAPER WIREFRAME SCREEN (Regatta home sketch) ─ */
function PaperWireframeScreen() {
  const p = { strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none', stroke: '#3d3427' }

  return (
    <div style={{ background: '#f4efe3', width: '100%', height: '100%', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 24px, rgba(139,123,106,0.07) 24px, rgba(139,123,106,0.07) 25px)',
        pointerEvents: 'none',
      }} />

      <svg width="100%" height="100%" viewBox="0 0 300 610" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>

        {/* ── HEADER ── */}
        {/* Logo text squiggle */}
        <line x1="16" y1="34" x2="82" y2="34" {...p} strokeWidth="1.4" opacity="0.5" />
        <line x1="16" y1="42" x2="56" y2="42" {...p} strokeWidth="0.8" opacity="0.3" />
        {/* Bell icon */}
        <path d="M256,28 C256,22 264,22 264,28 L264,36 C264,38 252,38 252,36 Z" {...p} strokeWidth="0.9" opacity="0.4" />
        {/* Avatar circle */}
        <circle cx="279" cy="33" r="10" {...p} strokeWidth="0.9" opacity="0.45" />
        {/* Divider */}
        <path d="M14,54 Q80,52 150,55 Q220,57 286,54" {...p} strokeWidth="0.6" opacity="0.25" />

        {/* ── COUNTDOWN CARD ── */}
        <path d="M14,64 L286,64 L286,148 L14,148 Z" {...p} strokeWidth="1" opacity="0.35" />
        {/* subtle fill lines */}
        {[74, 84, 94, 104, 114, 124, 134, 144].map((y, i) => (
          <line key={`cf${i}`} x1="14" y1={y} x2="286" y2={y} {...p} strokeWidth="0.2" opacity="0.08" />
        ))}
        {/* "The racing begins in" label */}
        <line x1="24" y1="80" x2="160" y2="80" {...p} strokeWidth="0.75" opacity="0.35" />
        {/* 4 countdown boxes */}
        {[26, 84, 142, 200].map((x, i) => (
          <g key={`cb${i}`}>
            <path d={`M${x},92 L${x + 48},92 L${x + 48},130 L${x},130 Z`} {...p} strokeWidth="0.9" opacity="0.38" />
            {/* big number */}
            <path d={`M${x + 10},116 C${x + 14},110 ${x + 20},118 ${x + 28},113`} {...p} strokeWidth="2.8" opacity="0.35" />
            {/* unit label */}
            <line x1={x + 10} y1="124" x2={x + 36} y2="124" {...p} strokeWidth="0.55" opacity="0.25" />
          </g>
        ))}

        {/* ── BANNER CARD ── */}
        <path d="M14,158 L286,158 L286,215 L14,215 Z" {...p} strokeWidth="0.9" opacity="0.33" />
        {[168, 178, 188, 198, 208].map((y, i) => (
          <line key={`bc${i}`} x1="14" y1={y} x2="286" y2={y} {...p} strokeWidth="0.2" opacity="0.07" />
        ))}
        {/* "How to get here" label */}
        <line x1="24" y1="173" x2="130" y2="172" {...p} strokeWidth="0.8" opacity="0.35" />
        <line x1="24" y1="183" x2="90" y2="183" {...p} strokeWidth="0.55" opacity="0.25" />
        {/* CTA button */}
        <path d="M198,197 L272,197 L272,210 L198,210 Z" {...p} strokeWidth="0.9" opacity="0.38" />

        {/* ── JUST IN SECTION ── */}
        <line x1="14" y1="232" x2="68" y2="231" {...p} strokeWidth="0.75" opacity="0.38" />
        <line x1="222" y1="232" x2="284" y2="232" {...p} strokeWidth="0.55" opacity="0.28" />

        {/* Race card (LIVE badge + teams) */}
        <path d="M14,246 L286,246 L286,360 L14,360 Z" {...p} strokeWidth="0.9" opacity="0.33" />
        {/* LIVE badge */}
        <path d="M24,258 L62,258 L62,270 L24,270 Z" {...p} strokeWidth="0.8" opacity="0.42" />
        <line x1="28" y1="264" x2="58" y2="264" {...p} strokeWidth="0.6" opacity="0.4" />
        {/* Race name */}
        <line x1="24" y1="286" x2="200" y2="285" {...p} strokeWidth="1.5" opacity="0.38" />
        <line x1="24" y1="297" x2="130" y2="297" {...p} strokeWidth="0.7" opacity="0.28" />
        {/* Progress bar */}
        <path d="M24,314 L272,314" {...p} strokeWidth="5" opacity="0.12" />
        <path d="M24,314 L180,314" {...p} strokeWidth="5" opacity="0.28" />
        {/* Team names */}
        <line x1="24" y1="334" x2="90" y2="334" {...p} strokeWidth="1.2" opacity="0.38" />
        <line x1="200" y1="334" x2="272" y2="334" {...p} strokeWidth="1.2" opacity="0.38" />
        <line x1="24" y1="344" x2="70" y2="344" {...p} strokeWidth="0.55" opacity="0.25" />

        {/* ── BOTTOM NAV ── */}
        <path d="M14,558 Q150,556 286,559" {...p} strokeWidth="0.5" opacity="0.22" />
        {[37, 87, 150, 213, 263].map((cx, i) => (
          <g key={`nav${i}`}>
            <circle cx={cx} cy={582} r={10} {...p} strokeWidth="0.8" opacity={i === 0 ? 0.5 : 0.25} />
            {i === 0 && <circle cx={cx} cy={582} r={4} {...p} strokeWidth="0.7" opacity="0.4" />}
          </g>
        ))}

        <text x="150" y="544" textAnchor="middle"
          style={{ fontSize: '8px', fill: 'rgba(107,93,78,0.38)', letterSpacing: '0.12em', fontFamily: 'monospace' }}>
          rough sketch
        </text>
      </svg>
    </div>
  )
}

/* ─── FINAL UI SCREEN (real Regatta screenshot) ───── */
function FinalUIScreen() {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <img
        src="/design/regatta-home.jpg"
        alt="Henley Royal Regatta app"
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
