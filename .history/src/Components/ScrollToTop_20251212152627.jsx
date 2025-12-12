import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 z-40 
                   p-3 rounded-full transition-all duration-300
                   hover:scale-110 hover:-translate-y-2"
        style={{
          background: "var(--teal-grad)",
          color: "#000",
          boxShadow: "0 0 20px rgba(0,255,198,0.45)",
        }}
      >
        <FiArrowUp
          className="w-6 h-6"
          style={{
            filter: "drop-shadow(0 0 6px rgba(0,255,198,0.6))",
          }}
        />
      </button>
    )
  );
}
