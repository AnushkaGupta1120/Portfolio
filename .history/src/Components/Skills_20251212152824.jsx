import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: "/icons/java-original.svg" },
  { name: "JavaScript", icon: "/icons/javascript-original.svg" },
  { name: "Python", icon: "/icons/python-original.svg" },
  { name: "React", icon: "/icons/react-original.svg" },
  { name: "HTML5", icon: "/icons/html5-original.svg" },
  { name: "CSS3", icon: "/icons/css3-original.svg" },
  { name: "Node.js", icon: "/icons/nodejs-original-wordmark.svg" },
  { name: "MySQL", icon: "/icons/mysql-original.svg" },
  { name: "Docker", icon: "/icons/docker-original.svg" },
  { name: "Git", icon: "/icons/git-original.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss-original.svg" },
  { name: "Linux", icon: "/icons/linux-original.svg" },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden flex justify-center"
      style={{ background: "#000" }}
    >
      {/* BACKGROUND TEAL AURA */}
      <div
        className="absolute inset-0 opacity-40 blur-[180px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,198,0.12), transparent 60%)",
        }}
      />

      <div className="max-w-6xl w-full text-center relative z-20 px-6">
        
        {/* Heading */}
        <h2
          className="text-5xl font-extrabold mb-10"
          style={{
            background: "var(--teal-grad)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          My Skills
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          Technical expertise infused with creativity — here are my core tools & technologies.
        </p>

        {/* SKILL BUBBLE CONTAINER */}
        <div
          className="mx-auto rounded-[40px] p-8 shadow-xl"
          style={{
            maxWidth: "960px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(0,255,198,0.12)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="relative w-full h-[500px]">
            {skills.map((skill, index) => {
              // RANDOM FLOATING POSITIONS
              const top = Math.random() * 70 + "%%";
              const left = Math.random() * 70 + "%%";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 }}

                  // Organic random floating motion
                  whileHover={{ scale: 1.2 }}
                  className="absolute flex flex-col items-center justify-center rounded-full"
                  style={{
                    top,
                    left,
                    width: "120px",
                    height: "120px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(0,255,198,0.2)",
                    borderRadius: "50%",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 0 20px rgba(0,255,198,0.15)",
                    animation: `float${index % 6} 6s ease-in-out infinite`,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(0,255,198,0.5))",
                    }}
                    draggable="false"
                  />

                  <p
                    className="text-xs font-semibold"
                    style={{ color: "var(--teal-1)" }}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FLOATING ANIMATION KEYFRAMES */}
      <style>{`
  @keyframes float0 {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float1 {
    0% { transform: translateY(0px); }
    50% { transform: translateY(14px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float2 {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-18px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float3 {
    0% { transform: translateY(0px); }
    50% { transform: translateX(14px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float4 {
    0% { transform: translateY(0px); }
    50% { transform: translateX(-16px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float5 {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`}</style>

    </section>
  );
}
