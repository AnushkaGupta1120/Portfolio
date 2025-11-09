import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Software Development Intern",
    company: "TechCorp Solutions",
    duration: "Jun 2024 - Aug 2024",
    achievements: [
      "Developed responsive web applications using React and Node.js, improving user engagement by 40%",
      "Collaborated with teams to implement new features and optimize existing functionalities",
      "Built RESTful APIs and integrated third-party services for enhanced application functionality",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "StartupXYZ",
    duration: "Jan 2024 - Mar 2024",
    achievements: [
      "Created modern, responsive UI components using React and Tailwind CSS",
      "Implemented pixel-perfect designs from Figma mockups with 99% accuracy",
      "Optimized performance, reducing load times by 35%",
    ],
  },
];

function ExperienceCard({ exp, index, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-12 relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#f4a261] to-[#a855f7]" />

      {/* Timeline dot */}
      <motion.div
        className="absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 bg-[#f4a261] rounded-full border-4 border-white dark:border-[#0b0c10] shadow-lg"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`w-full md:w-1/2 ${
          index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
        }`}
      >
        <motion.div
          className="p-6 bg-white dark:bg-[#2A2E57]/50 backdrop-blur-sm border border-gray-200 dark:border-[#464D86]/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          {/* Header */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <p className="text-sm font-semibold text-[#f4a261] uppercase tracking-wide">
              {exp.duration}
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              {exp.role}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
              {exp.company}
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.ul
            className="mt-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {exp.achievements.map((achievement, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-3"
              >
                <motion.span
                  className="text-[#f4a261] font-bold mt-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✓
                </motion.span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    const el = document.getElementById("experience");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#1B1F3B] dark:to-[#0b0c10] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#f4a261]/15 to-transparent dark:from-[#f4a261]/8 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#f4a261] to-[#F28C6A] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey 🚀
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative py-12">
          {experienceData.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              exp={exp}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}