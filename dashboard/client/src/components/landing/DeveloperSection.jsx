import { motion } from 'framer-motion';
import { Code2, Copy, GitBranch, BookOpen, Settings, Github, FileText, TrendingUp, Users, Star, Activity } from 'lucide-react';
import { useState } from 'react';
import ScrollAnimatedSection from '../ScrollAnimatedSection';
import GlassMorphCard from '../GlassMorphCard';
import MagneticButton from '../MagneticButton';

function DeveloperSection() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyCode = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const codeExamples = [
    {
      title: 'Python FastAPI',
      description: 'Add protection to your FastAPI application',
      icon: Code2,
      color: 'from-blue-400 to-indigo-500',
      code: `from fastapi import FastAPI
from ids_protection import setup_ids_protection

app = FastAPI()

# One line setup
setup_ids_protection(app, api_key="your_api_key")

@app.get("/protected-endpoint")
async def protected_route():
    return {"status": "protected", "data": "sensitive info"}`
    },
    {
      title: 'Node.js Express',
      description: 'Secure your Express.js routes instantly',
      icon: Code2,
      color: 'from-green-400 to-emerald-500',
      code: `const express = require('express');
const { setupIDSProtection } = require('ids-protection');

const app = express();

// One line setup
setupIDSProtection(app, { apiKey: 'your_api_key' });

app.get('/protected-endpoint', (req, res) => {
  res.json({ status: 'protected', data: 'sensitive info' });
});`
    },
    {
      title: 'Python Django',
      description: 'Coming soon - Django middleware integration',
      icon: Code2,
      color: 'from-purple-400 to-pink-500',
      code: `# COMING SOON
from django.shortcuts import render
from ids_protection.middleware import IDSMiddleware

# Add to MIDDLEWARE in settings.py
MIDDLEWARE = [
    'ids_protection.middleware.IDSMiddleware',
    # ... other middleware
]

IDS_SETTINGS = {
    'API_KEY': 'your_api_key',
    'DETECTION_MODE': 'strict'
}`
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Documentation',
      description: 'Step-by-step guides, API references, and integration examples',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Settings,
      title: 'Developer-Friendly API',
      description: 'RESTful endpoints with detailed responses and error handling',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: GitBranch,
      title: 'GitHub Integration',
      description: 'Easy integration with your CI/CD pipelines and workflows',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Github,
      title: 'Open Source Commitment',
      description: 'Core detection algorithms available on GitHub for transparency',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const stats = [
    { icon: Star, label: 'GitHub Stars', value: '2.3k', color: 'text-blue-400' },
    { icon: Users, label: 'Developers', value: '500+', color: 'text-green-400' },
    { icon: GitBranch, label: 'Contributors', value: '150', color: 'text-purple-400' },
    { icon: TrendingUp, label: 'Uptime', value: '99.1%', color: 'text-yellow-400' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <ScrollAnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <motion.h2 
              className="text-4xl lg:text-6xl font-black"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Built by Developers,{' '}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                for Developers
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Clean APIs, comprehensive docs, and seamless integration
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Code Examples */}
          <ScrollAnimatedSection>
            <div className="space-y-8">
              <motion.h3 
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Code2 className="w-8 h-8 text-blue-400" />
                Integration Examples
              </motion.h3>
              
              {codeExamples.map((example, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassMorphCard 
                    className="overflow-hidden group"
                    hover3D={true}
                    glowOnHover={true}
                  >
                    <div className={`bg-gradient-to-r ${example.color} p-0.5`}>
                      <div className="bg-slate-800/90 backdrop-blur-sm px-6 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <example.icon className="w-5 h-5 text-white" />
                          <div>
                            <h4 className="font-semibold text-white">{example.title}</h4>
                            <p className="text-sm text-gray-300">{example.description}</p>
                          </div>
                        </div>
                        <MagneticButton
                          onClick={() => copyCode(example.code, index)}
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                        >
                          <Copy className="w-4 h-4" />
                          {copiedIndex === index ? 'Copied!' : 'Copy'}
                        </MagneticButton>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-slate-900/50 backdrop-blur-sm">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code className="language-javascript">{example.code}</code>
                      </pre>
                    </div>
                  </GlassMorphCard>
                </motion.div>
              ))}
            </div>
          </ScrollAnimatedSection>

          {/* Developer Features */}
          <ScrollAnimatedSection>
            <div className="space-y-8">
              <motion.h3 
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Settings className="w-8 h-8 text-green-400" />
                Why Developers Love Us
              </motion.h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassMorphCard 
                      className="p-6 group"
                      hover3D={true}
                      glowOnHover={true}
                    >
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} shadow-lg`}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <feature.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="space-y-2 flex-1">
                          <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </GlassMorphCard>
                  </motion.div>
                ))}
              </div>

              {/* API Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <GlassMorphCard className="p-6" hover3D={true} glowOnHover={true}>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-semibold text-white">API Response Example</h4>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto bg-slate-900/50 rounded-lg p-4">
                    <code className="language-json">{`{
  "threat_detected": true,
  "threat_type": "sql_injection",
  "confidence": 0.972,
  "blocked": true,
  "timestamp": "2025-08-29T14:23:45Z",
  "request_id": "req_abc123xyz",
  "details": {
    "attack_vector": "parameter_injection",
    "malicious_payload": "'; DROP TABLE users; --",
    "source_ip": "192.168.1.100"
  }
}`}</code>
                  </pre>
                </GlassMorphCard>
              </motion.div>
            </div>
          </ScrollAnimatedSection>
        </div>

        {/* GitHub Stats */}
        <ScrollAnimatedSection>
          <GlassMorphCard className="p-8" hover3D={true} glowOnHover={true}>
            <div className="text-center space-y-6">
              <motion.h3 
                className="text-2xl font-bold text-white flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Github className="w-8 h-8 text-white" />
                Join Our Developer Community
              </motion.h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 mb-3"
                      whileHover={{ 
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        y: -2
                      }}
                    >
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </motion.div>
                    <div className={`text-3xl font-black ${stat.color} group-hover:scale-110 transition-transform`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <MagneticButton className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">View on GitHub</span>
                </MagneticButton>
                
                <MagneticButton className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">View Documentation</span>
                </MagneticButton>
              </motion.div>
            </div>
          </GlassMorphCard>
        </ScrollAnimatedSection>
      </div>
    </section>
  )
}

export default DeveloperSection
