import { motion } from 'framer-motion'
import { useState } from 'react'

function MagneticButton({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  glow = false,
  ...props 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) * 0.3
    const y = (e.clientY - centerY) * 0.3
    
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
      text-white border-transparent
      ${glow ? 'shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40' : ''}
    `,
    secondary: `
      bg-white/10 dark:bg-black/10 backdrop-blur-sm
      border-white/20 dark:border-white/10
      text-gray-900 dark:text-white
      hover:bg-white/20 dark:hover:bg-white/20
      ${glow ? 'shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20' : ''}
    `,
    ghost: `
      bg-transparent border-2 border-gray-300 dark:border-gray-600
      text-gray-700 dark:text-gray-300
      hover:border-blue-500 dark:hover:border-blue-400
      hover:text-blue-600 dark:hover:text-blue-400
    `
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const baseClasses = `
    relative group font-semibold rounded-xl border transition-all duration-300
    transform-gpu will-change-transform
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `

  return (
    <motion.button
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5
      }}
      {...props}
    >
      {/* Glow effect */}
      {glow && (
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      )}
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={isHovered ? { translateX: "200%" } : { translateX: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
      
      {/* Content */}
      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  )
}

export default MagneticButton
