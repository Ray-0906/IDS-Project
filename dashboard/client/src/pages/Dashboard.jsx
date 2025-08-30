import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { Shield, Zap, Activity, Settings } from 'lucide-react'

function Dashboard() {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    // Navigation will be handled by the AuthContext
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, {user?.fullName || 'User'}! 🛡️
            </h1>
            <p className="text-[#a0a9c0]">Your security dashboard is ready</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            className="bg-[rgba(21,21,32,0.8)] border border-[rgba(139,92,246,0.3)] rounded-xl p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-[#00ff88]" />
              <div>
                <p className="text-[#a0a9c0] text-sm">Threats Blocked</p>
                <p className="text-2xl font-bold text-white">1,247</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[rgba(21,21,32,0.8)] border border-[rgba(139,92,246,0.3)] rounded-xl p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-[#00d4ff]" />
              <div>
                <p className="text-[#a0a9c0] text-sm">Response Time</p>
                <p className="text-2xl font-bold text-white">12ms</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[rgba(21,21,32,0.8)] border border-[rgba(139,92,246,0.3)] rounded-xl p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3">
              <Activity className="w-8 h-8 text-[#8b5cf6]" />
              <div>
                <p className="text-[#a0a9c0] text-sm">Uptime</p>
                <p className="text-2xl font-bold text-white">99.9%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[rgba(21,21,32,0.8)] border border-[rgba(139,92,246,0.3)] rounded-xl p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3">
              <Settings className="w-8 h-8 text-[#ff6b35]" />
              <div>
                <p className="text-[#a0a9c0] text-sm">Active Rules</p>
                <p className="text-2xl font-bold text-white">42</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Message */}
        <motion.div
          className="bg-gradient-to-r from-[rgba(0,255,136,0.1)] to-[rgba(0,212,255,0.1)] border border-[rgba(0,255,136,0.3)] rounded-xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Shield className="w-16 h-16 text-[#00ff88] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            🎉 Authentication System is Working!
          </h2>
          <p className="text-[#a0a9c0] text-lg max-w-2xl mx-auto">
            Your login and signup functionality is now fully operational. Users can create accounts, 
            log in securely, and access protected routes. The authentication system includes JWT tokens, 
            protected routes, and automatic session management.
          </p>
          
          <div className="mt-6 text-sm text-[#a0a9c0]">
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>User ID:</strong> {user?.id || 'Generated on login'}</p>
            <p><strong>Account Created:</strong> {user?.createdAt || 'Today'}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Dashboard
