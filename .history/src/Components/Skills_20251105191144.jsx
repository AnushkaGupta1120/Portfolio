import { useEffect, useState } from 'react';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiMysql, SiMongodb, 
  SiTailwindcss, SiGit, SiGithub, SiFigma, SiPostman,
  SiExpress, SiAmazonaws, SiLinux, SiHtml5, SiCss3,
  SiVisualstudiocode, SiJava, SiPython
} from 'react-icons/si';

const skillsData = {
  languages: [
    { name: 'Java', icon: SiJava, color: '#007396' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
  ],
  frontend: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
  ],
  databases: [
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  ],
  tools: [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ],
  cloud: [
    { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
  ],
};

function SkillIcon({ skill, index, isVisible }) {
  const IconComponent = skill.icon;
  
  return (
    <div
      className={`group relative p-8 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 cursor-pointer ${
        isVisible ? 'animate-scaleIn' : 'opacity-0'
      }`}
      style={{ 
        animationDelay: `${index * 0.05}s`,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Icon */}
      <div className="relative flex items-center justify-center mb-4">
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
          style={{ backgroundColor: skill.color }}
        />
        <IconComponent 
          className="relative text-6xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" 
          style={{ color: skill.color }}
        />
      </div>

      {/* Skill Name - Hidden by default, shows on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold py-2 px-4 rounded-b-2xl text-center shadow-lg">
          {skill.name}
        </div>
      </div>

      {/* Animated background glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
        }}
      />
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
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-titleSlide">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Hover over icons to reveal skills
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-widthExpand"></div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className="animate-fadeIn"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white capitalize animate-slideInUp">
                <span className="relative inline-block">
                  {category}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                  <SkillIcon key={skill.name} skill={skill} index={index} isVisible={isVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}