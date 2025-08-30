import { Shield, Activity, Zap, HeartPulse } from 'lucide-react'
import useCountUp from './useCountUp'

export default function Stats({ totals }) {
  const attacks = useCountUp(totals.attacks)
  const servers = useCountUp(totals.servers)
  const severe = useCountUp(totals.severe)
  const health = useCountUp(totals.health)

  const Card = ({ icon: Icon, label, value, color }) => (
    <div className="glass border rounded-xl p-5 bg-[#151520]/70 border-[#8b5cf6]/30 hover:scale-[1.02] transition-transform">
      <div className="flex items-center gap-3">
        <Icon className={`w-8 h-8 ${color}`} />
        <div>
          <p className="text-[#a0a9c0] text-sm">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card icon={Shield} label="Detected Attacks" value={attacks} color="text-[#00d4ff]" />
      <Card icon={Activity} label="Severe Events" value={severe} color="text-[#8b5cf6]" />
      <Card icon={Zap} label="Total Servers" value={servers} color="text-[#00ff88]" />
      <div className="relative">
        <Card icon={HeartPulse} label="System Health" value={`${health}%`} color="text-[#ff6b35]" />
        <span className="absolute -right-2 -top-2 px-2 py-1 text-xs rounded-md bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] shadow-[0_0_12px_rgba(0,255,136,0.3)]">Stable</span>
      </div>
    </div>
  )
}
