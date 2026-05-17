import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Code, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AllProjects.css';

const AllProjects = () => {
  const projects = [
    {
      id: 2,
      name: "Inventory Management (Web)",
      description: "A comprehensive web frontend for real-time inventory tracking and management.",
      language: "React",
      html_url: "https://github.com/hassan-635/Inventory-Management-System-Frontend",
      homepage: "https://inventory-management-frontend-lake.vercel.app"
    },
    {
      id: 3,
      name: "Inventory Management (Mobile)",
      description: "The mobile application counterpart for the Inventory Management System.",
      language: "React Native",
      html_url: "https://github.com/hassan-635/Inventory-Management-System-Mobile-App"
    },
    {
      id: 4,
      name: "ThreatPilot",
      description: "A robust cybersecurity and threat analysis platform.",
      language: "Cybersecurity",
      html_url: "https://github.com/hassan-635/ThreatPilot"
    },
    {
      id: 5,
      name: "Employee Management System",
      description: "Employee record and performance tracking system with complete CRUD operations.",
      language: "C# .NET",
      html_url: "https://github.com/hassan-635/Employee-Management-System"
    }
  ];

  useEffect(() => {
    // Scroll to top when loading the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="all-projects-page">
      <div className="navigation-bar">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title gradient-text page-title"
      >
        📂 My Projects
      </motion.h2>

      <div className="projects-grid all-projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="project-card"
          >
            <div className="project-content full-height">
              <div className="project-header">
                <FolderGit2 size={32} color="var(--accent-purple)" />
                <h3 className="project-title">{project.name}</h3>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              {project.language && (
                <div className="project-tech">
                  <span className="tech-tag">{project.language}</span>
                </div>
              )}
              
              <div className="project-links mt-auto">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Code size={18} /> Source Code
                </a>
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
            <div className="project-hover-effect"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
