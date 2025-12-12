import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 234, 255, 0.15)",
        }}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00fff2", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* --- PROFILE HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00fff2", marginBottom: 4 }}>
              👩‍💻 ANUSHKA GUPTA
            </h3>

            <p style={{ marginTop: 6, fontSize: 15, color: "#ccc" }}>
              Full-Stack Developer | Cloud Enthusiast | UI/UX Designer
            </p>

            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 India
            </p>

            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ anushkaguptawork01@gmail.com  
            </p>
          </div>

          {/* Summary Box */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00fff233, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.08)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00fff2" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              A passionate developer skilled in JavaScript, React, Java, Cloud, 
              and UI/UX. Focused on building scalable apps, solving real-world 
              problems, and continuously exploring the future of cloud and AI. 
              Actively seeking full-time and internship opportunities.
            </p>
          </motion.div>
        </motion.div>

        {/* --- EDUCATION SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00fff2", marginBottom: 12 }}>
            🎓 Education
          </h4>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Computer Science (AI & Cloud)</strong> — 2021–2025  
              <br />
              <span style={{ color: "#aaa" }}>CGPA: YOUR CGPA</span>
            </li>

            <li style={{ marginTop: 8 }}>
              <strong>12th — YOUR SCHOOL NAME</strong>  
              <br />
              <span style={{ color: "#aaa" }}>Percentage: X%</span>
            </li>

            <li style={{ marginTop: 8 }}>
              <strong>10th — YOUR SCHOOL NAME</strong>  
              <br />
              <span style={{ color: "#aaa" }}>Percentage: X%</span>
            </li>
          </ul>
        </motion.div>

        {/* --- PROJECTS SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00fff2", marginBottom: 12 }}>
            💼 Projects
          </h4>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ MediFlow – Smart Medical Inventory Web App</li>
            <li>2️⃣ Job Tracker System (Full-Stack MERN)</li>
            <li>3️⃣ Cloud-based File Upload System</li>
            <li>4️⃣ UI/UX Portfolio Website</li>
          </ul>
        </motion.div>

        {/* --- SKILLS SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00fff2", marginBottom: 12 }}>
            ⚙️ Skills
          </h4>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Java",
              "Cloud (AWS)",
              "MySQL",
              "MongoDB",
              "UI/UX",
              "TailwindCSS",
              "DSA (Java)",
              "Teamwork",
              "Problem Solving",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,255,242,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* --- LINKS SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[  
            { name: "💻 GitHub", link: "https://github.com/AnushkaGupta1120" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/anushkagupta-tech" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00fff2" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* --- EMBEDDED PDF VIEWER --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Anushka Gupta Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00fff2",
            color: "#000",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
