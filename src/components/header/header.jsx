import React from "react";
import Icons from "./_icons.jsx";
import CategoryLink from "./_categorylink.jsx";
import InputText from "../_general/inputText.jsx";

//import Header stylesheets
import "../../css/_general/header.css";
import "../../css/_768/header_768.css";

function Header() {  
  return (
    <header>
      <div>
        <div className="headerTop">
          <h1>
            <img src={require("../../material/logo.png")} alt="MyNaruna" className="headerLogo"/>
          </h1>
          <InputText
            placeholder="Escribe lo que quieres buscar"
            button="Buscar"
            click={() => alert('Soy el botón de busqueda')}
          />
          <ul>
            <Icons alt="aboutUs" icon="about" />
            <Icons alt="contact" icon="contact" />
            <Icons alt="shopingCart" icon="cart" />
          </ul>
        </div>
        <nav>
          <ul>
            <CategoryLink />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;