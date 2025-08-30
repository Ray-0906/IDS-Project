import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimatedSection from '../ScrollAnimatedSection'
import GlassMorphCard from '../GlassMorphCard'
import MagneticButton from '../MagneticButton'
import { Key, Code, Shield, Clock, Copy, Check } from 'lucide-react'

function HowItWorks() {
  const [copiedCode, setCopiedCode] = useState(null)

  const steps = [
    {
      number: '1',
      title: 'Sign Up & Get API Key',
      duration: '30 seconds',
      description: 'Create your free account and get instant access to your API key',
      icon: Key,
      color: 'blue',
      bgGradient: 'from-blue-500/20 to-blue-600/10',
      borderGradient: 'border-blue-300/30 dark:border-blue-700/30'
    },
    {
      number: '2',
      title: 'Add One Line of Code',
      duration: '2 minutes',
      description: 'Integrate our protection with a single line in your application',
      icon: Code,
      color: 'green',
      bgGradient: 'from-green-500/20 to-green-600/10',
      borderGradient: 'border-green-300/30 dark:border-green-700/30'
    },
    {
      number: '3',
      title: 'Watch Threats Get Blocked',
      duration: 'immediately',
      description: 'Real-time protection starts working instantly with live monitoring',
      icon: Shield,
      color: 'purple',
      bgGradient: 'from-purple-500/20 to-purple-600/10',
      borderGradient: 'border-purple-300/30 dark:border-purple-700/30'
    }
  ]

  const codeExamples = [
    {
      language: 'Python FastAPI',
      code: `from fastapi import FastAPI
from ids_protection import setup_ids_protection

app = FastAPI()
setup_ids_protection(app, api_key="your_free_api_key")

@app.get("/")
def read_root():
    return {"message": "Protected endpoint"}`
    },
    {
      language: 'Node.js Express',
      code: `const express = require('express');
const { setupIDSProtection } = require('ids-protection');

const app = express();
setupIDSProtection(app, { apiKey: 'your_free_api_key' });

app.get('/', (req, res) => {
  res.json({ message: 'Protected endpoint' });
});`
    }
  ]

  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(index)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-950/80 border-t border-gray-200/30 dark:border-gray-800/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollAnimatedSection animation="fadeInUp" className="text-center space-y-8 mb-20">
          <motion.h2 
            className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Get Protected in{' '}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From signup to full protection in under 3 minutes
          </motion.p>

          {/* Time indicator */}
          <motion.div 
            className="flex items-center justify-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Setup Time: &lt;3 minutes</span>
          </motion.div>
        </ScrollAnimatedSection>

        {/* Steps */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative group"
            >
              {/* Enhanced Connector Line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-green-400/50 dark:from-blue-500/50 dark:via-purple-500/50 dark:to-green-500/50 z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}
              
              <GlassMorphCard 
                className={`relative z-10 h-full p-8 bg-gradient-to-br ${step.bgGradient} dark:${step.bgGradient.replace('500/20', '900/30').replace('600/10', '800/20')} ${step.borderGradient}`}
                hover3D
                glowOnHover
              >
                <div className="space-y-6">
                  {/* Step Number & Icon with enhanced effects */}
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-br ${
                        step.color === 'blue' ? 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500' :
                        step.color === 'green' ? 'from-green-500 to-green-600 dark:from-green-400 dark:to-green-500' :
                        'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500'
                      } text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-xl relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotateY: 15,
                        boxShadow: `0 20px 40px rgba(${
                          step.color === 'blue' ? '59, 130, 246' :
                          step.color === 'green' ? '34, 197, 94' :
                          '147, 51, 234'
                        }, 0.4)`
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {step.number}
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${
                        step.color === 'blue' ? 'from-blue-100 to-blue-200 dark:from-blue-800/50 dark:to-blue-700/50' :
                        step.color === 'green' ? 'from-green-100 to-green-200 dark:from-green-800/50 dark:to-green-700/50' :
                        'from-purple-100 to-purple-200 dark:from-purple-800/50 dark:to-purple-700/50'
                      }`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className={`w-8 h-8 ${
                        step.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        step.color === 'green' ? 'text-green-600 dark:text-green-400' :
                        'text-purple-600 dark:text-purple-400'
                      }`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    
                    <motion.div 
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                        step.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50' :
                        step.color === 'green' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700/50' :
                        'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      {step.duration}
                    </motion.div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Enhanced Step-specific visuals */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {index === 0 && (
                      <GlassMorphCard className="p-4 bg-white/50 dark:bg-gray-800/50">
                        <div className="text-center space-y-3">
                          <motion.div 
                            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full mx-auto flex items-center justify-center text-2xl text-white shadow-lg"
                            animate={{ rotateY: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          >
                            🔑
                          </motion.div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                            API_KEY_abc123xyz
                          </div>
                        </div>
                      </GlassMorphCard>
                    )}

                    {index === 1 && (
                      <GlassMorphCard className="p-3 bg-gray-900/90 dark:bg-gray-950/90 border border-gray-700/30">
                        <div className="font-mono text-xs space-y-1">
                          <motion.div 
                            className="text-green-400"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            + setup_ids_protection(app)
                          </motion.div>
                          <motion.div 
                            className="text-blue-400 flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              ✓
                            </motion.span>
                            <span>Integration complete</span>
                          </motion.div>
                        </div>
                      </GlassMorphCard>
                    )}

                    {index === 2 && (
                      <GlassMorphCard className="p-4 bg-white/50 dark:bg-gray-800/50">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Protection Status</span>
                          <div className="flex items-center space-x-2">
                            <motion.div 
                              className="w-3 h-3 bg-green-500 rounded-full"
                              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                            <span className="text-sm font-medium text-green-600 dark:text-green-400">Active & Protected</span>
                          </div>
                        </div>
                      </GlassMorphCard>
                    )}
                  </motion.div>
                </div>
              </GlassMorphCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Code Examples */}
        <ScrollAnimatedSection animation="fadeInUp">
          <GlassMorphCard className="p-8 bg-gray-900/95 dark:bg-gray-950/95 border border-gray-700/50">
            <div className="space-y-8">
              <motion.h3 
                className="text-3xl font-bold text-white text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Integration Examples
              </motion.h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {codeExamples.map((example, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  >
                    <GlassMorphCard className="p-6 bg-gray-800/80 border border-gray-600/30">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white">{example.language}</h4>
                        <MagneticButton
                          onClick={() => handleCopyCode(example.code, index)}
                          className="text-sm text-blue-400 hover:text-blue-300 border border-blue-500/30 px-3 py-1 rounded-lg flex items-center space-x-2 transition-all duration-200"
                        >
                          {copiedCode === index ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </MagneticButton>
                      </div>
                      
                      <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
                        <code className="language-javascript">{example.code}</code>
                      </pre>
                    </GlassMorphCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassMorphCard>
        </ScrollAnimatedSection>

        {/* Enhanced Bottom CTA */}
        <ScrollAnimatedSection animation="fadeInUp" className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticButton className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 dark:from-green-400 dark:to-blue-400 text-white px-12 py-5 text-xl font-bold rounded-2xl shadow-2xl">
              Start Your 30-Second Setup
              <motion.span 
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </MagneticButton>
          </motion.div>
        </ScrollAnimatedSection>
      </div>
    </section>
  )
}

export default HowItWorks
