import React from "react";
import dataCategory from "../../data/data-category.json";

function CategoryLink() {

  function salesLinkColor(value){
    if(value === "Rebajas"){
      return "navLinkRed";
    }else{
      return;
    }
  }

  return(
    dataCategory.map(data => {
      return(
        <li>
          <a href={data.url} className={`navLink ${salesLinkColor(data.categoryName)}`}>
            {data.categoryName}
          </a>
        </li>
      )
    })
  )
}

export default CategoryLink;