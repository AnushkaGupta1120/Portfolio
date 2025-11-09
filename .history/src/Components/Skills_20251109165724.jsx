import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  // 🌐 Frontend
  { name: "HTML5", icon: "/icons/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "🎨", color: "#1572B6" },
  { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  // 💾 Backend & Database
  { name: "Node.js", icon: "📦", color: "#339933" },
  { name: "Express.js", icon: "🚀", color: "#000000" },
  { name: "MySQL", icon: "🗄️", color: "#4479A1" },
  // ⚙️ Tools
  { name: "Git", icon: "🔀", color: "#F05032" },
  { name: "GitHub", icon: "🐙", color: "#181717" },
  { name: "VS Code", icon: "💻", color: "#007ACC" },
  { name: "Postman", icon: "📬", color: "#FF6C37" },
  // 🎨 Design
  { name: "Figma", icon: "🎭", color: "#F24E1E" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "Linux", icon: "🐧", color: "#FCC624" },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    const el = document.getElementById("skills");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-transparent backdrop-blur-lg bg-white/5 dark:bg-[#0b0c10]/40 border-t border-b border-white/10 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-[#f4a261]/30 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#a855f7]/20 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Hover to reveal and glow ✨
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.15,
                y: -8,
                boxShadow: `0 0 25px ${skill.color}60`,
              }}
              className="relative group rounded-2xl border border-white/10 bg-white/5 dark:bg-[#2A2E57]/40 backdrop-blur-md p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Skill Icon */}
              <motion.div
                className="flex justify-center items-center mb-3 text-5xl"
                animate={{
                  rotateZ: [0, 8, -8, 0],
                  y: [0, -5, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {skill.icon.endsWith(".svg") ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12"
                    draggable="false"
                  />
                ) : (
                  skill.icon
                )}
              </motion.div>

              {/* Skill Name */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="font-semibold text-sm text-gray-200"
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
