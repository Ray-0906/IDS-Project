import { motion } from 'framer-motion'
import { Award, Shield, CheckCircle, Star, Zap, Users } from 'lucide-react'

function AchievementsSection() {
  const certifications = [
    {
      icon: Award,
      title: 'SOC 2 Type II',
      subtitle: 'Certified',
      description: 'Comprehensive security controls audit',
      badge: '🏆'
    },
    {
      icon: Shield,
      title: 'ISO 27001',
      subtitle: 'Certified',
      description: 'Information security management',
      badge: '🛡️'
    },
    {
      icon: CheckCircle,
      title: 'GDPR',
      subtitle: 'Ready',
      description: 'European data protection compliance',
      badge: '🔒'
    },
    {
      icon: Star,
      title: '500+',
      subtitle: 'GitHub Stars',
      description: 'Open source community recognition',
      badge: '⭐'
    }
  ]

  const pressFeatures = [
    {
      outlet: 'TechCrunch',
      headline: '"The Future of Accessible Cybersecurity"',
      date: 'December 2024',
      logo: 'TC',
      gradient: 'from-[#00FF7F] to-[#32CD32]'
    },
    {
      outlet: 'Hacker News',
      headline: 'Front Page Feature - "AI Security for Everyone"',
      date: 'November 2024',
      logo: 'HN',
      gradient: 'from-[#FF6600] to-[#FF4500]'
    },
    {
      outlet: 'Security Magazine',
      headline: '"Democratizing Enterprise Security"',
      date: 'October 2024',
      logo: 'SM',
      gradient: 'from-[#8b5cf6] to-[#00d4ff]'
    },
    {
      outlet: 'Dev.to',
      headline: 'Community Choice Award Winner',
      date: 'September 2024',
      logo: 'DT',
      gradient: 'from-[#00ff88] to-[#00d4ff]'
    }
  ]

  const communityStats = [
    { number: '500+', label: 'Developers\nProtected', icon: Users },
    { number: '2.8M+', label: 'Threats\nNeutralized', icon: Shield },
    { number: '97.2%', label: 'Detection\nAccuracy', icon: Zap },
    { number: '24/7', label: 'Uptime\nMonitoring', icon: CheckCircle }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] relative overflow-hidden">
      {/* Animated Trophy Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 2
            }}
          >
            <Award className="w-16 h-16 text-[#00ff88]" strokeWidth={0.5} />
          </motion.div>
        ))}
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
            SECURITY EXCELLENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">RECOGNIZED</span>
          </h2>
          <p className="text-xl text-[#a0a9c0] max-w-3xl mx-auto">
            Industry certifications, community recognition, and press coverage that validates our commitment to security.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#00ff88] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-6 text-center hover:border-[#00ff88] transition-all duration-300 h-full"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0, 255, 136, 0)",
                    "0 0 20px 0 rgba(0, 255, 136, 0.1)",
                    "0 0 0 0 rgba(0, 255, 136, 0)"
                  ]
                }}
                transition={{
                  boxShadow: { duration: 4, repeat: Infinity, delay: index * 0.5 },
                  scale: { duration: 0.3 },
                  y: { duration: 0.3 }
                }}
              >
                {/* Badge Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {cert.badge}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(139,92,246,0.2)] to-[rgba(0,255,136,0.2)] mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <cert.icon className="w-6 h-6 text-[#00ff88]" strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00ff88] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[#00d4ff] font-semibold text-sm mb-3">
                  {cert.subtitle}
                </p>
                <p className="text-[#a0a9c0] text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Verification Link */}
                <motion.button
                  className="mt-4 text-xs text-[#00ff88] hover:text-[#00d4ff] transition-colors opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.05 }}
                >
                  View Certificate →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Press & Media Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
              AS FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#00ff88]">IN</span>
            </h3>
            <p className="text-lg text-[#a0a9c0] max-w-2xl mx-auto">
              Industry recognition and media coverage highlighting our innovative approach to cybersecurity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-xl p-6 hover:border-[#00ff88] transition-all duration-300 h-full"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  {/* Logo */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center font-bold text-white text-sm`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.logo}
                    </motion.div>
                    <span className="text-xs text-[#a0a9c0]">{feature.date}</span>
                  </div>

                  {/* Outlet Name */}
                  <h4 className="font-semibold text-white mb-2 group-hover:text-[#00ff88] transition-colors">
                    {feature.outlet}
                  </h4>

                  {/* Headline */}
                  <p className="text-sm text-[#a0a9c0] leading-relaxed group-hover:text-white transition-colors">
                    {feature.headline}
                  </p>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[rgba(0,255,136,0.05)] to-[rgba(0,212,255,0.05)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
              COMMUNITY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">IMPACT</span>
            </h3>
            <p className="text-lg text-[#a0a9c0] max-w-2xl mx-auto">
              Real numbers from our growing community of developers who trust us with their security.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[rgba(139,92,246,0.2)] to-[rgba(0,255,136,0.2)] mb-4 group-hover:shadow-lg group-hover:shadow-[rgba(0,255,136,0.2)]"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-[#00ff88]" strokeWidth={1.5} />
                </motion.div>

                <motion.div
                  className="text-3xl lg:text-4xl font-black text-[#00ff88] mb-2 group-hover:text-[#00d4ff] transition-colors"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(0, 255, 136, 0.3)",
                      "0 0 25px rgba(0, 255, 136, 0.5)",
                      "0 0 10px rgba(0, 255, 136, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>

                <p className="text-sm text-[#a0a9c0] font-medium whitespace-pre-line">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Community Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12 p-6 border border-[rgba(0,255,136,0.2)] rounded-xl bg-[rgba(0,255,136,0.05)]"
          >
            <p className="text-lg text-[#a0a9c0] italic mb-4">
              "CyberGuard has revolutionized how we think about security. Finally, a solution that doesn't require a PhD in cybersecurity to implement."
            </p>
            <p className="text-[#00ff88] font-semibold">
              - Developer Community Feedback
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection
