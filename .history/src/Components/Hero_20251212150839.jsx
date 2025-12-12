import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  // keep your existing typing logic
  const [displayText, setDisplayText] = useState("");
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const codeSnippets = [
    { lang: "JavaScript", code: 'console.log("Hello, World!")' },
    { lang: "Python", code: 'print("Hello, World!")' },
    { lang: "Java", code: 'System.out.println("Hello, World!");' },
    { lang: "C++", code: 'cout << "Hello, World!" << endl;' },
    { lang: "React/JSX", code: '<h1>Hello, World!</h1>' },
  ];
  const fullText = codeSnippets[currentSnippet].code;
  useEffect(() => {
    let idx = 0;
    const t = setInterval(() => {
      if (idx <= fullText.length) {
        setDisplayText(fullText.slice(0, idx));
        idx++;
      } else {
        const rot = setTimeout(() => {
          setCurrentSnippet(s => (s + 1) % codeSnippets.length);
          setDisplayText("");
        }, 2000);
        return () => clearTimeout(rot);
      }
    }, 90);
    return () => clearInterval(t);
  }, [fullText]);

  return (
    <section id="home" className="hero section">
      {/* ambient soft teal radial */}
      <div className="ambient" aria-hidden />

      <div className="container-max" style={{display:'flex', alignItems:'center', gap:32}}>
        <div className="profile-wrap">
          <div className="neon-ring" />
          <div className="outer-ring" />
          <img src="/profile.jpg" alt="Anushka" className="profile-img" />
        </div>

        <div className="meta">
          <p style={{color:'var(--teal-1)', fontWeight:700, letterSpacing:'0.12em'}}>WELCOME DEVELOPER</p>
          <h1>
            Hi, I'm <span className="name">Anushka Gupta</span>
          </h1>

          <p className="subtitle">Full-Stack Developer | Cloud Enthusiast | UI/UX Designer</p>

          <div style={{marginTop:'1rem'}}>
            <span className="badge active">JavaScript</span>
            <span className="badge">React</span>
            <span className="badge">Java</span>
            <span className="badge">Cloud</span>
          </div>

          <div className="code-block" style={{marginTop:18}}>
            <code style={{fontFamily:'monospace', color:'var(--teal-1)', fontSize:18}}>
              &gt; {displayText}<span style={{opacity:0.9}}>|</span>
            </code>
          </div>

          <div style={{marginTop:20, display:'flex', gap:12, alignItems:'center'}}>
            <a href="#projects" className="btn primary">🚀 View My Work</a>
            <a href="#contact" className="btn secondary">💬 Let's Connect</a>
          </div>
        </div>
      </div>
    </section>
  );
}
