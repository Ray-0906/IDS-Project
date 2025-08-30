import { createContext, useContext, useState, useEffect } from 'react'
import { axiosInstance } from '../utils/axios'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated by making a request to verify endpoint
    // Since we're using cookies, no need to check localStorage
    verifyAuth()
  }, [])

  const verifyAuth = async () => {
    try {
      const response = await axiosInstance.get('/auth/verify')
      setUser(response.data.user)
      setIsAuthenticated(true)
    } catch (error) {
      // User is not authenticated or session expired
      setUser(null)
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    const response = await axiosInstance.post('/auth/login', { email, password })
    const { user } = response.data
    
    // No need to store token - cookies are handled automatically
    setUser(user)
    setIsAuthenticated(true)
    
    return response.data
  }

  const signup = async (name, email, password) => {
    const response = await axiosInstance.post('/auth/register', {
       name,
      email,
      password,
    })
    const { user } = response.data
      console.log('Signup response user:', user)
    // No need to store token - cookies are handled automatically
    setUser(user)
    setIsAuthenticated(true)
    
    return response.data
  }

  const logout = async () => {
    try {
      // Call backend logout endpoint to clear server-side session/cookie
      await axiosInstance.post('/auth/logout')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear client-side state regardless of server response
      setUser(null)
      setIsAuthenticated(false)
    }
  }

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
