import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { name: "Java", icon: "/icons/java-original.svg", color: "#007396" },
  { name: "JavaScript", icon: "/icons/javascript-original.svg", color: "#F7DF1E" },
  { name: "SQL", icon: "/icons/mysql-original.svg", color: "#4479A1" },

  // Frontend
  { name: "HTML5", icon: "/icons/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "/icons/css3-original.svg", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss-original.svg", color: "#38B2AC" },
  { name: "React.js", icon: "/icons/react-original.svg", color: "#61DAFB" },
  { name: "jQuery", icon: "/icons/jquery-original.svg", color: "#0769AD" },

  // Backend
  { name: "Node.js", icon: "/icons/nodejs-original-wordmark.svg", color: "#339933" },
  { name: "Express.js", icon: "/icons/express-original.svg", color: "#000000" },

  // Databases
  { name: "MySQL", icon: "/icons/mysql-original.svg", color: "#4479A1" },

  // Cloud / DevOps
  { name: "AWS", icon: "/icons/icons8-aws.svg", color: "#FF9900" },
  { name: "Linux", icon: "/icons/linux-original.svg", color: "#FCC624" },
  { name: "Jenkins", icon: "/icons/jenkins-original.svg", color: "#D33833" },
  { name: "Docker", icon: "/icons/docker-original.svg", color: "#2496ED" },

  // Tools
  { name: "Git", icon: "/icons/git-original.svg", color: "#F05032" },
  { name: "GitHub", icon: "/icons/github-icon.svg", color: "#181717" },
  { name: "Postman", icon: "/icons/postman-original.svg", color: "#FF6C37" },
  { name: "VS Code", icon: "/icons/vscode-original.svg", color: "#007ACC" },
  { name: "Notion", icon: "/icons/notion-original (1).svg", color: "#000000" },

  // Design
  { name: "Figma", icon: "/icons/figma-original.svg", color: "#F24E1E" },
  { name: "Canva", icon: "/icons/canva-original.svg", color: "#00C4CC" }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-black text-white flex justify-center"
    >
      <div
        className="
        w-[92%] md:w-[80%]
        bg-[#050505] rounded-3xl border border-[#00fff266]
        shadow-[0_0_50px_#00fff233]
        p-10 relative overflow-hidden"
      >
        {/* center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00fff233,transparent)] pointer-events-none" />

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#00fff2] tracking-wide">
          My Skills
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Technical expertise infused with creativity — here are my core tools & technologies.
        </p>

        {/* bubble layout */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className="
              w-32 h-32 rounded-full bg-[#0a0a0a] border border-[#00fff255]
              shadow-[0_0_25px_#00fff233]
              flex flex-col items-center justify-center backdrop-blur-sm
              hover:shadow-[0_0_40px_#00fff2] transition-all group"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: `drop-shadow(0 0 10px ${skill.color}aa)`
                }}
              />
              <p className="mt-2 text-sm opacity-90">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
