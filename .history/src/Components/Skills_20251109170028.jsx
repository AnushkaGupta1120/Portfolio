import { useEffect, useState } from "react";

const skillsData = {
  languages: [
    { name: "Java", icon: "/icons/java-original.svg", color: "#007396" },
    { name: "JavaScript", icon: "/icons/javascript-original.svg", color: "#F7DF1E" },
    { name: "Python", icon: "/icons/python-original.svg", color: "#3776AB" },
  ],
  frontend: [
    { name: "React", icon: "/icons/react-original.svg", color: "#61DAFB" },
    { name: "HTML5", icon: "/icons/html5-original.svg", color: "#E34F26" },
    { name: "CSS3", icon: "/icons/css3-original.svg", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss-original-wordmark.svg", color: "#06B6D4" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs-original.svg", color: "#339933" },
    { name: "Express.js", icon: "/icons/express-original.svg", color: "#000000" },
  ],
  databases: [
    { name: "MySQL", icon: "/icons/mysql-original.svg", color: "#4479A1" },
    { name: "MongoDB", icon: "/icons/mongodb-original.svg", color: "#47A248" },
    { name: "Linux", icon: "/icons/linux-original.svg", color: "#FCC624" },
  ],
  tools: [
    { name: "Git", icon: "/icons/git-original.svg", color: "#F05032" },
    { name: "GitHub", icon: "/icons/github-original.svg", color: "#181717" },
    { name: "VS Code", icon: "/icons/vscode-original.svg", color: "#007ACC" },
    { name: "Postman", icon: "/icons/postman-original.svg", color: "#FF6C37" },
    { name: "Figma", icon: "/icons/figma-original.svg", color: "#F24E1E" },
    { name: "Canva", icon: "/icons/canva-original.svg", color: "#00C4CC" },
  ],
  frameworks: [
    { name: "Next.js", icon: "/icons/nextjs-original.svg", color: "#000000" },
    { name: "JQuery", icon: "/icons/jquery-original.svg", color: "#0769AD" },
  ],
  cloud: [{ name: "AWS", icon: "/icons/aws-original.svg", color: "#FF9900" }],
};

function SkillIcon({ skill, index, isVisible }) {
  return (
    <div
      className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-700 cursor-pointer
      bg-white dark:bg-[#1a1a1a] shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
      hover:-translate-y-2 border border-gray-200 dark:border-gray-800
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Glow Background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
        style={{ backgroundColor: skill.color }}
      ></div>

      {/* Icon */}
      <img
        src={skill.icon}
        alt={skill.name}
        className="relative w-16 h-16 z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
      />

      {/* Tooltip on hover */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-300 z-20">
        <div className="bg-gradient-to-r from-[#F4A261] to-[#6D67E4] text-white text-xs font-semibold py-1 px-3 rounded-lg shadow-md whitespace-nowrap">
          {skill.name}
        </div>
      </div>
    </div>
  );
}

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

  return (
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden bg-gray-50 dark:bg-[#0b0c10] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F4A261] to-[#6D67E4] bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
          Hover to explore my tech stack ✨
        </p>

        {/* Skills Grid */}
        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100 capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
                {skills.map((skill, index) => (
                  <SkillIcon key={skill.name} skill={skill} index={index} isVisible={isVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
