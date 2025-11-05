import { useEffect, useState } from 'react';

export default function About() {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-titleSlide">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-widthExpand"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image with animation */}
            <div className="flex justify-center animate-fadeInLeft animation-delay-300">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-6 opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-6xl font-bold text-white transform -rotate-3 transition-transform hover:rotate-0 duration-300">
                  👩‍💻
                </div>
              </div>
            </div>

            {/* Right - Text with staggered animations */}
            <div className="space-y-6 animate-fadeInRight animation-delay-300">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-slideInUp animation-delay-400">
                I am a passionate final-year B.Tech student specializing in Computer Science Engineering with a strong foundation in full-stack development. My journey in technology began with curiosity about how applications work behind the scenes, which led me to explore both frontend and backend development.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-slideInUp animation-delay-500">
                I thrive on solving complex problems and building scalable solutions that make a real impact. My experience spans across modern web technologies, cloud platforms, and database systems. I'm particularly interested in AI integration, cloud architecture, and creating intuitive user experiences.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-slideInUp animation-delay-600">
                When I'm not coding, I enjoy contributing learning new technologies and their terminology, participating in hackathons, and staying updated with the latest trends. I believe in continuous learning and am always eager to take on new challenges that push my boundaries.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Years Experience', value: 'Fresher' },
                  { label: 'Projects Completed', value: '15+' },
                  { label: 'Technologies', value: '20+' },
                  { label: 'Hackathons', value: '5+' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:scale-105 transition-all duration-300 animate-scaleIn"
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{item.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
