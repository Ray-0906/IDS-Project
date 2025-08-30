import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollAnimatedSection from '../ScrollAnimatedSection'
import GlassMorphCard from '../GlassMorphCard'
import MagneticButton from '../MagneticButton'
import { Shield, AlertTriangle, Eye, Play, Zap } from 'lucide-react'

function LiveDemo() {
  const [attacksBlocked, setAttacksBlocked] = useState(1247)
  const [currentThreat, setCurrentThreat] = useState(null)
  const [isSimulating, setIsSimulating] = useState(false)
  const [attackLog, setAttackLog] = useState([
    { id: 1, type: 'SQL Injection', ip: '192.168.1.100', time: '14:23:45', status: 'blocked', severity: 'high' },
    { id: 2, type: 'XSS Attempt', ip: '10.0.0.15', time: '14:23:12', status: 'blocked', severity: 'medium' },
    { id: 3, type: 'Brute Force', ip: '172.16.0.8', time: '14:22:58', status: 'blocked', severity: 'high' }
  ])

  const threatTypes = [
    { name: 'SQL Injection', severity: 'high' },
    { name: 'XSS Attempt', severity: 'medium' },
    { name: 'Brute Force', severity: 'high' },
    { name: 'Directory Traversal', severity: 'medium' },
    { name: 'RCE Attempt', severity: 'critical' }
  ]
  
  const ipAddresses = ['192.168.1.', '10.0.0.', '172.16.0.', '203.0.113.', '198.51.100.']

  useEffect(() => {
    const interval = setInterval(() => {
      const randomThreat = threatTypes[Math.floor(Math.random() * threatTypes.length)]
      const randomIP = ipAddresses[Math.floor(Math.random() * ipAddresses.length)] + Math.floor(Math.random() * 255)
      const now = new Date()
      const timeString = now.toTimeString().split(' ')[0]

      const newAttack = {
        id: Date.now(),
        type: randomThreat.name,
        ip: randomIP,
        time: timeString,
        status: 'blocked',
        severity: randomThreat.severity
      }

      setCurrentThreat(newAttack)
      setAttacksBlocked(prev => prev + 1)
      
      setTimeout(() => {
        setAttackLog(prev => [newAttack, ...prev.slice(0, 4)])
        setCurrentThreat(null)
      }, 1500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const simulateAttack = () => {
    setIsSimulating(true)
    const attackType = { name: 'Simulated Attack', severity: 'high' }
    const attackIP = '127.0.0.1'
    const now = new Date()
    const timeString = now.toTimeString().split(' ')[0]

    const simulatedAttack = {
      id: Date.now(),
      type: attackType.name,
      ip: attackIP,
      time: timeString,
      status: 'blocked',
      severity: attackType.severity
    }

    setCurrentThreat(simulatedAttack)
    setAttacksBlocked(prev => prev + 1)
    
    setTimeout(() => {
      setAttackLog(prev => [simulatedAttack, ...prev.slice(0, 4)])
      setCurrentThreat(null)
      setIsSimulating(false)
    }, 2000)
  }

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'bg-red-500 text-white border-red-600'
      case 'high': return 'bg-orange-500 text-white border-orange-600'
      case 'medium': return 'bg-yellow-500 text-black border-yellow-600'
      case 'low': return 'bg-green-500 text-white border-green-600'
      default: return 'bg-gray-500 text-white border-gray-600'
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-green-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-green-950/20 border-t border-gray-200/30 dark:border-gray-800/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollAnimatedSection animation="fadeInUp" className="text-center space-y-8 mb-20">
          <motion.h2 
            className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            See It In{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
              Action
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Watch our AI-powered system block real-time attacks with millisecond precision
          </motion.p>
        </ScrollAnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Enhanced Live Dashboard */}
          <ScrollAnimatedSection animation="fadeInLeft">
            <GlassMorphCard className="overflow-hidden shadow-2xl" glowOnHover>
              {/* Dashboard Header */}
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Live IDS Dashboard</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium">Live Protection</span>
                  </div>
                </div>
              </motion.div>

              <div className="p-8 space-y-8 bg-white/50 dark:bg-gray-800/50">
                {/* Enhanced Threat Counter */}
                <GlassMorphCard className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-900/20 dark:to-blue-900/20 border border-green-300/30 dark:border-green-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <motion.div 
                        className="text-4xl font-black text-gray-900 dark:text-white"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {attacksBlocked.toLocaleString()}
                      </motion.div>
                      <div className="text-lg font-semibold text-gray-600 dark:text-gray-400">Threats Blocked Today</div>
                    </div>
                    <motion.div 
                      className="text-5xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🛡️
                    </motion.div>
                  </div>
                </GlassMorphCard>

                {/* Current Threat Alert */}
                <AnimatePresence>
                  {currentThreat && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GlassMorphCard className="p-6 bg-red-500/10 dark:bg-red-900/20 border border-red-300/30 dark:border-red-700/30">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="font-bold text-red-700 dark:text-red-300">THREAT DETECTED</span>
                              <span className={`px-2 py-1 rounded text-xs font-bold ${getSeverityColor(currentThreat.severity)}`}>
                                {currentThreat.severity.toUpperCase()}
                              </span>
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                              {currentThreat.type} from {currentThreat.ip}
                            </div>
                          </div>
                          <motion.div 
                            className="text-green-500 font-bold"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                          >
                            ✅ BLOCKED
                          </motion.div>
                        </div>
                      </GlassMorphCard>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Enhanced Attack Log */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Recent Threats</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <AnimatePresence>
                      {attackLog.map((attack, index) => (
                        <motion.div
                          key={attack.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <GlassMorphCard className="p-4 bg-white/50 dark:bg-gray-700/50">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full ${
                                  attack.severity === 'critical' ? 'bg-red-500' :
                                  attack.severity === 'high' ? 'bg-orange-500' :
                                  attack.severity === 'medium' ? 'bg-yellow-500' :
                                  'bg-green-500'
                                } animate-pulse`} />
                                <div>
                                  <div className="font-medium text-gray-800 dark:text-gray-200">{attack.type}</div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">{attack.ip}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-green-600 dark:text-green-400 font-semibold">BLOCKED</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{attack.time}</div>
                              </div>
                            </div>
                          </GlassMorphCard>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* System Status */}
                <GlassMorphCard className="p-4 bg-green-500/10 dark:bg-green-900/20 border border-green-300/30 dark:border-green-700/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <span className="font-semibold text-green-700 dark:text-green-300">All Systems Operational</span>
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400">Response Time: &lt;85ms</div>
                  </div>
                </GlassMorphCard>
              </div>
            </GlassMorphCard>
          </ScrollAnimatedSection>

          {/* Enhanced Demo Controls */}
          <ScrollAnimatedSection animation="fadeInRight" className="space-y-8">
            <GlassMorphCard className="p-8" glowOnHover>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Interactive Demo
              </h3>
              
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  This is a live demonstration of our IDS system. The dashboard shows real-time 
                  threat detection and blocking. Click the button below to simulate an attack 
                  and see how quickly our system responds.
                </p>

                <MagneticButton
                  onClick={simulateAttack}
                  disabled={isSimulating}
                  className={`w-full py-4 text-lg font-bold rounded-2xl transition-all duration-300 ${
                    isSimulating
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    {isSimulating ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <AlertTriangle className="w-5 h-5" />
                        </motion.div>
                        <span>Simulating Attack...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Simulate Attack</span>
                      </>
                    )}
                  </div>
                </MagneticButton>

                {/* Demo Features */}
                <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">What you're seeing:</h4>
                  
                  {[
                    { icon: '🎯', title: 'Real-time Detection', desc: 'Threats identified in <85ms' },
                    { icon: '🛡️', title: 'Automatic Blocking', desc: 'Instant threat neutralization' },
                    { icon: '📊', title: 'Live Analytics', desc: 'Comprehensive attack logging' },
                    { icon: '⚡', title: 'Zero Latency', desc: 'No impact on performance' }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-gray-200">{feature.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassMorphCard>

            {/* Performance Metrics */}
            <GlassMorphCard className="p-6">
              <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Performance Metrics</h4>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Detection Rate', value: '99.8%', color: 'green' },
                  { label: 'Response Time', value: '<85ms', color: 'blue' },
                  { label: 'False Positives', value: '0.02%', color: 'yellow' },
                  { label: 'Uptime', value: '99.99%', color: 'purple' }
                ].map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-2xl font-black ${
                      metric.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      metric.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      metric.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                      'text-purple-600 dark:text-purple-400'
                    }`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </GlassMorphCard>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default LiveDemo
