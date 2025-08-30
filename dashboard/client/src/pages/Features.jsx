import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import SolutionFeatures from '../components/landing/SolutionFeatures'
import TechnicalSpecs from '../components/landing/TechnicalSpecs'
import HowItWorks from '../components/landing/HowItWorks'

function Features() {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <div className="pt-20">
        {/* Hero Section for Features Page */}
        <section className="py-24 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1 
              className="text-6xl lg:text-7xl font-black text-white mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">Features</span>
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive cybersecurity features powered by cutting-edge AI and machine learning technology
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00ff88] mb-2">97%</div>
                <div className="text-gray-300">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00d4ff] mb-2">&lt;85ms</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#8b5cf6] mb-2">6+</div>
                <div className="text-gray-300">Attack Types</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Features Components */}
        <SolutionFeatures />
        <HowItWorks />
        <TechnicalSpecs />
        
        {/* Call to Action Section */}
        <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">Get Protected</span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Start securing your applications with our advanced features today
            </motion.p>
            <motion.div 
              className="space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-200">
                Start Free Trial
              </button>
              <button className="border border-[#00ff88] text-[#00ff88] font-bold px-8 py-4 rounded-xl hover:bg-[#00ff88]/10 transition-all duration-200">
                View Documentation
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Features
