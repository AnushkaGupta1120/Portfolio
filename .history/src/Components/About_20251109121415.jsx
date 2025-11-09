import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    const el = document.getElementById("about");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
  id="about"
  className="relative min-h-screen flex items-center justify-center 
             bg-gray-50 dark:bg-[#0b0c10] 
             text-gray-900 dark:text-gray-100 
             overflow-hidden transition-colors duration-500"
>

      <div className="absolute w-[600px] h-[600px] border border-[#f4a261]/10 rounded-full top-[-250px] right-[-200px] blur-sm"></div>
      <div className="absolute w-[400px] h-[400px] border border-[#f4a261]/10 rounded-full bottom-[-150px] left-[-150px] blur-sm"></div>

      <div
        className={`max-w-6xl w-full px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Text */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold text-[#f4a261]">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300">

            I’m a final-year B.Tech student passionate about creating
            scalable, visually stunning digital products. I specialize in
            full-stack web development and UI/UX design, crafting modern and
            functional user interfaces.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I believe great products are born at the intersection of code,
            design, and creativity. I’m focused on continuous learning in
            Cloud Computing, AI, and modern web frameworks.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {[
              { label: "Projects", value: "7+" },
              { label: "Hackathons", value: "5+" },
              { label: "Technologies", value: "20+" },
              { label: "Experience", value: "Fresher" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#14161a] border border-[#f4a261]/20 rounded-lg p-4 text-center hover:border-[#f4a261]/60 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-[#f4a261]">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-semibold text-[#0b0c10] bg-[#f4a261] hover:bg-[#ffb87a] transition-all duration-300 shadow-lg shadow-[#f4a261]/30"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="absolute -top-6 -left-6 w-80 h-80 border border-[#f4a261]/40 rounded-3xl rotate-6"></div>
          <div className="absolute top-6 left-6 w-72 h-72 border border-[#f4a261]/20 rounded-3xl -rotate-3"></div>

          <img
            src="/profile.jpg"
            alt="Anushka"
            className="relative w-72 h-72 object-cover rounded-3xl border-2 border-[#f4a261]/30 shadow-[0_0_40px_rgba(244,162,97,0.2)] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
