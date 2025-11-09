import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleThemeChange = (e) => setIsDarkMode(e.matches);

    window.addEventListener("mousemove", handleMouseMove);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
    };
  }, []);

  // 🎨 Cursor appearance based on theme
  const cursorColor = isDarkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 0, 0, 0.5)";
  const blurColor = isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 0, 0, 0.3)";

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        left: position.x,
        top: position.y,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      style={{
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        background: cursorColor,
        boxShadow: `0 0 20px 10px ${blurColor}`,
        backdropFilter: "blur(5px)",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
    />
  );
}
