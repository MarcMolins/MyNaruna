import React from "react";

function Icons(props) {
  return (
    <li>
      <a href="/#">
        <img alt={props.alt} src={require(`../../material/icons/${props.icon}.png`)} className="headerIcon" />
      </a>
    </li>
  )
}

export default Icons;