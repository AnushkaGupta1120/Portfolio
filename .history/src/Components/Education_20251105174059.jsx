import { useEffect, useState } from 'react';

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const element = document.getElementById('education');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-titleSlide">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-widthExpand"></div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden animate-slideInUp animation-delay-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="text-center md:text-left animate-fadeInLeft animation-delay-400">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">B.Tech</h3>
              <p className="text-gray-600 dark:text-gray-400">Computer Science Engineering</p>
            </div>

            <div className="text-center animate-fadeIn animation-delay-500">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Vellore Institute of Technology</h3>
              <p className="text-gray-600 dark:text-gray-400">2021 - 2025</p>
            </div>
            <div className="text-center md:text-right animate-fadeInRight animation-delay-600">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">CGPA</h3>
              <p className="text-gray-600 dark:text-gray-400">8.5 / 10.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
