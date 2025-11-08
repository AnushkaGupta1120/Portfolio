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
      className="py-20 px-6 bg-[#0b0c10] text-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-[#f4a261]">Projects</h2>
        <p className="text-gray-400 mt-2">A glimpse of my recent work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#14161a] p-6 rounded-2xl border border-[#f4a261]/20 hover:border-[#f4a261]/60 transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-[#f4a261] mb-2">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 border border-[#f4a261]/30 rounded-full text-[#f4a261]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4 text-[#f4a261] text-lg">
              <FiExternalLink className="cursor-pointer hover:text-[#ffb87a]" />
              <FiGithub className="cursor-pointer hover:text-[#ffb87a]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
