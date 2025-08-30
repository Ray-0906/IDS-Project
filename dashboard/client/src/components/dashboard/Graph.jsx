import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

function buildPath(data, width, height, pad) {
  if (!data?.length) return ''
  const xs = data.map((_, i) => i)
  const ys = data.map(d => d.attacks)
  const maxY = Math.max(...ys, 1)
  const stepX = (width - pad.left - pad.right) / Math.max(1, xs.length - 1)
  const scaleY = (v) => (height - pad.bottom - (v / maxY) * (height - pad.top - pad.bottom))
  let d = ''
  xs.forEach((x, i) => {
    const px = pad.left + x * stepX
    const py = scaleY(ys[i])
    d += i===0 ? `M ${px} ${py}` : ` L ${px} ${py}`
  })
  return d
}

function niceTicks(max, count = 5) {
  if (max <= 0) return [0]
  const raw = max / count
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const norm = raw / mag
  let step
  if (norm < 1.5) step = 1 * mag
  else if (norm < 3) step = 2 * mag
  else if (norm < 7) step = 5 * mag
  else step = 10 * mag
  const out = []
  for (let v = 0; v <= max + 1e-6; v += step) out.push(Math.round(v))
  if (out[out.length-1] < max) out.push(Math.round(max))
  return out
}

export default function Graph({ data, height=280 }) {
  const containerRef = useRef(null)
  const [width, setWidth] = useState(800)
  const pad = { top: 16, right: 16, bottom: 32, left: 52 }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setWidth(el.clientWidth || 800)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const path = useMemo(() => buildPath(data, width, height, pad), [data, width, height])
  const stats = useMemo(() => {
    const ys = (data || []).map(d => d.attacks)
    const maxY = Math.max(0, ...ys)
    const yTicks = niceTicks(maxY || 1, 4)
    const xCount = data?.length || 0
    const xIdxs = []
    const desired = Math.min(6, Math.max(2, Math.floor(width / 140)))
    for (let i = 0; i < desired; i++) {
      const idx = Math.round(i * (Math.max(1, xCount - 1)) / (desired - 1))
      if (!xIdxs.includes(idx)) xIdxs.push(idx)
    }
    return { maxY, yTicks, xIdxs }
  }, [data, width])
  const gradientId = 'gradLine'
  return (
    <div ref={containerRef} className="w-full">
    <svg width={width} height={height} className="rounded-xl bg-[#151520]/60 border border-white/10">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,212,255,0.25)" />
          <stop offset="100%" stopColor="rgba(0,212,255,0.0)" />
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      {/* axes */}
      <line x1={pad.left} x2={pad.left} y1={pad.top} y2={height - pad.bottom} stroke="rgba(255,255,255,0.2)" />
      <line x1={pad.left} x2={width - pad.right} y1={height - pad.bottom} y2={height - pad.bottom} stroke="rgba(255,255,255,0.2)" />

      {/* y-grid + labels */}
      {stats.yTicks.map((t, i) => {
        const y = height - pad.bottom - (t / Math.max(1, stats.maxY)) * (height - pad.top - pad.bottom)
        return (
          <g key={`y-${i}`}>
            <line x1={pad.left} x2={width - pad.right} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
            <text x={pad.left - 8} y={y} textAnchor="end" dominantBaseline="middle" fill="rgba(255,255,255,0.6)" fontSize="11">{t}</text>
          </g>
        )
      })}

      {/* x labels */}
      {data && data.length > 0 && stats.xIdxs.map((idx, i) => {
        const x = pad.left + idx * ((width - pad.left - pad.right) / Math.max(1, data.length - 1))

            {/* attack type markers (if provided) */}
            {Array.isArray(data) && data.length > 0 && data[0].type && data.map((d, i) => {
              const x = pad.left + i * ((width - pad.left - pad.right) / Math.max(1, data.length - 1))
              const maxY = Math.max(...data.map(v => v.attacks), 1)
              const y = height - pad.bottom - (d.attacks / maxY) * (height - pad.top - pad.bottom)
              const map = {
                'DDoS': { shape: 'circle', color: '#00d4ff' },
                'SQL Injection': { shape: 'triangle', color: '#ff6b35' },
                'XSS': { shape: 'square', color: '#8b5cf6' },
                'Bruteforce': { shape: 'diamond', color: '#00ff88' },
                'Ransomware': { shape: 'hex', color: '#ffd166' },
                'Port Scan': { shape: 'circle', color: '#60a5fa' },
              }
              const m = map[d.type] || { shape: 'circle', color: '#00d4ff' }
              const size = 5
              if (m.shape === 'circle') return <circle key={i} cx={x} cy={y} r={size} fill={m.color} />
              if (m.shape === 'square') return <rect key={i} x={x-size} y={y-size} width={size*2} height={size*2} fill={m.color} />
              if (m.shape === 'triangle') return <path key={i} d={`M ${x} ${y-size} L ${x-size} ${y+size} L ${x+size} ${y+size} Z`} fill={m.color} />
              if (m.shape === 'diamond') return <path key={i} d={`M ${x} ${y-size} L ${x-size} ${y} L ${x} ${y+size} L ${x+size} ${y} Z`} fill={m.color} />
              if (m.shape === 'hex') return <path key={i} d={`M ${x-size} ${y} L ${x-size/2} ${y-size} L ${x+size/2} ${y-size} L ${x+size} ${y} L ${x+size/2} ${y+size} L ${x-size/2} ${y+size} Z`} fill={m.color} />
              return null
            })}
        const label = (data[idx]?.date || '').slice(5)
        return (
          <text key={`x-${i}`} x={x} y={height - pad.bottom + 18} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">{label}</text>
        )
      })}
      {/* animated line */}
      <motion.path d={path} stroke={`url(#${gradientId})`} strokeWidth="2.5" fill="none" filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
      {/* area fill */}
  <motion.path d={`${path} L ${width - 16} ${height - pad.bottom} L ${pad.left} ${height - pad.bottom} Z`} fill="url(#areaGrad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
    </svg>
    </div>
  )
}
