import React from 'react'
import Titles from './Titles'
import SingleImage from './SingleImage'
import '../assets/css/sections.css'

function Skills() {

  return (
    <div id="skills" className="sections skills">
      <Titles title={"Skills"} />
      <div>
        <div>
        Alguma coisa escrita:
        </div>

        <div>Tecnologias:</div>

        <div>
          <SingleImage url={"html_"} size={"8rem"} />
          <SingleImage url={"css_"} size={"8rem"} />
          <SingleImage url={"js_"} size={"8rem"} />
          <SingleImage url={"react_"} size={"8rem"} />
          <SingleImage url={"ts_"} size={"8rem"} />
          <SingleImage url={"node_"} size={"8rem"} />
        </div>
      </div>
    </div>
  )
}

export default Skills