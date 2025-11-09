import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "coffee", label: "☕ Coffee" },
    { id: "contact", label: "Contact" },
  ];

  return (
<nav className="sticky top-0 z-50 flex justify-center">
      <div
        className="
          flex justify-between items-center 
          w-[90%] md:w-[85%] lg:w-[80%]
          px-6 py-3 rounded-2xl
          bg-gradient-to-r from-[#1a1446]/70 via-[#1c1b3b]/70 to-[#0b0c10]/70
          backdrop-blur-lg border border-[#2a2a4d]
          shadow-[0_8px_30px_rgba(88,63,190,0.25)]
          transition-all duration-500 hover:shadow-[0_8px_40px_rgba(138,90,255,0.35)]
        "
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          AG
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(link.id)}
              className="font-medium text-gray-300 hover:text-[#f4a261] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-[#1e1d2b]/70 transition-all"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            absolute top-20 left-1/2 -translate-x-1/2
            w-[90%] md:w-[80%]
            bg-gradient-to-r from-[#1a1446]/90 to-[#0b0c10]/90
            backdrop-blur-lg border border-[#2a2a4d]
            rounded-2xl shadow-[0_8px_30px_rgba(88,63,190,0.25)]
            py-4 space-y-3 text-center
          "
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full font-medium text-gray-300 hover:text-[#f4a261] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
