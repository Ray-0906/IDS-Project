import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CodeSnippet from './CodeSnippet'
import AnimatedBackground from './AnimatedBackground'
import GlassMorphCard from '../GlassMorphCard'
import MagneticButton from '../MagneticButton'
import ScrollAnimatedSection from '../ScrollAnimatedSection'
import ScrambledText from '../ui/ScrambleTxt'

function HeroSection() {
  const [threatsBlocked, setThreatsBlocked] = useState(2847392)

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-blue-900 overflow-hidden transition-colors duration-500 w-full">
      <AnimatedBackground />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] w-full">
          
          {/* Left Column - Content */}
          <ScrollAnimatedSection animation="fadeInLeft" className="space-y-6 lg:space-y-8 w-full">
            <div className="space-y-4 lg:space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Stop Cyber Attacks in{' '}<br/>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ">
                  Real-Time
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                
                AI-powered intrusion detection that protects your servers with{' '}
                <span className="font-bold text-green-400">97% accuracy</span>.
                One line of code, enterprise-grade security.
              </motion.p>
            </div>

            {/* Trust Indicator */}
            <motion.div 
              className="flex items-center space-x-2 text-blue-200 w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.svg 
                className="w-5 h-5 text-green-400 flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </motion.svg>
              <span className="font-medium text-sm sm:text-base">Free Forever • No Credit Card Required</span>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <MagneticButton size="lg" glow className="shadow-2xl">
                Start Protecting Your Servers
              </MagneticButton>
              
              <MagneticButton variant="secondary" size="lg">
                View Live Demo
              </MagneticButton>
            </motion.div>

            {/* Live Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <GlassMorphCard className="inline-flex items-center space-x-2 px-6 py-4" glowOnHover>
                <motion.div 
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-white">
                  🛡️ <span className="font-mono font-bold text-green-400">{threatsBlocked.toLocaleString()}</span> threats blocked today
                </span>
              </GlassMorphCard>
            </motion.div>
          </ScrollAnimatedSection>

          {/* Right Column - Dashboard Mockup */}
          <ScrollAnimatedSection animation="fadeInRight" delay={0.2} className="relative">
            <GlassMorphCard className="p-8" hover3D glowOnHover>
              <div className="space-y-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">IDS Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm text-blue-200">Live</span>
                  </div>
                </div>

                {/* Threat Detection Chart */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 h-48 flex items-end space-x-2">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-blue-500 to-green-400 rounded-t flex-1"
                      initial={{ height: '20%' }}
                      animate={{ 
                        height: `${Math.random() * 60 + 40}%`,
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

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <GlassMorphCard className="bg-green-500/10 p-4">
                    <motion.div 
                      className="text-2xl font-bold text-green-400"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      97.2%
                    </motion.div>
                    <div className="text-sm text-green-300">Detection Rate</div>
                  </GlassMorphCard>
                  <GlassMorphCard className="bg-blue-500/10 p-4">
                    <motion.div 
                      className="text-2xl font-bold text-blue-400"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    >
                      &lt;85ms
                    </motion.div>
                    <div className="text-sm text-blue-300">Response Time</div>
                  </GlassMorphCard>
                </div>
              </div>
            </GlassMorphCard>

            {/* Floating Code Snippet */}
            <motion.div 
              className="absolute -bottom-8 -left-8 z-20"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <CodeSnippet />
            </motion.div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
