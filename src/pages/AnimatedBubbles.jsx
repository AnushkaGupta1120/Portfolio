// components/AnimatedBubbles.jsx
import { motion } from "framer-motion";

const bubbleSkills = [
  { name: "JavaScript", icon: "/icons/javascript-original.svg" },
  { name: "C", icon: "/icons/c-original.svg" },
  { name: "Python", icon: "/icons/python-original.svg" },
  { name: "MongoDB", icon: "/icons/mongodb-original.svg" },
  { name: "React", icon: "/icons/react-original.svg" },
  { name: "HTML", icon: "/icons/html5-original.svg" },
  { name: "CSS", icon: "/icons/css3-original.svg" },
  { name: "Git", icon: "/icons/git-original.svg" },
  { name: "OpenCV", icon: "/icons/opencv-original.svg" },
  { name: "C++", icon: "/icons/cplusplus-original.svg" },
  { name: "Java", icon: "/icons/java-original.svg" },
  { name: "TensorFlow", icon: "/icons/tensorflow-original.svg" },
  { name: "MySQL", icon: "/icons/mysql-original.svg" },
];

export default function AnimatedBubbles() {
  return (
    <section className="py-20 bg-[#000] text-white flex justify-center">
      <div
        className="
        w-[90%] md:w-[80%]
        bg-[#0a0a0a] rounded-3xl border border-[#00ffd5]/20 
        shadow-[0_0_40px_#00ffd522] 
        p-10 relative overflow-hidden"
      >
        {/* Glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ffd522,transparent)] pointer-events-none" />

        {/* Bubbles Container */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
          {bubbleSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="
              w-32 h-32 rounded-full bg-[#00ffd510] border border-[#00ffd533]
              shadow-[0_0_25px_#00ffd533]
              flex flex-col items-center justify-center backdrop-blur-md
              hover:shadow-[0_0_45px_#00ffd5] transition-all"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + index, repeat: Infinity }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              <p className="mt-2 text-sm opacity-80">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
