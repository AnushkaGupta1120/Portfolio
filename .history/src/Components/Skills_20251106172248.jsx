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
      className={`group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 cursor-pointer ${
        isVisible ? "animate-scaleIn opacity-100" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative flex items-center justify-center mb-3">
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
          style={{ backgroundColor: skill.color }}
        />
        <img
          src={skill.icon}
          alt={skill.name}
          className="relative w-12 h-12 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
        />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold py-1 px-3 rounded-lg shadow-md whitespace-nowrap">
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
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-3">
            Hover to reveal skill names
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-14">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className="animate-fadeIn"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
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
