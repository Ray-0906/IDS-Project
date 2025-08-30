import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, AlertTriangle, Zap, Eye, Globe, Target, Activity } from 'lucide-react'
import ScrollAnimatedSection from '../ScrollAnimatedSection'
import GlassMorphCard from '../GlassMorphCard'
import MagneticButton from '../MagneticButton'
import FuzzyText from '../ui/FuzzyText'

function ProblemStatement() {
  const [attackCount, setAttackCount] = useState(847)
  const [activeAttacks, setActiveAttacks] = useState([])
  const [matrixChars, setMatrixChars] = useState([])

  useEffect(() => {
    // Matrix rain effect
    const chars = '01アカサタナハマヤラワンABCDEF'.split('')
    const newMatrixChars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2
    }))
    setMatrixChars(newMatrixChars)

    // Animate matrix characters
    const matrixInterval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        y: (char.y + char.speed) % 100,
        char: chars[Math.floor(Math.random() * chars.length)]
      })))
    }, 150)

    // Simulate attack counter
    const interval = setInterval(() => {
      setAttackCount(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 2000)

    // Simulate live attacks on map
    const attackInterval = setInterval(() => {
      const locations = [
        { country: 'Russia', flag: '🇷🇺', x: 70, y: 30, type: 'SQL Injection' },
        { country: 'China', flag: '🇨🇳', x: 75, y: 40, type: 'Brute Force' },
        { country: 'North Korea', flag: '🇰🇵', x: 78, y: 38, type: 'RCE Attempt' },
        { country: 'Iran', flag: '🇮🇷', x: 65, y: 42, type: 'XSS Attack' },
        { country: 'Brazil', flag: '🇧🇷', x: 35, y: 70, type: 'DDoS' },
        { country: 'Romania', flag: '🇷🇴', x: 58, y: 28, type: 'Phishing' }
      ]
      
      const randomLocation = locations[Math.floor(Math.random() * locations.length)]
      const newAttack = {
        id: Date.now(),
        ...randomLocation,
        timestamp: new Date().toLocaleTimeString(),
        severity: ['Critical', 'High', 'Medium'][Math.floor(Math.random() * 3)]
      }
      
      setActiveAttacks(prev => [...prev.slice(-8), newAttack])
    }, 1500)

    return () => {
      clearInterval(interval)
      clearInterval(attackInterval)
      clearInterval(matrixInterval)
    }
  }, [])

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Critical': return 'text-red-400 border-red-500/50 bg-red-500/10'
      case 'High': return 'text-orange-400 border-orange-500/50 bg-orange-500/10'
      case 'Medium': return 'text-yellow-400 border-yellow-500/50 bg-yellow-500/10'
      default: return 'text-gray-400 border-gray-500/50 bg-gray-500/10'
    }
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 opacity-10">
        {matrixChars.map(char => (
          <motion.div
            key={char.id}
            className="absolute text-green-400 font-mono text-sm"
            style={{ 
              left: `${char.x}%`, 
              top: `${char.y}%`,
              opacity: char.opacity 
            }}
            animate={{
              y: [`${char.y}%`, `${(char.y + 10) % 100}%`]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {char.char}
          </motion.div>
        ))}
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Glitch Effect */}
        <ScrollAnimatedSection animation="fadeInDown" className="text-center space-y-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           <div className='justify-center mx-auto'>
            <FuzzyText fontSize='4rem' color='red' className='text-center'>CYBER WARFARE</FuzzyText>
           </div>
               
           
            <motion.h3 
              className="text-2xl lg:text-3xl text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Your Servers Are Under{' '}
              <motion.span 
                className="text-red-400 font-bold"
                animate={{ 
                  color: ['#f87171', '#ef4444', '#dc2626', '#f87171'],
                  textShadow: [
                    '0 0 5px rgba(239, 68, 68, 0.3)',
                    '0 0 15px rgba(239, 68, 68, 0.6)',
                    '0 0 5px rgba(239, 68, 68, 0.3)'
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                CONSTANT SIEGE
              </motion.span>
            </motion.h3>
          </motion.div>
          
          {/* Enhanced Attack Counter */}
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12">
            <GlassMorphCard className="p-8 bg-gradient-to-br from-red-900/30 to-red-700/20 border border-red-500/30" hover3D glowOnHover>
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Target className="w-8 h-8 text-red-400" />
                </motion.div>
                <div>
                  <motion.div 
                    className="text-5xl font-black text-red-400"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        '0 0 10px rgba(248, 113, 113, 0.5)',
                        '0 0 20px rgba(248, 113, 113, 0.8)',
                        '0 0 10px rgba(248, 113, 113, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {attackCount.toLocaleString()}
                  </motion.div>
                  <div className="text-sm text-red-300 font-medium">ATTACKS DETECTED</div>
                </div>
              </div>
            </GlassMorphCard>
            
            <motion.div 
              className="text-4xl text-cyan-400"
              animate={{ 
                x: [0, 15, 0],
                textShadow: [
                  '0 0 10px rgba(34, 211, 238, 0.5)',
                  '0 0 20px rgba(34, 211, 238, 0.8)',
                  '0 0 10px rgba(34, 211, 238, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⟩⟩⟩
            </motion.div>
            
            <GlassMorphCard className="p-8 bg-gradient-to-br from-orange-900/30 to-yellow-700/20 border border-orange-500/30" hover3D glowOnHover>
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Activity className="w-8 h-8 text-orange-400" />
                </motion.div>
                <div>
                  <motion.div 
                    className="text-5xl font-black text-orange-400"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        '0 0 10px rgba(251, 146, 60, 0.5)',
                        '0 0 20px rgba(251, 146, 60, 0.8)',
                        '0 0 10px rgba(251, 146, 60, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    1
                  </motion.div>
                  <div className="text-sm text-orange-300 font-medium">EVERY 2 SECONDS</div>
                </div>
              </div>
            </GlassMorphCard>
          </div>
        </ScrollAnimatedSection>

        <div className="grid xl:grid-cols-2 gap-16 items-start">
          
          {/* Enhanced Cyber Attack Dashboard */}
          <ScrollAnimatedSection animation="fadeInLeft" className="space-y-8">
            <GlassMorphCard className="p-8 bg-gradient-to-br from-slate-900/50 to-gray-800/30 border border-cyan-500/20" glowOnHover hover3D>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">THREAT RADAR</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [1, 0.3, 1],
                      boxShadow: [
                        '0 0 5px rgba(239, 68, 68, 0.5)',
                        '0 0 15px rgba(239, 68, 68, 0.8)',
                        '0 0 5px rgba(239, 68, 68, 0.5)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-sm text-red-400 font-mono font-bold">LIVE FEED</span>
                </div>
              </div>
              
              {/* Cyberpunk World Map */}
              <div className="relative bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl h-96 overflow-hidden border border-blue-500/30 shadow-2xl">
                {/* Scan lines effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-60">
                  <motion.div
                    className="w-full h-0.5 bg-cyan-400/60"
                    animate={{ y: [0, 384] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  {/* Enhanced continent shapes with neon glow */}
                  <defs>
                    <linearGradient id="continentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                      <stop offset="100%" stopColor="rgba(147, 51, 234, 0.2)" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Continents with cyberpunk styling */}
                  <path d="M10,20 L30,15 L35,25 L25,30 L15,35 Z" fill="url(#continentGrad)" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="0.5" filter="url(#glow)" />
                  <path d="M45,15 L55,12 L58,20 L50,25 Z" fill="url(#continentGrad)" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="0.5" filter="url(#glow)" />
                  <path d="M60,10 L85,15 L90,30 L80,35 L65,25 Z" fill="url(#continentGrad)" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="0.5" filter="url(#glow)" />
                  <path d="M45,25 L55,30 L58,45 L50,50 L45,40 Z" fill="url(#continentGrad)" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="0.5" filter="url(#glow)" />
                  <path d="M25,35 L35,40 L32,55 L28,52 L22,45 Z" fill="url(#continentGrad)" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="0.5" filter="url(#glow)" />
                  
                  {/* Enhanced attack points with different severity levels */}
                  <AnimatePresence>
                    {activeAttacks.map((attack) => (
                      <motion.g 
                        key={attack.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Outer pulse ring */}
                        <circle 
                          cx={attack.x} 
                          cy={attack.y} 
                          r="12" 
                          fill="none"
                          stroke={attack.severity === 'Critical' ? '#ef4444' : attack.severity === 'High' ? '#f97316' : '#eab308'}
                          strokeWidth="1" 
                          opacity="0.4"
                          className="animate-ping"
                        />
                        {/* Middle ring */}
                        <circle 
                          cx={attack.x} 
                          cy={attack.y} 
                          r="6" 
                          fill={attack.severity === 'Critical' ? 'rgba(239, 68, 68, 0.3)' : attack.severity === 'High' ? 'rgba(249, 115, 22, 0.3)' : 'rgba(234, 179, 8, 0.3)'} 
                          className="animate-pulse"
                        />
                        {/* Core */}
                        <circle 
                          cx={attack.x} 
                          cy={attack.y} 
                          r="3" 
                          fill={attack.severity === 'Critical' ? '#ef4444' : attack.severity === 'High' ? '#f97316' : '#eab308'}
                        />
                        {/* Connection lines */}
                        <line
                          x1={attack.x}
                          y1={attack.y}
                          x2={50}
                          y2={30}
                          stroke="rgba(34, 211, 238, 0.3)"
                          strokeWidth="0.5"
                          strokeDasharray="2,2"
                          className="animate-pulse"
                        />
                      </motion.g>
                    ))}
                  </AnimatePresence>
                </svg>
                
                {/* HUD Overlay */}
                <div className="absolute top-4 left-4 text-cyan-400 font-mono text-xs">
                  <div className="bg-black/40 p-2 rounded border border-cyan-500/30">
                    <div>GLOBAL THREAT MAP</div>
                    <div className="text-red-400">◉ ACTIVE THREATS: {activeAttacks.length}</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Attack Feed */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white font-mono">THREAT INTELLIGENCE</h4>
                </div>
                
                <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                  <AnimatePresence>
                    {activeAttacks.slice(-6).reverse().map((attack, index) => (
                      <motion.div 
                        key={attack.id}
                        className={`p-4 rounded-lg border backdrop-blur-sm ${getSeverityColor(attack.severity)}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <motion.div 
                              className={`w-3 h-3 rounded-full ${attack.severity === 'Critical' ? 'bg-red-500' : attack.severity === 'High' ? 'bg-orange-500' : 'bg-yellow-500'}`}
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                            <div className="font-mono">
                              <div className="flex items-center space-x-2">
                                <span>{attack.flag}</span>
                                <span className="font-bold text-white">{attack.country}</span>
                                <span className="text-xs px-2 py-1 rounded bg-black/30 border border-gray-500/30">
                                  {attack.severity.toUpperCase()}
                                </span>
                              </div>
                              <div className="text-xs opacity-75 mt-1">{attack.type}</div>
                            </div>
                          </div>
                          <div className="text-right font-mono text-xs">
                            <div className="text-cyan-400">{attack.timestamp}</div>
                            <div className="text-red-400 font-bold">◉ BLOCKED</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </GlassMorphCard>
          </ScrollAnimatedSection>

          {/* Cyberpunk Security Analysis */}
          <ScrollAnimatedSection animation="fadeInRight" className="space-y-8">
            <motion.h3 
              className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              SECURITY ANALYSIS
            </motion.h3>

            {/* Vulnerable Server Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassMorphCard className="bg-gradient-to-br from-red-900/40 to-red-700/20 border border-red-500/30 p-8 shadow-2xl" hover3D>
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div 
                    className="w-4 h-4 bg-red-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 5px rgba(239, 68, 68, 0.5)',
                        '0 0 15px rgba(239, 68, 68, 0.8)',
                        '0 0 5px rgba(239, 68, 68, 0.5)'
                      ]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <h4 className="text-2xl font-bold text-red-300 font-mono">UNPROTECTED_SERVER.exe</h4>
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                
                {/* Terminal Window */}
                <div className="bg-black/60 rounded-lg p-4 border border-red-500/30 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-4 text-red-400">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-2 text-red-300">root@vulnerable-server:~#</span>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { 
                        threat: 'SQL Injection Detected', 
                        status: 'CRITICAL - NO PROTECTION',
                        detail: '> DROP TABLE users; -- executed successfully',
                        delay: 0
                      },
                      { 
                        threat: 'Brute Force Attack', 
                        status: 'ONGOING - 10,000+ attempts',
                        detail: '> admin:password123 - ACCESS GRANTED',
                        delay: 0.2
                      },
                      { 
                        threat: 'Malicious Payload', 
                        status: 'EXECUTED - System Compromised',
                        detail: '> backdoor.php uploaded to /var/www/',
                        delay: 0.4
                      },
                      { 
                        threat: 'Detection Time', 
                        status: 'TOO LATE - Damage Done',
                        detail: '> Incident discovered 72 hours later',
                        delay: 0.6
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="space-y-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">[{new Date().toLocaleTimeString()}]</span>
                          <motion.span 
                            className="text-red-400 font-bold"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          >
                            ❌ FAILED
                          </motion.span>
                        </div>
                        <div className="text-red-300">{item.threat}: <span className="text-red-500 font-bold">{item.status}</span></div>
                        <div className="text-red-400 text-xs opacity-75">{item.detail}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-4 text-red-500 font-bold text-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    [SYSTEM COMPROMISED - DATA BREACH IN PROGRESS]
                  </motion.div>
                </div>
              </GlassMorphCard>
            </motion.div>

            {/* Transition Arrow */}
            <div className="text-center">
              <motion.div 
                className="text-5xl text-cyan-400 mb-4"
                animate={{ 
                  y: [0, 15, 0],
                  textShadow: [
                    '0 0 10px rgba(34, 211, 238, 0.5)',
                    '0 0 20px rgba(34, 211, 238, 0.8)',
                    '0 0 10px rgba(34, 211, 238, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⇓
              </motion.div>
              <motion.div 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-cyan-400/30"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(34, 211, 238, 0.3)',
                    '0 0 20px rgba(34, 211, 238, 0.6)',
                    '0 0 10px rgba(34, 211, 238, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-cyan-300 font-mono font-bold">IDS_PROTECTION.activate()</span>
              </motion.div>
            </div>

            {/* Protected Server Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <GlassMorphCard className="bg-gradient-to-br from-green-900/40 to-cyan-700/20 border border-green-500/30 p-8 shadow-2xl" hover3D glowOnHover>
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div 
                    className="w-4 h-4 bg-green-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 5px rgba(34, 197, 94, 0.5)',
                        '0 0 15px rgba(34, 197, 94, 0.8)',
                        '0 0 5px rgba(34, 197, 94, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h4 className="text-2xl font-bold text-green-300 font-mono">PROTECTED_SERVER.exe</h4>
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                
                {/* Enhanced Terminal Window */}
                <div className="bg-black/60 rounded-lg p-4 border border-green-500/30 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-4 text-green-400">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-2 text-green-300">root@secured-server:~#</span>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { 
                        threat: 'SQL Injection Blocked', 
                        status: 'THREAT NEUTRALIZED',
                        detail: '> Malicious query intercepted in 12ms',
                        delay: 0
                      },
                      { 
                        threat: 'Brute Force Prevented', 
                        status: 'IP BLACKLISTED',
                        detail: '> Attacker blocked after 3 attempts',
                        delay: 0.2
                      },
                      { 
                        threat: 'Malicious Upload Stopped', 
                        status: 'FILE QUARANTINED',
                        detail: '> backdoor.php blocked & analyzed',
                        delay: 0.4
                      },
                      { 
                        threat: 'Real-time Detection', 
                        status: 'ACTIVE MONITORING',
                        detail: '> Response time: <85ms average',
                        delay: 0.6
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="space-y-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">[{new Date().toLocaleTimeString()}]</span>
                          <motion.span 
                            className="text-green-400 font-bold"
                            animate={{ 
                              textShadow: [
                                '0 0 5px rgba(34, 197, 94, 0.3)',
                                '0 0 10px rgba(34, 197, 94, 0.6)',
                                '0 0 5px rgba(34, 197, 94, 0.3)'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          >
                            ✅ SECURED
                          </motion.span>
                        </div>
                        <div className="text-green-300">{item.threat}: <span className="text-green-400 font-bold">{item.status}</span></div>
                        <div className="text-cyan-400 text-xs opacity-75">{item.detail}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-4 text-green-400 font-bold text-center"
                    animate={{ 
                      textShadow: [
                        '0 0 10px rgba(34, 197, 94, 0.5)',
                        '0 0 20px rgba(34, 197, 94, 0.8)',
                        '0 0 10px rgba(34, 197, 94, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    [ALL SYSTEMS SECURE - ZERO BREACHES DETECTED]
                  </motion.div>
                </div>
              </GlassMorphCard>
            </motion.div>
          </ScrollAnimatedSection>
        </div>

        {/* Call to Action */}
        {/* <ScrollAnimatedSection animation="fadeInUp" className="mt-20 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white">
              Don't Let Your Server Become The Next{' '}
              <motion.span 
                className="text-red-400"
                animate={{ 
                  color: ['#f87171', '#ef4444', '#dc2626', '#f87171'],
                  textShadow: [
                    '0 0 10px rgba(239, 68, 68, 0.5)',
                    '0 0 20px rgba(239, 68, 68, 0.8)',
                    '0 0 10px rgba(239, 68, 68, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                VICTIM
              </motion.span>
            </h3>
            
            <MagneticButton 
              className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-2xl shadow-2xl transition-all duration-300"
              glow
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6" />
                <span>ACTIVATE PROTECTION NOW</span>
                <Zap className="w-6 h-6" />
              </div>
            </MagneticButton>
          </motion.div>
        </ScrollAnimatedSection> */}
      </div>
    </section>
  )
}

export default ProblemStatement
