import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CERTS = {
  tech: [
    {
    title: "Databricks Generative AI Fundamentals",
    org: "Databricks",
    date: "2025",
    img: "/certs/Databricks Generative AI Fundamentals.jpg",
    link: "/certs/databricks-genai.jpg",
  },
  
  {
    title: "McKinsey Forward Program",
    org: "McKinsey",
    date: "Nov 2025",
    img: "/certs/mckinsey-org-forward-program.png",
    link: "/certs/mckinsey.jpg",
  },
  {
    title: "JLPT N5",
    org: "Japan Foundation",
    date: "Aug 2025",
    img: "/certs/jlpt.jpg",
    link: "/certs/jlpt.jpg",
  },
  {
    title: "Reliance Foundation Scholarship Awardee",
    org: "Reliance Foundation",
    date: "2025",
    img: "/certs/reliance.jpg",
    link: "/certs/reliance.jpg",
  },
  
],

};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div
        className="card"
        style={{ background: "#111", borderRadius: 12, padding: 24 }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#fff",
            marginBottom: 4,
          }}
        >
          Certifications & Scholarships 🏅
        </h2>

        <p className="lead" style={{ color: "#aaa" }}>
          Explore my professional achievements — verified & reviewed.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Major" : "Design"}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />

                <strong style={{ fontSize: 15 }}>{c.title}</strong>

                <div style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
