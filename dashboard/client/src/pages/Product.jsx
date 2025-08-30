import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import DeveloperSection from '../components/landing/DeveloperSection'

function Product() {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <div className="max-w-5xl mx-auto px-4">
            <motion.h1 
              className="text-6xl lg:text-7xl font-black text-white mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">Product</span>
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Advanced cybersecurity solutions powered by cutting-edge AI and machine learning technology designed for modern development teams
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-200">
                Start Free Trial
              </button>
              <button className="border border-[#00ff88] text-[#00ff88] font-bold px-8 py-4 rounded-xl hover:bg-[#00ff88]/10 transition-all duration-200">
                Watch Demo
              </button>
            </motion.div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20 bg-gradient-to-b from-[#0a0a0f]/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  What Makes Our Product <span className="text-[#00ff88]">Special</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Built from the ground up with developers in mind, our cybersecurity platform combines enterprise-grade protection with the simplicity your team needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#00ff88] rounded-full flex items-center justify-center">
                      <span className="text-black text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">Real-time threat detection with 97% accuracy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#00d4ff] rounded-full flex items-center justify-center">
                      <span className="text-black text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">Sub-85ms response time for instant protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">One-line integration with zero configuration</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 backdrop-blur-sm border border-[#00ff88]/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Live Threat Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">SQL Injections Blocked</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-400 font-bold">1,247</span>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">XSS Attempts Stopped</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-400 font-bold">892</span>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Brute Force Blocked</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400 font-bold">456</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Powerful Features for <span className="text-[#00ff88]">Modern Teams</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🤖",
                  title: "AI-Powered Detection",
                  description: "Advanced machine learning algorithms that continuously learn and adapt to new threat patterns",
                  color: "from-blue-500/20 to-blue-600/10"
                },
                {
                  icon: "⚡",
                  title: "Lightning Performance", 
                  description: "Sub-85ms response times ensure your applications stay fast while staying protected",
                  color: "from-yellow-500/20 to-orange-600/10"
                },
                {
                  icon: "🔧",
                  title: "Easy Integration",
                  description: "One-line setup with your existing codebase. No complex configuration required",
                  color: "from-green-500/20 to-emerald-600/10"
                },
                {
                  icon: "📊",
                  title: "Real-time Analytics",
                  description: "Live dashboards with detailed threat analysis and security insights",
                  color: "from-purple-500/20 to-indigo-600/10"
                },
                {
                  icon: "🛡️",
                  title: "Multi-layer Protection",
                  description: "Comprehensive security covering SQL injection, XSS, CSRF, and more attack vectors",
                  color: "from-red-500/20 to-pink-600/10"
                },
                {
                  icon: "🚀",
                  title: "Developer-First",
                  description: "Built by developers for developers with clean APIs and comprehensive documentation",
                  color: "from-cyan-500/20 to-teal-600/10"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-6 bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-gray-600/30 rounded-2xl hover:scale-105 transition-transform duration-300`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <DeveloperSection />

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-transparent to-[#0a0a0f]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">Secure Your App</span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Join thousands of developers who trust our platform to protect their applications
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-200">
                Start Free Trial
              </button>
              <button className="border border-[#00ff88] text-[#00ff88] font-bold px-8 py-4 rounded-xl hover:bg-[#00ff88]/10 transition-all duration-200">
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Product
