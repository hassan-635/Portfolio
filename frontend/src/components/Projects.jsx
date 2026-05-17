import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Code, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: "Inventory Management System",
      description: "A comprehensive inventory management solution featuring a web frontend and a mobile application for real-time tracking.",
      technologies: ["JavaScript", "React", "React Native", "Supabase"],
      github_url: "https://github.com/hassan-635/Inventory-Management-System-Frontend"
    },
    {
      id: 2,
      title: "Employee Management System",
      description: "Employee record and performance tracking system.",
      technologies: ["C#", ".NET"],
      github_url: "https://github.com/hassan-635/Employee-Management-System"
    },
    {
      id: 3,
      title: "ThreatPilot",
      description: "Security and threat analysis platform.",
      technologies: ["Cybersecurity"],
      github_url: "https://github.com/hassan-635/ThreatPilot"
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

      <div className="view-more-container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link to="/projects" className="view-more-btn">
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
