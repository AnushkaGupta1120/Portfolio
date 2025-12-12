import { useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";        // ← ADD THIS
import GetMeACoffee from "./components/GetMeACoffee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setShowCursor(!isMobile);
  }, []);

  if (!isLoaded) {
    return <LoadingPage onLoaded={() => setIsLoaded(true)} />;
  }

  return (
    <div className={showCursor ? "cursor-none" : ""}>
      {showCursor && <CustomCursor />}

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume /> {/* ← FIXED */}
      <GetMeACoffee />
      <Contact />
      <Footer />

      <Analytics />
    </div>
  );
}
