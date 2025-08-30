import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import DocsSidebar from '../components/docs/DocsSidebar'
import DocsContent from '../components/docs/DocsContent'
import DocsTableOfContents from '../components/docs/DocsTableOfContents2'
import { Menu, X, Search, Download, Bookmark, Copy } from 'lucide-react'

function Docs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('quick-start')
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Close sidebar on mobile when section changes
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false)
    }
  }, [activeSection])

  // Handle escape key to close search
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
        setSearchTerm('')
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <motion.div 
      className="min-h-screen bg-[#0a0a0f] w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Documentation Header */}
      <div className="pt-[70px] bg-gradient-to-r from-[#0a0a0f] via-[#16213e] to-[#1a1a2e] border-b border-[rgba(139,92,246,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Title Section */}
            <div className="flex items-center space-x-4">
              <motion.button
                className="lg:hidden p-2 text-white hover:text-[#00ff88] transition-colors"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
              
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white flex items-center space-x-3">
                  <span className="text-3xl">🛡️</span>
                  <span>IDS IMPLEMENTATION GUIDE</span>
                </h1>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-sm text-[#a0a9c0]">
                    Home {'>'} Docs {'>'} {activeSection.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                  <span className="text-sm text-[#00ff88]">Updated 2 hours ago</span>
                  <span className="text-sm text-[#00d4ff]">⏱️ 15 min read</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3 mt-4 lg:mt-0">
              {/* Search Button - Always visible */}
              <motion.button
                className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-[rgba(21,21,32,0.8)] border border-[rgba(139,92,246,0.3)] rounded-lg text-white hover:border-[#00ff88] transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-4 h-4" />
                <span className="text-sm hidden sm:block">Search</span>
              </motion.button>
              
              {/* Copy Button - Hidden on mobile */}
              <motion.button
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-[rgba(21,21,32,0.8)] border border-[rgba(139,92,246,0.3)] rounded-lg text-white hover:border-[#00ff88] transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Copy className="w-4 h-4" />
                <span className="text-sm">Copy All</span>
              </motion.button>

              {/* Bookmark Button - Hidden on small screens */}
              <motion.button
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-[rgba(21,21,32,0.8)] border border-[rgba(139,92,246,0.3)] rounded-lg text-white hover:border-[#00ff88] transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Download PDF</span>
              </motion.button>

              <motion.button
                className="flex items-center space-x-2 px-4 py-2 bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.3)] rounded-lg text-[#00ff88] hover:bg-[rgba(0,255,136,0.2)] transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Bookmark className="w-4 h-4" />
                <span className="text-sm">Bookmark</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Documentation Layout */}
      <div className="flex min-h-screen relative">
        {/* Sidebar */}
        <DocsSidebar 
          isOpen={isSidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row w-full min-w-0">
          {/* Documentation Content */}
          <main className="flex-1 min-w-0 overflow-x-auto">
            <DocsContent activeSection={activeSection} />
          </main>

          {/* Table of Contents - Only show on very large screens */}
          <aside className="hidden 2xl:block w-64 flex-shrink-0">
            <DocsTableOfContents activeSection={activeSection} />
          </aside>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[rgba(10,10,15,0.95)] backdrop-blur-sm flex items-start justify-center pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Search className="absolute left-4 top-4 w-6 h-6 text-[#00ff88]" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-[rgba(21,21,32,0.95)] border border-[rgba(139,92,246,0.3)] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff88] text-lg"
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {searchTerm && (
                <motion.div
                  className="mt-4 bg-[rgba(21,21,32,0.95)] border border-[rgba(139,92,246,0.3)] rounded-xl p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-[#a0a9c0] text-sm mb-2">Search results for "{searchTerm}"</p>
                  <div className="space-y-2">
                    <button className="block w-full text-left p-2 hover:bg-[rgba(0,255,136,0.1)] rounded text-white text-sm">
                      Quick Start Guide → Getting Started
                    </button>
                    <button className="block w-full text-left p-2 hover:bg-[rgba(0,255,136,0.1)] rounded text-white text-sm">
                      FastAPI Integration → Implementation
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Docs
