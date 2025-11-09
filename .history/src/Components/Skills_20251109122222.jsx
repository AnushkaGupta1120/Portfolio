import { useEffect, useState } from "react";

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

  // ⚙️ Tools
  { name: "Git", icon: "/icons/git-original.svg", color: "#F05032" },
  { name: "GitHub", icon: "/icons/github-original.svg", color: "#181717" },
  { name: "VS Code", icon: "/icons/vscode-original.svg", color: "#007ACC" },
  { name: "Postman", icon: "/icons/postman-original.svg", color: "#FF6C37" },

  // 🎨 Design
  { name: "Figma", icon: "/icons/figma-original.svg", color: "#F24E1E" },
  { name: "Canva", icon: "/icons/canva-original.svg", color: "#00C4CC" },

  // ☁️ Cloud
  { name: "AWS", icon: "/icons/icons8-aws.svg", color: "#FF9900" },
  { name: "Linux", icon: "/icons/linux-original.svg", color: "#FCC624" },

  // 💻 Languages
  { name: "Java", icon: "/icons/java-original.svg", color: "#007396" },
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

  return (
    <section
      id="skills"
      className="relative py-24 px-6 
                 bg-gray-50 dark:bg-[#0b0c10] 
                 text-gray-900 dark:text-gray-100 
                 transition-colors duration-500 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#f4a261]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f4a261]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Section heading */}
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#f4a261] to-indigo-400 bg-clip-text text-transparent mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-700 dark:text-gray-400 text-lg mb-12 transition-colors duration-500">
          Hover to reveal skill names ✨
        </p>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center p-10 
                          rounded-2xl 
                          bg-white dark:bg-[#14161a] 
                          border border-[#f4a261]/10 
                          transition-all duration-500 
                          hover:-translate-y-2 
                          hover:border-[#f4a261]/50 
                          shadow-md hover:shadow-lg
                          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${index * 0.04}s` }}
            >
              {/* Glow background */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
                style={{ backgroundColor: skill.color }}
              ></div>

              {/* Skill icon */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="relative w-16 h-16 z-10 transition-all duration-300 group-hover:scale-110"
              />

              {/* Tooltip */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-20">
                <span className="text-sm font-semibold bg-[#f4a261] text-[#0b0c10] py-1 px-3 rounded-full shadow-md whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
