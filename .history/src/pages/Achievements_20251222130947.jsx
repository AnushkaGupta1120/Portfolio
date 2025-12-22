import React from "react";

export default function Achievements() {
  const certificates = [
    {
      title: "Reliance Foundation Scholarship",
      issuer: "Reliance Foundation",
      year: "2025",
      img: "/certificates/reliance.png",
      link: "https://proof-link.com",
    },
    {
      title: "McKinsey Forward Program",
      issuer: "McKinsey",
      year: "Nov 2025",
      img: "/certificates/mckinsey.png",
      link: "https://mckinsey-link.com",
    },
    {
      title: "JLPT N5",
      issuer: "JF Japanese Org",
      year: "Aug 2025",
      img: "/certificates/jlpt.png",
      link: "https://jlpt-link.com",
    },
    {
      title: "Adobe UI/UX Graphic Design",
      issuer: "Ethnus",
      year: "Apr 2025",
      img: "/certificates/adobe.png",
      link: "https://adobe-link.com",
    },
    {
      title: "Figma UI/UX Bootcamp",
      issuer: "Udemy",
      year: "Jan 2025",
      img: "/certificates/figma.png",
      link: "https://figma-link.com",
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
            Certificates
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {certificates.map((c, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--indigo-card)",
                borderRadius: "16px",
                padding: "1.2rem",
                boxShadow: "0 0 20px rgba(0,0,0,0.2)",
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Image */}
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  width: "100%",
                  height: "180px",
                  marginBottom: "12px",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {c.title}
                </h3>

                <p
                  style={{
                    color: "var(--soft-text)",
                    fontSize: "0.9rem",
                    marginTop: "4px",
                  }}
                >
                  {c.issuer} • {c.year}
                </p>
              </div>

              {/* Button */}
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "12px",
                  display: "inline-block",
                  padding: "10px 0",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  textAlign: "center",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                View
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
