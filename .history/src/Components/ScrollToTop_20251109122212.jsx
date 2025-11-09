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
        className="fixed bottom-8 right-8 
                   p-3 rounded-full 
                   bg-[#f4a261] dark:bg-[#f4a261] 
                   text-[#0b0c10] dark:text-[#0b0c10] 
                   shadow-lg hover:shadow-xl 
                   transition-all duration-300 
                   transform hover:scale-110 hover:-translate-y-2 
                   z-40"
      >
        <FiArrowUp className="w-6 h-6" />
      </button>
    )
  );
}
