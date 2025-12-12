// components/SkillsCategories.jsx

const categories = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "React", "Tailwind", "jQuery"],
  },
  {
    title: "Databases & Tools",
    items: ["MySQL", "MongoDB", "Git", "Postman"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Node.js", "Express", "OpenCV", "TensorFlow"],
  },
  {
    title: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "Cloud Computing",
      "REST APIs",
      "System Design",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Teamwork",
      "Problem Solving",
      "Adaptability",
      "Communication",
    ],
  },
];

export default function SkillsCategories() {
  return (
    <section className="py-20 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00ffe0]">
          Skills Overview
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="
                bg-[#0f0f0f] border border-[#00ffd533] 
                rounded-2xl p-6 shadow-lg
                hover:shadow-[0_0_20px_#00ffd5] 
                transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#00ffe0]">
                {cat.title}
              </h3>

              <ul className="space-y-2 text-gray-300">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#00ffd5]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
