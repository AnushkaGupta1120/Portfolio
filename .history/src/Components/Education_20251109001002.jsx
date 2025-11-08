import { useEffect, useState } from 'react';

export default function Education() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 });
    const el = document.getElementById('education');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-navy transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-mutedIndigo bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-mutedIndigo mx-auto mb-12"></div>

        <div className="bg-white dark:bg-indigoCard p-8 rounded-xl shadow-md hover:shadow-glow transition-all">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-light">B.Tech in Computer Science Engineering</h3>
          <p className="text-accent mt-2">Vellore Institute of Technology • 2022 - 2026</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">CGPA: 8.64 / 10.0</p>
        </div>
      </div>
    </section>
  );
}
