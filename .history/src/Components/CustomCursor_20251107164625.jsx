import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [pupilOffset, setPupilOffset] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [lastMoveTime, setLastMoveTime] = useState(Date.now());

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setLastMoveTime(Date.now());

      const calcOffset = (eyeX, eyeY) => {
        const dx = e.clientX - eyeX;
        const dy = e.clientY - eyeY;
        const angle = Math.atan2(dy, dx);
        const radius = 5; // pupil movement limit
        return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
      };

      const centerLeft = { x: windowSize.width / 2 - 20, y: windowSize.height / 2 };
      const centerRight = { x: windowSize.width / 2 + 20, y: windowSize.height / 2 };

      setPupilOffset({
        left: calcOffset(centerLeft.x, centerLeft.y),
        right: calcOffset(centerRight.x, centerRight.y),
      });
    };

    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleThemeChange = (e) => setIsDarkMode(e.matches);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);

    const idleInterval = setInterval(() => {
      if (Date.now() - lastMoveTime > 1000) {
        // ease pupils back to center gradually
        setPupilOffset((prev) => ({
          left: { x: prev.left.x * 0.9, y: prev.left.y * 0.9 },
          right: { x: prev.right.x * 0.9, y: prev.right.y * 0.9 },
        }));
      }
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
      clearInterval(idleInterval);
    };
  }, [windowSize, lastMoveTime]);

  // 🎨 Dynamic colors based on dark/light mode
  const eyeColor = isDarkMode ? "#000000" : "#000000";
  const pupilColor = isDarkMode ? "#000000" : "#000000";
  const shadow = isDarkMode
    ? "drop-shadow(0 0 5px rgba(255,255,255,0.25))"
    : "drop-shadow(0 0 3px rgba(0,0,0,0.25))";

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
      {/* Dual Eyes */}
      <svg
        width="62" // smaller refined size
        height="48"
        viewBox="0 0 80 64"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "all 0.2s ease",
        }}
      >
        {/* Left Eye */}
        <ellipse
          cx="25"
          cy="32"
          rx="13"
          ry="18"
          stroke={eyeColor}
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx={25 + pupilOffset.left.x}
          cy={32 + pupilOffset.left.y}
          r="4"
          fill={pupilColor}
        />

        {/* Right Eye */}
        <ellipse
          cx="55"
          cy="32"
          rx="13"
          ry="18"
          stroke={eyeColor}
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx={55 + pupilOffset.right.x}
          cy={32 + pupilOffset.right.y}
          r="4"
          fill={pupilColor}
        />
      </svg>
    </motion.div>
  );
}
