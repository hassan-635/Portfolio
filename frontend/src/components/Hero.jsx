import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Terminal } from 'lucide-react';
import './Hero.css';

const roles = [
  "Blue Teaming",
  "FULL STACK AI ENGINEER",
  "SECURITY RESEARCHER"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentRoleIndex]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-header"
        >
          <h1 className="gradient-text title">AI SECURITY ENGINEER</h1>
          <h2 className="subtitle">Building The Future of Secure Systems</h2>
        </motion.div>

        <div className="typing-container">
          <Shield className="icon-pulse cyan" />
          <span className="typing-text">{text}<span className="cursor">|</span></span>
          <Lock className="icon-pulse purple" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="profile-container"
        >
          <div className="profile-border">
            {/* The background-removed image */}
            <img src="/src/assets/profile.png" alt="Hassan Ali Profile" className="profile-image" onError={(e) => e.target.src = '/src/assets/vite.svg'} />
          </div>
          <div className="status-badge">
            <span className="dot"></span> COMBAT PROTOCOLS ACTIVATED
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="quote"
        >
          <blockquote>
            "Merging AI and Cybersecurity<br/>
            to build secure systems that defend, adapt, and learn."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
