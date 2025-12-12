import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import photo from "/profile.jpg";  // Use your image in public folder
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const professions = [
    "Full-Stack Developer",
    "Cloud Enthusiast",
    "UI/UX Designer",
    "AI & ML Developer",
  ];

  const quickLinks = [
  {
    img: "/icons/github.svg",
    title: "GitHub",
    link: "https://github.com/AnushkaGupta1120",
  },
  {
    img: "/icons/linkedin.svg",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/anushkagupta-tech/",
  },
  {
    img: "/icons/email.svg",
    title: "Email",
    link: "mailto:anushkaguptawork0@gmail.com",
  },
  {
    img: "/icons/instagram.svg",
    title: "Instagram",
    link: "https://www.instagram.com/anushkaaa._13/",
  },
];



  return (
    <section className="home-section">

      {/* TOP SECTION: PHOTO + INFO SIDE BY SIDE */}
      <div className="home-top">

        {/* LEFT: PROFILE PHOTO WITH GLOW */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="photo-ring"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Anushka Gupta"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: HEADINGS + DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <p className="welcome-text">WELCOME DEVELOPER</p>

          <h1 className="home-title">
            Hi, I’m{" "}
            <motion.span
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="home-name"
            >
              Anushka Gupta
            </motion.span>
          </h1>

          <p className="subtitle">
            Software Developer | Full-Stack Engineer | Cloud & AI Enthusiast
          </p>

          {/* PROFESSION TAGS */}
          <div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background: "var(--accent-gradient)",
                }}
                transition={{ type: "spring", stiffness: 220 }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </div>

          {/* INFO CARDS (LOCATION, SKILLS, CONTACT) */}
          <div className="info-cards">
            {[
              { label: "📍 Location", value: "India" },
              { label: "💼 Expertise", value: "Full-Stack, Cloud, AI/ML" },
              { label: "📧 Contact", value: "anushkagupta.work@gmail.com" },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 240 }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON ROW */}
          <div className="btn-row">
            <button
              onClick={() => navigate("/projects")}
              className="btn primary"
            >
              🚀 View My Work
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="btn secondary"
            >
              💬 Let's Connect
            </button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM: SOCIAL ICONS LIKE KUNJ */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>

        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 230 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter:
                    "drop-shadow(0 0 15px var(--accent)) brightness(1.2)",
                }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
