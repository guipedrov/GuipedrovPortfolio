import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Modal from './components/Modal'
import Hero from './components/Hero'
import Works from './components/Works'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [works, setWorks] = useState("Trabalhos")
  const [about, setAbout] = useState("Sobre mim")
  const [modalState, setModalState] = useState("modal")
  const [modalInfo, setModalInfo] = useState([])

  function handleModal(info) {
    setModalState("modal-open")
    setModalInfo(info)
  }

  function closeModal() {
    setModalState("modal")
  }

  function language(language){
    if (language === "PT") {
      setWorks("Trabalhos")
    }
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Modal modalState={modalState} modalInfo={modalInfo} closeModal={closeModal} />
      <div style={{background: "linear-gradient(0deg, rgba(251,251,198,1) 0%, rgba(255,255,255,1) 90%)",}}>
      <Works works={works} handleModal={handleModal} />
      <About about={about} />
      <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
