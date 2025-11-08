import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleThemeChange = (e) => setIsDarkMode(e.matches);

    handleResize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
    };
  }, []);

  // Eye color and shadow depending on theme
  const eyeStroke = isDarkMode ? "#ffffff" : "#0f172a";
  const pupilFill = isDarkMode ? "#ffffff" : "#0f172a";
  const shadow = isDarkMode
    ? "drop-shadow(0 0 10px rgba(255,255,255,0.4))"
    : "drop-shadow(0 0 8px rgba(0,0,0,0.25))";

  // Eye position logic (small pupil movement)
  const calcOffset = (centerX, centerY) => {
    const dx = position.x - centerX;
    const dy = position.y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 6;
    if (dist === 0) return { x: 0, y: 0 };
    const ratio = Math.min(maxDist / dist, 1);
    return { x: dx * ratio, y: dy * ratio };
  };

  const eye1 = { cx: 24, cy: 32 };
  const eye2 = { cx: 56, cy: 32 };
  const offset1 = calcOffset(windowSize.width / 2, windowSize.height / 2);
  const offset2 = calcOffset(windowSize.width / 2 + 40, windowSize.height / 2);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        left: position.x,
        top: position.y,
        scale: 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 35 }}
      style={{
        transform: "translate(-50%, -50%)",
        filter: shadow,
      }}
    >
      {/* Two Eyes SVG */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 80 64"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "all 0.2s ease",
        }}
      >
        {/* Left Eye */}
        <ellipse
          cx={eye1.cx}
          cy={eye1.cy}
          rx="14"
          ry="20"
          stroke={eyeStroke}
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx={eye1.cx + offset1.x * 0.1}
          cy={eye1.cy + offset1.y * 0.1}
          r="5"
          fill={pupilFill}
        />

        {/* Right Eye */}
        <ellipse
          cx={eye2.cx}
          cy={eye2.cy}
          rx="14"
          ry="20"
          stroke={eyeStroke}
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx={eye2.cx + offset2.x * 0.1}
          cy={eye2.cy + offset2.y * 0.1}
          r="5"
          fill={pupilFill}
        />
      </svg>
    </motion.div>
  );
}
