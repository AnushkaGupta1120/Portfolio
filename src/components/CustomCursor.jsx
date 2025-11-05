import { useEffect, useState } from 'react';
import { FiCode, FiZap, FiStar, FiHeart, FiCoffee } from 'react-icons/fi';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [iconIndex, setIconIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const icons = [
    <FiCode key="code" />,
    <FiZap key="zap" />,
    <FiStar key="star" />,
    <FiHeart key="heart" />,
    <FiCoffee key="coffee" />
  ];

  useEffect(() => {
    let lastTime = Date.now();
    let distanceMoved = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      const deltaTime = now - lastTime;
      
      if (deltaTime > 0) {
        const deltaX = e.clientX - position.x;
        const deltaY = e.clientY - position.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        distanceMoved += distance;
        
        // Change icon every 150 pixels moved
        if (distanceMoved > 150) {
          setIconIndex((prev) => (prev + 1) % icons.length);
          distanceMoved = 0;
        }
      }
      
      setPosition({ x: e.clientX, y: e.clientY });
      lastTime = now;
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [position]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`flex items-center justify-center transition-all duration-200 ${
            isHovering ? 'w-16 h-16' : 'w-12 h-12'
          }`}
        >
          <div
            className={`text-white transition-all duration-300 ${
              isHovering ? 'scale-150' : 'scale-100'
            }`}
            style={{ fontSize: '24px' }}
          >
            {icons[iconIndex]}
          </div>
        </div>
      </div>

      {/* Trailing dot */}
      <div
        className="fixed pointer-events-none z-[9998] w-2 h-2 bg-blue-500 rounded-full mix-blend-difference transition-all duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}