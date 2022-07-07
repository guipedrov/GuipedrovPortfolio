import React from 'react'
import "../assets/css/header.css"


function Header() {
  return (
    <header>

      <div>
          <a href="#works">Trabalhos</a>
          <a href="#about" style={{whiteSpace: "nowrap"}}>Sobre mim</a>
          <a href="#skills">Skills</a>
      </div>

      <div>
        <div style={{textTransform: 'capitalize', fontWeight: '700', color: '#405025'}}>Guilherme Pedro Velho</div>
        <div className="guipedrov" style={{color: '#405025'}}>guipedrov</div>
      </div>

      <div>
        <button className="lang pt">PT</button>
        <button className="lang en">EN</button>
        <div className="lang-warning">Not available</div>
      </div>

    </header>
  )
}

export default Header

//<img src={} alt="guipedrov"></img>
//<ul id="categories">    </ul>