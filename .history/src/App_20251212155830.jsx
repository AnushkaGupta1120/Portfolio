import { useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GetMeACoffee from "./components/GetMeACoffee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Force dark mode on the entire site
    document.documentElement.classList.add("dark");

    // Disable custom cursor on mobile/tablet devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setShowCursor(!isMobile);
  }, []);

  // Show the loading page until assets & animations complete
  if (!isLoaded) {
    return <LoadingPage onLoaded={() => setIsLoaded(true)} />;
  }

  return (
    <div className={showCursor ? "cursor-none" : ""}>
      {/* Custom Cursor - Desktop Only */}
      {showCursor && <CustomCursor />}

      {/* Navbar Always in Dark Mode */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GetMeACoffee />
      <Contact />
      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
