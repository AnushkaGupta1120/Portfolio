import { motion } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-20 px-6 bg-[#0b0c10] text-gray-100 overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#00fff2]/20 blur-[140px] top-20 left-10 rounded-full"></div>
        <div className="absolute w-96 h-96 bg-[#a855f7]/10 blur-[150px] bottom-20 right-20 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#00fff2] to-[#a855f7] bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-gray-400 text-lg">
            A quick summary of my Journey, Experience & Education
          </p>
        </motion.div>

        {/* Resume Download Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-[#11141f]/60 backdrop-blur-xl border border-[#00fff2]/20 shadow-xl relative overflow-hidden mb-16"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00fff2] to-[#a855f7] opacity-10 blur-2xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Download My Resume
              </h3>
              <p className="text-gray-400">
                Get the full detailed version with projects, achievements and skills.
              </p>
            </div>

            <motion.a
              href="/public/AnushkaGupta Resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00fff2] to-[#a855f7] text-black font-semibold shadow-[0_0_20px_#00fff255] transition-all"
            >
              <FiDownload size={20} /> Download
            </motion.a>
          </div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 bg-[#11141f]/60 backdrop-blur-xl border border-[#00fff2]/20 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-white mb-6 border-b border-[#00fff2]/20 pb-3">
              Experience
            </h3>

            <div className="space-y-6">
            

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-[#1a1f2f]/50 border border-[#00fff2]/10"
              >
                <h4 className="text-xl font-semibold text-[#00fff2]">
                  Frontend Developer Intern – StartupXYZ
                </h4>
                <p className="text-gray-400 text-sm mb-2">Jan 2024 – Mar 2024</p>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Built responsive UI using React & Tailwind</li>
                  <li>Converted Figma designs into pixel-perfect interfaces</li>
                  <li>Reduced web app load time by 35%</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 bg-[#11141f]/60 backdrop-blur-xl border border-[#00fff2]/20 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-white mb-6 border-b border-[#00fff2]/20 pb-3">
              Education
            </h3>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-[#1a1f2f]/50 border border-[#00fff2]/10"
            >
              <h4 className="text-xl font-semibold text-[#00fff2]">
                Bachelor of Technology (B.Tech)
              </h4>
              <p className="text-gray-400 text-sm mb-2">2021 – 2025</p>
              <p className="text-gray-300">
                Specialization: Computer Science | Achievements: 8.5+ CGPA,  
                multiple projects, internships, and certifications.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-[#1a1f2f]/50 border border-[#00fff2]/10 mt-4"
            >
              <h4 className="text-xl font-semibold text-[#00fff2]">
                Certifications
              </h4>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1 mt-2">
                <li>AWS Cloud Practitioner</li>
                <li>McKinsey Forward Program</li>
                <li>Full-Stack Web Development</li>
                <li>Machine Learning Fundamentals</li>
              </ul>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
