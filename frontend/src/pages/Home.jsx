import React from 'react';
import { useScroll } from 'framer-motion';
import Hero from '../components/Hero';
import Arsenal from '../components/Arsenal';
import Projects from '../components/Projects';
import SkillTree from '../components/SkillTree';
import Terminal from '../components/Terminal';

function Home() {
  const { scrollY } = useScroll();

  return (
    <div className="home-container">
      <Hero />
      <Arsenal />
      <Projects />
      <SkillTree />
      <Terminal />
    </div>
  );
}

export default Home;
