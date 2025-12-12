import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ unlockScroll }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    unlockScroll(); // unlock page scroll when user navigates

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }, 50);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="container-max" style={{ paddingTop: "1rem" }}>
      <div className="navbar">
        <div
          className="brand"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo">AG</div>
          <div>
            <div style={{ fontWeight: 800 }}>Anushka Gupta</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              Full-Stack • Cloud • UI/UX
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links hidden md:flex">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)}>
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            marginTop: 12,
            borderRadius: 14,
            background: "rgba(255,255,255,0.02)",
            padding: 12,
            border: "1px solid rgba(255,255,255,0.03)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full text-left p-3"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
