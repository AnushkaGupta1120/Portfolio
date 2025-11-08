import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [pupilOffset, setPupilOffset] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });
  const controls = useAnimation();
  const [lastMoveTime, setLastMoveTime] = useState(Date.now());

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setLastMoveTime(Date.now());

      // Calculate pupil direction based on mouse position
      const calcOffset = (eyeX, eyeY) => {
        const dx = e.clientX - eyeX;
        const dy = e.clientY - eyeY;
        const angle = Math.atan2(dy, dx);
        const radius = 5; // pupil movement range
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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const idleInterval = setInterval(() => {
      if (Date.now() - lastMoveTime > 1000) {
        // ease pupils back to center slowly
        setPupilOffset((prev) => ({
          left: { x: prev.left.x * 0.9, y: prev.left.y * 0.9 },
          right: { x: prev.right.x * 0.9, y: prev.right.y * 0.9 },
        }));
      }
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearInterval(idleInterval);
    };
  }, [windowSize, lastMoveTime]);

  // Cursor color and shadow (always black)
  const eyeColor = "#000000";
  const pupilColor = "#000000";
  const shadow = "drop-shadow(0 0 3px rgba(0,0,0,0.3))";

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
      {/* Two Eyes */}
      <svg
        width="64"  // 👁️ reduced size for a more subtle appearance
        height="50"
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
