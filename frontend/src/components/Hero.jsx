import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
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
      <motion.div 
        className="hero-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100, scale: 0.8 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { type: "spring", stiffness: 100, damping: 12, duration: 1 }
            }
          }}
          className="hero-header"
        >
          <h1 className="gradient-text title">AI SECURITY ENGINEER</h1>
          <h2 className="subtitle">Building The Future of Secure Systems</h2>
        </motion.div>

        <motion.div 
          className="typing-container"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { type: "spring", stiffness: 80, damping: 10 }
            }
          }}
        >
          <Shield className="icon-pulse cyan" />
          <span className="typing-text">{text}<span className="cursor">|</span></span>
          <Lock className="icon-pulse purple" />
        </motion.div>

        {/* Profile picture has been moved to a global floating overlay in App.jsx */}
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100, rotateX: 90 },
            visible: { 
              opacity: 1, 
              y: 0,
              rotateX: 0,
              transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.5 }
            }
          }}
          className="quote"
        >
          <blockquote>
            "Merging AI and Cybersecurity<br/>
            to build secure systems that defend, adapt, and learn."
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
