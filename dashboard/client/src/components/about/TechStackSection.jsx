import { motion } from 'framer-motion'
import { Brain, Zap, Database, Shield, BarChart3, Cpu } from 'lucide-react'

function TechStackSection() {
  const techCategories = [
    {
      title: 'AI & MACHINE LEARNING',
      icon: Brain,
      technologies: [
        { name: 'TensorFlow', logo: '🧠', description: 'Deep learning framework for threat detection' },
        { name: 'XGBoost', logo: '🤖', description: 'Gradient boosting for anomaly detection' },
        { name: 'Neural Networks', logo: '🔮', description: 'Advanced pattern recognition' }
      ],
      gradient: 'from-[#8b5cf6] to-[#00d4ff]',
      borderColor: 'border-[rgba(139,92,246,0.3)]',
      hoverColor: 'hover:border-[#8b5cf6]'
    },
    {
      title: 'BACKEND INFRASTRUCTURE',
      icon: Zap,
      technologies: [
        { name: 'FastAPI', logo: '⚡', description: 'High-performance async API framework' },
        { name: 'Python', logo: '🐍', description: 'Core application language' },
        { name: 'MongoDB', logo: '🗄️', description: 'Scalable threat data storage' },
        { name: 'Redis', logo: '🔄', description: 'Real-time caching and sessions' }
      ],
      gradient: 'from-[#00ff88] to-[#00d4ff]',
      borderColor: 'border-[rgba(0,255,136,0.3)]',
      hoverColor: 'hover:border-[#00ff88]'
    },
    {
      title: 'SECURITY & MONITORING',
      icon: Shield,
      technologies: [
        { name: 'JWT Auth', logo: '🛡️', description: 'Secure authentication system' },
        { name: 'Real-time Analytics', logo: '📊', description: 'Live threat monitoring' },
        { name: 'WebSockets', logo: '🔍', description: 'Instant alert delivery' },
        { name: 'Performance Metrics', logo: '📈', description: 'System health monitoring' }
      ],
      gradient: 'from-[#00d4ff] to-[#8b5cf6]',
      borderColor: 'border-[rgba(0,212,255,0.3)]',
      hoverColor: 'hover:border-[#00d4ff]'
    }
  ]

  const performanceMetrics = [
    { metric: '97.2%', label: 'Detection\nAccuracy', icon: BarChart3 },
    { metric: '<85ms', label: 'Response\nTime', icon: Zap },
    { metric: '2.8M+', label: 'Threats\nBlocked', icon: Shield },
    { metric: '99.9%', label: 'Uptime\nMaintained', icon: Cpu },
    { metric: '500+', label: 'Servers\nProtected', icon: Database },
    { metric: '0', label: 'False Positives\nin Production', icon: Brain }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0f] via-[#16213e] to-[#1a1a2e] relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00ff88" strokeWidth="0.5"/>
              <circle cx="0" cy="0" r="1" fill="#00ff88" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Circuit-like connecting lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-[#00ff88] to-transparent opacity-30"
            style={{
              left: `${(i + 1) * 12.5}%`,
              height: '100%'
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            POWERED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#00ff88]">CUTTING-EDGE TECHNOLOGY</span>
          </h2>
          <p className="text-xl text-[#a0a9c0] max-w-3xl mx-auto">
            Our tech stack combines the latest in AI, cloud infrastructure, and security protocols to deliver unmatched protection.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Tech Stack Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className={`bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border ${category.borderColor} ${category.hoverColor} rounded-2xl p-8 h-full transition-all duration-300`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies Grid */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="flex items-center space-x-4 p-3 rounded-lg bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,255,136,0.05)] transition-all duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl">{tech.logo}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{tech.name}</h4>
                        <p className="text-xs text-[#a0a9c0]">{tech.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Connecting lines animation */}
                <motion.div
                  className="absolute top-8 right-8 w-8 h-8 opacity-20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-full h-full border border-[#00ff88] rounded-full" />
                  <div className="absolute inset-2 border border-[#00d4ff] rounded-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
            BY THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">NUMBERS</span>
          </h3>
          <p className="text-lg text-[#a0a9c0] max-w-2xl mx-auto">
            Real-time performance metrics that showcase our system's reliability and effectiveness.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {performanceMetrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-6 text-center hover:border-[#00ff88] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0, 255, 136, 0)",
                    "0 0 20px 0 rgba(0, 255, 136, 0.1)",
                    "0 0 0 0 rgba(0, 255, 136, 0)"
                  ]
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity },
                  scale: { duration: 0.3 },
                  y: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(139,92,246,0.2)] to-[rgba(0,255,136,0.2)] mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-6 h-6 text-[#00ff88]" strokeWidth={1.5} />
                </motion.div>

                <motion.div
                  className="text-2xl lg:text-3xl font-black text-[#00ff88] mb-2 group-hover:text-[#00d4ff] transition-colors"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(0, 255, 136, 0.3)",
                      "0 0 20px rgba(0, 255, 136, 0.6)",
                      "0 0 5px rgba(0, 255, 136, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.metric}
                </motion.div>

                <p className="text-sm text-[#a0a9c0] font-medium whitespace-pre-line">
                  {item.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Tech Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-6">
              <span className="text-[#00ff88]">Real-Time</span> System Architecture
            </h4>
            
            {/* Simplified Architecture Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#8b5cf6] to-[#00d4ff] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-semibold text-white mb-2">AI Detection Engine</h5>
                <p className="text-sm text-[#a0a9c0]">Machine learning models analyze incoming requests in real-time</p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-semibold text-white mb-2">Fast API Processing</h5>
                <p className="text-sm text-[#a0a9c0]">Sub-85ms response times with async processing</p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h5 className="font-semibold text-white mb-2">Instant Protection</h5>
                <p className="text-sm text-[#a0a9c0]">Real-time alerts and automated threat blocking</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackSection
