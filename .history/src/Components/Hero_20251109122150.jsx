import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center 
                 bg-gray-50 dark:bg-[#0b0c10] 
                 text-gray-900 dark:text-gray-100 
                 transition-colors duration-500 overflow-hidden"
    >
      {/* ✨ Decorative circles */}
      <div className="absolute w-[500px] h-[500px] border border-[#f4a261]/10 rounded-full top-[-200px] right-[-150px] blur-sm"></div>
      <div className="absolute w-[400px] h-[400px] border border-[#f4a261]/10 rounded-full bottom-[-150px] left-[-100px] blur-sm"></div>

      {/* 🌟 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I’m{" "}
          <span className="text-[#f4a261]">Anushka Gupta</span>
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-400 mb-8 transition-colors duration-500">
          Full-Stack Developer | Cloud Enthusiast | UI/UX Designer
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Primary CTA */}
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold 
                       text-white dark:text-[#0b0c10] 
                       bg-[#f4a261] hover:bg-[#ffb87a] 
                       transition-all duration-300 shadow-lg shadow-[#f4a261]/30"
          >
            View My Work
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold 
                       border border-[#f4a261] text-[#f4a261] 
                       hover:bg-[#f4a261]/10 
                       transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
