import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (data.success) {
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } else {
    alert("Failed to send email.");
  }
};


  const contactInfo = [
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
  ];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b0c10] dark:to-[#1B1F3B] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Background glows */}
      <motion.div
        className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-bl from-[#a855f7]/15 to-transparent dark:from-[#a855f7]/8 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#f4a261]/15 to-transparent dark:from-[#f4a261]/8 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Whether it's a project, collaboration, or opportunity — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8"
            >
              Contact Information
            </motion.h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={item.href}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="p-4 bg-white dark:bg-[#2A2E57]/50 backdrop-blur-sm border border-gray-200 dark:border-[#464D86]/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
                  >
                    <motion.div
                      className="p-3 bg-gradient-to-br from-[#f4a261] to-[#F28C6A] text-white rounded-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-[#f4a261] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="p-8 bg-white dark:bg-[#2A2E57]/50 backdrop-blur-sm border border-gray-200 dark:border-[#464D86]/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 space-y-6"
          >
            <h3 className="text-2xl font-bold">Send a Message</h3>

            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-semibold mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-[#1B1F3B] border border-gray-300 dark:border-[#464D86] rounded-lg focus:outline-none focus:border-[#f4a261] focus:ring-2 focus:ring-[#f4a261]/20 transition-all duration-300"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-semibold mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-[#1B1F3B] border border-gray-300 dark:border-[#464D86] rounded-lg focus:outline-none focus:border-[#f4a261] focus:ring-2 focus:ring-[#f4a261]/20 transition-all duration-300"
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-semibold mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-[#1B1F3B] border border-gray-300 dark:border-[#464D86] rounded-lg focus:outline-none focus:border-[#f4a261] focus:ring-2 focus:ring-[#f4a261]/20 transition-all duration-300 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-[#f4a261] to-[#F28C6A] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✉️
              </motion.span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}