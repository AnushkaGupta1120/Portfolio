import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Check if device is mobile/tablet
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setShowCursor(!isMobile);

    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative">
      {/* Custom Cursor - Only show on desktop */}
      {showCursor && <CustomCursor />}
      
      {/* Hide default cursor on desktop */}
      <style>{`
        ${showCursor ? '* { cursor: none !important; }' : ''}
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AG
          </div>
          
          <div className="flex gap-6 items-center">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}