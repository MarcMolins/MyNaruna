import React from "react";
import News from "./_news.jsx";
import SocialLinkNav from "../_general/socialLinksNav.jsx";
import Credits from "../credits/credits";

import "../../css/_general/footer.css";
import "../../css/_768/footer_768.css";

function Footer() {
  return (
    <footer>
      <News />
      <section className="footerContent">
        <article className="mainFooterContent">
          <div>
            <img src={require("../../material/logo.png")} alt="MyNaruna" className="logoFooter" />
            <nav className="footerNav">
              <a href="/#">Quienes somos</a>
                <hr className="navSeparator" />
              <a href="/#">Preguntas frecuentes</a>
                <hr className="navSeparator" />
              <a href="/#">Contacta con nosotros</a>
            </nav>
            <SocialLinkNav />
          </div>
        </article>
        <Credits />
      </section>
    </footer>
  )
}

export default Footer;