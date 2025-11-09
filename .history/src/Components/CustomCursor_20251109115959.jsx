import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes"; // 👈 added

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme(); // 👈 get current theme

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🎨 react to your app's theme instantly
  const isDarkMode = theme === "dark";
  const cursorColor = isDarkMode ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 0, 0, 0.5)";
  const blurColor = isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 0, 0, 0.3)";

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{ left: position.x, top: position.y }}
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
