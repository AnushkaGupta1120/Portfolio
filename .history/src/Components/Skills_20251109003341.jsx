import { useEffect, useState } from "react";

const skills = [
  // 🌐 Frontend
  { name: "HTML5", icon: "/icons/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "/icons/css3-original.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "/icons/javascript-original.svg", color: "#F7DF1E" },
  // { name: "Bootstrap", icon: "/icons/bootstrap-original.svg", color: "#7952B3" },
  { name: "React", icon: "/icons/react-original.svg", color: "#61DAFB" },

  // 💾 Backend & Databases
  { name: "Node.js", icon: "/icons/nodejs-original.svg", color: "#339933" },
  { name: "Express.js", icon: "/icons/express-original.svg", color: "#000000" },
  { name: "MySQL", icon: "/icons/mysql-original.svg", color: "#4479A1" },
  // { name: "MongoDB", icon: "/icons/mongodb-original.svg", color: "#47A248" },

  // ⚙️ Tools & Others
  { name: "Git", icon: "/icons/git-original.svg", color: "#c4897fff" },
  { name: "GitHub", icon: "/icons/github-original.svg", color: "#181717" },
  { name: "VS Code", icon: "/icons/vscode-original.svg", color: "#007ACC" },
  { name: "Postman", icon: "/icons/postman-original.svg", color: "#FF6C37" },
  { name: "Figma", icon: "/icons/figma-original.svg", color: "#F24E1E" },
  // { name: "Photoshop", icon: "/icons/photoshop-original.svg", color: "#31A8FF" },
  // { name: "Illustrator", icon: "/icons/illustrator-original.svg", color: "#FF9A00" },
  { name: "Canva", icon: "/icons/canva-original.svg", color: "#00C4CC" },
  { name: "AWS", icon: "/icons/aws-original.svg", color: "#FF9900" },
  { name: "Linux", icon: "/icons/linux-original.svg", color: "#FCC624" },
  // { name: "C++", icon: "/icons/cplusplus-original.svg", color: "#00599C" },
  // { name: "Python", icon: "/icons/python-original.svg", color: "#3776AB" },
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
      className="relative py-24 px-6 bg-[#0b0c10] text-gray-100 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f4a261]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f4a261]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-[#f4a261] mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Hover to see skill names ✨
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-[#14161a] border border-[#f4a261]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#f4a261]/50 shadow-[0_0_20px_rgba(244,162,97,0.05)]
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${index * 0.03}s` }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
                style={{ backgroundColor: skill.color }}
              ></div>

              {/* Icon */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="relative w-16 h-16 z-10 transition-all duration-300 group-hover:scale-110"
              />

              {/* Skill Name Tooltip */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-20">
                <span className="text-sm font-medium bg-[#f4a261] text-[#0b0c10] py-1 px-3 rounded-full shadow-md">
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
