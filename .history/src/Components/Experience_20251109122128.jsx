import { useEffect, useState } from "react";

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
    <div
      className={`relative pl-8 py-8 transform transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-4 top-10 w-8 h-8 bg-gray-100 dark:bg-[#0b0c10] border-4 border-[#f4a261] rounded-full transition-colors duration-500"></div>

      {/* Experience Card */}
      <div className="bg-white dark:bg-[#14161a] border border-[#f4a261]/20 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {exp.role}
        </h3>
        <p className="text-[#f4a261] font-semibold">{exp.company}</p>
        <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
          {exp.duration}
        </p>

        <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
          {exp.achievements.map((a, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#f4a261]">✓</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const section = document.getElementById("experience");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-20 px-6 
                 bg-gray-50 dark:bg-[#0b0c10] 
                 text-gray-900 dark:text-gray-100 
                 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#f4a261] to-indigo-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#f4a261] to-indigo-400 mx-auto mb-12"></div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
