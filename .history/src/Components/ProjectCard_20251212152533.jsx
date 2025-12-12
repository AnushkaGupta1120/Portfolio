// components/ProjectCard.jsx
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ title, desc, tech, icon, live, github }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      {/* Teal Gradient Glow Border */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"
        style={{
          background: "var(--teal-grad)",
          filter: "drop-shadow(0 0 25px rgba(0,255,198,0.25))",
        }}
        animate={{ opacity: [0.1, 0.35, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl p-6 h-full flex flex-col transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(0,255,198,0.12)",
          backdropFilter: "blur(6px)",
          boxShadow: "0 10px 35px rgba(0,0,0,0.6)",
        }}
      >
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-4 text-5xl"
          style={{ color: "var(--teal-1)" }}
        >
          {icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3" style={{ color: "white" }}>
          {title}
        </h3>

        <p className="text-muted mb-6 flex-grow" style={{ lineHeight: "1.6" }}>
          {desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-xs font-semibold rounded-full"
              style={{
                background: "rgba(0,255,198,0.08)",
                border: "1px solid rgba(0,255,198,0.18)",
                color: "var(--teal-1)",
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Actions */}
        <motion.div
          className="flex gap-6 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Live link */}
          <motion.a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, rotate: 3 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-2 font-semibold"
            style={{ color: "var(--teal-1)" }}
          >
            <FiExternalLink size={18} />
            Live
          </motion.a>

          {/* GitHub link */}
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, rotate: -3 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-2 font-semibold text-gray-400 hover:text-[var(--teal-1)] transition-all"
          >
            <FiGithub size={18} />
            Code
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
