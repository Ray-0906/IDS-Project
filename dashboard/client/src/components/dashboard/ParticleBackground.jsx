import { useEffect, useMemo, useRef } from 'react'
import Galaxy from '../ui/AnimatedBG'




// Minimal particle background with binary/hex orbs
export default function ParticleBackground({ density = 24 }) {
  const containerRef = useRef(null)
//   const particles = useMemo(() => {
//     const chars = ['0','1','A','C','E','F','7','9','🛡️']
//     return Array.from({ length: density }).map((_, i) => ({
//       id: i,
//       char: chars[Math.floor(Math.random() * chars.length)],
//       left: Math.random() * 100,
//       top: Math.random() * 100,
//       size: Math.random() * 10 + 10,
//       duration: Math.random() * 8 + 6,
//       delay: Math.random() * 6,
//       opacity: Math.random() * 0.3 + 0.1,
//     }))
//   }, [density])

  useEffect(() => {
    // no-op, CSS animations handle motion
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* {
      particles.map(p => (
        <span
          key={p.id}
          className="select-none absolute animate-floatSlow will-change-transform"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.4))',
          }}
        >{p.char}</span>
      ))
    }
    */}
   <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={1.0}
    glowIntensity={0.1}
    saturation={0.2}
    hueShift={170}
  />


    </div>
  )
}
