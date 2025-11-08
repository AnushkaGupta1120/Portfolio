import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleThemeChange = (e) => setIsDarkMode(e.matches);

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

  // Colors based on theme
  const eyeStroke = isDarkMode ? "#ffffff" : "#0f172a";
  const pupilFill = isDarkMode ? "#ffffff" : "#0f172a";
  const shadow = isDarkMode
    ? "drop-shadow(0 0 10px rgba(255,255,255,0.4))"
    : "drop-shadow(0 0 8px rgba(0,0,0,0.25))";

  // Function: calculate pupil offset inside each eye
  const calculatePupilOffset = (eyeX, eyeY) => {
    const dx = position.x - eyeX;
    const dy = position.y - eyeY;
    const angle = Math.atan2(dy, dx);

    // pupil movement limit within eye boundary
    const radius = 6;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    return { x: offsetX, y: offsetY };
  };

  // Define both eyes' center positions (relative inside SVG)
  const leftEye = { x: 25, y: 32 };
  const rightEye = { x: 55, y: 32 };

  const offsetLeft = calculatePupilOffset(
    windowSize.width / 2,
    windowSize.height / 2
  );
  const offsetRight = calculatePupilOffset(
    windowSize.width / 2 + 40,
    windowSize.height / 2
  );

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        left: position.x,
        top: position.y,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{
        transform: "translate(-50%, -50%)",
        filter: shadow,
      }}
    >
      <svg
        width="80"
        height="64"
        viewBox="0 0 80 64"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "all 0.2s ease",
        }}
      >
        {/* LEFT EYE */}
        <ellipse
          cx={leftEye.x}
          cy={leftEye.y}
          rx="14"
          ry="20"
          stroke={eyeStroke}
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx={leftEye.x + offsetLeft.x}
          cy={leftEye.y + offsetLeft.y}
          r="5"
          fill={pupilFill}
        />

        {/* RIGHT EYE */}
        <ellipse
          cx={rightEye.x}
          cy={rightEye.y}
          rx="14"
          ry="20"
          stroke={eyeStroke}
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx={rightEye.x + offsetRight.x}
          cy={rightEye.y + offsetRight.y}
          r="5"
          fill={pupilFill}
        />
      </svg>
    </motion.div>
  );
}
