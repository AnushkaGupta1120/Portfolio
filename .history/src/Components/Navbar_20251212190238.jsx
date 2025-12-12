import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/achievements", label: "Achievements" },
    { to: "/education", label: "Education" },
    { to: "/resume", label: "Resume" },
    { to: "/coffee", label: "Get Me a Coffee" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="container-max" style={{ paddingTop: "1rem" }}>
      <div className="navbar">
        
        {/* Brand */}
        <NavLink to="/" className="brand" style={{ cursor: "pointer" }}>
          <div className="logo">AG</div>
          <div>
            <div style={{ fontWeight: 800 }}>Anushka Gupta</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              AI • Cloud • Full-Stack
            </div>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="nav-links hidden md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "active-nav-link" : ""
              }
            >
              {link.label}
            </NavLink>
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
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="w-full text-left p-3"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
