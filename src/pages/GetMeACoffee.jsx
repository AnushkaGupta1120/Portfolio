import { motion } from "framer-motion";
import { useState } from "react";
import { FaCoffee, FaHeart } from "react-icons/fa";

export default function GetMeACoffee() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCoffeeClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    window.open("https://buymeacoffee.com/anushkagupta13", "_blank");
  };

  return (
    <section
      id="coffee"
      className="
        relative py-24 
        bg-[#050505] 
        text-gray-200 
        overflow-hidden
      "
    >
      {/* Ambient neon glows */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute w-[28rem] h-[28rem] bg-[#00fff2]/20 blur-[180px] top-10 left-0"></div>
        <div className="absolute w-[22rem] h-[22rem] bg-[#a855f7]/20 blur-[160px] bottom-10 right-0"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 px-6">

        {/* Coffee Cup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <motion.div
            whileHover={{ rotate: [-5, 5, -5, 0] }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <FaCoffee className="text-9xl text-[#00fff2]" />

            {/* Steam */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-10 bg-white/20 rounded-full"
                  animate={{
                    y: [-20, -60],
                    opacity: [0.6, 0],
                    scale: [1, 1.3]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-4 
            bg-gradient-to-r from-[#00fff2] to-[#a855f7] bg-clip-text text-transparent"
        >
          Buy Me a Coffee
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-12"
        >
          If my work inspires or helps you, consider supporting me with a coffee.  
          Your support fuels more projects, ideas, and creations.
        </motion.p>

        {/* Coffee Button */}
        <motion.button
          onClick={handleCoffeeClick}
          whileHover={{ scale: 1.12, boxShadow: "0 0 45px rgba(0,255,242,0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="
            px-12 py-4 
            rounded-full font-bold text-xl 
            bg-gradient-to-r from-[#00fff2] to-[#a855f7]
            text-black shadow-[0_0_30px_#00fff233] 
            transition-all flex items-center gap-4 mx-auto
          "
        >
          <FaCoffee className="text-2xl" />
          Support My Work
          <FaHeart className="text-red-300" />
        </motion.button>

        {/* Confetti */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: ["#00fff2", "#a855f7", "#f4a261", "#3b82f6"][i % 4],
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 1, y: 0, scale: 0.6 }}
                animate={{
                  y: [0, 500],
                  x: [(Math.random() - 0.5) * 200],
                  opacity: [1, 0],
                }}
                transition={{ duration: 2.2, ease: "ease-out" }}
              />
            ))}
          </div>
        )}

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 bg-[#11141f]/60 border border-[#00fff2]/20 rounded-2xl shadow-xl backdrop-blur"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-2xl">🙏</span>  
            Thank you for helping me grow.  
            Every coffee is a little push toward bigger dreams.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
