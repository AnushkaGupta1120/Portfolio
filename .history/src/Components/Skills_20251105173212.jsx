import { useEffect, useState } from 'react';

const skillsData = {
  languages: [
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript', icon: '🟨', proficiency: 95 },
    // { name: 'Python', icon: '🐍', proficiency: 85 },
  ],
  frontend: [
    { name: 'React', icon: '⚛️', proficiency: 95 },
    { name: 'HTML/CSS', icon: '🌐', proficiency: 90 },
    { name: 'Tailwind', icon: '💨', proficiency: 90 },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢', proficiency: 90 },
    { name: 'Express.js', icon: '🚀', proficiency: 90 },
    // { name: 'Spring Boot', icon: '🍃', proficiency: 80 },
  ],
  databases: [
    { name: 'MySQL', icon: '🗄️', proficiency: 85 },
    { name: 'Linux', icon: '🗄️', proficiency: 85 },
    // { name: 'MongoDB', icon: '🍃', proficiency: 85 },
    // { name: 'Redis', icon: '⚡', proficiency: 75 },
  ],
  tools: [
    { name: 'Git', icon: '📝', proficiency: 90 },
    { name: 'GitHub', icon: '🐱', proficiency: 90 },
    { name: 'VS Code', icon: '💻', proficiency: 95 },
    { name: 'Postman', icon: '📮', proficiency: 85 },
    { name: 'Figma', icon: '📮', proficiency: 85 },
  ],
  cloud: [
    { name: 'AWS EC2', icon: '☁️', proficiency: 80 },
    { name: 'AWS S3', icon: '📦', proficiency: 80 },
    { name: 'Deployment', icon: '🚀', proficiency: 85 },
  ],
};

function SkillCard({ skill, index, isVisible }) {
  return (
    <div
      className={`p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
        isVisible ? 'animate-scaleIn' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-300 animate-bounce-slow">
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {skill.name}
      </h3>
      {/* <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
        <div
          className={`bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-1000 ${
            isVisible ? 'animate-fillWidth' : 'w-0'
          }`}
          style={{ '--target-width': `${skill.proficiency}%`, animationDelay: `${index * 0.05}s` }}
        ></div>
      </div> */}
      {/* <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-semibold">{skill.proficiency}%</div> */}
    </div>
  );
}

export default function Skills() {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-titleSlide">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-widthExpand"></div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className="animate-fadeIn"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white capitalize animate-slideInLeft">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
