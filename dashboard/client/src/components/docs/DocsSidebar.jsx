import { motion, AnimatePresence } from 'framer-motion'
import { 
  Book, 
  Rocket, 
  Settings, 
  Globe, 
  Flame, 
  BarChart3, 
  Wrench, 
  HelpCircle,
  ChevronRight,
  ChevronDown
} from 'lucide-react'
import { useState } from 'react'

function DocsSidebar({ isOpen, activeSection, setActiveSection, onClose }) {
  const [expandedSections, setExpandedSections] = useState(['getting-started', 'implementation'])

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const navigationSections = [
    {
      id: 'getting-started',
      title: '🚀 Getting Started',
      icon: Rocket,
      items: [
        { id: 'quick-start', title: 'Quick Start Guide' },
        { id: 'installation', title: 'Installation' },
        { id: 'first-integration', title: 'First Integration' }
      ]
    },
    {
      id: 'implementation',
      title: '🛠️ Implementation',
      icon: Settings,
      items: [
        { id: 'fastapi-middleware', title: 'FastAPI Middleware' },
        { id: 'django-integration', title: 'Django Integration' },
        { id: 'flask-setup', title: 'Flask Setup' },
        { id: 'express-nodejs', title: 'Express.js (Node)' },
        { id: 'spring-boot', title: 'Spring Boot (Java)' }
      ]
    },
    {
      id: 'gateway-proxy',
      title: '🌐 Gateway & Proxy',
      icon: Globe,
      items: [
        { id: 'nginx-configuration', title: 'Nginx Configuration' },
        { id: 'apache-setup', title: 'Apache Setup' },
        { id: 'cloudflare-integration', title: 'Cloudflare Integration' },
        { id: 'aws-load-balancer', title: 'AWS Load Balancer' }
      ]
    },
    {
      id: 'firewall-security',
      title: '🔥 Firewall & Security',
      icon: Flame,
      items: [
        { id: 'iptables-configuration', title: 'iptables Configuration' },
        { id: 'ufw-setup', title: 'UFW Setup' },
        { id: 'pfsense-integration', title: 'pfSense Integration' },
        { id: 'cloud-security-groups', title: 'Cloud Security Groups' }
      ]
    },
    {
      id: 'dashboard-monitoring',
      title: '📊 Dashboard & Monitoring',
      icon: BarChart3,
      items: [
        { id: 'real-time-analytics', title: 'Real-time Analytics' },
        { id: 'alert-configuration', title: 'Alert Configuration' },
        { id: 'custom-webhooks', title: 'Custom Webhooks' },
        { id: 'api-reference', title: 'API Reference' }
      ]
    },
    {
      id: 'advanced-configuration',
      title: '🔧 Advanced Configuration',
      icon: Wrench,
      items: [
        { id: 'custom-rules', title: 'Custom Rules' },
        { id: 'ml-model-tuning', title: 'ML Model Tuning' },
        { id: 'performance-optimization', title: 'Performance Optimization' },
        { id: 'troubleshooting', title: 'Troubleshooting' }
      ]
    },
    {
      id: 'faq-support',
      title: '❓ FAQ & Support',
      icon: HelpCircle,
      items: [
        { id: 'common-issues', title: 'Common Issues' },
        { id: 'performance-tips', title: 'Performance Tips' },
        { id: 'contact-support', title: 'Contact Support' }
      ]
    }
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        className={`hidden lg:block w-80 bg-[rgba(15,15,20,0.9)] backdrop-blur-sm border-r border-[rgba(139,92,246,0.2)] flex-shrink-0 overflow-y-auto`}
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          {/* Documentation Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <Book className="w-6 h-6 text-[#00ff88]" />
              <h2 className="text-xl font-bold text-white">DOCUMENTATION</h2>
            </div>
            <p className="text-sm text-[#a0a9c0]">Complete implementation guide</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            {navigationSections.map((section) => (
              <div key={section.id} className="space-y-1">
                {/* Section Header */}
                <motion.button
                  className="flex items-center justify-between w-full p-3 text-left rounded-lg hover:bg-[rgba(139,92,246,0.1)] transition-all duration-200 group"
                  onClick={() => toggleSection(section.id)}
                  whileHover={{ x: 2 }}
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-5 h-5 text-[#00ff88] group-hover:text-[#00d4ff] transition-colors" />
                    <span className="font-semibold text-white group-hover:text-[#00ff88] text-sm">
                      {section.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSections.includes(section.id) ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4 text-[#a0a9c0]" />
                  </motion.div>
                </motion.button>

                {/* Section Items */}
                <AnimatePresence>
                  {expandedSections.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 space-y-1 overflow-hidden"
                    >
                      {section.items.map((item) => (
                        <motion.button
                          key={item.id}
                          className={`block w-full text-left p-2 pl-6 rounded-lg text-sm transition-all duration-200 relative ${
                            activeSection === item.id
                              ? 'text-[#00ff88] bg-[rgba(0,255,136,0.1)] border-l-2 border-[#00ff88]'
                              : 'text-[#a0a9c0] hover:text-white hover:bg-[rgba(139,92,246,0.05)]'
                          }`}
                          onClick={() => setActiveSection(item.id)}
                          whileHover={{ x: 2 }}
                        >
                          {item.title}
                          {activeSection === item.id && (
                            <motion.div
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#00ff88] rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="lg:hidden fixed left-0 top-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[rgba(15,15,20,0.98)] backdrop-blur-sm border-r border-[rgba(139,92,246,0.2)] z-50 overflow-y-auto"
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 sm:p-6 pt-20 sm:pt-24">
              {/* Documentation Header */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-2">
                  <Book className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff88]" />
                  <h2 className="text-lg sm:text-xl font-bold text-white">DOCUMENTATION</h2>
                </div>
                <p className="text-xs sm:text-sm text-[#a0a9c0]">Complete implementation guide</p>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                {navigationSections.map((section) => (
                  <div key={section.id} className="space-y-1">
                    {/* Section Header */}
                    <motion.button
                      className="flex items-center justify-between w-full p-3 text-left rounded-lg hover:bg-[rgba(139,92,246,0.1)] transition-all duration-200 group"
                      onClick={() => toggleSection(section.id)}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3">
                        <section.icon className="w-5 h-5 text-[#00ff88] group-hover:text-[#00d4ff] transition-colors" />
                        <span className="font-semibold text-white group-hover:text-[#00ff88] text-sm">
                          {section.title}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedSections.includes(section.id) ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-4 h-4 text-[#a0a9c0]" />
                      </motion.div>
                    </motion.button>

                    {/* Section Items */}
                    <AnimatePresence>
                      {expandedSections.includes(section.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 space-y-1 overflow-hidden"
                        >
                          {section.items.map((item) => (
                            <motion.button
                              key={item.id}
                              className={`block w-full text-left p-2 pl-6 rounded-lg text-sm transition-all duration-200 relative ${
                                activeSection === item.id
                                  ? 'text-[#00ff88] bg-[rgba(0,255,136,0.1)] border-l-2 border-[#00ff88]'
                                  : 'text-[#a0a9c0] hover:text-white hover:bg-[rgba(139,92,246,0.05)]'
                              }`}
                              onClick={() => {
                                setActiveSection(item.id)
                                onClose()
                              }}
                              whileHover={{ x: 2 }}
                            >
                              {item.title}
                              {activeSection === item.id && (
                                <motion.div
                                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#00ff88] rounded-full"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                />
                              )}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default DocsSidebar
