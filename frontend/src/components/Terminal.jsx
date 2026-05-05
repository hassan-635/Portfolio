import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import './Terminal.css';

const terminalLines = [
  "C:\\Users\\Security> SCANNING NETWORKS...",
  "C:\\Users\\Security> ANALYZING VULNERABILITIES...",
  "C:\\Users\\Security> TRAINING AI MODELS...",
  "C:\\Users\\Security> DEPLOYING DEFENSES...",
  "C:\\Users\\Security> MISSION STATUS: SUCCESS ✔"
];

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalLines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setLines([]);
        setCurrentLineIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentLineIndex]);

  return (
    <section className="terminal-section">
      <motion.div 
        initial={{ opacity: 0, y: 150, scale: 0.8, rotateX: -30 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        whileHover={{ boxShadow: "0 0 30px rgba(0, 247, 247, 0.4)" }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn close"></span>
            <span className="btn minimize"></span>
            <span className="btn maximize"></span>
          </div>
          <div className="terminal-title">
            <TerminalIcon size={16} /> root@mainframe:~
          </div>
        </div>
        <div className="terminal-body">
          {lines.map((line, index) => (
            <div key={index} className={`terminal-line ${index === terminalLines.length - 1 ? 'success' : ''}`}>
              {line}
            </div>
          ))}
          {currentLineIndex < terminalLines.length && (
            <div className="terminal-line typing">
              <span className="cursor">_</span>
            </div>
          )}
        </div>
        <div className="terminal-footer">
          <p>"IN A WORLD OF ZEROS AND ONES, SECURITY IS THE ONLY CONSTANT. AI IS THE WEAPON. CODE IS POWER."</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Terminal;
