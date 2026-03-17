import React from 'react';
import Home from './home/Home';
import About from './about/about';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import LetsTalk from './lets_talk/LetsTalk';
import Contact from './contact/Contact';

const Features = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <LetsTalk />
      <Contact />
    </main>
  );
};

export default Features;