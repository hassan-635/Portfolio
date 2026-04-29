import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import './Projects.css';

const projectsList = [
  { id: 1, title: 'Network Scanners', type: 'Security Tool' },
  { id: 2, title: 'File Integrity Checker', type: 'Security Tool' },
  { id: 3, title: 'Security focused Hardware Inventory Management System', type: 'Full Stack App' },
  { id: 4, title: 'AI Blood Group Detection using Fingerprint using CNN', type: 'AI Model' },
  { id: 5, title: 'Freelancing File Sharing Web and Mobile App for Security', type: 'Web & Mobile' },
  { id: 6, title: 'AI based Calorie Tracking Mobile App', type: 'Mobile App' }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-title gradient-text"
      >
        🚀 TOP PROJECTS 🚀
      </motion.h2>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="project-card glass-panel"
          >
            <div className="project-icon">
              <FolderGit2 size={32} color="var(--accent-purple)" />
            </div>
            <div className="project-info">
              <span className="project-type">{project.type}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <div className="project-hover-effect"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
