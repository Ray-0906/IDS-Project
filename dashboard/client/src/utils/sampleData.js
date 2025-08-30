// Example data for servers, logs, and metrics
export const servers = [
  {
    id: 'srv-1',
    name: 'Edge Gateway - EU West',
    ip: '10.12.23.45',
    status: 'online',
    uptimeDays: 143,
    protection: 'Active',
    health: 96,
  apiKey: 'AK-EUWEST-1a2b3c4d5e6f7g8h',
    miniThreat: [12, 22, 8, 16, 9, 3, 14],
  },
  {
    id: 'srv-2',
    name: 'Core API - US Central',
    ip: '10.2.3.187',
    status: 'warning',
    uptimeDays: 89,
    protection: 'Active',
    health: 82,
  apiKey: 'AK-USCEN-9z8y7x6w5v4u3t2s',
    miniThreat: [18, 5, 11, 22, 17, 26, 12],
  },
  {
    id: 'srv-3',
    name: 'Analytics Node - APAC',
    ip: '10.42.18.9',
    status: 'offline',
    uptimeDays: 0,
    protection: 'Maintenance',
    health: 0,
  apiKey: 'AK-APAC-0p9o8i7u6y5t4r3e',
    miniThreat: [0, 0, 0, 0, 0, 0, 0],
  },
]

export const attackTypes = ['DDoS', 'SQL Injection', 'XSS', 'Bruteforce', 'Ransomware', 'Port Scan']
export const severities = ['low', 'medium', 'high', 'critical']

// Generate sample logs
const now = Date.now()
export const logs = Array.from({ length: 180 }).map((_, i) => {
  const ts = new Date(now - Math.random() * 1000 * 60 * 60 * 24 * 14) // last 14 days
  const severity = severities[Math.floor(Math.random() * severities.length)]
  const type = attackTypes[Math.floor(Math.random() * attackTypes.length)]
  const server = servers[Math.floor(Math.random() * servers.length)]
  return {
    id: `log-${i}`,
    timestamp: ts.toISOString(),
    type,
    severity,
    serverId: server.id,
    sourceIp: `192.168.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`,
    message: `${type} attempt detected on ${server.name}`,
  }
})

// Time-series sample data for chart
export const makeSeries = (days = 7) => {
  const series = []
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now - i * 24 * 60 * 60 * 1000)
    series.push({
      date: date.toISOString().slice(0, 10),
      attacks: Math.floor(Math.random() * 50) + (i % 3 === 0 ? 30 : 10),
      severe: Math.floor(Math.random() * 10) + (i % 2 === 0 ? 5 : 1),
    })
  }
  return series
}
