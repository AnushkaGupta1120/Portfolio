import { motion } from "framer-motion";
import { useState } from "react";
import { FaCoffee, FaHeart } from "react-icons/fa";

export default function GetMeACoffee() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCoffeeClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    window.open("https://buymeacoffee.com/anushkagupta13?new=1", "_blank");
  };

  return (
    <section
      id="coffee"
      className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 
      dark:from-[#1B1F3B] dark:via-[#2A2E57] dark:to-[#0b0c10] 
      transition-colors duration-500 overflow-hidden"
    >
      {/* Floating background lights */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-amber-300/20 dark:bg-[#f4a261]/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/20 dark:bg-[#f4a261]/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Coffee Cup + Steam */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Cup */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.6 }}
            >
              <FaCoffee className="text-8xl text-amber-600 dark:text-[#f4a261]" />
            </motion.div>

            {/* Steam lines */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-8 bg-gray-400/50 dark:bg-gray-300/30 rounded-full"
                  animate={{
                    y: [-10, -30],
                    opacity: [0.6, 0],
                    scale: [1, 1.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Buy Me a Coffee ☕
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          If you’ve enjoyed my work or found it helpful, consider supporting me
          with a coffee. Your support keeps me motivated to keep building and sharing cool stuff. 💛
        </motion.p>

        {/* Coffee Button */}
        <motion.button
          onClick={handleCoffeeClick}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 40px rgba(244, 162, 97, 0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 
          dark:from-[#f4a261] dark:to-[#F28C6A] 
          text-white font-bold text-xl rounded-full shadow-2xl 
          hover:shadow-[0_0_40px_rgba(244,162,97,0.6)] 
          transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          <FaCoffee className="text-2xl" />
          Buy Me a Coffee
          <FaHeart className="text-red-300" />
        </motion.button>

        {/* Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: ["#f4a261", "#a855f7", "#3b82f6", "#f472b6"][i % 4],
                  left: `${Math.random() * 100}%`,
                  top: "50%",
                }}
                initial={{ opacity: 1, scale: 0 }}
                animate={{
                  opacity: 0,
                  scale: [0, 1, 0.5],
                  y: [0, -300],
                  x: [(Math.random() - 0.5) * 400],
                }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            ))}
          </div>
        )}

        {/* Thank You Message */}
        <motion.div
          className="mt-12 p-6 bg-white/50 dark:bg-[#2A2E57]/50 backdrop-blur-sm rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            <span className="text-2xl">🙏</span> Thank you for your support!
            Every coffee helps me create better projects and share more with the dev community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
