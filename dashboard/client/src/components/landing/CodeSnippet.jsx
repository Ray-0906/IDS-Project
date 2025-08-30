import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassMorphCard from '../GlassMorphCard'

function CodeSnippet() {
  const [copied, setCopied] = useState(false)
  
  const codeSnippet = `setup_ids_protection(app, api_key="free")`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <GlassMorphCard className="bg-gray-900/90 backdrop-blur-md p-6 max-w-sm border border-gray-700" hover3D>
        <div className="flex items-center justify-between mb-3">
          <div className="flex space-x-2">
            <motion.div 
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="w-3 h-3 bg-yellow-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
            />
          </div>
          <motion.button 
            onClick={handleCopy}
            className="text-xs text-gray-400 hover:text-white transition-colors duration-200 px-2 py-1 rounded bg-gray-800 hover:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? '✓ Copied' : 'Copy'}
          </motion.button>
        </div>
        
        <div className="font-mono text-sm leading-relaxed">
          <motion.span 
            className="text-blue-400"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            setup_ids_protection
          </motion.span>
          <span className="text-gray-300">(</span>
          <span className="text-yellow-300">app</span>
          <span className="text-gray-300">, </span>
          <span className="text-blue-400">api_key</span>
          <span className="text-gray-300">=</span>
          <span className="text-green-400">"free"</span>
          <span className="text-gray-300">)</span>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg blur-sm -z-10 opacity-50" />
      </GlassMorphCard>
    </motion.div>
  )
}

export default CodeSnippet
