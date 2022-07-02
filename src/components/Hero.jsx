import React from 'react'
import "../assets/css/hero.css"
import heroi from "../assets/images/arpia.png"

function Hero() {
  
  return (
    <div id="hero">

      <div className="hero-left">
        <div className="hero-texts">
          <span style={{fontSize: '1.7rem', color: '#FBFCFF'}}>Meu nome é <span style={{fontSize: '1.6rem', color: '#FBFCFF'}}>Guilherme Pedro Velho</span>, mas @guipedrov é mais curto. Sou <span style={{fontSize: '1.6rem', color: '#FBFCFF'}}>desenvolvedor front-end</span> e moro em Cabo Frio/RJ.</span>
          <br/><br/>
          Consigo resolver um cubo mágico em 1 minuto (como 5% dos espectadores desse tutorial)
          <br/>
          Desde criança vislumbrava como seria poder planejar e então construir coisas assim como imaginadas, de cidades de lego, passando por layout produtivos, até chegar às aplicações para web com suas infinitas funcionalidades possíveis.
          <br/>
          Se você me fizer perguntas sobre JavaScript, provavelmente saberei responder a maioria delas, quanto à minha forma de pensar, essa é fundada no React.js e suas maravilhosas Hooks.
          <br/><br/>
          Faço combinações, arranjos e permutações para me divertir (mesmo) e as vezes uso óculos escuro sem precisar.
          <br/>
          Para saber sobre coisas mais importantes, <a href="#works" style={{color: '#FDCA40', textDecoration:'underline'}}>aqui é o lugar.</a>
        <div>
          Links
        </div>
        </div>
      </div>
      
      <div className="hero-right">
      </div>

    </div>
  )
}

export default Hero

/*
<img src={heroi} alt=""/>
*/