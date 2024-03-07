// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import CurriculumVitae from './components/CurriculumVitae';
import Presentation from './components/presentation';
function App() {
  return (
    <div className="App">
      <CurriculumVitae />
      <Header />
      <About />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;

