import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const codeSnippets = [
    { lang: "JavaScript", code: 'console.log("Hello, World!")' },
    { lang: "React", code: 'return <HelloWorld />;' },
    { lang: "Java", code: 'System.out.println("Hello, World!");' },
    { lang: "Cloud", code: 'aws.deploy("HelloWorldApp")' },
  ];

  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const fullText = codeSnippets[currentSnippet].code;

  // Typewriter Animation
  useEffect(() => {
    let index = 0;
    const type = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
          setDisplayText("");
        }, 2000);
      }
    }, 90);
    return () => clearInterval(type);
  }, [fullText]);

  // Handler for badges (fix for NOT working clicks)
  const handleBadgeClick = (lang) => {
    const idx = codeSnippets.findIndex((snip) => snip.lang === lang);
    if (idx !== -1) {
      setCurrentSnippet(idx);
      setDisplayText("");
    }
  };

  return (
    <section id="home" className="hero section">

      {/* Ambient background glow */}
      <div className="ambient" aria-hidden />

      <div className="container-max" style={{ display: "flex", alignItems: "center", gap: 32 }}>

        {/* Profile */}
        <div className="profile-wrap">
          <div className="neon-ring" />
          <div className="outer-ring" />
          <img src="/profile.jpg" alt="Anushka" className="profile-img" />
        </div>

        {/* Right Side Content */}
        <div className="meta">

          {/* WELCOME DEVELOPER with hover animation */}
          <motion.p
            whileHover={{
              scale: 1.08,
              textShadow: "0 0 15px #00fff2",
              color: "#00fff2",
            }}
            transition={{ duration: 0.3 }}
            className="welcome-text"
          >
            WELCOME DEVELOPER
          </motion.p>

          <h1>
            Hi, I'm <span className="name">Anushka Gupta</span>
          </h1>

          <p className="subtitle">
            Full-Stack Developer | Cloud Enthusiast | UI/UX Designer
          </p>

          {/* Skill Badges — now clickable */}
          <div className="badge-row">
            {["JavaScript", "React", "Java", "Cloud"].map((item, i) => (
              <motion.span
                key={i}
                onClick={() => handleBadgeClick(item)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`badge ${codeSnippets[currentSnippet].lang === item ? "active" : ""}`}
                style={{ cursor: "pointer" }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* Typewriter Code Block */}
          <div className="code-block">
            <code className="code-text">
              &gt; {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </code>
          </div>

          {/* Buttons */}
          <div className="btn-row">
            <a href="#projects" className="btn primary">🚀 View My Work</a>
            <a href="#contact" className="btn secondary">💬 Let's Connect</a>
          </div>
        </div>
      </div>
    </section>
  );
}
