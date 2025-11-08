import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Subtle glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
            Hi, I’m Anushka Gupta
          </span>
          <span className="block mt-2 text-3xl md:text-4xl text-gray-200">
            Full-Stack Developer & UI/UX Enthusiast
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I craft elegant web experiences blending clean code, intuitive design,
          and innovative technologies to deliver meaningful digital products.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/40"
          >
            Say Hello 👋
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full text-lg font-semibold border border-gray-400 hover:bg-white/10 transition-all duration-300"
          >
            View Work
          </a>
        </motion.div>
      </div>

      {/* Optional gradient overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
}
