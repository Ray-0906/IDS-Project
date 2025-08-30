import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, Shield, Chrome, Github, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    threatsBlocked: 2847392,
    responseTime: 84,
    detectionRate: 89.8
  })

  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  // Animate security stats
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        ...prev,
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 5) + 1
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsLoading(true)
    setErrors({})
    try {
      await login(formData.email, formData.password)
      setIsLoading(false)
      navigate('/dashboard')
    } catch (err) {
      setIsLoading(false)
      if (err.response && err.response.data && err.response.data.message) {
        setErrors({ general: err.response.data.message })
      } else {
        setErrors({ general: 'Login failed. Please try again.' })
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden relative">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Animation */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, #8b5cf6 0%, #00d4ff 35%, #00ff88 70%, #8b5cf6 100%)',
            backgroundSize: '400% 400%'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff88]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Binary Code Streams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-[#00ff88]/20 font-mono text-xs"
            style={{
              left: `${10 + i * 12}%`,
              top: '-10%'
            }}
            animate={{
              y: ['0vh', '110vh']
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 20 }, () => Math.round(Math.random())).join('')}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen">
        
        {/* Left Side - Visual Section */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 relative">
          
          {/* Brand Logo */}
          <motion.div
            className="absolute top-12 left-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <Shield className="w-10 h-10 text-[#00ff88] drop-shadow-[0_0_10px_rgba(0,255,136,0.5)] group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-black text-white tracking-wider group-hover:text-[#00ff88] transition-colors">
                CYBERGUARD
              </span>
            </Link>
          </motion.div>

          {/* Main Content */}
          <div className="text-center space-y-8 max-w-lg">
            
            {/* Animated Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-black text-white mb-4 leading-tight">
                SECURE THE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff] drop-shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                  DIGITAL FRONTIER
                </span>
              </h1>
              <p className="text-xl text-[#a0a9c0] leading-relaxed">
                Join 15,000+ developers protecting their servers with AI-powered threat detection
              </p>
            </motion.div>

            {/* Animated Security Stats */}
            <motion.div
              className="grid grid-cols-1 gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-[#00ff88]/30 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-8 h-8 text-[#00ff88]" />
                  <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-black text-white mb-2">
                  {animatedStats.threatsBlocked.toLocaleString()}
                </div>
                <div className="text-[#a0a9c0] text-sm">Threats Blocked</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-[#00d4ff]/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#00d4ff] mb-1">
                    &lt;{animatedStats.responseTime}ms
                  </div>
                  <div className="text-[#a0a9c0] text-xs">Response Time</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#8b5cf6]/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#8b5cf6] mb-1">
                    {animatedStats.detectionRate}%
                  </div>
                  <div className="text-[#a0a9c0] text-xs">Detection Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Security Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                'ISO 27001 Certified',
                'SOC 2 Compliant', 
                '99.9% Uptime'
              ].map((badge, index) => (
                <div
                  key={badge}
                  className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-[#a0a9c0] text-sm hover:border-[#00ff88]/50 transition-colors cursor-pointer"
                >
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating Network Nodes */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-3 h-3 bg-[#00ff88]/40 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
          
          {/* Back to Home Button - Mobile */}
          <motion.div
            className="lg:hidden absolute top-8 left-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-[#00ff88] hover:text-[#00d4ff] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </motion.div>

          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            
            {/* Form Container */}
            <div className="bg-[rgba(21,21,32,0.8)] backdrop-blur-[20px] border border-[rgba(139,92,246,0.3)] rounded-3xl p-10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-[#a0a9c0]">Sign in to your security dashboard</p>
                
                {/* Back to Home Link - Desktop */}
                <motion.div 
                  className="hidden lg:block mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link 
                    to="/" 
                    className="inline-flex items-center space-x-2 text-sm text-[#a0a9c0] hover:text-[#00ff88] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Home</span>
                  </Link>
                </motion.div>
              </div>

              {/* General Error Message */}
              <AnimatePresence>
                {errors.general && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-center space-x-2 text-red-400">
                      <AlertTriangle className="w-5 h-5" />
                      <span className="text-sm">{errors.general}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#a0a9c0]">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-[#a0a9c0]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 bg-[rgba(31,41,55,0.8)] border ${
                        errors.email 
                          ? 'border-[#ff073a] bg-[rgba(255,7,58,0.05)]' 
                          : 'border-[rgba(75,85,99,0.5)] focus:border-[#00d4ff]'
                      } rounded-xl text-white placeholder-[rgba(156,163,175,0.7)] focus:outline-none focus:ring-4 focus:ring-[rgba(0,212,255,0.1)] transition-all`}
                      placeholder="example@company.com"
                    />
                  </div>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center space-x-2 text-[#ff073a] text-sm"
                      >
                        <AlertTriangle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#a0a9c0]">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 w-5 h-5 text-[#a0a9c0]" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-12 py-4 bg-[rgba(31,41,55,0.8)] border ${
                        errors.password 
                          ? 'border-[#ff073a] bg-[rgba(255,7,58,0.05)]' 
                          : 'border-[rgba(75,85,99,0.5)] focus:border-[#00d4ff]'
                      } rounded-xl text-white placeholder-[rgba(156,163,175,0.7)] focus:outline-none focus:ring-4 focus:ring-[rgba(0,212,255,0.1)] transition-all`}
                      placeholder="••••••••••••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 text-[#a0a9c0] hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.password && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center space-x-2 text-[#ff073a] text-sm"
                      >
                        <AlertTriangle className="w-4 h-4" />
                        <span>{errors.password}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 bg-[rgba(31,41,55,0.8)] border border-[rgba(75,85,99,0.5)] rounded focus:ring-2 focus:ring-[#00ff88] text-[#00ff88]"
                    />
                    <span className="text-sm text-[#a0a9c0]">Remember me</span>
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-[#00ff88] hover:text-[#00d4ff] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full h-14 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold rounded-xl shadow-[0_4px_15px_rgba(0,255,136,0.3)] hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(0,255,136,0.4)] transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Securing Connection...</span>
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      <span>SECURE LOGIN</span>
                    </>
                  )}
                </motion.button>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[rgba(75,85,99,0.3)]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[rgba(21,21,32,0.8)] text-[#a0a9c0]">OR</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center space-x-2 h-12 bg-[rgba(55,65,81,0.8)] border border-[rgba(75,85,99,0.5)] text-white rounded-xl hover:border-[#4285f4] hover:shadow-[0_0_10px_rgba(66,133,244,0.3)] transition-all"
                  >
                    <Chrome className="w-5 h-5" />
                    <span className="text-sm">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center space-x-2 h-12 bg-[rgba(55,65,81,0.8)] border border-[rgba(75,85,99,0.5)] text-white rounded-xl hover:border-[#333] hover:shadow-[0_0_10px_rgba(51,51,51,0.3)] transition-all"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">GitHub</span>
                  </button>
                </div>
              </form>

              {/* Switch to Signup */}
              <div className="text-center mt-8">
                <p className="text-[#a0a9c0]">
                  New here?{' '}
                  <Link 
                    to="/signup" 
                    className="text-[#00ff88] hover:text-[#00d4ff] font-semibold transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,136,0.5)]"
                  >
                    Create account
                  </Link>
                </p>
              </div>

              {/* Security Status */}
              <div className="mt-8 p-4 bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.3)] rounded-xl">
                <div className="flex items-center justify-center space-x-2 text-sm text-[#00ff88]">
                  <CheckCircle className="w-4 h-4" />
                  <span>256-bit SSL Encryption Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login
