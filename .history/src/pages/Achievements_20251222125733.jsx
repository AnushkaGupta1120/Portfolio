import React from "react";

export default function Achievements() {
  const achievements = [
    {
      title: "Reliance Foundation Scholarship Awardee",
      desc: "Awarded after scoring in the top 1% of applicants nationwide for academic excellence, leadership, and technological potential.",
      icon: "🏅",
    },
    {
      title: "McKinsey Forward Program",
      desc: "Completed McKinsey’s global career development program focused on leadership, digital transformation, and problem-solving. (November 2025)",
      icon: "📘",
    },
    {
      title: "Japanese-Language Proficiency Test (JLPT) – N5",
      desc: "Successfully cleared N5 certification demonstrating fundamentals of Japanese reading, vocabulary, and conversational skills. (August 2025)",
      icon: "🗾",
    },
    {
      title: "Adobe UI/UX Graphic Design Certification – Ethnus",
      desc: "Completed Adobe-based UI/UX design training including graphics, visual design, and layout principles. (April 2025)",
      icon: "🎨",
    },
    {
      title: "Figma UI/UX Complete Bootcamp – Udemy",
      desc: "Completed Figma specialization covering prototyping, components, and interface systems. (January 2025)",
      icon: "📐",
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container-max">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
            <div className="card" key={idx} style={{ padding: "1.8rem" }}>
              
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

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
