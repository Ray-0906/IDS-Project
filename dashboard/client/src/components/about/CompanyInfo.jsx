import { motion } from 'framer-motion'
import { MapPin, Mail, Twitter, Github, Clock, Heart, Target, Eye, Zap } from 'lucide-react'

function CompanyInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] relative overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" width="150" height="150" patternUnits="userSpaceOnUse">
              <g stroke="#00ff88" strokeWidth="0.5" fill="none">
                <circle cx="25" cy="25" r="2"/>
                <circle cx="125" cy="125" r="2"/>
                <path d="M25 25 L125 25 L125 125"/>
                <path d="M25 125 L75 125 L75 75 L125 75"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            FIND US IN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">DIGITAL REALM</span>
          </h2>
          <p className="text-xl text-[#a0a9c0] max-w-3xl mx-auto">
            We're a remote-first company with a global presence, united by our mission to secure the digital world.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#00ff88] mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <motion.div
              className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8 h-full hover:border-[#00ff88] transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#00ff88] mb-4"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(139, 92, 246, 0.3)",
                        "0 0 30px rgba(0, 255, 136, 0.3)",
                        "0 0 20px rgba(139, 92, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <MapPin className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">GLOBAL HEADQUARTERS</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-[rgba(0,0,0,0.2)]">
                    <MapPin className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">San Francisco, CA</p>
                      <p className="text-[#a0a9c0] text-sm">(Remote-first company)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-[rgba(0,0,0,0.2)]">
                    <Mail className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">hello@cyberguard.com</p>
                      <p className="text-[#a0a9c0] text-sm">General inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-[rgba(0,0,0,0.2)]">
                    <Twitter className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">@CyberGuardSaaS</p>
                      <p className="text-[#a0a9c0] text-sm">Follow our updates</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-[rgba(0,0,0,0.2)]">
                    <Github className="w-5 h-5 text-[#8b5cf6] flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">github.com/cyberguard</p>
                      <p className="text-[#a0a9c0] text-sm">Open source projects</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-[rgba(0,0,0,0.2)]">
                    <Clock className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">We're online 24/7</p>
                      <p className="text-[#a0a9c0] text-sm">(Threats don't sleep)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <motion.div
                className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(0,255,136,0.3)] rounded-2xl p-8 hover:border-[#00ff88] transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00ff88] transition-colors">
                      OUR MISSION
                    </h3>
                    <p className="text-lg text-[#a0a9c0] leading-relaxed">
                      "To make enterprise-grade cybersecurity accessible to every developer and business, 
                      regardless of size or budget. We believe security shouldn't be a luxury—it should be 
                      a fundamental right in the digital age."
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <motion.div
                className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(0,212,255,0.3)] rounded-2xl p-8 hover:border-[#00d4ff] transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors">
                      OUR VISION
                    </h3>
                    <p className="text-lg text-[#a0a9c0] leading-relaxed">
                      "A world where every application is protected by AI-powered security from day one. 
                      Where developers can focus on building amazing products without worrying about 
                      sophisticated cyber threats."
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Company Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
            WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#00ff88]">CYBERGUARD?</span>
          </h3>
          <p className="text-lg text-[#a0a9c0] max-w-2xl mx-auto">
            We're not just another cybersecurity company. We're on a mission to democratize digital security.
          </p>
        </motion.div>

        {/* Culture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: 'REMOTE-FIRST',
              description: 'Work from anywhere in the world. We believe in talent over location.',
              stats: '15+ countries represented'
            },
            {
              icon: Target,
              title: 'MISSION-DRIVEN',
              description: 'Every decision we make serves our mission to secure the digital world.',
              stats: '97.2% employee satisfaction'
            },
            {
              icon: Zap,
              title: 'INNOVATION-FOCUSED',
              description: 'We embrace cutting-edge technology and constantly push boundaries.',
              stats: '20% time for R&D projects'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-xl p-6 text-center hover:border-[#00ff88] transition-all duration-300 h-full"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[rgba(139,92,246,0.2)] to-[rgba(0,255,136,0.2)] mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-8 h-8 text-[#00ff88]" strokeWidth={1.5} />
                </motion.div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors">
                  {item.title}
                </h4>

                <p className="text-[#a0a9c0] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="text-sm font-semibold text-[#00d4ff] bg-[rgba(0,212,255,0.1)] px-3 py-1 rounded-full">
                  {item.stats}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo
