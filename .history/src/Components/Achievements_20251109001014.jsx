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
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 });
    const el = document.getElementById('achievements');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-50 dark:bg-navy transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-accent to-mutedIndigo bg-clip-text text-transparent mb-4">
          Achievements & Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-mutedIndigo mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div key={i} className="p-6 bg-white dark:bg-indigoCard rounded-xl shadow-md hover:shadow-glow transition-all">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-light">{a.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
