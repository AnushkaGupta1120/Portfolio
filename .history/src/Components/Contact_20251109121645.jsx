import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";
import { fadeUp, fadeLeft, fadeRight } from "../utils/scrollVariants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 
                 bg-gray-50 dark:bg-[#0b0c10] 
                 text-gray-900 dark:text-gray-100 
                 transition-colors duration-500 overflow-hidden"
    >
      {/* ✨ Subtle glowing rings background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] border border-[#f4a261]/30 rounded-full top-[-100px] left-[-150px] blur-md"></div>
        <div className="absolute w-[600px] h-[600px] border border-[#f4a261]/20 rounded-full bottom-[-200px] right-[-200px] blur-md"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-[#f4a261] mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg transition-colors duration-500">
            Whether it’s a project, collaboration, or opportunity — I’d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            className="bg-white dark:bg-[#14161a] 
                       border border-[#f4a261]/20 rounded-2xl p-8 
                       shadow-md hover:shadow-lg 
                       transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#f4a261] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: FiMail,
                  label: "Email",
                  value: "anushka.gupta@email.com",
                  href: "mailto:anushka.gupta@email.com",
                },
                {
                  icon: FiPhone,
                  label: "Phone",
                  value: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                {
                  icon: FiLinkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/anushka-gupta",
                  href: "https://linkedin.com/in/anushka-gupta",
                },
                {
                  icon: FiGithub,
                  label: "GitHub",
                  value: "github.com/AnushkaGupta1120",
                  href: "https://github.com/AnushkaGupta1120",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg 
                               bg-gray-100 dark:bg-[#0b0c10] 
                               hover:bg-[#f4a261]/10 
                               transition-all duration-300 group 
                               border border-[#f4a261]/10 hover:border-[#f4a261]/40"
                  >
                    <div className="p-3 rounded-lg bg-[#f4a261]/20 group-hover:bg-[#f4a261]/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#f4a261]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-gray-100 font-semibold group-hover:text-[#f4a261] transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            onSubmit={(e) => e.preventDefault()}
            className="bg-white dark:bg-[#14161a] 
                       border border-[#f4a261]/20 rounded-2xl p-8 
                       shadow-md hover:shadow-lg 
                       transition-all duration-300 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#f4a261] mb-6">
              Send a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg 
                         bg-gray-100 dark:bg-[#0b0c10] 
                         text-gray-900 dark:text-gray-200 
                         border border-[#f4a261]/20 focus:border-[#f4a261]/60 
                         outline-none transition-all duration-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg 
                         bg-gray-100 dark:bg-[#0b0c10] 
                         text-gray-900 dark:text-gray-200 
                         border border-[#f4a261]/20 focus:border-[#f4a261]/60 
                         outline-none transition-all duration-300"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg 
                         bg-gray-100 dark:bg-[#0b0c10] 
                         text-gray-900 dark:text-gray-200 
                         border border-[#f4a261]/20 focus:border-[#f4a261]/60 
                         outline-none resize-none transition-all duration-300"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-full 
                         bg-[#f4a261] text-[#0b0c10] 
                         font-semibold hover:bg-[#ffb87a] 
                         transition-all duration-300 shadow-lg shadow-[#f4a261]/30"
            >
              Send Message ✉️
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
