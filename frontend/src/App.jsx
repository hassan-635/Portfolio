import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Arsenal from './components/Arsenal';
import Projects from './components/Projects';
import SkillTree from './components/SkillTree';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import profilePic from './assets/profile.png';
import './App.css';

function App() {
  useEffect(() => {
    // Generate twinkling stars
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starsContainer.appendChild(star);
    }

    return () => {
      document.body.removeChild(starsContainer);
    };
  }, []);

  const { scrollY } = useScroll();

  return (
    <div className="app-container">
      <motion.div 
        className="floating-profile-container"
        style={{
          top: '50%',
          right: '5%',
          y: '-50%',
        }}
      >
        <div className="profile-border">
          <img src={profilePic} alt="Hassan Ali Profile" className="profile-image" onError={(e) => e.target.src = '/vite.svg'} />
        </div>
        <motion.div 
          className="status-badge"
          style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        >
          <span className="dot"></span> COMBAT PROTOCOLS ACTIVATED
        </motion.div>
      </motion.div>

      <Hero />
      <Arsenal />
      <Projects />
      <SkillTree />
      <Terminal />
      <Footer />
    </div>
  );
}

export default App;
