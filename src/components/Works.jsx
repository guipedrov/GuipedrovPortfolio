import React, {useState, useEffect} from 'react'
import Titles from './Titles'
import SingleWork from './SingleWork'
import { Checkbox } from "semantic-ui-react";
import '../assets/css/sections.css'
import '../assets/css/works.css'

function Works({works}) {
  //variáveis que seguram os valores a serem filtrados:
  const [webapps, setWebapps] = useState('webapps')
  const [landingpages, setLandingpages] = useState('landingpages')
  const [spas, setSpas] = useState('spas')
  const [statics, setStatics] = useState('statics')
  
  const allWorks = [ //Array de objetos (que abrigam os trabalhos):
    {name: "Personality Pipe", date: "na", type: "spas", typename: "Single Page Application", desc: "", tecnologies: ["js", "ts", "html", "css", "react"], img: "site1", github: "", original: true},
    {name: "Posso misturar?", date: "na", type: "spas", typename: "Single Page Application", desc: "", tecnologies: ["js", "html", "css", "react"], img: "site2", github: "", original: true},
    {name: "Crypto-Zap", date: "na", type: "spas", typename: "Single Page Application", desc: "", tecnologies: ["js", "html", "css", "react", "api"], img: "site2", github: "", original: true},
    {name: "1 Chat 4 All", date: "na", type: "webapps", typename: "Web App", desc: "", tecnologies: ["js", "html", "css", "react", "api"], img: "site2", github: "", original: true},
    {name: "Escola Montessoriana Maria Flor", date: "na", type: "spas", typename: "Single Page Application", desc: "", tecnologies: ["js", "html", "css", "react"], img: "site2", github: "", original: true},
    {name: "Karina Shiatsu", date: "na", type: "landingpages", typename: "Landing Page", desc: "", tecnologies: ["js", "html", "css", "react"], img: "site2", github: "", original: true},
    {name: "Ohana Tour", date: "na", type: "statics", typename: "Static Site", desc: "", tecnologies: ["html", "css"], img: "site2", github: "", original: true},
    {name: "Ohana Tour", date: "na", type: "erp", typename: "Static Site", desc: "", tecnologies: ["js", "html", "css", "react"], img: "site2", github: "", original: true},
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
  
  return (
    <div id="works" className="sections works">
        <Titles className="works-title" title={works} />
        <div className="checkboxes-container">
             {/*<Checkbox className="checkbox webapps" label={"Web Apps"} id="webapps" name={"webapps"} onChange={handleChange} />*/}
             {/*<Checkbox className="checkbox landingpages" label={"Lan"} id="landingpages" name={"webapps"} onChange={handleChange} />*/}
             {/*<Checkbox className="checkbox spas" label={"SPAs"} id="spas" name={"webapps"} onChange={handleChange} />*/}
             {/*<Checkbox className="checkbox statics" label={"Static Websites"} id="statics" name={"webapps"} onChange={handleChange} />*/}
            <label className="checkbox webapps"><input id="webapps" name="webapps" type="checkbox" onChange={handleChange} /><div type="checkbox" className="checktext">Web Apps</div></label>
            <label className="checkbox landingpages"><input id="landingpages" name="landingpages" type="checkbox" onChange={handleChange}  /><div className="checktext">Landing Pages</div></label>
            <label className="checkbox spas"><input id="spas" name="spas" type="checkbox" onChange={handleChange}  /><div className="checktext">SPAs</div></label>
            <label className="checkbox statics"><input id="statics" name="statics" type="checkbox" onChange={handleChange}  /><div className="checktext">Static Websites</div></label>
        </div>
        <div className="works-list">
          {allWorksFiltered.map(d => {
            return <SingleWork key={d.name} name={d.name} type={d.type} typename={d.typename} date={d.date} tecnologies={d.tecnologies} imgcode={d.img} github={d.github} original={d.original} />
          })}
        </div>
    </div>
  )
}

export default Works

/*
onClick={firstClick("webapps")}
onClick={firstClick("landingpages")}
onClick={firstClick("spas")}
onClick={firstClick("statics")}

  let firstClick = (function(value) {
    var executed = false;
    return function() {
      if (!executed) {
        executed = true;
        if (value === "webapps") {
          setWebapps('webapps')
          setLandingpages('')
          setSpas('')
          setStatics('')
        } else if (value === "landingpages") {
          setWebapps('')
          setLandingpages('landingpages')
          setSpas('')
          setStatics('')
        } else if (value === "spas") {
          setWebapps('')
          setLandingpages('')
          setSpas('spas')
          setStatics('')
        } else if (value === "statics") {
          setWebapps('')
          setLandingpages('')
          setSpas('')
          setStatics('statics')
        }
      }
    }
  })
*/