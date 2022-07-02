import React from 'react'
//Imagens dos sites:
import site1 from "../assets/images/arpia.png"
import site2 from "../assets/images/arpia.png"
//Badges:
import js from "../assets/images/js-mask.png"
import node from "../assets/images/node-mask.png"
import react from "../assets/images/react-mask.png"
import html from "../assets/images/html-mask.png"
import css from "../assets/images/css-mask.png"
import ts from "../assets/images/ts-mask.png"
import api from "../assets/images/js-mask.png"

function SingleImage({url, size, divsize, display}) {
  
  return (
    <div
    style={{
        display: `${display}`,
        padding: '0px',
        margin: '0px',
    }}
    >
        {(url === "site1") ? <img style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={site1} alt="site"/> : null}
        {(url === "site2") ? <img style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={site2} alt="site"/> : null}
        {(url === "spas") ? <img style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={site2} alt="site"/> : null}
        {(url === "statics") ? <img style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={site2} alt="site"/> : null}
        {(url === "other") ? <img style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={site2} alt="site"/> : null}
        {(url === "other2") ? <img style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={site2} alt="site"/> : null}
        {(url === "other3") ? <img style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={site2} alt="site"/> : null}
        {/*Badges:*/}
        {(url === "js") ? <img style={{width: `${size}` }} src={js} alt="site"/> : null}
        {(url === "node") ? <img style={{width: `${size}` }} src={node} alt="site"/> : null}
        {(url === "react") ? <img style={{width: `${size}`}} src={react} alt="site"/> : null}
        {(url === "html") ? <img style={{width: `${size}` }} src={html} alt="site"/> : null}
        {(url === "css") ? <img style={{width: `${size}` }} src={css} alt="site"/> : null}
        {(url === "ts") ? <img style={{width: `${size}` }} src={ts} alt="site"/> : null}
        {(url === "api") ? <img style={{width: `${size}` }} src={api} alt="site"/> : null}
    </div>
  )
}

export default SingleImage