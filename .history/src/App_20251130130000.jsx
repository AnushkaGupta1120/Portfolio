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
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Always enable dark mode
    document.documentElement.classList.add("dark");

    // Check if device is mobile/tablet — disable custom cursor for them
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setShowCursor(!isMobile);
  }, []);

  // Show loading screen until fully loaded
  if (!isLoaded) {
    return <LoadingPage onLoaded={() => setIsLoaded(true)} />;
  }

  return (
    <div className={showCursor ? "cursor-none" : ""}>
      {/* Custom Cursor - Only show on desktop */}
      {showCursor && <CustomCursor />}

      {/* Navigation */}
      <Navbar />  {/* No darkMode props needed */}

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
