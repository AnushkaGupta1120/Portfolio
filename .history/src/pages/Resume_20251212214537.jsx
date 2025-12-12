import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function Resume() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center pt-28 pb-16 px-4">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent"
      >
        Resume
      </motion.h2>

      <p className="text-gray-400 mb-10">A quick glance at my journey.</p>

      {/* ============================ */}
      {/*         PROFILE CARD        */}
      {/* ============================ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl bg-[#0f0f0f] border border-white/10 
                   rounded-xl p-6 shadow-[0_0_25px_rgba(0,255,250,0.15)]"
      >
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* Left side */}
          <div>
            <h3 className="text-2xl font-bold text-teal-300">ANUSHKA GUPTA</h3>

            <p className="text-gray-300 mt-2">
              Full-Stack Developer • Cloud • UI/UX  
            </p>

            <p className="text-gray-400 mt-2">📍 India</p>

            <p className="text-gray-400">✉️ anushkaguptawork01@gmail.com</p>
          </div>

          {/* Summary Box */}
          <div className="bg-gradient-to-br from-teal-400/20 to-transparent 
                          border border-white/10 p-4 rounded-lg max-w-md">
            <h4 className="text-teal-300 font-semibold mb-1">
              Professional Summary:
            </h4>
            <p className="text-gray-300 text-sm leading-6">
              A passionate full-stack developer skilled in JavaScript, React, Java,
              Cloud, and UI/UX. Focused on building scalable apps and solving
              real-world problems. Actively seeking full-time and internship
              opportunities.
            </p>
          </div>

        </div>
      </motion.div>

      {/* ============================ */}
      {/*         EDUCATION CARD       */}
      {/* ============================ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-6xl bg-[#0f0f0f] border border-white/10
                   rounded-xl p-6 mt-8"
      >
        <h3 className="text-xl font-bold text-teal-300 mb-4">🎓 Education</h3>

        <ul className="space-y-4 text-gray-300">
          <li>
            <strong>B.Tech in Computer Science</strong> — 2022–2026  
            <br />
            <span className="text-gray-400">CGPA: YOUR CGPA</span>
          </li>

          <li>
            <strong>12th — Sophia Senior Secondary School</strong>  
            <br />
            <span className="text-gray-400">Percentage: 82%</span>
          </li>

          <li>
            <strong>10th — Sophia Senior Secondary School</strong>  
            <br />
            <span className="text-gray-400">Percentage: 92.4%</span>
          </li>
        </ul>
      </motion.div>

      {/* ============================ */}
      {/*         PROJECTS CARD        */}
      {/* ============================ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-6xl bg-[#0f0f0f] border border-white/10
                   rounded-xl p-6 mt-8"
      >
        <h3 className="text-xl font-bold text-teal-300 mb-4">💼 Projects</h3>

        <ul className="space-y-2 text-gray-300">
          <li>1️⃣ MediFlow – Smart Medical Inventory Web App</li>
          <li>2️⃣ Job Tracker System (Full-Stack MERN)</li>
          <li>3️⃣ Cloud-based File Upload System</li>
          <li>4️⃣ UI/UX Portfolio Website</li>
        </ul>
      </motion.div>

      {/* ============================ */}
      {/*           SKILLS CARD        */}
      {/* ============================ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-6xl bg-[#0f0f0f] border border-white/10
                   rounded-xl p-6 mt-8"
      >
        <h3 className="text-xl font-bold text-teal-300 mb-4">⚙️ Skills</h3>

        <div className="flex flex-wrap gap-3">
          {[
            "JavaScript", "React", "Node.js", "Java",
            "AWS Cloud", "MySQL", "MongoDB", "TailwindCSS",
            "UI/UX", "DSA (Java)", "Problem Solving", "Teamwork"
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-md bg-white/5 text-gray-300 
                         text-sm border border-white/10 hover:bg-teal-400/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ============================ */}
      {/*         LINKS SECTION        */}
      {/* ============================ */}
      <div className="flex gap-10 mt-10 text-gray-300 text-lg">
        <a href="https://github.com/AnushkaGupta1120"
           target="_blank" className="hover:text-teal-300">GitHub</a>
        <a href="https://www.linkedin.com/in/anushkagupta-tech"
           target="_blank" className="hover:text-teal-300">LinkedIn</a>
      </div>

      {/* ============================ */}
      {/*       PDF VIEWER BELOW       */}
      {/* ============================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-6xl mt-12 rounded-xl overflow-hidden 
                   border border-white/10 shadow-[0_0_20px_rgba(0,255,250,0.15)]"
      >
        <iframe
          src="/resume.pdf"
          className="w-full h-[85vh] bg-[#111]"
          style={{ border: "none" }}
        ></iframe>
      </motion.div>

      {/* Download Button */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-3 rounded-lg text-black font-semibold 
                  bg-gradient-to-r from-teal-300 to-cyan-400 shadow-lg"
      >
        ⬇ Download Resume
      </motion.a>

    </section>
  );
}
