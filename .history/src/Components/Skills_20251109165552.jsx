
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  // 🌐 Frontend
  { name: "HTML5", icon: "public/icons/html5-original.svg", color: "#E34F26" },
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
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b0c10] dark:to-[#1B1F3B] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Background glow effects */}
      <motion.div
        className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-[#f4a261]/20 to-transparent dark:from-[#f4a261]/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#a855f7]/10 to-transparent dark:from-[#a855f7]/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hover to reveal skill names ✨
          </p>
        </motion.div>

        {/* Skills grid */}
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
                rotate: 5,
                y: -10,
              }}
              className="relative group"
            >
              {/* Glow background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: `${skill.color}20` }}
                animate={{
                  boxShadow: [
                    `0 0 0px ${skill.color}00`,
                    `0 0 25px ${skill.color}40`,
                    `0 0 0px ${skill.color}00`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card */}
              <div className="relative p-6 bg-white dark:bg-[#2A2E57]/50 backdrop-blur-sm border border-gray-200 dark:border-[#464D86]/30 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-32 cursor-pointer">
                {/* Skill icon */}
                <motion.div
                  className="text-5xl mb-3"
                  animate={{
                    rotateZ: [0, 10, -10, 0],
                    y: [0, -5, -10, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {skill.icon}
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}