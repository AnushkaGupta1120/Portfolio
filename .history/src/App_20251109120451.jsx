import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import LoadingPage from "./components/LoadingPage";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? true : false;
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setShowCursor(!isMobile);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (!isLoaded) return <LoadingPage onLoaded={() => setIsLoaded(true)} />;

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-[#0b0c10] text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
        {showCursor && <CustomCursor />}

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </main>
      </div>
    </div>
  );
}
