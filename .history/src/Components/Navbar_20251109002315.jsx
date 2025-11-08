import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0c10]/80 backdrop-blur-md text-[#f4a261] z-50 border-b border-[#f4a261]/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-[#f4a261]">AG</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-[#f4a261] transition-all duration-300"
            >
              {l}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#f4a261]"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0b0c10] border-t border-[#f4a261]/10 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-gray-300 hover:text-[#f4a261]"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
