import React from "react";
import InputText from "../_general/inputText";
import "../../css/_general/_news.css";
import "../../css/_768/_news_768.css";

function News() {
  return (
    <div className="newsBlock">
      <h3>Suscríbete a nuestra Newsletter</h3>
      <p className="newsSubtitle">Se el primero en conocer nuestras ofertas</p>
      <InputText
        placeholder="Introduce tu correo electronico"
        button="Enviar"
        click={() => alert('Soy el botón de suscribirse a la newsletter')}
      />
    </div>
  )
}

export default News;