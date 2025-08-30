import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import HeroSection from '../components/landing/HeroSection'
import SocialProofSection from '../components/landing/SocialProofSection'
import ProblemStatement from '../components/landing/ProblemStatement'
import LiveDemo from '../components/landing/LiveDemo'
import DeveloperSection from '../components/landing/DeveloperSection'
import FinalCTA from '../components/landing/FinalCTA'

function Landing() {
  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content with proper top padding to account for fixed navbar */}
      <div className="pt-[70px] w-full">
        <HeroSection />
        <SocialProofSection />
        <ProblemStatement />
        
        {/* Features Preview Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Powerful Features Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Developers</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From AI-powered detection to one-line integration, discover what makes our platform special
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Detection</h3>
                <p className="text-gray-600 dark:text-gray-300">97% accuracy with advanced machine learning algorithms</p>
              </div>
              <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-300">Response time under 85ms for real-time protection</p>
              </div>
              <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Easy Integration</h3>
                <p className="text-gray-600 dark:text-gray-300">One-line setup with zero configuration required</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="/features" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl transition-all duration-200 hover:scale-105"
              >
                Explore All Features
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </div>
        </section>

        <LiveDemo />
        <DeveloperSection />
        <FinalCTA />
      </div>
    </motion.div>
  )
}

export default Landing
