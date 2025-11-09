import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "MediFlow",
    desc: "Smart healthcare supply chain tracking system.",
    tech: ["React", "Node.js", "MySQL"],
  },
  {
    title: "SkillSync",
    desc: "AI-driven team skill analysis & matching platform.",
    tech: ["React", "Express", "PostgreSQL"],
  },
  {
    title: "BEATWELL",
    desc: "Heart disease prediction with 92% model accuracy.",
    tech: ["Python", "Flask", "AWS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 
                 bg-gray-50 dark:bg-[#0b0c10] 
                 text-gray-900 dark:text-gray-100 
                 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#f4a261] to-indigo-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-2 transition-colors duration-300">
          A glimpse of my recent work
        </p>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#14161a] 
                       border border-[#f4a261]/20 
                       p-6 rounded-2xl 
                       shadow-md hover:shadow-lg 
                       hover:border-[#f4a261]/60 
                       transition-all duration-500 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-[#f4a261] mb-2">
              {p.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
              {p.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 
                             border border-[#f4a261]/30 
                             rounded-full text-[#f4a261]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Icons */}
            <div className="flex gap-4 pt-4 text-[#f4a261] text-lg">
              <FiExternalLink className="cursor-pointer hover:text-[#ffb87a] transition-colors duration-300" />
              <FiGithub className="cursor-pointer hover:text-[#ffb87a] transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
