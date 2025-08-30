import { motion, AnimatePresence } from 'framer-motion'
import { Hash, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

function DocsTableOfContents({ activeSection, onSectionClick }) {
  const [activeHeading, setActiveHeading] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  // Table of contents structure based on the active section
  const getTableOfContents = (section) => {
    switch (section) {
      case 'quick-start':
        return [
          { id: 'installation', title: 'Installation', level: 1 },
          { id: 'system-requirements', title: 'System Requirements', level: 2 },
          { id: 'basic-setup', title: 'Basic Setup', level: 1 },
          { id: 'configuration', title: 'Configuration', level: 2 },
          { id: 'first-run', title: 'First Run', level: 1 },
          { id: 'verification', title: 'Verification', level: 2 },
          { id: 'troubleshooting', title: 'Troubleshooting', level: 2 }
        ]
      case 'fastapi':
        return [
          { id: 'prerequisites', title: 'Prerequisites', level: 1 },
          { id: 'installation', title: 'Installation', level: 1 },
          { id: 'basic-integration', title: 'Basic Integration', level: 1 },
          { id: 'middleware-setup', title: 'Middleware Setup', level: 2 },
          { id: 'advanced-config', title: 'Advanced Configuration', level: 1 },
          { id: 'custom-rules', title: 'Custom Rules', level: 2 },
          { id: 'monitoring', title: 'Monitoring & Logging', level: 2 },
          { id: 'examples', title: 'Complete Examples', level: 1 }
        ]
      case 'django':
        return [
          { id: 'installation', title: 'Django Installation', level: 1 },
          { id: 'middleware', title: 'Middleware Integration', level: 1 },
          { id: 'settings', title: 'Settings Configuration', level: 2 },
          { id: 'urls', title: 'URL Patterns', level: 2 },
          { id: 'views', title: 'View Protection', level: 1 },
          { id: 'templates', title: 'Template Integration', level: 2 }
        ]
      case 'nginx':
        return [
          { id: 'installation', title: 'Nginx Installation', level: 1 },
          { id: 'configuration', title: 'Configuration', level: 1 },
          { id: 'upstream', title: 'Upstream Setup', level: 2 },
          { id: 'ssl', title: 'SSL Configuration', level: 2 },
          { id: 'load-balancing', title: 'Load Balancing', level: 1 }
        ]
      default:
        return []
    }
  }

  const tableOfContents = getTableOfContents(activeSection)

  // Scroll to top functionality
  const scrollToTop = () => {
    document.querySelector('.docs-content')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (tableOfContents.length === 0) {
    return (
      <div className="hidden xl:block xl:w-64 flex-shrink-0">
        <div className="sticky top-24 p-6">
          <div className="text-center text-gray-400">
            <Hash className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm">No table of contents available for this section.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="hidden xl:block xl:w-64 flex-shrink-0">
      <div className="sticky top-24 p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-white mb-2 flex items-center">
            <Hash className="w-4 h-4 mr-2 text-[#00ff88]" />
            On This Page
          </h3>
          <div className="w-full h-px bg-gradient-to-r from-[#00ff88] to-transparent" />
        </div>

        {/* Table of Contents */}
        <nav className="space-y-1">
          <AnimatePresence>
            {tableOfContents.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.button
                  className={`
                    w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200
                    ${item.level === 1 ? 'pl-3' : 'pl-8'}
                    ${activeHeading === item.id 
                      ? 'text-[#00ff88] bg-[rgba(0,255,136,0.1)] border-l-2 border-[#00ff88]' 
                      : 'text-gray-400 hover:text-white hover:bg-[rgba(139,92,246,0.1)]'
                    }
                  `}
                  onClick={() => {
                    setActiveHeading(item.id)
                    // Scroll to the section
                    const element = document.getElementById(item.id)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.title}
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              className="mt-8 pt-6 border-t border-[rgba(139,92,246,0.2)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <motion.button
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00ff88] transition-colors duration-200"
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronUp className="w-4 h-4" />
                <span>Back to top</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="mt-8 pt-6 border-t border-[rgba(139,92,246,0.2)]">
          <div className="text-xs text-gray-500 mb-2">Reading Progress</div>
          <div className="w-full bg-gray-800 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((activeHeading ? tableOfContents.findIndex(item => item.id === activeHeading) + 1 : 0) / tableOfContents.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {activeHeading ? tableOfContents.findIndex(item => item.id === activeHeading) + 1 : 0} of {tableOfContents.length}
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 pt-6 border-t border-[rgba(139,92,246,0.2)]">
          <h4 className="text-xs font-semibold text-white mb-3">Quick Links</h4>
          <div className="space-y-2">
            <a 
              href="#" 
              className="block text-xs text-gray-400 hover:text-[#00ff88] transition-colors"
            >
              Edit this page
            </a>
            <a 
              href="#" 
              className="block text-xs text-gray-400 hover:text-[#00ff88] transition-colors"
            >
              Report an issue
            </a>
            <a 
              href="#" 
              className="block text-xs text-gray-400 hover:text-[#00ff88] transition-colors"
            >
              Suggest improvements
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocsTableOfContents
