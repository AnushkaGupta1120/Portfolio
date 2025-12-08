import { useEffect, useState } from "react";

const skills = [
  // your skills array here
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
