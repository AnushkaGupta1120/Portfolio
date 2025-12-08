// components/ProjectCard.jsx
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ title, desc, tech, icon, live, github }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      {/* Neon Glow Border */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-[#f4a261] to-[#a855f7] 
        rounded-2xl opacity-0 group-hover:opacity-40 blur-lg 
        transition-all duration-500"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Card */}
      <div className="relative bg-[#1B1F3B]/60 backdrop-blur-sm border border-[#464D86]/40 
        rounded-2xl p-6 shadow-lg group-hover:shadow-[#a855f7]/20 transition-all 
        duration-300 h-full flex flex-col">

        {/* Icon */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-4"
        >
          <span className="text-5xl">{icon}</span>
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-6 flex-grow">{desc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-[#a855f7]/10 text-xs font-semibold 
              text-[#f4a261] rounded-full border border-[#f4a261]/30"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Actions */}
        <motion.div
          className="flex gap-4 pt-4 border-t border-[#464D86]/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-[#f4a261] hover:text-[#fbd38d] 
            transition-all font-semibold"
          >
            <FiExternalLink size={18} /> Live
          </motion.a>

          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-gray-400 hover:text-[#a855f7] 
            transition-all font-semibold"
          >
            <FiGithub size={18} /> Code
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
