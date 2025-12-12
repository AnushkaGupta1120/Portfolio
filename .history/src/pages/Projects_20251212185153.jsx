import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SkillSync",
    desc: "AI-driven platform that analyzes team skills and suggests optimal project matches for efficient collaboration.",
    tech: ["React", "Express", "PostgreSQL"],
    icon: "🤖",
    live: "https://skill-sync-vert.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/SkillSync",
  },
  {
    title: "KYC Verification App",
    desc: "AI-assisted KYC onboarding system with document scanning, face matching, localization, and offline failure recovery.",
    tech: ["React", "JavaScript", "Face API", "OCR"],
    icon: "🪪",
    live: "https://kyc-app-six.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/KYC-App.git",
  },
  {
    title: "MediFlow",
    desc: "Smart healthcare supply chain tracking system for hospitals ensuring seamless inventory management and real-time updates.",
    tech: ["React", "Node.js", "MySQL"],
    icon: "🏥",
    live: "https://mediflow-lake.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/Mediflow",
  },
  {
    title: "BEATWELL",
    desc: "Heart disease prediction system achieving 92% accuracy using machine learning and AWS cloud integration.",
    tech: ["Python", "Flask", "AWS"],
    icon: "❤️",
    live: "https://anushkaguptaportfolio.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/BEATWELL",
  },
  {
    title: "Quick Notes Chrome Extension",
    desc: "Lightweight Chrome extension enabling instant note-taking with autosave and minimal UI.",
    tech: ["JavaScript", "Chrome API", "Manifest V3"],
    icon: "📝",
    live: "https://github.com/AnushkaGupta1120/Quick-notes-extension",
    github: "https://github.com/AnushkaGupta1120/Quick-notes-extension",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Ambient Teal Glow */}
      <motion.div
        className="absolute -top-10 left-10 w-[500px] h-[500px] rounded-full blur-[160px]"
        style={{
          background: "radial-gradient(circle, rgba(0,255,198,0.10), transparent 60%)",
        }}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full blur-[170px]"
        style={{
          background: "radial-gradient(circle, rgba(0,255,198,0.12), transparent 60%)",
        }}
        animate={{ opacity: [0.2, 0.4, 0.2], y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl font-extrabold mb-4"
            style={{
              background: "var(--teal-grad)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Featured Projects
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of innovation, design, and smart engineering ⚡
          </p>

          {/* Divider */}
          <div
            className="mt-6 mx-auto rounded-full"
            style={{
              width: "110px",
              height: "4px",
              background: "var(--teal-grad)",
              boxShadow: "var(--glow-medium)",
            }}
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
