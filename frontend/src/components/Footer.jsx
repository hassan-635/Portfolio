import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Instagram, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="footer-content"
      >
        <h2 className="gradient-text">🌐 CONNECT TO THE MAINFRAME 🌐</h2>
        
        <div className="social-links">
          <a href="https://linkedin.com/in/hassan-ali-abrar-3157412a9" target="_blank" rel="noreferrer" className="social-btn linkedin">
            <Linkedin size={24} /> LINKEDIN
          </a>
          <a href="mailto:hassanaliabrar4@gmail.com" className="social-btn email">
            <Mail size={24} /> EMAIL
          </a>
          <a href="https://instagram.com/hassan.secure" target="_blank" rel="noreferrer" className="social-btn instagram">
            <Instagram size={24} /> INSTAGRAM
          </a>
          <a href="https://wa.me/923485055098" target="_blank" rel="noreferrer" className="social-btn whatsapp">
            <MessageCircle size={24} /> WHATSAPP
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hassan Ali. All protocols secured.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
