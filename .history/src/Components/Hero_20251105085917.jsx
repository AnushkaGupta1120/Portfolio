import { useState, useEffect } from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Software Engineer', 'Full Stack Developer', 'Cloud Enthusiast', 'UI/UX Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Download Resume Function
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // make sure resume.pdf is in public folder
    link.download = "Anushka_Gupta_Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-20 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Section */}
        <div className="space-y-8 animate-fadeInLeft">

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gray-900 dark:text-white">Hi, I'm</span><br/>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradientShift">
                Anushka Gupta
              </span>
            </h1>

            <div className="h-16 flex items-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400">
                {roles[roleIndex]}
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Turning ideas into scalable and user-friendly solutions. Passionate about building products that make real impact.
            </p>
          </div>

          {/* ✅ CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">

            {/* ✅ Download Resume Button */}
            <button
              onClick={handleResumeDownload}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              <FiDownload className="group-hover:animate-bounce" />
              Download Resume
            </button>

            <button className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-4">
  <a 
    href="https://github.com/AnushkaGupta1120"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-600 text-gray-800 dark:text-white hover:text-white transform hover:scale-110"
  >
    <FiGithub className="w-6 h-6" />
  </a>

  <a 
    href="https://www.linkedin.com/in/anushkagupta-tech/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-600 text-gray-800 dark:text-white hover:text-white transform hover:scale-110"
  >
    <FiLinkedin className="w-6 h-6" />
  </a>

  <a 
    href="mailto:anushkaguptawork01@gmail.com"
    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-600 text-gray-800 dark:text-white hover:text-white transform hover:scale-110"
  >
    <FiMail className="w-6 h-6" />
  </a>
</div>


        </div>

        {/* Right Avatar Section */}
        <div className="flex justify-center items-center animate-fadeInRight">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-spin-slow opacity-100 p-1">
              <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900"></div>
            </div>
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                AG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
