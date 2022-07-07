import React, {useEffect, useRef, useState} from 'react'
import SingleImage from './SingleImage'
import '../assets/css/modal.css'

function Modal(props) {
  
  let box = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", (event) => { //escuta o evento "mousedown"
      if (!box.current.contains(event.target)) { //se o elemento jsx "useRef" (não) contiver o evento, o escopo é executado
        props.closeModal()
      }
    })
  })

  return (
    <div id="modal" className={`${props.modalState}`}>
      <div className='modal-layer'>
        <div className='modal-content-container'>
          <div className='modal-content' ref={box}>            
            <div style={{color: `${props.modalInfo.sortedcolor}`}} className='modal-type'>{props.modalInfo.typename}</div>
            <div className='modal-name'>{props.modalInfo.name}</div>
            
            <div className="modal-flex"> {/*Flex dentro do modal fazendo 2 colunas inteiriças*/}
              <div className='modal-pic'><SingleImage url={props.modalInfo.imgcode} display={"inline"} divsize={"100%"} size={"100%"} borderradius={"11px 11px 11px 11px"} /></div> {/*Col. 1*/}
              
              <div className='modal-techs'> {/*Col. 2*/}

              <div style={{
                display: "block",
                paddingBottom: "0.65vw",
                fontSize: "1rem",
                color: "#999999",
              }}>Tecnologias usadas:</div>

              <div className="technologies" style={{
                  paddingTop: "0.7rem",
                  paddingBottom: "0.3rem",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  columnGap: "0.7rem",
                  rowGap: "0.7rem",
              }}> 
              {props.modalInfo.technologies?.map((tec) => { 
                  return <a onClick={()=>{props.closeModal()}} href="#skills"><div className='modal-badge'><SingleImage url={tec} divsize={"100%"} size={"100%"} display={"inline-block"} badge={true} /></div></a>
              })}
              </div>

              <div className='modal-desc'>{props.modalInfo.description}</div>
              <div className='modal-git'>Repositório GitHub: <a href={`${props.modalInfo.github}`}>{props.modalInfo.name}</a></div>
              </div>

            </div>

            <div className='modal-original'>{props.modalInfo.projetoOriginal}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal