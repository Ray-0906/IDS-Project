import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, Shield, Chrome, Github, CheckCircle, AlertTriangle, Loader2, Check, X } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  const navigate = useNavigate()
  const { signup } = useAuth()

  const calculatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[a-z]/.test(password)) strength += 25
    if (/[0-9]/.test(password)) strength += 15
    if (/[^A-Za-z0-9]/.test(password)) strength += 10
    return Math.min(strength, 100)
  }

  const getPasswordStrengthLabel = (strength) => {
    if (strength < 30) return { label: 'VULNERABLE', color: 'text-red-400', emoji: '🔴' }
    if (strength < 60) return { label: 'MODERATE', color: 'text-orange-400', emoji: '🟡' }
    if (strength < 80) return { label: 'STRONG', color: 'text-yellow-400', emoji: '🟢' }
    return { label: 'FORTRESS-LEVEL', color: 'text-[#00ff88]', emoji: '🛡️' }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms of Service'
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
      await signup(formData.fullName, formData.email, formData.password)
      setIsLoading(false)
      navigate('/dashboard')
    } catch (err) {
      setIsLoading(false)
      if (err.response && err.response.data && err.response.data.message) {
        setErrors({ general: err.response.data.message })
      } else {
        setErrors({ general: 'Signup failed. Please try again.' })
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }))
    
    // Calculate password strength
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value))
    }
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const strengthInfo = getPasswordStrengthLabel(passwordStrength)

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden relative">
      {/* Animated Background Effects - Same as Login */}
      <div className="absolute inset-0">
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
                JOIN THE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff] drop-shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                  CYBER REVOLUTION
                </span>
              </h1>
              <p className="text-xl text-[#a0a9c0] leading-relaxed">
                Start protecting your servers in 60 seconds with enterprise-grade AI security
              </p>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Shield, text: 'AI-Powered Threat Detection', color: 'text-[#00ff88]' },
                { icon: CheckCircle, text: 'One-Line Integration', color: 'text-[#00d4ff]' },
                { icon: Lock, text: 'Enterprise-Grade Security', color: 'text-[#8b5cf6]' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <span className="text-white font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonial */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-[#00ff88]/30 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-[#a0a9c0] italic mb-4">
                "Setup took 5 minutes. Blocked 500+ threats in the first week. Game changer!"
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">MR</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Marcus Rodriguez</div>
                  <div className="text-[#a0a9c0] text-sm">Lead DevOps Engineer</div>
                </div>
              </div>
            </motion.div>
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
                <h2 className="text-3xl font-bold text-white mb-2">Create Your Account</h2>
                <p className="text-[#a0a9c0]">Start protecting your servers in 60 seconds</p>
                
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

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#a0a9c0]">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-[#a0a9c0]" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 bg-[rgba(31,41,55,0.8)] border ${
                        errors.fullName 
                          ? 'border-[#ff073a] bg-[rgba(255,7,58,0.05)]' 
                          : 'border-[rgba(75,85,99,0.5)] focus:border-[#00d4ff]'
                      } rounded-xl text-white placeholder-[rgba(156,163,175,0.7)] focus:outline-none focus:ring-4 focus:ring-[rgba(0,212,255,0.1)] transition-all`}
                      placeholder="John Smith"
                    />
                  </div>
                  <AnimatePresence>
                    {errors.fullName && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center space-x-2 text-[#ff073a] text-sm"
                      >
                        <AlertTriangle className="w-4 h-4" />
                        <span>{errors.fullName}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

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
                      placeholder="john@company.com"
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
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#a0a9c0]">Password Strength</span>
                        <span className={`text-sm ${strengthInfo.color} flex items-center space-x-1`}>
                          <span>{strengthInfo.emoji}</span>
                          <span>{strengthInfo.label}</span>
                        </span>
                      </div>
                      <div className="w-full bg-[rgba(31,41,55,0.8)] rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${
                            passwordStrength < 30 ? 'bg-red-400' :
                            passwordStrength < 60 ? 'bg-orange-400' :
                            passwordStrength < 80 ? 'bg-yellow-400' : 'bg-[#00ff88]'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${passwordStrength}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  )}

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

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#a0a9c0]">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 w-5 h-5 text-[#a0a9c0]" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-12 py-4 bg-[rgba(31,41,55,0.8)] border ${
                        errors.confirmPassword 
                          ? 'border-[#ff073a] bg-[rgba(255,7,58,0.05)]' 
                          : formData.confirmPassword && formData.password === formData.confirmPassword
                          ? 'border-[#00ff88] bg-[rgba(0,255,136,0.05)]'
                          : 'border-[rgba(75,85,99,0.5)] focus:border-[#00d4ff]'
                      } rounded-xl text-white placeholder-[rgba(156,163,175,0.7)] focus:outline-none focus:ring-4 focus:ring-[rgba(0,212,255,0.1)] transition-all`}
                      placeholder="••••••••••••••••••"
                    />
                    <div className="absolute right-4 top-4 flex items-center space-x-2">
                      {formData.confirmPassword && (
                        <div className="text-sm">
                          {formData.password === formData.confirmPassword ? (
                            <Check className="w-4 h-4 text-[#00ff88]" />
                          ) : (
                            <X className="w-4 h-4 text-[#ff073a]" />
                          )}
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-[#a0a9c0] hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <AnimatePresence>
                    {errors.confirmPassword && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center space-x-2 text-[#ff073a] text-sm"
                      >
                        <AlertTriangle className="w-4 h-4" />
                        <span>{errors.confirmPassword}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Terms Agreement */}
                <div className="space-y-2">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 bg-[rgba(31,41,55,0.8)] border border-[rgba(75,85,99,0.5)] rounded focus:ring-2 focus:ring-[#00ff88] text-[#00ff88]"
                    />
                    <span className="text-sm text-[#a0a9c0] leading-relaxed">
                      I agree to the{' '}
                      <Link to="/terms" className="text-[#00ff88] hover:text-[#00d4ff] transition-colors">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-[#00ff88] hover:text-[#00d4ff] transition-colors">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  <AnimatePresence>
                    {errors.agreeToTerms && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex items-center space-x-2 text-[#ff073a] text-sm"
                      >
                        <AlertTriangle className="w-4 h-4" />
                        <span>{errors.agreeToTerms}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Signup Button */}
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
                      <span>Creating Secure Account...</span>
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      <span>CREATE SECURE ACCOUNT</span>
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

                {/* Social Signup Buttons */}
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

              {/* Switch to Login */}
              <div className="text-center mt-8">
                <p className="text-[#a0a9c0]">
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className="text-[#00ff88] hover:text-[#00d4ff] font-semibold transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,136,0.5)]"
                  >
                    Sign in
                  </Link>
                </p>
              </div>

              {/* Security Status */}
              <div className="mt-8 p-4 bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.3)] rounded-xl">
                <div className="flex items-center justify-center space-x-2 text-sm text-[#00ff88]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Zero-knowledge Architecture & GDPR Compliant</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Signup
