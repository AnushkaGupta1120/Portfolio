import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  // 🌐 Frontend
  { name: "HTML5", icon: "/icons/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "/icons/css3-original.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "/icons/javascript-original.svg", color: "#F7DF1E" },
  { name: "React", icon: "/icons/react-original.svg", color: "#61DAFB" },

  // 💾 Backend & Database
  { name: "Node.js", icon: "/icons/nodejs-original.svg", color: "#339933" },
  { name: "Express.js", icon: "/icons/express-original.svg", color: "#000000" },
  { name: "MySQL", icon: "/icons/mysql-original.svg", color: "#4479A1" },
  { name: "MongoDB", icon: "/icons/mongodb-original.svg", color: "#47A248" },

  // ⚙️ Tools
  { name: "Git", icon: "/icons/git-original.svg", color: "#F05032" },
  { name: "GitHub", icon: "/icons/github-original.svg", color: "#181717" },
  { name: "VS Code", icon: "/icons/vscode-original.svg", color: "#007ACC" },
  { name: "Postman", icon: "/icons/postman-original.svg", color: "#FF6C37" },

  // 🎨 Design
  { name: "Figma", icon: "/icons/figma-original.svg", color: "#F24E1E" },
  { name: "Canva", icon: "/icons/canva-original.svg", color: "#00C4CC" },

  // ☁️ Cloud & OS
  { name: "AWS", icon: "/icons/aws-original.svg", color: "#FF9900" },
  { name: "Linux", icon: "/icons/linux-original.svg", color: "#FCC624" },
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
        staggerChildren: 0.08,
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
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-transparent backdrop-blur-lg bg-white/5 dark:bg-[#0b0c10]/40 border-t border-b border-white/10 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle glowing orbs in background */}
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
          <p className="text-lg text-gray-400">Hover to view skill name ✨</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                filter: `drop-shadow(0 0 20px ${skill.color}80)`,
              }}
              className="relative flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
            >
              {/* Skill Icon */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300"
                draggable="false"
              />

              {/* Skill Name */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-[-30px] text-sm font-medium text-gray-300 dark:text-gray-400"
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
