import { Cpu, Clock, ShieldCheck, Copy } from 'lucide-react'

export default function ServerProfileCard({ server }) {
  if (!server) return null
  return (
    <div className="relative rounded-xl p-5 border border-[#00d4ff]/30 bg-[#151520]/60 overflow-hidden mesh-bg">
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold">{server.name}</p>
          <p className="text-[#a0a9c0] text-sm">{server.ip}</p>
        </div>
        <span className="px-3 py-1 text-xs rounded-md bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88]">{server.protection}</span>
      </div>
      <div className="relative z-10 grid grid-cols-3 gap-4 mt-4 text-sm text-[#a0a9c0]">
        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#00d4ff]" />Uptime: <span className="text-white">{server.uptimeDays}d</span></div>
        <div className="flex items-center gap-2"><Cpu className="w-4 h-4 text-[#8b5cf6]" />Health: <span className="text-white">{server.health}%</span></div>
        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#00ff88]" />Status: <span className="capitalize text-white">{server.status}</span></div>
      </div>
      {/* API Key Section */}
        <div className="relative z-10 mt-4">
          <p className="text-[#a0a9c0] text-xs mb-2">Server Credentials</p>
          <div className="rounded-lg border border-white/10 bg-[#0b0f17]/80">
            {/* SERVER_ID row */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
              <code className="text-xs text-white/90 break-all">SERVER_ID={server.id}</code>
              <button
                aria-label="Copy SERVER_ID"
                onClick={() => navigator.clipboard?.writeText(server.id || '')}
                className="p-1.5 rounded-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
            {/* API_KEY row */}
            <div className="flex items-center justify-between px-3 py-2">
              <code className="text-xs text-white/90 break-all">API_KEY={server.apiKey || '—'}</code>
              <button
                aria-label="Copy API_KEY"
                onClick={() => navigator.clipboard?.writeText(server.apiKey || '')}
                className="p-1.5 rounded-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(600px 200px at 90% 10%, rgba(0,255,136,0.08), transparent)' }} />
    </div>
  )
}
