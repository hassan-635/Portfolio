import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap } from 'lucide-react';
import './SkillTree.css';

const skills = {
  attack: ['Linux', 'Bash', 'PowerShell', 'Nginx', 'Docker'],
  ai: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js']
};

const SkillTree = () => {
  return (
    <section className="skill-tree-section">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        className="section-title gradient-text"
      >
        🎮 SKILL TREE MAXED OUT 🎮
      </motion.h2>

      <div className="skill-tree-container">
        <div className="skill-branch">
          <div className="branch-header red">
            <Network size={30} />
            <h3>ATTACK VECTORS</h3>
          </div>
          <div className="skill-nodes">
            {skills.attack.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -150, rotateY: 90 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100, damping: 12 }}
                whileHover={{ scale: 1.1, x: 10 }}
                className="skill-node red-node"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="skill-branch">
          <div className="branch-header purple">
            <Zap size={30} />
            <h3>AI PROTOCOLS</h3>
          </div>
          <div className="skill-nodes">
            {skills.ai.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 150, rotateY: -90 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100, damping: 12 }}
                whileHover={{ scale: 1.1, x: -10 }}
                className="skill-node purple-node"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTree;
