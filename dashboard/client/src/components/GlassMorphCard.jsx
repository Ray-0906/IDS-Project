import { motion } from 'framer-motion'
import { useState } from 'react'

function GlassMorphCard({ 
  children, 
  className = '', 
  hover3D = false, 
  magnetic = false,
  glowOnHover = false,
  ...props 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!hover3D && !magnetic) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const baseClasses = `
    relative overflow-hidden rounded-2xl backdrop-blur-sm border transition-all duration-300
    bg-white/10 dark:bg-black/10 
    border-white/20 dark:border-white/10
    hover:bg-white/20 dark:hover:bg-white/20
    hover:border-white/30 dark:hover:border-white/20
    ${glowOnHover ? 'hover:shadow-2xl hover:shadow-blue-500/20' : ''}
    ${className}
  `

  const transform3D = hover3D && isHovered
    ? `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg) scale3d(1.05, 1.05, 1.05)`
    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'

  const transformMagnetic = magnetic && isHovered
    ? `translate(${mousePosition.x * 4}px, ${mousePosition.y * 4}px) scale(1.02)`
    : 'translate(0px, 0px) scale(1)'

  return (
    <motion.div
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        transform: hover3D ? transform3D : transformMagnetic
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      {...props}
    >
      {/* Shimmer effect */}
      {isHovered && (
        <div className="absolute inset-0 -top-2 -left-2">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%] blur-sm" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default GlassMorphCard
