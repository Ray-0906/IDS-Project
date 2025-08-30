import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimatedSection from '../ScrollAnimatedSection'
import GlassMorphCard from '../GlassMorphCard'
import { Shield, Users, Globe, Star, TrendingUp, CheckCircle, Award, Zap } from 'lucide-react'

function SocialProofSection() {
  const [liveStats, setLiveStats] = useState({
    threatsBlocked: 2847392,
    companies: 2500,
    developers: 15000
  })

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 3) + 1
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const companies = [
    { 
      name: 'TechFlow', 
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=center',
      industry: 'FinTech',
      employees: '500+'
    },
    { 
      name: 'CyberVault', 
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
      industry: 'Security',
      employees: '1000+'
    },
    { 
      name: 'DataCore', 
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop&crop=center',
      industry: 'Enterprise',
      employees: '2500+'
    },
    { 
      name: 'CloudSecure', 
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=60&fit=crop&crop=center',
      industry: 'Cloud',
      employees: '750+'
    },
    { 
      name: 'DevShield', 
      logo: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=120&h=60&fit=crop&crop=center',
      industry: 'DevOps',
      employees: '300+'
    },
    { 
      name: 'SecureAPI', 
      logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=120&h=60&fit=crop&crop=center',
      industry: 'API Security',
      employees: '450+'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Chief Security Officer',
      company: 'TechFlow Financial',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=80&h=80&fit=crop&crop=face',
      quote: 'Implemented CYBERGUARD across our entire microservices architecture. Blocked 15,000+ threats in the first month without a single false positive.',
      rating: 5,
      metrics: '99.7% accuracy'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead DevOps Engineer',
      company: 'CyberVault Solutions',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      quote: 'Integration took 5 minutes. Our development velocity increased 40% because security is now seamlessly built into our CI/CD pipeline.',
      rating: 5,
      metrics: '5min setup'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Engineering',
      company: 'DataCore Industries',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      quote: 'The AI-powered detection caught sophisticated attacks that our previous security stack completely missed. ROI was immediate.',
      rating: 5,
      metrics: '3x threat detection'
    }
  ]

  const achievements = [
    {
      icon: Shield,
      title: 'SOC 2 Type II Certified',
      description: 'Enterprise-grade security compliance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Best Security Innovation 2024',
      description: 'CyberSec Awards Winner',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: '99.9% Customer Satisfaction',
      description: 'Based on 2,500+ reviews',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: '500% Growth Rate',
      description: 'Fastest growing security platform',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0f] dark:to-[#1a1a2e] border-t border-gray-200/50 dark:border-[#00ff88]/20 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Live Statistics */}
        <ScrollAnimatedSection animation="fadeInUp" className="text-center space-y-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 dark:from-[#00ff88]/20 dark:to-[#00d4ff]/20 border border-[#00ff88]/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-semibold text-gray-700 dark:text-white">Trusted by Industry Leaders</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">15,000+</span> Developers
            <br />Who Trust Our Platform
          </motion.h2>
          
          {/* Live Statistics Dashboard */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassMorphCard className="p-6 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-[#00ff88]/30" hover3D>
              <div className="flex items-center justify-between mb-3">
                <Shield className="w-8 h-8 text-[#00ff88]" />
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                {liveStats.threatsBlocked.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Threats Blocked Today
              </div>
            </GlassMorphCard>

            <GlassMorphCard className="p-6 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-[#00d4ff]/30" hover3D>
              <div className="flex items-center justify-between mb-3">
                <Users className="w-8 h-8 text-[#00d4ff]" />
                <Zap className="w-4 h-4 text-yellow-500" />
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                {liveStats.developers.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Active Developers
              </div>
            </GlassMorphCard>

            <GlassMorphCard className="p-6 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-[#8b5cf6]/30" hover3D>
              <div className="flex items-center justify-between mb-3">
                <Globe className="w-8 h-8 text-[#8b5cf6]" />
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                {liveStats.companies.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Companies Protected
              </div>
            </GlassMorphCard>
          </motion.div>
        </ScrollAnimatedSection>

        {/* Company Logos - Professional Grid */}
        <ScrollAnimatedSection animation="fadeInUp" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-8">
              Protecting applications at companies worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <GlassMorphCard className="p-6 text-center bg-white/60 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[#00ff88]/50 transition-all duration-300">
                  <div className="w-16 h-8 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-lg mb-3 mx-auto flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{company.name}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{company.industry}</div>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-300">{company.employees}</div>
                </GlassMorphCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Customer Testimonials - Professional Cards */}
        <ScrollAnimatedSection animation="fadeInUp" className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Security Leaders Say
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <GlassMorphCard className="p-8 h-full bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 hover:border-[#00ff88]/50 dark:hover:border-[#00ff88]/50 transition-all duration-300" hover3D>
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm font-semibold text-[#00ff88]">{testimonial.metrics}</span>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-sm font-medium text-[#00ff88]">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </GlassMorphCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Achievements & Certifications */}
        <ScrollAnimatedSection animation="fadeInUp">
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Industry Recognition & Compliance
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <GlassMorphCard className="p-6 text-center bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 hover:border-[#00ff88]/50 transition-all duration-300" hover3D>
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </GlassMorphCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Trust Indicators */}
        <ScrollAnimatedSection animation="fadeInUp" className="mt-20">
          <GlassMorphCard className="p-8 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 dark:from-[#00ff88]/20 dark:to-[#00d4ff]/20 border border-[#00ff88]/30 dark:border-[#00ff88]/50" glowOnHover>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <CheckCircle className="w-8 h-8 text-[#00ff88] mx-auto mb-3" />
                <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Uptime SLA</div>
              </div>
              <div>
                <Shield className="w-8 h-8 text-[#00d4ff] mx-auto mb-3" />
                <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">SOC 2</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Certified</div>
              </div>
              <div>
                <Globe className="w-8 h-8 text-[#8b5cf6] mx-auto mb-3" />
                <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">GDPR</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Compliant</div>
              </div>
              <div>
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">ISO 27001</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Certified</div>
              </div>
            </div>
          </GlassMorphCard>
        </ScrollAnimatedSection>
      </div>
    </section>
  )
}

export default SocialProofSection
