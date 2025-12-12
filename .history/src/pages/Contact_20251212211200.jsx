import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/anushkaguptawork01@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      setShowPopup(true);
setFormData({ name: "", email: "", message: "" });

setTimeout(() => setShowPopup(false), 3000);

    } else {
      alert("Failed to send message.");
    }
  } catch (err) {
    alert("Something went wrong.");
  }
};


  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "anushkaguptawork01@gmail.com",
      href: "mailto:anushkaguptawork01@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 6375080729",
      href: "tel:+916375080729",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anushkagupta-tech",
      href: "https://www.linkedin.com/in/anushkagupta-tech",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "github.com/AnushkaGupta1120",
      href: "https://github.com/AnushkaGupta1120",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      {/* glowing teal background */}
      <motion.div
        className="absolute top-20 left-10 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,234,255,0.12), rgba(0,234,255,0.03), transparent)",
        }}
        animate={{ y: [0, 25, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[340px] h-[340px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,198,0.1), rgba(0,255,198,0.03), transparent)",
        }}
        animate={{ y: [0, -25, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--teal-1)] to-[var(--teal-2)] bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have an opportunity, collaboration idea, or just want to
            say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE – CONTACT INFO */}
          <div className="space-y-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(0,234,255,0.25)",
                  }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-md border border-[var(--glass-border)] transition-all"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--teal-1)] to-[var(--teal-2)] text-black shadow-md">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-lg font-semibold hover:text-[var(--teal-1)] transition">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* RIGHT – CONTACT FORM */}
          <motion.form
          
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-[var(--glass-border)] shadow-xl space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="box" />
<input type="hidden" name="_subject" value="New Portfolio Contact" />

            <h3 className="text-3xl font-bold mb-4">Send a Message</h3>

            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input w-full bg-black/40 border border-[var(--glass-border)] rounded-lg px-4 py-3"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input w-full bg-black/40 border border-[var(--glass-border)] rounded-lg px-4 py-3"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="input w-full bg-black/40 border border-[var(--glass-border)] rounded-lg px-4 py-3"
                placeholder="Your message..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px var(--teal-1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg font-bold text-black text-lg bg-gradient-to-r from-[var(--teal-1)] to-[var(--teal-2)] shadow-md"
            >
              Send Message ✉️
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
