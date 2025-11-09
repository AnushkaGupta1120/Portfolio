import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { label: "7+", desc: "Projects" },
    { label: "5+", desc: "Internships" },
    { label: "20+", desc: "Technologies" },
    { label: "Fresher", desc: "Experience" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#1B1F3B] dark:to-[#0b0c10] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Background glows */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-bl from-[#f4a261]/15 to-transparent dark:from-[#f4a261]/8 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#f4a261] to-[#F28C6A] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg leading-relaxed">
              I'm a final-year B.Tech student passionate about creating{" "}
              <motion.span
                className="font-bold bg-gradient-to-r from-[#f4a261] to-[#F28C6A] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%"] }}
              >
                scalable, visually stunning
              </motion.span>{" "}
              digital products.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg leading-relaxed">
              I specialize in{" "}
              <span className="font-semibold text-[#f4a261]">
                full-stack web development
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#a855f7]">UI/UX design</span>,
              crafting modern and functional user interfaces.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg leading-relaxed">
              I believe great products are born at the intersection of code,
              design, and creativity. I'm focused on continuous learning in{" "}
              <span className="font-semibold text-[#3b82f6]">
                Cloud Computing, AI, and modern web frameworks.
              </span>
            </motion.p>

            {/* Download Resume Button */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#f4a261] to-[#F28C6A] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                📥 Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center"
          >
            {/* Decorative circles */}
            <motion.div
              className="absolute top-0 right-0 w-72 h-72 border-2 border-[#f4a261]/20 dark:border-[#f4a261]/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-56 h-56 border-2 border-[#a855f7]/20 dark:border-[#a855f7]/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile Image */}
            <motion.div
              className="relative z-10 mb-8 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f4a261]/30 dark:border-[#f4a261]/20"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <img
                src="https://via.placeholder.com/300x300?text=Anushka"
                alt="Anushka Gupta"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-[#f4a261]/20 to-[#a855f7]/20"
                animate={{ opacity: isHovered ? 0.5 : 0 }}
              />
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-4 bg-white dark:bg-[#2A2E57]/50 border border-gray-200 dark:border-[#464D86]/30 rounded-xl text-center backdrop-blur-sm"
                >
                  <motion.p
                    className="text-3xl font-bold text-[#f4a261]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.label}
                  </motion.p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}