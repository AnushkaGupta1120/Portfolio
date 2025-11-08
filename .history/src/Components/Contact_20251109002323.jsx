import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#0b0c10] text-gray-100 text-center"
    >
      <h2 className="text-5xl font-extrabold text-[#f4a261] mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-12">
        Let’s build something amazing together 🚀
      </p>

      <div className="flex justify-center gap-8 text-3xl text-[#f4a261]">
        <a href="mailto:anushka.gupta@email.com">
          <FiMail className="hover:text-[#ffb87a]" />
        </a>
        <a href="https://linkedin.com/in/anushka-gupta">
          <FiLinkedin className="hover:text-[#ffb87a]" />
        </a>
        <a href="https://github.com/AnushkaGupta1120">
          <FiGithub className="hover:text-[#ffb87a]" />
        </a>
      </div>
    </section>
  );
}
