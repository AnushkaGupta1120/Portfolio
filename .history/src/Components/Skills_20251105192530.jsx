import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiExpress,
  SiAmazon,
  SiLinux,
  SiHtml5,
  SiCss3,
  SiVisualstudio,
  SiPython
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillsData = {
  languages: [
    { name: 'Java', icon: FaJava, color: '#007396' },
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
    { name: 'VS Code', icon: SiVisualstudio, color: '#007ACC' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ],
  cloud: [{ name: 'AWS', icon: SiAmazon, color: '#FF9900' }],
};

function SkillIcon({ skill, index, isVisible }) {
  const IconComponent = skill.icon;

  return (
    <div
      className={`group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 cursor-pointer ${
        isVisible ? 'animate-scaleIn opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative flex items-center justify-center mb-3">
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
          style={{ backgroundColor: skill.color }}
        />
        <IconComponent
          className="relative text-5xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
          style={{ color: skill.color }}
        />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold py-1 px-3 rounded-lg shadow-md whitespace-nowrap">
          {skill.name}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-3">
            Hover to reveal skill names
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-14">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className="animate-fadeIn"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white capitalize">
                {category}
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
