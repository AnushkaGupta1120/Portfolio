import React from "react";

export default function Achievements() {
  const achievements = [
    {
      title: "Certified Cloud Practitioner",
      desc: "AWS Cloud certification showcasing understanding of core cloud services and architecture.",
      icon: "☁️",
    },
    {
      title: "UI/UX Design Specialization",
      desc: "Completed UI/UX design program focusing on user-centric design, wireframes, and prototyping.",
      icon: "🎨",
    },
    {
      title: "Java Development Excellence",
      desc: "Recognized for strong OOP fundamentals, DSA practices, and backend development skills.",
      icon: "💻",
    },
    {
      title: "Hackathon Finalist",
      desc: "Built a full-stack project under 24 hours and made it to the finalist round.",
      icon: "🏆",
    },
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

        {/* Card Grid */}
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
