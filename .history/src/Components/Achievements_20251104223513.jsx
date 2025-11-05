import { useEffect, useState } from 'react';

const achievementsData = [
  { title: 'TCS CodeVita Finalist 2024', description: 'Ranked among top 500 participants globally' },
  { title: 'AWS Certified Cloud Practitioner', description: 'Validated cloud computing knowledge' },
  { title: 'HackerRank Problem Solving (Gold)', description: 'Strong algorithmic problem-solving skills' },
  { title: 'Smart India Hackathon', description: 'Developed innovative real-world solutions' },
  { title: 'React.js Course Certificate', description: 'Completed comprehensive React development course' },
  { title: 'Full Stack Developer Badge', description: 'Proficiency across web development stack' },
];

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const element = document.getElementById('achievements');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-titleSlide">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-widthExpand"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-scaleIn group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                🏆
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
