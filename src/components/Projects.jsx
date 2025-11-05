import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectsData = [
  {
    title: 'MediFlow',
    tagline: 'Smart Supply & Stock Management System',
    description: 'Healthcare supply chain management system with inventory tracking, supplier management, and real-time analytics.',
    tech: ['React', 'Node.js', 'MySQL', 'Express.js', 'Figma','Vercel'],
    category: 'Full Stack',
  },
  {
    title: 'SkillSync',
    tagline: 'Centralized Skill Tracker & Team Matcher',
    description: 'Platform for tracking employee skills with AI-powered team recommendations and skill development pathways.',
    tech: ['React', 'Express.js', 'PostgreSQL', 'JWT'],
    category: 'Full Stack',
  },
  {
    title: 'BEATWELL',
    tagline: 'Heart Disease Prediction System',
    description: 'A prediction model with 15 parameters and ~92% accuracy for predicting the heart disease',
    tech: ['TypeScript', 'Python', 'Flask', 'Scikit-learn', 'AWS', 'XGBoost Model'],
    category: 'Machine Learning',
  },
  {
    title: 'Weather App',
    tagline: 'React & API Integration',
    description: 'Responsive weather application with 5-day forecasts, location-based alerts, and dynamic UI.',
    tech: ['React', 'OpenWeather API', 'CSS3', 'Geolocation'],
    category: 'frontend',
  },
  {
    title: 'E-commerce Dashboard',
    tagline: 'Admin Panel with Analytics',
    description: 'Comprehensive admin dashboard with sales analytics, inventory management, and revenue tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'D3.js', 'Socket.io'],
    category: 'fullstack',
  },
  {
    title: 'Chat Application',
    tagline: 'Real-time Messaging Platform',
    description: 'Modern chat app with real-time messaging, file sharing, group chats, and user presence indicators.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
    category: 'fullstack',
  },
];

function ProjectCard({ project, index }) {
  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
            💻
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.tagline}</p>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 animate-slideInUp"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 group-hover:translate-x-1"
          >
            <FiExternalLink className="w-4 h-4" /> Live Demo
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group-hover:translate-x-1"
          >
            <FiGithub className="w-4 h-4" /> Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-titleSlide">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-widthExpand"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slideInUp animation-delay-300">
          {[
            { label: 'All', value: 'all' },
            { label: 'Full Stack', value: 'fullstack' },
            { label: 'Frontend', value: 'frontend' },
          ].map((btn, index) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-slideInUp ${
                filter === btn.value
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
