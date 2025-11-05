import { useState, useEffect } from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Software Engineer', 'Full Stack Developer', 'Cloud Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fadeInLeft">
          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slideInUp">
              <span className="text-gray-900 dark:text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradientShift">
                Anushka Gupta
              </span>
            </h1>

            {/* Typing Role */}
            <div className="h-16 flex items-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400 animate-fadeIn">
                {roles[roleIndex]}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md animate-slideInUp animation-delay-300">
              Turning ideas into scalable and user-friendly solutions. Passionate about building products that make a real impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 animate-slideInUp animation-delay-500">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
              <FiDownload className="group-hover:animate-bounce" />
              Download Resume
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 animate-slideInUp animation-delay-700">
            <a href="#" className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-800 dark:text-white hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <FiGithub className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-800 dark:text-white hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-800 dark:text-white hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <FiMail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Content - Avatar Circle */}
        <div className="flex justify-center items-center animate-fadeInRight">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated Circle Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-spin-slow opacity-100 p-1">
              <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900"></div>
            </div>

            {/* Avatar Placeholder */}
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl animate-floatUp">
                AG
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500 rounded-full opacity-70 animate-floatSlow"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-500 rounded-full opacity-70 animate-floatSlow animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
