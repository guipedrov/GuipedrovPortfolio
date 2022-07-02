import React from 'react'
import "../assets/css/header.css"


function Header() {
  return (
    <header>

      <div>
          <a href="#">Trabalhos</a>
          <a href="" style={{whiteSpace: "nowrap"}}>Sobre mim</a>
          <a href="">Skills</a>
      </div>

      <div>
        <div style={{fontSize: '2.1rem', textTransform: 'capitalize', fontWeight: '700', color: '#054A29'}}>Guilherme Pedro Velho</div>
        <div style={{color: '#054A29'}}>guipedrov</div>
      </div>

      <div>
        <div>PT</div>
        <div>EN</div>
      </div>

    </header>
  )
}

export default Header

//<img src={} alt="guipedrov"></img>
//<ul id="categories">    </ul>