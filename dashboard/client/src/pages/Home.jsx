import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import GlassMorphCard from '../components/GlassMorphCard'
import MagneticButton from '../components/MagneticButton'
import ScrollAnimatedSection from '../components/ScrollAnimatedSection'
import { Shield, Activity, AlertTriangle, Users } from 'lucide-react'

function Home() {
  const [stats, setStats] = useState({
    threatsBlocked: 1247,
    activeConnections: 42,
    uptime: 99.8,
    alertsToday: 3
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 3),
        activeConnections: 38 + Math.floor(Math.random() * 10),
        alertsToday: prev.alertsToday + (Math.random() > 0.9 ? 1 : 0)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const dashboardCards = [
    {
      title: 'Threats Blocked',
      value: stats.threatsBlocked.toLocaleString(),
      change: '+23 this hour',
      color: 'green',
      icon: Shield,
      trend: 'up'
    },
    {
      title: 'Active Connections',
      value: stats.activeConnections,
      change: 'Real-time',
      color: 'blue',
      icon: Activity,
      trend: 'stable'
    },
    {
      title: 'System Uptime',
      value: `${stats.uptime}%`,
      change: 'Last 30 days',
      color: 'emerald',
      icon: Users,
      trend: 'up'
    },
    {
      title: 'Critical Alerts',
      value: stats.alertsToday,
      change: 'Today',
      color: stats.alertsToday > 5 ? 'red' : 'yellow',
      icon: AlertTriangle,
      trend: stats.alertsToday > 5 ? 'up' : 'down'
    }
  ]

  const recentThreats = [
    { id: 1, type: 'SQL Injection', ip: '192.168.1.100', time: '2 min ago', severity: 'high' },
    { id: 2, type: 'XSS Attempt', ip: '10.0.0.15', time: '5 min ago', severity: 'medium' },
    { id: 3, type: 'Brute Force', ip: '172.16.0.8', time: '12 min ago', severity: 'high' },
    { id: 4, type: 'Directory Traversal', ip: '203.0.113.42', time: '18 min ago', severity: 'low' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <ScrollAnimatedSection animation="fadeInDown">
          <div className="flex items-center justify-between">
            <div>
              <motion.h1 
                className="text-4xl font-black text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Security Dashboard
              </motion.h1>
              <motion.p 
                className="text-gray-600 dark:text-gray-400 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Real-time threat monitoring and system status
              </motion.p>
            </div>
            
            <MagneticButton variant="primary" glow>
              Generate Report
            </MagneticButton>
          </div>
        </ScrollAnimatedSection>

        {/* Stats Grid */}
        <ScrollAnimatedSection animation="fadeInUp" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <GlassMorphCard 
                  className="p-6 h-full group cursor-pointer" 
                  hover3D 
                  glowOnHover
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${card.color}-100 dark:bg-${card.color}-900/30`}>
                      <card.icon className={`w-6 h-6 text-${card.color}-600 dark:text-${card.color}-400`} />
                    </div>
                    <motion.div
                      className={`text-xs px-2 py-1 rounded-full ${
                        card.trend === 'up' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                          : card.trend === 'down'
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      }`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index }}
                    >
                      {card.trend === 'up' ? '↗' : card.trend === 'down' ? '↘' : '→'} {card.change}
                    </motion.div>
                  </div>
                  
                  <div>
                    <motion.div 
                      className="text-3xl font-black text-gray-900 dark:text-white mb-1"
                      animate={{ 
                        scale: card.title === 'Threats Blocked' ? [1, 1.02, 1] : 1 
                      }}
                      transition={{ 
                        duration: 1, 
                        repeat: card.title === 'Threats Blocked' ? Infinity : 0 
                      }}
                    >
                      {card.value}
                    </motion.div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {card.title}
                    </div>
                  </div>
                </GlassMorphCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Threat Activity Chart */}
          <ScrollAnimatedSection animation="fadeInLeft" className="lg:col-span-2">
            <GlassMorphCard className="p-8" glowOnHover>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Threat Activity (Last 24 Hours)
                </h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Live Data</span>
                </div>
              </div>
              
              {/* Chart */}
              <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex items-end space-x-2">
                {[...Array(24)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t flex-1"
                    initial={{ height: '10%' }}
                    animate={{ 
                      height: `${Math.random() * 80 + 20}%`,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </GlassMorphCard>
          </ScrollAnimatedSection>

          {/* Recent Threats */}
          <ScrollAnimatedSection animation="fadeInRight">
            <GlassMorphCard className="p-8" glowOnHover>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Recent Threats
              </h3>
              
              <div className="space-y-4">
                {recentThreats.map((threat, index) => (
                  <motion.div
                    key={threat.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        threat.severity === 'high' ? 'bg-red-500' :
                        threat.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white text-sm">
                          {threat.type}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {threat.ip}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {threat.time}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <MagneticButton variant="ghost" size="sm" className="w-full mt-4">
                View All Threats
              </MagneticButton>
            </GlassMorphCard>
          </ScrollAnimatedSection>
        </div>

        {/* System Status */}
        <ScrollAnimatedSection animation="fadeInUp" delay={0.4}>
          <GlassMorphCard className="p-8" magnetic glowOnHover>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-4 h-4 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">System Status: Operational</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All systems running normally • Last updated: just now
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">99.8%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">42ms</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Latency</div>
                </div>
              </div>
            </div>
          </GlassMorphCard>
        </ScrollAnimatedSection>
      </div>
    </div>
  )
}

export default Home
