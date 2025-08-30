import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import HeroSection from '../components/about/HeroSection'
import JourneyTimeline from '../components/about/JourneyTimeline'
import TeamSection from '../components/about/TeamSection'
import TechStackSection from '../components/about/TechStackSection'
import CompanyInfo from '../components/about/CompanyInfo'
import AchievementsSection from '../components/about/AchievementsSection'
import JoinMissionCTA from '../components/about/JoinMissionCTA'

function About() {
  return (
    <motion.div 
      className="min-h-screen bg-[#0a0a0f] transition-colors duration-500 w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-[70px] w-full">
        <HeroSection />
        <JourneyTimeline />
        <TeamSection />
        <TechStackSection />
        <CompanyInfo />
        <AchievementsSection />
        <JoinMissionCTA />
      </div>
    </motion.div>
  )
}

export default About
