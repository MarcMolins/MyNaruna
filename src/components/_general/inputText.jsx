import React from "react";
import "../../css/_general/_inputText.css"

function InputText(props){
    return(
        <form className="searchBlock">
            <input type="text" placeholder={props.placeholder} className="searchInput"/>
            <input type="button" value={props.button} className="searchButton" onClick={props.click}/>
        </form>
    )
}

export default InputText;