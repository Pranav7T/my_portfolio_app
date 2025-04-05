import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary-800 dark:text-white">
          Pranav<span className="text-gray-700 dark:text-primary-400">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white transition-colors relative ${location.pathname === link.path ? 'font-semibold text-primary-800 dark:text-white' : ''}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span 
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-800 dark:bg-white mt-1"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="mr-4 text-gray-600 dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg"
      >
        <div className="container py-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white transition-colors ${location.pathname === link.path ? 'font-semibold text-primary-800 dark:text-white' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 