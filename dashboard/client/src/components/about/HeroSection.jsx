import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Globe, Users } from 'lucide-react'

function HeroSection() {
  const [threatsBlocked, setThreatsBlocked] = useState(2847392)
  const [developersProtected, setDevelopersProtected] = useState(500)

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  // Typewriter effect for main headline
  const [displayText, setDisplayText] = useState('')
  const fullText = 'DEFENDING THE DIGITAL REALM'

  useEffect(() => {
    let currentIndex = 0
    const typeTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeTimer)
      }
    }, 100)

    return () => clearInterval(typeTimer)
  }, [])

  const statsData = [
    { value: `${developersProtected}+`, label: 'Developers\nProtected', icon: Users },
    { value: '2.8M+', label: 'Threats\nBlocked', icon: Shield },
    { value: '99.9%', label: 'Uptime\nGuarantee', icon: Zap },
    { value: '<85ms', label: 'Response\nTime', icon: Globe },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00ff88] rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}

        {/* Network grid background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00ff88" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(139,92,246,0.1)] via-transparent to-[rgba(0,255,136,0.1)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-12">
          {/* Main Headline with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              {displayText}
              <motion.span
                className="text-[#00d4ff] ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto rounded-full" />
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl lg:text-2xl text-[#a0a9c0] leading-relaxed">
              We're on a mission to <span className="text-[#00ff88] font-bold">democratize cybersecurity</span>. 
              Every developer, startup, and enterprise deserves enterprise-grade protection 
              without the enterprise-grade complexity.
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-6 group hover:border-[#00ff88] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
              >
                <div className="text-center space-y-3">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#8b5cf6] to-[#00ff88] rounded-xl group-hover:shadow-lg group-hover:shadow-[rgba(0,255,136,0.3)]"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-2xl lg:text-3xl font-bold text-[#00ff88] group-hover:text-[#00d4ff] transition-colors"
                    animate={{ 
                      textShadow: [
                        "0 0 5px rgba(0, 255, 136, 0.3)",
                        "0 0 20px rgba(0, 255, 136, 0.5)",
                        "0 0 5px rgba(0, 255, 136, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {index === 0 ? `${developersProtected}+` : stat.value}
                  </motion.div>
                  
                  <p className="text-sm text-[#a0a9c0] whitespace-pre-line font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Shield Animation */}
          <motion.div
            className="absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Shield className="w-32 h-32 text-[#00ff88]" strokeWidth={1} />
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-1/4 transform -translate-y-1/2 opacity-20"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Zap className="w-24 h-24 text-[#00d4ff]" strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
