import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'


function App() {
  const [works, setWorks] = useState("Trabalhos")
  const [about, setAbout] = useState("Sobre mim")

  function language(language){
    if (language === "PT") {
      setWorks("Trabalhos")
    }
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <div style={{background: "linear-gradient(0deg, rgba(254,238,194,1) 0%, rgba(255,255,255,1) 100%)",}}>
      <Works works={works} />
      <About about={about} />
      <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
