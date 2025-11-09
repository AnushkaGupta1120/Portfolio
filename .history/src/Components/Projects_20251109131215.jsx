import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "MediFlow",
    desc: "Smart healthcare supply chain tracking system.",
    tech: ["React", "Node.js", "MySQL"],
    icon: "🏥",
  },
  {
    title: "SkillSync",
    desc: "AI-driven team skill analysis & matching platform.",
    tech: ["React", "Express", "PostgreSQL"],
    icon: "🤖",
  },
  {
    title: "BEATWELL",
    desc: "Heart disease prediction with 92% model accuracy.",
    tech: ["Python", "Flask", "AWS"],
    icon: "❤️",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b0c10] dark:to-[#1B1F3B] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-br from-[#a855f7]/15 to-transparent dark:from-[#a855f7]/8 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A glimpse of my recent work ✨
          </p>
        </motion.div>

        {/* Project Grid */}
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
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-[#f4a261] to-[#a855f7] rounded-2xl opacity-0 group-hover:opacity-50 blur group-hover:blur-lg transition-all duration-300"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Card */}
              <div className="relative bg-white dark:bg-[#2A2E57]/50 backdrop-blur-sm border border-gray-200 dark:border-[#464D86]/30 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Icon & Title */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-4"
                >
                  <span className="text-5xl">{p.icon}</span>
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {p.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-[#f4a261]/20 to-[#a855f7]/20 dark:from-[#f4a261]/10 dark:to-[#a855f7]/10 text-xs font-semibold text-[#f4a261] dark:text-[#F28C6A] rounded-full border border-[#f4a261]/30 dark:border-[#f4a261]/20"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Icons */}
                <motion.div
                  className="flex gap-4 pt-4 border-t border-gray-200 dark:border-[#464D86]/30"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-[#f4a261] hover:text-[#F28C6A] transition-colors font-semibold"
                  >
                    <FiExternalLink size={18} />
                    Live
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#f4a261] transition-colors font-semibold"
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