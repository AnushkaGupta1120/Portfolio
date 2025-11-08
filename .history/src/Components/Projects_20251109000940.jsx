import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectsData = [
  {
    title: 'MediFlow',
    tagline: 'Smart Supply Management',
    description: 'Healthcare inventory tracking with analytics.',
    tech: ['React', 'Node.js', 'MySQL', 'Figma'],
    category: 'fullstack',
  },
  {
    title: 'SkillSync',
    tagline: 'AI Skill Tracker',
    description: 'Team matcher using AI and skill analytics.',
    tech: ['React', 'PostgreSQL', 'JWT'],
    category: 'fullstack',
  },
];

function ProjectCard({ project, index }) {
  return (
    <div
      className="group bg-white dark:bg-indigoCard rounded-xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-light group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-softText">{project.tagline}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-navy text-gray-800 dark:text-light rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-3">
          <a href="#" className="text-accent hover:underline flex items-center gap-1"><FiExternalLink /> Demo</a>
          <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-accent flex items-center gap-1"><FiGithub /> Code</a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-navy transition-colors">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-mutedIndigo bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-mutedIndigo mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
