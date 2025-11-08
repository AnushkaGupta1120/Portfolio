import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-50 dark:from-navy dark:via-indigoCard dark:to-mutedIndigo text-gray-900 dark:text-light transition-colors duration-500"
    >
      {/* Glowing blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-mutedIndigo/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-mutedIndigo">
            Hi, I’m Anushka Gupta
          </span>
          <span className="block mt-2 text-3xl md:text-4xl text-gray-700 dark:text-softText">
            Full-Stack Developer & UI/UX Enthusiast
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I craft elegant, scalable, and intuitive web experiences that combine
          clean code, design, and innovation.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-accent to-mutedIndigo text-navy dark:text-light hover:opacity-90 shadow-glow transition-all duration-300"
          >
            Say Hello 👋
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full text-lg font-semibold border border-accent text-accent hover:bg-accent/10 transition-all duration-300"
          >
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
