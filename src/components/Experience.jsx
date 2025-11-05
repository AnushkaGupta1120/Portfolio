import { useEffect, useState } from 'react';

const experienceData = [
  {
    role: 'Software Development Intern',
    company: 'TechCorp Solutions',
    duration: 'Jun 2024 - Aug 2024',
    achievements: [
      'Developed responsive web applications using React and Node.js, improving user engagement by 40%',
      'Collaborated with cross-functional teams to implement new features and optimize existing functionalities',
      'Participated in code reviews and maintained high code quality standards',
      'Built RESTful APIs and integrated third-party services for enhanced application functionality',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'StartupXYZ',
    duration: 'Jan 2024 - Mar 2024',
    achievements: [
      'Created modern, responsive UI components using React and Tailwind CSS',
      'Implemented pixel-perfect designs from Figma mockups with 99% accuracy',
      'Optimized application performance, reducing load times by 35%',
      'Worked closely with UX designers to improve user experience and accessibility',
    ],
  },
];

function ExperienceCard({ exp, index, isVisible }) {
  return (
    <div
      className={`relative pl-8 py-8 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-blue-600 before:to-purple-600 animate-fadeIn transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-4 top-10 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 transform hover:scale-125 animate-bounce-slow"></div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 group">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1 animate-slideInLeft">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {exp.role}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right animate-slideInRight">
            {exp.duration}
          </div>
        </div>

        <ul className="space-y-2 mt-4">
          {exp.achievements.map((achievement, i) => (
            <li
              key={i}
              className="text-gray-600 dark:text-gray-300 flex items-start gap-3 animate-slideInUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transform group-hover:scale-125 transition-transform">
                ✓
              </span>
              <span>{achievement}</span>
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
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-titleSlide">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-widthExpand"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-4">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
