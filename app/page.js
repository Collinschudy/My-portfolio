"use client"
import React from 'react';
import About from '@components/About';
import Introduction from '@components/Introduction';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import Contact from '@components/Contact';
import ProgressCircle from '@components/ProjectCircle';

const Home = () => {
  return (
    <div>
      <Introduction />
      <Projects />
      <Skills />
      <About /> 
      <Contact />
      
      
    </div>
  )
}

export default Home