import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Shield, Menu, X, Search, Bell, ChevronDown } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState(2);
  const location = useLocation();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Product", href: "/product", hasDropdown: true },
    { label: "Features", href: "/features" },
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "h-[60px] bg-[rgba(10,10,15,0.95)]" 
            : "h-[70px] bg-[rgba(10,10,15,0.9)]"
        } backdrop-blur-[20px] border-b border-[rgba(0,255,136,0.2)]`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full w-full">
          <div className="flex items-center justify-between h-full w-full">
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Shield 
                  className={`w-8 h-8 text-white transition-all duration-300 group-hover:text-[#00ff88] ${
                    isScrolled ? "w-7 h-7" : "w-8 h-8"
                  }`}
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))",
                  }}
                />
                <div className="absolute inset-0 bg-[#00ff88] opacity-0 group-hover:opacity-20 rounded-full blur-lg transition-opacity duration-300"></div>
              </div>
              <NavLink
                to="/"
                className={`font-black tracking-[2px] text-white transition-all duration-300 group-hover:text-[#00ff88] ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}
                style={{
                  textShadow: "0 0 10px rgba(0, 255, 136, 0.3)",
                }}
              >
                CYBERGUARD
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  className="relative group"
                  whileHover={{ y: -2 }}
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `relative px-5 py-3 text-sm font-medium rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                        isActive
                          ? "text-[#00ff88] bg-[rgba(139,92,246,0.1)]"
                          : "text-white hover:text-[#00ff88] hover:bg-[rgba(139,92,246,0.1)]"
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] group-hover:w-full transition-all duration-200"></div>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:block p-2 text-white hover:text-[#00ff88] transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Notifications */}
              <motion.div
                className="hidden md:block relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button className="p-2 text-white hover:text-[#00ff88] transition-colors duration-200">
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <motion.span
                      className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      {notifications}
                    </motion.span>
                  )}
                </button>
              </motion.div>

              {/* Sign In Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className="hidden md:block px-4 py-2 text-sm font-medium text-white border border-[rgba(255,255,255,0.2)] rounded-lg hover:border-[#00ff88] hover:bg-[rgba(0,255,136,0.1)] transition-all duration-200"
                >
                  Sign In
                </Link>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signup"
                  className="hidden md:block px-6 py-2 text-sm font-bold text-black bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg hover:shadow-lg hover:shadow-[rgba(0,255,136,0.3)] transition-all duration-200"
                  style={{
                    animation: "pulse-glow 3s infinite"
                  }}
                >
                  Start Protecting
                </Link>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="md:hidden p-2 text-white hover:text-[#00ff88] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[rgba(10,10,15,0.98)] backdrop-blur-sm w-full h-full" />
            <motion.div
              className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-[rgba(10,10,15,0.98)] border-l border-[rgba(139,92,246,0.3)] p-6 pt-20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block py-4 px-6 text-lg font-bold border-b border-[rgba(139,92,246,0.2)] transition-all duration-200 ${
                          isActive
                            ? "text-[#00ff88] bg-[rgba(139,92,246,0.1)]"
                            : "text-white hover:text-[#00ff88] hover:bg-[rgba(139,92,246,0.1)]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                
                <div className="pt-6 space-y-4">
                  <Link
                    to="/login"
                    className="block w-full px-6 py-3 text-center text-white border border-[rgba(255,255,255,0.2)] rounded-lg hover:border-[#00ff88] hover:bg-[rgba(0,255,136,0.1)] transition-all duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full px-6 py-3 text-center text-black font-bold bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg hover:shadow-lg hover:shadow-[rgba(0,255,136,0.3)] transition-all duration-200"
                  >
                    Start Protecting
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[rgba(10,10,15,0.95)] backdrop-blur-sm flex items-start justify-center pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Search className="absolute left-4 top-4 w-6 h-6 text-[#00ff88]" />
                <input
                  type="text"
                  placeholder="Search documentation, features..."
                  className="w-full pl-12 pr-4 py-4 bg-[rgba(21,21,32,0.95)] border border-[rgba(139,92,246,0.3)] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff88] text-lg"
                  autoFocus
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
