import { motion } from 'framer-motion'

const options = ['Day', 'Week', 'Month']

export default function TimelinePicker({ value, onChange }) {
  return (
    <div className="relative inline-flex bg-[#151520]/60 border border-white/10 rounded-lg p-1">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt.toLowerCase())}
          className={`relative z-10 px-4 py-1.5 text-sm rounded-md ${value===opt.toLowerCase()?'text-white':'text-[#a0a9c0]'}`}
        >
          {opt}
          {value===opt.toLowerCase() && (
            <motion.span layoutId="timelineActive" className="absolute inset-0 -z-10 rounded-md bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00d4ff]/30" />
          )}
        </button>
      ))}
    </div>
  )
}
