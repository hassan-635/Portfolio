import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Code, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with cart, checkout, and user authentication.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github_url: "https://github.com",
      live_url: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A drag-and-drop kanban board for managing tasks and team collaboration.",
      technologies: ["React", "Redux", "Tailwind CSS"],
      github_url: "https://github.com",
      live_url: "https://example.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application showing current conditions and 5-day forecast.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
      github_url: "https://github.com",
      live_url: "https://example.com"
    }
  ];

  return (
    <section className="projects-section">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        className="section-title gradient-text"
      >
        🚀 TOP PROJECTS 🚀
      </motion.h2>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="project-card"
          >
            <div className="project-image-container">
              {project.image_url ? (
                <img src={project.image_url} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">
                  <FolderGit2 size={48} color="var(--accent-purple)" />
                </div>
              )}
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
              
              <div className="project-links">
                {project.github_url && (
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Code size={18} /> Source Code
                  </a>
                )}
                {project.live_url && (
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
            <div className="project-hover-effect"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
