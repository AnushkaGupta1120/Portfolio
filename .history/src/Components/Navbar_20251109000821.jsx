import { useState } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-navy/80 backdrop-blur-lg shadow-lg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-accent to-mutedIndigo bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          AG
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-softText hover:text-accent dark:hover:text-accent transition-all duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Theme & Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-indigoCard transition-transform transform hover:scale-110"
          >
            {darkMode ? <FiSun className="text-accent w-5 h-5" /> : <FiMoon className="text-accent w-5 h-5" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            {menuOpen ? <FiX className="w-6 h-6 text-accent" /> : <FiMenu className="w-6 h-6 text-accent" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-indigoCard px-4 py-3 space-y-2 shadow-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left py-2 text-gray-800 dark:text-light hover:text-accent transition"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
