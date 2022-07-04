import React from 'react'
import Titles from './Titles'
import lololol from "../assets/images/lololol.fw.png"
import SingleImage from './SingleImage'
import '../assets/css/sections.css'


function About({about}) {

  return (
    <div id="about" className="sections">
        <Titles title={about} />
        <div className="about">
          <div className="about-left">

            <div></div>
            <div className="about-texts">
              Tenho formação em engenharia de produção, tendo atuado nas áreas de marketing e desenvolvimento de sistemas. Somo experiências em start-ups e agências como desenvolvedor em projetos de Sistemas Web (ERPs), Web Apps, Landing Pages e desenvolvimento frontend em geral, utilizando de tecnologias como: HTML, CSS, JavaScript, React.Js, TypeScript, Bootstrap, Sass, Styled Components, Design Systems, Material-UI, Figma, Git e GitHub, Jira, entre outros.
            </div>
            <div style={{fontWeight: '700', color: '#405025'}}>Me encontre aqui:</div>
            <div>
              <a href="https://www.instagram.com/guipedrov/"><SingleImage url={"instagram"} size={"4rem"} /></a>
              <a href="https://github.com/guipedrov"><SingleImage url={"github"} size={"4rem"} /></a>
              <a href="https://stackoverflow.com/users/13620703/guipedro"><SingleImage url={"stackoverflow"} size={"4rem"} /></a>
              <a href="https://www.linkedin.com/in/guipedrov/"><SingleImage url={"linkedin"} size={"4rem"} /></a>
              <div className="emailicon"><SingleImage url={"email"} size={"4rem"} social={true} /></div>
            </div>
            <div style={{fontWeight: '700', color: '#405025', paddingTop: '1rem'}}>Ou só baixe meus currículos aqui:</div>
            <div>
              <SingleImage url={"cv"} size={"5rem"} social={true} />
              <SingleImage url={"cv-en"} size={"5rem"} social={true} />
            </div>
          </div>

          <div className="about-right">
            <img src={lololol} alt=""/>
          </div>

        </div>
    </div>
  )
}


export default About

/*
<div
  style={{
    background: 'rgba(39,62,84,0.82)',
    overflow: 'hidden',
    height: '100%',
    zIndex: '2',
  }}>
*/