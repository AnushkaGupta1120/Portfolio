import { useEffect } from "react";
import "./LoadingPage.css";

export default function LoadingPage({ onLoaded }) {
  useEffect(() => {
    // Simulate loading delay (replace with actual data loading)
    const timer = setTimeout(() => {
      onLoaded();
    }, 3000); // 3 seconds loading time
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="loading-screen">
      <div className="loader">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
      <p className="loading-text">Loading Portfolio...</p>
    </div>
  );
}
