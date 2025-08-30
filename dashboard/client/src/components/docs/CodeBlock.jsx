import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Terminal } from 'lucide-react'

function CodeBlock({ language, code, onCopy, copied }) {
  const [isHovered, setIsHovered] = useState(false)

  const getLanguageIcon = (lang) => {
    switch (lang) {
      case 'python':
        return '🐍'
      case 'javascript':
        return '🟨'
      case 'bash':
        return '💻'
      case 'nginx':
        return '🌐'
      default:
        return '⚡'
    }
  }

  const getLanguageColor = (lang) => {
    switch (lang) {
      case 'python':
        return 'text-yellow-400'
      case 'javascript':
        return 'text-yellow-500'
      case 'bash':
        return 'text-green-400'
      case 'nginx':
        return 'text-blue-400'
      default:
        return 'text-cyan-400'
    }
  }

  const highlightSyntax = (code, language) => {
    // Simple syntax highlighting for demo purposes
    // In a real implementation, you'd use a proper syntax highlighter like Prism.js
    
    let highlighted = code
    
    if (language === 'python') {
      highlighted = highlighted
        .replace(/(from|import|def|class|if|else|elif|for|while|try|except|async|await)/g, '<span class="text-purple-400 font-semibold">$1</span>')
        .replace(/("|'[^"']*"|'[^"']*')/g, '<span class="text-green-400">$1</span>')
        .replace(/#.*/g, '<span class="text-gray-500 italic">$&</span>')
        .replace(/(\d+)/g, '<span class="text-yellow-400">$1</span>')
    } else if (language === 'bash') {
      highlighted = highlighted
        .replace(/(pip|npm|curl|sudo|chmod|cd|ls|mkdir)/g, '<span class="text-cyan-400 font-semibold">$1</span>')
        .replace(/#.*/g, '<span class="text-gray-500 italic">$&</span>')
        .replace(/--\w+/g, '<span class="text-yellow-400">$&</span>')
    } else if (language === 'javascript') {
      highlighted = highlighted
        .replace(/(const|let|var|function|async|await|if|else|for|while|try|catch)/g, '<span class="text-purple-400 font-semibold">$1</span>')
        .replace(/("|'[^"']*"|'[^"']*')/g, '<span class="text-green-400">$1</span>')
        .replace(/\/\/.*/g, '<span class="text-gray-500 italic">$&</span>')
    }
    
    return highlighted
  }

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Code Block Container */}
      <div className="bg-[#1a1b26] border border-[rgba(139,92,246,0.3)] rounded-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-[rgba(0,0,0,0.3)] border-b border-[rgba(139,92,246,0.2)]">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-lg sm:text-xl">{getLanguageIcon(language)}</span>
            <span className={`text-xs sm:text-sm font-semibold ${getLanguageColor(language)}`}>
              {language.toUpperCase()}
            </span>
          </div>
          
          {/* Copy Button */}
          <motion.button
            className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 bg-[rgba(139,92,246,0.2)] hover:bg-[rgba(139,92,246,0.3)] rounded-lg transition-all duration-200 text-white text-xs sm:text-sm"
            onClick={() => onCopy(code)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={copied ? { backgroundColor: 'rgba(0, 255, 136, 0.2)' } : {}}
          >
            <motion.div
              animate={copied ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {copied ? <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#00ff88]" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
            </motion.div>
            <span className={`${copied ? 'text-[#00ff88]' : 'text-white'} hidden sm:inline`}>
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </motion.button>
        </div>

        {/* Code Content */}
        <div className="p-3 sm:p-4 overflow-x-auto">
          <pre className="text-xs sm:text-sm font-mono leading-relaxed">
            <code 
              className="text-white"
              dangerouslySetInnerHTML={{ __html: highlightSyntax(code, language) }}
            />
          </pre>
        </div>

        {/* Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered ? '0 0 20px rgba(0, 255, 136, 0.1)' : '0 0 0px rgba(0, 255, 136, 0)'
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Terminal-style decoration */}
      <div className="absolute top-3 left-4 sm:left-6 flex space-x-2 opacity-50">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
      </div>
    </motion.div>
  )
}

export default CodeBlock
