import { useEffect, useState } from "react";

const skills = [
  { name: "Java", icon: "/icons/java-original.svg" },
  { name: "JavaScript", icon: "/icons/javascript-original.svg" },
  { name: "SQL", icon: "/icons/mysql-original.svg" },

  // Frontend
  { name: "HTML5", icon: "/icons/html5-original.svg" },
  { name: "CSS3", icon: "/icons/css3-original.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss-original.svg" },
  { name: "React.js", icon: "/icons/react-original.svg" },
  { name: "jQuery", icon: "/icons/jquery-original.svg" },

  // Backend
  { name: "Node.js", icon: "/icons/nodejs-original-wordmark.svg" },
  { name: "Express.js", icon: "/icons/express-original.svg" },

  // Databases
  { name: "MySQL", icon: "/icons/mysql-original.svg" },

  // Cloud / DevOps
  { name: "AWS", icon: "/icons/icons8-aws.svg" },
  { name: "Linux", icon: "/icons/linux-original.svg" },
  { name: "Jenkins", icon: "/icons/jenkins-original.svg" },
  { name: "Docker", icon: "/icons/docker-original.svg" },

  // Tools
  { name: "Git", icon: "/icons/git-original.svg" },
  { name: "GitHub", icon: "/icons/github-icon.svg" },
  { name: "Postman", icon: "/icons/postman-original.svg" },
  { name: "VS Code", icon: "/icons/vscode-original.svg" },
  { name: "Notion", icon: "/icons/notion-original (1).svg" },

  // Design
  { name: "Figma", icon: "/icons/figma-original.svg" },
  { name: "Canva", icon: "/icons/canva-original.svg" },
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
      className="relative py-24 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Soft teal background aura */}
      <div
        className="absolute inset-0 blur-[180px] opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,198,0.15), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 px-6">
        
        {/* Section Heading */}
        <h2
          className="text-5xl font-extrabold mb-16"
          style={{
            background: "var(--teal-grad)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Technical Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center w-32 h-32 
              rounded-2xl transition-all duration-300 group shadow-[0_0_0rgba(0,0,0,0)]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,255,198,0.12)",
                backdropFilter: "blur(6px)",
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                style={{
                  background: "var(--teal-grad)",
                  filter: "drop-shadow(0 0 12px rgba(0,255,198,0.5))",
                }}
              />

              {/* Icon */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(0,255,198,0.45))",
                }}
                draggable="false"
              />

              {/* Skill Name (Appears on Hover) */}
              <p
                className="absolute bottom-3 text-sm font-semibold opacity-0 translate-y-3 
                group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10"
                style={{ color: "var(--teal-1)" }}
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
