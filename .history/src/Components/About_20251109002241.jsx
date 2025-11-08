import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="section bg-section-light dark:bg-section-dark transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="divider"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 👩‍💻 Left - Profile Image */}
          <div
            className={`flex justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-mutedIndigo blur-lg opacity-25 animate-floatSlow"></div>
              <img
                src="/profile.jpg"
                alt="Anushka Gupta"
                className="relative w-full h-full object-cover rounded-2xl shadow-lg border-2 border-transparent hover:border-accent transition-all duration-500"
              />
            </div>
          </div>

          {/* 📝 Right - Description */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-soft leading-relaxed text-lg">
              I’m <span className="text-accent font-semibold">Anushka Gupta</span>, 
              a final-year B.Tech student in Computer Science Engineering (specialization in Gaming Technology), 
              passionate about crafting meaningful digital experiences. I thrive on transforming creative ideas 
              into functional, user-centric applications that merge aesthetics with efficiency.
            </p>

            <p className="text-soft leading-relaxed text-lg">
              My work blends <span className="text-accent">Frontend precision</span> and 
              <span className="text-accent"> Backend logic</span> to build complete, scalable systems. 
              I’m also deeply intrigued by <span className="text-accent">Cloud Computing</span> and 
              <span className="text-accent"> AI integration</span>, striving to innovate wherever technology 
              and human experience meet.
            </p>

            <p className="text-soft leading-relaxed text-lg">
              Outside of development, I enjoy learning new technologies, designing in Figma, 
              and contributing to open-source projects. My mission is to build solutions 
              that make life smarter, simpler, and more connected.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { label: "Experience", value: "Fresher" },
                { label: "Projects", value: "7+" },
                { label: "Technologies", value: "20+" },
                { label: "Hackathons", value: "5+" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card bg-card-hover p-4 rounded-xl text-center"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="text-2xl font-bold text-accent">{item.value}</div>
                  <div className="text-sm text-soft">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
