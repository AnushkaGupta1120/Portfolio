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
      className={`py-20 px-6 
                  bg-gray-50 dark:bg-[#0b0c10] 
                  text-gray-900 dark:text-gray-100 
                  transition-colors duration-500
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} 
                  transform ease-out`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#f4a261] to-indigo-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#f4a261] to-indigo-400 mx-auto mb-12"></div>

        <div className="bg-white dark:bg-[#14161a] p-8 rounded-xl 
                        shadow-md hover:shadow-lg 
                        border border-[#f4a261]/20 
                        transition-all duration-500">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            B.Tech in Computer Science Engineering
          </h3>
          <p className="text-[#f4a261] mt-2 font-medium">
            Vellore Institute of Technology • 2022 - 2026
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            CGPA: 8.64 / 10.0
          </p>
        </div>
      </div>
    </section>
  );
}
