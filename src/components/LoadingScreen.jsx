import { useState, useEffect } from 'react'

const TEXT = "Hey, I am Vyshnav Ajith"

export default function LoadingScreen({ onComplete }) {
  const [displayed, setDisplayed] = useState('')
  const [fading,    setFading]    = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(TEXT.slice(0, i))
      if (i >= TEXT.length) {
        clearInterval(timer)
        setTimeout(() => {
          setFading(true)
          setTimeout(onComplete, 750)
        }, 1100)
      }
    }, 62)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className={`loading-screen${fading ? ' loading-screen--out' : ''}`}>
      <p className="loading-text">
        {displayed}
        <span className="loading-cursor">|</span>
      </p>
    </div>
  )
}
