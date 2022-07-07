import React, {useState, useEffect} from 'react'
import Titles from './Titles'
import SingleWork from './SingleWork'
import { Checkbox } from "semantic-ui-react";
import '../assets/css/sections.css'
import '../assets/css/works.css'

function Works({works, handleModal}) {
  //variáveis que seguram os valores a serem filtrados:
  const [webapps, setWebapps] = useState('webapps')
  const [landingpages, setLandingpages] = useState('landingpages')
  const [spas, setSpas] = useState('spas')
  const [statics, setStatics] = useState('statics')
  const [typesFiltersGroup, setTypesFiltersGroup] = useState(true)
  const [techsFiltersGroup, setTechsFiltersGroup] = useState(false)
  
  const allWorks = [ //Array de objetos (que abrigam os trabalhos):
    {name: "Personality Pipe", date: "na", type: "spas", typename: "Single Page Application", desc: "", technologies: ["js", "ts", "html", "css", "react"], img: "personalitypipe", github: "", original: true, link: "aaa"},
    {name: "Posso misturar?", date: "na", type: "spas", typename: "Single Page Application", desc: "", technologies: ["js", "html", "css", "react"], img: "possomisturar", github: "", original: true, link: ""},
    {name: "Crypto-Zap", date: "na", type: "spas", typename: "Single Page Application", desc: "", technologies: ["js", "html", "css", "react", "api"], img: "cryptozap", github: "", original: true, link: ""},
    {name: "1 Chat 4 All", date: "na", type: "webapps", typename: "Web App", desc: "", technologies: ["js", "html", "css", "react", "api"], img: "onechat4all", github: "", original: true, link: ""},
    {name: "Escola Montessoriana Maria Flor", date: "na", type: "spas", typename: "Single Page Application", desc: "", technologies: ["js", "html", "css", "react"], img: "mariaflor", github: "", original: true, link: ""},
    {name: "Karina Shiatsu", date: "na", type: "landingpages", typename: "Landing Page", desc: "", technologies: ["js", "html", "css", "react"], img: "karina", github: "", original: true, link: ""},
    {name: "Ohana Tour", date: "na", type: "statics", typename: "Static Site", desc: "", technologies: ["html", "css"], img: "ohanatour", github: "", original: true, link: ""},
    {name: "Pincel Cúbico", date: "na", type: "statics", typename: "Static Site", desc: "", technologies: ["html", "css"], img: "ohanatour", github: "", original: true, link: ""},
    {name: "ERPs", date: "na", type: "erp", typename: "Static Site", desc: "", technologies: ["js", "html", "css", "react"], img: "erps", github: "n/a", original: true, link: ""},
  ]

  const isAllOpen = (webapps === "webapps" && landingpages === "landingpages" && spas === "spas" && statics === "statics")

  const setOnlyOne = (valor) => {
    if (webapps === valor) {
      setWebapps('webapps')
      setLandingpages('')
      setSpas('')
      setStatics('')
    } else if (landingpages === valor) {
      setWebapps('')
      setLandingpages('landingpages')
      setSpas('')
      setStatics('')
    } else if (spas === valor) {
      setWebapps('')
      setLandingpages('')
      setSpas('spas')
      setStatics('')
    } else if (statics === valor) {
      setWebapps('')
      setLandingpages('')
      setSpas('')
      setStatics('statics')
    }
  }

  const filters = [webapps, landingpages, spas, statics]

  const allWorksFiltered = allWorks.filter(d => d.type === filters[0] || d.type === filters[1] || d.type === filters[2] || d.type === filters[3])

  function handleChange(event) {
    if (event.target.name === "webapps" && event.target.checked === true) {
      isAllOpen ? setOnlyOne('webapps') : setWebapps('webapps') 
    } else if (event.target.name === "webapps" && event.target.checked === false) {
      setWebapps('')
    } else if (event.target.name === "landingpages" && event.target.checked === true) {
      isAllOpen ? setOnlyOne('landingpages') : setLandingpages('landingpages')
    } else if (event.target.name === "landingpages" && event.target.checked === false) {
      setLandingpages('')
    } else if (event.target.name === "spas" && event.target.checked === true) {
      isAllOpen ? setOnlyOne('spas') : setSpas('spas')
    } else if (event.target.name === "spas" && event.target.checked === false) {
      setSpas('')
    } else if (event.target.name === "statics" && event.target.checked === true) {
      isAllOpen ? setOnlyOne('statics') : setStatics('statics')
    } else if (event.target.name === "statics" && event.target.checked === false) {
      setStatics('')
    } else {
      console.log("")
    }
  };

  let noWorksCheck = false
  if (filters[0] === "" && filters[1] === "" && filters[2] === "" && filters[3] === "") {
    noWorksCheck = true
  }
  if (noWorksCheck) {
    setWebapps('webapps')
    setLandingpages('landingpages')
    setSpas('spas')
    setStatics('statics')
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Technologies:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const [js, setJs] = useState('statics')
  const [html, setHtml] = useState('statics')
  const [css, setCss] = useState('statics')
  const [react, setReact] = useState('statics')
  const [ts, setTs] = useState('statics')
  const [sass, setSass] = useState('statics')
  const [cloud, setCloud] = useState('statics')
  const [api, setApi] = useState('statics')

  const isAllOpenTech = (webapps === "webapps" && landingpages === "landingpages" && spas === "spas" && statics === "statics")

  const setOnlyOneTech = (valor) => {
    if (webapps === valor) {
      setWebapps('webapps')
      setLandingpages('')
      setSpas('')
      setStatics('')
    } else if (landingpages === valor) {
      setWebapps('')
      setLandingpages('landingpages')
      setSpas('')
      setStatics('')
    } else if (spas === valor) {
      setWebapps('')
      setLandingpages('')
      setSpas('spas')
      setStatics('')
    } else if (statics === valor) {
      setWebapps('')
      setLandingpages('')
      setSpas('')
      setStatics('statics')
    }
  }

  const filtersTechs = [js, landingpages, spas, statics]

  const allTechsFiltered = allWorks.filter(d => d.technologies.includes(filters[0]) || d.type === filters[1] || d.type === filters[2] || d.type === filters[3])

  function handleChangeTech(event) {
    if (event.target.name === "webapps" && event.target.checked === true) {
      isAllOpen ? setOnlyOne('webapps') : setWebapps('webapps') 
    } else if (event.target.name === "webapps" && event.target.checked === false) {
      setWebapps('')
    } else if (event.target.name === "landingpages" && event.target.checked === true) {
      isAllOpen ? setOnlyOne('landingpages') : setLandingpages('landingpages')
    } else if (event.target.name === "landingpages" && event.target.checked === false) {
      setLandingpages('')
    } else if (event.target.name === "spas" && event.target.checked === true) {
      isAllOpen ? setOnlyOne('spas') : setSpas('spas')
    } else if (event.target.name === "spas" && event.target.checked === false) {
      setSpas('')
    } else if (event.target.name === "statics" && event.target.checked === true) {
      isAllOpen ? setOnlyOne('statics') : setStatics('statics')
    } else if (event.target.name === "statics" && event.target.checked === false) {
      setStatics('')
    } else {
      console.log("")
    }
  };

  let noTechsCheck = false
  if (filters[0] === "" && filters[1] === "" && filters[2] === "" && filters[3] === "") {
    noWorksCheck = true
  }
  if (noWorksCheck) {
    setWebapps('webapps')
    setLandingpages('landingpages')
    setSpas('spas')
    setStatics('statics')
  }
  
  return (
    <div id="works" className="sections works">
        <Titles className="works-title" title={works} />
        <div className="checkboxes-container">
          {(typesFiltersGroup) ?
            <>
              <label className="checkbox webapps"><input id="webapps" name="webapps" type="checkbox" onChange={handleChange} /><div type="checkbox" className="checktext">Web Apps</div></label>
              <label className="checkbox landingpages"><input id="landingpages" name="landingpages" type="checkbox" onChange={handleChange}  /><div className="checktext">Landing Pages</div></label>
              <label className="checkbox spas"><input id="spas" name="spas" type="checkbox" onChange={handleChange}  /><div className="checktext">SPAs</div></label>
              <label className="checkbox statics"><input id="statics" name="statics" type="checkbox" onChange={handleChange}  /><div className="checktext">Static Websites</div></label>
            </>
            : null}
          {(techsFiltersGroup) ?
            <>
              <label className="checkbox webapps"><input id="webapps" name="webapps" type="checkbox" onChange={handleChange} /><div type="checkbox" className="checktext">Web Apps</div></label>
              <label className="checkbox landingpages"><input id="landingpages" name="landingpages" type="checkbox" onChange={handleChange}  /><div className="checktext">Landing Pages</div></label>
              <label className="checkbox spas"><input id="spas" name="spas" type="checkbox" onChange={handleChange}  /><div className="checktext">SPAs</div></label>
              <label className="checkbox statics"><input id="statics" name="statics" type="checkbox" onChange={handleChange}  /><div className="checktext">Static Websites</div></label>
            </>
            : null}
          {/* <div style={{display: 'inline'}}>
            <button onClick={()=>{setTypesFiltersGroup(!typesFiltersGroup); setTechsFiltersGroup(!techsFiltersGroup)}}>
              {(typesFiltersGroup) ?
              <>Filtrar por Linguagens</>
              : <>Filtrar de Tipos</>}
            </button>
          </div> */}
        </div>
        <div className="works-list">
          {allWorksFiltered.map(d => {
            return <SingleWork key={d.name} name={d.name} type={d.type} typename={d.typename} date={d.date} technologies={d.technologies} imgcode={d.img} github={d.github} original={d.original} handleModal={handleModal} link={d.link} />
          })}
        </div>
    </div>
  )
}

export default Works