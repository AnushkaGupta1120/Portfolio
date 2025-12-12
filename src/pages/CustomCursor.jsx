import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // Update cursor position instantly
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Detect theme change (when user toggles 🌞 / 🌙)
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Observe <html> for dark class change
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // 🎨 Cursor color (based on theme)
  const cursorColor = isDarkMode
    ? "rgba(255, 255, 255, 0.8)" // white in dark mode
    : "rgba(255, 0, 0, 0.7)";   // red in light mode

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: cursorColor,
        transform: "translate(-50%, -50%)",
        transition: "background 0.3s ease", // smooth color switch when toggling mode
      }}
    />
  );
}
