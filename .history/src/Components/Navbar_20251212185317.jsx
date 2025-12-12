import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ unlockScroll }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  const navRef = useRef(null);
  const linksRef = useRef(null);

  const scrollToSection = (id) => {
    if (unlockScroll) unlockScroll(); // optional
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  // Detect overflow -> enable hamburger menu
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    setShowHamburger(linksRef.current.scrollWidth > navRef.current.offsetWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <>
      {/* Top navbar */}
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          background: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Branding */}
        <div
          onClick={() => scrollToSection("hero")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              background: "var(--accent)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              fontWeight: "bold",
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#000",
            }}
          >
            AG
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>
              Anushka Gupta
            </h1>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              Full-Stack • Cloud • UI/UX
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div
          ref={linksRef}
          style={{
            display: showHamburger ? "none" : "flex",
            gap: "2rem",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {navLinks.map((l) => (
            <motion.button
              key={l.id}
              onClick={() => scrollToSection(l.id)}
              whileHover={{ scale: 1.12, color: "var(--accent)" }}
              transition={{ duration: 0.2 }}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              {l.label}
            </motion.button>
          ))}
        </div>

        {/* Hamburger menu */}
        {showHamburger && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: 26,
              cursor: "pointer",
              zIndex: 2000,
            }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && showHamburger && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(12px)",
              paddingTop: "6rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 1500,
            }}
          >
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                style={{
                  padding: "1rem",
                  fontSize: 18,
                  color: "white",
                  width: "100%",
                  textAlign: "center",
                  background: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  cursor: "pointer",
                }}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
