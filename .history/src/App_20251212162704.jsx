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
  // ALL HOOKS MUST BE AT THE TOP
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [scrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setShowCursor(!isMobile);
  }, []);

  useEffect(() => {
  if (scrollLocked) {
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
  } else {
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  }
}, [scrollLocked]);

  return (
    <div className={showCursor ? "cursor-none" : ""}>
      {showCursor && <CustomCursor />}

      <Navbar unlockScroll={() => setScrollLocked(false)} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <GetMeACoffee />
      <Contact />
      <Footer />

      <Analytics />
    </div>
  );
}
