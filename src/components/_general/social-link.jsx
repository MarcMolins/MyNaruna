import React from "react";
import "../../css/_general/_socialLink.css"

function SocialLink(props) {
  return (
    <a href={props.link} rel="noopener noreferer" className="socialLink">
      <img src={require(`../../material/icons/${props.rrss}.png`)} alt={props.rrss} className="socialIconLink"/>
    </a>
  )
}

export default SocialLink