import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

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

  const eyeColor = isDarkMode ? "#FFFFFF" : "#0F172A";
  const pupilColor = isDarkMode ? "#FFFFFF" : "#0F172A";
  const glow = isDarkMode
    ? "drop-shadow(0 0 10px rgba(255,255,255,0.4))"
    : "drop-shadow(0 0 8px rgba(0,0,0,0.25))";

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        left: position.x,
        top: position.y,
        scale: isHovering ? 1.25 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        transform: "translate(-50%, -50%)",
        filter: glow,
      }}
    >
      {/* Eye SVG */}
      <svg
        width={isHovering ? 48 : 38}
        height={isHovering ? 48 : 38}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "all 0.2s ease",
          stroke: eyeColor,
          strokeWidth: 3,
        }}
      >
        {/* Outer eye shape */}
        <path
          d="M32 12C18 12 6 24 6 32C6 40 18 52 32 52C46 52 58 40 58 32C58 24 46 12 32 12Z"
          stroke={eyeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Pupil */}
        <circle cx="32" cy="32" r="6" fill={pupilColor} />
      </svg>
    </motion.div>
  );
}
