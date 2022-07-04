import React from 'react'
//Imagens dos sites:
import personalitypipe from "../assets/images/arpia.png"
import possomisturar from "../assets/images/arpia.png"
import cryptozap from "../assets/images/arpia.png"
import onechat4all from "../assets/images/arpia.png"
import mariaflor from "../assets/images/arpia.png"
import karina from "../assets/images/arpia.png"
import ohanatour from "../assets/images/arpia.png"
import erps from "../assets/images/arpia.png"
//Badges:
import js from "../assets/images/js-mask.png"
import node from "../assets/images/node-mask.png"
import react from "../assets/images/react-mask.png"
import html from "../assets/images/html-mask.png"
import css from "../assets/images/css-mask.png"
import ts from "../assets/images/ts-mask.png"
import api from "../assets/images/api.png"
//Logos:
import js_ from "../assets/images/js.png"
import node_ from "../assets/images/node.png"
import react_ from "../assets/images/react.png"
import html_ from "../assets/images/html.png"
import css_ from "../assets/images/css.png"
import ts_ from "../assets/images/ts.png"
//Social Networks Logos:
import instagram from "../assets/images/instagram.png"
import email from "../assets/images/email.png"
import github from "../assets/images/github.png"
import stackoverflow from "../assets/images/stackoverflow.png"
import linkedin from "../assets/images/linkedin.png"
import cv from "../assets/images/cv.png"
import cv_en from "../assets/images/cv-en.png"
import '../assets/css/single.css'
import '../assets/css/sections.css'

function SingleImage({url, size, divsize, display, badge, social}) {
  
  return (
    <div
    className="singleimage"
    style={{
        display: `${display}`,
        padding: '0px',
        margin: '0px',
    }}
    >
        {(url === "personalitypipe") ? <img className="sitepic" style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={personalitypipe} alt="site"/> : null}
        {(url === "possomisturar") ? <img className="sitepic" style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={possomisturar} alt="site"/> : null}
        {(url === "cryptozap") ? <img className="sitepic" style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={cryptozap} alt="site"/> : null}
        {(url === "onechat4all") ? <img className="sitepic" style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={onechat4all} alt="site"/> : null}
        {(url === "mariaflor") ? <img className="sitepic" style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={mariaflor} alt="site"/> : null}
        {(url === "karina") ? <img className="sitepic" style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={karina} alt="site"/> : null}
        {(url === "ohanatour") ? <img className="sitepic" style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={ohanatour} alt="site"/> : null}
        {(url === "erps") ? <img className="sitepic" style={{width: `${size}`, borderRadius: '10px 10px 0px 0px',}} src={erps} alt="site"/> : null}
        {/*Badges:*/}
        {(url === "js") ? <img style={{width: `${size}` }} src={js} alt="site"/> : null}
        {(url === "node") ? <img style={{width: `${size}` }} src={node} alt="site"/> : null}
        {(url === "react") ? <img style={{width: `${size}`}} src={react} alt="site"/> : null}
        {(url === "html") ? <img style={{width: `${size}` }} src={html} alt="site"/> : null}
        {(url === "css") ? <img style={{width: `${size}` }} src={css} alt="site"/> : null}
        {(url === "ts") ? <img style={{width: `${size}` }} src={ts} alt="site"/> : null}
        {(url === "api") ? <img style={{width: `${size}` }} src={api} alt="site"/> : null}
        {/*Programming Logos:*/}
            {(url === "js_") ? <img style={{width: `${size}` }} src={js_} alt="site"/> : null}
            {(url === "node_") ? <img style={{width: `${size}` }} src={node_} alt="site"/> : null}
            {(url === "react_") ? <img style={{width: `${size}`}} src={react_} alt="site"/> : null}
            {(url === "html_") ? <img style={{width: `${size}` }} src={html_} alt="site"/> : null}
            {(url === "css_") ? <img style={{width: `${size}` }} src={css_} alt="site"/> : null}
            {(url === "ts_") ? <img style={{width: `${size}` }} src={ts_} alt="site"/> : null}
        {/*Social Network Logos:*/}
            {(url === "instagram") ? <img style={{width: `${size}` }} src={instagram} alt="site"/> : null}
            {(url === "email") ? <img style={{width: `${size}` }} src={email} alt="email"/> : null}
            {(url === "github") ? <img style={{width: `${size}` }} src={github} alt="site"/> : null}
            {(url === "stackoverflow") ? <img style={{width: `${size}` }} src={stackoverflow} alt="site"/> : null}
            {(url === "linkedin") ? <img style={{width: `${size}` }} src={linkedin} alt="site"/> : null}
            {(url === "cv") ? <img style={{width: `${size}`}} src={cv} alt="site"/> : null}
            {(url === "cv-en") ? <img style={{width: `${size}`}} src={cv_en} alt="site"/> : null}
        {social ? <div style={{position: "absolute"}}>
            <span className="warning">
                {(url === "email") ? <label id="email">Copie: <input type="text" name="email" value="guilhermepedrov@gmail.com"/></label> : null}
                {(url === "cv") ? <div>Clique para download</div> : null}
                {(url === "cv-en") ? <div>Clique para download</div> : null}
                </span>
        </div> : null}
        {badge ? <div style={{position: "absolute"}}>
            <span className="tooltip">
                {(url === "js") ? <div>JavaScript | <a href="#" style={{color: "#00CCBE"}}>Docs</a></div> : null}
                {(url === "node") ? <div>Node.js | <a href="#" style={{color: "#00CCBE"}}>Docs</a></div> : null}
                {(url === "react") ? <div>React | <a href="#" style={{color: "#00CCBE"}}>Docs</a></div> : null}
                {(url === "html") ? <div>HTML | <a href="#" style={{color: "#00CCBE"}}>Docs</a></div> : null}
                {(url === "css") ? <div>CSS | <a href="#" style={{color: "#00CCBE"}}>Docs</a></div> : null}
                {(url === "ts") ? <div>TypeScript | <a href="#" style={{color: "#00CCBE"}}>Manual</a></div> : null}
                {(url === "api") ? <div>APIs | <a href="#" style={{color: "#00CCBE"}}>Referência</a></div> : null}
            </span>
        </div> : null}
    </div>
  )
}

export default SingleImage