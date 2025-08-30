import { motion } from 'framer-motion'
import ScrollAnimatedSection from '../ScrollAnimatedSection'
import GlassMorphCard from '../GlassMorphCard'
import MagneticButton from '../MagneticButton'
import { Brain, Rocket, BarChart3 } from 'lucide-react'

function SolutionFeatures() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description: '97% accuracy with XGBoost + Neural Networks',
      detail: 'Real-time analysis in <85ms',
      gradient: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-500/10 dark:bg-purple-900/20',
      borderColor: 'border-purple-300/30 dark:border-purple-700/30',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Rocket,
      title: 'One-Line Integration',
      description: 'Copy-paste setup for FastAPI',
      detail: 'Zero configuration required',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10 dark:bg-blue-900/20',
      borderColor: 'border-blue-300/30 dark:border-blue-700/30',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: BarChart3,
      title: 'Live Dashboard',
      description: 'Real-time threat monitoring',
      detail: 'Attack analytics and insights',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10 dark:bg-green-900/20',
      borderColor: 'border-green-300/30 dark:border-green-700/30',
      iconColor: 'text-green-600 dark:text-green-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-950/50 border-t border-gray-200/30 dark:border-gray-800/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollAnimatedSection animation="fadeInUp" className="text-center space-y-8 mb-20">
          <motion.h2 
            className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Enterprise-Grade Security,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
              Developer-Friendly
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced AI algorithms protect your applications without slowing down your development workflow
          </motion.p>
        </ScrollAnimatedSection>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <GlassMorphCard 
                className={`h-full p-8 ${feature.bgColor} ${feature.borderColor}`}
                hover3D
                glowOnHover
              >
                <div className="space-y-6 relative z-10">
                  {/* Icon with enhanced effects */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Animated glow */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 blur-xl`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <feature.icon className="w-8 h-8 text-white relative z-10" />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                      />
                    </motion.div>

                    {/* Floating indicator */}
                    <motion.div 
                      className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${feature.gradient} rounded-full opacity-60`}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.2, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {feature.description}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.detail}
                    </p>
                  </div>

                  {/* Enhanced Feature Visualizations */}
                  <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {index === 0 && (
                      // AI Detection visualization with glassmorphism
                      <GlassMorphCard className="p-4 bg-white/50 dark:bg-gray-800/50">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Neural Network Activity</span>
                          <div className="flex items-center space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div 
                                key={i} 
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}
                                animate={{ 
                                  scale: [1, 1.3, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ 
                                  duration: 1.5, 
                                  repeat: Infinity,
                                  delay: i * 0.2 
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-end space-x-1 h-16">
                          {[...Array(8)].map((_, i) => (
                            <motion.div 
                              key={i}
                              className={`bg-gradient-to-t ${feature.gradient} rounded-t flex-1`}
                              style={{ height: `${Math.random() * 80 + 20}%` }}
                              animate={{ 
                                scaleY: [0.3, 1, 0.7, 1],
                                opacity: [0.6, 1, 0.8, 1]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: i * 0.1 
                              }}
                            />
                          ))}
                        </div>
                      </GlassMorphCard>
                    )}

                    {index === 1 && (
                      // Integration code preview with enhanced styling
                      <GlassMorphCard className="p-4 bg-gray-900/90 dark:bg-gray-950/90 border border-gray-700/30">
                        <div className="font-mono text-xs space-y-1">
                          <motion.div 
                            className="text-green-400"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            $ pip install ids-protection
                          </motion.div>
                          <motion.div 
                            className="text-blue-400"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            setup_ids_protection(app)
                          </motion.div>
                          <motion.div 
                            className="text-green-400 flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              ✓
                            </motion.span>
                            <span>Protection activated</span>
                          </motion.div>
                        </div>
                      </GlassMorphCard>
                    )}

                    {index === 2 && (
                      // Dashboard preview with live effects
                      <GlassMorphCard className="p-4 bg-white/50 dark:bg-gray-800/50">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Threats Blocked</span>
                          <div className="flex items-center space-x-2">
                            <motion.div 
                              className="w-2 h-2 bg-green-500 rounded-full"
                              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                            <span className="text-xs text-green-600 dark:text-green-400 font-bold">Live</span>
                          </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                          <motion.span 
                            className="text-2xl font-black text-green-600 dark:text-green-400"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            1,247
                          </motion.span>
                          <motion.span 
                            className="text-xs text-green-600 dark:text-green-400 flex items-center"
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            ↑ +23 this hour
                          </motion.span>
                        </div>
                      </GlassMorphCard>
                    )}
                  </motion.div>
                </div>

                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${
                      index === 0 ? 'rgba(147, 51, 234, 0.05)' :
                      index === 1 ? 'rgba(59, 130, 246, 0.05)' :
                      'rgba(34, 197, 94, 0.05)'
                    } 0%, transparent 100%)`
                  }}
                />
              </GlassMorphCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <ScrollAnimatedSection animation="fadeInUp" className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticButton className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 text-white px-10 py-4 text-lg font-bold rounded-2xl">
              See All Features
              <motion.span 
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </MagneticButton>
          </motion.div>
        </ScrollAnimatedSection>
      </div>
    </section>
  )
}

export default SolutionFeatures
