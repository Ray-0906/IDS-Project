import { useMemo, useState } from 'react'

const severityColors = {
  low: 'text-[#00ff88] border-[#00ff88]/30 bg-[#00ff88]/5',
  medium: 'text-[#00d4ff] border-[#00d4ff]/30 bg-[#00d4ff]/5',
  high: 'text-[#ffb703] border-[#ffb703]/30 bg-[#ffb703]/5',
  critical: 'text-[#ef4444] border-[#ef4444]/30 bg-[#ef4444]/5',
}

export default function LogsTable({ logs, servers = [], activeServerId, onServerChange, attackTypes = [] }) {
  const [query, setQuery] = useState('')
  const [sev, setSev] = useState('all')
  const [srv, setSrv] = useState(activeServerId || 'all')
  const [atype, setAtype] = useState('all')
  const [page, setPage] = useState(1)
  const pageSize = 8

  const filtered = useMemo(() => {
    let result = logs
    if (srv !== 'all') result = result.filter(l => l.serverId === srv)
    if (sev !== 'all') result = result.filter(l => l.severity === sev)
    if (atype !== 'all') result = result.filter(l => l.type === atype)
    if (query) {
      const q = query.toLowerCase()
      result = result.filter(l => l.type.toLowerCase().includes(q) || l.message.toLowerCase().includes(q) || l.sourceIp.includes(q))
    }
    return result
  }, [logs, sev, query, srv, atype])

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const view = filtered.slice((page-1)*pageSize, page*pageSize)

  return (
    <div className="rounded-xl bg-[#151520]/60 border border-white/10 p-4">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <input value={query} onChange={e=>{setPage(1); setQuery(e.target.value)}} placeholder="Search logs..." className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#00d4ff]/50" />
        <select value={srv} onChange={e=>{setPage(1); setSrv(e.target.value); onServerChange?.(e.target.value)}} className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#00d4ff]/50">
          <option value="all">All servers</option>
          {servers.map(s => (<option key={s.id} value={s.id}>{s.name}</option>))}
        </select>
        <select value={atype} onChange={e=>{setPage(1); setAtype(e.target.value)}} className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#00d4ff]/50">
          <option value="all">All types</option>
          {attackTypes.map(t => (<option key={t} value={t}>{t}</option>))}
        </select>
        <select value={sev} onChange={e=>{setPage(1); setSev(e.target.value)}} className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#00d4ff]/50">
          <option value="all">All severities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[#a0a9c0]">
              <th className="p-2">Timestamp</th>
              <th className="p-2">Type</th>
              <th className="p-2">Severity</th>
              <th className="p-2">Source IP</th>
              <th className="p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {view.map((l, idx) => (
              <tr key={l.id} className={`border-t border-white/5 hover:bg-white/5 transition-all ${idx%2?'bg-white/[0.02]':''}`}>
                <td className="p-2 text-white/90">{new Date(l.timestamp).toLocaleString()}</td>
                <td className="p-2 text-white/90">{l.type}</td>
                <td className="p-2"><span className={`px-2 py-1 rounded-md border text-xs ${severityColors[l.severity]}`}>{l.severity}</span></td>
                <td className="p-2 text-white/80">{l.sourceIp}</td>
                <td className="p-2 text-white/70">{l.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-3 text-sm">
        <p className="text-[#a0a9c0]">Page {page} / {pages}</p>
        <div className="flex gap-2">
          <button disabled={page<=1} onClick={()=>setPage(p=>p-1)} className="px-3 py-1 rounded-md border border-white/10 text-white/80 disabled:opacity-40">Prev</button>
          <button disabled={page>=pages} onClick={()=>setPage(p=>p+1)} className="px-3 py-1 rounded-md border border-white/10 text-white/80 disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  )
}
