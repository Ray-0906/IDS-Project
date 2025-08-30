import { Bell, Shield } from 'lucide-react'

export default function HeaderBar({ onToggleAlerts }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-[#151520]/70 border border-white/10">
          <Shield className="w-6 h-6 text-[#00ff88]" />
        </div>
        <div>
          <h1 className="text-white text-xl font-semibold">IDS Security Dashboard</h1>
          <p className="text-[#a0a9c0] text-xs">Real-time intrusion detection and response</p>
        </div>
      </div>
      <button onClick={onToggleAlerts} className="relative ripple-effect px-3 py-2 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/20">
        <Bell className="w-5 h-5" />
        <span className="absolute -right-2 -top-2 text-[10px] px-1.5 py-0.5 rounded bg-[#ff6b35] text-white">Live</span>
      </button>
    </header>
  )
}
