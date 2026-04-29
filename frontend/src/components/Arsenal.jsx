import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Database } from 'lucide-react';
import './Arsenal.css';

const arsenalData = [
  {
    id: 1,
    title: 'OFFENSIVE OPS',
    icon: <ShieldAlert size={40} className="arsenal-icon red" />,
    techs: ['Kali Linux', 'Tails OS', 'Ubuntu'],
    color: '#ff4d4d'
  },
  {
    id: 2,
    title: 'NEURAL SYSTEMS',
    icon: <Cpu size={40} className="arsenal-icon green" />,
    techs: ['React', 'React Native', 'HTML5', 'CSS3'],
    color: '#00ff00'
  },
  {
    id: 3,
    title: 'CORE ENGINE',
    icon: <Database size={40} className="arsenal-icon blue" />,
    techs: ['Node.js', 'MongoDB', 'C++'],
    color: '#00F7F7'
  }
];

const Arsenal = () => {
  return (
    <section className="arsenal-section">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-title gradient-text"
      >
        ⚔️ ARSENAL DEPLOYMENT ⚔️
      </motion.h2>

      <div className="arsenal-grid">
        {arsenalData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="glass-panel arsenal-card"
            style={{ '--hover-color': item.color }}
          >
            <div className="icon-wrapper">
              {item.icon}
            </div>
            <h3 className="arsenal-card-title">{item.title}</h3>
            <ul className="tech-list">
              {item.techs.map((tech, i) => (
                <li key={i} className="tech-item">{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Arsenal;
