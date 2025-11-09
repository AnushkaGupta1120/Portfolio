import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Multiple "Hello" in different coding languages
  const codeSnippets = [
    { lang: "JavaScript", code: 'console.log("Hello")' },
    { lang: "Python", code: 'print("Hello")' },
    { lang: "Java", code: 'System.out.println("Hello");' },
    { lang: "C++", code: 'cout << "Hello" << endl;' },
  ];

  const fullText = 'console.log("Hello")';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80); // Typewriter speed

    return () => clearInterval(interval);
  }, []);

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 40px rgba(244, 162, 97, 0.8)",
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0b0c10] dark:via-[#1B1F3B] dark:to-[#2A2E57] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-[#f4a261]/20 to-transparent dark:from-[#f4a261]/10 rounded-full blur-3xl top-10 right-20"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-br from-[#a855f7]/20 to-transparent dark:from-[#a855f7]/10 rounded-full blur-3xl bottom-20 left-10"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Background Effect */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 px-4"
      >
        {/* Greeting Text */}
        <motion.p
          className="text-lg md:text-xl font-semibold text-[#f4a261] mb-6 tracking-wider"
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "2px" }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.p>

        {/* Main Heading with Typewriter Code */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
              Hi, I'm{" "}
            </span>
            <motion.span
              className="inline-block bg-gradient-to-r from-[#f4a261] via-[#F28C6A] to-[#f4a261] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Anushka Gupta
            </motion.span>
          </h1>

          {/* Typewriter Code Block */}
          <motion.div
            className="inline-block mt-6 p-6 bg-gray-900/5 dark:bg-[#1B1F3B]/80 backdrop-blur-sm border border-gray-200 dark:border-[#464D86]/50 rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <code className="font-mono text-lg md:text-2xl text-[#f4a261]">
              <span className="text-gray-700 dark:text-gray-300">&gt;</span>{" "}
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-[#f4a261]"
              >
                |
              </motion.span>
            </code>
          </motion.div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10 font-medium">
          Full-Stack Developer | Cloud Enthusiast | UI/UX Designer
        </p>

        {/* Creative Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          {/* Primary Button - Creative Gradient */}
          <motion.a
            href="#projects"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="relative px-10 py-4 rounded-full font-bold text-lg text-white overflow-hidden group"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f4a261] via-[#F28C6A] to-[#f4a261] rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Rotating Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#f4a261] to-[#F28C6A] bg-clip-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ opacity: 0 }}
            />

            <span className="relative flex items-center justify-center gap-2">
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                🚀
              </motion.span>
              View My Work
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -5 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          {/* Secondary Button - Glassmorphism */}
          <motion.a
            href="#contact"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="relative px-10 py-4 rounded-full font-bold text-lg text-gray-900 dark:text-white backdrop-blur-md border-2 border-gray-300 dark:border-[#464D86] bg-white/30 dark:bg-[#2A2E57]/30 overflow-hidden group"
          >
            {/* Hover Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#f4a261]/20 to-transparent rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <span className="relative flex items-center justify-center gap-2">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 20 }}
                transition={{ duration: 0.3 }}
              >
                💬
              </motion.span>
              Get In Touch
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                ✨
              </motion.span>
            </span>
          </motion.a>
        </div>

        {/* Code Language Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {codeSnippets.map((snippet, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-4 py-2 bg-gray-200/50 dark:bg-[#2A2E57]/50 backdrop-blur-sm border border-gray-300 dark:border-[#464D86] rounded-full text-sm font-mono text-gray-700 dark:text-gray-300 cursor-pointer"
            >
              {snippet.lang}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}