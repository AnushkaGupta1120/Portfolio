import { useEffect, useState } from "react";

export default function Education() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    const el = document.getElementById("education");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className={`section 
                  bg-section-light bg-section-dark
                  text-white dark:text-gray-100
                  transition-all duration-500
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  transform ease-out`}
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4 text-gradient">
          Education
        </h2>

        <div className="divider mb-12"></div>

        <div
          className="
            bg-card bg-card-hover 
            p-8 rounded-xl 
            border border-[var(--accent)]/20 
            transition-all duration-500
          "
        >
          <h3 className="text-2xl font-bold">
            B.Tech in Computer Science Engineering
          </h3>

          <p className="text-accent mt-2 font-medium">
            Vellore Institute of Technology • 2022 - 2026
          </p>

          <p className="text-soft mt-2">
            CGPA: 8.64 / 10.0
          </p>
        </div>

      </div>
    </section>
  );
}
