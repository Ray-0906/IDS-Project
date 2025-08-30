import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, FlaskConical, Rocket, Globe } from 'lucide-react'

function JourneyTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100])

  const timelineData = [
    {
      quarter: '2024 Q1',
      title: '💡 CONCEPTION',
      icon: Lightbulb,
      description: 'Founded by security researchers who were tired of complex enterprise solutions that small teams couldn\'t afford',
      color: '#8b5cf6'
    },
    {
      quarter: '2024 Q2',
      title: '🔬 RESEARCH & DEVELOPMENT',
      icon: FlaskConical,
      description: '6 months of AI model training on 2.8M+ threat samples. Built the core ML detection engine',
      color: '#00ff88'
    },
    {
      quarter: '2024 Q3',
      title: '🚀 BETA LAUNCH',
      icon: Rocket,
      description: '50 beta users, 500k+ requests analyzed. Achieved 89.8% detection accuracy',
      color: '#00d4ff'
    },
    {
      quarter: '2024 Q4',
      title: '🌍 PUBLIC LAUNCH',
      icon: Globe,
      description: 'Free-forever model launched. 500+ developers joined the security revolution',
      color: '#00ff88'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            OUR JOURNEY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">DIGITAL SECURITY</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#00ff88] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[rgba(139,92,246,0.3)] rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-[#8b5cf6] via-[#00ff88] to-[#00d4ff] rounded-full origin-top"
              style={{
                height: `${lineProgress}%`,
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-6 group hover:border-[#00ff88] transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-bold text-[#00ff88] bg-[rgba(0,255,136,0.1)] px-3 py-1 rounded-full">
                          {item.quarter}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-[#a0a9c0] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="relative flex items-center justify-center w-2/12">
                  <motion.div
                    className="w-16 h-16 rounded-full border-4 border-[rgba(139,92,246,0.5)] bg-[#0a0a0f] flex items-center justify-center group z-10"
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      boxShadow: [
                        `0 0 0 0 rgba(139, 92, 246, 0.7)`,
                        `0 0 0 20px rgba(139, 92, 246, 0)`,
                        `0 0 0 0 rgba(139, 92, 246, 0.7)`
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity },
                      scale: { duration: 0.3 }
                    }}
                  >
                    <item.icon 
                      className="w-8 h-8 text-[#00ff88] group-hover:text-[#00d4ff] transition-colors" 
                      strokeWidth={2}
                    />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Problem & Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 grid lg:grid-cols-2 gap-12"
        >
          {/* The Problem */}
          <motion.div
            className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(220,38,38,0.3)] rounded-2xl p-8 group hover:border-red-500 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400 flex items-center space-x-3">
                <span className="text-3xl">🔴</span>
                <span>THE CYBERSECURITY GAP</span>
              </h3>
              
              <ul className="space-y-3 text-[#a0a9c0]">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>68% of small businesses have no security measures</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Enterprise solutions cost $10,000+ per month</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Complex setup requires dedicated security teams</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>SMBs are 3x more likely to be targeted</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Our Solution */}
          <motion.div
            className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(0,255,136,0.3)] rounded-2xl p-8 group hover:border-[#00ff88] transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#00ff88] flex items-center space-x-3">
                <span className="text-3xl">🛡️</span>
                <span>SECURITY FOR EVERYONE</span>
              </h3>
              
              <ul className="space-y-3 text-[#a0a9c0]">
                <li className="flex items-start space-x-3">
                  <span className="text-[#00ff88] mt-1">✓</span>
                  <span>One-line integration, zero configuration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00ff88] mt-1">✓</span>
                  <span>AI-powered detection with 89.8% accuracy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00ff88] mt-1">✓</span>
                  <span>Free forever with enterprise-grade features</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#00ff88] mt-1">✓</span>
                  <span>Real-time protection in under 85ms</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default JourneyTimeline
