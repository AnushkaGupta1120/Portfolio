import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.dataset.cursor === 'skill') {
        setCursorType('skill');
        setCursorText(target.dataset.name);
      } else if (target.dataset.cursor === 'name') {
        setCursorType('name');
        setCursorText('👁️');
      } else if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorType('button');
        setCursorText('');
        target.classList.add('scale-105');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const getCursorStyle = () => {
    switch (cursorType) {
      case 'skill':
        return 'bg-white/80 text-black scale-125 shadow-lg';
      case 'name':
        return 'animate-pulse text-pink-500 scale-150';
      case 'button':
        return 'bg-blue-500/90 scale-[2] shadow-xl text-white';
      default:
        return 'bg-transparent';
    }
  };

  return (
    <>
      <div
        className={`fixed z-[9999] pointer-events-none transition-transform duration-100 ease-out flex flex-col items-center ${getCursorStyle()}`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Eye size={22} className="drop-shadow-[0_0_3px_rgba(0,0,0,0.3)] text-gray-200" />
        {cursorType === 'skill' && cursorText && (
          <span className="text-[10px] mt-1 text-gray-700 bg-white/80 px-1 py-0.5 rounded shadow-sm">
            {cursorText}
          </span>
        )}
      </div>

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