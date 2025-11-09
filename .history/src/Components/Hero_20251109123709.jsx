import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-[#0b0c10] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* ✨ Decorative circles with animation */}
      <motion.div
        className="absolute w-[500px] h-[500px] border border-[#f4a261]/10 rounded-full top-[-200px] right-[-150px] blur-sm"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] border border-[#f4a261]/10 rounded-full bottom-[-150px] left-[-100px] blur-sm"
        animate={{ rotate: -360, scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* 🌟 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {/* Animated "Hi, I'm Anushka Gupta" text with hover effect */}
          <motion.span
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={
              isHovered
                ? {
                    scale: 1.1,
                    color: ["#f4a261", "#F28C6A", "#f4a261"],
                    textShadow: "0 0 25px rgba(244, 162, 97, 0.8)",
                  }
                : { scale: 1 }
            }
            transition={{ duration: 0.6 }}
            className="inline-block cursor-pointer"
          >
            Hi, I'm{" "}
            <span className="text-[#f4a261]">Anushka Gupta</span>
          </motion.span>
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-400 mb-8 transition-colors duration-500">
          Full-Stack Developer | Cloud Enthusiast | UI/UX Designer
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Primary CTA with advanced hover effect */}
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(244, 162, 97, 0.6)",
              backgroundColor: "#F28C6A",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-8 py-3 rounded-full font-semibold text-white bg-[#f4a261] shadow-lg hover:shadow-glow transition-all duration-300"
          >
            View My Work
          </motion.a>

          {/* Secondary CTA with hover effect */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              borderColor: "#f4a261",
              color: "#f4a261",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-8 py-3 rounded-full font-semibold border-2 border-gray-400 dark:border-gray-600 hover:bg-[#f4a261]/10 transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}