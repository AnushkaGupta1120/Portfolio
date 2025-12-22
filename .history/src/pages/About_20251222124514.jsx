import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
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
            About Me
          </h2>
          <div
            className="divider"
            style={{
              width: "90px",
              height: "4px",
              margin: "10px auto",
              borderRadius: "8px",
              background: "var(--teal-grad)",
              boxShadow: "var(--glow-medium)",
            }}
          />
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* Left Side */}
          <div>
            <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
              I'm <span style={{ color: "var(--teal-1)", fontWeight: 600 }}>Anushka Gupta</span>,
              a Full-Stack Developer and UI/UX Designer who bridges the gap between engineering and aesthetics. I specialize in crafting scalable, cloud-native applications that are as intuitive as they are powerful.
<br></br><p>My focus is on the complete digital lifecycle—from designing pixel-perfect interfaces to deploying secure server-side architectures. I build solutions that merge complex technology with seamless design.
</p>
            </p>

            <p className="text-muted" style={{ marginTop: "1rem", lineHeight: "1.8" }}>
              My expertise includes developing highly intuitive interfaces, crafting consistent
              component systems, and working with cloud-native architectures. I enjoy building
              elegant solutions that merge technology and design seamlessly.
            </p>

            {/* Quick Facts */}
            <div style={{ marginTop: "1.8rem" }}>
              <h3
                style={{
                  color: "var(--teal-1)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "0.8rem",
                }}
              >
                Why Work With Me?
              </h3>

              <ul
                style={{
                  paddingLeft: "1.2rem",
                  lineHeight: "1.8",
                  color: "var(--muted)",
                }}
              >
                <li>Design-Led Engineering: Skilled in high-fidelity UI/UX design and rapid prototyping.</li>
                <li>Precision: Detail-oriented focus on performance, accessibility, and clean code.</li>
                <li>Cloud & server-side development experience</li>
                <li>Focused, detail-oriented, and design-driven</li>
              </ul>
            </div>
          </div>

          {/* Right Side Card */}
          <div>
            <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <img
                src="/profile.jpg"
                alt="Anushka Gupta"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "100%",
                  margin: "0 auto",
                  border: "3px solid rgba(0,255,198,0.18)",
                  boxShadow: "var(--glow-medium)",
                  objectFit: "cover",
                }}
              />

              <h3 style={{ marginTop: "1.5rem", fontSize: "1.5rem", fontWeight: 700 }}>
                Anushka Gupta
              </h3>

              <p className="text-muted" style={{ marginBottom: "1.5rem", marginTop: "0.3rem" }}>
                Developer • Cloud Enthusiast • Designer
              </p>

              {/* Stats / Info Chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <span className="info-chip">Full-Stack Development</span>
                <span className="info-chip">Cloud Computing</span>
                <span className="info-chip">UI/UX Design</span>
                <span className="info-chip">Java • React • AWS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
