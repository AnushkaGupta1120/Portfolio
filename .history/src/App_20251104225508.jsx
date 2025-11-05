import { useState, useEffect } from 'react';
import Navbar from './components_temp/Navbar';
import Hero from './components_temp/Hero';
import About from './components_temp/About';
import Skills from './components_temp/Skills';
import Projects from './components_temp/Projects';
import Experience from './components_temp/Experience';
import Achievements from './components_temp/Achievements';
import Education from './components_temp/Education';
import Contact from './components_temp/Contact';
import Footer from './components_temp/Footer';
import ScrollToTop from './components_temp/ScrollToTop';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? JSON.parse(savedTheme) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
