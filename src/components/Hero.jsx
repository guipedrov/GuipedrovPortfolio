import React from 'react'
import "../assets/css/hero.css"
import heroi from "../assets/images/imagem-indisponivel.png"
import heroi2 from "../assets/images/selfie1.png"
import heroi3 from "../assets/images/selfie2.png"

function Hero() {
  
  return (
    <div id="hero">

      <div className="hero-left">
        <div className="hero-texts"> {/*Introduction:*/}
          <span className="text-out" style={{color: '#FBFCFF'}}>Meu nome é <span className="text-in" style={{color: '#e5e510'}}>Guilherme Pedro Velho</span>, mas @guipedrov é mais curto. Sou <span className="text-in" style={{color: '#e5e510'}}>desenvolvedor front-end</span> e moro em Cabo Frio/RJ.</span>
          <br/><br/>
          Consigo resolver um cubo mágico em 1 minuto e te ensinar em 20.
          <br/>
          Quando criança gostava de construir coisas assim como as imaginava, de cidades de lego, passando por layouts produtivos, até chegar às aplicações para web com suas infinitas possibilidades de funcionalidades.
          <br/><br/>
          Se você me fizer perguntas sobre <a href="#works" style={{color: '#00CCBE', textDecoration:'underline'}}>JavaScript</a> vou saber responder a maioria delas e quanto à minha forma de pensar, essa é fundada no <a href="#works" style={{color: '#00CCBE', textDecoration:'underline'}}>React.js</a> e suas maravilhosas Hooks. Saiba mais coisas sobre mim <a href="#works" style={{color: '#00CCBE', textDecoration:'underline'}}>aqui.</a>
        </div>
      </div>
      <div className="hero-right"> {/*Photo:*/}
          <img src={heroi2} alt="" />
      </div>

    </div>
  )
}

export default Hero

/*
<img src={heroi} alt=""/>
*/