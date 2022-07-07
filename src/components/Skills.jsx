import React, { useState, useRef, useEffect } from 'react'
import Titles from './Titles'
import SingleImage from './SingleImage'
import '../assets/css/sections.css'
import { eventWrapper } from '@testing-library/user-event/dist/utils'

function Skills() {
  const [skillDesc, setSkillDesc] = useState([])
  const [logoNodeStyle, setLogoNodeStyle] = useState()

  let proglogosref = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (!proglogosref.current.contains(event.target)) { //Out
        setLogoNodeStyle("")
      // else if () {
      //   setLogoNodeStyle("")
      } else if (proglogosref.current.contains(event.target)) { //In
          let logoString
          if (event.target.attributes["alt"].value) { 
            logoString = event.target.attributes["alt"].value
            setLogoNodeStyle(`${logoString}`)
          }
      }
    })
  })
  
  const handleClick = (which) => {
    switch(which) {
      case "html": setSkillDesc({titulo: "HTML 5", desc:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}); break
      
      case "css": setSkillDesc({titulo: "CSS 3", desc:"CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML. O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/CSS"}); break

      case "js": setSkillDesc({titulo: "JavaScript", desc:"JavaScript é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js,  Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional).", docs:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"}); break

      case "react": setSkillDesc({titulo: "React.js", desc:"O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (front-end) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart, Spotify e outros.", docs:"https://pt-br.reactjs.org/docs/hello-world.html"}); break

      case "ts": setSkillDesc({titulo: "TypeScript", desc:"TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. Tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo que o TypeScript valide se seu código está funcionando corretamente. ", docs:"https://www.typescriptlang.org/docs/"}); break

      case "node": setSkillDesc({titulo: "Node.js", desc:"Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. O runtime de JavaScript é constituído pelos seguintes comandos: node package manager (npm), e npx (node package extractor); onde o primeiro tem o propósito de executar código armazenado num package de nodejs, instalando o software globalmente ou localmente, já o segundo tem o propósito de instalar a nível local o código instalado globalmente.", docs:"https://nodejs.org/en/docs/"}); break

      case "router": setSkillDesc({titulo: "React Router", desc:"React Router é uma biblioteca de roteamento do lado do servidor e cliente com todos os recursos para React, uma biblioteca JavaScript para construir interfaces de usuário. O React Router roda em qualquer lugar que o React roda; na web, no servidor com node.js e no React Native.", docs:"https://reactrouter.com/docs/en/v6"}); break

      case "redux": setSkillDesc({titulo: "HTML 5", desc:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}); break

      case "bootstrap": setSkillDesc({titulo: "HTML 5", desc:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}); break

      case "mui": setSkillDesc({titulo: "HTML 5", desc:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}); break

      case "sass": setSkillDesc({titulo: "HTML 5", desc:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}); break

      case "firebase": setSkillDesc({titulo: "HTML 5", desc:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}); break

      case "sql": setSkillDesc({titulo: "HTML 5", desc:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}); break

      case "styled": setSkillDesc({titulo: "HTML 5", desc:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}); break

      case "aws": setSkillDesc({titulo: "HTML 5", desc:"HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.", docs:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"}); break
    }
  }

  return (
    <div id="skills" className="sections skills">
      <Titles title={"Skills"} />
      <div>
        <div>
        Ao longo de pouco mais de 2 anos de experiência no universo front-end, pude trabalhar com algumas linguagens tradicionais da web, linguagens de programação, bibliotecas JavaScript, serviços de cloud computing, entre outras tecnologias.
        </div>

        <div>Aqui estão as principais com as quais tive contato nesse período:</div>

        <div id="proglogos" ref={proglogosref}>
          <div alt="html" onClick={()=>handleClick("html")} className={`skill-image html_ ${logoNodeStyle}`}><SingleImage url={"html_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("css")} className={`skill-image css_ ${logoNodeStyle}`}><SingleImage url={"css_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("js")} className={`skill-image js_ ${logoNodeStyle}`}><SingleImage url={"js_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("react")} className={`skill-image react_ ${logoNodeStyle}`}><SingleImage url={"react_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("ts")} className={`skill-image ts_ ${logoNodeStyle}`}><SingleImage url={"ts_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("node")} className={`skill-image node_ ${logoNodeStyle}`}><SingleImage url={"node_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("router")} className={`skill-image router_ ${logoNodeStyle}`}><SingleImage url={"router_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("redux")} className={`skill-image redux_ ${logoNodeStyle}`}><SingleImage url={"redux_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("bootstrap")} className={`skill-image bootstrap_ ${logoNodeStyle}`}><SingleImage url={"bootstrap_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("mui")} className={`skill-image mui_ ${logoNodeStyle}`}><SingleImage url={"mui_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("sass")} className={`skill-image sass_ ${logoNodeStyle}`}><SingleImage url={"sass_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("firebase")} className={`skill-image firebase_ ${logoNodeStyle}`}><SingleImage url={"firebase_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("sql")} className={`skill-image sql_ ${logoNodeStyle}`}><SingleImage url={"sql_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("styled")} className={`skill-image styled_ ${logoNodeStyle}`}><SingleImage url={"styled_"} size={"100%"} /></div>
          <div onClick={()=>handleClick("aws")} className={`skill-image aws_ ${logoNodeStyle}`}><SingleImage url={"aws_"} size={"100%"} /></div>
        </div>

        <div className="skill-box">
          {skillDesc.docs ? <div>{skillDesc.titulo}:</div> : <div style={{color: "#c9c9c9", fontWeight: "500"}} className="skill-box-prev">Escolha uma tecnologia</div>}
          <div>{skillDesc.desc}</div>
          {skillDesc.docs? <div><a href={skillDesc.docs}>Docs</a></div> : null}
        </div>
      </div>
    </div>
  )
}

export default Skills

/*
  useEffect(() => {
    document.getElementById('proglogo').addEventListener('mousedown', function(event) {
      if (menu.current(event.target)) { setSelectedLogo('proglogo-selected') }
      else { setSelectedLogo('proglogo') }
    })
  })


*/