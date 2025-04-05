import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub size={20} />, url: 'https://github.com/Pranav7T' },
    { name: 'LinkedIn', icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/pranav-sononi-4804782a2' },
    { name: 'Email', icon: <FiMail size={20} />, url: 'mailto:sononipranav@gmail.com' }
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary-800 dark:text-white">
              Pranav<span className="text-gray-700 dark:text-primary-400">.dev</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Tech professional with a BCA (9.0 GPA), passionate about crafting responsive and user-friendly web applications with modern tech stacks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Pranav Sononi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 