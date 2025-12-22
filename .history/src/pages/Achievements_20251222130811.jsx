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
      desc: "Global leadership and digital transformation program by McKinsey. (November 2025)",
      icon: "📘",
      link: "https://your-mckinsey-verification-link.com",
    },
    {
      title: "Japanese-Language Proficiency Test (JLPT) – N5",
      desc: "Successfully cleared JLPT N5 certifying foundational Japanese reading and speaking skills. (August 2025)",
      icon: "🗾",
      link: "https://your-jlpt-proof-link.com",
    },
    {
      title: "Adobe UI/UX Graphic Design – Ethnus",
      desc: "Adobe-based UI/UX certification focusing on visual design principles. (April 2025)",
      icon: "🎨",
      link: "https://your-adobe-ethnus-certificate-link.com",
    },
    {
      title: "Figma UI/UX Complete Bootcamp – Udemy",
      desc: "Advanced UI creation and prototyping certification using Figma. (January 2025)",
      icon: "📐",
      link: "https://your-figma-udemy-proof-link.com",
    }
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

        {/* Equal Size Card Grid */}
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
              <div
                className="card bg-card-hover"
                style={{
                  padding: "1.8rem",
                  cursor: "pointer",
                  minHeight: "340px",         // << Equal box height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    fontSize: "2.2rem",
                    textAlign: "center",
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-muted"
                  style={{
                    textAlign: "center",
                    lineHeight: "1.6",
                    marginTop: "0.6rem",
                  }}
                >
                  {item.desc}
                </p>

                {/* CTA pinned bottom */}
                <p
                  style={{
                    color: "var(--accent)",
                    textAlign: "center",
                    marginTop: "auto",
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
