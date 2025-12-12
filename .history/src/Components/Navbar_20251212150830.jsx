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
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
    { id: "about", label: "About Me" },
  ];

  return (
    <nav className="container-max" style={{paddingTop: '1rem'}}>
      <div className="navbar">
        <div className="brand" onClick={() => scrollToSection('home')} style={{cursor:'pointer'}}>
          <div className="logo">AG</div>
          <div>
            <div style={{fontWeight:800}}>Anushka Gupta</div>
            <div style={{fontSize:12, color:'var(--muted)'}}>Full-Stack • Cloud • UI/UX</div>
          </div>
        </div>

        <div className="nav-links hidden md:flex">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)}>
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md" aria-label="menu toggle">
            {menuOpen ? <FiX size={22} color="var(--white)" /> : <FiMenu size={22} color="var(--white)" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div style={{
            width:'90%', margin:'0 auto', marginTop:12, borderRadius:14,
            background:'rgba(255,255,255,0.02)', padding:12, border:'1px solid rgba(255,255,255,0.03)'
          }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => { scrollToSection(link.id); setMenuOpen(false); }}
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
