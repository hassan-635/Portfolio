import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Code, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AllProjects.css';

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Inventory Management System",
      description: "A comprehensive web and mobile frontend for real-time inventory tracking and management.",
      language: "React / Native",
      html_url: "https://github.com/hassan-635/Inventory-Management-System-Frontend",
      homepage: "https://inventory-management-frontend-lake.vercel.app"
    },
    {
      id: 2,
      name: "AI Calorie Counter",
      description: "AI-powered Calorie Counter Mobile App built with React Native and MERN Stack.",
      language: "React Native",
      html_url: "https://github.com/hassan-635/AI-Calorie-Counter-Mobile-App"
    },
    {
      id: 12,
      name: "SecureScan Pro",
      description: "A robust File Integrity Checker designed to ensure data security.",
      language: "C#",
      html_url: "https://github.com/hassan-635/SecureScan-Pro"
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
      description: "A cybersecurity and threat analysis platform.",
      language: "Cybersecurity",
      html_url: "https://github.com/hassan-635/ThreatPilot"
    },
    {
      id: 5,
      name: "Phone OSINT",
      description: "An Open-Source Intelligence tool for phone number analysis and reconnaissance.",
      language: "Python",
      html_url: "https://github.com/hassan-635/Phone-OSINT"
    },
    {
      id: 6,
      name: "Linux Security Scanner",
      description: "A security vulnerability scanner specifically designed for Linux systems.",
      language: "Python",
      html_url: "https://github.com/hassan-635/Linux-Security-Scanner"
    },
    {
      id: 7,
      name: "REST API Rate Limiter",
      description: "A custom rate limiter implementation for securing and optimizing REST APIs.",
      language: "Python",
      html_url: "https://github.com/hassan-635/REST-API-Rate-Limiter"
    },
    {
      id: 8,
      name: "Employee Management System",
      description: "Employee record and performance tracking system with complete CRUD operations.",
      language: "C# .NET",
      html_url: "https://github.com/hassan-635/Employee-Management-System"
    },
    {
      id: 9,
      name: "SentimentChat",
      description: "A chat application integrating sentiment analysis features.",
      language: "HTML / JS",
      html_url: "https://github.com/hassan-635/SentimentChat"
    },
    {
      id: 10,
      name: "Brick Breaker Game",
      description: "A classic Brick Breaker game developed using the C++ Graphics Library.",
      language: "C++",
      html_url: "https://github.com/hassan-635/Brick-Breaker-Game-using-CPP-Graphics-Library-"
    },
    {
      id: 11,
      name: "MPFL Platform",
      description: "Full-stack Freelancing platform with a web frontend, mobile app, and backend infrastructure for secure file sharing.",
      language: "React / Node",
      html_url: "https://github.com/hassan-635/MPFL_Frontend_web"
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
