import React, {useState, useEffect} from 'react'
import SingleImage from './SingleImage'
import '../assets/css/single.css'

function SingleWork({name, type, typename, date, technologies, imgcode, github, original}) {

  const [sortedcolor, setSortedcolor] = useState()
  const [sortedbg, setBg] = useState("none")

  useEffect(() => {
    switch(type) {
        case "webapps":
            setSortedcolor("#e5e510")
        break
        case "landingpages":
            setSortedcolor("#405025")
        break
        case "spas":
            setSortedcolor("#0A1F14")
        break
        case "statics":
            setSortedcolor("#30292F")
        break
      }
  }, [])

  //O componente visual "OneWork" com seu CSS inline:
  return (
    <div className="singlework"> {/*Container*/}

        <div //Image
        style={{
            padding: '0px',
            margin: '0px',
        }}>
        <SingleImage url={imgcode} size={"100%"} />
        </div>

        <div //Content Wrapper
        style={{
            padding: '15px 20px 20px 21px'
        }}
        >

        <div //Typename
        style={{
            display: "inline-block",
            paddingTop: "2px",
            paddingBottom: "9px",
            color: `${sortedcolor}`,
            textTransform: "uppercase",
            fontWeight: "700",
            fontSize: '0.8rem',
        }}>
        <div style={{textDecoration: "none", color:"inherit"}}>{typename}</div>
        </div>

        <div //Name
        style={{
            paddingBottom: "9px",
            fontSize: "1.465rem",
        }}>
        <a href="#" style={{textDecoration: "none", color:"inherit"}}>{name}</a>
        </div>

        <div //Technologies
        style={{
            paddingTop: "0.4rem",
            display: "block",
            fontSize: "0.75rem",
            color: "#999999",
        }}
        >
        Tecnologias usadas:
        </div>
        <div className="technologies"
        style={{
            paddingTop: "0.7rem",
            paddingBottom: "0.3rem",
            display: "flex",
            columnGap: "0.6rem",
        }}
        >
        {technologies.map((tec) => { 
            return <a href="#skills"><SingleImage url={tec} size={"1.7rem"} display={"inline"} badge={true} /></a>
            })}            
        </div>

        </div> {/*Fim do content wrapper*/}

    </div> //Fim do componente
  )
}

export default SingleWork