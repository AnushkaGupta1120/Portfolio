import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiZoomIn, FiZoomOut, FiMaximize } from "react-icons/fi";

export default function Resume() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start pt-24 pb-16 bg-black text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent"
      >
        My Resume
      </motion.h2>

      {/* Resume Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[92%] max-w-6xl rounded-xl bg-[#0d0d0d] border border-white/10 shadow-[0_0_25px_rgba(0,255,250,0.15)] overflow-hidden"
      >

        {/* Top Toolbar */}
        <div className="w-full px-5 py-3 flex justify-between items-center bg-[#111] border-b border-white/10">
          <span className="text-gray-300 font-medium">AnushkaGupta-Resume.pdf</span>

          <div className="flex items-center gap-4 text-gray-300">
            <FiZoomOut className="cursor-pointer hover:text-teal-300" size={20} />
            <FiZoomIn className="cursor-pointer hover:text-teal-300" size={20} />
            <FiMaximize className="cursor-pointer hover:text-teal-300" size={20} />

            <a href="/resume.pdf" download>
              <FiDownload className="cursor-pointer hover:text-teal-300" size={20} />
            </a>
          </div>
        </div>

        {/* Embedded Resume PDF */}
        <iframe
          src="/resume.pdf"
          title="Resume Viewer"
          className="w-full h-[85vh] bg-[#111]"
          style={{ border: "none" }}
        ></iframe>
      </motion.div>

      {/* Download Button */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-3 rounded-lg font-semibold text-black text-lg 
                   bg-gradient-to-r from-teal-300 to-cyan-400 shadow-lg"
      >
        ⬇️ Download Resume
      </motion.a>

    </section>
  );
}
