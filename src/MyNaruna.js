import React from "react";
import "./css/_general/home.css";

//import general components
import Header from "./components/header/header.jsx";
import Banner from "./components/banner/banner";
import Products from "./components/productList/productList";
import Footer from "./components/footer/footer";

function MyNaruna() {
  return (
      <React.Fragment>
        <Header />
        <main>
          <Banner
            title="Botas <br/>& Botines"
            copy="Nuestra colección de Primavera-Verano 2022 para mujer viene con muchas novedades en botines."
            image="img-banner1"
            buttonText="Comprar ahora"
          />
          <div className="homeContent">
            <section>
              <h3>Beauty, cosmetic & personal care</h3>
              <p>¡La primera web de moda y cosmética 100% sostenible y vegana en España!</p>
              <article>
                <ul className="productList">
                  <Products />
                </ul>
              </article>
            </section>
          </div>
        </main>
        <Footer />
      </React.Fragment>
  );

}

export default MyNaruna;

