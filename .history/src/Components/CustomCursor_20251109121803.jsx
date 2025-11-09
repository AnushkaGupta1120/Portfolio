import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleThemeChange = () => {
      // Check if <html> currently has class "dark"
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Track cursor
    window.addEventListener("mousemove", handleMouseMove);
    // Track theme changes (whenever user toggles mode)
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial check
    handleThemeChange();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // 🎨 Cursor appearance based on theme (subtle + theme-aware)
  const cursorColor = isDarkMode
    ? "rgba(255, 255, 255, 0.5)" // white in dark mode
    : "rgba(255, 0, 0, 0.5)";   // red in light mode

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        left: position.x,
        top: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 40, // slower & smoother
        damping: 18,
      }}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: cursorColor,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
        transition: "background 0.3s ease",
      }}
    />
  );
}
