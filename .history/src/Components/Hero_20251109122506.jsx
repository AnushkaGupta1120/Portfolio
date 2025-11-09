import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-br from-[#faf7f2] via-[#fff6ec] to-[#ffe8d6] 
                 dark:bg-[#0b0c10]
                 text-[#2c2c2c] dark:text-gray-100
                 transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute w-[500px] h-[500px] border border-[#f4a261]/10 rounded-full top-[-200px] right-[-150px] blur-sm"></div>
      <div className="absolute w-[400px] h-[400px] border border-[#f4a261]/10 rounded-full bottom-[-150px] left-[-100px] blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-[#f4a261] to-[#ffb87a] bg-clip-text text-transparent">
            Anushka Gupta
          </span>
        </h1>

        <p className="text-xl text-[#5a5a5a] dark:text-gray-400 mb-8 transition-colors duration-500">
          Full-Stack Developer | Cloud Enthusiast | UI/UX Designer
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold 
                       bg-gradient-to-r from-[#f4a261] to-[#ffb87a]
                       text-[#0b0c10] hover:opacity-90
                       dark:bg-[#f4a261] dark:hover:bg-[#ffb87a]
                       transition-all duration-300 shadow-md"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold 
                       border border-[#f4a261] text-[#f4a261] hover:bg-[#f4a261]/10
                       dark:hover:bg-[#f4a261]/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
