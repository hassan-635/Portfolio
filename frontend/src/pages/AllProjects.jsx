import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Code, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AllProjects.css';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when loading the page
    window.scrollTo(0, 0);
    
    fetch('https://api.github.com/users/hassan-635/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        const validProjects = data.filter(repo => !repo.fork);
        setProjects(validProjects);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects', err);
        setLoading(false);
      });
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
        📂 All Repositories
      </motion.h2>

      {loading ? (
        <div className="loading-spinner">Loading projects...</div>
      ) : (
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
                  <h3 className="project-title">{project.name.replace(/-/g, ' ')}</h3>
                </div>
                
                <p className="project-description">
                  {project.description || 'No description provided.'}
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
      )}
    </div>
  );
};

export default AllProjects;
