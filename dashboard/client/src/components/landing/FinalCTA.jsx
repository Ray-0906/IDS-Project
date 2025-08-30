import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Zap, DollarSign, Star, Lock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import ScrollAnimatedSection from '../ScrollAnimatedSection';
import GlassMorphCard from '../GlassMorphCard';
import MagneticButton from '../MagneticButton';

function FinalCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const trustIndicators = [
    {
      icon: Zap,
      title: 'Instant Setup',
      subtitle: 'One line of code',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: '97% Accuracy',
      subtitle: 'AI-powered detection',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: DollarSign,
      title: 'Free Forever',
      subtitle: 'No hidden costs',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const testimonials = [
    {
      message: "Blocked 12 SQL injections in the first day. This is incredible!",
      author: "Alex, Senior Developer",
      avatar: "👨‍💻"
    },
    {
      message: "Setup took literally 2 minutes. Our startup is now protected.",
      author: "Sarah, CTO",
      avatar: "👩‍💼"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30],
            x: [-20, 20],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Sparkle Effects */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: 360,
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollAnimatedSection>
          <div className="text-center space-y-6 mb-16">
            <motion.h2 
              className="text-4xl lg:text-7xl font-black"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Protect Your Servers in{' '}
              <motion.span 
                className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                60 Seconds
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join <span className="font-bold text-green-300">500+</span> developers who've already secured their applications. 
              Start blocking attacks today — <span className="font-bold text-yellow-300">completely free</span>.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        {/* Signup Form */}
        <ScrollAnimatedSection>
          <motion.div 
            className="max-w-lg mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {!isSubmitted ? (
              <GlassMorphCard className="p-8" hover3D={true} glowOnHover={true}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for instant API key"
                      className="flex-1 px-6 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-gray-900 font-medium placeholder-gray-500 border-0 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:bg-white transition-all duration-200"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                    <MagneticButton
                      type="submit"
                      className="group relative px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap overflow-hidden"
                    >
                      <motion.span 
                        className="relative z-10 flex items-center gap-2"
                        whileHover={{ x: 2 }}
                      >
                        Get Free API Key
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        whileHover={{ scale: 1.05 }}
                      />
                    </MagneticButton>
                  </div>
                  
                  <div className="text-sm text-blue-100 space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>No spam • Unsubscribe anytime</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>500+ happy developers already protecting their servers</span>
                    </div>
                  </div>
                </form>
              </GlassMorphCard>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <GlassMorphCard className="p-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <div className="text-2xl font-bold mb-3 text-green-300">Welcome aboard!</div>
                  <div className="text-green-100">
                    Check your email for your free API key and setup instructions.
                    You'll be protecting your servers in minutes!
                  </div>
                </GlassMorphCard>
              </motion.div>
            )}
          </motion.div>
        </ScrollAnimatedSection>

        {/* Trust Indicators */}
        <ScrollAnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {trustIndicators.map((indicator, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-4 justify-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`p-4 rounded-full bg-gradient-to-r ${indicator.color} shadow-lg group-hover:shadow-xl`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <indicator.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-left">
                  <div className="font-bold text-lg group-hover:text-blue-300 transition-colors">
                    {indicator.title}
                  </div>
                  <div className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors">
                    {indicator.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Social Proof */}
        <ScrollAnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassMorphCard className="p-8" hover3D={true} glowOnHover={true}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-left space-y-6">
                  <motion.h3 
                    className="text-2xl font-bold mb-6 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Star className="w-8 h-8 text-yellow-400" />
                    What developers are saying:
                  </motion.h3>
                  
                  <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-4 group"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <motion.div 
                          className="text-3xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {testimonial.avatar}
                        </motion.div>
                        <div className="text-sm space-y-2">
                          <div className="font-medium text-white group-hover:text-blue-300 transition-colors">
                            "{testimonial.message}"
                          </div>
                          <div className="text-blue-200 group-hover:text-blue-100 transition-colors">
                            - {testimonial.author}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div 
                    className="text-7xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text mb-4"
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    500+
                  </motion.div>
                  <div className="text-2xl font-bold mb-3">Protected Applications</div>
                  <div className="text-blue-200">Startups to enterprises trust our AI</div>
                  
                  {/* Animated Stats */}
                  <motion.div 
                    className="mt-6 flex justify-center gap-6 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="text-center">
                      <div className="font-bold text-green-400">99.8%</div>
                      <div className="text-blue-200">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-400">1.2M</div>
                      <div className="text-blue-200">Threats Blocked</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-purple-400">24/7</div>
                      <div className="text-blue-200">Protection</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </GlassMorphCard>
          </motion.div>
        </ScrollAnimatedSection>

        {/* Bottom guarantee */}
        <ScrollAnimatedSection>
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full backdrop-blur-sm border border-white/20 bg-white/5"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Lock className="w-6 h-6 text-green-400" />
              </motion.div>
              <span className="font-semibold">100% secure • GDPR compliant • No vendor lock-in</span>
            </motion.div>
          </motion.div>
        </ScrollAnimatedSection>
      </div>
    </section>
  )
}

export default FinalCTA
