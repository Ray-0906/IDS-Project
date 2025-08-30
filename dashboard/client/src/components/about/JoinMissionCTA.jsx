import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, MessageCircle, ArrowRight, Sparkles } from 'lucide-react'

function JoinMissionCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0a0a0f] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating security icons */}
        {[Shield, Sparkles].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + i * 60}%`,
              top: `${30 + i * 40}%`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2
            }}
          >
            <Icon className="w-32 h-32 text-[#00ff88]" strokeWidth={0.5} />
          </motion.div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,255,136,0.1)] via-transparent to-[rgba(139,92,246,0.1)]" />

        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-circuit" width="200" height="200" patternUnits="userSpaceOnUse">
                <g stroke="#00ff88" strokeWidth="1" fill="none">
                  <circle cx="50" cy="50" r="3"/>
                  <circle cx="150" cy="150" r="3"/>
                  <path d="M50 50 L150 50 L150 150"/>
                  <path d="M50 150 L100 150 L100 100 L150 100"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-circuit)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#00ff88] mb-8"
            animate={{
              boxShadow: [
                "0 0 20px rgba(139, 92, 246, 0.3)",
                "0 0 40px rgba(0, 255, 136, 0.4)",
                "0 0 20px rgba(139, 92, 246, 0.3)"
              ],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Shield className="w-10 h-10 text-white" strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            JOIN THE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
              SECURITY REVOLUTION
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-[#a0a9c0] max-w-3xl mx-auto mb-4">
            Ready to secure your applications with enterprise-grade protection?
          </p>

          <p className="text-lg text-[#00ff88] font-semibold">
            Join <span className="text-[#00d4ff]">500+ developers</span> who chose protection over hope.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/signup"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(0,255,136,0.3)] min-w-[280px] justify-center"
            >
              <Shield className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              <span>START PROTECTING</span>
              <div className="ml-3 text-sm bg-black/20 px-2 py-1 rounded-full">
                FREE FOREVER
              </div>
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0, 255, 136, 0.4)",
                    "0 0 0 6px rgba(0, 255, 136, 0)",
                    "0 0 0 0 rgba(0, 255, 136, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="group relative inline-flex items-center px-8 py-4 border-2 border-[rgba(139,92,246,0.5)] text-white font-semibold rounded-2xl text-lg hover:border-[#8b5cf6] hover:bg-[rgba(139,92,246,0.1)] transition-all duration-300 min-w-[280px] justify-center">
              <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              <span>TALK TO OUR TEAM</span>
              <div className="ml-3 text-sm text-[#a0a9c0]">
                BOOK A CALL
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 text-[#a0a9c0] text-sm"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-3 h-3 bg-[#00ff88] rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Free Forever</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-3 h-3 bg-[#00d4ff] rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <span>No Credit Card Required</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-3 h-3 bg-[#8b5cf6] rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <span>Enterprise-Grade Security</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-3 h-3 bg-[#00ff88] rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
            <span>One-Line Integration</span>
          </div>
        </motion.div>

        {/* Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "500+", label: "Developers Trust Us", icon: "👨‍💻" },
            { number: "97.2%", label: "Detection Accuracy", icon: "🎯" },
            { number: "<85ms", label: "Response Time", icon: "⚡" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              className="text-center"
            >
              <motion.div
                className="text-4xl mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-2xl lg:text-3xl font-black text-[#00ff88] mb-1"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(0, 255, 136, 0.3)",
                    "0 0 20px rgba(0, 255, 136, 0.5)",
                    "0 0 10px rgba(0, 255, 136, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-[#a0a9c0] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 p-8 border border-[rgba(0,255,136,0.2)] rounded-2xl bg-[rgba(0,255,136,0.05)] max-w-4xl mx-auto"
        >
          <p className="text-xl text-white leading-relaxed mb-4">
            "Security isn't just about protecting code—it's about protecting dreams, 
            innovations, and the future we're building together."
          </p>
          <p className="text-[#00ff88] font-bold flex items-center justify-center space-x-2">
            <span>— The CyberGuard Team</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default JoinMissionCTA
