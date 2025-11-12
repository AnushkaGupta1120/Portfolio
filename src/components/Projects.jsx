import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "MediFlow",
    desc: "Smart healthcare supply chain tracking system for hospitals ensuring seamless inventory management and real-time updates.",
    tech: ["React", "Node.js", "MySQL"],
    icon: "🏥",
    live: "https://mediflow-ten.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/Mediflow",
  },
  {
    title: "SkillSync",
    desc: "AI-driven platform that analyzes team skills and suggests optimal project matches for efficient collaboration.",
    tech: ["React", "Express", "PostgreSQL"],
    icon: "🤖",
    live: "https://skill-sync-vert.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/SkillSync",
  },
  {
    title: "BEATWELL",
    desc: "Heart disease prediction system achieving 92% accuracy using machine learning and AWS cloud integration.",
    tech: ["Python", "Flask", "AWS"],
    icon: "❤️",
    live: "https://anushkaguptaportfolio.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/BEATWELL",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="relative py-20 bg-[#0b0c10] text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Floating glow background */}
      <motion.div
        className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-br from-[#a855f7]/10 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r from-[#f4a261] to-[#a855f7] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            A showcase of innovation, design, and smart problem-solving ⚡
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Neon Glow Border */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-[#f4a261] to-[#a855f7] rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Project Card */}
              <div className="relative bg-[#1B1F3B]/60 backdrop-blur-sm border border-[#464D86]/40 rounded-2xl p-6 shadow-lg group-hover:shadow-[#a855f7]/20 transition-all duration-300 h-full flex flex-col">
                {/* Icon Animation */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-4"
                >
                  <span className="text-5xl">{p.icon}</span>
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {p.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-grow">{p.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-[#a855f7]/10 text-xs font-semibold text-[#f4a261] rounded-full border border-[#f4a261]/30"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4 pt-4 border-t border-[#464D86]/40"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-[#f4a261] hover:text-[#fbd38d] transition-all font-semibold"
                  >
                    <FiExternalLink size={18} />
                    Live
                  </motion.a>

                  <motion.a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#a855f7] transition-all font-semibold"
                  >
                    <FiGithub size={18} />
                    Code
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
