import { useEffect, useState } from "react";
import "./LoadingPage.css";

export default function LoadingPage({ onLoaded }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate load time (replace with real logic if needed)
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onLoaded(), 800); // Wait for fade-out animation
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      {/* Animated loader circles */}
      <div className="loader-circle">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
      </div>

      {/* Welcome message with typewriter effect */}
      <p className="loading-text welcome-text">Welcome to Anushka's Portfolio</p>
      <p className="loading-text">Loading Portfolio...</p>

      {/* Animated dots */}
      <div className="loading-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}