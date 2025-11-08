import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isDarkUnderCursor, setIsDarkUnderCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect background color under cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const style = window.getComputedStyle(element);
        const bg = style.backgroundColor;

        // Parse rgb(r,g,b)
        const rgb = bg.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          const brightness =
            0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
          setIsDarkUnderCursor(brightness < 128); // dark if brightness < 128
        }
      }
    };

    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Eye color logic (based on detected brightness)
  const eyeColor = isDarkUnderCursor ? "#000000ff" : "#000000";
  const pupilColor = eyeColor;
  const shadow = isDarkUnderCursor
    ? "drop-shadow(0 0 6px rgba(255,255,255,0.3))"
    : "drop-shadow(0 0 4px rgba(0,0,0,0.3))";

  // Pupil movement calculation
  const calculatePupilOffset = (eyeX, eyeY) => {
    const dx = position.x - eyeX;
    const dy = position.y - eyeY;
    const angle = Math.atan2(dy, dx);
    const radius = 6; // how far pupils move inside the eye
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;
    return { x: offsetX, y: offsetY };
  };

  // Eye centers (inside SVG)
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
      {/* Two-Eye Cursor */}
      <svg
        width="78"
        height="62"
        viewBox="0 0 80 64"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: "all 0.15s ease" }}
      >
        {/* Left Eye */}
        <ellipse
          cx={leftEye.x}
          cy={leftEye.y}
          rx="14"
          ry="20"
          stroke={eyeColor}
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx={leftEye.x + offsetLeft.x}
          cy={leftEye.y + offsetLeft.y}
          r="5"
          fill={pupilColor}
        />

        {/* Right Eye */}
        <ellipse
          cx={rightEye.x}
          cy={rightEye.y}
          rx="14"
          ry="20"
          stroke={eyeColor}
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx={rightEye.x + offsetRight.x}
          cy={rightEye.y + offsetRight.y}
          r="5"
          fill={pupilColor}
        />
      </svg>
    </motion.div>
  );
}
