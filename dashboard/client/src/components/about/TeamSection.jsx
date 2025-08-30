import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Globe, Lock, Zap, Users, Heart } from 'lucide-react'

function TeamSection() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      avatar: 'AC',
      bio: 'Former CISO at TechCorp. MIT Computer Science. 10+ years in cybersecurity.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      },
      gradient: 'from-[#8b5cf6] to-[#00d4ff]'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO & Co-Founder',
      avatar: 'SR',
      bio: 'Ex-Google ML Engineer. PhD in AI Security. Expert in threat detection algorithms.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      },
      gradient: 'from-[#00ff88] to-[#00d4ff]'
    },
    {
      name: 'Marcus Kim',
      role: 'Head of Security',
      avatar: 'MK',
      bio: '10+ years in penetration testing. CISSP certified. Former NSA security analyst.',
      social: {
        linkedin: '#',
        github: '#',
        website: '#'
      },
      gradient: 'from-[#00d4ff] to-[#8b5cf6]'
    }
  ]

  const coreValues = [
    {
      icon: Lock,
      title: 'SECURITY FIRST',
      description: 'Every decision starts with security impact',
      fullDescription: 'We prioritize security in every feature, every decision, and every line of code. No compromises.',
      color: '#8b5cf6'
    },
    {
      icon: Globe,
      title: 'ACCESSIBLE TO ALL',
      description: 'Enterprise security shouldn\'t be a luxury',
      fullDescription: 'Quality cybersecurity should be available to every developer and business, regardless of size or budget.',
      color: '#00ff88'
    },
    {
      icon: Zap,
      title: 'LIGHTNING FAST',
      description: 'Performance matters in threat detection',
      fullDescription: 'Sub-85ms response times because every millisecond counts when defending against cyber threats.',
      color: '#00d4ff'
    },
    {
      icon: Users,
      title: 'COMMUNITY DRIVEN',
      description: 'Built with and for the developer community',
      fullDescription: 'Our roadmap is shaped by real developer needs and feedback from our growing community.',
      color: '#00ff88'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff88] rounded-full opacity-40"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * 100 + '%'],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">CYBER GUARDIANS</span>
          </h2>
          <p className="text-xl text-[#a0a9c0] max-w-3xl mx-auto">
            A team of cybersecurity experts, AI researchers, and developers united by a mission to democratize digital security.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#00ff88] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-2xl p-8 h-full hover:border-[#00ff88] transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[rgba(0,255,136,0.1)]"
                whileHover={{ scale: 1.03, y: -10 }}
              >
                <div className="text-center space-y-6">
                  {/* Avatar */}
                  <div className="relative">
                    <motion.div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-2xl font-black text-white mx-auto group-hover:shadow-lg group-hover:shadow-[rgba(0,255,136,0.3)]`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {member.avatar}
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#00ff88]"
                      initial={{ scale: 1.2, opacity: 0 }}
                      whileHover={{ scale: 1.3, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#00d4ff] font-semibold mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-[#a0a9c0] leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        className="p-2 rounded-lg bg-[rgba(139,92,246,0.1)] text-[#a0a9c0] hover:text-white hover:bg-[rgba(139,92,246,0.2)] transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        className="p-2 rounded-lg bg-[rgba(139,92,246,0.1)] text-[#a0a9c0] hover:text-white hover:bg-[rgba(139,92,246,0.2)] transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        className="p-2 rounded-lg bg-[rgba(139,92,246,0.1)] text-[#a0a9c0] hover:text-white hover:bg-[rgba(139,92,246,0.2)] transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.website && (
                      <motion.a
                        href={member.social.website}
                        className="p-2 rounded-lg bg-[rgba(139,92,246,0.1)] text-[#a0a9c0] hover:text-white hover:bg-[rgba(139,92,246,0.2)] transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#00ff88]">CORE VALUES</span>
          </h3>
          <p className="text-lg text-[#a0a9c0] max-w-2xl mx-auto">
            The principles that guide every decision we make and every line of code we write.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-[rgba(21,21,32,0.8)] backdrop-blur-sm border border-[rgba(139,92,246,0.3)] rounded-xl p-6 h-full text-center hover:border-[#00ff88] transition-all duration-300 cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[rgba(139,92,246,0.2)] to-[rgba(0,255,136,0.2)] mb-4 group-hover:shadow-lg group-hover:shadow-[rgba(0,255,136,0.2)]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-8 h-8 text-[#00ff88]" strokeWidth={1.5} />
                </motion.div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors">
                  {value.title}
                </h4>

                {/* Short Description */}
                <p className="text-sm text-[#a0a9c0] leading-relaxed group-hover:opacity-0 transition-opacity duration-300">
                  {value.description}
                </p>

                {/* Full Description (appears on hover) */}
                <motion.div
                  className="absolute inset-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <p className="text-sm text-white leading-relaxed text-center">
                    {value.fullDescription}
                  </p>
                </motion.div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(139,92,246,0.1)] to-[rgba(0,255,136,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
