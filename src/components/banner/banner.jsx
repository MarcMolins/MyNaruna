import React from "react";

import "../../css/_general/banner.css"
import "../../css/_768/banner_768.css"

function Banner(props) {
  return (
    <div className="mainBanner">
      <div className="bannerInformation">
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: props.title}} className="bannerTitle"></h2>
          <p className="bannerCopy">{props.copy}</p>
        </div>
        <input type="button" value={props.buttonText} className="bannerButton"/>
      </div>
      <img src={require(`../../material/images/${props.image}.png`)} alt="banner_image" className="bannerImg" />
    </div>
  )
}

export default Banner;