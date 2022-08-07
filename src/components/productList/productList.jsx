import React from "react";
import dataProducts from "../../data/data-products.json";
import "../../css/_general/listItem.css"

function Products() {
  return (
    dataProducts.map(data => {
      return (
        <li>
          <div className="prodItemList">
            <div className="imgProdBlock">
              <img src={require(`../../material/products/${data.photo}`)} className="imgProdList" alt={data.productName}/>
            </div>
            <div className="prodItemInformation">
              <a href="/#">{data.brand}</a>
              <h4>{data.productName}</h4>
              <div className="prodItemBottom">
                <div className="prodItemPriceBlock">
                  <h6>{data.price}€</h6>
                  <h5>{data.discountPrice}€</h5>
                </div>
                <input type="button" value="Ver producto" />
              </div>
            </div>
          </div>
        </li>
      )
    })
  )

}

export default Products;