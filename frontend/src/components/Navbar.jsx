import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="navbar-brand">
        Hassan Ali
      </Link>
      
      <div className="navbar-links">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
        >
          Projects
        </Link>
        
        <a 
          href="https://www.fiverr.com/hassan_4434" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fiverr-btn"
        >
          Hire me on Fiverr <ExternalLink size={14} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
