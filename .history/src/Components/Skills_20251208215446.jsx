import { useEffect, useState } from "react";

const skills = [
  const skills = [
  { name: "Java", icon: "/icons/java-original.svg", color: "#007396" },
  { name: "JavaScript", icon: "/icons/javascript-original.svg", color: "#F7DF1E" },
  { name: "SQL", icon: "/icons/mysql-original.svg", color: "#4479A1" },
  { name: "DSA (Java)", icon: "/icons/code.svg", color: "#4A90E2" },
  { name: "OOP", icon: "/icons/oop.svg", color: "#8E44AD" },

  // Frontend
  { name: "HTML5", icon: "/icons/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "/icons/css3-original.svg", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss-plain.svg", color: "#38B2AC" },
  { name: "React.js", icon: "/icons/react-original.svg", color: "#61DAFB" },
  { name: "jQuery", icon: "/icons/jquery-original.svg", color: "#0769AD" },

  // Backend
  { name: "Node.js", icon: "/icons/nodejs-original.svg", color: "#339933" },
  { name: "Express.js", icon: "/icons/express-original.svg", color: "#000000" },
  { name: "REST APIs", icon: "/icons/api.svg", color: "#FF9F43" },

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
  { name: "Notion", icon: "/icons/notion.svg", color: "#000000" },
  { name: "Cursor", icon: "/icons/cursor.svg", color: "#4A90E2" },

  // Design
  { name: "Figma", icon: "/icons/figma-original.svg", color: "#F24E1E" },
  { name: "Canva", icon: "/icons/canva-original.svg", color: "#00C4CC" }

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
      className="relative py-20 px-6 bg-transparent backdrop-blur-lg transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center w-32 h-32 rounded-2xl bg-gray-100 dark:bg-[#141625] shadow-lg transition-all duration-500 hover:-translate-y-1 group"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                style={{
                  filter: `drop-shadow(0 0 6px ${skill.color}50)`,
                }}
                draggable="false"
              />

              <p
                className="absolute bottom-3 text-sm font-semibold text-gray-700 dark:text-gray-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
