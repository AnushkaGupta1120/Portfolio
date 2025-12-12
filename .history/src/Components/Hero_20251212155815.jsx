import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Multiple "Hello" in different coding languages with full context
  const codeSnippets = [
    {
      lang: "JavaScript",
      code: 'console.log("Hello, World!")',
      color: "#f7df1e",
    },
    {
      lang: "Python",
      code: 'print("Hello, World!")',
      color: "#3776ab",
    },
    {
      lang: "Java",
      code: 'System.out.println("Hello, World!");',
      color: "#007396",
    },
    {
      lang: "C++",
      code: 'cout << "Hello, World!" << endl;',
      color: "#00599c",
    },
    {
      lang: "React/JSX",
      code: '<h1>Hello, World!</h1>',
      color: "#61dafb",
    },
  ];

  const fullText = codeSnippets[currentSnippet].code;

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        // Auto-rotate after showing full text
        const rotateTimer = setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
          setIsTyping(true);
          setDisplayText("");
        }, 3000);
        return () => clearTimeout(rotateTimer);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
   <section
  id="home"
  className="relative min-h-screen flex flex-col justify-center items-center text-center 
             bg-black text-gray-100 transition-colors duration-500 overflow-hidden"
>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-[#f4a261]/20 to-transparent dark:from-[#f4a261]/10 rounded-full blur-3xl top-10 right-20"
        animate={{ y: [0, 40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-br from-[#a855f7]/20 to-transparent dark:from-[#a855f7]/10 rounded-full blur-3xl bottom-20 left-10"
        animate={{ y: [0, -40, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <motion.svg
          className="w-full h-full"
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
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
        </motion.svg>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="z-10 px-4 max-w-6xl"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-semibold text-[#f4a261] mb-4 tracking-widest uppercase"
        >
          Welcome Developer 👨‍💻
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
            Hi, I'm{" "}
          </span>
          <motion.span
            className="inline-block bg-gradient-to-r from-[#f4a261] via-[#F28C6A] to-[#f4a261] bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Anushka Gupta
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10 font-medium"
        >
          Full-Stack Developer | Cloud Enthusiast | UI/UX Designer
        </motion.p>

        {/* Typewriter Code Block */}
        <motion.div
          variants={itemVariants}
          className="mb-12 inline-block w-full max-w-2xl"
        >
          <div className="relative p-8 bg-gradient-to-br from-gray-900/5 to-gray-900/10 dark:from-[#1B1F3B]/80 dark:to-[#2A2E57]/80 backdrop-blur-md border border-gray-200 dark:border-[#464D86]/50 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Decorative corner lights */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#f4a261]/10 dark:bg-[#f4a261]/5 rounded-full blur-3xl" />

            {/* Language indicator */}
            <motion.div
              className="flex gap-2 mb-4 pb-4 border-b border-gray-200 dark:border-[#464D86]/30"
              key={currentSnippet}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {codeSnippets.map((snippet, idx) => (
                <motion.div
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-all ${
                    idx === currentSnippet
                      ? "bg-[#f4a261] text-white"
                      : "bg-gray-200 dark:bg-[#464D86]/30 text-gray-700 dark:text-gray-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setCurrentSnippet(idx);
                    setDisplayText("");
                    setIsTyping(true);
                  }}
                >
                  {snippet.lang}
                </motion.div>
              ))}
            </motion.div>

            {/* Code Display */}
            <code className="font-mono text-lg md:text-2xl text-[#f4a261] leading-relaxed">
              <span className="text-gray-700 dark:text-gray-400">&gt; </span>
              {displayText.split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.02, duration: 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-[#f4a261]"
              >
                |
              </motion.span>
            </code>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
        >
          {/* Primary Button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-4 rounded-full font-bold text-lg text-white overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f4a261] via-[#F28C6A] to-[#f4a261] rounded-full animate-pulse" />
            <div className="absolute inset-1 bg-gradient-to-r from-[#f4a261] via-[#F28C6A] to-[#f4a261] rounded-full" />

            <span className="relative flex items-center justify-center gap-3">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🚀
              </motion.span>
              <span>View My Work</span>
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 30px rgba(244, 162, 97, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-4 rounded-full font-bold text-lg text-gray-900 dark:text-white border-2 border-[#f4a261] bg-white/50 dark:bg-[#2A2E57]/50 backdrop-blur-md overflow-hidden group hover:bg-[#f4a261]/10 transition-colors duration-300"
          >
            <span className="relative flex items-center justify-center gap-3">
              <motion.span
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💬
              </motion.span>
              <span>Let's Connect</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-500"
        >
          <p className="text-sm mb-2">Scroll to explore</p>
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