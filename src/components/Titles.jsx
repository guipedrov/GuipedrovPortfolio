import React from 'react'
import '../assets/css/titles.css'

function Titles({title}) {

  return (
    <div className="titles">
      {title} {/*Poderia ser children*/}
    </div>
  )
}

export default Titles