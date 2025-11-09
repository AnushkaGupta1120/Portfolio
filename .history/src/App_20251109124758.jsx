import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GetMeACoffee from './components/GetMeACoffee';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Default to dark mode if nothing is saved
    return savedTheme ? savedTheme === "dark" : true;
  });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Check if device is mobile/tablet
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setShowCursor(!isMobile);

    // Apply dark mode class to html
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Show loading screen until fully loaded
  if (!isLoaded) {
    return <LoadingPage onLoaded={() => setIsLoaded(true)} />;
  }

  return (
    <div className={showCursor ? "cursor-none" : ""}>
      {/* Custom Cursor - Only show on desktop */}
      {showCursor && <CustomCursor />}

      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GetMeACoffee />
      <Contact />
      <Footer />
    </div>
  );
}
