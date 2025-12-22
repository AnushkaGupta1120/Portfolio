import React from "react";

export default function Achievements() {
  const achievements = [
    {
      title: "Reliance Foundation Scholarship Awardee",
      desc: "Awarded after scoring in the top 1% nationwide for academic excellence, leadership, and technological achievements.",
      icon: "🏅",
      link: "https://your-proof-link-here.com",
    },
    {
      title: "McKinsey Forward Program",
      desc: "Global leadership and digital transformation career program by McKinsey. (November 2025)",
      icon: "📘",
      link: "https://your-mckinsey-verification-link.com",
    },
    {
      title: "Japanese-Language Proficiency Test (JLPT) – N5",
      desc: "Demonstrated core Japanese proficiency. (August 2025)",
      icon: "🗾",
      link: "https://your-jlpt-proof-link.com",
    },
    {
      title: "Adobe UI/UX Graphic Design – Ethnus",
      desc: "Specialized Adobe UI/UX training certification. (April 2025)",
      icon: "🎨",
      link: "https://your-adobe-ethnus-certificate-link.com",
    },
    {
      title: "Figma UI/UX Complete Bootcamp – Udemy",
      desc: "Full bootcamp in prototyping & UI design systems. (January 2025)",
      icon: "📐",
      link: "https://your-figma-udemy-proof-link.com",
    },
  ];

  return (
    <section id="certifications" className="section">
      <div className="container-max">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            style={{
              background: "var(--teal-grad)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: "2.3rem",
              fontWeight: 800,
            }}
          >
            Certifications & Achievements
          </h2>

          <div
            className="divider"
            style={{
              width: "100px",
              height: "4px",
              margin: "10px auto",
              borderRadius: "8px",
              background: "var(--teal-grad)",
              boxShadow: "var(--glow-medium)",
            }}
          />
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {achievements.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="card bg-card-hover" style={{ padding: "1.8rem", cursor: "pointer" }}>
                
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-muted"
                  style={{
                    textAlign: "center",
                    lineHeight: "1.6",
                    marginTop: "0.2rem",
                  }}
                >
                  {item.desc}
                </p>

                <p
                  style={{
                    color: "var(--accent)",
                    textAlign: "center",
                    marginTop: "0.8rem",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                  }}
                >
                  View Certificate →
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
