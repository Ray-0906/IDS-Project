import { Server, WifiOff, AlertTriangle } from 'lucide-react'

const statusStyles = {
  online: 'text-[#00ff88] border-[#00ff88]/30',
  warning: 'text-[#ffb703] border-[#ffb703]/30',
  offline: 'text-[#ef4444] border-[#ef4444]/30',
}

export default function Sidebar({ items, activeId, onSelect, onAdd }) {
  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-white font-semibold">Servers</h2>
        <button onClick={onAdd} className="text-sm px-3 py-1 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/20">Add</button>
      </div>
      <div className="space-y-3">
        {items.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className={`w-full text-left rounded-xl p-4 border backdrop-blur-md transition-all hover:translate-y-[-1px] ${
              activeId === s.id
                ? 'bg-[#151520]/80 border-[#00d4ff]/40 shadow-[0_0_24px_rgba(0,212,255,0.25)]'
                : 'bg-[#151520]/50 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Server className={`w-5 h-5 ${statusStyles[s.status]}`} />
                <p className="text-white font-medium text-sm">{s.name}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded border ${statusStyles[s.status].split(' ').slice(-1)} ${statusStyles[s.status].split(' ')[0]} capitalize`}>
                {s.status}
              </span>
            </div>
            <p className="text-[#a0a9c0] text-xs mb-2">{s.ip}</p>
            {/* mini threat bar */}
            <div className="flex gap-1 items-end h-8">
              {s.miniThreat.map((v, i) => (
                <span key={i} className="flex-1 bg-gradient-to-t from-[#8b5cf6]/20 to-[#00d4ff]/50 rounded-t" style={{ height: `${Math.max(2, v)}%` }} />
              ))}
            </div>
          </button>
        ))}
      </div>
      <div className="mt-6 p-3 rounded-xl bg-[#151520]/50 border border-white/10 text-[#a0a9c0] text-sm flex gap-2">
        <WifiOff className="w-4 h-4 text-[#ef4444]" />
        Offline servers might reduce coverage.
      </div>
      <div className="p-3 rounded-xl bg-[#151520]/50 border border-white/10 text-[#a0a9c0] text-sm flex gap-2">
        <AlertTriangle className="w-4 h-4 text-[#ffb703]" />
        Configure alert routing in Settings.
      </div>
    </aside>
  )
}
