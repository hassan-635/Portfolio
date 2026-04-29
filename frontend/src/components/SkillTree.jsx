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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
