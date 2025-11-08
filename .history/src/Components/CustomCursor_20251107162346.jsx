import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a, button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleThemeChange = (e) => setIsDarkMode(e.matches);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
    };
  }, []);

  const cursorColor = isDarkMode ? "#ffffff" : "#0f172a"; // white for dark mode, navy for light
  const shadowColor = isDarkMode
    ? "rgba(255, 255, 255, 0.3)"
    : "rgba(15, 23, 42, 0.25)";

  return (
    <>
      {/* Eye cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] flex items-center justify-center"
        animate={{
          left: position.x,
          top: position.y,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          transform: "translate(-50%, -50%)",
          filter: `drop-shadow(0 0 10px ${shadowColor})`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={isHovering ? 50 : 40}
          height={isHovering ? 50 : 40}
          fill="none"
          stroke={cursorColor}
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="256" cy="256" rx="180" ry="100" />
          <circle cx="256" cy="256" r="60" fill={cursorColor} />
        </svg>
      </motion.div>
    </>
  );
}
