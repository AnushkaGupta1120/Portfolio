import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "MediFlow",
    desc: "Smart healthcare supply chain tracking system for hospitals ensuring seamless inventory management and real-time updates.",
    tech: ["React", "Node.js", "MySQL"],
    icon: "🏥",
    live: "https://mediflow-lake.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/Mediflow",
  },
  {
    title: "SkillSync",
    desc: "AI-driven platform that analyzes team skills and suggests optimal project matches for efficient collaboration.",
    tech: ["React", "Express", "PostgreSQL"],
    icon: "🤖",
    live: "https://skill-sync-vert.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/SkillSync",
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
    title: "KYC Verification App",
    desc: "AI-assisted KYC onboarding system with document scanning, face matching, localization, and offline failure recovery.",
    tech: ["React", "JavaScript", "Face API", "OCR"],
    icon: "🪪",
    live: "https://kyc-app-six.vercel.app/",
    github: "https://github.com/AnushkaGupta1120/KYC-App",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    },
  };

  return (
    <section id="projects" className="relative py-20 bg-[#0b0c10] text-gray-100">
      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r 
            from-[#f4a261] to-[#a855f7] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            A showcase of innovation, design, and smart problem-solving ⚡
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
