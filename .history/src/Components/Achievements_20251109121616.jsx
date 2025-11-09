import { useEffect, useState } from 'react';

const achievements = [
  { title: 'TCS CodeVita Finalist', desc: 'Top 500 globally' },
  { title: 'AWS Certified Practitioner', desc: 'Cloud expertise validated' },
  { title: 'Smart India Hackathon', desc: 'Developed scalable solutions' },
  { title: 'React.js Course', desc: 'Advanced frontend mastery' },
];

export default function Achievements() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    const el = document.getElementById('achievements');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      className={`py-20 px-6 
                  bg-gray-50 dark:bg-[#0b0c10] 
                  text-gray-900 dark:text-gray-100 
                  transition-colors duration-500 
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  transform ease-out`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f4a261] to-indigo-400 bg-clip-text text-transparent mb-4">
          Achievements & Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#f4a261] to-indigo-400 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-[#14161a] 
                         border border-[#f4a261]/20 
                         rounded-xl shadow-md hover:shadow-lg hover:border-[#f4a261]/50
                         transition-all duration-300"
            >
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{a.title}</h3>
              <p className="text-gray-700 dark:text-gray-400">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
