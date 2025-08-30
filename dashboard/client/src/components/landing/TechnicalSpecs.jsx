import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimatedSection from '../ScrollAnimatedSection'
import GlassMorphCard from '../GlassMorphCard'
import MagneticButton from '../MagneticButton'
import { Target, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react'

function TechnicalSpecs() {
  const [animatedMetrics, setAnimatedMetrics] = useState({})

  const metrics = [
    {
      value: '89.8%',
      label: 'Detection Accuracy',
      description: 'XGBoost + Neural Networks',
      icon: Target,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      value: '<85ms',
      label: 'Response Time',
      description: 'Real-time processing',
      icon: Zap,
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      value: '6+',
      label: 'Attack Types Covered',
      description: 'SQL, XSS, Brute Force & more',
      icon: Shield,
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      value: '99.2%',
      label: 'ROC AUC Score',
      description: 'Machine learning performance',
      icon: TrendingUp,
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ]

  const techStack = [
    { name: 'Python', icon: '🐍', description: 'Core ML algorithms', color: 'green' },
    { name: 'FastAPI', icon: '🚀', description: 'High-performance API', color: 'blue' },
    { name: 'TensorFlow', icon: '🧠', description: 'Neural networks', color: 'orange' },
    { name: 'MongoDB', icon: '🍃', description: 'Threat database', color: 'green' },
    { name: 'Docker', icon: '🐳', description: 'Containerization', color: 'blue' },
    { name: 'Redis', icon: '⚡', description: 'Real-time caching', color: 'red' }
  ]

  const attackTypes = [
    { name: 'SQL Injection', detected: '97.3%', color: 'red', value: 97.3 },
    { name: 'Cross-Site Scripting (XSS)', detected: '94.8%', color: 'orange', value: 94.8 },
    { name: 'Brute Force', detected: '99.1%', color: 'green', value: 99.1 },
    { name: 'Directory Traversal', detected: '91.2%', color: 'blue', value: 91.2 },
    { name: 'Remote Code Execution', detected: '95.7%', color: 'purple', value: 95.7 },
    { name: 'CSRF Attacks', detected: '88.9%', color: 'pink', value: 88.9 }
  ]

  useEffect(() => {
    // Animate metrics counting up
    metrics.forEach((metric, index) => {
      const numericValue = parseFloat(metric.value.replace(/[^\d.]/g, ''))
      if (!isNaN(numericValue)) {
        let current = 0
        const increment = numericValue / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            current = numericValue
            clearInterval(timer)
          }
          setAnimatedMetrics(prev => ({
            ...prev,
            [index]: metric.value.includes('%') ? `${current.toFixed(1)}%` : 
                    metric.value.includes('ms') ? `<${Math.round(current)}ms` :
                    metric.value.includes('+') ? `${Math.round(current)}+` :
                    `${current.toFixed(1)}%`
          }))
        }, 50)
      }
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black dark:from-gray-950 dark:to-black text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollAnimatedSection animation="fadeInUp" className="text-center space-y-8 mb-20">
          <motion.h2 
            className="text-5xl lg:text-6xl font-black"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Built for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 dark:from-blue-300 dark:to-green-300 bg-clip-text text-transparent">
              Performance
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enterprise-grade machine learning with lightning-fast response times
          </motion.p>
        </ScrollAnimatedSection>

        {/* Enhanced Performance Metrics */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <GlassMorphCard 
                className="p-8 bg-gray-800/50 dark:bg-gray-900/50 border border-gray-600/30 dark:border-gray-700/30"
                hover3D
                glowOnHover
              >
                <div className="space-y-6">
                  {/* Icon with enhanced effects */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Animated glow */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-20 blur-xl`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      />
                      
                      <metric.icon className="w-8 h-8 text-white relative z-10" />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                      />
                    </motion.div>

                    {/* Pulse indicator */}
                    <motion.div 
                      className={`absolute -top-1 -right-1 w-4 h-4 bg-${metric.color}-400 rounded-full`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0.3, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <motion.div 
                      className="text-3xl font-black text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    >
                      {animatedMetrics[index] || metric.value}
                    </motion.div>
                    <div className="text-lg font-semibold text-gray-300 dark:text-gray-400">
                      {metric.label}
                    </div>
                    <div className="text-sm text-gray-400 dark:text-gray-500">
                      {metric.description}
                    </div>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(${
                      metric.color === 'blue' ? '59, 130, 246' :
                      metric.color === 'yellow' ? '245, 158, 11' :
                      metric.color === 'green' ? '34, 197, 94' :
                      '147, 51, 234'
                    }, 0.1) 0%, transparent 100%)`
                  }}
                />
              </GlassMorphCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Tech Stack */}
        <ScrollAnimatedSection animation="fadeInUp" className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Powered By Industry-Leading Technology
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <GlassMorphCard 
                  className="p-6 text-center bg-gray-800/50 dark:bg-gray-900/50 border border-gray-600/30 dark:border-gray-700/30"
                  hover3D
                >
                  <motion.div 
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <div className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {tech.description}
                  </div>
                </GlassMorphCard>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimatedSection>

        {/* Enhanced Attack Detection Breakdown */}
        <ScrollAnimatedSection animation="fadeInUp">
          <GlassMorphCard className="p-10 bg-gray-800/50 dark:bg-gray-900/50 border border-gray-600/30 dark:border-gray-700/30">
            <motion.h3 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Attack Detection Breakdown
            </motion.h3>
            
            <div className="space-y-6">
              {attackTypes.map((attack, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-700/30 dark:hover:bg-gray-800/30 transition-colors">
                    <div className="w-48 text-gray-300 dark:text-gray-400 font-medium flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{attack.name}</span>
                    </div>
                    
                    <div className="flex-1 bg-gray-700/50 dark:bg-gray-600/50 rounded-full h-4 relative overflow-hidden">
                      <motion.div 
                        className={`h-full rounded-full relative overflow-hidden ${
                          attack.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-400' :
                          attack.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-yellow-400' :
                          attack.color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                          attack.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-cyan-400' :
                          attack.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-indigo-400' :
                          'bg-gradient-to-r from-pink-500 to-rose-400'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${attack.value}%` }}
                        transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      >
                        {/* Shimmer effect on progress bar */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                          animate={{ x: ['100%', '-100%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="w-20 text-right font-bold text-white text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    >
                      {attack.detected}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <GlassMorphCard 
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30"
                magnetic
                glowOnHover
              >
                <motion.span 
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🏆
                </motion.span>
                <span className="font-semibold text-lg">
                  Industry-leading detection rates across all attack vectors
                </span>
              </GlassMorphCard>
            </motion.div>
          </GlassMorphCard>
        </ScrollAnimatedSection>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-600/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-600/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default TechnicalSpecs
