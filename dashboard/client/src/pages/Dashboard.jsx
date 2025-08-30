import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import ParticleBackground from '../components/dashboard/ParticleBackground'
import Stats from '../components/dashboard/Stats'
import TimelinePicker from '../components/dashboard/TimelinePicker'
import Graph from '../components/dashboard/Graph'
import ServerProfileCard from '../components/dashboard/ServerProfileCard'
import LogsTable from '../components/dashboard/LogsTable'
import AddServerModal from '../components/dashboard/AddServerModal'
import { makeSeries, servers as sampleServers, logs as sampleLogs } from '../utils/sampleData'
import { motion } from 'framer-motion'



function Dashboard() {
  const { user, logout } = useAuth()
  const [timeline, setTimeline] = useState('week') // day | week | month
  const [series, setSeries] = useState(makeSeries(7))
  const [activeServerId, setActiveServerId] = useState(sampleServers[0]?.id)
  const [servers, setServers] = useState(sampleServers)
  const [logs, setLogs] = useState(sampleLogs)
  const [openAdd, setOpenAdd] = useState(false)

  useEffect(() => {
    if (timeline === 'day') setSeries(makeSeries(7))
    if (timeline === 'week') setSeries(makeSeries(7))
    if (timeline === 'month') setSeries(makeSeries(30))
  }, [timeline])

  // Notifications removed for a cleaner professional layout

  const activeServer = useMemo(() => servers.find(s => s.id === activeServerId), [servers, activeServerId])
  const totals = useMemo(() => ({
    attacks: logs.length,
    servers: servers.length,
    severe: logs.filter(l => ['high','critical'].includes(l.severity)).length,
    health: Math.round(servers.reduce((acc, s) => acc + (s.health || 0), 0) / Math.max(1, servers.length)),
  }), [logs, servers])

  const handleAddServer = (data) => {
    const newServer = {
      id: `srv-${servers.length+1}`,
      name: data.name,
      ip: data.ip,
      status: 'online',
      uptimeDays: 0,
      protection: 'Active',
      health: 100,
      miniThreat: [4,8,3,10,6,9,7],
    }
    setServers(prev => [newServer, ...prev])
    setActiveServerId(newServer.id)
    setOpenAdd(false)
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
  
      <ParticleBackground density={12} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
    <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-white text-2xl font-semibold">IDS Security Dashboard</h1>
      <p className="text-[#a0a9c0] text-sm">Welcome back, {user?.name || user?.fullName || 'Analyst'}</p>
          </div>
          <button onClick={logout} className="px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20">Logout</button>
        </div>

  {/* Controls: Server selector, Add, Timeline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <label className="text-[#a0a9c0] text-sm">Server</label>
            <select
              value={activeServerId}
              onChange={(e)=>setActiveServerId(e.target.value)}
              className="px-3 py-2 rounded-md bg-[#151520]/70 border border-white/10 text-white outline-none focus:border-[#00d4ff]/50"
            >
              {servers.map(s => (<option key={s.id} value={s.id}>{s.name}</option>))}
            </select>
            <button onClick={()=>setOpenAdd(true)} className="px-3 py-2 rounded-md bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] hover:bg-[#00ff88]/20">Add Server</button>
          </div>
          <TimelinePicker value={timeline} onChange={setTimeline} />
        </div>

        {/* Stats */}
        <div className="mb-6">
          <Stats totals={totals} />
        </div>

        {/* Chart + Profile */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-center mb-6">
          <div className="xl:col-span-2 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium">Attacks over time</h3>
            </div>
            <div className="overflow-hidden rounded-xl">
              <Graph data={series} height={280} />
            </div>
          </div>
          <ServerProfileCard server={activeServer} />
        </div>

        {/* Logs */}
        <div>
          <h3 className="text-white font-medium mb-3">Recent Activity</h3>
          <LogsTable
            logs={logs}
            servers={servers}
            activeServerId={activeServerId}
            onServerChange={setActiveServerId}
            attackTypes={[...new Set(logs.map(l=>l.type))]}
          />
        </div>
      </div>

      {/* Modal */}
      <AddServerModal open={openAdd} onClose={()=>setOpenAdd(false)} onSubmit={handleAddServer} />
    </div>
  )
}

export default Dashboard
