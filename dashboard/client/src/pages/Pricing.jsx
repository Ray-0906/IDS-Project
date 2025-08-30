import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

function Pricing() {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center py-20">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">Pricing</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Flexible plans for teams of all sizes
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default Pricing
